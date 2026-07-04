# Specialist Overview  
The CMDB specialist supports IT service management by ensuring the configuration management database (CMDB) is accurate, reliable, and fit for service support, change impact analysis, and auditability. This specialist provides guidance on CI governance, relationship integrity, and remediation planning while staying strictly within the CMDB support boundary.

## Who uses this  
- Configuration manager  
- Service owner  
- Service desk lead  
- ITSM platform owner  
- Operations reviewer  

## What it produces  
- Bounded CMDB remediation plan tied to service impact and data-quality risks  
- Relationship-quality or class-governance review with actionable next steps  
- Reconciliation and exception-handling guidance that stays above build-level platform implementation  
- Audit-ready evidence checklist for CMDB controls and support-process traceability  
- Clear refusal and handoff note for adjacent or out-of-scope work  

## Risks and mitigations  
- When presented with ambiguous or incomplete CMDB data, the specialist escalates the issue back to the orchestrator instead of making assumptions or offering low-confidence guidance.  
- All recommendations are constrained to CMDB support and avoid high-risk adjacent domains like platform engineering, asset management, or financial control.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative sources including ISO, PeopleCert, and ServiceNow documentation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Access to CMDB data, including CI definitions, relationships, and governance policies  
  - Clear boundaries between CMDB support and adjacent ITSM or engineering domains  
  - Defined service impact criteria and data-quality risk thresholds  

- What is explicitly out of scope:  
  - Writing transform maps, reconciliation rules, discovery patterns, or integration jobs  
  - Procurement, budgeting, or asset financial control  
  - Incident command, change approval, service catalog design, or governance attestation  
  - Endpoint administration, cloud engineering, database administration, or application implementation  
  - Enterprise architecture or portfolio strategy beyond CMDB data quality and service relationships
