#!/usr/bin/env node
//
// Checks that every knowledge_baseline.authority_sources[].location URL cited
// across the catalog actually resolves. The two coherence validators
// (validate-source-coherence.mjs, validate-domain-coherence.mjs) only confirm
// a cited source is *topically appropriate* for its overlay -- neither one
// confirms the URL *resolves*.
//
// Round-3 correction: the original single-HEAD-request, boolean-ok checker
// conflated bot-management responses, transient network failure, and
// self-inflicted rate limiting with genuine fabrication (see git history for
// the full writeup -- two confirmed false positives, one confirmed genuine
// fabrication, and a status-code distribution that only makes sense as
// checker-methodology noise). All actual liveness logic now lives in
// ../lib/url-liveness.mjs, imported here, not reimplemented.
//
// Two modes:
//   node validate-source-liveness.mjs <file...>        changed-file mode (CI, per-PR):
//                                                        checks only the URLs cited in
//                                                        the given spec.yaml files, exits
//                                                        nonzero on any `dead` one. A
//                                                        single-run `dead` verdict from
//                                                        classifyUrl already reflects
//                                                        HEAD+GET agreement (or an
//                                                        authoritative 410) -- a brand-new
//                                                        fabricated citation in a PR does
//                                                        not need multi-run history to be
//                                                        caught. `unreachable` never blocks.
//   node validate-source-liveness.mjs --full-corpus     full-corpus mode (scheduled, not
//                                                        per-PR): checks every unique URL
//                                                        cited anywhere in the catalog once
//                                                        (deduped), merges each result
//                                                        against the previously committed
//                                                        baseline's per-URL state to track
//                                                        consecutive_dead_runs, and writes
//                                                        a schema-v2 report. Never exits
//                                                        nonzero -- this mode is a baseline
//                                                        capture, not a merge gate; only a
//                                                        URL dead across 3 consecutive runs
//                                                        (or a single authoritative 410)
//                                                        is reported as dead_confirmed.

import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";
import { classifyUrl, checkUrlsScheduled, mergeLivenessState, isDeadConfirmed, STATE } from "../lib/url-liveness.mjs";

const OVERLAY_DIR_NAMES = ["naics-overlays", "function-overlays"];
const REPORT_SCHEMA_VERSION = 2;

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
    const results = await checkUrlsScheduled(uniqueUrls);
    const deadEntries = entries.filter((entry) => results.get(entry.url)?.state === STATE.DEAD);
    const unreachableEntries = entries.filter((entry) => results.get(entry.url)?.state === STATE.UNREACHABLE);
    if (deadEntries.length > 0) {
      anyIssues = true;
      console.log(`FAIL ${filePath}`);
      for (const entry of deadEntries) {
        const result = results.get(entry.url);
        console.log(`  - knowledge_baseline.authority_sources[${entry.sourceId ?? "?"}] cites a dead URL (HTTP ${result.status}${result.reason ? `, ${result.reason}` : ""}): ${entry.url}`);
      }
    } else {
      console.log(`${filePath}: all ${uniqueUrls.length} authority_sources URL(s) live or indeterminate (none confirmed dead)`);
    }
    for (const entry of unreachableEntries) {
      const result = results.get(entry.url);
      const detail = result.error ? result.error : `HTTP ${result.status}`;
      console.log(`  - NOTE (non-blocking) knowledge_baseline.authority_sources[${entry.sourceId ?? "?"}] is unreachable this run (${detail}), not confirmed dead: ${entry.url}`);
    }
  }
  if (anyIssues) {
    console.log("\nOne or more spec.yaml files cite a confirmed-dead authority_sources URL.");
    process.exit(1);
  }
}

function loadPreviousBaseline(outPath) {
  if (!fs.existsSync(outPath)) {
    return new Map();
  }
  try {
    const previous = JSON.parse(fs.readFileSync(outPath, "utf8"));
    if (previous.schema_version !== REPORT_SCHEMA_VERSION || !Array.isArray(previous.urls)) {
      return new Map();
    }
    return new Map(previous.urls.map((record) => [record.url, record]));
  } catch {
    return new Map();
  }
}

