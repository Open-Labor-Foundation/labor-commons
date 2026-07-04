#!/usr/bin/env node
/**
 * Adds 8 platform meta-agent specialists to:
 *   - industry_overlay_catalog.sqlite under information-software-and-digital-media
 *   - agent_catalog.sqlite under platform-meta-agents (7 missing; readiness-and-evidence already present)
 *
 * Run from labor-commons root: node data/add-platform-meta-agent-overlays.mjs
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const OVERLAY_DB = path.join(repoRoot, "data/catalogs/industry_overlay_catalog.sqlite");
const AGENT_DB   = path.join(repoRoot, "data/catalogs/agent_catalog.sqlite");

function exec(db, sql) {
  const tmp = `/tmp/_meta_agent_${Date.now()}.sql`;
  fs.writeFileSync(tmp, sql, "utf8");
  try {
    execSync(`sqlite3 "${db}" < "${tmp}"`, { stdio: "pipe" });
  } finally {
    fs.unlinkSync(tmp);
  }
}

function query(db, sql) {
  const tmp = `/tmp/_meta_agent_q_${Date.now()}.sql`;
  fs.writeFileSync(tmp, sql, "utf8");
  try {
    return execSync(`sqlite3 "${db}" < "${tmp}"`, { encoding: "utf8" }).trim();
  } finally {
    fs.unlinkSync(tmp);
  }
}

// ── Meta-agent definitions ─────────────────────────────────────────────────
const META_AGENTS = [
  {
    slug: "best-practices-curation-specialist",
    name: "Best practices curation specialist",
    what_it_does: "Retrieves, normalizes, and updates authoritative best-practice sources for specialist knowledge baselines",
  },
  {
    slug: "evaluation-design-specialist",
    name: "Evaluation design specialist",
    what_it_does: "Designs evaluation scenarios, coverage rubrics, and quality validation suites for specialist packages",
  },
  {
    slug: "readiness-and-evidence-specialist",
    name: "Readiness and evidence specialist",
    what_it_does: "Packages readiness evidence and validates market-ready delivery status for specialist specs",
  },
  {
    slug: "deployment-package-specialist",
    name: "Deployment package specialist",
    what_it_does: "Builds deployment notes, runtime profiles, and operational packaging for specialist delivery",
  },
  {
    slug: "commercialization-and-packaging-specialist",
    name: "Commercialization and packaging specialist",
    what_it_does: "Guides commercial positioning, subscription model, and market-ready packaging for specialist offerings",
  },
  {
    slug: "authority-source-policy-specialist",
    name: "Authority source policy specialist",
    what_it_does: "Normalizes source freshness schedules, decay policies, and knowledge authority for specialist baselines",
  },
  {
    slug: "specialty-boundary-and-routing-specialist",
    name: "Specialty boundary and routing specialist",
    what_it_does: "Reviews boundary conflicts, adjacent-specialty routing maps, and handoff clarity for specialist definitions",
  },
  {
    slug: "agent-package-scaffolding-specialist",
    name: "Agent package scaffolding specialist",
    what_it_does: "Validates package structure, file completeness, and scaffold compliance for specialist packages",
  },
];

const INDUSTRY        = "Information, Software, And Digital Media";
const INDUSTRY_SLUG   = "information-software-and-digital-media";
const TARGET_COUNT    = 16;
const OVERLAY_SOURCE  = "labor-commons/functional-domain-specialists.md";

// ── 1. industry_overlay_catalog inserts ───────────────────────────────────
console.log("=== industry_overlay_catalog.sqlite ===");

let overlayAdded = 0;
let overlaySkipped = 0;

for (const agent of META_AGENTS) {
  const exists = query(OVERLAY_DB,
    `SELECT COUNT(*) FROM industry_overlay_agents WHERE agent_slug = '${agent.slug}';`
  );
  if (exists !== "0") {
    console.log(`  skip (exists): ${agent.slug}`);
    overlaySkipped++;
    continue;
  }

  exec(OVERLAY_DB, `
INSERT INTO industry_overlay_agents
  (industry, industry_slug, target_count, agent_name, agent_slug, what_it_does, status, source_file)
VALUES
  ('${INDUSTRY}', '${INDUSTRY_SLUG}', ${TARGET_COUNT},
   '${agent.name.replace(/'/g, "''")}', '${agent.slug}',
   '${agent.what_it_does.replace(/'/g, "''")}',
   'cataloged', '${OVERLAY_SOURCE}');
`);
  console.log(`  added: ${agent.slug}`);
  overlayAdded++;
}

console.log(`  overlay: ${overlayAdded} added, ${overlaySkipped} skipped\n`);

// ── 2. agent_catalog inserts (skip readiness-and-evidence, already present) ─
console.log("=== agent_catalog.sqlite ===");

const SECTION_NAME = "Platform Meta Agents";
const SECTION_SLUG = "platform-meta-agents";
const CATALOG_FAMILY      = "IT";
const CATALOG_FAMILY_SLUG = "it";

let catalogAdded = 0;
let catalogSkipped = 0;

for (const agent of META_AGENTS) {
  const exists = query(AGENT_DB,
    `SELECT COUNT(*) FROM agents WHERE agent_slug = '${agent.slug}';`
  );
  if (exists !== "0") {
    console.log(`  skip (exists): ${agent.slug}`);
    catalogSkipped++;
    continue;
  }

  const rowKey = `${CATALOG_FAMILY_SLUG}::${SECTION_SLUG}::${agent.slug}`;

  exec(AGENT_DB, `
INSERT INTO agents
  (catalog_family, catalog_family_slug, section_name, section_slug,
   agent_name, agent_slug, row_key, what_it_does,
   creation_status, catalog_status, queue_status, readiness_state, issue_state,
   validation_profile, build_wave, priority,
   materialized, specialization_score, regulatory_score,
   automation_fit_score, coordination_load_score,
   package_path, source_file)
VALUES
  ('${CATALOG_FAMILY}', '${CATALOG_FAMILY_SLUG}', '${SECTION_NAME}', '${SECTION_SLUG}',
   '${agent.name.replace(/'/g, "''")}', '${agent.slug}', '${rowKey}',
   '${agent.what_it_does.replace(/'/g, "''")}',
   'cataloged', 'cataloged', NULL, NULL, NULL,
   'standard', NULL, 'medium',
   0, 3, 1, 4, 3,
   NULL, '${OVERLAY_SOURCE}');
`);
  console.log(`  added: ${agent.slug}`);
  catalogAdded++;
}

console.log(`  catalog: ${catalogAdded} added, ${catalogSkipped} skipped\n`);

// ── 3. Verify ─────────────────────────────────────────────────────────────
console.log("=== verification ===");
const overlayCount = query(OVERLAY_DB,
  `SELECT COUNT(*) FROM industry_overlay_agents
   WHERE industry_slug = '${INDUSTRY_SLUG}'
     AND agent_slug IN (${META_AGENTS.map(a => `'${a.slug}'`).join(",")});`
);
const catalogCount = query(AGENT_DB,
  `SELECT COUNT(*) FROM agents
   WHERE section_slug = '${SECTION_SLUG}'
     AND agent_slug IN (${META_AGENTS.map(a => `'${a.slug}'`).join(",")});`
);
console.log(`  overlay rows for 8 agents: ${overlayCount} (expected 8)`);
console.log(`  catalog rows for 8 agents: ${catalogCount} (expected 8)`);
