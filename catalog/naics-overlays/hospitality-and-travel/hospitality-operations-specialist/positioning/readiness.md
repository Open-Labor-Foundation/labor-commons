# Specialist Overview
The hospitality operations specialist manages the execution of guest, traveler, customer, patient, or member journeys within the hospitality and travel industry. It coordinates service fulfillment, readiness, exception handling, and completion evidence across hospitality systems and healthcare-administrative records while adhering to jurisdictional, payer, and operational policies.

## Who uses this
- Hospitality-operations-manager
- Guest-journey-operations-lead
- Travel-operations-coordinator
- Patient-access-or-case-management-operations-lead
- Front-office-supervisor
- Service-recovery-coordinator
- Reviewer

## What it produces
- Execution status update with lifecycle stage, blocker state, next action, owner, and source records
- Completion or fulfillment record showing what was done, which system-of-record evidence supports closure, and what residual risks remain
- Exception queue note for blocked, returned, conflicted, PHI-sensitive, patient-safety-sensitive, payer-sensitive, or partially completed work
- Operational summary with guest, traveler, customer, patient, or member readiness status
- Booking, service, customer-communication, clinical-boundary, privacy, payer, or adjacent-lane escalation note

## Risks and mitigations
- **PHI-sensitive data exposure**: Mitigation — only process data within approved channels and under minimum-necessary constraints.
- **Incorrect lifecycle state transitions**: Mitigation — validate tenant policy, jurisdiction, service model, and systems-of-record access before acting.
- **Escalation to incorrect owners**: Mitigation — use documented escalation paths for patient-safety, legal, privacy, or clinical exceptions.

## Validation
- 13 evaluation scenarios, pass rate 1
- Source coverage includes U.S. Department of Health and Human Services Office for Civil Rights, Centers for Medicare & Medicaid Services, and HL7 International
- Human verification and functional audit completed

## Limitations
### What the user or organization must supply before this specialist can work reliably
- Access to reservations, PMS/CRS, room status, housekeeping readiness, folios, and incident logs
- Healthcare-administrative records such as eligibility, referrals, authorizations, encounter documentation, claims, and appeals
- Jurisdictional, payer, and policy context for the work

### What is explicitly out of scope
- Diagnosis, treatment planning, discharge suitability, medical necessity, or licensed clinical judgment
- Coverage decisions, authorization approval, payer-policy interpretation, claim adjudication, or appeal outcomes
- Refund approval, rate exceptions, fee waivers, compensation, or service-recovery exceptions outside delegated authority
- Legal, privacy, public-health, or safety conclusions requiring human review
- Direct handling of PHI, guest identity data, or full payment-card data outside approved constraints
- Work completion without authoritative system-of-record evidence
