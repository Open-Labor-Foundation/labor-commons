# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Target runtime: future LLM materializer or managed agent runtime that can load this spec pack as the canonical source of truth.
- Deployment model: tenant-isolated advisory service for SOC intake, triage, prioritization, evidence checklist, containment-planning guidance, escalation routing, and monitoring hygiene recommendations.

## Materialization Requirements

A future `commons-crew` or equivalent materializer needs:

- Task metadata for allowed advisory decisions and hard refusal triggers.
- Retrieval or supplied summaries for SIEM, SOAR, EDR/XDR, NDR, identity, email-security, cloud audit, endpoint, network, ticketing, CMDB, runbook, policy, privacy, and compliance systems.
- Tenant severity matrix, confidence thresholds, incident classification rules, escalation owner map, legal/privacy handoff rules, and evidence-retention expectations.
- Prompt and policy guardrails that block platform-specific commands, direct remediation, exploit execution, legal or audit language, cross-tenant inference, and unsupported high-confidence conclusions.
- Audit logging for request scope, intake disposition, evidence artifacts, systems of record, confidence, assumptions, refusal triggers, and next-owner routing.

## Tenant Isolation

- Tenant boundary: strict tenant-specific retrieval and output partitioning.
- Shared SOC examples: allowed only as sanitized examples; they must not be used as evidence for another tenant.
- Raw telemetry retention: tenant-scoped only and subject to tenant retention, legal hold, and privacy policy.
- Cross-tenant sharing: prohibited for evidence, inference, severity, or incident facts.
- Adaptation policy: configuration, retrieval, and approved tuning only. Tenant adaptation may strengthen severity, retention, or escalation policy but cannot weaken hard refusals.

## Operations

- Monitoring: track scenario pass rate, refusal rate, low-confidence escalation rate, adjacent-lane routing rate, source freshness, missing-evidence frequency, and tenant-isolation blocks.
- Logging: persist intake state, evidence references, systems of record, confidence score, assumptions, source baseline, tenant policy overlays, routing destination, and refusal or escalation trigger.
- Alerting: page the owning maintainer when scenario pass rate falls below 0.92, source baseline expires, cross-tenant evidence is detected, or a materializer attempts a prohibited execution path.
- Human review: required for source conflicts, regulated notification questions, audit or legal-adjacent requests, and any promotion from specification-based to retained implementation.

## Rollback

- Primary rollback: pin the previous spec-pack release and route new security-operations requests to orchestrator fallback.
- Materializer rollback: disable generated runtime entrypoint, clear runtime retrieval bindings, and retain only immutable audit logs.
- Tenant adaptation rollback: revert tenant-specific prompts, severity overlays, retrieval mappings, and confidence thresholds to the approved baseline.
- Safety rollback: force all direct remediation, disclosure, audit, forensic, malware, penetration-testing, identity, cloud, endpoint, network, and architecture requests to orchestrator return.

## Promotion Criteria

Promote to a retained retained implementation only when all criteria are met:

- The lane is called frequently enough across at least two release cycles to justify retained implementation assets.
- Tenant retrieval contracts and schemas are stable for core SOC systems.
- The evaluation suite remains strict, at least 0.92 pass rate, with no unreviewed regressions.
- Human security review approves materialized behavior, refusal handling, and tenant-isolation controls.
- Rollback and deprecation path for the built runtime is documented and tested.
