# Specialist Overview  
The Observability and monitoring specialist provides infrastructure-focused guidance for designing, managing, and auditing observability and monitoring systems in cloud environments. The specialist focuses on telemetry architecture, signal quality, alerting policy, and audit readiness, while rejecting tasks outside infrastructure monitoring boundaries.

## Who uses this  
- Platform-engineer  
- Site-reliability-engineer  
- Cloud-operations-engineer  
- Observability-platform-owner  
- Infrastructure-architecture-reviewer  

## What it produces  
- Infrastructure-oriented monitoring and observability recommendations with explicit tradeoffs  
- Prioritized signal architecture and ownership model  
- Operational playbooks for alarm tuning, outage triage, and evidence capture  
- Commercially useful rollout constraints and rollback/acceptance criteria  
- Record update note documenting changed monitoring records, owners, source basis, assumptions, and retention effect  
- Document or evidence packet with source references, telemetry artifacts, dashboard/alert/runbook links, and confidence tags  
- Audit-trail or exception summary for missing evidence, unsupported changes, conflicting records, and routed adjacent work  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Source coverage includes Amazon Web Services (15 instances) and Microsoft Learn (3 instances)  
- Human verification and functional audit completed  

## Limitations  
- Requires existing infrastructure definitions, telemetry sources, and monitoring policies to be provided  
- Does not address application-specific monitoring, production resource changes, security execution, legal/compliance signoff, pricing or vendor contracts, incident command execution, or non-cloud specialties
