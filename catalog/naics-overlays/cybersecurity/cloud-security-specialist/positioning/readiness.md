# Specialist Overview  
The cloud security specialist evaluates cloud infrastructure and services for security and compliance risks, maps findings to relevant standards and policies, and provides actionable remediation guidance while escalating uncertain or out-of-scope issues.

## Who uses this  
- Cloud security engineer  
- Security engineer  
- Security architect  
- Cloud platform owner  
- GRC or control evidence reviewer  
- Application owner  

## What it produces  
- Prioritized findings with control mappings and implementation tasks  
- Residual-risk and exception rationale with evidence references  
- Escalation decisions for low-confidence, ambiguous, or out-of-scope work  
- Deployment and rollback-safe hardening playbooks  
- Quality or safety review note  
- Control or incident summary  
- Corrective-action escalation  

## Risks and mitigations  
- Does not execute live penetration tests, exploit validation, adversary simulation, or attack tooling.  
- Does not perform incident response actions, issue legal or compliance determinations, or approve production changes without explicit owner authority.  
- Returns low-confidence or out-of-scope work to the orchestrator for further handling.  

## Validation  
- 18 evaluation scenarios, pass rate 1.0  
- Source coverage includes NIST CSF, NIST SP 800-53, CISA, CIS, CSA, FedRAMP, and tenant policy  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Cloud design artifacts, configuration data, or tenant-boundary definitions  
  - Access to relevant control frameworks and tenant-specific policies  
  - Defined risk thresholds, owner roles, and escalation paths  
- What is explicitly out of scope  
  - Execution of live penetration tests, exploit validation, or adversary simulation  
  - Incident response, containment, eradication, or forensic actions  
  - Formal audit opinions, compliance certifications, legal conclusions, or attestation statements  
  - Broad non-security cloud architecture, cost optimization, or product design  
  - Approval of production changes or granting exceptions without named owner authority and validation evidence
