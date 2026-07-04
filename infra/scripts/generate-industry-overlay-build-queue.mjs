#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = process.cwd();
const sourcePath = path.join(repoRoot, "industry_overlay_catalogs.md");
const outputPath = path.join(repoRoot, "data", "industry-overlay-build-queue.csv");
const definitionRulesPath = path.join(repoRoot, "governance", "specialist-definition-rules.json");
const queueEnrichmentPath = path.join(repoRoot, "governance", "spec-pack-queue-enrichment.json");
const laneTemplatesPath = path.join(repoRoot, "governance", "industry-overlay-lane-templates.json");
const rowOverridesPath = path.join(repoRoot, "governance", "industry-overlay-row-overrides.json");
const definitionRules = JSON.parse(fs.readFileSync(definitionRulesPath, "utf8"));
const queueEnrichment = JSON.parse(fs.readFileSync(queueEnrichmentPath, "utf8"));
const laneTemplates = JSON.parse(fs.readFileSync(laneTemplatesPath, "utf8"));
const rowOverrides = JSON.parse(fs.readFileSync(rowOverridesPath, "utf8"));

const ignoredSections = new Set(["Catalog Status Model", "Cataloging Rule", "Summary"]);

const builtOverlayCoverage = [
  {
    industry_slug: "mining-quarrying-and-oil-and-gas",
    industry_name: "Mining, Quarrying, And Oil And Gas",
    agent_slug: "environmental-compliance-specialist",
    package_section_slug: "environmental-and-regulated-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    build_wave: "3",
  },
  {
    industry_slug: "waste-and-environmental-services",
    industry_name: "Waste And Environmental Services",
    agent_slug: "environmental-compliance-specialist",
    package_section_slug: "environmental-and-regulated-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    build_wave: "3",
  },
  {
    industry_slug: "chemicals-plastics-and-materials-manufacturing",
    industry_name: "Chemicals, Plastics, And Materials Manufacturing",
    agent_slug: "environmental-compliance-chemicals-specialist",
    package_section_slug: "chemicals-plastics-and-materials-manufacturing",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    build_wave: "3",
  },
  {
    industry_slug: "public-administration-and-tax-operations",
    industry_name: "Public Administration And Tax Operations",
    agent_slug: "permits-and-inspections-specialist",
    package_section_slug: "public-administration-and-tax-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    build_wave: "3",
  },
  {
    industry_slug: "mining-quarrying-and-oil-and-gas",
    industry_name: "Mining, Quarrying, And Oil And Gas",
    agent_slug: "environmental-permitting-and-inspections-specialist",
    agent_name: "Environmental permitting and inspections specialist",
    what_it_does: "Runs environmental permitting and inspection-readiness workflows",
    package_section_slug: "environmental-and-regulated-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    validation_profile: "strict",
    build_wave: "3",
  },
  {
    industry_slug: "waste-and-environmental-services",
    industry_name: "Waste And Environmental Services",
    agent_slug: "environmental-permitting-and-inspections-specialist",
    agent_name: "Environmental permitting and inspections specialist",
    what_it_does: "Runs environmental permitting and inspection-readiness workflows",
    package_section_slug: "environmental-and-regulated-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    validation_profile: "strict",
    build_wave: "3",
  },
  {
    industry_slug: "chemicals-plastics-and-materials-manufacturing",
    industry_name: "Chemicals, Plastics, And Materials Manufacturing",
    agent_slug: "environmental-permitting-and-inspections-specialist",
    agent_name: "Environmental permitting and inspections specialist",
    what_it_does: "Runs environmental permitting and inspection-readiness workflows",
    package_section_slug: "environmental-and-regulated-operations",
    status: "market-ready",
    readiness_state: "market-ready",
    issue_state: "market-ready",
    runtime_strategy: "build_preferred",
    source_status: "built",
    validation_profile: "strict",
    build_wave: "3",
  },
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function inferValidationProfile(agentName) {
  return ["compliance", "privacy", "safety", "quality", "regulatory", "environmental"].some((term) =>
    agentName.toLowerCase().includes(term)
  )
    ? "strict"
    : "standard";
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function normalizeText(value) {
  return String(value ?? "").trim().toLowerCase();
}

function matchesWorkflowPhase(row, rule) {
  const text = normalizeText(`${row.agent_name} ${row.agent_slug} ${row.what_it_does}`);
  const summaryText = normalizeText(row.what_it_does);
  const suffixes = rule.match?.suffixes ?? [];
  const contains = rule.match?.contains ?? [];
  const summaryStartsWith = rule.match?.summary_starts_with ?? [];

  if (suffixes.some((suffix) => normalizeText(row.agent_name).endsWith(normalizeText(suffix)))) {
    return true;
  }

  if (contains.some((fragment) => text.includes(normalizeText(fragment)))) {
    return true;
  }

  if (summaryStartsWith.some((fragment) => summaryText.startsWith(normalizeText(fragment)))) {
    return true;
  }

  return false;
}

function matchesDomain(row, domainProfile) {
  const match = domainProfile.match ?? {};
  const industrySlug = normalizeText(row.industry_slug);
  const industryName = normalizeText(row.industry_name);
  const agentName = normalizeText(row.agent_name);

  if ((match.industry_slugs ?? []).some((value) => industrySlug === normalizeText(value))) {
    return true;
  }

  if ((match.industry_slug_contains ?? []).some((value) => industrySlug.includes(normalizeText(value)))) {
    return true;
  }

  if ((match.industry_name_contains ?? []).some((value) => industryName.includes(normalizeText(value)))) {
    return true;
  }

  if ((match.agent_name_contains ?? []).some((value) => agentName.includes(normalizeText(value)))) {
    return true;
  }

  return false;
}

export function resolveWorkflowPhaseGroup(row) {
  const fallback = definitionRules.workflow_phase_groups.find((rule) => rule.match?.fallback);
  const deferredExecution = definitionRules.workflow_phase_groups.find(
    (rule) => rule.id === "execution-processing-and-fulfillment"
  );
  const primaryGroups = definitionRules.workflow_phase_groups.filter(
    (rule) => !rule.match?.fallback && rule.id !== "execution-processing-and-fulfillment"
  );

  return (
    primaryGroups.find((rule) => matchesWorkflowPhase(row, rule)) ??
    (deferredExecution && matchesWorkflowPhase(row, deferredExecution) ? deferredExecution : null) ??
    fallback
  );
}

export function resolveDomainProfile(row) {
  const fallback = definitionRules.domain_profiles.find((rule) => rule.match?.fallback);
  return definitionRules.domain_profiles.find((rule) => matchesDomain(row, rule)) ?? fallback;
}

function uniqueStrings(values) {
  const seen = new Set();
  const result = [];
  for (const value of values) {
    const normalizedValue = String(value ?? "").trim();
    if (!normalizedValue || seen.has(normalizedValue)) {
      continue;
    }
    seen.add(normalizedValue);
    result.push(normalizedValue);
  }
  return result;
}

function appendUnique(baseValues, extraValues) {
  return uniqueStrings([...(baseValues ?? []), ...(extraValues ?? [])]);
}

function formatTemplate(template, row, workflowPhaseGroup, domainProfile) {
  const context = {
    agent_name: row.agent_name,
    industry_name: row.industry_name,
    workflow_phase_label: workflowPhaseGroup.display_name.toLowerCase(),
    domain_profile_label: domainProfile.display_name.toLowerCase(),
    what_it_does: row.what_it_does,
  };

  return String(template ?? "").replace(/\{([a-z_]+)\}/g, (_, key) => context[key] ?? "");
}

function expandTemplates(values, row, workflowPhaseGroup, domainProfile) {
  return (values ?? []).map((value) => formatTemplate(value, row, workflowPhaseGroup, domainProfile));
}

function joinList(values) {
  return uniqueStrings(values).join(queueEnrichment.list_delimiter ?? " || ");
}

function resolveEnrichmentRule(collection, id) {
  return collection.find((entry) => entry.id === id) ?? {};
}

function extractSpecialtyKeywords(row) {
  const tokens = `${row.agent_slug} ${row.agent_name}`.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const stopWords = new Set([
    "specialist",
    "services",
    "service",
    "operations",
    "operation",
    "management",
    "administration",
    "workflow",
    "workflows",
    "and",
    "of",
    "for",
    "the",
    "industry",
    "business",
    "support",
    "delivery",
    "process",
    "processing",
  ]);
  return uniqueStrings(tokens.filter((token) => !stopWords.has(token))).slice(0, 6);
}

function matchesLaneTemplate(row, template) {
  const tokens = new Set(extractSpecialtyKeywords(row));
  const text = normalizeText(`${row.agent_slug} ${row.agent_name} ${row.what_it_does}`);
  const anyTokens = template.match?.any_tokens ?? [];
  const allTokens = template.match?.all_tokens ?? [];
  const contains = template.match?.contains ?? [];

  if (allTokens.length > 0 && !allTokens.every((token) => tokens.has(normalizeText(token)))) {
    return false;
  }

  if (anyTokens.length > 0 && !anyTokens.some((token) => tokens.has(normalizeText(token)))) {
    return false;
  }

  if (contains.length > 0 && !contains.some((fragment) => text.includes(normalizeText(fragment)))) {
    return false;
  }

  return anyTokens.length > 0 || allTokens.length > 0 || contains.length > 0;
}

export function resolveLaneTemplate(row) {
  return laneTemplates.lane_templates.find((template) => matchesLaneTemplate(row, template)) ?? null;
}

export function resolveDefinitionTier(row, laneTemplate, rowOverride) {
  if (rowOverride) {
    return "curated-row-override";
  }

  if (laneTemplate) {
    return "approved-lane-template";
  }

  return "needs-curation";
}

export function getRowOverride(row) {
  const key = `${row.industry_slug}::${row.agent_slug}`;
  return rowOverrides.row_overrides?.[key] ?? null;
}

export function buildOperationalBrief(row, workflowPhaseGroup, domainProfile) {
  const shared = queueEnrichment.shared ?? {};
  const workflowDefaults = resolveEnrichmentRule(queueEnrichment.workflow_phase_groups ?? [], workflowPhaseGroup.id);
  const domainDefaults = resolveEnrichmentRule(queueEnrichment.domain_profiles ?? [], domainProfile.id);

  return {
    domain_profile_id: domainProfile.id,
    domain_profile_label: domainProfile.display_name,
    primary_job_to_be_done: formatTemplate(
      workflowDefaults.primary_job_template ?? "{what_it_does}",
      row,
      workflowPhaseGroup,
      domainProfile,
    ),
    core_artifacts: joinList(expandTemplates(domainDefaults.core_artifacts ?? [], row, workflowPhaseGroup, domainProfile)),
    systems_of_record: joinList(expandTemplates(domainDefaults.systems_of_record ?? [], row, workflowPhaseGroup, domainProfile)),
    decision_types: joinList([
      ...expandTemplates(shared.decision_types ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(workflowDefaults.decision_types ?? [], row, workflowPhaseGroup, domainProfile),
    ]),
    hard_refusal_triggers: joinList([
      ...expandTemplates(shared.hard_refusal_triggers ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(workflowDefaults.hard_refusal_triggers ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(domainDefaults.hard_refusal_triggers ?? [], row, workflowPhaseGroup, domainProfile),
    ]),
    adjacent_specialists: joinList(expandTemplates(domainDefaults.adjacent_specialists ?? [], row, workflowPhaseGroup, domainProfile)),
    required_output_shapes: joinList(expandTemplates(workflowDefaults.required_output_shapes ?? [], row, workflowPhaseGroup, domainProfile)),
    must_pass_scenario_families: joinList(expandTemplates(workflowDefaults.must_pass_scenario_families ?? [], row, workflowPhaseGroup, domainProfile)),
    source_classes: joinList([
      ...expandTemplates(shared.source_classes ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(domainDefaults.source_classes ?? [], row, workflowPhaseGroup, domainProfile),
    ]),
    tenant_required_facts: joinList([
      ...expandTemplates(shared.tenant_required_facts ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(domainDefaults.tenant_required_facts ?? [], row, workflowPhaseGroup, domainProfile),
    ]),
    risk_modes: joinList(expandTemplates(domainDefaults.risk_modes ?? [], row, workflowPhaseGroup, domainProfile)),
    success_measures: joinList([
      ...expandTemplates(shared.success_measures ?? [], row, workflowPhaseGroup, domainProfile),
      ...expandTemplates(workflowDefaults.success_measures ?? [], row, workflowPhaseGroup, domainProfile),
    ]),
  };
}

function serializeOverrideValue(value) {
  if (Array.isArray(value)) {
    return joinList(value);
  }
  return value;
}

function parseJoinedList(value) {
  return String(value ?? "")
    .split(queueEnrichment.list_delimiter ?? " || ")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function applyLaneTemplate(row, operationalBrief, laneTemplate) {
  if (!laneTemplate) {
    return {
      ...operationalBrief,
      specialty_keywords: joinList(extractSpecialtyKeywords(row)),
    };
  }

  const nextOperationalBrief = { ...operationalBrief };

  if (laneTemplate.primary_job_template) {
    nextOperationalBrief.primary_job_to_be_done = formatTemplate(
      laneTemplate.primary_job_template,
      row,
      { display_name: row.workflow_phase_label ?? "" },
      { display_name: row.domain_profile_label ?? "" },
    );
  }

  for (const field of [
    "core_artifacts",
    "systems_of_record",
    "decision_types",
    "hard_refusal_triggers",
    "adjacent_specialists",
    "required_output_shapes",
    "must_pass_scenario_families",
    "source_classes",
    "tenant_required_facts",
    "risk_modes",
    "success_measures",
  ]) {
    if (!(field in laneTemplate)) {
      continue;
    }

    const merged = appendUnique(parseJoinedList(nextOperationalBrief[field]), laneTemplate[field]);
    nextOperationalBrief[field] = joinList(merged);
  }

  nextOperationalBrief.lane_template_id = laneTemplate.id;
  nextOperationalBrief.lane_template_label = laneTemplate.id.replaceAll("-", " ");
  nextOperationalBrief.specialty_keywords = joinList(extractSpecialtyKeywords(row));

  return nextOperationalBrief;
}

export function applyRowOverride(row, workflowPhaseGroup, domainProfile, operationalBrief, override) {
  if (!override) {
    return { row, workflowPhaseGroup, domainProfile, operationalBrief };
  }

  const nextRow = { ...row };
  const topLevelFields = [
    "status",
    "priority",
    "validation_profile",
    "readiness_state",
    "issue_state",
    "delivery_target",
    "runtime_strategy",
    "source_status",
    "build_wave",
    "what_it_does",
    "package_section_slug",
  ];

  for (const field of topLevelFields) {
    if (field in override) {
      nextRow[field] = override[field];
    }
  }

  let nextWorkflowPhaseGroup = workflowPhaseGroup;
  let nextDomainProfile = domainProfile;

  if (override.workflow_phase_group) {
    nextWorkflowPhaseGroup =
      definitionRules.workflow_phase_groups.find((rule) => rule.id === override.workflow_phase_group) ?? workflowPhaseGroup;
  }

  if (override.domain_profile_id) {
    nextDomainProfile =
      definitionRules.domain_profiles.find((rule) => rule.id === override.domain_profile_id) ?? domainProfile;
  }

  let nextOperationalBrief = operationalBrief;
  if (override.workflow_phase_group || override.domain_profile_id || Object.prototype.hasOwnProperty.call(override, "what_it_does")) {
    nextOperationalBrief = buildOperationalBrief(nextRow, nextWorkflowPhaseGroup, nextDomainProfile);
  }

  const operationalFields = [
    "primary_job_to_be_done",
    "core_artifacts",
    "systems_of_record",
    "decision_types",
    "hard_refusal_triggers",
    "adjacent_specialists",
    "required_output_shapes",
    "must_pass_scenario_families",
    "source_classes",
    "tenant_required_facts",
    "risk_modes",
    "success_measures",
  ];

  for (const field of operationalFields) {
    if (field in override) {
      nextOperationalBrief[field] = serializeOverrideValue(override[field]);
    }
  }

  nextOperationalBrief.domain_profile_id = nextDomainProfile.id;
  nextOperationalBrief.domain_profile_label = nextDomainProfile.display_name;
  nextOperationalBrief.specialty_keywords = nextOperationalBrief.specialty_keywords ?? joinList(extractSpecialtyKeywords(nextRow));

  return {
    row: nextRow,
    workflowPhaseGroup: nextWorkflowPhaseGroup,
    domainProfile: nextDomainProfile,
    operationalBrief: nextOperationalBrief,
  };
}

// Composed per-row enrichment pipeline, extracted so callers other than this
// script's own CLI (e.g. a wave loader sourcing rows from somewhere other
// than industry_overlay_catalogs.md) can enrich a row the same way without
// duplicating this logic.
export function enrichQueueRow(row) {
  const initialWorkflowPhaseGroup = resolveWorkflowPhaseGroup(row);
  const initialDomainProfile = resolveDomainProfile(row);
  const initialOperationalBrief = buildOperationalBrief(row, initialWorkflowPhaseGroup, initialDomainProfile);
  const laneTemplate = resolveLaneTemplate(row);
  const templatedOperationalBrief = applyLaneTemplate(
    {
      ...row,
      workflow_phase_label: initialWorkflowPhaseGroup.display_name,
      domain_profile_label: initialDomainProfile.display_name,
    },
    initialOperationalBrief,
    laneTemplate,
  );
  const resolved = applyRowOverride(
    row,
    initialWorkflowPhaseGroup,
    initialDomainProfile,
    templatedOperationalBrief,
    getRowOverride(row),
  );

  const enriched = { ...row, ...resolved.row };
  enriched.workflow_phase_group = resolved.workflowPhaseGroup.id;
  enriched.workflow_phase_label = resolved.workflowPhaseGroup.display_name;
  enriched.lane_template_id = laneTemplate?.id ?? "";
  enriched.lane_template_label = laneTemplate?.id?.replaceAll("-", " ") ?? "";
  enriched.definition_tier = resolveDefinitionTier(enriched, laneTemplate, getRowOverride(row));
  if (enriched.definition_tier === "needs-curation") {
    enriched.issue_state = "needs-curation";
  }
  Object.assign(enriched, resolved.operationalBrief);
  return enriched;
}

const isMainModule = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMainModule) {
  runCli();
}

function runCli() {
const lines = fs.readFileSync(sourcePath, "utf8").split(/\r?\n/);
const rows = [];
let section = null;
let inTable = false;

for (const line of lines) {
  if (line.startsWith("## ")) {
    section = line.slice(3).trim();
    inTable = false;
    continue;
  }

  if (!section || ignoredSections.has(section)) {
    continue;
  }

  if (line.trim() === "| Agent | What It Does |") {
    inTable = true;
    continue;
  }

  if (line.trim() === "| --- | --- |") {
    continue;
  }

  if (!inTable) {
    continue;
  }

  if (!line.trim().startsWith("|")) {
    inTable = false;
    continue;
  }

  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  if (cells.length !== 2 || cells[0] === "Agent") {
    continue;
  }

  const [agentName, whatItDoes] = cells;
  const industrySlug = slugify(section);
  const agentSlug = slugify(agentName);

  rows.push({
    catalog_family: "industry-overlay",
    industry_slug: industrySlug,
    industry_name: section,
    package_section_slug: industrySlug,
    agent_slug: agentSlug,
    agent_name: agentName,
    status: "planned",
    priority: "medium",
    validation_profile: inferValidationProfile(agentName),
    readiness_state: "not_ready",
    issue_state: "needs-spec-pack",
    delivery_target: "market-ready",
    runtime_strategy: "spec_only",
    source_status: "cataloged",
    build_wave: "",
    what_it_does: whatItDoes,
  });
}

const byKey = new Map(rows.map((row) => [`${row.industry_slug}::${row.agent_slug}`, row]));

for (const coverage of builtOverlayCoverage) {
  const key = `${coverage.industry_slug}::${coverage.agent_slug}`;
  const row = byKey.get(key);
  if (row) {
    row.package_section_slug = coverage.package_section_slug;
    row.status = coverage.status;
    row.readiness_state = coverage.readiness_state;
    row.issue_state = coverage.issue_state;
    row.runtime_strategy = coverage.runtime_strategy;
    row.source_status = coverage.source_status;
    row.build_wave = coverage.build_wave;
    row.validation_profile = coverage.validation_profile ?? row.validation_profile;
    continue;
  }

  rows.push({
    catalog_family: "industry-overlay",
    industry_slug: coverage.industry_slug,
    industry_name: coverage.industry_name,
    package_section_slug: coverage.package_section_slug,
    agent_slug: coverage.agent_slug,
    agent_name: coverage.agent_name,
    status: coverage.status,
    priority: "medium",
    validation_profile: coverage.validation_profile ?? inferValidationProfile(coverage.agent_name),
    readiness_state: coverage.readiness_state,
    issue_state: coverage.issue_state,
    delivery_target: "market-ready",
    runtime_strategy: coverage.runtime_strategy,
    source_status: coverage.source_status,
    build_wave: coverage.build_wave,
    what_it_does: coverage.what_it_does,
  });
}

for (let index = 0; index < rows.length; index += 1) {
  Object.assign(rows[index], enrichQueueRow(rows[index]));
}

rows.sort((left, right) => {
  const industryCompare = left.industry_name.localeCompare(right.industry_name);
  if (industryCompare !== 0) {
    return industryCompare;
  }
  return left.agent_name.localeCompare(right.agent_name);
});

const headers = [
  "catalog_family",
  "industry_slug",
  "industry_name",
  "package_section_slug",
  "agent_slug",
  "agent_name",
  "workflow_phase_group",
  "workflow_phase_label",
  "domain_profile_id",
  "domain_profile_label",
  "lane_template_id",
  "lane_template_label",
  "definition_tier",
  "status",
  "priority",
  "validation_profile",
  "readiness_state",
  "issue_state",
  "delivery_target",
  "runtime_strategy",
  "source_status",
  "build_wave",
  "what_it_does",
  "primary_job_to_be_done",
  "core_artifacts",
  "systems_of_record",
  "decision_types",
  "hard_refusal_triggers",
  "adjacent_specialists",
  "required_output_shapes",
  "must_pass_scenario_families",
  "source_classes",
  "tenant_required_facts",
  "risk_modes",
  "success_measures",
  "specialty_keywords",
];

const content = `${headers.join(",")}\n${rows
  .map((row) => headers.map((header) => escapeCsv(row[header])).join(","))
  .join("\n")}\n`;

fs.writeFileSync(outputPath, content);
console.log(`Wrote ${rows.length} rows to ${path.relative(repoRoot, outputPath)}.`);
}
