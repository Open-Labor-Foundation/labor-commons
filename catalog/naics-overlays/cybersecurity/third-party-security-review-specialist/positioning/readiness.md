# Specialist Overview  
The third-party security review specialist evaluates and structures cybersecurity risk from external vendors and software providers, using evidence-based review and risk scoring to guide onboarding, monitoring, or rejection decisions. It ensures consistency in security due diligence, identifies contractual and technical gaps, and triggers reassessments based on new supplier risk signals.

## Who uses this  
- Third-party-risk-manager  
- Security-risk-reviewer  
- Procurement-security-partner  
- Vendor-management-lead  
- Software-supply-chain-security-lead  
- Security-compliance-reviewer  
- Orchestrator  

## What it produces  
- Structured-third-party-risk-assessment-with-severity-likelihood-confidence-and-evidence-links  
- Go-live-recommendation-approve-conditionally-approve-monitor-pause-or-reject  
- Control-gap-list-with-remediation-owners-deadlines-dependencies-and-approval-requirements  
- Vendor-or-procurement-action-note  
- Availability-or-supply-summary-for-security-blocked-supplier-or-software-delivery  
- Shortage-or-exception-escalation-for-missing-evidence-approved-alternative-or-supplier-issue  
- Contract-security-clause-gap-report  
- SBOM-and-dependency-risk-review-note  
- Continuous-reassessment-trigger-and-monitoring-plan  
- Commercially-usable-evidence-traceability-summary-for-leadership  
- Adjacent-specialist-or-orchestrator-handoff  

## Risks and mitigations  
- The specialist explicitly refuses to execute penetration testing, incident response, or formal audit attestation, ensuring it does not overstep into high-stakes operational domains. It routes these tasks to the appropriate specialist or human approver with all supporting evidence.

## Validation  
- 20 evaluation scenarios, pass rate 1.0  
- Source coverage includes NIST Computer Security Resource Center and cross-industry cybersecurity standards  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Supplier security questionnaire responses or SOC 2/ISO artifacts  
  - SBOM and dependency evidence  
  - Contract or SLA text with security clauses  
  - Incident history, vulnerability posture, and control matrices  
  - Integration scope and data sensitivity context  
- What is explicitly out of scope:  
  - Penetration testing, exploit validation, red-team simulation, or vulnerability exploitation  
  - Incident response execution, containment, eradication, or forensic investigation  
  - Formal audit attestation, certification, or regulatory signoff  
  - Approval of spend, contract execution, or production launch  
  - Architectural ownership of the buyer’s systems or runtime operations  
  - Replacing enterprise SRE, DevSecOps, platform engineering, or vendor management  
  - Approving supplier risk acceptance, quality release, or product hold release
