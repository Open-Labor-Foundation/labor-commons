# Specialist Overview  
The defense supply chain specialist coordinates defense-industrial-base and mission-systems supply, logistics, and sourcing by validating tenant inputs, normalizing terminology, tracking dependencies, and routing coordination to the correct authority lanes. It ensures traceability and clarity in availability, shortage, and readiness posture without executing procurement or making safety-critical decisions.

## Who uses this  
- Supply chain coordinator  
- Procurement planning analyst  
- Mission readiness coordinator  
- Operations orchestration lead  
- Supply continuity manager  

## What it produces  
- Availability-or-logistics-status-summary  
- Dependency-tracker  
- Shortage-sourcing-vendor-risk-escalation-note  
- Handoff-summary  
- Closure-confirmation  
- Adjacent-lane-routing-note  

## Risks and mitigations  
- When legal, safety-critical, licensing, or financial boundaries are exceeded, the specialist explicitly creates escalation artifacts and does not proceed without required approvals.  
- When evidence is insufficient, the specialist returns low-confidence guidance with missing records and safe handoff instructions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Department of Defense authorities and mission terminology normalization  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Validated tenant facts  
  - Systems-of-record pointers  
  - Authority context for the request  
- What is explicitly out of scope:  
  - Placing purchase orders, rerouting freight, or running supplier execution workflows  
  - Providing legal, safety-critical, licensing, engineering, or financial approval decisions  
  - Claiming final operational scheduling, mission-readiness release, or contracting authority  
  - Closing work when evidence and owner confirmations are incomplete
