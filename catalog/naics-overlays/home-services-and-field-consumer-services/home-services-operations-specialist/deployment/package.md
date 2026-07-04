# Deployment Package

## Runtime

- Target runtime: Spec-pack catalog entry consumed by the specialist router.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Validation profile: `standard`.
- retained implementation: Not included. This package must not be promoted as a trusted built implementation until a separate build, safety review, connector review, and trusted-build commit are completed.

## Required Configuration

- Tenant service model, branch or business unit, jurisdiction, payer, plan, provider type, facility type, service setting, source-of-truth hierarchy, RACI, and escalation SLAs.
- EHR/EMR, clinical documentation, practice management, revenue cycle, payer portal, authorization, referral, eligibility, case management, CRM, field service, EVV or visit verification, agreement/estimate, document repository, communication, privacy, consent, and audit retrieval hooks.
- Tenant privacy, consent, minimum-necessary, representative, communication, agreement, estimate, pricing, refund, technician, missed-visit, complaint, service-readiness, and escalation policies.
- Adjacent owner map for clinical review, patient access, referral management, utilization management, coding, revenue cycle, payer operations, privacy, compliance, technician support, and agreement/pricing approval.

## Isolation

- Tenant boundary: No cross-tenant sharing of patient/member, agreement, payer, technician, source-system, or policy data.
- Knowledge boundary: Public sources are baseline constraints only; tenant records and policies control operational disposition.
- Privacy boundary: Patient/member data must remain within role-based access, consent, minimum-necessary, and audit controls.
- Clinical boundary: The lane can summarize administrative facts and route to licensed owners; it cannot diagnose, triage, alter care, decide treatment, or imply clinical judgment.
- Payer and revenue boundary: The lane can identify blocked authorization, referral, eligibility, claim, denial, coding, or appeal dependencies; it cannot interpret payer policy, approve coverage, code claims, or decide claim strategy.

## Operations

- Monitoring: Track scenario coverage, source freshness, refusal and escalation rates, repeat missed-visit escalations, PHI handling refusals, missing-prerequisite holds, policy conflicts, and adjacent-owner handoff accuracy.
- Logging: Record source records, timestamps, tenant assumptions, action taken, stakeholder communication, privacy posture, unresolved items, owner route, and re-open trigger for every resolution note.
- Rollback path: Disable the validated claim and route all requests to orchestrator if evidence gaps, privacy handling failures, clinical/payer overreach, source staleness, or unresolved regressions affect the package.
- Support owner: Spec-pack owner with privacy, clinical, payer/revenue-cycle, and tenant operations reviewers for material changes.

## Materialization Notes

`commons-crew` would need task metadata for request type, patient/member context, payer and plan, service date, service address, referral/authorization/eligibility status, order/plan-of-care references, agreement/estimate status, technician readiness, privacy posture, source links, lifecycle state, and owner route.

Runtime materialization must retrieve tenant-supplied policies and source records before acting. It must return to orchestrator when required records are missing, when source conflicts exist, when PHI handling changes the answer, or when the request requires clinical, payer, coding, privacy, agreement, pricing, licensed technician, safety, legal, financial, or executive authority.

## Promotion To retained implementation

Promote only if usage volume justifies implementation and a separate PR adds trusted runtime code, connector contracts, test fixtures, audit logging, tenant isolation checks, PHI controls, clinical and privacy review evidence, payer/revenue-cycle boundary tests, rollback automation, and production readiness approval. Until then, deployments may consume this package only as a `specification-based` validated catalog specification.
