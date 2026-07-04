# Deployment Package: Care coordination operations specialist

## Runtime And Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/healthcare/care-coordination-operations-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1398]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::healthcare::care-coordination-operations-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `coordination-handoffs-and-routing`
- industry_profile: `healthcare-and-care-delivery`
- definition_tier: `curated-row-override`
- lane_template_id: `coordination-and-handoffs`

## Tenant-Supplied Runtime Assumptions

- Care setting, payer, plan, service line, discharge destination, follow-up timeframe, patient/member identity, and requested coordination outcome.
- Assigned care team roles, prior owner, target owner, escalation SLAs, patient communication constraints, consent/proxy posture, and role-based access controls.
- Tenant source-of-truth hierarchy across:
  - EHR encounter, ADT, discharge, care-management, and transition-of-care queues,
  - referral management and scheduling systems,
  - CRM and patient outreach systems,
  - utilization review and case-management tools,
  - payer portal, eligibility, and authorization platforms,
  - document repositories and health information exchange interfaces,
  - consent, privacy, identity, access, audit, and retention systems.
- Tenant routing matrix for clinical review, patient access, utilization management, referral management, social work, revenue cycle, healthcare privacy, payer operations, and compliance.
- Facility, payer, service-line, jurisdiction, and patient-communication policies that may be stricter than public baselines.

## Materialization Notes For `commons-crew`

- Required task metadata:
  - queue slug, care setting, payer, service line, care stage, requested handoff action, next-owner expectation, and closure criteria.
  - artifact class, source system, record ID, freshness, owner, PHI classification, and audit reference for every cited item.
  - clinical, payer, privacy, social-barrier, and responsible-owner escalation routes.
- Required boundary metadata:
  - no diagnosis, treatment planning, medication instruction, clinical discharge judgment, payer coverage approval, authorization approval, PHI release approval, or social-work resolution authority.
  - explicit orchestrator return when required facts, system hierarchy, policy basis, owner map, or authority context is missing.
- Required output shapes:
  - transition-of-care handoff summary,
  - dependency or blocker log,
  - barrier escalation note,
  - routing confirmation note,
  - closed-loop coordination log,
  - adjacent-specialist routing note,
  - low-confidence escalation note.
- Refusal triggers must remain explicit:
  - request requires clinical care plan, diagnosis, medication instruction, treatment decision, or patient-safety interpretation,
  - request asks to override discharge, referral, authorization, eligibility, privacy, or consent requirements without responsible-owner approval,
  - request asks for payer interpretation, medical-necessity, coverage, appeal, coding, or claim decision,
  - PHI handling, consent, proxy, minimum-necessary, or role-based access is unresolved,
  - required records, owner acceptance, or closure evidence is missing.

## Operational Rollout

1. Enable this specialist in the healthcare overlay catalog as `specification-based`.
2. Configure retrieval connectors and source hierarchy for EHR, referral, scheduling, utilization, payer, outreach, privacy, and audit systems.
3. Configure adjacent-owner routes and escalation SLAs for clinical review, patient access, utilization management, referral management, social work, privacy, revenue cycle, payer operations, and compliance.
4. Validate scenario IDs and `evaluation/functionality-map.json` coverage against tenant-specific test fixtures.
5. Monitor blocked transition rate, missing artifact rate, owner-conflict rate, authorization/referral expiration escalations, PHI escalation rate, clinician escalation rate, and closed-loop handoff acceptance.

## Rollback

- Disable the healthcare care-coordination overlay execution path and return all new requests to the orchestrator.
- Freeze outputs created during unresolved blockers and mark them as coordination drafts pending owner review.
- Re-open package review if source hierarchy, privacy controls, clinical escalation paths, or payer/referral connectors produce unsafe or ambiguous behavior.
- Re-enable only after tenant routing, policy mappings, and scenario evidence are revalidated.

## Validation evidence

- Positioning: validated healthcare care-coordination operations overlay for transition-of-care, referral, authorization, scheduling, utilization, outreach, and barrier management workflows.
- Packaging: tenant-specialist entitlement with configurable healthcare systems, owner maps, PHI controls, and escalation SLAs.
- This pack is a `specification-based` package for safe adoption without claimed autonomous clinical, payer, privacy, or trusted built authority.
- Promotion criterion: promote to retained implementation only after common usage justifies implementation, tenant connector behavior is validated, safety and privacy controls are proven, production escalation evidence is reviewed, and a separate trusted build is committed.