async function runFullCorpusMode(outPath) {
  // Captured once, reused for every merge and for the report's generated_at --
  // never recomputed after the (potentially hours-long) scan completes.
  const runStartIso = new Date().toISOString();

  const catalogRoot = path.join(process.cwd(), "catalog");
  const specFiles = findAllSpecFiles(catalogRoot);
  console.log(`Scanning ${specFiles.length} spec.yaml files for authority_sources URLs...`);

  const allEntries = [];
  for (const filePath of specFiles) {
    const { entries } = extractAuthoritySources(filePath);
    allEntries.push(...entries);
  }
  const uniqueUrls = [...new Set(allEntries.map((entry) => entry.url))].sort();
  console.log(`Found ${allEntries.length} authority_sources citations, ${uniqueUrls.length} unique URLs. Checking...`);

  const previousBaseline = loadPreviousBaseline(outPath);

  const results = await checkUrlsScheduled(uniqueUrls, {
    onProgress: (done, total) => {
      if (done % 250 === 0 || done === total) {
        console.log(`  ${done}/${total} checked`);
      }
    }
  });

  const urlRecords = uniqueUrls.map((url) => {
    const result = results.get(url);
    const merged = mergeLivenessState(previousBaseline.get(url), result, runStartIso);
    return { url, ...merged };
  });

  const deadConfirmedUrls = new Set(urlRecords.filter(isDeadConfirmed).map((record) => record.url));
  const unreachableUrls = new Set(
    urlRecords.filter((record) => record.state === STATE.UNREACHABLE).map((record) => record.url)
  );

  const deadConfirmedCitations = allEntries
    .filter((entry) => deadConfirmedUrls.has(entry.url))
    .map((entry) => {
      const record = urlRecords.find((r) => r.url === entry.url);
      return {
        file: path.relative(process.cwd(), entry.filePath),
        source_id: entry.sourceId,
        url: entry.url,
        consecutive_dead_runs: record.consecutive_dead_runs
      };
    });

  const unreachableCitations = allEntries
    .filter((entry) => unreachableUrls.has(entry.url))
    .map((entry) => {
      const record = urlRecords.find((r) => r.url === entry.url);
      return {
        file: path.relative(process.cwd(), entry.filePath),
        source_id: entry.sourceId,
        url: entry.url,
        reason: record.error ?? (record.last_status != null ? `HTTP ${record.last_status}` : "unknown")
      };
    });

  const report = {
    schema_version: REPORT_SCHEMA_VERSION,
    generated_at: runStartIso,
    run_id: process.env.GITHUB_RUN_ID ?? `local-${runStartIso}`,
    totals: {
      spec_files: specFiles.length,
      citations: allEntries.length,
      unique_urls: uniqueUrls.length,
      urls_live: urlRecords.filter((r) => r.state === STATE.LIVE).length,
      urls_unreachable: urlRecords.filter((r) => r.state === STATE.UNREACHABLE).length,
      urls_dead_candidate: urlRecords.filter((r) => r.state === STATE.DEAD && !isDeadConfirmed(r)).length,
      urls_dead_confirmed: deadConfirmedUrls.size
    },
    urls: urlRecords,
    dead_confirmed_citations: deadConfirmedCitations,
    unreachable_citations: unreachableCitations
  };

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");

  console.log(`\n${report.totals.urls_live}/${uniqueUrls.length} live.`);
  console.log(`${report.totals.urls_dead_candidate} dead-candidate (< 3 consecutive runs, not yet confirmed).`);
  console.log(`${report.totals.urls_dead_confirmed} dead-confirmed (>= 3 consecutive runs, or authoritative 410).`);
  console.log(`${report.totals.urls_unreachable} unreachable this run (indeterminate, not blocking).`);
  console.log(`Report written to ${outPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const fullCorpusIndex = args.indexOf("--full-corpus");
  const outFlagIndex = args.indexOf("--out");
  const outPath = outFlagIndex !== -1 && args[outFlagIndex + 1]
    ? args[outFlagIndex + 1]
    : path.join("reports", "generated", "source-liveness-baseline.json");

  if (fullCorpusIndex !== -1) {
    await runFullCorpusMode(outPath);
    return;
  }
  const files = args.filter((arg) => arg.endsWith(".yaml") || arg.endsWith(".yml"));
  if (files.length === 0) {
    // No file args (bare `npm run validate:liveness`, or validate:all's chain)
    // -- default to a full-corpus report rather than silently doing nothing.
    // Still non-blocking (see runFullCorpusMode): unlike the other three
    // validators, a full-corpus liveness scan is deliberately not a merge
    // gate (full-corpus runs on a schedule, not per-PR -- pre-existing link
    // rot shouldn't block unrelated PRs). Per-PR gating happens through the
    // explicit changed-file args the CI job passes.
    await runFullCorpusMode(outPath);
    return;
  }
  await runChangedFileMode(files);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
