#!/usr/bin/env node
//
// Validates catalog/{naics-overlays,function-overlays}/*/*/spec.yaml against the real schema
// commons-board and commons-crew consume (schema_version '1.0', kind
// agent_definition, metadata.specialty_boundary, purpose.summary,
// scope.supported_tasks/common_inputs/expected_outputs). This exists because
// no prior version of this pipeline ever checked generated spec.yaml files
// against the real consumer schema -- validation.commands only linted
// markdown. Fixes must be verified with this script, not just markdownlint.

import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";

const REQUIRED_SCHEMA_VERSION = "1.0";
const REQUIRED_KIND = "agent_definition";
// Depth backstops. The catalog quality *target* (median specialty_boundary
// ~1,300 chars, median 9 authority_sources) is driven by the delivery contract
// in .github/copilot-instructions.md, which the model follows. These validator
// These thresholds match the delivery contract in .github/copilot-instructions.md:
// specialty_boundary >= 900 chars (catalog median ~1,300), authority_sources >= 8
// (catalog median 9). They are the hard floor — specs below these are rejected.
const MIN_BOUNDARY_CHARS = 900;
const MIN_AUTHORITY_SOURCES = 8;

function readNonEmptyString(record, key) {
  const value = record?.get?.(key);
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function readNonEmptyArray(record, key) {
  const value = record?.get?.(key);
  const items = value?.items ?? (Array.isArray(value) ? value : null);
  return Array.isArray(items) && items.length > 0 ? items : null;
}

const URL_CHECK_TIMEOUT_MS = 8000;
const URL_CHECK_CONCURRENCY = 5;

// The coder has no live web-search tool -- it can only curl a URL it already
// recalls from training data, so a hallucinated citation is a structural risk
// regardless of model. This is the one check in this script that catches that
// directly instead of hoping the content looks plausible: actually request
// each cited URL and confirm it resolves. Observed live during the labor-commons
// remediation session: a generated spec.yaml cited a real-looking SEC page and
// a real-looking FINRA rule number that both returned 404.
async function checkUrlReachable(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), URL_CHECK_TIMEOUT_MS);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 (compatible; labor-commons-spec-validator/1.0)" }
    });
    if (response.status === 405 || response.status === 401 || response.status === 403) {
      // Some sites reject HEAD outright; retry with GET before concluding failure.
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 (compatible; labor-commons-spec-validator/1.0)" }
      });
    }
    // 401/403 mean the host recognized the request and forbade it -- common for
    // authorities that blanket-block datacenter IPs/bots (FASB and SEC return 403
    // for their entire site, root included). That is NOT the fabrication signal
    // this check exists to catch: a made-up path returns 404. Treat auth-blocked
    // as reachable so real citations to bot-blocking regulators aren't rejected;
    // keep failing 404/410 and DNS/connection errors, which are the real tells.
    const status = response.status;
    const ok = (status >= 200 && status < 400) || status === 401 || status === 403;
    return { ok, status };
  } catch (error) {
    return { ok: false, status: null, error: error.message };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkUrlsInBatches(urls) {
  const results = new Map();
  const queue = [...urls];
  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      results.set(url, await checkUrlReachable(url));
    }
  }
  await Promise.all(Array.from({ length: Math.min(URL_CHECK_CONCURRENCY, urls.length) }, worker));
  return results;
}

// Collect all specialist slugs that exist in the catalog. Used to verify that
// adjacent_specialties entries reference real sibling specialists, not
// fabricated slugs. Two overlay axes exist side by side under catalog/ --
// naics-overlays (industry-vertical) and function-overlays (generic
// corporate-function) -- adjacency can legitimately cross either axis, so
// this scans both from the shared catalog/ root rather than just the one
// the file being validated happens to live under.
const OVERLAY_DIR_NAMES = ["naics-overlays", "function-overlays"];

function collectCatalogSlugs(filePath) {
  const slugs = new Set();
  const parts = filePath.split(path.sep);
  const overlaysIndex = parts.findLastIndex((part) => OVERLAY_DIR_NAMES.includes(part));
  if (overlaysIndex < 1 || overlaysIndex + 2 >= parts.length) {
    return slugs;
  }
  const catalogDir = parts.slice(0, overlaysIndex).join(path.sep);
  for (const overlayName of OVERLAY_DIR_NAMES) {
    const catalogRoot = path.join(catalogDir, overlayName);
    if (!fs.existsSync(catalogRoot)) {
      continue;
    }
    for (const sectionSlug of fs.readdirSync(catalogRoot)) {
      const sectionPath = path.join(catalogRoot, sectionSlug);
      if (!fs.statSync(sectionPath).isDirectory()) {
        continue;
      }
      for (const agentSlug of fs.readdirSync(sectionPath)) {
        const specPath = path.join(sectionPath, agentSlug, "spec.yaml");
        if (fs.existsSync(specPath)) {
          slugs.add(agentSlug);
        }
      }
    }
  }
  return slugs;
}

