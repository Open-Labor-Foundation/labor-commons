#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

import { enrichQueueRow, inferValidationProfile } from "./generate-industry-overlay-build-queue.mjs";
import { buildBody, buildSemanticRequirements } from "./create-industry-overlay-spec-issues.mjs";

const repoRoot = process.cwd();
const dbPath = path.join(repoRoot, "data", "catalogs", "backlog.sqlite");
const repoSlug = "Open-Labor-Foundation/labor-commons";

function getArg(name, fallback = null) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const dryRun = process.argv.includes("--dry-run");
const track = getArg("--track", "industry-overlay");
const sourceFilter = getArg("--source");
const count = Number(getArg("--count", "25"));
const wave = getArg("--wave", new Date().toISOString().slice(0, 10));

function queryJson(sql) {
  const raw = execFileSync("sqlite3", [dbPath, "-json", sql], { encoding: "utf8" }).trim();
  return raw ? JSON.parse(raw) : [];
}

function runSql(sql) {
  const tmpFile = path.join(
    "/tmp",
    `_wave_sql_${process.pid}_${Date.now()}_${Math.random().toString(36).slice(2)}.sql`
  );
  fs.writeFileSync(tmpFile, sql, "utf8");
  try {
    execFileSync("sqlite3", [dbPath], { input: fs.readFileSync(tmpFile), encoding: "utf8" });
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

if (!fs.existsSync(dbPath)) {
  console.error(`Missing ${path.relative(repoRoot, dbPath)} — run build-unified-backlog.mjs first.`);
  process.exit(1);
}

const whereClauses = [
  "status = 'planned'",
  "github_issue_number IS NULL",
  `track = ${sqlString(track)}`
];
if (sourceFilter) {
  whereClauses.push(`source_file LIKE ${sqlString(`%${sourceFilter}%`)}`);
}

const candidates = queryJson(
  `select * from backlog_items where ${whereClauses.join(" and ")} order by id limit ${Number(count)};`
);

if (candidates.length === 0) {
  console.log("No matching backlog rows found (already loaded, or filters too narrow).");
  process.exit(0);
}

console.log(`${dryRun ? "Dry run: would create" : "Creating"} ${candidates.length} issue(s) for track=${track}${sourceFilter ? ` source~=${sourceFilter}` : ""}.`);

let createdCount = 0;
for (const item of candidates) {
  const row = enrichQueueRow({
    industry_slug: item.section_slug,
    industry_name: item.section_name,
    package_section_slug: item.section_slug,
    agent_slug: item.agent_slug,
    agent_name: item.agent_name,
    what_it_does: item.what_it_does,
    delivery_target: "market-ready",
    runtime_strategy: "spec_only",
    priority: "medium",
    validation_profile: inferValidationProfile(item.agent_name)
  });

  const title = `spec-pack: ${row.industry_slug}::${row.agent_slug}`;
  const semantic = buildSemanticRequirements(row);
  const body = buildBody(row, semantic);

  if (dryRun) {
    console.log(`\n--- ${title} ---`);
    console.log(`workflow phase group: ${semantic.workflowPhaseGroup.id}`);
    console.log(`industry profile: ${semantic.domainProfile.id}`);
    console.log(`body length: ${body.length} chars`);
    createdCount += 1;
    continue;
  }

  const url = execFileSync(
    "gh",
    ["issue", "create", "--repo", repoSlug, "--title", title, "--body", body],
    { cwd: repoRoot, encoding: "utf8", maxBuffer: 1024 * 1024 * 40 }
  ).trim();

  const issueNumber = Number(url.split("/").pop());
  runSql(
    `update backlog_items set github_issue_number = ${issueNumber}, github_issue_state = 'open', wave = ${sqlString(wave)} where id = ${item.id};`
  );

  console.log(`Created #${issueNumber}: ${title} (${url})`);
  createdCount += 1;
}

console.log(`\n${dryRun ? "Prepared" : "Created"} ${createdCount} of ${candidates.length} candidate issue(s).`);
