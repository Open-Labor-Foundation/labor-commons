#!/usr/bin/env node
//
// Scores healthcare/domain-vocabulary term density across metadata, scope,
// and purpose -- not just knowledge_baseline.authority_sources (that's
// validate-source-coherence.mjs, TASK-01). Written for FINDING-06 of the
// 2026-07-28 OLF remediation brief round 2: a record can have healthcare
// boundary text sitting behind correctly-swapped hospitality sources and
// pass validate-source-coherence.mjs clean. That's the worst failure mode
// this catalog can produce -- silent, and blessed by CI.
//
// Design mirrors TASK-01's regulator-family table: a data-driven list of
// "domain vocabularies" (a term list plus the overlay sections where that
// vocabulary is expected), not a one-off health special case, so a future
// vocabulary is a new table entry, not new scoring logic. Health is the one
// concretely-evidenced instance (round 2's own corpus-wide term-density
// scan: two overlays at median 55-65, every other non-health overlay at or
// near 0, healthcare itself as a working positive control at 60).

import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";

const OVERLAY_ROOT = "naics-overlays";
// Wide margin on both sides of the calibration table (non-health overlays:
// 0-8; hospitality-and-travel/home-services: 55-96; healthcare: 60-97).
const FLAG_THRESHOLD = 15;

const DOMAIN_VOCABULARIES = [
  {
    name: "healthcare",
    // Same term list as the brief's own corpus-wide calibration scan --
    // reusing it exactly rather than approximating keeps this validator's
    // output consistent with the numbers the threshold was calibrated
    // against.
    pattern: new RegExp(
      "\\b(patient|clinical|care delivery|healthcare|payer|phi|hipaa|medicare|" +
      "medicaid|encounter|ehr|emr|discharge|denial|remittance|prior authorization)\\b",
      "gi"
    ),
    permittedOverlays: new Set([
      "healthcare",
      "hospitals-and-health-systems",
      "ambulatory-and-physician-services",
      "behavioral-health-and-community-care",
      "elder-care-and-disability-services",
      // Not a false-positive-prone default -- verified by reading the one
      // record it affects (retail-patient-services-specialist): 26 of its
      // 32 hits are literally "patient" (medical-cannabis dispensary
      // patients under state MMAP programs, real vocabulary for this
      // industry), not healthcare boundary text wearing this overlay's
      // label. No hits on cms/hhs/medicare-specific terms beyond a few
      // legitimate "clinical" references.
      "cannabis-and-controlled-substance-operations"
    ])
  }
];

function scoreDomainCoherence(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  let doc;
  try {
    doc = parseYaml(source);
  } catch {
    // Not this validator's job to report parse errors -- validate-spec-yaml.mjs does.
    return { issues: [] };
  }
  if (!doc || typeof doc !== "object") {
    return { issues: [] };
  }

  const overlaysIndex = filePath.split(path.sep).findLastIndex((part) => part === OVERLAY_ROOT);
  const section = overlaysIndex >= 0 ? filePath.split(path.sep)[overlaysIndex + 1] : null;
  if (!section) {
    return { issues: [] };
  }

  const text = [doc.metadata, doc.scope, doc.purpose]
    .map((part) => (part === undefined ? "" : stringifyYaml(part)))
    .join("\n");

  const issues = [];
  for (const vocab of DOMAIN_VOCABULARIES) {
    if (vocab.permittedOverlays.has(section)) {
      continue;
    }
    const matches = text.match(vocab.pattern) ?? [];
    if (matches.length > FLAG_THRESHOLD) {
      const counts = matches.reduce((acc, term) => {
        const key = term.toLowerCase();
        acc[key] = (acc[key] ?? 0) + 1;
        return acc;
      }, {});
      const topTerms = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([term, count]) => `${term}×${count}`)
        .join(", ");
      issues.push(
        `${matches.length} ${vocab.name}-vocabulary term hits across metadata/scope/purpose ` +
        `(threshold ${FLAG_THRESHOLD}; top terms: ${topTerms}), but "${section}" is not a permitted ` +
        `overlay for this vocabulary. This looks like boundary-text contamination, not just a ` +
        "sources defect -- verify metadata.specialty_boundary, purpose, and scope genuinely describe " +
        "this record's own industry, not a different one wearing this overlay's label."
      );
    }
  }

  return { issues };
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

function main() {
  const args = process.argv.slice(2).filter((file) => file.endsWith("spec.yaml"));
  const targets = args.length > 0
    ? args
    : findAllSpecYamlFiles(path.join(process.cwd(), "catalog", OVERLAY_ROOT));

  if (targets.length === 0) {
    console.log("No spec.yaml files to check.");
    return;
  }

  let failures = 0;
  for (const file of targets) {
    if (!fs.existsSync(file) || !file.split(path.sep).includes(OVERLAY_ROOT)) {
      continue;
    }
    const { issues } = scoreDomainCoherence(file);
    if (issues.length > 0) {
      failures += 1;
      console.error(`FAIL ${file}`);
      for (const issue of issues) {
        console.error(`  - ${issue}`);
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} record(s) failed domain-coherence check.`);
    process.exitCode = 1;
    return;
  }
  console.log(`${targets.length} spec.yaml file(s) passed domain-coherence check.`);
}

main();
