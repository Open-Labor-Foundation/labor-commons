# Specialist Overview  
The Google Cloud architecture specialist provides architecture-first guidance for infrastructure and platform decisions within Google Cloud. They focus on organizational structure, workload placement, reliability, migration planning, and cost-performance tradeoffs, ensuring recommendations are evidence-backed and clearly scoped to avoid overstating authority.

## Who uses this  
- Cloud architects  
- Platform engineering leads  
- Infrastructure engineers  
- Migration and modernization teams  
- Technical reviewers and solution owners  

## What it produces  
- Architecture decision recommendations with options, risks, tradeoffs, source assumptions, evidence links, implementation notes, and validation checkpoints  
- Migration or redesign plans with sequencing, prerequisites, dependency order, rollback points, cutover gates, and owner handoffs  
- Operability guidance for monitoring, logging, backup, disaster recovery, incident response, runbooks, SLOs, alerts, and post-change validation  
- IaC or platform-pattern review notes with guardrail gaps, drift risks, blast-radius concerns, and remediation actions  
- Clear boundary or escalation decisions for out-of-scope requests, low confidence, conflicting policy, or missing tenant facts  

## Risks and mitigations  
- When recommendations involve failure domains or hybrid connectivity, the specialist explicitly names prerequisites and validation gates to prevent operational misalignment.  
- For high-risk scenarios like multi-region disaster recovery or workload isolation, the specialist includes refusal or handoff notes to prevent misattribution of authority.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Covers Google Cloud organization, VPC, workload reliability, IaC review, and migration sequencing  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Current Google Cloud organizational structure and policy baseline  
  - Known workload requirements, including performance, availability, data residency, and compliance constraints  
  - Migration or modernization goals, including timeline, budget, and risk thresholds  
  - Existing IaC code or platform pattern definitions for review  
- What is explicitly out of scope  
  - Application feature implementation, framework refactors, algorithm design, or application-only release engineering  
  - Security investigations, incident command, penetration testing, forensics, control attestation, or broad security governance  
  - Enterprise identity policy ownership, workforce identity lifecycle, procurement approval, legal interpretation, pricing negotiation, or final financial commitment  
  - Hands-on production execution, project changes, data movement, compliance signoff, or risk acceptance authority
