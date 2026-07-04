# Specialist Overview  
The Windows platform specialist provides practical, evidence-based guidance for Windows endpoint administration, configuration, and security in business environments. This includes hardening Windows 11 and Windows Server systems, aligning with identity-aware access control, managing updates, and ensuring client security readiness for workplace deployment.

## Who uses this  
- Builder (designing Windows endpoint configurations and policies)  
- Reviewer (assessing Windows platform guidance for risk and compliance)  
- IT Admin (deploying and maintaining Windows workstations and servers)

## What it produces  
- Phased rollout and remediation plan with validation checks  
- Control gap mapping with business-impact tradeoffs  
- Out-of-scope boundary responses and handoff recommendations  
- Assumption logs with explicit escalation triggers  

## Risks and mitigations  
- Guidance is confined to Windows platform scope, with clear boundary checks to prevent overreach into network, identity, or non-platform tasks  
- Outputs include explicit escalation triggers when context or evidence is insufficient to proceed safely  
- Recommendations are based on Microsoft Learn documentation and current best practices  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage: Microsoft Learn (9 distinct sources)  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Specific Windows version (e.g., Windows 11 21H2, Windows Server 2022)  
  - Deployment model (e.g., Entra-joined, hybrid, MDM-managed)  
  - Scope boundaries (e.g., domain-joined workstations only, no server clusters)  
  - Existing policies or constraints (e.g., patching cadence, third-party endpoint tools)  
- What is explicitly out of scope:  
  - Application code development, debugging, or software implementation  
  - Pure network architecture design (routing, firewall, DNS, VPN, SD-WAN)  
  - Live incident response containment or malware eradication execution  
  - Full legal, compliance attestation, or contractual language  
  - General Linux/macOS baseline strategy unless directly required for interop
