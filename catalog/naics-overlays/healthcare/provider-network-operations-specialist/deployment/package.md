# Deployment Package: Provider network operations specialist

## Runtime And Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/healthcare/provider-network-operations-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1412]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::healthcare::provider-network-operations-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `execution-processing-and-fulfillment`
- industry_profile: `healthcare-and-care-delivery`
- definition_tier: `curated-row-override`
- lane_template_id: `systems-and-technology`

## Tenant-Supplied Runtime Assumptions

- Provider legal entity, NPI, TIN, service location, specialty or facility type, payer, plan, product/network, service area, effective dates, termination dates, requested action, and publication target.
- Credentialing and recredentialing status, contract status, delegated roster status, provider agreement or amendment pointers, directory publication cadence, and approval matrix.
- Tenant source-of-truth hierarchy across provider network management, credentialing, contract lifecycle, roster feed, directory publishing, CRM, case management, claims, referral, authorization, eligibility, payer portal, document, privacy, and audit systems.
- Tenant routing matrix for credentialing, contracting, payer operations, provider relations, patient access, referral management, utilization management, revenue cycle, privacy, compliance, legal, and clinical review.
- Facility, payer, product, state Medicaid, state insurance, delegated entity, provider agreement, publication, PHI, consent, and access-impact policies that may be stricter than public baselines.

## Materialization Notes For `commons-crew`

- Required task metadata:
  - queue slug, provider entity, NPI, TIN, provider type, product/network, payer, plan, service area, requested lifecycle action, next-owner expectation, and closure criteria.
  - artifact class, source system, record ID, freshness, owner, publication target, PHI classification, and audit reference for every cited item.
  - credentialing, contracting, payer, privacy, access, compliance, legal, and clinical escalation routes.
- Required boundary metadata:
  - no credentialing committee approval, contract approval, payer interpretation, network adequacy legal interpretation, privacy release approval, medical necessity, clinical appropriateness, diagnosis, treatment planning, coding, claim disposition, or formal appeal authority.
  - explicit orchestrator return when required facts, system hierarchy, policy basis, owner map, or authority context is missing.
- Required output shapes:
  - provider-issue disposition note,
  - roster or directory correction summary,
  - exception queue note,
  - onboarding or termination lifecycle summary,
  - adjacent-specialist routing note,
  - boundary refusal note,
  - completion evidence record.
- Refusal triggers must remain explicit:
  - request requires contract approval, credentialing committee signoff, unsupported directory exception, payer policy interpretation, clinical judgment, privacy release, legal signoff, or compliance approval,
  - request asks to publish provider status without authoritative roster, credentialing, contract, directory, and tenant-policy evidence,
  - PHI handling, consent, minimum-necessary, role-based access, or audit posture is unresolved,
  - required records, owner acknowledgement, publication proof, rollback condition, or completion evidence is missing.

## Operational Rollout

1. Enable this specialist in the healthcare overlay catalog as `specification-based`.
2. Configure retrieval connectors and source hierarchy for provider network management, credentialing, contract lifecycle, roster feeds, directory publishing, CRM, case management, claims, referral, authorization, eligibility, privacy, and audit systems.
3. Configure adjacent-owner routes and escalation SLAs for credentialing, contracting, payer operations, provider relations, patient access, utilization management, privacy, compliance, legal, revenue cycle, and clinical review.
4. Validate scenario IDs and `evaluation/functionality-map.json` coverage against tenant-specific test fixtures.
5. Monitor blocked publication rate, credentialing-contract-directory conflict rate, unsupported status-change refusal rate, PHI escalation rate, member access issue escalation rate, rollback rate, and completion evidence quality.

## Rollback

- Disable the healthcare provider-network operations overlay execution path and return all new requests to the orchestrator.
- Freeze outputs created during unresolved blockers and mark them as provider-network drafts pending owner review.
- Re-open package review if source hierarchy, privacy controls, credentialing routes, contract routes, directory publication controls, or payer/referral/authorization connectors produce unsafe or ambiguous behavior.
- Re-enable only after tenant routing, policy mappings, rollback controls, and scenario evidence are revalidated.

## Validation evidence

- Positioning: validated healthcare provider-network operations overlay for roster, directory, onboarding, termination, issue management, and operational follow-up workflows.
- Packaging: tenant-specialist entitlement with configurable provider-network systems, source hierarchy, owner maps, PHI controls, publication controls, rollback, and escalation SLAs.
- This pack is a `specification-based` package for safe adoption without claimed autonomous credentialing, contracting, payer, privacy, clinical, compliance, legal, or trusted built authority.
- Promotion criterion: promote to retained implementation only after common usage justifies implementation, tenant connector behavior is validated, safety and privacy controls are proven, provider-directory publication and rollback evidence is reviewed, and a separate trusted build is committed.
