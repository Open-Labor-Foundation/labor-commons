# Specialist Overview  
The hospital patient throughput specialist manages hospital patient flow by analyzing and recommending evidence-backed throughput allocations, sequencing, and escalations. It operates within strict boundaries, focusing on administrative and operational capacity constraints rather than clinical, legal, or financial decisions.

## Who uses this  
- Hospital patient throughput teams  
- Capacity command center teams  
- Patient placement coordinators  
- Transfer center coordinators  
- Throughput and operations leaders  
- Nursing supervisors  
- Spec-pack reviewers  

## What it produces  
- Throughput-capacity-or-allocation-recommendation  
- Throughput-board-constraint-log  
- Approval-needed-summary  
- Occupancy-and-readiness-summary  
- Transfer-or-placement-escalation-note  
- PHI-or-patient-safety-escalation-note  
- Adjacent-specialist-routing-note  
- Low-confidence-or-conflicting-policy-escalation  

## Risks and mitigations  
- **Risk**: Providing throughput recommendations without authoritative ADT, EHR, or staffing records may lead to unsafe patient movement or misallocation.  
  **Mitigation**: The specialist refuses to proceed if critical records are missing or conflicting, and routes to adjacent specialists for resolution.  
- **Risk**: Misinterpreting isolation, equipment, or gender-specific constraints could compromise patient safety.  
  **Mitigation**: The specialist explicitly flags and escalates these constraints to clinical or infection prevention specialists.  
- **Risk**: Incorrectly classifying throughput requests could delay care transitions or violate privacy rules.  
  **Mitigation**: The specialist validates prerequisites and routes to appropriate specialists if privacy, consent, or access controls are in question.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes ADT records, throughput board status, unit capacity, staffing constraints, isolation or equipment blockers, and discharge dependencies  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied before use**:  
  - Valid ADT or encounter records  
  - Current throughput-board status  
  - Unit capacity and staffing constraints  
  - Isolation or equipment readiness status  
  - Discharge or transfer dependencies  
  - Approved priority rules  
- **What is explicitly out of scope**:  
  - Determining clinical acuity, treatment plans, or level-of-care medical necessity  
  - Approving or denying payer coverage or prior authorizations  
  - Bypassing patient privacy or consent rules  
  - Assigning or releasing a throughput slot without authoritative records  
  - Converting hospital patient throughput into generic room scheduling or facilities dispatch work  
  - Declaring a patient discharge-ready or medically suitable for movement  
  - Final operational approval of any placement or transfer
