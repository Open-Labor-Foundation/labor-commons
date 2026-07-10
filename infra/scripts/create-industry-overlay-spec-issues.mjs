#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repoRoot = process.cwd();
const sourcePath = path.join(repoRoot, 'data', 'industry-overlay-build-queue.csv');
const outputPath = path.join(repoRoot, 'data', 'industry-overlay-issues-created.json');
const definitionRulesPath = path.join(repoRoot, 'governance', 'specialist-definition-rules.json');
const researchContractPath = path.join(repoRoot, 'governance', 'spec-pack-research-contract.json');
const dryRun = process.argv.includes('--dry-run');
const definitionRules = JSON.parse(fs.readFileSync(definitionRulesPath, 'utf8'));
const researchContract = JSON.parse(fs.readFileSync(researchContractPath, 'utf8'));

function getArg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : null;
}

function parseCsvLine(line) {
  const cells = [];
  let current = '';
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
    if (char === ',' && !inQuotes) {
      cells.push(current);
      current = '';
      continue;
    }
    current += char;
  }
  cells.push(current);
  return cells;
}

function parseCsv(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').trim().split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']));
  });
}

function inferBoundary(industryName, agentName) {
  return `Owns ${agentName.toLowerCase()} work inside the ${industryName.toLowerCase()} industry overlay. It should add industry-specific terminology, workflow, compliance, system, and evidence expectations without collapsing back into a generic functional specialist.`;
}

function normalizeText(value) {
  return String(value ?? '').trim().toLowerCase();
}

