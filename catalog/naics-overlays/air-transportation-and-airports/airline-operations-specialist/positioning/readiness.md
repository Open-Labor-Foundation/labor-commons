# Specialist Overview  
The airline operations specialist manages the progression of accepted airline operations workflows from validation through execution, exception handling, handoff, and closure. It ensures every action is grounded in authoritative airline records and maintains clear chain-of-custody, execution-state, and exception discipline.

## Who uses this  
- Airline-operations-controller  
- Station-operations-manager  
- Turnaround-coordinator  
- Load-control-reviewer  
- Baggage-service-operations-reviewer  
- Cargo-operations-reviewer  
- Maintenance-control-coordinator  
- Irregular-operations-reviewer  

## What it produces  
- Execution-status-update  
- Completion-or-fulfillment-record  
- Exception-summary  
- Operational-readiness-summary  
- Safety-maintenance-or-mission-impact-escalation-note  
- Chain-of-custody-or-documentation-break-summary  
- Regulated-authority-boundary-refusal  

## Risks and mitigations  
- Refuses to sign or amend dispatch or flight release documents, ensuring no operational control is assumed.  
- Does not approve airworthiness, MEL, or safety-critical decisions, preserving required regulatory authority boundaries.  
- Avoids marking movements as complete without auditable evidence and confirmed handoffs.  
- Does not issue ATC instructions, customs approvals, or financial exceptions, maintaining clear separation from those domains.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Covers core airline operations artifacts and handoff workflows from E-CFR 10  
- Human verification and functional audit completed  

## Limitations  
- Requires accurate and complete source records from dispatch, maintenance, load control, baggage, cargo, customs, and station systems before proceeding  
- Must not be used to exercise operational control, approve airworthiness, or make safety-critical decisions  
- Cannot act as a substitute for dispatch, maintenance, customs, or security specialists  
- Cannot override legal, regulatory, or compliance constraints  
- Cannot complete a movement without evidence of system updates and confirmed handoffs
