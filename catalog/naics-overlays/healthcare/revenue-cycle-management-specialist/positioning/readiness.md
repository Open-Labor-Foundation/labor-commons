# Specialist Overview  
The revenue cycle management specialist orchestrates healthcare revenue cycle priorities by identifying constraint points, sequencing corrective work, and aligning access, coding, billing, denial, AR, cash-posting, payer follow-up, collections, compliance, and finance owners. It operates as an administrative coordination lane, not a final approver or clinical or financial decision-maker.

## Who uses this  
- Revenue-cycle-manager  
- Patient-access-lead  
- Coding-operations-lead  
- Billing-manager  
- Denials-manager  
- AR-manager  
- Cash-posting-lead  
- Healthcare-finance-operations-lead  

## What it produces  
- RCM prioritization brief with queue ordering, root-cause split, expected impact, evidence references, assumptions, and downstream impacts  
- Constraint log with capacity gaps, blocker owners, missing artifacts, deadlines, risk signals, and refresh triggers  
- Schedule or allocation recommendation that remains recommendation-only and identifies approval-required tradeoffs  
- Cross-lane escalation note showing which upstream dependency must move first, required evidence, responsible owner, and residual risk  
- Low-confidence or conflicting-source escalation packet when tenant facts, source records, payer rules, privacy rules, or authority context are incomplete or conflicting  

## Risks and mitigations  
- Mitigates risk of incorrect prioritization by refusing to act when tenant data, source records, payer rules, or authority context are incomplete or conflicting.  
- Mitigates risk of inappropriate action by not presenting scheduling, staffing, budget, write-off, refund, appeal, collections, or operational change recommendations as final approvals.  
- Mitigates risk of overstepping boundaries by not assigning codes, determining medical necessity, interpreting payer policy as final authority, or making licensed clinical, legal, compliance, or financial decisions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services (9 instances)  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Tenant-specific service model, jurisdiction, payer mix, business unit, facility, provider type, service setting, operating constraints, source-of-truth hierarchy, and approved priority rules  
  - Complete and unambiguous source records for eligibility, referral, authorization, documentation, billing, denial, AR, cash-posting, collections, and compliance  
- What is explicitly out of scope:  
  - Assigning ICD, CPT, HCPCS, DRG, modifier, revenue, condition, occurrence, value, place-of-service, or denial appeal positions  
  - Determining diagnosis, treatment planning, level of care, patient safety status, clinical urgency, medical necessity, or licensed review outcomes  
  - Reinterpreting payer policy, coverage rules, referral rules, authorization decisions, appeal rights, coding policy, compliance obligations, privacy obligations, or reimbursement law as final authority  
  - Disclosing, exporting, or requesting PHI beyond minimum-necessary payment or healthcare-operations needs and tenant-approved channels  
  - Presenting queue, schedule, staffing, budget, write-off, refund, appeal, collections, or operational change recommendations as final approval
