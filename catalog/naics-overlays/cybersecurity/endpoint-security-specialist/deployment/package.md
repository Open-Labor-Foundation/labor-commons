# Deployment Package

## Runtime Model

- Target runtime: `specification-based` catalog package consumed by orchestrator dispatch or future materializers.
- retained implementation: not claimed. Any generated implementation is a promoted artifact only after a separate frequent-use promotion review.
- Required metadata: specialist boundary, supported tasks, output shapes, refusal triggers, adjacent specialists, workflow states, source baseline, and functionality map.
- Required tenant retrieval: endpoint inventory, MDM/UEM policy snapshots, EDR/XDR telemetry, vulnerability and KEV evidence, patch state, exception records, owner map, change windows, rollback readiness, tenant policy, and authority context.
- Required secrets: none in this package. Runtime integrations own credentials for endpoint, SOC, ticketing, vulnerability, identity, and policy systems.

## Isolation And Adaptation

- Tenant boundary: strict tenant namespacing for all retrieval, analysis, evidence maps, policy assumptions, and output artifacts.
- Cross-tenant reuse: prohibited unless formal isolation approval and tenant-specific evidence are documented.
- Adaptation allowed: terminology, source retrieval, severity threshold, owner routing, output templates, and platform-specific evidence prompts.
- Adaptation not allowed: weakening hard refusal triggers, merging exclusions across tenants, approving risk acceptance, or overriding public/vendor/tenant source conflicts without authorized precedence.

## Operations

- Monitoring: refusal rate, low-confidence escalation rate, missing-evidence categories, adjacent-lane routing accuracy, output-shape conformance, source freshness, and closure-with-blocker rate.
- Logging: request state, tenant evidence references, systems of record, source versions, assumptions, confidence, blocker state, handoff owner, and closure criteria.
- Rollback path: revert to the previous catalog package release, disable validated dispatch for this lane, and route new endpoint requests through the orchestrator until revalidation.
- Rollback tests: prior package restore, output shape compatibility, refusal trigger preservation, tenant isolation check, and evidence logging continuity.

## Materialization Notes

- A runtime materializer must load `manifest.yaml`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/scenarios.md`, `evaluation/results.json`, readiness evidence, deployment notes as the canonical pack.
- It must preserve explicit output shapes: prioritized endpoint remediation plan, control gap mapping, rollout and rollback sequencing, handoff summary, dependency or blocker log, routing confirmation note, and refusal/escalation output.
- It must return to orchestrator when endpoint facts, authority context, owner map, source freshness, or tenant policy are missing or conflicting.
- It must not convert coordination into production approval, incident response execution, forensics, penetration testing, audit attestation, legal drafting, or broad architecture ownership.

## Promotion Criteria

Retain a trusted generated implementation in-repo only when usage proves it is worth maintaining:

- Repeated calls from at least three independent tenants or an internal workflow volume above the repository retention threshold.
- Stable request shapes and output templates with low ambiguity across multiple validation cycles.
- Separate trusted-build issue with implementation review, tests, monitoring, rollback, tenant-isolation evidence, and explicit promotion approval.
