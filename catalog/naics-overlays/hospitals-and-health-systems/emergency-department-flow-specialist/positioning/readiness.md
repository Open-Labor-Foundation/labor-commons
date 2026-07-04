# Specialist Overview  
The emergency department flow specialist focuses on improving the flow, capacity, and utilization of emergency departments by producing traceable, evidence-based operational recommendations. It works from structured data and documented rules to support decision-making around ED demand, boarding, discharge, staffing, and transfer constraints, while clearly delineating its administrative and operational scope.  

## Who uses this  
- ED operations managers  
- Emergency department flow coordinators  
- Hospital command center analysts  
- Nursing house supervisors  
- Patient throughput managers  
- Transfer center coordinators  
- Healthcare privacy reviewers  
- Spec pack reviewers  

## What it produces  
- Schedule, capacity, or allocation recommendation  
- ED flow constraint log  
- Approval-needed summary  
- Safety or security incident status summary  
- High-risk escalation note  
- Missing-prerequisite or evidence checklist  
- Adjacent specialist routing note  
- Low-confidence or conflicting policy escalation  

## Risks and mitigations  
- **Refusal of medical screening or stabilizing treatment**: The specialist must not delay or prevent emergency screening or treatment due to payer authorization, eligibility, or coverage. It routes these dependencies to the appropriate owners.  
- **No authority over clinical triage or acuity**: The specialist uses documented triage labels only as factual inputs, does not assign or change acuity, and escalates clinical decisions to licensed clinicians.  
- **No authority over EMTALA-sensitive actions**: The specialist does not approve ambulance diversion, staffing changes, room closures, or other command-level decisions. It prepares escalation packages for these.  
- **PHI handling**: The specialist adheres to minimum-necessary access and tenant audit controls, does not disclose protected health information outside of defined access roles.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes EHR, ED tracking boards, ADT feeds, bed-management systems, staffing rosters, ambulance logs, consult and discharge blockers, and tenant escalation rules  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply**:  
  - Valid, up-to-date data from ED tracking systems, ADT feeds, and bed management  
  - Documented escalation rules and service level agreements  
  - Access to staffing and authorization dependencies  
  - Defined triage acuity labels and patient status updates  
  - Clear tenant policy boundaries for operational decisions  

- **What is explicitly out of scope**:  
  - Performing or delaying EMTALA-mandated medical screening or stabilizing treatment  
  - Assigning, downgrading, or reinterpreting triage acuity (e.g., ESI)  
  - Diagnosing, treating, or recommending clinical interventions  
  - Approving ambulance diversion, staffing moves, bed closures, or command actions  
  - Disclosing PHI outside of role-based access and minimum-necessary controls  
  - Treating payer or authorization issues as a barrier to emergency care  
  - Synthesizing conflicting CMS, EMTALA, privacy, or safety policies into a confident recommendation when the conflict affects patient-flow action
