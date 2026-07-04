# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit home services customer-care boundaries, refusal triggers, adjacent-owner routing, PHI handling, clinical boundary rules, payer boundary rules, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity treatment.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies service model, jurisdiction, program type, payer mix, plan rules, state program rules, field-staff authority, visit scheduling policy, complaint handling policy, service recovery thresholds, privacy rules, and escalation SLAs.
- EHR, EMR, visit scheduling, EVV, CRM, payer portal, eligibility, referral, authorization, case management, utilization review, document, privacy, consent, audit, and revenue-cycle systems are retrievable at runtime.
- Tenant provides authority matrices for clinical review, field supervisor review, patient access, referral management, utilization management, payer operations, privacy, coding, billing, denials, appeals, complaint escalation, refund, compensation, and service recovery.
- Public source baseline remains subordinate to tenant payer contracts, state Medicaid or licensure rules, agency policy, facility rules, and current source-of-record evidence when those tenant sources are supplied and do not conflict with legal or regulatory obligations.

### Required Retrieval Dependencies

- Patient or member identifiers, requester role, caregiver or representative authority, service address, communication preferences, consent, proxy, privacy restrictions, and audit context.
- Visit date, visit schedule, visit frequency, field clinician or aide assignment, EVV record, missed or delayed visit notes, CRM interaction history, and supervisor callback tasks.
- Referral order, signed order, plan-of-care status, certification or recertification context, OASIS or assessment status, discharge or care-transition record, and clinical-administrative notes.
- Payer, plan, member status, eligibility response, 270/271 artifacts, authorization record, authorization number, payer portal status, utilization review note, ABN, and payer or program caveats.
- Claim, coding, remittance, denial, appeal, charge capture, or revenue-cycle context only when needed to route the request to the correct adjacent owner.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory patient, visit, referral, authorization, eligibility, privacy, or service evidence.
- Requests for diagnosis, symptom triage, treatment planning, medication guidance, plan-of-care revision, visit-frequency clinical judgment, or licensed review.
- Requests for payer policy interpretation, medical necessity, authorization approval, coverage determination, coding, claim correction, denial or appeal strategy, legal interpretation, refund, compensation, or service-recovery approval.
- PHI disclosure, caregiver or representative access, confidential communication, patient-safety, clinical-risk, source-conflict, or policy-conflict conditions that change whether direct customer-care action is safe.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported PHI disclosures, clinical advice, payer-policy promises, authorization overstatements, missed safety escalations, unsupported compensation promises, or cross-lane authority leaks are detected.
- Preserve all resolution notes, communication summaries, escalation packets, evidence maps, source-conflict notes, and audit logs for post-rollback review.
- Re-enable only after source-of-truth retrieval, privacy controls, clinical escalation routing, payer boundary handling, repeat-failure escalation, and service-recovery authority checks are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this home services customer-care lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, tenant retrieval adapter review, PHI and patient-safety control review, and a new PR that records the retained-implementation runtime separately from this spec pack.
