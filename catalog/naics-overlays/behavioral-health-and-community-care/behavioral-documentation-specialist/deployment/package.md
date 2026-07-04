# Deployment Package: Behavioral documentation specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/behavioral-health-and-community-care/behavioral-documentation-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1121]()
- Runtime remains `specification-based` until a separate trusted built implementation is explicitly promoted.

## Required Metadata Inputs

- industry overlay slug: `industry-overlays::behavioral-health-and-community-care::behavioral-documentation-specialist`
- runtime_strategy: `specification-based`
- target_delivery_level: `validated`
- validation_profile: `standard`
- workflow_phase_group: `records-documentation-and-administration`
- industry_profile: `cross-industry`
- definition_tier: `approved-lane-template`
- lane_template_id: `records-and-documentation`

## Tenant-Supplied Runtime Assumptions

- Tenant policy map for record retention, amendment, release, privacy, psychotherapy-note handling, Part 2 handling, official-record rules, and approval boundaries.
- Program context:
  - care setting and program model,
  - governing jurisdiction,
  - payer or funding constraints,
  - whether records include Part 2-covered SUD treatment information.
- Systems-of-record endpoints or connectors for:
  - behavioral health EHR and encounter records,
  - document repository or HIM queue,
  - release-of-information and access-request workflows,
  - quality or documentation audit systems,
  - payer or utilization-review portals when relevant,
  - audit logs and retention controls.
- Adjacent specialist routing registry for clinician, clinical supervisor, privacy or HIM, utilization-review, coding or billing, and legal or compliance lanes.

## Materialization Notes for `commons-crew`

- The runtime must retrieve governing jurisdiction, program model, note-type taxonomy, and source-of-truth hierarchy before producing a final completeness or release-ready statement.
- Required output shapes:
  - document or records completeness summary,
  - administrative status note,
  - document or evidence packet,
  - record update note,
  - audit-trail or exception summary,
  - retention, access, or governance escalation package.
- Hard refusals must remain explicit:
  - no backdating, deletion, or sanitization of official records,
  - no approval of clinical, legal, payer, or official record outcomes,
  - no release of psychotherapy notes or Part 2 material without the required authority,
  - no forward movement when active safety-sensitive disclosure facts are unresolved.

## Operational Rollout

1. Enable this overlay in the catalog.
2. Configure tenant retrieval hooks, source precedence, and authority maps.
3. Validate scenario coverage and readiness evidence against the package files.
4. Enable orchestrator routing for clinician, privacy, legal, utilization-review, and patient-safety escalations.
5. Monitor evidence-gap rates, conflicting-record incidents, release escalations, and tenant-policy conflict volume.

## Rollback

- Disable overlay execution path for behavioral-health documentation actions.
- Void any in-flight autonomous outputs that depend on unresolved classification, retention, access, or source-precedence conflicts.
- Reopen issue-level review, recheck authoritative sources and tenant policies, then re-enable after corrections.

## Validation evidence

- Positioning: validated behavioral-health documentation overlay for community mental health, outpatient behavioral health, and community care operators that need bounded record governance.
- The pack is intentionally **specification-based** and does not claim autonomous approval authority or a retained implementation.
- Promotion criterion: repeated runtime demand, stable scenario outcomes, and explicit product and governance approval for a separately committed retained implementation.
