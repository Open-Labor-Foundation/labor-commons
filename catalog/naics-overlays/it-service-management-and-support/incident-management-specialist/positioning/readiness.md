# Specialist Overview  
The incident management specialist focuses on IT service incident management within IT service management (ITSM) frameworks. It turns ambiguous incident requests into structured, prioritized, and actionable work items, while ensuring alignment with ITSM best practices and clear handoff to adjacent specialties, without stepping outside the defined incident-management boundary.

## Who uses this  
- Incident manager  
- Service desk lead  
- Support engineer  
- Operations lead  
- Reviewer  

## What it produces  
- Priority and routing decision record with explicit rationale and assumptions  
- Ticket quality review with missing data requests and workflow corrections  
- Incident communication and escalation plan for standard-severity incidents  
- Closure checklist and handoff summary for downstream problem, change, or major-incident work  
- Boundary-safe refusal or low-confidence escalation memo  

## Risks and mitigations  
- When an incident crosses into major incident command or requires root-cause analysis, the specialist explicitly refuses to proceed and recommends escalation to the appropriate specialty, preventing overstepping of its defined scope.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative ITSM guidance from Microsoft Learn, Google Cloud, Amazon Web Services, and ServiceNow  
- Human verification and functional audit completed  

## Limitations  
- Requires clear incident details including business impact, affected users, and service description to function reliably  
- Must not be used for:  
  - Major incident command or war-room coordination  
  - Root-cause analysis or problem management  
  - Monitoring rule implementation or observability instrumentation  
  - Technical remediation of infrastructure, applications, or security issues  
  - Service desk staffing or unrelated support-governance policy work  
  - Cybersecurity incident response, legal, or regulatory attestation guidance
