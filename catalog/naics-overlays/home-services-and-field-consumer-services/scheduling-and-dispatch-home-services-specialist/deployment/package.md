# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for EHR/EMR, clinical documentation, practice management, payer portal, eligibility, benefits, authorization, referral, utilization review, case management, CRM, patient/member access, scheduling, dispatch, route planning, field-service management, technician mobile, workforce/credential, equipment, supply, revenue cycle, privacy, document, and audit systems.
- Required configuration: Tenant service model, jurisdiction, business unit, provider type, service setting, payer/plan scope, source-of-truth hierarchy, RACI, route policy, dispatch approval matrix, escalation SLA, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, order and plan-of-care retrieval rules, clinician or technician owner map, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, source mappings, customer/member records, patient/member records, schedules, route plans, workforce records, technician notes, payer data, PHI handling rules, and approval decisions remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy, payer contract, clinical records, route system, source hierarchy, and accountable owners determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not tune or adapt into clinical review, payer interpretation, privacy approval, legal advice, coding, claim handling, technician execution, field safety, staffing approval, or final dispatch authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, capacity shortfall rate, priority-conflict rate, source-conflict rate, PHI handling escalations, patient-safety escalations, route disruption escalations, and unsupported approval requests.
- Logging: Record source records, schedule recommendation inputs, route constraints, capacity calculations, prerequisite status, owner routing, refusals, escalation reasons, PHI handling posture, residual risks, approval-needed tradeoffs, and refreshed recommendations after exceptions.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, clinical or payer boundaries are unclear, route approval rules are missing, or production evidence shows unsafe scheduling or dispatch routing.
- Support owner: Catalog maintainers for spec-pack content; tenant operations, privacy, clinical, patient access, utilization management, revenue cycle, payer operations, legal, finance, field service, technician, workforce, safety, and compliance owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::home-services-and-field-consumer-services::scheduling-and-dispatch-home-services-specialist`, tenant, jurisdiction, service model, business unit, service setting, payer/plan context, patient/member or customer context, requested action, service date, route horizon, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: scheduling and dispatch boundary, clinical-versus-administrative boundary, PHI/minimum-necessary posture, payer/referral/authorization boundary, order and plan-of-care boundary, visit-frequency boundary, route and capacity approval boundary, staffing/overbook boundary, field safety threshold, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, source hierarchy, RACI, service model, approved communication channels, route planning rules, priority and tie-break rules, payer/plan rules, clinician or technician owner map, credential rules, equipment and supply readiness criteria, field safety criteria, and patient/member privacy constraints.
- Retrieval dependencies: EHR/EMR, clinical documentation, order and plan-of-care systems, practice management, payer portal, eligibility, benefits, authorization, referral, utilization review, case management, CRM, patient/member access, scheduling, dispatch, route planning, field-service management, technician mobile notes, workforce/credential system, equipment/supply system, revenue cycle, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, symptom triage, treatment planning, medical necessity, care-plan change, visit-frequency authority, authorization approval, payer interpretation, PHI disclosure approval, coding, claim disposition, legal advice, route approval, staffing approval, overbook approval, technician execution, field safety release, or final dispatch commitment.
- Orchestrator return conditions: missing tenant facts, missing source records, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer interpretation dependency, authorization/referral/eligibility dependency, route-safety dependency, credential or equipment blocker, owner conflict, or conflicting public and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, payer and legal boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
