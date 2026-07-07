#!/usr/bin/env node
//
// Validates catalog/naics-overlays/*/*/spec.yaml against the real schema
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
// floors are only a hard safety net against egregiously thin output: they sit
// at roughly the catalog p5 so they reject the genuinely-deficient bottom few
// percent WITHOUT false-rejecting the ~18% of existing accepted specs that sit
// between p5 and the median.
const MIN_BOUNDARY_CHARS = 500;
const MIN_AUTHORITY_SOURCES = 6;

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
    if (response.status === 405 || response.status === 403) {
      // Some sites reject HEAD outright; retry with GET before concluding failure.
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 (compatible; labor-commons-spec-validator/1.0)" }
      });
    }
    return { ok: response.status >= 200 && response.status < 400, status: response.status };
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

async function validateSpecYaml(filePath, { checkUrls = true } = {}) {
  const issues = [];
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

  return issues;
}

async function main() {
  const args = process.argv.slice(2);
  const skipUrlCheck = args.includes("--no-url-check");
  const files = args
    .filter((arg) => arg !== "--no-url-check")
    .filter((file) => file.endsWith("spec.yaml"));
  const targets = files.length > 0
    ? files
    : findAllSpecYamlFiles(path.join(process.cwd(), "catalog", "naics-overlays"));

  if (targets.length === 0) {
    console.log("No spec.yaml files to validate.");
    return;
  }

  let failures = 0;
  for (const file of targets) {
    if (!fs.existsSync(file)) {
      continue;
    }
    const issues = await validateSpecYaml(file, { checkUrls: !skipUrlCheck });
    if (issues.length > 0) {
      failures += 1;
      console.error(`FAIL ${file}`);
      for (const issue of issues) {
        console.error(`  - ${issue}`);
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} of ${targets.length} spec.yaml file(s) failed validation.`);
    process.exitCode = 1;
    return;
  }
  console.log(`${targets.length} spec.yaml file(s) passed validation.`);
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
