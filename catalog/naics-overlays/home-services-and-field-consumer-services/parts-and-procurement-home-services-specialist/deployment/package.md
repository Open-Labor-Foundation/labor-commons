# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for CRM, field-service management, scheduling, dispatch, work-order, technician mobile, inventory, warehouse, ERP, purchasing, vendor, warranty, recall, EHR/EMR, practice management, revenue cycle, payer portal, authorization, referral, eligibility, case management, document, privacy, and audit systems.
- Required configuration: Tenant service model, jurisdiction, business unit, provider type, service setting, product category, payer/plan scope, vendor policy, approved-source and substitute matrix, warranty policy, recall and safety-hold handling, source-of-truth hierarchy, RACI, escalation SLA, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, technician owner map, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, vendor terms, system mappings, customer/member records, patient/member records, work orders, inventory records, purchase orders, technician notes, payer data, warranty data, recall posture, and PHI handling rules remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy, payer contract, vendor terms, product documentation, retrieved systems, and accountable owners determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not tune or adapt into clinical, privacy, payer, coding, claim, supplier approval, spend approval, warranty remedy, technician, licensed trade, safety, legal, or financial authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, PHI handling escalations, patient-safety escalations, vendor-risk escalations, recall or safety-hold escalations, repeat vendor failure, and resolution evidence defects.
- Logging: Record source records, support states, work order, requested part, model, serial, inventory state, approved vendor, PO status, ETA, warranty or recall posture, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, residual risks, resolution evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, approved-source boundaries are unclear, recall/safety controls are unavailable, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant operations, procurement, inventory, vendor management, privacy, clinical, patient access, utilization management, revenue cycle, payer operations, legal, finance, field service, technician, safety, quality, warranty, and compliance owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::home-services-and-field-consumer-services::parts-and-procurement-home-services-specialist`, tenant, jurisdiction, service model, business unit, service setting, product category, payer/plan context, work order, requested part, model, serial, requested action, support state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: parts/procurement support boundary, clinical-versus-administrative boundary, PHI/minimum-necessary posture, payer/referral/authorization boundary, approved-source and substitute boundary, warranty boundary, spend approval boundary, recall and product-safety boundary, hazardous-material and refrigerant boundary, technician and licensed trade boundary, safety-critical threshold, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, vendor terms, source hierarchy, RACI, service model, approved communication channels, approved-source matrix, substitute matrix, warranty and return escalation rules, recall handling rules, payer/plan rules, technician owner map, site-readiness criteria, and patient/member privacy constraints.
- Retrieval dependencies: CRM, work-order or FSM system, scheduling, dispatch, technician mobile notes, inventory or warehouse system, ERP or purchasing system, purchase-order repository, vendor portal, shipment and receiving records, warranty system, recall or product-safety repository, EHR/EMR, practice management, revenue cycle, payer portal, referral, authorization, eligibility, case management, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical need, medical necessity, authorization approval, payer interpretation, PHI disclosure approval, coding, claim disposition, legal advice, contract interpretation, vendor approval, substitute-part approval, spend approval, warranty remedy, recall release, hazardous-material release, technician execution, licensed trade signoff, or safety release.
- Orchestrator return conditions: missing tenant facts, missing source records, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer interpretation dependency, approved-source exception, vendor or spend approval dependency, warranty or recall dependency, hazardous-material or refrigerant dependency, technician or site-safety dependency, licensed trade dependency, or conflicting public and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, tenant isolation controls, privacy and security review evidence, clinical and compliance boundary review, vendor/procurement/legal boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
