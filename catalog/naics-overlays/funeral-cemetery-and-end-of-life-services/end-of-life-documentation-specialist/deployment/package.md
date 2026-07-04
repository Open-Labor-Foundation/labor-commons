# Deployment Package: End-of-life documentation specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/funeral-cemetery-and-end-of-life-services/end-of-life-documentation-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1368]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::funeral-cemetery-and-end-of-life-services::end-of-life-documentation-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `records-documentation-and-administration`
- industry_profile: `cross-industry`
- definition_tier: `approved-lane-template`
- lane_template_id: `records-and-documentation`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for Funeral Rule evidence, vital-record handling, disposition permits, cremation authorization, cemetery interment records, preneed files, privacy and access, retention, official-record boundaries, and approval authority.
- Facility and jurisdiction context:
  - funeral home, crematory, cemetery, transfer service, preneed office, or aftercare team role,
  - governing state, locality, and facility or cemetery policy,
  - disposition method such as burial, cremation, inurnment, shipment, body donation, or other lawful final disposition,
  - whether veteran, SSA, insurance, probate, or preneed support artifacts are involved.
- Systems-of-record endpoints or connectors for:
  - funeral home management and arrangement case files,
  - EDRS or state vital-record records,
  - medical examiner or coroner release status,
  - crematory tracking and chain of custody,
  - cemetery interment rights, lot, niche, and marker records,
  - preneed trust, insurance, and contract records,
  - document repositories, retention schedules, IAM, and audit logs.
- Adjacent specialist routing registry for licensed funeral director, vital-record registrar, medical examiner or coroner, crematory manager, cemetery authority, legal/privacy, benefits, preneed financial, and billing approval lanes.

## Materialization Notes for `commons-crew`

- Retrieve governing jurisdiction, disposition method, establishment role, authorizing-agent posture, source hierarchy, and record-owner map before producing a final completeness statement.
- Required output shapes:
  - document or records completeness summary,
  - administrative status note,
  - document or evidence packet,
  - record update note,
  - audit-trail or exception summary,
  - retention, access, or governance escalation package,
  - adjacent-lane routing note.
- Hard refusals must remain explicit:
  - no backdating, deletion, sanitizing, or concealment of official records,
  - no approval of legal right of disposition, cremation, interment, disinterment, death certificate amendment, benefit eligibility, preneed financial, payment, or refund outcomes,
  - no disclosure or release of records, cremated remains, or personal effects when authority, identity, privacy, or access is unresolved.

## Operational Rollout

1. Enable this overlay in the catalog.
2. Configure tenant retrieval hooks and authority maps.
3. Validate scenario coverage and readiness evidence against the package files.
4. Enable orchestrator routing for licensed, legal, registrar, medical examiner/coroner, cemetery, crematory, benefits, privacy, preneed, and financial escalations.
5. Monitor evidence-gap rates, conflicting-record incidents, authorization disputes, retention/access escalations, and identity or custody mismatch rates.

## Rollback

- Disable overlay execution path for funeral, cemetery, cremation, vital-record, and benefit-support documentation actions.
- Void or re-review any in-flight autonomous outputs that depend on unresolved authorization, identity, custody, permit, retention, access, source-precedence, or policy conflicts.
- Reopen issue-level review, refresh authoritative sources and tenant policies, correct package files, then re-enable after validation passes.

## Validation evidence

- Positioning: validated funeral, cemetery, and end-of-life documentation overlay for operators that need bounded record governance for arrangement files, vital records, cremation, interment, and survivor-support packets.
- The pack is intentionally `specification-based` and does not claim autonomous disposition approval, legal authority, benefit adjudication, or a retained implementation.
- Promotion criterion: repeated runtime demand, stable scenario outcomes, source-refresh automation, production retrieval adapters, privacy/retention controls, and explicit product and governance approval for a separately committed retained implementation.
