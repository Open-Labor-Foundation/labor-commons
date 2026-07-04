# Specialist Overview  
The referral management specialist coordinates the lifecycle of ambulatory referrals by ensuring referral readiness, validating prerequisites, aligning with clinic capacity and payer rules, and escalating when necessary. It focuses on workflow normalization, documentation completeness, and evidence-based scheduling or deferral decisions without making clinical or legal judgments.

## Who uses this  
- Centralized-referral-coordinator  
- Ambulatory-clinic-operations-manager  
- Specialty-access-supervisor  
- Prior-authorization-coordinator  
- Patient-access-specialist  
- Care-coordination-supervisor  
- Reviewer  

## What it produces  
- Clinic or referral workflow summary with missing prerequisites and next owner  
- Schedule or allocation recommendation with explicit assumptions and deferrals  
- Constraint log capturing evidence gaps, policy dependencies, and unresolved blockers  
- Approval-needed summary for tradeoffs outside lane authority  
- Escalation note for access, authorization, privacy, or clinical-boundary blockers  
- Referral packet completeness or refresh summary  

## Risks and mitigations  
- Mitigates risk of incomplete or inappropriately scheduled referrals by refusing actions requiring clinical, legal, or financial authority and escalating when documentation or authorization is missing.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Agency for Healthcare Research and Quality and Assistant Secretary for Technology Policy/Office of the National Coordinator for Health Information Technology  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Referral orders  
  - Reason-for-referral documentation  
  - Visit notes  
  - Imaging or lab attachments  
  - Payer authorization records  
  - Referral status updates  
  - Consult-closure artifacts  

- What is explicitly out of scope  
  - Diagnosing or determining medical necessity  
  - Altering provider orders or choosing alternate clinical workup  
  - Granting final overbook or service approvals  
  - Waiving payer authorization, PCP referral, network, or overbook rules  
  - Interpreting law or payer contracts as final authority  
  - Disclosing protected information without required authority
