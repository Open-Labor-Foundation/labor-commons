# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for estimate, agreement, CRM, scheduling, dispatch, work-order, technician mobile, EHR/EMR, practice management, revenue cycle, payer portal, authorization, referral, eligibility, case management, document, privacy, and audit systems.
- Required configuration: Tenant service model, jurisdiction, business unit, provider type, service setting, payer/plan scope, agreement and cancellation policy, source-of-truth hierarchy, RACI, escalation SLA, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, technician owner map, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, agreement terms, system mappings, customer/member records, patient/member records, estimate records, schedules, technician notes, payer data, and PHI handling rules remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy, payer contract, agreement terms, retrieved systems, and accountable owners determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not tune or adapt into sales approval, legal, clinical, privacy, payer, coding, claim, technician, licensed trade, safety, or financial authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, PHI handling escalations, technician-readiness escalations, agreement exception escalations, and completion evidence defects.
- Logging: Record source records, status transitions, estimate version, agreement state, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, residual risks, completion evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, agreement boundaries are unclear, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant operations, privacy, clinical, patient access, utilization management, revenue cycle, payer operations, agreement, legal, finance, field service, technician, and compliance owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::home-services-and-field-consumer-services::estimate-follow-up-specialist`, tenant, jurisdiction, service model, business unit, service setting, payer/plan context, estimate ID/version, requested action, lifecycle state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: estimate follow-up boundary, clinical-versus-administrative boundary, PHI/minimum-necessary posture, payer/referral/authorization boundary, agreement and cancellation boundary, pricing/refund approval boundary, technician and licensed trade boundary, safety-critical threshold, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, agreement terms, source hierarchy, RACI, service model, approved communication channels, cancellation and refund escalation rules, payer/plan rules, technician owner map, site-readiness criteria, and patient/member privacy constraints.
- Retrieval dependencies: estimate/quoting platform, agreement or e-signature repository, CRM, scheduling, dispatch, work-order or FSM system, technician mobile notes, EHR/EMR, practice management, revenue cycle, payer portal, referral, authorization, eligibility, case management, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical need, medical necessity, authorization approval, payer interpretation, PHI disclosure approval, coding, claim disposition, legal advice, contract interpretation, price approval, technician execution, licensed trade signoff, or safety release.
- Orchestrator return conditions: missing tenant facts, missing source records, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer interpretation dependency, agreement exception dependency, technician or site-safety dependency, licensed trade dependency, or conflicting public and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, agreement/legal boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
