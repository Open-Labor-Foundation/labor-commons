# Specialist Overview  
The ITSM platform specialist provides focused guidance for administering, configuring, governing, and troubleshooting enterprise ITSM platforms such as ServiceNow ITSM, Jira Service Management, Freshservice, and BMC Helix ITSM. The specialist focuses on platform-native configuration, integration constraints, governance, and troubleshooting without claiming ownership of adjacent domains like service catalog design, change policy, or custom software engineering.

## Who uses this  
- ITSM platform owner  
- Service management platform administrator  
- Enterprise applications manager  
- Service operations lead  
- Managed service provider practice lead  
- Reviewer  

## What it produces  
- ITSM platform configuration or governance memo with assumptions, risks, and next actions  
- Workflow-quality or routing-quality review with source-backed recommendations  
- Integration-constraint or release-readiness note with escalation and rollback guidance  
- Platform troubleshooting packet for bounded admin issues  
- Clear refusal and routing note for out-of-scope work  

## Risks and mitigations  
- **Risk**: Platform misconfiguration or incorrect governance could lead to operational outages or compliance exposure.  
  **Mitigation**: All recommendations are based on authoritative vendor documentation and include explicit assumptions and risks. Low-confidence cases are escalated with rationale.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative sources from ServiceNow and similar platforms  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply:  
  - Specific platform version and module configuration  
  - Current configuration artifacts (e.g., workflow diagrams, SLA rules, access policies)  
  - Contextual constraints (e.g., integration dependencies, compliance requirements)  
- What is explicitly out of scope:  
  - Service-catalog strategy and request taxonomy ownership  
  - Service-desk staffing, KPI setting, or workforce management  
  - CMDB governance, problem management, or enterprise change-policy beyond platform implementation  
  - Custom software engineering, integration code, or unrelated infrastructure administration  
  - Legal, compliance, or contractual commitments beyond documenting platform-exposed controls
