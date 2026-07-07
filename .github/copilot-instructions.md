# Delivery contract for labor-commons

Every specialist in this catalog is a single self-contained file:

```
catalog/naics-overlays/{section_slug}/{agent_slug}/spec.yaml
```

There is no other required file. Do not create `manifest.yaml`, `evaluation/`,
`readiness/`, `deployment/`, or `marketing/` — those belong to a different,
older format this repo does not use. `commons-board` and `commons-crew` only
read `spec.yaml`, at exactly that path.

## Required shape

```yaml
schema_version: '1.0'
kind: agent_definition
freshness:
  last_reviewed: 'YYYY-MM-DD'
  review_interval_days: <int>
  stale_after: 'YYYY-MM-DD'
  status: current
metadata:
  agent_id: <slug>-v1
  slug: <agent_slug>
  name: <Human readable name>
  domain_family: <section_slug>
  specialty_boundary: '<one paragraph: what this specialist owns and rejects>'
  status: validated
  created_at: 'YYYY-MM-DD'
  last_updated_at: 'YYYY-MM-DD'
purpose:
  business_outcome: '<what improves for the business when this specialist is used>'
  summary: '<what the specialist actually does, day to day>'
  decision_surface: '<what it can and cannot decide>'
  target_users:
  - <role>
scope:
  supported_tasks:
  - <task>
  common_inputs:
  - <input the specialist needs>
  expected_outputs:
  - <artifact the specialist produces>
  out_of_scope_rules:
  - <optional>
knowledge_baseline:
  source_baseline_version: 'YYYY-MM-DD'
  authority_sources:
  - source_id: <short-slug>
    title: <full title of the regulation, rule, or standard>
    publisher: <the actual regulator, standards body, or industry utility that issued it>
    source_type: named-industry-operating-guidance | evidence-and-control-standard | recognized-workflow-reference
    location: <real, working URL>
    authority_reason: '<why this specific source is authoritative for this specific lane, not just generally relevant>'
    refresh_interval_days: <int>
    decay_policy: review_required_after_interval
    status: active
  next_review_due_at: 'YYYY-MM-DD'
```

- `schema_version` must be the literal string `'1.0'`.
- `kind` must be the literal string `agent_definition`.
- `metadata.specialty_boundary` is required and must live under `metadata`, not `scope`.
- `purpose.summary` is required.
- `scope.supported_tasks`, `scope.common_inputs`, and `scope.expected_outputs` are each required and must be non-empty lists.
- `knowledge_baseline.authority_sources` is required and must be a list of **at least 8** (catalog median is 9)
  **real, specifically-authoritative** sources for this exact lane — e.g. named SEC/FINRA/CFTC rules,
  DTCC/NACHA/ISO operating standards, or an equivalent named regulator/standards-body citation for the domain. Generic
  definitional or career-explainer sites (Investopedia, Payscale, Wikipedia, glossary pages) are never sufficient on
  their own and do not count toward this requirement.
- `metadata.specialty_boundary` must be **at least 900 characters** (the catalog median is ~1,300; do not stop at one or
  two sentences). Structure it as: (1) a detailed statement of what this lane owns — the specific workflows, systems of
  record, artifacts, and decisions — followed by (2) an explicit, itemized list of what it refuses and hands off to
  adjacent owners. Before writing it, open one rich sibling `spec.yaml` in this section and match the length and concrete
  specificity of its `specialty_boundary`; a short boundary will be rejected as generic.
- `adjacent_specialties` is **required** (present in 86% of the catalog): a top-level list of **at least 3** real
  sibling specialist slugs (e.g. `- corporate-actions-specialist`) in this or a related section that this specialist
  coordinates with or hands off to. Use the exact slugs of specialists that actually exist in the catalog — read the
  sibling directories in this section to get real slugs, do not invent names.
- Get today's actual date from the environment (e.g. run `date -u +%Y-%m-%d`) for every date field. Do not guess a date
  or reuse a date recalled from training data — a wrong `stale_after` that has already passed on the day the file is
  created is a real, previously-observed defect.
- **Do not write a generic, industry-agnostic specialist.** The named industry/section must materially change the
  terminology, workflows, systems of record, and authority sources used — not just appear once in the domain_family
  field. If your draft could describe this role at a company in any unrelated industry without changing a single
  sentence, it has failed this requirement and must be rewritten with real, industry-specific research.

Before writing, read 2-3 existing `spec.yaml` files elsewhere in
`catalog/naics-overlays/` (ideally in the same or an adjacent section) and match
their depth and specificity, not just their field names — they are the
canonical, currently-passing reference, not any other file format or level of
genericness you may encounter in research or training data.

## Validation

Any `spec.yaml` you create or edit must pass `infra/scripts/validate-spec-yaml.mjs`
before you consider the work done. Run it locally against your changed files.
