# Deployment Package: Outpatient documentation specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/ambulatory-and-physician-services/outpatient-documentation-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1062]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::ambulatory-and-physician-services::outpatient-documentation-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `records-documentation-and-administration`
- industry_profile: `cross-industry`
- definition_tier: `approved-lane-template`
- lane_template_id: `records-and-documentation`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for record retention, amendment handling, chart-completion rules, proxy access, portal-release timing, privacy exceptions, and approval boundaries.
- Service context:
  - clinic or physician-practice model,
  - governing jurisdiction,
  - payer or program constraints,
  - whether sensitive-result or segmented-record policies narrow release behavior.
- Systems-of-record endpoints or connectors for:
  - ambulatory EHR and encounter records,
  - practice-management and registration data,
  - document repository or HIM queue,
  - patient portal and ROI workflows,
  - referral, order, or result-routing work queues,
  - coding-support or audit review systems when relevant,
  - audit logs and retention controls.
- Adjacent specialist routing registry for clinician, coding, privacy or HIM, compliance, legal, and designated approver lanes.

## Materialization Notes for `commons-crew`

- The runtime must retrieve governing jurisdiction, service line, record-source hierarchy, portal-release posture, and amendment workflow before producing a final completeness or release-ready statement.
- Required output shapes:
  - document or records completeness summary,
  - administrative status note,
  - document or evidence packet,
  - record update note,
  - audit-trail or exception summary,
  - retention, access, or governance escalation package.
- Hard refusals must remain explicit:
  - no backdating, deletion, or concealment of official records,
  - no approval of coding, legal sufficiency, claim, or official amendment outcomes,
  - no record release when proxy authority, designated-record-set scope, or documented exception posture is unresolved,
  - no forward movement when required note, order, result, or signature evidence is missing.

## Operational Rollout

1. Enable this overlay in the catalog.
2. Configure tenant retrieval hooks, source precedence, and authority maps.
3. Validate scenario coverage and readiness evidence against the package files.
4. Enable orchestrator routing for clinician, coding, privacy, legal, and governance escalations.
5. Monitor evidence-gap rates, unsigned-record incidents, amendment escalations, portal-release conflicts, and source-precedence disputes.

## Rollback

- Disable overlay execution path for ambulatory documentation actions.
- Void any in-flight autonomous outputs that depend on unresolved access, amendment, retention, or source-precedence conflicts.
- Reopen issue-level review, recheck authoritative sources and tenant policies, then re-enable after corrections.

## Validation evidence

- Positioning: validated ambulatory documentation overlay for physician practices, multispecialty clinics, and outpatient service operators that need bounded chart-governance support.
- The pack is intentionally **specification-based** and does not claim autonomous approval authority or a retained implementation.
- Promotion criterion: repeated runtime demand, stable scenario outcomes, and explicit product and governance approval for a separately committed retained implementation.
