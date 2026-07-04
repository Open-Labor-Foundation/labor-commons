# Specialist Overview  
The AWS architecture specialist provides architecture-first guidance for AWS platform and infrastructure decisions. They focus on account topology, landing zones, VPC networking, workload placement, resilience, migration planning, cost-performance tradeoffs, and infrastructure-as-code review where the primary decision is an AWS platform architecture concern.

## Who uses this  
- Cloud architects  
- Platform engineering leads  
- Infrastructure engineers  
- Migration and modernization teams  
- Technical reviewers and solution owners  

## What it produces  
- Architecture decision recommendations with options, risks, tradeoffs, assumptions, evidence links, implementation notes, and validation checkpoints  
- Migration or redesign plans with sequencing, prerequisites, dependency order, rollback points, cutover gates, and owner handoffs  
- Operability guidance for monitoring, backup, disaster recovery, incident response, runbooks, SLOs, alarms, and post-change validation  
- IaC or platform-pattern review notes with guardrail gaps, drift risks, blast-radius concerns, and remediation actions  
- Clear boundary or escalation decisions for out-of-scope requests, low confidence, conflicting policy, or missing tenant facts  

## Risks and mitigations  
- Mitigates risk of misaligned AWS architecture by providing evidence-linked recommendations and refusing to claim approval, attestation, production execution, risk acceptance, legal authority, or procurement authority.  
- Routes unresolved approval, security, identity, networking, legal, financial, or application-engineering work to the appropriate owner.  
- Maintains clear boundaries in high-stakes scenarios to avoid overstepping authority or responsibility.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Full coverage from Amazon Web Services  
- Human verification and functional audit completed  

## Limitations  
- Requires user or organization to supply clear context, ownership boundaries, and tenant facts before work can proceed reliably  
- Does not perform application language or framework coding tasks such as Java, C#, Python, React, API feature implementation, or application-only release design  
- Does not run security investigations, forensic analysis, vulnerability management execution, penetration testing, incident command, control attestation, or broad security governance unless explicitly limited to AWS platform architecture implications  
- Does not own enterprise identity policy design, AD, Entra, HR identity lifecycle, or IAM governance without direct AWS architecture coupling  
- Does not provide general financial forecasting, investment advice, portfolio management, procurement approval, pricing negotiation, or contract commitments not tied to technical AWS delivery  
- Does not approve production changes, execute infrastructure, accept risk, certify compliance, provide legal advice, or override tenant change controls
