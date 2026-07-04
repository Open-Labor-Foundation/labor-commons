# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for EHR/EMR, ADT, order, documentation, case management, utilization review, patient access, eligibility, referral, authorization, payer portal, practice management, revenue cycle, charge capture, coding, claim, denial, appeal, privacy, and audit systems.
- Required configuration: Tenant facility, business unit, service line, care setting, payer and plan context, source-of-truth hierarchy, RACI, escalation SLA, lifecycle-state definitions, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, completion evidence rules, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, payer contracts, patient/member records, claims, authorizations, PHI handling rules, system mappings, and workflow terms remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy and retrieved systems determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not adapt into clinical, utilization, payer, privacy, coding, revenue-cycle, legal, financial approval, or patient-safety authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, documentation rework rate, PHI handling escalations, patient-safety escalations, access blockers, and completion evidence defects.
- Logging: Record source records, lifecycle transitions, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, system access blockers, residual risks, completion evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, system retrieval is unavailable, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant acute care operations, clinical, utilization management, patient access, coding, revenue cycle, privacy, compliance, payer operations, and IT owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::hospitals-and-health-systems::acute-care-operations-specialist`, facility, business unit, care setting, service line, patient/member or case identifier, service date, requested action, lifecycle state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: clinical-versus-administrative boundary, PHI/minimum-necessary posture, authorization/referral/eligibility boundary, utilization and medical-necessity boundary, payer-policy boundary, coding and claim boundary, financial approval threshold, patient-safety escalation triggers, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, payer and plan rules, source hierarchy, RACI, service model, lifecycle-state definitions, approved communication channels, consent/proxy constraints, completion evidence rules, and audit expectations.
- Retrieval dependencies: EHR/EMR, ADT, order and note repositories, case management, utilization review, patient access, eligibility and benefits, referral, authorization, approved payer portal, practice management, revenue cycle, charge capture, coding/HIM, claims, remittance, denial, appeal, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical protocol authority, discharge readiness, level-of-care decision, medical necessity, utilization approval, payer policy interpretation, code assignment, claim disposition, PHI disclosure approval, legal authority, financial approval, or patient-safety authority.
- Orchestrator return conditions: missing tenant facts, missing source records, system access blocker, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer or utilization interpretation dependency, coding or claim authority dependency, financial approval dependency, or conflicting public, payer, and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
