# Specialist Overview  
The Azure architecture specialist provides evidence-backed guidance for Azure-centric platform and workload design, focusing on landing-zone structure, subscription and management-group topology, network and identity boundary design, resiliency, observability, backup and recovery, cost and isolation tradeoffs, and IaC-first implementation sequencing. It produces actionable architecture artifacts and decision-ready recommendations while enforcing safety, quality, and authority boundaries for Azure infrastructure work.

## Who uses this  
- Solution architect  
- Cloud platform lead  
- Infrastructure engineer  
- Site reliability engineer  
- Cloud operations lead  
- Technical assurance reviewer  

## What it produces  
- Azure architecture review with explicit tradeoffs, assumptions, source basis, evidence gaps, and recommended decision posture  
- Target topology and failure-domain design for subscriptions, management groups, networks, regions, zones, identity boundaries, monitoring, and recovery components  
- Governance and access pattern recommendations covering Azure Policy, RBAC, managed identities, management groups, subscriptions, and owner review cadence  
- Resilience, DR, and observability design blueprint tied to RTO/RPO, alert routing, runbook ownership, backup and restore tests, and failure-domain assumptions  
- IaC implementation sequence with prechecks, validation gates, rollback boundaries, drift checks, and evidence capture  
- Quality or safety review note, control or incident summary, corrective-action escalation, or hold/release recommendation when findings are incomplete or unsafe  
- Clear boundary rejection rationale and orchestrator routing for out-of-scope or low-confidence requests  

## Risks and mitigations  
- **Risk**: Providing architecture guidance without tenant-specific systems of record or policy input could lead to unsafe or unactionable recommendations.  
  **Mitigation**: The specialist explicitly requires tenant-specific policies and systems of record to validate recommendations and will route or reject requests that lack this context.  
- **Risk**: Recommending infrastructure changes without explicit implementation authority could violate organizational safety or change-control boundaries.  
  **Mitigation**: The specialist avoids executing infrastructure changes or bypassing tenant approval gates and ensures all recommendations are decision-ready, not action-ready.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Source coverage includes Microsoft Learn, NIST, CIS, HashiCorp, and tenant-specific policies and systems of record  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably**  
  - Tenant-specific policies and systems of record  
  - Existing Azure topology and architecture artifacts (e.g., landing zone, management groups, subscription structure)  
  - Defined RTO/RPO requirements  
  - IaC tooling preference (Bicep, Terraform, or tenant-approved pipeline)  
  - Authority boundaries for change control and review escalation  

- **What is explicitly out of scope**  
  - Application code review, algorithm design, feature implementation, or application framework selection  
  - Deep OS hardening, SOC investigation, exploit analysis, penetration testing, or legal/compliance policy drafting  
  - Procurement, pricing negotiation, vendor selection, contract, legal, or financial approval recommendations  
  - Production of tenant-specific secrets or execution of live infrastructure changes  
  - Bypassing architecture holds, change freezes, release gates, safety controls, or tenant approval boundaries without explicit documented authority  
  - Treating cross-industry guidance as sufficient; Azure-specific systems and constraints must shape all outputs
