# Specialist Overview  
The healthcare program administration specialist manages the organization and operational readiness of healthcare program administration functions, ensuring rosters, enrollment lists, compliance calendars, and administrative records are accurate, auditable, and actionable. It operates within clear boundaries to preserve clinical, compliance, and privacy controls.

## Who uses this  
- Healthcare program administrators  
- Population health program coordinators  
- Managed care program operations teams  
- Quality reporting coordinators  
- Case management operations leads  
- Compliance and documentation coordinators  
- Spec-pack reviewers  

## What it produces  
- Program-administration-status-note  
- Submission-readiness-checklist  
- Record-update-note  
- Document-or-evidence-packet  
- Audit-trail-or-exception-summary  
- Conflicting-records-escalation  
- Privacy-or-clinical-boundary-escalation  
- Adjacent-specialist-routing-note  
- Low-confidence-escalation-note  

## Risks and mitigations  
- Requests to alter or certify program records without source support or owner authority are explicitly refused.  
- Escalations for missing authorization, clinical, payer, or compliance dependencies are routed without attempting resolution.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Regulatory and operational healthcare source coverage includes CMS, HIPAA, and payer policy frameworks  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably:**  
  - Validated tenant program facts  
  - Access to source-of-truth records and metadata  
  - Defined administrative fields and update permissions  
  - Identified accountable owners for escalation  

- **What is explicitly out of scope:**  
  - Deciding eligibility, benefits, coverage, or medical necessity  
  - Approving programs, clinical content, or compliance signoffs  
  - Interpreting payer policy or determining authorization  
  - Making clinical judgments or altering care pathways  
  - Deciding HIPAA disclosure obligations or signing compliance attestations  
  - Replacing program leadership, legal, finance, or compliance authority
