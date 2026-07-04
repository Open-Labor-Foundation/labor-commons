# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separate committed build package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit hospitality-and-travel guest-experience scope, healthcare-and-care-delivery guardrails, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared abilities plus `service-support-and-resolution` plus `healthcare-and-care-delivery` abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, human verification, and functionality coverage.

### Runtime Assumptions

- Tenant supplies service-recovery matrices, refund and compensation thresholds, accessibility escalation rules, safety routing rules, privacy and consent controls, payer routing rules, and owner escalation SLAs.
- Tenant supplies property, travel, supplier, brand, payer, provider, plan, facility, service-setting, state, jurisdiction, and processor context whenever those facts change the answer.
- PMS, CRS or booking engine, itinerary or supplier system, CRM, contact-center, guest messaging, service-recovery, payment, EHR/EMR, practice-management, payer portal, case-management, utilization-review, revenue-cycle, claim, and incident systems are retrievable at runtime.
- Tenant authority matrices identify front office, guest services, travel operations, clinical review, patient access, utilization management, medical coding, revenue cycle, payer operations, privacy/compliance, safety, fraud, legal, and executive escalation owners.

### Required Retrieval Dependencies

- Confirmation number, PNR or itinerary, folio, property or supplier, stay or travel dates, guest profile, service ticket, contact channel, and communication history.
- Eligibility, benefits, referral, authorization, patient/member status, payer, plan, provider type, facility type, service setting, service dates, and covered-program facts.
- Encounter documentation, orders, discharge or care-transition records, clinical-administrative notes, case-management records, utilization-review notes, and approved transport or lodging support records.
- Charge capture, coding, claim, remittance, denial, appeal, folio charge, refund, voucher, payment, and compensation approval records.
- Privacy, consent, representative authorization, identity-proofing, minimum-necessary, and approved communication-channel evidence.
- Accessibility, accessible-room, mobility, passenger assistance, service animal, medical-equipment, safety, incident, fraud, and payment-card handling context when relevant.

### Regulated-Lane Caveats

- HHS/OCR HIPAA guidance constrains PHI use and disclosure when a guest-experience request includes patient, member, caregiver, diagnosis, appointment, discharge, claim, or benefit information.
- CMS payer operating guidance constrains grievance, organization-determination, appeal, authorization, coverage, denial, and plan-sensitive communications.
- CMS and AHRQ experience-measure guidance informs patient/member experience terminology and evidence framing but does not authorize clinical or payer decisions.
- DOJ ADA lodging rules and DOT passenger-disability guidance constrain accessibility-sensitive lodging and travel communications.
- FTC fee-disclosure guidance constrains guest-facing price, fee, folio, and refund explanations.
- PCI SSC guidance constrains payment-card handling in contact-center or guest messaging workflows.

### Refusal and Return Conditions

- Required tenant facts, authoritative records, consent, identity proof, eligibility, referral, authorization, payer, plan, property, supplier, or source context are missing and would change the outcome.
- Requests require diagnosis, treatment planning, clinical triage, medical necessity, payer-policy interpretation, utilization-management approval, coding, claim adjustment, denial reversal, appeal merit, privacy interpretation, legal advice, safety signoff, fraud decisioning, refund approval, compensation approval, pricing override, or room/transport dispatch authority.
- Public baseline and tenant, payer, provider, property, supplier, brand, processor, state, or jurisdiction policy conflict without explicit precedence resolution.
- PHI, patient/member safety, clinical risk, payment-card, fraud, or accessibility concerns make direct guest-experience communication unsafe.

## Deployment Notes

- Route this lane only when the primary request is guest-experience service resolution, stakeholder communication, complaint support, policy-aware service recovery, documentation clarification, or handoff packaging.
- Keep the lane isolated from direct booking execution, room control, dispatch, payment processing, claim adjustment, authorization approval, clinical decisioning, payer interpretation, privacy interpretation, safety signoff, and discretionary recovery approval.
- Log every resolution note, stakeholder communication summary, escalation packet, refusal reason, source reference, record identifier, and unresolved owner.
- Alert on unsupported refund or compensation promises, PHI leakage, minimum-necessary violations, clinical or payer overreach, inaccessible-service overpromises, payment-card mishandling, and repeated cross-lane authority drift.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refunds, compensation promises, PHI disclosures, clinical advice, payer-policy interpretations, unsafe accessibility statements, payment-card handling violations, or unresolved cross-lane authority leaks are detected.
- Preserve all communication summaries, escalation packets, evidence maps, refusal notes, source references, and retrieval logs for post-rollback review.
- Re-enable only after source retrieval, privacy controls, clinical and payer boundaries, eligibility/authorization handling, accessibility handoff, fee-disclosure handling, and service-recovery approval controls are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitality-and-travel --agent guest-experience-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a retained-implementation runtime is explicitly approved and committed in a separate PR.
- Promote only after repeated runtime usage shows this guest-experience lane is common, stable, and valuable enough to justify maintained build assets.
- Promotion requires updated validation scenarios, monitoring for boundary drift, human readiness signoff, source refresh review, and repository evidence that separates retained-implementation availability from this validated spec pack.
