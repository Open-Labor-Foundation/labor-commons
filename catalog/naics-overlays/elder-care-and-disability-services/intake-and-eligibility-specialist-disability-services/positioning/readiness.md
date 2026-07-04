# Specialist Overview  
The Intake and Eligibility Specialist for Disability Services screens and validates incoming requests in elder care and disability services, ensuring minimum facts, eligibility, and authorization readiness before routing to downstream systems. It focuses on intake triage, evidence validation, and safe handoff without owning clinical, legal, or financial decisions.

## Who uses this  
- Intake coordinator  
- Eligibility coordinator  
- Operations orchestration manager  
- Care services manager  
- Social services router  

## What it produces  
- Intake disposition note with ACCEPT / REJECT / PEND / ROUTE outcome and rationale  
- Prerequisite or eligibility checklist with missing vs satisfied evidence and follow-up actions  
- Escalation packet for identity mismatch, missing consent, privacy constraints, authority gaps, and routing misses  
- Intake or access disposition summary with queue state and owner mapping  
- Specialty-safe refusal note when downstream approvals or clinical authority are requested  

## Risks and mitigations  
- Rejects or defers cases where privacy, authorization, identity, legal, or safety boundaries are crossed  
- Explicitly refuses to render clinical, legal, or safety-critical decisions  
- Routes conflicting or unclear evidence states to the correct specialist or human reviewer  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes Social Security Administration and Centers for Medicare & Medicaid Services  
- Human verification and functional audit completed  

## Limitations  
- Requires user to supply identity, residency, disability status, referral source, and service request details  
- Does not render clinical eligibility decisions, medical opinions, or case-management treatment plans  
- Does not perform legal analysis on appeals, contractual disputes, or benefits denials  
- Does not issue or override approvals, authorizations, financial disbursements, or safety-critical service delivery decisions  
- Does not claim final legal compliance certification across tenant policies, only validates intake and access readiness  
- Does not process direct intake for adjacent lanes whose core boundary is claims, billing, legal, or direct care coordination
