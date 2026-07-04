# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for EHR/EMR, patient access, eligibility, referral, authorization, payer portal, charge capture, coding/HIM, institutional claim, clearinghouse, remittance, EOB, EFT, cash posting, patient accounting, denial, appeal, refund, recoupment, adjustment approval, document repository, privacy, and audit systems.
- Required configuration: Tenant facility, business unit, service line, service setting, payer and plan context, source-of-truth hierarchy, RACI, approval thresholds, reconciliation root-cause taxonomy, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, billing/posting/adjustment closeout rules, patient billing escalation rules, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, payer contracts, patient/member records, claims, authorizations, PHI handling rules, account balances, payment records, system mappings, approval thresholds, and workflow terms remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy, payer contracts, financial approval matrix, and retrieved systems determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not adapt into clinical, coding, utilization, payer, privacy, accounting, tax, legal, patient billing, financial approval, or patient-safety authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, unsupported-charge rate, remittance mismatch rate, denial exception volume, posting hold rate, PHI handling escalations, patient billing escalations, access blockers, and closeout evidence defects.
- Logging: Record source records, requested financial action, matched and unmatched items, variance categories, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, approval dependency, system access blockers, residual risks, closeout evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, financial approval paths are unavailable, system retrieval is unavailable, or production evidence shows unsafe billing, posting, reconciliation, PHI, or owner routing behavior.
- Support owner: Catalog maintainers for spec-pack content; tenant hospital finance operations, revenue cycle, patient financial services, cash posting, patient access, utilization management, medical coding/HIM, denials and appeals, payer operations, privacy, compliance, accounting, tax, legal, finance approval, and IT owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::hospitals-and-health-systems::hospital-finance-operations-specialist`, facility, business unit, service setting, payer, plan, patient/member or account identifier, claim identifier, service dates, requested financial action, amount, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: billing/posting/reconciliation decision surface, PHI/minimum-necessary posture, authorization/referral/eligibility boundary, medical coding boundary, utilization and medical-necessity boundary, payer-policy and contract boundary, patient billing protection boundary, accounting/tax/legal boundary, financial approval threshold, patient-safety escalation triggers, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, payer and plan rules, payer contracts, source hierarchy, RACI, service model, approval matrix, reconciliation root-cause categories, approved communication channels, consent/proxy constraints, patient billing rules, closeout evidence rules, and audit expectations.
- Retrieval dependencies: EHR/EMR, orders and clinical documentation, patient access, eligibility and benefits, referral, authorization, payer portal, case management or utilization review, charge capture, chargemaster, coding/HIM, claims, clearinghouse, remittance, EOB, EFT, cash posting, patient accounting, denial and appeal, patient billing, refund, recoupment, adjustment approvals, contract reference, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical judgment, medical necessity, level-of-care, coding authority, payer-policy interpretation, authorization approval, appeal strategy, PHI disclosure approval, legal authority, tax advice, accounting treatment, financial approval, or patient-safety authority.
- Orchestrator return conditions: missing tenant facts, missing source records, system access blocker, conflicting systems, PHI uncertainty, patient billing or No Surprises concern, patient-safety indicator, clinical decision dependency, coding dependency, payer or utilization interpretation dependency, accounting/tax/legal dependency, financial approval dependency, or conflicting public, payer, contract, and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical, coding, payer, accounting, tax, legal, compliance, and finance approval boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
