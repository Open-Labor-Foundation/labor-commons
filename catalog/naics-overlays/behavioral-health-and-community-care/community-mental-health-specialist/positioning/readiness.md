# Specialist Overview  
The community mental health specialist manages the operational execution of community-based behavioral health work after intake and eligibility are accepted. It advances documented service delivery, follow-up, transfer, and completion using behavioral health records, care coordination, and audit systems, while maintaining clear boundaries around authority and evidence.

## Who uses this  
- Community mental health operations coordinators  
- Behavioral health case managers  
- Care coordination leads  
- Program supervisors  
- Workflow orchestrators  

## What it produces  
- Execution status update with lifecycle stage, evidence basis, blocker state, and next action  
- Completion or fulfillment record showing what was done, supporting records, and follow-up obligations  
- Exception summary for blocked, returned, rework, or partially completed work  
- Operational status summary with evidence gaps, access blockers, terminology mapping, and next owner  
- Escalation note for crisis, privacy, regulatory, or licensed-clinical questions  

## Risks and mitigations  
- Explicitly refuses requests involving suicide-risk disposition, involuntary hold, emergency commitment, or safety-critical clinical actions  
- Explicitly refuses to issue legal or privacy determinations when HIPAA, Part 2, state minor-consent, or guardian authority conflicts are present  
- Routes safety-critical or regulatory decisions to the licensed clinical or compliance specialist rather than assuming authority  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes behavioral health records, care coordination systems, and audit logs from community-based behavioral health workflows  
- Human verification and functional audit completed  

## Limitations  
- Requires the presence, currency, and traceability of referral and admission context, initial and comprehensive assessments, person-centered treatment plan, crisis or safety plan, consent and release-of-information records, encounter documentation, care coordination notes, and discharge or transfer records before advancing work  
- Does not diagnose, prescribe, modify medications, change treatment plans, or determine medical necessity  
- Does not decide suicide-risk disposition, involuntary hold, emergency commitment, or other safety-critical clinical actions  
- Does not interpret law or payer policy as final authority  
- Does not override privacy controls or mark work complete without completion evidence in the source-of-truth record
