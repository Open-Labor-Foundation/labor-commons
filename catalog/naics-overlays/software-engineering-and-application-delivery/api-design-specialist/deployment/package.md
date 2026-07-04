# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: validated catalog spec pack consumed by `commons-crew` or a future runtime materializer.
- Canonical artifacts: `manifest.yaml`, `evaluation/scenarios.md`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, `readiness/evidence.json`, `readiness/release.md`, `deployment/package.md`, and `positioning/readiness.md`.
- Built runtime posture: no trusted generated implementation is claimed or retained by this package.
- Required secrets: none for the spec pack. Any tenant execution must use orchestrator-injected, tenant-scoped credentials and must not assume privileged runtime access.

## Materialization Requirements

`commons-crew` or another materializer needs:

- Agent identity, queue slug, runtime strategy, validation profile, workflow phase group, industry profile, and source baseline from the manifest.
- Supported tasks, output shapes, refusal triggers, adjacent routing map, tenant facts, systems of record, and retrieval dependencies.
- Research constraints from `evaluation/research-summary.json`, including workflow stages, decision boundaries, domain failure modes, source classes, and unresolved ambiguity handling.
- Functional ability coverage from `evaluation/functionality-map.json`.
- Scenario expectations and pass/fail evidence from `evaluation/scenarios.md` and `evaluation/results.json`.
- Tenant-supplied API requirements, contracts, source schemas, dependency contracts, policy, confidentiality, approval, repository, CI, observability, and release evidence at runtime.

## Tenant Isolation And Adaptation

- Tenant data must remain tenant-scoped by tenant ID, repository scope, API contract registry, document-access policy, and approval matrix.
- Cross-tenant memory or artifact reuse is not allowed for confidential requirements, proprietary endpoints, payload examples, logs, metrics, incidents, review notes, or client commitments.
- Adaptation is configuration-first: tenant-specific API style rules, OpenAPI profile choices, runtime conventions, service catalog conventions, policy precedence, review gates, and retrieval connectors may be added without widening the API design boundary.
- Tenant policy overrides the public baseline when stricter; unresolved source or policy conflicts require escalation.
- Tenant-specific prompt tuning requires approval, rollback plan, and regression review.

## Operations

- Monitoring:
  - Track scenario pass-rate drift, boundary-refusal rate, low-confidence escalation rate, source freshness, missing-schema rate, and tenant retrieval blockers.
  - Alert when pass rate drops below 0.90, source review date decays, a required source class becomes uncovered, or a scenario family becomes uncovered.
- Logging:
  - Record source version, tenant evidence references, output shape, confidence flags, assumptions, refusals, escalations, and human verification.
  - Redact secrets, tokens, proprietary payload values, and confidential client records in logs; store only tenant-approved references where possible.
- Quality gates:
  - Validate JSON artifacts for parseability.
  - Confirm functionality coverage and readiness evidence stay internally consistent.
  - Re-run repository validation before release or PR merge.

## Rollout

- Stage 1: publish refreshed spec pack in the catalog path and route only issue-linked validation traffic.
- Stage 2: canary with internal API design and contract-review workflows using read-only API contract, repository, CI, and observability retrieval.
- Stage 3: enable broader tenant use once boundary refusals, source freshness, pass rate, missing-schema escalation, and confidentiality handling remain stable.

## Rollback

- Freeze new tenant routing to this release.
- Re-point materializer or orchestrator routing to the previous validated package snapshot.
- Preserve current manifest, research, evaluation, and readiness artifacts for audit.
- Reopen validated readiness only after source freshness, functionality coverage, scenario pass rate, human verification, and no-regression status are restored.

## Promotion Criteria For Trusted Build

Keep this lane `specification-based` unless all of the following are documented:

- Frequent invocation across multiple tenants or repeated internal programs.
- Repeated API review and contract-authoring paths where generated implementation materially reduces latency or reviewer effort.
- No open boundary, confidentiality, source freshness, accuracy, or regression issues in recent evaluation cycles.
- Named owner accepts maintenance, security review, source refresh, tenant-isolation controls, monitoring, rollback, and incident response obligations.

## validated Deployment Notes

- Target buyer: engineering organizations that need consistent API design, API lifecycle governance, and contract review without expanding into implementation or platform ownership.
- Target users: API architects, backend engineers, integration engineers, technical leads, contract reviewers, and quality or security reviewers.
- Packaging: versioned spec pack with manifest, research, evaluation, readiness, deployment, and commercialization artifacts.
- Commercial proof points: 16 passing scenarios, full 11-ability coverage, source-backed research summary, human verification, explicit boundaries, and deployment/commercialization readiness evidence.
- Known go-to-market gaps: no external benchmark study yet; tenant-specific onboarding templates and materializer telemetry remain to be validated in pilots.
