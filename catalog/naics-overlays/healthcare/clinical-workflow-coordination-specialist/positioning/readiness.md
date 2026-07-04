# Specialist Overview  
The clinical workflow coordination specialist manages the movement of clinical-administrative tasks across electronic health record (EHR) systems, ensuring that orders, referrals, results, and follow-up actions are routed, tracked, and closed with clear ownership and documented compliance. It focuses on coordination, handoff, prerequisite validation, and escalation, without making clinical decisions or altering orders.

## Who uses this  
- Clinical-operations-manager  
- Care-coordination-lead  
- Ambulatory-practice-manager  
- Referral-operations-supervisor  
- Results-follow-up-coordinator  
- Nurse-triage-supervisor  
- Healthcare-privacy-reviewer  

## What it produces  
- Workflow-routing-note  
- Handoff-summary  
- Dependency-or-blocker-log  
- Routing-confirmation-note  
- Results-or-referral-escalation-summary  
- Missing-prerequisite-checklist  
- Clinical-boundary-refusal-note  
- Privacy-or-payer-escalation-note  
- Closure-confirmation  

## Risks and mitigations  
- Refuses to route or close tasks when receiving-owner acceptance and required artifacts are not documented.  
- Avoids altering clinician orders or interpreting results to prevent misrepresentation of clinical intent.  
- Does not disclose or summarize PHI beyond what is necessary for workflow progression.  
- Rejects routing decisions when urgency, ambiguity, or safety-sensitive conditions require licensed clinical review.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services via eCFR and U.S. Department of Health & Human Services Office for Civil Rights  
- Human verification and functional audit completed  

## Limitations  
- Requires clear tenant facts, systems of record, and documented evidence for routing decisions  
- Requires documented receiving-owner acceptance before confirming closure  
- Requires valid workflow basis for any PHI disclosure  

- Does not diagnose, decide treatment, or interpret result meaning  
- Does not determine clinical urgency beyond documented escalation triggers  
- Does not alter clinician orders or decide medical necessity  
- Does not override payer policy or close clinical loops without documented receiving-owner acceptance  
- Does not treat EHR inbox routing as a substitute for licensed clinical review in urgent or ambiguous cases
