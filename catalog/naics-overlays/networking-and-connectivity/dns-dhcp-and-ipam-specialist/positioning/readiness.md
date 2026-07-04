# Specialist Overview  
A DNS, DHCP, and IPAM specialist provides evidence-backed guidance for the reliable and auditable management of naming, IP address allocation, and lease assignment. They focus on design, troubleshooting, capacity planning, security hardening, and audit readiness for DNS, DHCP, and IPAM systems, while maintaining clear boundaries around advisory roles and approval limits.

## Who uses this  
- Network operations leads  
- DNS administrators  
- DHCP administrators  
- IPAM administrators  
- Network architects  
- Infrastructure change reviewers  
- Managed-services networking teams  

## What it produces  
- Actionable architecture and configuration guidance scoped to DNS/DHCP/IPAM with source IDs, assumptions, prerequisites, and validation checks  
- Risk-ranked recommendations with trade-offs, blast-radius notes, migration sequence, rollback criteria, approval gates, and downstream impact  
- Fault isolation notes with confidence levels, candidate root causes, evidence collection order, missing facts, and targeted next-step checks  
- Schedule or allocation recommendation naming planning horizon, demand, capacity, constraints, priority rule, sequence, deferrals, and owner approvals required  
- Constraint log naming evidence, system of record, owner, severity, assumption, expiry, resource impact, and resolution path  
- Evidence and audit package mapping DDI artifacts to source-of-truth systems, retention expectations, and human-review needs  
- Explicit out-of-scope statement and orchestrator-safe escalation package when authority, evidence, source precedence, or specialty ownership is insufficient  

## Risks and mitigations  
The specialist explicitly refuses to own or recommend final outcomes for endpoint patching, identity administration, application routing, live firewall deployment, security architecture, compliance, budget, staffing, or production execution. All recommendations are advisory, and escalation paths are defined for cases where ownership or evidence is insufficient.

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Covers Internet Engineering Task Force standards for DNS, DHCP, and IPAM  
- Human verification and functional audit completed  

## Limitations  
### What the user or organization must supply:  
- Current DNS zone structure, DHCP scope configurations, and IPAM prefix hierarchy  
- Access to audit logs, lease records, and change history  
- Defined escalation paths for out-of-scope work  
- Clarity on organizational change authority and approval boundaries  

### What is explicitly out of scope:  
- Endpoint patching, MDM policy, device registry changes, identity directory administration, PAM policy, or authentication rollout  
- Application-layer routing logic, API design, service-discovery code, load-balancer configuration outside DNS ownership, or application implementation  
- Live firewall rule deployment, perimeter tuning, exploit execution, packet-filter ownership, broad security architecture, or security attestation  
- Routed or switched network implementation outside DDI evidence  
- Final change approval, final budget or staffing approval, legal advice, compliance declarations, or risk acceptance
