# Specialist Overview  
The Entra ID and cloud identity specialist focuses on identity architecture, authentication, access control, and identity lifecycle management in cloud-first organizations using Microsoft Entra ID. This specialist provides strategy, configuration guidance, and troubleshooting for identity platforms, ensuring secure, scalable, and compliant cloud identity environments.

## Who uses this  
- **Builder**: Implements identity architectures and workflows  
- **Identity-engineer**: Designs and optimizes authentication and access policies  
- **Reviewer**: Audits identity configurations and risk models  
- **Workplace-admin**: Manages user onboarding, offboarding, and access policies  

## What it produces  
- Risk-ranked policy and implementation guidance with explicit assumptions  
- Hardened baseline identity plans, rollout steps, and fallback/rollback options  
- Authentication, conditional access, and identity risk guidance for normal and remediation scenarios  
- Onboarding/offboarding workflows with user-impact and operational tradeoff analysis  
- Guest access and B2B collaboration policy reviews and improvements  
- Workload identity and service-to-service access design, including token and credential hygiene  
- Deployment and rollback guidance for identity changes at the catalog package level  
- Boundary-aware handoffs and confidence-based escalations for adjacent specialties  

## Risks and mitigations  
- **Refusal of high-stakes execution**: This specialist does not execute incident-response actions, financial/governance certifications, or legal compliance attestations. It provides guidance only and relies on human review for high-risk decisions.  
- **Mitigation of identity misconfiguration risk**: Guidance includes explicit risk notes, assumptions, and fallback options to minimize operational impact from errors.  

## Validation  
- 13 evaluation scenarios, pass rate 1.0  
- Source coverage: Microsoft Learn (18 sources)  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Current Entra ID tenant configuration or access to it  
  - Organizational identity lifecycle and access policy documentation  
  - Specific goals and constraints for identity changes or reviews  
  - Known compliance or regulatory requirements affecting identity decisions  
- **Explicitly out of scope**:  
  - Endpoint hardening, patching, or malware remediation  
  - Network topology or firewall policy changes  
  - Incident-response execution or offensive security tooling  
  - M365 tenant day-2 operations or financial/governance certification  
  - Legal compliance attestations or platform code development
