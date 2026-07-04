# Deployment Package

## Package

- Agent slug: `patient-access-specialist`
- Queue slug: `industry-overlays::healthcare::patient-access-specialist`
- Domain family: `naics-overlays/healthcare`
- Workflow phase group: `intake-access-and-initiation`
- Industry profile: `healthcare-and-care-delivery`
- Lane template: `intake-and-access`
- Definition tier: `curated-row-override`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`

## Runtime Posture

This package is a validated spec pack only. It does not include a trusted
built runtime, tool connector, production policy engine, or tenant-specific
retrieval implementation. A runtime may use the package for evaluation,
orchestration, prompt constraints, and acceptance criteria, but must not claim
trusted built authority until a separate build is committed, reviewed, tested,
and promoted.

## Deployment Notes

1. Register the spec pack at
   `catalog/naics-overlays/healthcare/patient-access-specialist/`.
2. Load the manifest, research summary, functionality map, scenario suite,
   readiness evidence, and package notes into the spec-pack catalog.
3. Keep the runtime strategy as `specification-based` unless a later PR adds an approved
   built runtime with connector tests and tenant retrieval controls.
4. Configure orchestration so patient access work starts only after the tenant
   supplies payer, plan, facility, provider type, service setting, source
   hierarchy, retrieval hooks, privacy, consent, queue ownership, and escalation
   SLA facts.
5. Route clinical triage, medical necessity, authorization approval, payer
   interpretation, privacy release, revenue-cycle, denials, billing, and care
   coordination requests to adjacent specialists.

## Required Runtime Metadata

- Task type, requested action, source queue, service line, service date, service
  setting, facility, provider, payer, plan, member status, and urgency flag.
- Patient identity posture: MRN, MPI match, date of birth, legal name, contact
  details, insurance card, subscriber/member identifiers, and demographic
  conflicts.
- Evidence posture: eligibility response, referral order, authorization status,
  payer portal record, scheduling request, registration edit, estimate status,
  patient communication note, consent/proxy status, and privacy restriction.
- Boundary posture: whether the task asks for administrative clearance,
  clinical judgment, payer interpretation, privacy release, billing/denial work,
  or care-coordination ownership.
- Traceability posture: controlling system of record, retrieval timestamp,
  evidence owner, next owner, missing items, escalation SLA, and audit trail.

## Tenant-Supplied Assumptions

- Tenant source-of-truth hierarchy across registration, scheduling, EHR,
  eligibility, payer portal, referral, authorization, estimate, communication,
  privacy, and audit systems.
- Payer mix, plan/product rules, facility and provider type, service setting,
  referral policy, prior authorization workflow, estimate workflow, and
  financial counseling ownership.
- Jurisdiction, business unit, program, facility policy, communication
  restrictions, consent/proxy handling, and minimum-necessary PHI controls.
- Current retrieval hooks, record locations, identity matching process, queue
  state names, escalation owners, and closure criteria.

## Regulated-Lane Caveats

- Active eligibility is not clearance when referral, authorization, estimate,
  privacy, identity, service-setting, or tenant prerequisites remain unresolved.
- Patient identity conflicts are patient-safety blockers and require
  reconciliation before scheduling or registration clearance.
- Prior authorization status evidence is not payer authorization approval unless
  the controlling record and tenant process establish that status.
- Price-estimate handling must preserve No Surprises Act, tenant financial
  counseling, and jurisdiction-specific requirements without inventing charges.
- PHI handling must follow minimum-necessary, requester verification, consent,
  proxy, communication restriction, audit, and retention controls.
- The lane must not make clinical triage, medical necessity, diagnosis,
  treatment, utilization review, authorization approval, privacy-release,
  legal, claim, denial, or reimbursement decisions.

## Refusal And Orchestrator Return Conditions

- Required tenant facts, systems, retrieval hooks, payer rules, source hierarchy,
  service setting, facility rules, or privacy controls are missing and would
  change the disposition.
- Registration, EHR, scheduling, eligibility, payer portal, referral,
  authorization, estimate, communication, or privacy records materially
  conflict.
- The request asks to schedule, register, or clear service despite unresolved
  identity, eligibility, referral, authorization, estimate, consent, privacy, or
  documentation blockers.
- The request requires licensed clinical judgment, clinical triage, medical
  necessity, payer policy interpretation, authorization approval, privacy-release
  approval, legal interpretation, claim correction, denial cleanup, or revenue
  strategy.

## Rollback

Rollback is catalog-level because the package is `specification-based`.

1. Remove or disable the package path from catalog loading.
2. Revert any orchestration mapping that routes healthcare patient access work
   to this spec pack.
3. Restore the previous healthcare overlay catalog snapshot or branch state.
4. Confirm no runtime claims trusted built execution for this lane.
5. Re-run `npm run audit:spec-pack -- --industry healthcare --agent patient-access-specialist`
   after rollback or replacement.

## Promotion Path

Promote this overlay to a retained implementation only after repeated usage proves
the lane is common enough and a separate implementation PR adds:

- Tenant connector adapters for registration, scheduling, EHR, eligibility,
  payer portal, authorization, referral, estimate, privacy, communication, and
  audit systems.
- Policy configuration for payer/plan/facility/service-setting rules and source
  hierarchy.
- PHI handling controls, audit logging, retention handling, and requester-role
  checks.
- Scenario tests covering all evaluation scenarios in this package against
  representative tenant fixtures.
- Human approval that the built runtime preserves the administrative boundary
  and continues to refuse clinical, payer, privacy, and revenue-cycle authority.
