# Deployment Package

## Package

- Agent slug: `hospital-admissions-specialist`
- Queue slug: `industry-overlays::hospitals-and-health-systems::hospital-admissions-specialist`
- Domain family: `naics-overlays/hospitals-and-health-systems`
- Workflow phase group: `intake-access-and-initiation`
- Industry profile: `healthcare-and-care-delivery`
- Lane template: `intake-and-access`
- Definition tier: `approved-lane-template`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`

## Runtime Posture

This package is a validated spec pack only. It does not include a trusted
built runtime, tool connector, production policy engine, PHI disclosure engine,
bed-management integration, or tenant-specific retrieval implementation. A
runtime may use the package for evaluation, orchestration, prompt constraints,
and acceptance criteria, but must not claim trusted built authority until a
separate build is committed, reviewed, tested, and promoted.

## Deployment Notes

1. Register the spec pack at
   `catalog/naics-overlays/hospitals-and-health-systems/hospital-admissions-specialist/`.
2. Load the manifest, research summary, functionality map, scenario suite,
   readiness evidence, release review, deployment notes
   into the spec-pack catalog.
3. Keep the runtime strategy as `specification-based` unless a later PR adds an approved
   built runtime with connector tests, PHI controls, tenant retrieval controls,
   and queue integration.
4. Configure orchestration so admissions work starts only after the tenant
   supplies facility, service line, admission type, payer, plan, provider type,
   source hierarchy, EHR/ADT/bed-board retrieval hooks, privacy and consent
   rules, queue ownership, escalation SLA, and utilization-review routing facts.
5. Route clinical admission decisions, medical necessity, level-of-care,
   isolation or patient-safety placement, authorization approval, payer
   interpretation, privacy release, coding, billing, denials, discharge
   planning, and care-transition requests to adjacent specialists.

## Required Runtime Metadata

- Task type, requested action, source queue, admission request type, admit
  source, facility, service line, service date or arrival window, provider,
  payer, plan, member status, encounter class, bed request, and urgency flag.
- Patient identity posture: MRN, MPI match, date of birth, legal name, contact
  details, insurance card, subscriber/member identifiers, and demographic or
  encounter conflicts.
- Evidence posture: EHR/EMR record, ADT event or encounter shell, admission or
  observation order, bed-board entry, transfer center case ID, eligibility
  response, referral record, authorization status, payer portal record,
  utilization review intake flag, case management note, consent/proxy status,
  privacy restriction, and patient communication note.
- Boundary posture: whether the task asks for administrative admission
  readiness, clinical judgment, medical necessity, level-of-care decision, payer
  interpretation, authorization approval, privacy release, coding, billing,
  denial/appeal, discharge planning, or care-transition ownership.
- Traceability posture: controlling system of record, retrieval timestamp,
  evidence owner, next owner, missing items, escalation SLA, and audit trail.

## Tenant-Supplied Assumptions

- Tenant source-of-truth hierarchy across EHR/EMR, ADT, registration, order
  entry, bed board, eligibility, payer portal, referral, authorization,
  utilization review, case management, transfer center, privacy, consent,
  communication, document repository, revenue-cycle, and audit systems.
- Facility, service model, service line, bed class, admission type, direct-admit
  workflow, transfer-center workflow, observation-to-inpatient workflow,
  placement queue names, and closure criteria.
- Payer mix, plan/product rules, facility and provider type, referral policy,
  prior authorization workflow, payer notification workflow, utilization review
  owner, and payer-facing escalation owner.
- Jurisdiction, business unit, program, facility policy, communication
  restrictions, consent/proxy handling, patient-directory posture, and
  minimum-necessary PHI controls.
- Current retrieval hooks, record locations, identity matching process,
  escalation owners, monitoring expectations, and audit-retention requirements.

## Regulated-Lane Caveats

- Active eligibility is not admission clearance when order, referral,
  authorization, encounter, bed/placement, privacy, identity, service-line, or
  tenant prerequisites remain unresolved.
- Patient identity, encounter, ADT, and demographic conflicts are patient-safety
  blockers and require reconciliation before acceptance or placement readiness.
- Ambiguous inpatient, observation, short-stay, or outpatient order language
  must not be converted into inpatient admission readiness without controlling
  order, practitioner, utilization-review, or tenant-policy clarification.
- Prior authorization status evidence is not payer authorization approval unless
  the controlling record and tenant process establish that status.
- Bed, isolation, level-of-care, and placement decisions may carry clinical,
  safety, capacity, infection-prevention, or licensed authority and must be
  routed when the request exceeds administrative readiness validation.
- PHI handling must follow minimum-necessary, requester verification, consent,
  proxy, communication restriction, patient-directory, audit, and retention
  controls.
- The lane must not make clinical admission, medical necessity, diagnosis,
  treatment, utilization review, authorization approval, privacy-release, legal,
  coding, claim, denial, reimbursement, discharge-planning, or care-transition
  decisions.

## Refusal And Orchestrator Return Conditions

- Required tenant facts, systems, retrieval hooks, payer rules, source
  hierarchy, service-line rules, bed-management facts, facility rules, or
  privacy controls are missing and would change the disposition.
- EHR, ADT, registration, order, bed-management, eligibility, payer portal,
  referral, authorization, utilization review, case management, transfer center,
  privacy, communication, or audit records materially conflict.
- The request asks to accept intake, reserve a bed, admit, or clear placement
  despite unresolved identity, encounter, order, eligibility, referral,
  authorization, consent, privacy, placement, or documentation blockers.
- The request requires licensed clinical judgment, clinical triage, medical
  necessity, level-of-care selection, payer policy interpretation,
  authorization approval, privacy-release approval, legal interpretation,
  coding, claim correction, denial cleanup, discharge planning, or
  care-transition strategy.

## Rollback

Rollback is catalog-level because the package is `specification-based`.

1. Remove or disable the package path from catalog loading.
2. Revert any orchestration mapping that routes hospital admissions work to
   this spec pack.
3. Restore the previous industry-overlay catalog snapshot or branch state.
4. Confirm no runtime claims trusted built execution for this lane.
5. Re-run `npm run audit:spec-pack -- --industry hospitals-and-health-systems --agent hospital-admissions-specialist`
   after rollback or replacement.

## Promotion Path

Promote this overlay to a retained implementation only after repeated usage proves
the lane is common enough and a separate implementation PR adds:

- Tenant connector adapters for EHR/EMR, ADT, registration, order entry,
  bed board, transfer center, eligibility, payer portal, authorization,
  referral, utilization review, case management, privacy, consent, document,
  communication, revenue-cycle, and audit systems.
- Policy configuration for payer, plan, facility, service-line, bed class,
  source hierarchy, direct-admit, transfer-center, observation-to-inpatient, and
  escalation rules.
- PHI handling controls, requester-role checks, patient-directory constraints,
  audit logging, retention handling, and minimum-necessary evidence packaging.
- Scenario tests covering all evaluation scenarios in this package against
  representative tenant fixtures.
- Human approval that the built runtime preserves the administrative boundary
  and continues to refuse clinical, payer, privacy, utilization-review,
  revenue-cycle, discharge, and patient-safety authority.
