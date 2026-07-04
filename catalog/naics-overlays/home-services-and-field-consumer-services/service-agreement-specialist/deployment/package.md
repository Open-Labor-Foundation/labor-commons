# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for agreement, warranty, CRM, scheduling, dispatch, work-order, technician/provider mobile, DMEPOS supplier, EHR/EMR, practice management, revenue cycle, payer portal, authorization, referral, eligibility, case management, document, privacy, and audit systems.
- Required configuration: Tenant service model, jurisdiction, business unit, provider type, facility type, service setting, payer/plan scope, agreement and cancellation policy, warranty/service-contract policy, DMEPOS supplier-standard owner, source-of-truth hierarchy, RACI, escalation SLA, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, technician/provider owner map, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, agreement terms, warranty terms, system mappings, customer/member records, patient/member records, service requests, schedules, technician/provider notes, payer data, claim references, and PHI handling rules remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy, payer contract, agreement terms, warranty terms, retrieved systems, and accountable owners determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not tune or adapt into sales approval, legal, clinical, privacy, payer, coding, claim, dispatch, technician, licensed trade, recall, safety, warranty-adjudication, or financial authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, PHI handling escalations, clinical or payer escalations, DMEPOS repair/warranty escalations, technician/provider-readiness escalations, agreement exception escalations, and completion evidence defects.
- Logging: Record source records, status transitions, agreement ID and terms version, covered service or asset, work-order state, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, residual risks, completion evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, agreement or warranty boundaries are unclear, DMEPOS supplier-standard handling is unsafe, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant operations, privacy, clinical, patient access, utilization management, revenue cycle, payer operations, agreement, legal, finance, field service, technician/provider, warranty, DMEPOS supplier-standard, safety, and compliance owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::home-services-and-field-consumer-services::service-agreement-specialist`, tenant, jurisdiction, service model, business unit, provider type, facility type, service setting, payer/plan context, agreement ID, terms version, covered service/asset, requested action, lifecycle state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: service agreement boundary, clinical-versus-administrative boundary, PHI/minimum-necessary posture, payer/referral/authorization boundary, agreement and cancellation boundary, warranty/service-contract boundary, DMEPOS supplier-standard boundary, pricing/refund approval boundary, technician/provider and licensed trade boundary, recall/safety-critical threshold, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, agreement terms, warranty terms, source hierarchy, RACI, service model, approved communication channels, cancellation and refund escalation rules, payer/plan rules, DMEPOS supplier owner map, technician/provider owner map, site-readiness criteria, and patient/member privacy constraints.
- Retrieval dependencies: service agreement or contract repository, warranty administrator or service-plan platform, CRM, scheduling, dispatch, work-order or FSM system, technician/provider mobile notes, DMEPOS delivery/maintenance/complaint records, EHR/EMR, practice management, revenue cycle, payer portal, referral, authorization, eligibility, case management, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical need, medical necessity, authorization approval, payer interpretation, PHI disclosure approval, coding, claim disposition, legal advice, contract interpretation, backdated coverage, refund or deductible approval, warranty adjudication, recall remedy, technician execution, licensed trade signoff, or safety release.
- Orchestrator return conditions: missing tenant facts, missing source records, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer interpretation dependency, agreement exception dependency, DMEPOS supplier-standard dependency, technician/provider or site-safety dependency, licensed trade dependency, recall/safety dependency, or conflicting public and tenant policy.

## Deployment And Rollback

- Deploy as a catalog spec pack for dispatcher use or just-in-time materialization.
- Require tenant retrieval hooks, privacy controls, source hierarchy, RACI, escalation SLAs, payer/plan context, agreement policy, warranty policy, DMEPOS owner map, technician/provider owner map, and adjacent specialist routes before runtime action.
- Roll back by disabling the validated claim, routing to orchestrator, and requiring revalidation if authority sources expire, tenant controls are missing, scenario coverage regresses, agreement/warranty/privacy routing fails, or unsafe completion/routing is observed.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, agreement/legal boundary review, warranty/DMEPOS boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
