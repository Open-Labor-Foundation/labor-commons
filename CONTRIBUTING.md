# Contributing to labor-commons

Anyone with expertise in a profession, trade, or specialized domain can contribute a specialist definition. No technical background required.

---

## How to contribute

Use [commons-idea](https://github.com/Open-Labor-Foundation/commons-idea) to describe your expertise through a guided conversation. It produces a structured definition you can submit here as a pull request.

A streamlined contribution interface is actively in development. In the meantime, see the spec format below and open a pull request against `main`.

---

## Spec format

Each specialist definition is a folder under `catalog/naics-overlays/[industry]/[specialist-slug]/`. The folder contains a `spec.yaml` and supporting files:

```text
catalog/naics-overlays/
  [industry-or-domain]/
    [specialist-slug]/
      spec.yaml
      deployment/
        package.md
      evaluation/
        scenarios.md
        research-summary.json
        results.json
        functionality-map.json
      positioning/
        readiness.md
      readiness/
        evidence.json
        release.md
```

The `spec.yaml` is the core definition. At minimum it must include:

```yaml
schema_version: "1.0"
kind: agent_definition

freshness:
  last_reviewed: "YYYY-MM-DD"
  review_interval_days: 365
  stale_after: "YYYY-MM-DD"
  status: current

metadata:
  slug: your-specialist-slug
  name: "Your Specialist Name"
  domain_family: industry-or-domain/your-specialist-slug
  status: current
  created_at: "YYYY-MM-DD"
  last_updated_at: "YYYY-MM-DD"
  specialty_boundary: |
    Plain language description of what this specialist owns and does not own.

purpose:
  summary: |
    What this specialist does and what outcome it produces.
  target_users:
    - "who uses this specialist"

scope:
  supported_tasks:
    - "Task descriptions"
  common_inputs:
    - "What the specialist needs to work"
  expected_outputs:
    - "What the specialist produces"
  out_of_scope_rules:
    - "What this specialist must not do"

adjacent_specialties:
  - other-specialist-slug

knowledge_baseline:
  authority_sources:
    - source_id: unique-id
      title: "Source title"
      publisher: "Publisher name"
      source_type: "professional-standard"
      location: "https://..."
      authority_reason: "Why this source grounds the spec"
      last_reviewed_at: "YYYY-MM-DD"
      refresh_interval_days: 365
      status: active
```

---

## Folder location

Place your folder under the appropriate industry in `catalog/naics-overlays/`. Use the existing industry folder names where your domain fits. If your domain spans industries or has no clear NAICS home, use a descriptive industry slug and note it in your pull request.

---

## Freshness

Every spec carries a `freshness` block. [commons-keeper](https://github.com/Open-Labor-Foundation/commons-keeper) monitors these and opens renewal issues when definitions go stale. Set `review_interval_days` based on how quickly practices in your field change — 90 days for fast-moving domains, 365 for stable ones. The `knowledge_baseline` should also carry per-source refresh intervals.

---

## Quality bar

- Write in plain language — these definitions are read by people across every profession, not only yours
- Be specific about scope: what you handle and what you don't is as important as what you know
- Include at least one authority source in `knowledge_baseline` — the spec should be grounded in something, not just asserted
- Human contributions take precedence over automated suggestions — your expertise sets the standard

---

## License

By submitting a pull request, you agree your contribution is licensed under [CC-BY-SA 4.0](LICENSE) and will remain in the commons under those terms.
