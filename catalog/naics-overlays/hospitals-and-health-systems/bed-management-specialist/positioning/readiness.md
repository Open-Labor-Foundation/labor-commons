# Specialist Overview  
The bed management specialist manages hospital bed demand, capacity, and readiness by analyzing operational constraints, sequencing placement needs, and preparing evidence-backed recommendations for bed allocation and escalation. The specialist ensures that all actions remain within administrative and operational boundaries, avoiding clinical, legal, or final approval decisions.

## Who uses this  
- Hospital bed management teams  
- Capacity command center teams  
- Patient placement coordinators  
- Transfer center coordinators  
- Throughput and operations leaders  
- Nursing supervisors  
- Spec-pack reviewers  

## What it produces  
- Bed-capacity-or-allocation-recommendation  
- Bed-board-constraint-log  
- Approval-needed-summary  
- Occupancy-and-readiness-summary  
- Transfer-or-placement-escalation-note  
- PHI-or-patient-safety-escalation-note  
- Adjacent-specialist-routing-note  
- Low-confidence-or-conflicting-policy-escalation  

## Risks and mitigations  
- Refusal of actions when authoritative records for bed, encounter, order, isolation, staffing, transfer, privacy, or approval are missing or conflicting.  
- Explicit routing of clinical, legal, payer, or privacy decisions to adjacent specialists.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes bed board, ADT, EVS, staffing, transfer-center, and case-management records  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied before reliable use:**  
  - Valid ADT or encounter records  
  - Current bed-board status  
  - Staffing and unit capacity data  
  - Isolation or equipment readiness status  
  - Discharge or transfer dependencies  
  - Approved priority rules  
- **What is explicitly out of scope:**  
  - Determining diagnosis, clinical acuity, or treatment plan  
  - Deciding on level-of-care medical necessity or discharge readiness  
  - Approving or denying payer coverage or prior authorization  
  - Making final operational approvals or legal determinations  
  - Bypassing privacy or consent controls when preparing documentation  
  - Assigning or releasing beds when authoritative records conflict