function uniqueStrings(values) {
  const seen = new Set();
  const result = [];
  for (const value of values) {
    if (!value || seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
}

function matchesRule(text, rule = {}) {
  const normalizedText = normalizeText(text);
  const suffixes = rule.suffixes ?? [];
  const contains = rule.contains ?? [];

  if (suffixes.some((suffix) => normalizedText.endsWith(normalizeText(suffix)))) {
    return true;
  }

  if (contains.some((fragment) => normalizedText.includes(normalizeText(fragment)))) {
    return true;
  }

  return false;
}

function matchesWorkflowPhaseGroup(row, rule = {}) {
  const normalizedAgentName = normalizeText(row.agent_name);
  const normalizedText = normalizeText(`${row.agent_name} ${row.agent_slug} ${row.what_it_does}`);
  const normalizedSummary = normalizeText(row.what_it_does);
  const suffixes = rule.suffixes ?? [];
  const contains = rule.contains ?? [];
  const summaryStartsWith = rule.summary_starts_with ?? [];

  if (suffixes.some((suffix) => normalizedAgentName.endsWith(normalizeText(suffix)))) {
    return true;
  }

  if (contains.some((fragment) => normalizedText.includes(normalizeText(fragment)))) {
    return true;
  }

  if (summaryStartsWith.some((fragment) => normalizedSummary.startsWith(normalizeText(fragment)))) {
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
    (rule) => rule.id === 'execution-processing-and-fulfillment'
  );
  const primaryGroups = definitionRules.workflow_phase_groups.filter(
    (rule) => !rule.match?.fallback && rule.id !== 'execution-processing-and-fulfillment'
  );
  return (
    primaryGroups.find((rule) => matchesWorkflowPhaseGroup(row, rule.match)) ??
    (deferredExecution && matchesWorkflowPhaseGroup(row, deferredExecution.match) ? deferredExecution : null) ??
    fallback
  );
}

export function resolveDomainProfile(row) {
  const fallback = definitionRules.domain_profiles.find((rule) => rule.match?.fallback);
  return (
    definitionRules.domain_profiles.find((rule) => matchesDomain(row, rule)) ??
    fallback
  );
}

function renderBulletList(items) {
  return uniqueStrings(items).map((item) => `- ${item}`).join('\n');
}

function parseListField(value) {
  return String(value ?? '')
    .split(/\s*\|\|\s*/u)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function buildSemanticRequirements(row) {
  const workflowPhaseGroup =
    definitionRules.workflow_phase_groups.find((rule) => rule.id === row.workflow_phase_group) ??
    resolveWorkflowPhaseGroup(row);
  const domainProfile =
    definitionRules.domain_profiles.find((rule) => rule.id === row.domain_profile_id) ??
    resolveDomainProfile(row);

  return {
    workflowPhaseGroup,
    domainProfile,
    sharedInclusions: definitionRules.shared_baseline.required_inclusions,
    sharedScenarios: definitionRules.shared_baseline.required_scenarios,
    sharedSourceRules: definitionRules.shared_baseline.required_source_rules,
    requiredWorkflows: uniqueStrings([
      ...(workflowPhaseGroup.required_workflows ?? []),
      ...(domainProfile.required_workflows ?? []),
    ]),
    requiredOutputs: uniqueStrings(workflowPhaseGroup.required_outputs ?? []),
    requiredSources: uniqueStrings([
      ...(workflowPhaseGroup.required_sources ?? []),
      ...(domainProfile.required_sources ?? []),
    ]),
    requiredScenarios: uniqueStrings([
      ...(workflowPhaseGroup.required_scenarios ?? []),
      ...(domainProfile.required_workflows ?? []).map((workflow) => `Scenario proving ${workflow.toLowerCase()}`),
      ...(domainProfile.boundary_rules ?? []).map((rule) => `Scenario proving the lane refuses or escalates when: ${rule.charAt(0).toLowerCase()}${rule.slice(1)}`),
      ...definitionRules.shared_baseline.required_scenarios,
    ]),
    boundaryRules: uniqueStrings([
      ...(workflowPhaseGroup.boundary_rules ?? []),
      ...(domainProfile.boundary_rules ?? []),
    ]),
    semanticInclusions: uniqueStrings([
      ...definitionRules.shared_baseline.required_inclusions,
      ...(workflowPhaseGroup.required_inclusions ?? []),
      ...(domainProfile.required_inclusions ?? []),
    ]),
  };
}

export function buildBody(row, semantic = buildSemanticRequirements(row)) {
  const queueSlug = `industry-overlays::${row.industry_slug}::${row.agent_slug}`;
  const packageSectionSlug = row.package_section_slug || row.industry_slug;
  const domainResearchPack =
    researchContract.domain_research_packs?.[semantic.domainProfile.id] ??
    researchContract.domain_research_packs?.['cross-industry'] ??
    null;
  return `## Queue Agent Slug
${queueSlug}

## Agent Name
${row.agent_name}

## Industry
${row.industry_name}

## Catalog Family
Industry Overlay

## Target Delivery Level
${row.delivery_target}

## Runtime Strategy
${row.runtime_strategy}

## Specialty Boundary
${inferBoundary(row.industry_name, row.agent_name)}

## Semantic Definition Profile
- semantic baseline version: ${definitionRules.version}
- resolved workflow phase group: ${semantic.workflowPhaseGroup.display_name}
- resolved industry profile: ${semantic.domainProfile.display_name}
- resolved lane template: ${row.lane_template_label || 'none'}
- definition tier: ${row.definition_tier || 'unknown'}
- specialty keywords: ${row.specialty_keywords || 'none'}

## Constrained Research Contract
Before finalizing the spec, research this lane under the repo-defined contract.

Research contract version: ${researchContract.version}

### Required Research Steps
${renderBulletList(researchContract.shared_steps ?? [])}

### Source Quality Rules
${renderBulletList(researchContract.source_quality_rules ?? [])}

### Domain Research Pack
- domain pack: ${semantic.domainProfile.id}

Required source classes:
${renderBulletList(domainResearchPack?.required_source_classes ?? [])}

Required workflow questions:
${renderBulletList(domainResearchPack?.required_workflow_questions ?? [])}

Required scenario families:
${renderBulletList(domainResearchPack?.required_scenario_families ?? [])}

## Operational Build Brief
- primary job to be done: ${row.primary_job_to_be_done}

### Core Artifacts
${renderBulletList(parseListField(row.core_artifacts))}

### Systems Of Record
${renderBulletList(parseListField(row.systems_of_record))}

### Allowed Decision Types
${renderBulletList(parseListField(row.decision_types))}

### Hard Refusal Triggers
${renderBulletList(parseListField(row.hard_refusal_triggers))}

### Adjacent Specialists
${renderBulletList(parseListField(row.adjacent_specialists))}

### Required Output Shapes
${renderBulletList(parseListField(row.required_output_shapes))}

### Must-Pass Scenario Families
${renderBulletList(parseListField(row.must_pass_scenario_families))}

### Source Classes
${renderBulletList(parseListField(row.source_classes))}

### Tenant-Required Facts
${renderBulletList(parseListField(row.tenant_required_facts))}

### Risk Modes
${renderBulletList(parseListField(row.risk_modes))}

### Success Measures
${renderBulletList(parseListField(row.success_measures))}

## Required Semantic Inclusions
Every completed pack for this lane must satisfy the shared specialist baseline,
the resolved workflow phase group, and the resolved industry profile.

${renderBulletList(semantic.semanticInclusions)}

## Required Workflow Families
${renderBulletList(semantic.requiredWorkflows)}

## Required Output And Evidence Expectations
${renderBulletList(semantic.requiredOutputs)}

## Required Boundary And Refusal Rules
${renderBulletList(semantic.boundaryRules)}

## Requested Change
Create the complete NAICS-derived industry-overlay spec.yaml for this
specialty at \`catalog/naics-overlays/${packageSectionSlug}/${row.agent_slug}/spec.yaml\`.

The spec.yaml must be a single self-contained file following the delivery contract
in \`.github/copilot-instructions.md\`. Do not create \`manifest.yaml\`, \`evaluation/\`,
\`readiness/\`, \`deployment/\`, or \`marketing/\` — those belong to an older format
this repo does not use.

Use the queue summary as a starting point for the lane:
- baseline role summary: ${row.what_it_does}

## Authority Sources
Use authoritative public sources appropriate to this industry lane. Expected source types include:
- relevant regulators, statutes, or public policy sources where the lane is regulated
- professional bodies, standards organizations, and recognized industry frameworks tied to ${row.industry_name}
- vendor-neutral best-practice guidance directly relevant to ${row.agent_name}
- public workflow references that clarify operating terminology, evidence expectations, and safe boundary handling

The source baseline for this lane must also satisfy:
${renderBulletList([
  ...semantic.requiredSources,
  ...semantic.sharedSourceRules,
])}

Each authority source in spec.yaml must state publisher, authority rationale, refresh interval, decay policy, and review date under the \`location:\` key (never \`url:\`).

## Evaluation And Accuracy Expectations
Define scenarios spanning:
- normal in-scope work for ${row.agent_name}
- boundary rejection for adjacent functional specialists
- low-confidence escalation
- industry-specific terminology handling
- evidence and compliance handling where applicable
- safe orchestration return rules when tenant facts or regulated interpretation are missing

Acceptance thresholds:
- target delivery level remains ${row.delivery_target}
- validation profile is ${row.validation_profile}
- the package must be specific enough to avoid vague generalist behavior
- human verification must be recorded
- evaluation evidence must support the market-ready package claim

The evaluation suite must explicitly cover:
${renderBulletList(semantic.requiredScenarios)}

The queue-level must-pass scenario families for this lane are:
${renderBulletList(parseListField(row.must_pass_scenario_families))}

## Materialization Expectations
Document in spec.yaml what the commons-crew PA would need to materialize this lane safely:
- required task and boundary metadata (in \`metadata\` and \`purpose\`)
- assumptions that must be tenant-supplied or retrieved at runtime (in \`scope\`)
- regulated-lane caveats (in \`scope.out_of_scope_rules\`)
- conditions that require refusal or orchestrator return (in \`scope.orchestrator_return_rules\`)

## Acceptance Criteria
- spec.yaml exists at \`catalog/naics-overlays/${packageSectionSlug}/${row.agent_slug}/spec.yaml\`
- \`schema_version\` is \`'1.0'\` and \`kind\` is \`agent_definition\`
- \`metadata.specialty_boundary\` is at least 900 characters and concretely specific to this industry
- \`knowledge_baseline.authority_sources\` has at least 8 real, specifically-authoritative sources with \`location:\` URLs
- \`adjacent_specialties\` lists at least 3 real sibling specialist slugs
- \`scope.supported_tasks\`, \`scope.common_inputs\`, and \`scope.expected_outputs\` are non-empty
- all date fields use the current date
- spec.yaml passes \`infra/scripts/validate-spec-yaml.mjs\`
- no \`manifest.yaml\`, \`evaluation/\`, \`readiness/\`, \`deployment/\`, or \`marketing/\` files are created

## Risks And Unknowns
- boundary overlap with neighboring core specialists
- risk of using shallow industry labels instead of real workflow specialization
- possible need for future promotion from spec pack to trusted built package
`;
}

function getExistingIssueTitles() {
  const raw = execFileSync(
    'gh',
    ['issue', 'list', '--state', 'all', '--limit', '2000', '--json', 'title'],
    { cwd: repoRoot, encoding: 'utf8', maxBuffer: 1024 * 1024 * 40 }
  );
  return new Set(JSON.parse(raw).map((issue) => issue.title));
}

const isMainModule = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMainModule) {
  runCli();
}

function runCli() {
const industryFilter = getArg('--industry');
const agentFilter = getArg('--agent');
const limit = Number(getArg('--limit') ?? 0);

let rows = parseCsv(sourcePath)
  .filter((row) => row.issue_state === 'needs-spec-pack')
  .filter((row) => row.definition_tier !== 'needs-curation')
  .filter((row) => (industryFilter ? row.industry_slug === industryFilter : true))
  .filter((row) => (agentFilter ? row.agent_slug === agentFilter : true));

if (limit > 0) {
  rows = rows.slice(0, limit);
}

const existingTitles = getExistingIssueTitles();
const created = [];

for (const row of rows) {
  const title = `spec-pack: ${row.industry_slug}::${row.agent_slug}`;
  if (existingTitles.has(title)) {
    continue;
  }

  const semantic = buildSemanticRequirements(row);
  const body = buildBody(row, semantic);

  if (dryRun) {
    created.push({
      title,
      dry_run: true,
      industry: row.industry_name,
      agent_slug: row.agent_slug,
      workflow_phase_group: semantic.workflowPhaseGroup.id,
      industry_profile: semantic.domainProfile.id,
    });
    continue;
  }

  const priorityLabel = row.priority === 'high' ? 'priority:p1' : row.priority === 'critical' ? 'priority:p0' : null;
  const args = [
    'issue',
    'create',
    '--title',
    title,
    '--body',
    body,
    '--label',
    'type:spec',
    '--label',
    'needs-spec-pack',
  ];

  if (priorityLabel) {
    args.push('--label', priorityLabel);
  }

  const url = execFileSync('gh', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 40,
  }).trim();

  created.push({
    title,
    url,
    industry: row.industry_name,
    agent_name: row.agent_name,
    agent_slug: row.agent_slug,
    delivery_target: row.delivery_target,
    workflow_phase_group: semantic.workflowPhaseGroup.id,
    industry_profile: semantic.domainProfile.id,
  });
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(created, null, 2));
console.log(`${dryRun ? 'Prepared' : 'Created'} ${created.length} industry overlay spec-pack issues.`);
}
