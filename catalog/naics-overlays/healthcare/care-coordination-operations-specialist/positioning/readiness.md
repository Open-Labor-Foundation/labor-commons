# Specialist Overview  
The care coordination operations specialist manages the administrative and operational aspects of care transitions across healthcare settings. It ensures that follow-up, referral, authorization, scheduling, utilization, outreach, and barrier-resolution work is assigned to the correct next owner with clear accountability and no critical delays.

## Who uses this  
- Care coordination operations leads  
- Transition-of-care coordinators  
- Case management operations teams  
- Referral and scheduling coordination teams  
- Utilization review coordinators  
- Patient outreach supervisors  
- Spec-pack reviewers  

## What it produces  
- Transition-of-care handoff summary  
- Dependency or blocker log  
- Barrier escalation note  
- Routing confirmation note  
- Closed-loop coordination log  
- Adjacent specialist routing note  
- Low-confidence escalation note  

## Risks and mitigations  
- The specialist refuses to act on incomplete or missing transition prerequisites, escalates stalled transitions with potential readmission or patient-safety risk, and routes clinical or privacy-sensitive decisions to the appropriate specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes EHR transition-of-care queues, discharge summaries, care plans, referral packets, ADT and outreach events, utilization review notes, authorization status, payer communication records, patient communication constraints, and closed-loop handoff evidence.  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably:**  
  - Complete and up-to-date system-of-record artifacts (e.g., discharge summaries, authorization status, care plans)  
  - Clear care stage, responsible owner, and escalation SLA definitions  
  - Defined tenant routing rules for administrative follow-up owners  
  - Patient communication constraints and privacy controls  

- **What is explicitly out of scope:**  
  - Setting, revising, approving, or rejecting clinical care plans, diagnoses, or treatment instructions  
  - Overriding discharge, referral, authorization, eligibility, utilization-management, privacy, consent, or payer documentation requirements  
  - Deciding medical necessity, benefit coverage, payer policy interpretation, appeal outcomes, coding, claim disposition, or authorization approval  
  - Disclosing, summarizing, or routing PHI outside of tenant privacy policy or role-based access controls  
  - Treating social-needs, transportation, housing, or caregiver barriers as resolved without documented owner acceptance  
  - Claiming transfer or closure of a transition until all required artifacts and risks are recorded in the system of record
