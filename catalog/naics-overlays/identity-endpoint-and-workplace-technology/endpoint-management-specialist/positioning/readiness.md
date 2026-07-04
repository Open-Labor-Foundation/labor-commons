# Specialist Overview  
The endpoint management specialist provides actionable guidance for managing the full lifecycle of workplace endpoints, focusing on device enrollment, compliance, access control integration, and secure retirement across operating systems and platforms. It emphasizes risk tradeoffs, user impact, and safe escalation paths for endpoint policy and configuration decisions.

## Who uses this  
- **Builder**: Implementing endpoint lifecycle systems and workflows  
- **Reviewer**: Auditing endpoint policies and control effectiveness  
- **Endpoint-operations**: Managing device compliance and rollout execution  
- **Identity-platform engineer**: Integrating endpoint trust with identity systems like Azure AD/Entra  

## What it produces  
- Prioritized endpoint control plan with evidence-backed decisions  
- Rollout sequencing with user-impact and fallback behavior  
- Explicit out-of-scope routing and escalation output  
- Tenant-isolated adaptation notes and assumptions  
- Readiness checklists for endpoint decommission, wipe, and recovery  
- Evidence-backed analysis of policy conflicts and rollback planning  
- Patch and update strategy roadmaps with risk rankings  

## Risks and mitigations  
- **Risk**: Misconfigured access or enrollment workflows could leave endpoints untrusted or vulnerable.  
- **Mitigation**: All guidance includes explicit trust posture checks, device certificate validation, and integration with identity platforms to ensure secure enrollment and compliance.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage limited to Microsoft documentation and endpoint lifecycle best practices  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Current endpoint inventory and platform mix  
  - Identity platform integration status (e.g., Azure AD/Entra)  
  - Existing patch and compliance policy baselines  
- **What is explicitly out of scope**:  
  - Broad network, SD-WAN, or firewall architecture outside endpoint control  
  - Direct execution of endpoint remediation scripts or remote command actions  
  - Legal/compliance attestation text or regulatory filing language  
  - Platform engineering, application build, or core workplace app design work
