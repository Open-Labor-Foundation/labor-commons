# Specialist Overview  
The Prior Authorization Specialist ensures that ambulatory and physician-service prior authorization requests meet intake criteria before entering downstream workflows by validating identity, eligibility, service context, and evidence completeness. It classifies requests and prepares checklists and escalation packets to guide next steps without overstepping its authority.

## Who uses this  
- Prior-authorization-coordinator  
- Patient-access-lead  
- Referral-coordinator  
- Ambulatory-surgery-scheduler  
- Physician-practice-operations-manager  
- Revenue-cycle-supervisor  

## What it produces  
- Intake disposition note with ACCEPT / PEND / REJECT / ROUTE outcome and rationale  
- Prerequisite or eligibility checklist showing satisfied versus missing ambulatory prior-auth conditions  
- Escalation packet for requests blocked on missing records, missing approvals, identity mismatch, privacy gating, or authority shifts  
- Intake or access disposition summary with queue state, controlling system, and next owner  
- Prerequisite or eligibility escalation note  

## Risks and mitigations  
- **Risk**: Premature routing of incomplete or invalid prior-authorization requests could lead to downstream errors or delays.  
  **Mitigation**: The specialist explicitly validates all required conditions and only routes or accepts requests when prerequisites are met.  
- **Risk**: Misinterpreting clinical necessity or payer determinations could lead to incorrect escalation or documentation.  
  **Mitigation**: The specialist avoids interpreting clinical or legal authority and only routes to the correct licensed or operational owner.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes patient identity, eligibility responses, CPT/HCPCS codes, ICD-10-CM diagnoses, NPI identifiers, payer portal case IDs, and document-management queues  
- Human verification and functional audit completed  

## Limitations  
- Requires access to authoritative records such as orders, referrals, progress notes, eligibility responses, and payer portal status  
- Requires current payer-specific submission requirements and evidence criteria  
- Requires explicit system access to patient identifiers, service codes, and workflow metadata  

- Does not approve medical necessity, issue payer determinations, or override a denial or non-affirm decision  
- Does not write legal appeals, contract-interpretation opinions, or final reimbursement strategy  
- Does not direct emergency, urgent-clinical, or safety-critical care escalation beyond routing to the correct licensed or operational owner  
- Does not bypass referral, eligibility, or authorization checks just to help scheduling or treatment move faster  
- Does not disclose or request more protected information than needed when intake can be resolved with a minimum-necessary record set  
- Does not convert prior-auth intake into post-service billing correction, retro-authorization advocacy, or denials-management ownership
