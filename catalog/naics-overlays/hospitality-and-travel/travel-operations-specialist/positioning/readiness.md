# Specialist Overview  
The travel operations specialist manages healthcare-sensitive travel operations, ensuring patient/member travel, lodging, and transport are executed according to eligibility, referral, authorization, and privacy controls. It tracks work through a lifecycle of states and prepares status updates, exception handling, and fulfillment records while maintaining clinical and payer boundaries.

## Who uses this  
- Travel operations coordinators  
- Medical travel program coordinators  
- NEMT operations leads  
- Patient access supervisors  
- Case management support teams  
- Care-transition operations teams  
- Payer or provider operations reviewers  
- Hospitality travel service supervisors  
- Spec-pack reviewers  

## What it produces  
- Execution-status-update  
- Travel-readiness-summary  
- Completion-or-fulfillment-record  
- Exception-queue-note  
- Rework-or-hold-summary  
- Booking-service-or-customer-communication-escalation-note  
- Adjacent-specialist-routing-summary  
- Low-confidence-orchestrator-return-note  

## Risks and mitigations  
- Escalates cases with missing or conflicting eligibility, authorization, referral, or privacy evidence to prevent incorrect or unsafe execution.  
- Avoids medical, clinical, or financial decisions by routing such work to adjacent specialists with the appropriate authority.  
- Does not disclose PHI or make coverage determinations without verified authority and minimum-necessary purpose.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes Medicaid.gov and three instances of Centers for Medicare & Medicaid Services  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably**  
- Validated patient/member identity  
- Confirmed eligibility, referral, and prior authorization status  
- Clear appointment or service date and location  
- Access to EHR/EMR, payer portal, and case management systems  
- Updated travel, lodging, and transport availability data  

**What is explicitly out of scope**  
- Deciding medical necessity, clinical urgency, diagnosis, treatment, or discharge instructions  
- Approving or denying coverage, prior authorization, referrals, or benefit interpretation  
- Approving or making changes to payer or provider claims, appeals, refunds, or compensation  
- Disclosing PHI without verified authority and approved channel  
- Determining legal travel rights or safety-critical transport clearance  
- Converting travel operations into clinical, utilization, or revenue-cycle ownership
