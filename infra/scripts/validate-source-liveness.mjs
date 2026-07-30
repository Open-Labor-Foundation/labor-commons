#!/usr/bin/env node
//
// Checks that every knowledge_baseline.authority_sources[].location URL cited
// across the catalog actually resolves. The two coherence validators
// (validate-source-coherence.mjs, validate-domain-coherence.mjs) only confirm
// a cited source is *topically appropriate* for its overlay -- neither one
// confirms the URL *resolves*. A dead link that reads as topically correct is
// worse than a missing one: it looks verified when it isn't.
//
// Two modes:
//   node validate-source-liveness.mjs <file...>        changed-file mode (CI, per-PR):
//                                                        checks only the URLs cited in
//                                                        the given spec.yaml files, exits
//                                                        nonzero on any dead one.
//   node validate-source-liveness.mjs --full-corpus     full-corpus mode (scheduled, not
//                                                        per-PR): checks every unique URL
//                                                        cited anywhere in the catalog once
//                                                        (cached, not once per citing file)
//                                                        and writes a report. Always exits 0
//                                                        -- this mode is a baseline capture,
//                                                        not a merge gate.

import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";

const URL_CHECK_TIMEOUT_MS = 8000;
// Some .gov sites (and their WAFs) are just slow, not blocked -- give them
// more time before writing them off as unreachable rather than skipping them
// or timing out prematurely. This is a longer timeout, not an exemption: a
// .gov URL that's genuinely dead still fails after GOV_URL_CHECK_TIMEOUT_MS.
const GOV_URL_CHECK_TIMEOUT_MS = 20000;
const URL_CHECK_CONCURRENCY = 8;
const OVERLAY_DIR_NAMES = ["naics-overlays", "function-overlays"];

function isGovHost(url) {
  try {
    return new URL(url).hostname.endsWith(".gov");
  } catch {
    return false;
  }
}

// Same reachability contract as validate-spec-yaml.mjs's checkUrlReachable:
// HEAD first, retry with GET on 405/401/403, and treat 401/403 as reachable
// (blanket bot-blocking WAFs on real authoritative domains -- confirmed this
// round on both cdc.gov and fda.gov/food/** from CI specifically -- are not
// the fabrication signal this check exists to catch; 404/410/DNS failures are).
async function checkUrlReachable(url) {
  const timeoutMs = isGovHost(url) ? GOV_URL_CHECK_TIMEOUT_MS : URL_CHECK_TIMEOUT_MS;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 (compatible; labor-commons-spec-validator/1.0)" }
    });
    if (response.status === 405 || response.status === 401 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 (compatible; labor-commons-spec-validator/1.0)" }
      });
    }
    const status = response.status;
    const ok = (status >= 200 && status < 400) || status === 401 || status === 403;
    return { ok, status };
  } catch (error) {
    return { ok: false, status: null, error: error.message };
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrlsInBatches(urls, { onProgress } = {}) {
  const results = new Map();
  const queue = [...urls];
  let done = 0;
  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      results.set(url, await checkUrlReachable(url));
      done += 1;
      onProgress?.(done, urls.length);
    }
  }
  await Promise.all(Array.from({ length: Math.min(URL_CHECK_CONCURRENCY, urls.length) }, worker));
  return results;
}

// Returns [{ url, sourceId, filePath }] for every authority_sources entry
// with a location, regardless of whether it duplicates a URL cited elsewhere.
function extractAuthoritySources(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const document = parseDocument(source);
  if (document.errors.length > 0) {
    return { entries: [], parseError: document.errors[0].message };
  }
  const knowledgeBaseline = document.get("knowledge_baseline");
  const authoritySources = knowledgeBaseline?.get?.("authority_sources");
  const items = authoritySources?.items ?? (Array.isArray(authoritySources) ? authoritySources : []);
  const entries = [];
  for (const item of items) {
    const location = item?.get?.("location");
    const sourceId = item?.get?.("source_id");
    if (typeof location === "string" && /^https?:\/\//.test(location.trim())) {
      entries.push({ url: location.trim(), sourceId: sourceId ?? null, filePath });
    }
  }
  return { entries, parseError: null };
}

