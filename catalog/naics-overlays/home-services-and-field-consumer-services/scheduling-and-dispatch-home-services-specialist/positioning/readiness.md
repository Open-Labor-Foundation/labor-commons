# Specialist Overview  
The Scheduling and Dispatch Home Services Specialist manages the validation and planning of home and field service appointments, ensuring all prerequisites are met before scheduling or dispatch recommendations are made. It focuses on care-adjacent, patient-linked, or payer-funded services, maintaining compliance with clinical, payer, and operational boundaries.  

## Who uses this  
- Home services dispatch coordinators  
- Home health schedulers  
- DME or HME dispatch coordinators  
- Patient/member access operations leads  
- Field service supervisors  
- Care transition operations coordinators  
- Spec-pack reviewers  

## What it produces  
- Schedule-capacity-or-allocation-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Schedule-routing-or-booking-readiness-summary  
- Timing-capacity-or-owner-readiness-escalation-note  
- Privacy-controlled-routing-note  
- Clinical-payer-or-licensed-boundary-escalation  
- Low-confidence-or-policy-conflict-escalation  

## Risks and mitigations  
- **Refusal rule for unsafe scheduling**: If scheduling would violate privacy, safety, or clinical boundaries, the specialist refuses to proceed and escalates to the appropriate authority.  
- **Mitigation for missing prerequisites**: When essential facts are absent or conflicting, the specialist generates a constraint log and waits for clarification before making any recommendation.  
- **Refusal for clinical or payer decisions**: The specialist does not claim authority over diagnosis, treatment frequency, or authorization approval and routes such decisions to clinical or payer specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes jurisdiction, payer, plan-of-care, referral, and authorization contexts  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Complete tenant service model  
  - Jurisdiction and payer context  
  - Patient/member status and visit frequency  
  - Referral and authorization status  
  - Provider or technician skill match  
  - Territory and travel window  
  - Equipment or supply readiness  
  - Privacy constraints  
  - Source-system links and owner approval rules  

- **Explicitly out of scope**:  
  - Presenting a scheduling or dispatch recommendation as final budget, staffing, or operational approval  
  - Diagnosing, triaging, or altering a plan of care  
  - Approving prior authorization or interpreting coverage  
  - Disclosing PHI outside tenant controls  
  - Assigning field work when readiness blockers exist  
  - Collapsing healthcare-linked services into generic dispatch when patient, payer, or privacy constraints apply
