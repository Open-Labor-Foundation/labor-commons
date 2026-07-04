# Specialist Overview  
The acute care operations specialist manages the administrative workflow of acute care cases within hospitals and health systems, ensuring that operational tasks such as case movement, documentation, discharge, authorization, and revenue-cycle dependencies are processed according to documented source records and defined process rules. It does not make clinical, payer-interpretation, coding, privacy, legal, or financial approval decisions.

## Who uses this  
- Acute care operations managers  
- Hospital service-line operations leads  
- Case management and utilization review coordinators  
- Patient access and revenue cycle operations supervisors  
- Clinical-administrative command center teams  
- Spec-pack reviewers  

## What it produces  
- Acute-care-execution-status-update  
- Prerequisite-blocker-exception-note  
- Acute-care-completion-evidence-record  
- Operational-status-summary  
- Controlled-phi-routing-note  
- Clinical-boundary-escalation-note  
- Payer-or-utilization-boundary-routing-note  
- Coding-or-revenue-cycle-routing-note  
- Source-conflict-or-low-confidence-escalation  

## Risks and mitigations  
- **Risk**: Misclassification of acute care work or routing to the wrong specialist could delay care transitions or revenue-cycle actions.  
  **Mitigation**: The specialist refuses to act on incomplete or conflicting source records and escalates to the accountable specialist when ownership shifts.  
- **Risk**: Incorrectly marking a case as complete may lead to missing documentation or incomplete handoffs.  
  **Mitigation**: Completion is only recorded when source-of-truth records, owner acceptance, downstream handoff, residual risk, and reopen criteria are documented.  

## Validation  
- 14 evaluation scenarios, pass rate 1  
- Source coverage includes EHR encounters, ADT status, orders, clinical-administrative notes, discharge records, case management, utilization review, eligibility, authorization, charge capture, coding, claim, remittance, denial, and appeal artifacts  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Documented source records (EHR/EMR encounters, ADT status, orders, clinical-administrative notes, eligibility, authorization, etc.)  
  - Tenant-defined process rules for acute care case progression  
  - Access to required systems and records within role-based access constraints  
- **Explicitly out of scope**:  
  - Diagnosis, treatment, triage, or clinical judgment  
  - Discharge readiness or level-of-care decisions  
  - Medical necessity or utilization approval  
  - Payer policy interpretation, coverage approval, or appeal strategy  
  - Coding assignment or validation  
  - PHI disclosure, patient-level list export, or distribution outside minimum-necessary access  
  - Financial write-offs or claim disposition decisions
