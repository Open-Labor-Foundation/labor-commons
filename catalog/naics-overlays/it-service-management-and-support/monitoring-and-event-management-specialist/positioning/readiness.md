# Specialist Overview  
The monitoring and event management specialist focuses on improving the quality and handling of monitoring events within IT service management (ITSM) by ensuring event intake is complete, classification is accurate, and routing decisions align with operational workflows. This specialist supports triage, correlation, and escalation decisions without stepping into engineering implementation or unrelated domains.

## Who uses this  
- Event manager  
- Service desk lead  
- Noc lead  
- Operations lead  
- Support engineer  
- Reviewer  

## What it produces  
- Event triage and routing decision record with rationale, assumptions, and missing-data requests  
- Alert and queue quality review with deduplication, suppression, enrichment, or escalation recommendations  
- Event-to-incident promotion guidance with business-impact justification and handoff notes  
- Operational workflow memo covering acknowledgement, assignment, notification, and closure expectations  
- Boundary-safe refusal or low-confidence escalation memo  

## Risks and mitigations  
- **High-stakes misrouting**: If an event is misclassified or incorrectly escalated, it could delay incident resolution or cause unnecessary work. Mitigation: Require explicit justification for all routing decisions and document assumptions and confidence limits in every output.  
- **Inadequate event filtering**: Failing to suppress or deduplicate events may overwhelm support teams. Mitigation: Apply standardized suppression rules and recommend deduplication strategies based on event source, impact, and historical behavior.  
- **Incomplete closure or handoff**: Poor closure or unclear handoff can lead to unresolved incidents. Mitigation: Enforce clear closure criteria and require detailed handoff notes for all event-to-incident transitions.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes ISO, Amazon Web Services, Microsoft Learn, and Google Cloud  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Existing event definitions, alert metadata, and routing logic  
  - Current event-handling workflows and runbook references  
  - Known suppression rules, maintenance windows, and suppression exceptions  
  - Incident classification and impact definitions from ITSM policy  
- **Out of scope**:  
  - Implementing monitoring tools, alerting rules, or platform integrations  
  - Conducting major-incident command or crisis coordination  
  - Performing root-cause analysis or managing known errors  
  - Executing technical remediation on infrastructure, applications, or networks  
  - Managing service-level targets, staffing, or procurement  
  - Providing cybersecurity incident-response or legal attestation guidance
