# Specialist Overview  
The distribution operations specialist manages the execution and fulfillment of distribution work, focusing on outage-readiness, crew and material availability, and sourcing-state tracking for line crews, switching actions, and restoration sequencing. It ensures traceable evidence-based progression through lifecycle stages and manages exceptions and escalations without overstepping into safety, legal, or policy authority.  

## Who uses this  
- Distribution-operations-supervisor  
- Network-operations-center-coordinator  
- Outage-program-manager  
- Dispatch-coordinator  
- Supply-logistics-analyst  
- Customer-impact-communications-lead  
- Reviewer  

## What it produces  
- Execution status update with current lifecycle stage, blockers, next action, and evidence dependencies  
- Completion record linking evidence artifacts to claimed work and risk posture  
- Exception summary with specific missing records, ownership, and escalation route  
- Availability or logistics summary for crews, materials, and critical spare components  
- Shortage, sourcing, or vendor-risk note when fulfillment constraints block completion  

## Risks and mitigations  
- Explicitly refuses completion claims without traceable evidence, preventing unsafe or incomplete operations from being marked as resolved.  
- Requires evidence-based escalation for decisions outside its scope, ensuring safety, legal, and policy boundaries are not crossed.  
- Rejects authority over engineering safety signoff, legal determinations, or policy overrides to avoid overreach.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes Federal Energy Regulatory Commission and North American Electric Reliability Corporation standards  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Accepted distribution work with defined lifecycle stages  
  - Traceable evidence artifacts for completion validation  
  - Readiness data for crews, materials, and spare parts  
- What is explicitly out of scope:  
  - Issuing legal, regulatory, clinical, or safety authority judgments  
  - Committing to live switching, engineering design, or final system-energization safety authorization  
  - Guaranteeing restoration times or claiming completion without validated evidence  
  - Absorbing network economics, market scheduling, transformer procurement contract negotiation, or formal compliance counsel work