function findAllSpecFiles(catalogRoot) {
  const files = [];
  for (const overlayName of OVERLAY_DIR_NAMES) {
    const overlayRoot = path.join(catalogRoot, overlayName);
    if (!fs.existsSync(overlayRoot)) continue;
    for (const sectionSlug of fs.readdirSync(overlayRoot)) {
      const sectionPath = path.join(overlayRoot, sectionSlug);
      if (!fs.statSync(sectionPath).isDirectory()) continue;
      for (const agentSlug of fs.readdirSync(sectionPath)) {
        const specPath = path.join(sectionPath, agentSlug, "spec.yaml");
        if (fs.existsSync(specPath)) {
          files.push(specPath);
        }
      }
    }
  }
  return files;
}

async function runChangedFileMode(files) {
  let anyIssues = false;
  for (const filePath of files) {
    const { entries, parseError } = extractAuthoritySources(filePath);
    if (parseError) {
      console.log(`SKIP ${filePath} (parse error, leave to validate-spec-yaml.mjs: ${parseError})`);
      continue;
    }
    if (entries.length === 0) {
      console.log(`${filePath}: no http(s) authority_sources locations to check`);
      continue;
    }
    const uniqueUrls = [...new Set(entries.map((entry) => entry.url))];
    const results = await checkUrlsInBatches(uniqueUrls);
    const deadEntries = entries.filter((entry) => !results.get(entry.url)?.ok);
    if (deadEntries.length > 0) {
      anyIssues = true;
      console.log(`FAIL ${filePath}`);
      for (const entry of deadEntries) {
        const result = results.get(entry.url);
        const detail = result?.error ? result.error : `HTTP ${result?.status}`;
        console.log(`  - knowledge_baseline.authority_sources[${entry.sourceId ?? "?"}] cites an unreachable URL (${detail}): ${entry.url}`);
      }
    } else {
      console.log(`${filePath}: all ${uniqueUrls.length} authority_sources URL(s) reachable`);
    }
  }
  if (anyIssues) {
    console.log("\nOne or more spec.yaml files cite an unreachable authority_sources URL.");
    process.exit(1);
  }
}

async function runFullCorpusMode(outPath) {
  const catalogRoot = path.join(process.cwd(), "catalog");
  const specFiles = findAllSpecFiles(catalogRoot);
  console.log(`Scanning ${specFiles.length} spec.yaml files for authority_sources URLs...`);

  const allEntries = [];
  for (const filePath of specFiles) {
    const { entries } = extractAuthoritySources(filePath);
    allEntries.push(...entries);
  }
  const uniqueUrls = [...new Set(allEntries.map((entry) => entry.url))];
  console.log(`Found ${allEntries.length} authority_sources citations, ${uniqueUrls.length} unique URLs. Checking...`);

  const results = await checkUrlsInBatches(uniqueUrls, {
    onProgress: (done, total) => {
      if (done % 250 === 0 || done === total) {
        console.log(`  ${done}/${total} checked`);
      }
    }
  });

  const deadUrls = uniqueUrls.filter((url) => !results.get(url)?.ok);
  const deadEntries = allEntries.filter((entry) => deadUrls.includes(entry.url));

  const report = {
    generated_at: new Date().toISOString(),
    total_spec_files: specFiles.length,
    total_citations: allEntries.length,
    unique_urls: uniqueUrls.length,
    dead_urls: deadUrls.length,
    dead_citations: deadEntries.map((entry) => ({
      file: path.relative(process.cwd(), entry.filePath),
      source_id: entry.sourceId,
      url: entry.url,
      status: results.get(entry.url)?.status ?? null,
      error: results.get(entry.url)?.error ?? null
    }))
  };

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");

  console.log(`\n${uniqueUrls.length - deadUrls.length}/${uniqueUrls.length} unique URLs reachable.`);
  console.log(`${deadUrls.length} dead URL(s) across ${deadEntries.length} citation(s).`);
  console.log(`Report written to ${outPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const fullCorpusIndex = args.indexOf("--full-corpus");
  if (fullCorpusIndex !== -1) {
    const outFlagIndex = args.indexOf("--out");
    const outPath = outFlagIndex !== -1 && args[outFlagIndex + 1]
      ? args[outFlagIndex + 1]
      : path.join("reports", "generated", "source-liveness-baseline.json");
    await runFullCorpusMode(outPath);
    return;
  }
  const files = args.filter((arg) => arg.endsWith(".yaml") || arg.endsWith(".yml"));
  if (files.length === 0) {
    console.log("No spec.yaml files given and --full-corpus not set -- nothing to check.");
    return;
  }
  await runChangedFileMode(files);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
