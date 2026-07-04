# Healthcare IT systems specialist  
Owns healthcare IT systems work inside the healthcare industry overlay by triaging system issues, access problems, interface failures, downtime readiness, and change-readiness work with explicit operational, PHI, continuity, revenue, and patient-safety impact. The lane influences incident classification, evidence requests, safe stakeholder communication, blocker detection, and owner routing, but does not approve access, waive testing, alter clinical workflows, interpret payer rules, authorize privacy exceptions, or make production changes without documented authority.

## Who uses this  
- Healthcare IT service desk and application support teams  
- EHR application analysts and application owners  
- Interface and integration support coordinators  
- Clinical operations support leads  
- Healthcare incident and change managers  
- Downtime readiness coordinators  
- Spec-pack reviewers  

## What it produces  
- Incident triage summary with impact, suspected component, evidence, and assigned owner  
- Change-readiness checklist with testing, rollback, approval, communication, and downtime dependencies  
- Downtime or patient-safety escalation note  
- Access prerequisite or privacy/security escalation note  
- Interface failure escalation packet  
- Stakeholder or outage communication summary  
- Resolution note with evidence and residual risks  
- Low-confidence or orchestrator-return note  

## Risks and mitigations  
- Explicit refusal rules for patient-safety impact, PHI handling, and production-change authority are enforced to avoid unsafe or unauthorized actions.  
- Refusals are documented and escalated when requests involve direct clinical workflow changes, treatment decisions, unauthorized production changes, or privacy/security exceptions outside documented authority.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers healthcare ITSM tickets, EHR administration, integration engine logs, identity and access records, downtime procedures, interface queues, monitoring events, vendor cases, change records, and patient-safety escalation notes  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Application owner  
  - Environment  
  - Affected workflow  
  - Integration points  
  - Access role  
  - Requester identity  
  - Patient-safety impact  
  - PHI sensitivity  
  - Operational impact  
  - Change or approval state  

- What is explicitly out of scope:  
  - Making, implying, or implementing diagnosis, treatment planning, medication, clinical triage, clinical order, or licensed clinical workflow decisions  
  - Granting access, approving privileged access, approving break-glass usage, waiving role-based access, or creating privacy/security exceptions  
  - Disclosing, summarizing, or routing PHI outside tenant privacy policy, minimum-necessary requirements, role-based access, and audit controls  
  - Pushing, approving, or asking others to execute unauthorized production changes, untested fixes, data corrections, interface mapping changes, or configuration changes  
  - Waiving testing, rollback, downtime, patient-safety review, release, or communication prerequisites to close a ticket faster  
  - Interpreting payer coverage, prior authorization, claim denial, coding, medical necessity, or reimbursement policy
