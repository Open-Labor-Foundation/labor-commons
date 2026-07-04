# Deployment Package

## Runtime And Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and separate committed build artifacts.
- Execution target: `commons-crew`
- Source issue: 

## Materialization Requirements

### Required Task And Boundary Metadata

- `manifest.yaml` with hospitality operations boundaries, healthcare administrative caveats, refusal triggers, adjacent-owner routing, lifecycle states, source baseline, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared abilities, `execution-processing-and-fulfillment` abilities, and `healthcare-and-care-delivery` abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario-family coverage, unresolved ambiguity, and failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies hospitality policies, brand standards, service model, property or facility context, jurisdiction, owner map, approval matrix, service-level windows, communication rules, accessibility handling rules, and service-recovery constraints.
- Tenant supplies payer, plan, provider, facility type, service setting, eligibility, benefits, referral, authorization, care-transition, coding, claim, remittance, denial, and appeal rules when they materially affect the work.
- PMS, CRS, booking, housekeeping, transport, CRM, payment, folio, communications, EHR/EMR, payer portal, case-management, utilization-review, patient/member access, practice-management, and revenue-cycle systems are retrievable at runtime.
- Tenant defines source-precedence rules when public guidance, tenant policy, brand standard, payer policy, provider workflow, supplier term, processor rule, or jurisdiction-specific requirement conflicts.

### Required Retrieval Dependencies

- Reservation, booking, PNR, itinerary, room-status, housekeeping, folio, payment guarantee, transport, guest profile, incident, and communication records.
- Eligibility, benefits, referral, authorization, patient/member status, service date, provider type, facility type, service setting, and payer portal records.
- EHR/EMR encounter documentation, orders, clinical-administrative notes, discharge or care-transition records, consent posture, patient preference, and authorized communication context.
- Charge capture, coding reference, claim, remittance, denial, appeal, reimbursement, and revenue-cycle records when they affect routing or completion.
- Privacy, minimum-necessary, payment-data, record-retention, guest-communication, patient-communication, and exception-approval constraints.

### Regulated-Lane Caveats

- HHS/OCR HIPAA guidance constrains PHI handling, minimum-necessary summaries, and authorized disclosure paths.
- CMS managed-care and hospital discharge-planning guidance constrains payer, provider, authorization, referral, and care-transition prerequisite handling.
- HL7 FHIR workflow guidance supplies request, task, event, encounter, coverage, eligibility, claim, and document-reference terminology for healthcare evidence mapping.
- DOJ ADA lodging rules constrain accessible-room and accommodation-sensitive readiness handling.
- FTC and DOT consumer guidance constrain lodging fees, travel service issues, refunds, customer communication, and traveler-impact routing.
- PCI SSC standards constrain payment-card handling, card-token references, folio guarantees, and unapproved payment-data disclosures.

### Refusal And Return Conditions

- Missing tenant facts, unavailable retrieval hooks, stale source baseline, missing source-precedence rules, or unavailable systems of record would change the answer.
- Eligibility, referral, authorization, discharge, consent, service-date, patient/member, booking, PMS, CRS, transport, folio, payment, claim, denial, or appeal records are absent or materially conflict.
- Request requires diagnosis, treatment planning, discharge suitability, medical necessity, payer-policy interpretation, coverage approval, coding decision, claim payment, denial validity, appeal outcome, privacy-law signoff, legal advice, public-health clearance, safety/security command, fraud finding, rate override, refund approval, fee waiver, compensation, or payment reversal.
- PHI, guest identity data, or full cardholder data would be disclosed through unapproved channels.
- Public guidance and tenant, payer, provider, brand, supplier, processor, jurisdiction, or facility rules materially conflict without approved precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns hospitality or travel execution, guest/traveler/customer/patient/member readiness, service fulfillment, exception queue handling, or completion evidence.
- Keep the lane isolated from clinical review, payer operations, medical coding, utilization management, patient access authorization ownership, revenue-cycle decisions, front-office financial approvals, fraud findings, privacy signoff, legal advice, and safety/security command.
- Log lifecycle stage, source records, evidence gaps, prerequisites, blocker state, owner, next action, escalation route, and completion proof for every output.
- Alert on repeated unsupported closure, PHI exposure, clinical or payer authority leakage, refund/rate promises, source-conflict synthesis, skipped authorization/referral checks, or unresolved system-of-record conflicts.

## Rollback And Recovery

- Pause tenant routing for this lane if unsupported completion records, clinical or payer overreach, PHI leakage, financial approval drift, skipped prerequisites, untraceable source evidence, or repeated source conflicts are detected.
- Preserve execution status updates, exception notes, completion evidence records, operational summaries, escalation packages, and source-selection notes for post-rollback review.
- Re-enable only after retrieval hooks, source-precedence rules, privacy controls, lifecycle transitions, adjacent-owner routing, and completion evidence checks are verified.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitality-and-travel --agent hospitality-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this hospitality operations lane is common, stable, and valuable enough to justify maintained runtime artifacts.
- Promotion requires formal validation signoff, updated readiness evidence, runtime monitoring for boundary drift, tenant-specific retrieval integration tests, rollback controls, and a new PR that records retained-implementation runtime artifacts separately from this spec pack.
