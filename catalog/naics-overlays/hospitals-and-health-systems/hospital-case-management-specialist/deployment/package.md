# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for EHR/EMR, ADT, order, documentation, case management, utilization review, patient access, eligibility, referral, authorization, payer portal, post-acute referral or placement, practice management, revenue cycle, charge capture, coding, claim, denial, appeal, privacy, access-control, roster, and audit systems.
- Required configuration: Tenant facility, business unit, service line, care setting, payer and plan context, source-of-truth hierarchy, RACI, escalation SLA, planning horizon, lifecycle-state definitions, case-manager roster, coverage model, approved service levels, priority and tie-break rules, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, recommendation evidence rules, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, payer contracts, patient/member records, claims, authorizations, PHI handling rules, system mappings, staffing models, priority rules, and workflow terms remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy and retrieved systems determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not adapt into clinical, utilization, payer, privacy, coding, revenue-cycle, legal, financial approval, staffing approval, or patient-safety authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, demand-over-capacity rate, priority-conflict rate, source-conflict rate, documentation rework rate, PHI handling escalations, patient-safety escalations, access blockers, and approval-needed summaries.
- Logging: Record source records, planning recommendations, capacity constraints, schedule or allocation options, owner routing, refusals, escalation reasons, PHI handling posture, system access blockers, residual risks, approval-needed tradeoffs, refresh triggers, and tenant terminology mappings.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, system retrieval is unavailable, approved capacity rules are missing, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant case management, clinical, utilization management, patient access, post-acute coordination, coding, revenue cycle, privacy, compliance, payer operations, social work leadership, hospital operations, and IT owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::hospitals-and-health-systems::hospital-case-management-specialist`, facility, business unit, care setting, service line, patient/member or case identifier, service date, requested action, planning horizon, current state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: clinical-versus-administrative boundary, PHI/minimum-necessary posture, authorization/referral/eligibility boundary, utilization and medical-necessity boundary, payer-policy boundary, coding and claim boundary, final staffing and budget approval threshold, patient-safety escalation triggers, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, payer and plan rules, source hierarchy, RACI, service model, case-manager roster, coverage model, approved service levels, priority and tie-break rules, approved communication channels, consent/proxy constraints, recommendation evidence rules, and audit expectations.
- Retrieval dependencies: EHR/EMR, ADT, order and note repositories, case management, utilization review, discharge planning, care transition, patient access, eligibility and benefits, referral, authorization, approved payer portal, post-acute referral or placement, practice management, revenue cycle, charge capture, coding/HIM, claims, remittance, denial, appeal, privacy/access-control, roster, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical protocol authority, discharge readiness, level-of-care decision, medical necessity, utilization approval, payer policy interpretation, code assignment, claim disposition, PHI disclosure approval, legal authority, financial approval, staffing approval, policy override, or patient-safety authority.
- Orchestrator return conditions: missing tenant facts, missing source records, system access blocker, conflicting systems, missing capacity rule, conflicting priorities with no tie-break rule, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer or utilization interpretation dependency, coding or claim authority dependency, financial or staffing approval dependency, or conflicting public, payer, and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
