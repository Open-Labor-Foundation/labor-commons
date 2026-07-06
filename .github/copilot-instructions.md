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
```

- `schema_version` must be the literal string `'1.0'`.
- `kind` must be the literal string `agent_definition`.
- `metadata.specialty_boundary` is required and must live under `metadata`, not `scope`.
- `purpose.summary` is required.
- `scope.supported_tasks`, `scope.common_inputs`, and `scope.expected_outputs` are each required and must be non-empty lists.

Before writing, read 2-3 existing `spec.yaml` files elsewhere in
`catalog/naics-overlays/` and match their structure exactly — they are the
canonical, currently-passing reference, not any other file format you may
encounter in research or training data.

## Validation

Any `spec.yaml` you create or edit must pass `infra/scripts/validate-spec-yaml.mjs`
before you consider the work done. Run it locally against your changed files.
