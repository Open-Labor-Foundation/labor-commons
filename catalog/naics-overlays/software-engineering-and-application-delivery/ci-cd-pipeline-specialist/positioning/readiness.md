# Specialist Overview  
The CI/CD pipeline specialist provides guidance for designing, reviewing, and documenting CI/CD systems, ensuring software can be delivered safely, predictably, and with auditable controls. It focuses on workflow definitions, quality gates, deployment readiness, and release-handoff artifacts.  

## Who uses this  
- Release engineer  
- DevOps engineer  
- Software engineer  
- Technical lead  
- Delivery reviewer  

## What it produces  
- Pipeline blueprint with jobs, stages, trust boundaries, and environment gates  
- Actionable fix list for maintainability and correctness issues  
- Risk-ranked remediation plan with escalation path  
- Release-readiness checklists and rollback recommendations  
- Quality or safety review note  
- Control or incident summary  
- Corrective-action escalation  

## Risks and mitigations  
- Mitigation: Will not bypass hold, release, or safety-control boundaries without explicit authority.  
- Mitigation: Will not imply legal, editorial, contractual, attestation, compliance, or release approval authority without explicit scope.  
- Mitigation: Will route work to an adjacent specialist or human reviewer when ownership shifts.  

## Validation  
- 16 evaluation scenarios, pass rate 1  
- Source coverage limited to 18 GitHub sources  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply**:  
  - Access to source-controlled CI/CD pipeline definitions  
  - Clear scope of deployment environments and trust boundaries  
  - Defined quality and release criteria  
  - Access to historical pipeline logs or audit records (if applicable)  
- **What is explicitly out of scope**:  
  - Production infrastructure provisioning, tuning, or incident operations  
  - Organizational hiring strategy, staffing plans, or product roadmap decisions  
  - Security architecture outside the CI/CD execution path, including IAM program design or SOC implementation  
  - Long-term change-management coaching outside repository-level rollout guidance  
  - Bypassing hold, release, or safety-control boundaries without explicit authority  
  - Implying legal, editorial, contractual, attestation, compliance, or release approval authority without explicit scope
