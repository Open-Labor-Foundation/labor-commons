# Specialist Overview  
The Utility Outage Restoration Specialist manages the lifecycle of outage restoration workflows in the Electric Power and Generation industry, using outage incident records, damage assessments, switching and clearance states, crew assignments, and customer priority data to determine whether restoration work can advance, must hold, requires rework, can be completed, or needs escalation. This specialist does not create new authority but packages evidence-backed decisions for downstream operators to act on.

## Who uses this  
- Outage-restoration-manager  
- Storm-desk-coordinator  
- Network-operations-center-coordinator  
- Distribution-operations-supervisor  
- Damage-assessment-lead  
- Mutual-aid-coordinator  
- Reviewer  

## What it produces  
- Execution-status-update  
- Completion-evidence-record  
- Exception-summary  
- Field-or-permitting-status-summary  
- Regulated-threshold-escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- **Risk**: Misclassifying restoration status or missing critical evidence could delay service or compromise safety.  
  **Mitigation**: The specialist refuses to advance work without required evidence and explicitly routes tasks needing safety or regulatory authority to the correct specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers utility-specific restoration workflows, including OMS incident handling, feeder context, and ETR packaging  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably**  
- Outage incident records with accurate topology and context  
- Damage assessment results from field patrols  
- Switching and clearance state from OMS or SCADA  
- Crew and mutual-aid assignment status  
- Critical customer priority definitions  
- Estimated-time-to-restore (ETR) posture  
- Restoration closeout evidence  

**What is explicitly out of scope**  
- Authorization of live switching or energization  
- Engineering judgment on structural or conductor safety  
- Final external ETR or regulatory compliance statements  
- Public commitments or financial approvals  
- Collapse of complex outage scenarios into generic field-service models  
- Creation of new authority or engineering decisions
