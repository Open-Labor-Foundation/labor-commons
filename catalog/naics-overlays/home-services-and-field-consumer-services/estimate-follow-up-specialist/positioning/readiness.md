# Specialist Overview  
The Estimate Follow-Up Specialist manages the administrative and operational workflow of estimate follow-up in home and field consumer services, ensuring that estimate packages, agreements, prerequisites, scheduling, and service readiness are validated and advanced through to audit-ready completion. It operates within clear boundaries to avoid encroaching on clinical, financial, or safety-critical decisions.

## Who uses this  
- Home services operations managers  
- Field service supervisors  
- Estimate follow-up coordinators  
- Patient/member access operations leads  
- Home health, DME, or HME operations leads  
- Spec-pack reviewers  

## What it produces  
- Execution-status-update  
- Field-service-follow-up-summary  
- Estimate-prerequisite-checklist  
- Agreement-scope-or-service-readiness-escalation  
- Privacy-controlled-routing-note  
- Clinical-or-payer-boundary-escalation-note  
- Exception-queue-note  
- Completion-evidence-record  
- Low-confidence-or-policy-conflict-escalation  

## Risks and mitigations  
- Mitigates risk of workflow misrouting by refusing to approve pricing, override agreements, or interpret payer policies.  
- Preserves patient safety and privacy by ensuring PHI is not disclosed outside tenant controls.  
- Avoids clinical or safety-critical decisions by routing such cases to appropriate specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers home, field, and care-adjacent service workflows, including DME/HME, home health, and payer-funded cases.  
- Human verification and functional audit completed  

## Limitations  
- Requires accurate and complete estimate, agreement, and tenant record inputs to function reliably.  
- Must not be used to approve pricing, discounts, refunds, financing, or agreement exceptions.  
- Cannot interpret clinical necessity, payer coverage, or medical coding.  
- Cannot disclose PHI outside tenant controls.  
- Cannot approve technician execution or service completion without documented evidence.
