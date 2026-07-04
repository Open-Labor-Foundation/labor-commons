#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const repoRoot = process.cwd();
const groundTruthPath = path.join(repoRoot, "data", "catalog-ground-truth.json");
const overlayDbPath = path.join(repoRoot, "data", "catalogs", "industry_overlay_catalog.sqlite");
const buildQueueCsvPath = path.join(repoRoot, "data", "catalog-build-queue.csv");
const outputDbPath = path.join(repoRoot, "data", "catalogs", "backlog.sqlite");

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        index += 1;
        continue;
      }
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current);
  return cells;
}

function parseCsv(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

function sqlLiteral(value) {
  if (value === null || value === undefined) {
    return "NULL";
  }
  if (typeof value === "number") {
    return String(value);
  }
  return `'${String(value).replaceAll("'", "''")}'`;
}

function runSql(dbPath, sql) {
  const tmpFile = path.join(
    "/tmp",
    `_backlog_sql_${process.pid}_${Date.now()}_${Math.random().toString(36).slice(2)}.sql`
  );
  fs.writeFileSync(tmpFile, sql, "utf8");
  try {
    return execFileSync("sqlite3", [dbPath, "-init", "/dev/null"], {
      input: fs.readFileSync(tmpFile),
      encoding: "utf8"
    });
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function queryJson(dbPath, sql) {
  const raw = execFileSync("sqlite3", [dbPath, "-json", sql], { encoding: "utf8" }).trim();
  return raw ? JSON.parse(raw) : [];
}

if (!fs.existsSync(groundTruthPath)) {
  console.error(`Missing ${path.relative(repoRoot, groundTruthPath)} — run scan-catalog-ground-truth.mjs first.`);
  process.exit(1);
}

const groundTruth = JSON.parse(fs.readFileSync(groundTruthPath, "utf8"));
const groundTruthByKey = new Map(
  groundTruth.map((entry) => [`${entry.section_slug}::${entry.agent_slug}`, entry])
);

const overlayRows = queryJson(
  overlayDbPath,
  "select industry_slug as section_slug, industry as section_name, agent_slug, agent_name, what_it_does, status as legacy_status, source_file from industry_overlay_agents;"
).map((row) => ({ ...row, track: "industry-overlay" }));

const buildQueueRows = parseCsv(buildQueueCsvPath).map((row) => ({
  track: "build-track",
  section_slug: row.domain_slug,
  section_name: row.domain_name,
  agent_slug: row.agent_slug,
  agent_name: row.agent_name,
  what_it_does: null,
  legacy_status: row.status,
  source_file: "labor-commons/data/catalog-build-queue.csv"
}));

const allRows = [...overlayRows, ...buildQueueRows];

const seen = new Set();
const deduped = [];
for (const row of allRows) {
  const key = `${row.track}::${row.section_slug}::${row.agent_slug}`;
  if (seen.has(key)) {
    continue;
  }
  seen.add(key);
  deduped.push(row);
}

let builtCount = 0;
const finalRows = deduped.map((row) => {
  const groundTruthEntry = groundTruthByKey.get(`${row.section_slug}::${row.agent_slug}`);
  const status = groundTruthEntry?.has_spec_yaml ? "built" : "planned";
  if (status === "built") {
    builtCount += 1;
  }
  return {
    ...row,
    status,
    spec_path: groundTruthEntry?.has_spec_yaml ? groundTruthEntry.spec_path : null
  };
});

fs.mkdirSync(path.dirname(outputDbPath), { recursive: true });
fs.rmSync(outputDbPath, { force: true });

runSql(
  outputDbPath,
  `
create table backlog_items (
  id integer primary key,
  track text not null,
  section_slug text not null,
  section_name text,
  agent_slug text not null,
  agent_name text not null,
  what_it_does text,
  status text not null,
  spec_path text,
  source_file text,
  legacy_status text,
  wave text,
  github_issue_number integer,
  github_issue_state text,
  pr_number integer,
  merged_at text,
  created_at text default (datetime('now')),
  unique(track, section_slug, agent_slug)
);
create index idx_backlog_status on backlog_items(status);
create index idx_backlog_track on backlog_items(track);
create index idx_backlog_source_file on backlog_items(source_file);
`
);

const insertStatements = finalRows
  .map(
    (row) => `insert into backlog_items
  (track, section_slug, section_name, agent_slug, agent_name, what_it_does, status, spec_path, source_file, legacy_status)
values
  (${sqlLiteral(row.track)}, ${sqlLiteral(row.section_slug)}, ${sqlLiteral(row.section_name)}, ${sqlLiteral(row.agent_slug)}, ${sqlLiteral(row.agent_name)}, ${sqlLiteral(row.what_it_does)}, ${sqlLiteral(row.status)}, ${sqlLiteral(row.spec_path)}, ${sqlLiteral(row.source_file)}, ${sqlLiteral(row.legacy_status)});`
  )
  .join("\n");

runSql(outputDbPath, insertStatements);

console.log(`Wrote ${finalRows.length} rows to ${path.relative(repoRoot, outputDbPath)}.`);
console.log(`  industry-overlay: ${deduped.filter((r) => r.track === "industry-overlay").length} rows`);
console.log(`  build-track: ${deduped.filter((r) => r.track === "build-track").length} rows`);
console.log(`  built (per filesystem scan): ${builtCount}`);
console.log(`  planned: ${finalRows.length - builtCount}`);

console.log("\nReconciliation vs legacy status columns:");
for (const track of ["industry-overlay", "build-track"]) {
  const trackRows = finalRows.filter((r) => r.track === track);
  const legacyBuiltLike = trackRows.filter((r) =>
    ["built", "market-ready", "validated", "deployable"].includes(String(r.legacy_status))
  ).length;
  const scanBuilt = trackRows.filter((r) => r.status === "built").length;
  console.log(
    `  ${track}: legacy claimed ~${legacyBuiltLike} built-like vs filesystem scan confirms ${scanBuilt} built (of ${trackRows.length})`
  );
}
