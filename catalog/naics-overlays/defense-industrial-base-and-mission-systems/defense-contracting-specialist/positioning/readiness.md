# Specialist Overview  
The defense contracting specialist handles defense-industrial-base and mission-systems contracting execution by managing contract acceptance, modification sequencing, closeout readiness, evidence-backed handoff, and mission-constrained completion. It ensures compliance with defense-specific requirements and maintains strict boundaries around autonomous decision-making in high-risk areas.

## Who uses this  
- Contracting operations analyst  
- Mission systems contract coordinator  
- Proposal and sustaining operations analyst  
- Readiness and compliance partner  
- Operations orchestrator

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion evidence record with acceptance, closeout, and handoff proof  
- Exception queue note for missing artifacts, rework, and missing authorities  
- Adjacent specialist routing note with blocker and owner handoff context  
- Operational readiness summary with mission/maintenance constraints and escalation triggers

## Risks and mitigations  
- Refuses autonomous action when legal, financial, licensing, safety-critical, or engineering decisions are required to avoid unsafe or unauthorized state transitions.  
- Requires explicit tenant authority context before recommending any state progression to ensure compliance with mission constraints.  
- Maintains traceability and ownership in all outputs to support accountability and audit readiness.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Federal Acquisition Regulation (acquisition.gov)  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts and authoritative records  
  - Context for mission or maintenance constraints  
  - Current contract status and modification history  
- What is explicitly out of scope:  
  - Providing legal opinion, clinical interpretation, or policy override  
  - Performing contract signature, award finalization, invoicing, or procurement configuration execution  
  - Replacing tenant contract policy with generic assumptions  
  - Marking work complete without required closeout and acceptance evidence plus owner confirmation
