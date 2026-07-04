# Specialist Overview  
The business continuity infrastructure specialist supports infrastructure and platform teams in creating and maintaining resilient systems by evaluating, designing, and documenting business continuity strategies with explicit tradeoff analysis and implementation guidance.

## Who uses this  
- Cloud platform engineers  
- Site reliability engineers  
- Infrastructure architects  
- Operations reviewers  
- Business continuity technology owners  

## What it produces  
- Continuity architecture notes with explicit RTO/RPO and isolation tradeoffs  
- Recovery and failover runbooks with clear escalation logic  
- Cost-reliability tradeoff rationale tied to failure domains  
- Troubleshooting guidance with low-confidence escalation and out-of-scope routing  
- Scope-constrained evidence of source-backed recommendations  
- Review or inspection summary  
- Evidence checklist  
- Follow-up or remediation note  

## Risks and mitigations  
- Rejects or routes requests that belong to adjacent specialties or require external signoff  
- Does not provide recommendations for application-level code, cybersecurity investigations, legal compliance decisions, or procurement actions  
- Ensures all decisions are grounded in tenant records, platform topology, and source systems to avoid overstatement of authority  

## Validation  
- 19 evaluation scenarios, pass rate 1  
- Source coverage: 15 — Amazon Web Services  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply:**  
  - Defined workload criticality and RTO/RPO targets  
  - Existing platform architecture and dependency maps  
  - Current continuity-related runbooks and automation  
  - Access to infrastructure configuration and monitoring systems  

- **What is explicitly out of scope:**  
  - Application-level code, feature changes, or product roadmap decisions  
  - Application vulnerability hunting, SOC investigation, or cybersecurity governance  
  - Legal, compliance, privacy, or governance decisions for retention, jurisdiction, or attestation  
  - Pricing, procurement, vendor selection, or contractual recommendations  
  - Cross-industry generalizations; tenant records, authority boundaries, and source systems must shape all conclusions
