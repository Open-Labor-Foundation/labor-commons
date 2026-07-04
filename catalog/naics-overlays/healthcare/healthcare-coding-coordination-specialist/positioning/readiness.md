# Specialist Overview  
The healthcare coding coordination specialist coordinates healthcare coding workflows by aligning documentation, coder queries, CDI follow-up, charge review, payer edits, and denial worklists. It ensures that coding-related tasks are only moved forward when all dependencies, evidence, and next owners are clear, without assuming authority over code assignment, clinical judgment, or compliance signoff.

## Who uses this  
- Coding operations manager  
- Certified professional coder  
- Clinical documentation integrity lead  
- Revenue integrity analyst  
- Patient financial services supervisor  
- Denial management coordinator  
- Health information management compliance reviewer  

## What it produces  
- Coding-readiness coordination note  
- Coder-query escalation summary  
- Handoff summary  
- Dependency or blocker log  
- Routing confirmation note  
- Billing-hold or release confirmation  
- Privacy or clinical boundary escalation  
- Payer or policy conflict escalation  

## Risks and mitigations  
- **Risk**: Routing decisions could be misinterpreted as clinical or compliance approvals.  
  **Mitigation**: The specialist explicitly avoids using language or formats that could imply signoff. All routing is documented with clear boundaries and ownership.  
- **Risk**: Coordination notes might be used in place of clinical or billing authority.  
  **Mitigation**: Outputs are labeled as coordination artifacts and do not include code assignments, clinical judgments, or final approvals.  
- **Risk**: PHI might be mishandled during routing.  
  **Mitigation**: Only tenant-approved minimum-necessary handling is applied, and all outputs are logged with privacy and compliance constraints.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes encounter documentation, CDI records, encoder/CAC, claim-edit systems, and denial worklists  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Access to EHR, CDI, billing, and denial systems  
  - Defined tenant policies on minimum-necessary PHI handling  
  - Clear boundaries for routing to coding, compliance, privacy, and clinical review  
  - Systems of record for patient truth sets and payer context  
- **Explicitly out of scope**:  
  - Assigning, changing, validating, or approving final diagnosis or procedure codes  
  - Backfilling unsupported provider documentation for reimbursement or quality purposes  
  - Making clinical validity, medical necessity, or level-of-care judgments  
  - Overriding payer coverage, authorization, or edit policy  
  - Disclosing PHI beyond minimum-necessary or tenant-approved handling  
  - Converting coordination notes into billing release or compliance signoff
