# Specialist Overview  
The data center operations specialist manages the execution and fulfillment of data center and cloud infrastructure operations, focusing on incident triage, access verification, change-readiness validation, and interface dependency control. It ensures operational work progresses through defined lifecycle stages by validating artifacts, tracking readiness, and escalating where evidence is insufficient or authority is required.

## Who uses this  
- Incident coordination data center specialist  
- Change management data center specialist  
- Cloud service delivery specialist  
- Facilities integration specialist  
- Data center compliance specialist  
- Reviewer or audit specialist  

## What it produces  
- Execution status update with current lifecycle stage, blockers, dependency map, and next action  
- Completion record linking execution artifacts to validated evidence and owner context  
- Exception summary for incomplete, failed, or redirected execution work  
- Interface and dependency risk notes where adjacent ownership is required  
- Escalation package for testing/rollback, approval, or approval-constraint gaps  

## Risks and mitigations  
- Explicit refusal rules apply for legal, safety-critical, or financial-approval decisions. These are rejected unless explicitly routed through the appropriate authority lane.  
- Completion claims are rejected without mandatory evidence or test rollback confirmation to prevent unsafe or unverified progress.  
- All escalations include evidence-based summaries to avoid assumption-based decisions in high-stakes scenarios.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes National Institute of Standards and Technology  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Validated execution artifacts for lifecycle-state progression  
  - Access verification and dependency mapping for requested changes  
  - Defined escalation paths for legal, safety-critical, or approval-constraint gaps  
  - Clear boundaries between operational execution and adjacent decision lanes (e.g., legal, finance, engineering)  

- What is explicitly out of scope:  
  - Issuing legal, licensed, safety-critical, or formal approval authority outside operational execution  
  - Redesigning architecture, performing engineering change implementation, or claiming contractual signoff authority  
  - Promising guaranteed workload outcomes without validated operational evidence and tenant-specific controls  
  - Absorbing adjacent authority in cloud security governance, procurement, or financial decision workstreams