async function validateSpecYaml(filePath, { checkUrls = true } = {}) {
  const issues = [];
  const warnings = [];
  const source = fs.readFileSync(filePath, "utf8");
  const document = parseDocument(source);

  for (const error of document.errors) {
    issues.push(`parse error: ${error.message}`);
  }
  if (issues.length > 0) {
    return issues;
  }

  const root = document.contents;
  const schemaVersion = root?.get?.("schema_version");
  if (String(schemaVersion) !== REQUIRED_SCHEMA_VERSION) {
    issues.push(`schema_version must be "${REQUIRED_SCHEMA_VERSION}", found ${JSON.stringify(schemaVersion)}`);
  }
  const kind = root?.get?.("kind");
  if (kind !== REQUIRED_KIND) {
    issues.push(`kind must be "${REQUIRED_KIND}", found ${JSON.stringify(kind)}`);
  }

  const metadata = root?.get?.("metadata");
  const specialtyBoundary = readNonEmptyString(metadata, "specialty_boundary");
  if (!specialtyBoundary) {
    issues.push("metadata.specialty_boundary is required and must be a non-empty string");
  } else if (specialtyBoundary.trim().length < MIN_BOUNDARY_CHARS) {
    // Catalog median is ~1,300 chars; a one/two-sentence boundary reads as
    // generic. This floor (below the catalog p25 of 922) catches egregiously
    // thin boundaries without false-rejecting reasonable ones.
    issues.push(
      `metadata.specialty_boundary is too thin (${specialtyBoundary.trim().length} chars; require >= ${MIN_BOUNDARY_CHARS}). ` +
      "Describe what the lane owns (workflows, systems of record, decisions) AND, explicitly, what it refuses/hands off."
    );
  }

  const purpose = root?.get?.("purpose");
  if (!readNonEmptyString(purpose, "summary")) {
    issues.push("purpose.summary is required and must be a non-empty string");
  }

  const scope = root?.get?.("scope");
  for (const key of ["supported_tasks", "common_inputs", "expected_outputs"]) {
    if (!readNonEmptyArray(scope, key)) {
      issues.push(`scope.${key} is required and must be a non-empty list`);
    }
  }

  // knowledge_baseline is required, non-empty, and backed by real research --
  // this is universal across the existing catalog (651/651 have a populated
  // knowledge_baseline; 650/651 specifically use authority_sources). A
  // specialist with no research baseline at all is exactly the generic,
  // ungrounded output this check exists to catch.
  const knowledgeBaseline = root?.get?.("knowledge_baseline");
  const knowledgeBaselineKeys = knowledgeBaseline?.items ?? [];
  if (!Array.isArray(knowledgeBaselineKeys) || knowledgeBaselineKeys.length === 0) {
    issues.push("knowledge_baseline is required and must not be empty -- specialists must be grounded in real research, not generic assumptions");
  } else {
    const authoritySources = knowledgeBaseline?.get?.("authority_sources");
    if (authoritySources !== undefined) {
      const sourceEntries = readNonEmptyArray(knowledgeBaseline, "authority_sources");
      if (!sourceEntries) {
        issues.push("knowledge_baseline.authority_sources is present but empty -- cite real, named authoritative sources or omit the key entirely");
      } else {
        if (sourceEntries.length < MIN_AUTHORITY_SOURCES) {
          // Catalog median is 9, p25 is 8. Too few cited sources is a hallmark
          // of thin, ungrounded generation.
          issues.push(
            `knowledge_baseline.authority_sources has only ${sourceEntries.length} source(s); require >= ${MIN_AUTHORITY_SOURCES} ` +
            "real, topically-authoritative sources for this lane (catalog median is 9)."
          );
        }
        // Catch the `url:`-instead-of-`location:` drift specifically. The catalog
        // standard is `location:` (6375 uses vs 0 of `url`); the reachability
        // check below only reads `location`, so a source that carries its URL
        // under `url` both breaks the commons-board/commons-crew consumers and
        // silently false-passes reachability. Flag any source that has an http
        // `url` value but no http `location`. (Sources may legitimately carry a
        // non-URL `location`, e.g. an internal package-baseline path, so we do
        // NOT require every location to be a URL -- only that a real URL, when
        // present, lives under `location`.)
        sourceEntries.forEach((entry, index) => {
          const location = entry?.get?.("location");
          const url = entry?.get?.("url");
          const locationIsHttp = typeof location === "string" && /^https?:\/\//.test(location);
          const urlIsHttp = typeof url === "string" && /^https?:\/\//.test(url);
          if (urlIsHttp && !locationIsHttp) {
            issues.push(`knowledge_baseline.authority_sources[${index}] puts its URL under \`url:\` -- the catalog field is \`location:\` (commons-board/commons-crew read \`location\`, and the reachability check only sees \`location\`).`);
          }
        });
        if (checkUrls) {
          const urls = sourceEntries
            .map((entry) => entry?.get?.("location"))
            .filter((url) => typeof url === "string" && /^https?:\/\//.test(url));
          const results = await checkUrlsInBatches(urls);
          for (const [url, result] of results) {
            if (!result.ok) {
              const detail = result.error ? result.error : `HTTP ${result.status}`;
              issues.push(`knowledge_baseline.authority_sources cites an unreachable URL (${detail}): ${url}`);
            }
          }
        }
      }
    }
  }

  // adjacent_specialties is required (present in 86% of the catalog): a
  // top-level list of at least 3 real sibling specialist slugs. The coder
  // has been observed inventing slugs that don't exist in the catalog (e.g.
  // "safety-security-specialist" in accommodation-and-travel-services where
  // no such specialist exists). The count check is a hard failure; the
  // slug-existence check is a warning because the catalog is still being
  // built (560 specs pending) and many referenced slugs will exist once
  // those specs are generated.
  const adjacentSpecialties = readNonEmptyArray(root, "adjacent_specialties");
  if (!adjacentSpecialties) {
    issues.push("adjacent_specialties is required and must be a non-empty list of at least 3 real sibling specialist slugs");
  } else {
    const MIN_ADJACENT = 3;
    const adjacentSlugs = adjacentSpecialties.map((entry) => {
      const value = entry?.valueOf?.() ?? entry;
      return typeof value === "string" ? value : String(value ?? "");
    }).filter((s) => s.length > 0);
    if (adjacentSlugs.length < MIN_ADJACENT) {
      issues.push(
        `adjacent_specialties has only ${adjacentSlugs.length} entr${adjacentSlugs.length === 1 ? "y" : "ies"}; require >= ${MIN_ADJACENT} real sibling specialist slugs`
      );
    }
    const catalogSlugs = collectCatalogSlugs(filePath);
    if (catalogSlugs.size > 0) {
      const selfSlug = readNonEmptyString(metadata, "slug");
      for (const slug of adjacentSlugs) {
        if (slug === selfSlug) {
          issues.push(`adjacent_specialties references the specialist's own slug "${slug}" -- it must reference OTHER sibling specialists`);
        } else if (!catalogSlugs.has(slug)) {
          warnings.push(`adjacent_specialties references "${slug}" which does not exist in the catalog -- verify this is a real sibling slug (catalog is still being built)`);
        }
      }
    }
  }

  return { issues, warnings };
}

async function main() {
  const args = process.argv.slice(2);
  const skipUrlCheck = args.includes("--no-url-check");
  const files = args
    .filter((arg) => arg !== "--no-url-check")
    .filter((file) => file.endsWith("spec.yaml"));
  const targets = files.length > 0
    ? files
    : OVERLAY_DIR_NAMES.flatMap((name) => findAllSpecYamlFiles(path.join(process.cwd(), "catalog", name)));

  if (targets.length === 0) {
    console.log("No spec.yaml files to validate.");
    return;
  }

  let failures = 0;
  let warningsCount = 0;
  for (const file of targets) {
    if (!fs.existsSync(file)) {
      continue;
    }
    const { issues, warnings } = await validateSpecYaml(file, { checkUrls: !skipUrlCheck });
    if (issues.length > 0) {
      failures += 1;
      console.error(`FAIL ${file}`);
      for (const issue of issues) {
        console.error(`  - ${issue}`);
      }
    } else if (warnings.length > 0) {
      console.warn(`WARN ${file}`);
      for (const warning of warnings) {
        console.warn(`  - ${warning}`);
      }
    }
    warningsCount += warnings.length;
  }

  if (failures > 0) {
    console.error(`\n${failures} of ${targets.length} spec.yaml file(s) failed validation.`);
    process.exitCode = 1;
    return;
  }
  if (warningsCount > 0) {
    console.log(`${targets.length} spec.yaml file(s) passed validation (${warningsCount} warning(s)).`);
  } else {
    console.log(`${targets.length} spec.yaml file(s) passed validation.`);
  }
}

function findAllSpecYamlFiles(root) {
  const results = [];
  if (!fs.existsSync(root)) {
    return results;
  }
  for (const sectionSlug of fs.readdirSync(root)) {
    const sectionPath = path.join(root, sectionSlug);
    if (!fs.statSync(sectionPath).isDirectory()) {
      continue;
    }
    for (const agentSlug of fs.readdirSync(sectionPath)) {
      const specPath = path.join(sectionPath, agentSlug, "spec.yaml");
      if (fs.existsSync(specPath)) {
        results.push(specPath);
      }
    }
  }
  return results;
}

main();
