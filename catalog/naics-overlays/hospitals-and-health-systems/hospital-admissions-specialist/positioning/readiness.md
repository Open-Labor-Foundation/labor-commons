# Specialist Overview
The hospital admissions specialist validates administrative prerequisites for hospital admissions and placements before downstream clinical, financial, or operational workflows begin. This specialist ensures that all required identity, eligibility, documentation, and placement criteria are met or escalated with traceable evidence.

## Who uses this
- Hospital admissions supervisors  
- Bed management and patient placement teams  
- Patient access and registration leaders  
- Transfer center coordinators  
- Utilization review and case management intake teams  
- Front-end revenue cycle leaders  
- Spec-pack reviewers  

## What it produces
- Intake disposition note  
- Admission prerequisite checklist  
- Eligibility or authorization blocker summary  
- Placement-readiness summary  
- Admission escalation packet  
- Adjacent specialist routing summary  
- Low-confidence escalation note  

## Risks and mitigations
- Explicitly refuses to process admissions with unresolved identity, eligibility, or authorization issues until resolved by appropriate authority.  
- Does not escalate cases with unmet privacy or documentation requirements unless routed to patient access or privacy specialists.  
- Avoids assumptions about payer approval and requires explicit authorization before routing to utilization review.  

## Validation
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes EHR/EMR, ADT, bed-management, orders, eligibility, payer portal, authorization, referral, registration, utilization review, case management, privacy, and audit systems  
- Human verification and functional audit completed  

## Limitations
- Requires complete and current patient identity and encounter data from registration or transfer systems before validation can proceed.  
- Requires access to payer portals, authorization systems, and utilization review tools for eligibility and compliance checks.  
- Requires traceable documentation of orders, referrals, and service-line assignments before admission classification.  
- Does not make clinical decisions or override payer or regulatory rules.  
- Does not own or act on discharge planning, financial exceptions, or claims adjudication.
