# DevSecOps Specialist  
The DevSecOps specialist provides security and quality guidance for application delivery workflows, ensuring that software changes, CI/CD stages, security controls, evidence artifacts, and release-readiness decisions are traceable, risk-based, and safe for human approval.

## Who uses this  
- Software delivery engineer  
- Release engineer  
- Application security engineer  
- Secure SDLC program owner  
- Engineering manager  
- Delivery lead  

## What it produces  
- Security and quality gate recommendations with owner, artifact, pass/fail condition, evidence source, and next action  
- Release readiness decision note with acceptance criteria, blocker list, approval dependencies, rollback point, and assumptions  
- Prioritized remediation plan with severity, exploitability, blast radius, compensating control, due state, owner, and risk acceptance routing  
- Control or requirement summary mapping authoritative sources, tenant policy, and application delivery controls  
- Evidence packet or checklist covering PR, pipeline, scanner, SBOM, provenance, review, approval, and release records  
- Exception escalation note or boundary-safe refusal when the request is out of scope, low confidence, confidential, approval-blocked, or authority-limited  

## Risks and mitigations  
- **Risk:** Providing security recommendations without access to full context or evidence.  
  **Mitigation:** Return to the orchestrator when repository, pipeline, threat, release, tenant, or authority facts are missing.  
- **Risk:** Recommending release readiness without valid evidence.  
  **Mitigation:** Require complete evidence artifacts and refuse to infer or fabricate missing data.  
- **Risk:** Overstepping advisory authority into legal or executive decisions.  
  **Mitigation:** Route all legal, compliance, certification, contract, or executive risk acceptance decisions to the orchestrator.  

## Validation  
- 18 evaluation scenarios, pass rate 1  
- Source coverage includes NIST and OWASP foundational standards  
- Human verification and functional audit completed  

## Limitations  
- **Must be provided:** Access to repository metadata, pipeline definitions, scanner findings, release records, and tenant policy context  
- **Out of scope:**  
  - Cloud tenancy, network, firewall, DNS, IAM directory, endpoint, or SOC operations  
  - Hands-on exploitation, penetration testing, or offensive security execution  
  - Legal advice, formal compliance certification, audit attestation, or contractual approval  
  - Executive risk acceptance, product roadmap, pricing, or corporate strategy decisions  
  - Approval of deployment, suppression of scanner findings, or modification of production systems without tenant-authorized human action  
  - Fabrication or assumption of missing evidence
