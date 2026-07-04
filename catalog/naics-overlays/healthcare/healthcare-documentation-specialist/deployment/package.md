# Deployment Package: Healthcare documentation specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/healthcare/healthcare-documentation-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1404]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::healthcare::healthcare-documentation-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `records-documentation-and-administration`
- industry_profile: `healthcare-and-care-delivery`
- definition_tier: `curated-row-override`
- lane_template_id: `records-and-documentation`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for legal health record, designated record set, release-of-information, amendment handling, consent, proxy access, minimum necessary, retention, legal hold, information-blocking, record completion, deficiency, attestation, and approval boundaries.
- Jurisdiction, business unit, facility or provider type, care setting, service line, payer or plan, coverage rules, authorization dependencies, referral dependencies, and service-date scope.
- Patient or member identity, requester identity, personal-representative or proxy evidence, authorization status, consent status, access restrictions, PHI segmentation constraints, and requested disclosure purpose.
- Systems-of-record endpoints or connectors for EHR documentation, HIM workflow, document management, ROI, record-completion tracking, deficiency queues, signature or attestation logs, coding or billing support queues, payer portals, referral or authorization systems, legal holds, compliance, and audit logs.
- Adjacent specialist routing registry for HIM, privacy, ROI, clinician-owner, CDI, coding, billing, payer operations, patient access, compliance, legal, and risk management lanes.

## Materialization Notes for `commons-crew`

- The runtime must retrieve jurisdiction, care setting, payer or plan, patient or member status, service dates, legal health record definition, designated record set definition, source-of-truth hierarchy, record locations, authorization status, referral or eligibility dependencies, consent posture, access constraints, retention rules, and minimum-necessary controls before producing final completeness or release-preparation statements.
- Required output shapes:
  - record-completeness summary with missing signatures, deficiencies, evidence references, and next owner,
  - ROI or amendment routing note with authorization status, access constraints, and owner route,
  - record update note,
  - document or evidence packet,
  - audit-trail or exception summary,
  - privacy, legal-hold, payer-policy, clinical-review, or source-conflict escalation.
- Hard refusals must remain explicit:
  - no authoring, rewriting, inferring, backdating, deleting, or concealing clinical documentation,
  - no disclosure when authorization, legal basis, requester authority, role-based access, or minimum-necessary support is missing,
  - no approval of amendment, release, legal, privacy, payer, coding, billing, claim, diagnosis, treatment, or medical necessity outcomes,
  - no completeness certification when source systems conflict or required notes, consents, signatures, attestations, amendments, deficiencies, or external attachments are unresolved.

## Operational Rollout

1. Enable this overlay in the catalog with `specification-based` runtime behavior.
2. Configure tenant retrieval hooks for EHR, HIM, ROI, document management, record-completion, deficiency, attestation, coding-support, billing-support, payer, referral, authorization, legal-hold, privacy, and audit systems.
3. Configure tenant source precedence for legal health record, designated record set, scanned records, external records, addenda, amendments, disclosure logs, and record-completion statuses.
4. Enable orchestrator routing for HIM, privacy, ROI, clinician-owner, CDI, coding, billing, payer, patient access, compliance, legal, and risk management escalations.
5. Validate scenario coverage and readiness evidence against the package files before use.
6. Monitor missing authorization rates, minimum-necessary escalations, unsigned-record backlog, deficiency aging, amendment-routing exceptions, source conflicts, legal-hold conflicts, and adjacent-lane handoffs.

## Rollback

- Disable overlay execution path for healthcare documentation actions.
- Preserve generated evidence packets and mark any in-flight outputs as advisory if authorization, release, amendment, legal-hold, source-precedence, clinical-review, coding, billing, or payer-policy facts were unresolved.
- Return affected work items to the responsible HIM, ROI, privacy, clinician-owner, coding, billing, legal, or payer specialist queue.
- Reopen issue-level review, recheck authoritative sources and tenant policies, refresh the functionality map and scenarios, then re-enable after corrections pass audit.

## Validation evidence

- Positioning: validated healthcare documentation overlay for health systems, hospitals, ambulatory networks, specialty providers, and care-delivery operators that need bounded documentation integrity support across EHR, HIM, ROI, amendment, deficiency, and audit workflows.
- The pack is intentionally `specification-based` and does not claim autonomous clinical, privacy, legal, payer, coding, billing, release, amendment, or retained implementation authority.
- Promotion criterion: repeated tenant demand, stable scenario outcomes, validated retrieval hooks, auditable source-to-output traces, privacy and clinical governance approval, and a separately committed retained implementation with rollback, monitoring, and human-review controls.
