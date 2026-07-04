# Deployment Package

## Runtime

- Target runtime: spec-first specialist profile consumed by the orchestrator or a future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- retained implementation: not claimed. Retain a generated implementation only after frequent-use promotion evidence is approved.
- Required package inputs: `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/scenarios.md`, `evaluation/results.json`, `readiness/evidence.json`, `readiness/release.md`, `deployment/package.md`, and `positioning/readiness.md`.
- Required configuration: tenant ID, identity systems in scope, minimum confidence threshold, source freshness policy, evidence retention policy, allowed adaptation types, and adjacent specialist routing map.

## Materialization Requirements

A materializer must load the package as the canonical source of truth and enforce:

- Supported task and specialty boundary metadata before response generation.
- Tenant-specific retrieval from identity provider, directory, PAM/PIM, IGA, SIEM, GRC, evidence store, ticketing, change, exception, and policy repositories.
- Evidence lineage fields for source system, artifact ID, owner, collection date, scoped population, environment, confidence, assumptions, and known gaps.
- Domain caveats for payment, healthcare, public-sector, OT, privacy, contractual, and legal authority contexts.
- Refusal or orchestrator return when the request asks for penetration testing execution, incident response execution, formal attestation, broad architecture ownership, production changes, or final hold/release approval.

## Isolation

- Tenant boundary: strict tenant scoping for prompts, retrieved evidence, output logs, source overlays, and adaptation settings.
- Knowledge boundary: public source baseline is shared; tenant evidence, policies, exceptions, and decisions are not shared across tenants.
- Adaptation policy: configuration, retrieval, tenant policy overlay, and approved source-precedence tuning are allowed. Fine-tuning or durable tenant-data retention requires separate approval.
- Privacy constraint: identity logs can contain personal data, device data, location indicators, and workforce data. Retention and use must follow tenant privacy and legal rules.

## Operations

- Monitoring: track scenario family, refusal rate, low-confidence escalation rate, source freshness warnings, output shape conformance, hold/release recommendations, and adjacent-lane handoffs.
- Logging: retain source IDs, scenario IDs, evidence artifact IDs, confidence statements, assumptions, refusal reasons, and routing decisions according to tenant retention policy.
- Alerting: notify package owner when source freshness expires, pass-rate evidence drops below threshold, boundary regressions are reported, or materializer output omits evidence lineage.
- Human verification: required before validated release, materially changed source baseline, materially changed boundary, or retained-implementation promotion.

## Rollback

1. Disable materialization of the current package version for affected tenants.
2. Route identity security requests to the prior validated spec package or to orchestrator/human reviewer if no prior package is approved.
3. Preserve current evidence, source freshness records, and failure reports for regression review.
4. Re-run repository validation and package consistency checks before re-enabling.
5. Keep runtime in `specification-based`; do not promote a generated implementation during rollback.

## Promotion Criteria

Retain a generated trusted implementation in-repo only when all criteria are met:

- At least 30 tenant-scoped successful invocations in 90 days, or a documented product requirement for low-latency identity review.
- No open high-severity boundary, refusal, source freshness, or evidence-traceability regression.
- Evaluation suite and functionality map remain complete with pass rate at or above 0.92.
- Human package owner approves the promotion and records rollback evidence.

## Deployment Readiness

- Release as a validated spec pack under `catalog/cybersecurity/identity-security-specialist/`.
- Keep deployment claims bounded to identity security review, guidance, remediation planning, evidence packaging, and escalation support.
- Do not market or deploy as an audit, compliance attestation, incident response, penetration testing, privacy, legal, SOC, endpoint, network, or broad architecture service.
