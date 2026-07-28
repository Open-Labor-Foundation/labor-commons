#!/usr/bin/env node
//
// Checks knowledge_baseline.authority_sources domains against the record's
// industry overlay (catalog/naics-overlays/{section}/{slug}/spec.yaml). Written
// for FINDING-03 of the 2026-07-27 OLF remediation brief: a bad generation
// batch cited federal healthcare regulators (cms.gov, hhs.gov, healthit.gov)
// for hospitality-and-travel and home-services-and-field-consumer-services
// specialists -- e.g. a hotel guest-services specialist citing the HIPAA
// Eligibility Transaction System. validate-spec-yaml.mjs enforces an 8-source
// floor but has no topical relevance check; this fills that gap.
//
// Design (per the brief's implementation notes): a data-driven table of
// "regulator families" -- a family is a set of domains plus the overlay
// sections where citing them is expected/legitimate. Health is the one
// concretely-evidenced family; the table exists so a future family (finance,
// transportation, etc.) is a new entry, not new matching logic. A record is
// flagged when >30% of its authority_sources belong to a family whose
// permitted overlays do not include this record's own overlay section.
//
// Scope: catalog/naics-overlays only. function-overlays specialists (finance,
// legal-and-compliance, etc.) are not tied to one industry -- the same
// function can legitimately serve a healthcare client or a hospitality
// client, so "is this overlay section permitted to cite this family" doesn't
// apply the same way. No evidence of function-overlays contamination was
// found either (see the corpus scan this script's dev notes are based on).

import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";

const OVERLAY_ROOT = "naics-overlays";
const FLAG_THRESHOLD = 0.30;

// The brief describes the permitted set as "healthcare, behavioral-health,
// elder-care, and social-services overlays." No catalog/naics-overlays
// section is literally named "social-services" -- omitted rather than
// guessing a mapping. The other three map to five real overlay directories:
// healthcare and behavioral-health/elder-care are each split across more than
// one directory in this catalog (healthcare into healthcare/hospitals-and-
// health-systems/ambulatory-and-physician-services).
const REGULATOR_FAMILIES = [
  {
    name: "federal-health-regulator",
    // cms.gov/healthit.gov (+ subdomains) are health-specific agencies --
    // any subdomain is in-family. hhs.gov itself is deliberately NOT a blanket
    // suffix match: HHS's Administration for Children and Families (acf.hhs.gov,
    // headstart.gov, childcare.gov) runs Head Start/CCDF child-care assistance,
    // which is unrelated to clinical/payer healthcare and legitimately cited by
    // child-care-and-family-services records. Only the bare hhs.gov host and
    // oig.hhs.gov (HHS's Office of Inspector General, healthcare fraud/compliance
    // enforcement) are treated as health-specific; a corpus-wide scan confirmed
    // no other hhs.gov subdomain is cited by any of the actually-contaminated
    // records, and acf.hhs.gov/headstart.gov/childcare.gov citations belong
    // entirely to legitimate child-care-and-family-services records.
    domainSuffixes: ["cms.gov", "healthit.gov"],
    exactHosts: ["hhs.gov", "www.hhs.gov", "oig.hhs.gov"],
    permittedOverlays: new Set([
      "healthcare",
      "hospitals-and-health-systems",
      "ambulatory-and-physician-services",
      "behavioral-health-and-community-care",
      "elder-care-and-disability-services"
    ])
  }
];

function domainMatchesFamily(domain, family) {
  if (family.exactHosts?.includes(domain)) {
    return true;
  }
  return (family.domainSuffixes ?? []).some(
    (suffix) => domain === suffix || domain.endsWith(`.${suffix}`)
  );
}

function extractHost(location) {
  try {
    return new URL(location).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function checkSourceCoherence(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const document = parseDocument(source);
  if (document.errors.length > 0) {
    // Not this validator's job to report parse errors -- validate-spec-yaml.mjs
    // already does, and running both against a broken file would double-report.
    return { issues: [] };
  }

  const root = document.contents;
  const overlaysIndex = filePath.split(path.sep).findLastIndex((part) => part === OVERLAY_ROOT);
  const section = overlaysIndex >= 0 ? filePath.split(path.sep)[overlaysIndex + 1] : null;
  if (!section) {
    return { issues: [] };
  }

  const knowledgeBaseline = root?.get?.("knowledge_baseline");
  const authoritySources = knowledgeBaseline?.get?.("authority_sources");
  const sourceEntries = authoritySources?.items ?? (Array.isArray(authoritySources) ? authoritySources : []);
  const total = sourceEntries.length;
  if (total === 0) {
    return { issues: [] };
  }

  const issues = [];
  for (const family of REGULATOR_FAMILIES) {
    if (family.permittedOverlays.has(section)) {
      continue;
    }
    const matchingDomains = [];
    let matchCount = 0;
    for (const entry of sourceEntries) {
      const location = entry?.get?.("location") ?? entry?.get?.("url");
      const domain = typeof location === "string" ? extractHost(location) : null;
      if (domain && domainMatchesFamily(domain, family)) {
        matchCount += 1;
        matchingDomains.push(domain);
      }
    }
    const fraction = matchCount / total;
    if (fraction > FLAG_THRESHOLD) {
      const uniqueDomains = [...new Set(matchingDomains)].join(", ");
      issues.push(
        `${matchCount}/${total} (${Math.round(fraction * 100)}%) of knowledge_baseline.authority_sources are ` +
        `${family.name} sources (${uniqueDomains}), but "${section}" is not a permitted overlay for this family. ` +
        "This looks like cross-domain source contamination (see FINDING-03) -- verify these sources are genuinely " +
        "authoritative for this lane, not carried over from an unrelated industry."
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
    const { issues } = checkSourceCoherence(file);
    if (issues.length > 0) {
      failures += 1;
      console.error(`FAIL ${file}`);
      for (const issue of issues) {
        console.error(`  - ${issue}`);
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} record(s) failed source-coherence check.`);
    process.exitCode = 1;
    return;
  }
  console.log(`${targets.length} spec.yaml file(s) passed source-coherence check.`);
}

main();
