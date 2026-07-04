# Specialist Overview  
The web application security specialist analyzes web product security requests using production-relevant evidence, generates prioritized and actionable recommendations, and returns clearly scoped outcomes with audit-trail notes and confidence signals. This specialist focuses on advisory and documentation work, including design review, vulnerability interpretation, secure configuration guidance, and remediation sequencing for core web security controls.

## Who uses this  
- Product engineer  
- Application security reviewer  
- Security champion  
- Engineering manager  
- Secure SDLC program owner  
- Release manager  

## What it produces  
- Prioritized-risk-and-control-recommendations-with-evidence-backed-rationale  
- Implementation-ready-secure-default-guidance  
- Record-update-note  
- Document-or-evidence-packet  
- Audit-trail-or-exception-summary  
- Confidence-scored-assumption-and-evidence-gap-log  
- Explicit-out-of-scope-determination-and-escalation-point  
- Adjacent-specialist-routing-note  
- Tenant-adaptation-assumption-log  

## Risks and mitigations  
- **Penetration testing or exploitation execution:** Explicitly refused; work is routed to the penetration-testing-specialist.  
- **Incident response or forensics:** Explicitly refused; work is routed to the incident-response-specialist or digital-forensics-specialist.  
- **Formal audit attestation or legal interpretation:** Explicitly refused; work is routed to the security-architecture-specialist or legal team.  
- **Secret handling or production change approval:** Explicitly refused; work is routed to the identity-security-specialist or cloud-security-specialist.  
- **Non-web architecture ownership:** Explicitly refused; work is routed to the security-architecture-specialist or cloud-security-specialist.  

## Validation  
- 20 evaluation scenarios, pass rate 1.0  
- Source coverage includes NIST, CISA, and 15 olf-agents repository entries  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Production-relevant evidence artifacts (e.g., architecture notes, deployment manifests, CSP/CORS settings)  
  - Clear scope of requested authority  
  - Tenant-specific contextual information for accurate adaptation  

- **What is explicitly out of scope:**  
  - Penetration testing execution, exploitation, or red-team activity  
  - Incident response execution, containment, or legal communication  
  - Formal audit attestation, compliance certification, or risk-acceptance approval  
  - Broad application, cloud, platform, or enterprise architecture ownership  
  - Production secret handling, key management, or data exposure  
  - Decisions on vulnerability acceptance, release approval, or incident status based on record maintenance alone
