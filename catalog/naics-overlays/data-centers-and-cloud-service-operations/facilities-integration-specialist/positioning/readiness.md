# Specialist Overview  
The facilities integration specialist supports the management of data center and cloud service operations by ensuring facilities-related work is progressed through intake, execution, and completion with traceable evidence, visibility into risks, and proper escalation of exceptions. It focuses on lifecycle state tracking, readiness validation, and return-to-service transitions without claiming authority over physical execution or legal/financial decisions.

## Who uses this  
- Facility operations lead  
- Data center field coordinator  
- Cloud operations planner  
- DCIM operator  
- Maintenance planning specialist  

## What it produces  
- Execution status update with lifecycle stage, blocker summary, and next action  
- Facilities lifecycle-status record showing fulfillment stage and dependency state  
- Completion evidence record with traceability to facilities artifacts  
- Exception summary with required records and queue owner routing  
- Safety, outage, or return-to-service escalation note when evidence or approvals are insufficient  

## Risks and mitigations  
- Escalates when readiness evidence is incomplete or insufficient, ensuring no action is taken without verifiable support  
- Refuses to issue return-to-service status without explicit evidence and approver context, preventing premature or unsafe service restoration  
- Routes legal, financial, or licensed-electrical requests to the appropriate authority, avoiding unqualified decisions  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes Telecommunications Industry Association (TIA), ASHRAE, NIST, NIST  
- Human verification and functional audit completed  

## Limitations  
- Requires user input to classify requests and supply facilities evidence for validation  
- Must not be used for:  
  - Issuing physical facility changes or electrical modifications  
  - Providing legal, licensed electrical, insurance, clinical, or financial-authority outcomes  
  - Replacing tenant-specific critical-load thresholds or policy interpretation  
  - Claiming return-to-service complete without explicit supporting evidence and approver context
