# Deployment Package

## Package

- Agent slug: `travel-operations-specialist`
- Queue slug: `industry-overlays::hospitality-and-travel::travel-operations-specialist`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Validation profile: `standard`
- Release version: `v0.1.0`

This is a validated spec pack for healthcare-aware travel operations inside
the hospitality-and-travel industry overlay. It does not include a trusted built
runtime. Runtime systems may use the spec for routing, evaluation, and
configuration until a separate trusted build is implemented and promoted.

## Included Artifacts

- `manifest.yaml` with scope, boundaries, sources, execution lifecycle, runtime strategy, validation posture, and tenant adaptation policy.
- `evaluation/scenarios.md` with 13 must-pass scenarios.
- `evaluation/functionality-map.json` covering shared, execution-processing-and-fulfillment, and healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario-family coverage, and ambiguity handling.
- `evaluation/results.json` with passing validation evidence.
- `readiness/evidence.json` and `readiness/release.md` with human verification and market readiness.
- `positioning/readiness.md` with commercialization positioning.

## Materialization Requirements For `commons-crew`

Required task and boundary metadata:

- Lane slug, workflow phase group, resolved healthcare industry profile, delivery target, runtime strategy, lifecycle states, and adjacent specialist registry.
- Request classes: accepted, prerequisite-check, ready-to-book, booked, confirmed, in-transit, exception, rework, held, escalated, completed, closed-with-evidence, blocked, and out of scope.
- Refusal and escalation triggers for PHI, clinical judgment, medical necessity, payer interpretation, authorization approval, coding, claims, denials, appeals, refunds, waivers, reimbursements, compensation, legal advice, identity mismatch, transport safety, lodging approval, and patient-safety authority.

Tenant-supplied or runtime-retrieved assumptions:

- Tenant service model, medical-travel program rules, NEMT policy, broker rules, lodging/transportation policies, service recovery matrix, refund/reimbursement/compensation thresholds, facility and jurisdiction constraints.
- Current systems of record and retrieval hooks for EHR/EMR, master patient index, practice management, scheduling, payer portal, eligibility, referral, authorization, utilization review, case management, discharge planning, CRM, contact center, communications, privacy/consent, transportation broker, dispatch, lodging, booking, revenue cycle, claim, denial, and appeal systems.
- Payer, plan, coverage rules, provider/facility type, service setting, patient/member status, service date, appointment, authorization status, referral dependencies, discharge readiness, travel mode, pickup window, lodging requirement, privacy posture, requester authority, and minimum-necessary handling constraints.
- Authority owners and SLAs for clinical review, privacy, patient access, utilization management, payer operations, coding, revenue cycle, denials, appeals, transportation broker operations, lodging approval, service recovery, safety, compliance, and legal review.

Regulated-lane caveats:

- The lane is administrative travel operations execution, not clinical care, utilization management, payer interpretation, coding, claims adjudication, privacy approval, legal advice, financial approval, dispatch safety authority, or travel-agent legal advice.
- PHI handling requires requester verification, role-based access, approved channels, minimum-necessary scope, and auditability.
- Active eligibility does not prove travel readiness when referral, authorization, documentation, transport benefit, broker, lodging, service setting, consent, discharge, or tenant policy dependencies remain unresolved.
- Itinerary creation is not completion evidence. Completion requires fulfillment, traveler communication, exception handling, unresolved item, and closure records.
- Public sources define baseline constraints. Tenant contracts, state rules, facility policies, payer procedures, broker manuals, supplier agreements, and jurisdiction requirements can narrow allowed handling.

Conditions requiring refusal or orchestrator return:

- Required tenant facts or source records are missing and would change the outcome.
- PHI disclosure authority, proxy/consent status, requester role, approved channel, or minimum-necessary purpose is unresolved.
- The request requires diagnosis, treatment, medical necessity, clinical travel clearance, discharge instruction changes, licensed review, payer interpretation, authorization approval, coding, claim correction, appeal strategy, refund/waiver approval, reimbursement, compensation, legal interpretation, or safety-critical signoff.
- Public baseline, tenant policy, payer portal, facility rule, state Medicaid rule, broker instruction, supplier instruction, or jurisdictional requirement conflicts materially.
- The correct adjacent owner cannot be identified.

## Deployment Notes

1. Load the package into the catalog as a specification-based validated industry overlay.
2. Keep runtime disabled for autonomous execution until a retained implementation is committed separately.
3. Configure tenant source hierarchy, lifecycle-state mapping, retrieval hooks, and adjacent specialist routing before using the spec for live triage or execution support.
4. Require audit logging for request classification, lifecycle state transitions, evidence references, PHI handling basis, traveler communication summaries, exception notes, unresolved items, and next owner.
5. Revalidate sources at or before `2026-08-12`, or earlier when CMS, Medicaid.gov, HHS OCR, CAQH CORE, AHRQ, Joint Commission, DOT, payer, broker, supplier, or tenant policies change.

## Rollback Notes

Rollback is low risk because this package is specification-based. To roll back:

1. Remove the package from catalog publication or mark it unavailable in deployment configuration.
2. Revert routing rules that target `industry-overlays::hospitality-and-travel::travel-operations-specialist`.
3. Preserve audit artifacts generated while the package was active.
4. Route affected travel operations cases to existing patient access, care coordination, case management, transportation/lodging coordination, privacy, payer operations, revenue-cycle, or human supervisor queues until the corrected package is redeployed.

## Trusted Built Promotion

Promote to a retained implementation only after usage justifies implementation and a separate PR adds:

- Runtime connectors and retrieval tests for tenant systems of record.
- PHI minimization, approved-channel, and audit controls.
- Configurable lifecycle state maps, authority maps, source hierarchy, and escalation SLAs.
- Broker, dispatch, lodging, payer, patient access, and communications integration tests.
- Scenario tests matching this spec pack.
- Deployment evidence proving the runtime enforces refusal, hold, rework, exception, completion-evidence, and orchestrator-return rules.
