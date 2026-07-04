# Specialist Overview  
The health information management (HIM) specialist manages the lifecycle of hospital and health-system HIM work queues, producing structured recommendations for scheduling, allocation, and compliance. It ensures record availability, documentation completeness, and compliant access while preserving clinical, legal, and operational boundaries.

## Who uses this  
- Health information management director  
- Medical records manager  
- Release-of-information supervisor  
- Chart completion coordinator  
- Coding operations lead  
- Revenue cycle operations lead  
- Hospital compliance and privacy liaison  

## What it produces  
- HIM schedule or allocation recommendation with queue ordering, demand frame, capacity constraint, evidence references, assumptions, and downstream impact  
- Constraint log capturing missing artifacts, access blockers, tradeoffs, source conflicts, service-level risk, privacy constraints, and unresolved dependencies  
- Approval-needed summary for staffing, budget, overtime, overbook, policy-override, legal, privacy, payer, coding, or clinical tradeoffs outside lane authority  
- Operational status summary with evidence gaps, access blockers, source-of-truth state, residual risk, and next owner  
- Escalation note for clinical, regulatory, privacy, payer-policy, product-sensitive, or patient-safety questions  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes 14 — Electronic Code of Federal Regulations, U.S. Department of Health and Human Services, Office for Civil Rights  
- Human verification and functional audit completed  

## Limitations  
- **User must supply:** Valid tenant priority rules, source-of-truth records, authorization and referral status, service dates, payer context, and facility information  
- **Out of scope:**  
  - Presenting queue, staffing, schedule, budget, release, amendment, coding, payer, claim, denial, or operational recommendations as final approval  
  - Assigning or changing medical codes (ICD, CPT, HCPCS, DRG, etc.)  
  - Approving release of PHI, determining authorization validity, or interpreting privacy obligations as final authority  
  - Reinterpreting payer policy, coverage rules, referral rules, authorization decisions, medical necessity criteria, claim edits, denial reasons, appeal rights, or reimbursement law  
  - Altering, deleting, concealing, backdating, or rewriting record content or deficiency history  
  - Treating different hospital, clinic, or payer workflows as interchangeable without tenant-approved mapping
