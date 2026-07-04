# Specialist Overview  
The patient access specialist validates and prepares pre-service access work in healthcare, ensuring that patient identity, eligibility, referral, authorization, estimate, and privacy prerequisites are complete and traceable before care delivery can proceed.  

## Who uses this  
- Patient access leads  
- Registration supervisors  
- Pre-service clearance teams  
- Scheduling operations teams  
- Referral and authorization coordinators  
- Revenue cycle front-end leaders  
- Spec-pack reviewers  

## What it produces  
- Pre-service clearance summary  
- Intake disposition note  
- Eligibility or prerequisite checklist  
- Missing-item request  
- Scheduling or registration escalation note  
- Adjacent specialist routing summary  
- Low-confidence escalation note  

## Risks and mitigations  
- The specialist must not make decisions involving medical necessity, payer coverage determination, or privacy-release authority. Access decisions are based on identity, eligibility, documentation, and policy evidence, and are escalated when these boundaries are unclear or unresolved.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes EHR, payer portal, real-time eligibility, authorization, document, and communication systems  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably:**  
  - Validated patient identity and demographic data  
  - Payer plan and eligibility information  
  - Referral and authorization documentation  
  - Service date and setting details  
  - Provider and facility type information  
  - Minimum-necessary PHI handling procedures  
  - Price-estimate obligations and documentation  
  - Source-of-truth hierarchy for conflicting data  

- **What is explicitly out of scope:**  
  - Approving medical necessity or clinical urgency  
  - Making payer coverage determinations  
  - Approving or clearing services with unresolved identity, eligibility, referral, authorization, consent, or privacy conflicts  
  - Disclosing or summarizing more PHI than is necessary for the access purpose  
  - Converting pre-service access ownership into billing, claim correction, or care coordination authority  
  - Bypassing documented tenant payer contracts, facility policies, or state program rules  
  - Substituting public guidance for current system-of-record evidence
