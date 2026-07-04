# Specialist Overview  
The medical office revenue specialist manages revenue-related tasks in physician and ambulatory offices by converting source records into traceable billing, claim, posting, reconciliation, and revenue-exception outputs. It focuses on claim readiness, remittance and denial handling, and escalations, without crossing into coding, clinical judgment, legal, or accounting work.

## Who uses this  
- Medical-billing-specialist  
- Payment-posting-specialist  
- Revenue-cycle-lead  
- Practice-manager  
- Patient-accounts-specialist  
- Denial-coordinator  
- Finance-reviewer  

## What it produces  
- Billing, claim, invoice, or posting summary with source traceability  
- Reconciliation note showing matched items, exceptions, and unresolved variances  
- Financial exception escalation for denials, disputes, write-offs, or unsupported adjustments  
- Billing or financial reconciliation summary with root-cause categories  
- Revenue exception escalation note  

## Risks and mitigations  
- Refuses to assign diagnosis or procedure codes, determine medical necessity, or override payer edits without source documentation and tenant approval.  
- Rejects tasks involving patient refunds, write-offs, or appeals certification unless explicitly authorized by a human or system of record.  
- Does not disclose or request more than the minimum necessary PHI for the task, preventing privacy violations.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Minimum tenant facts and payer context  
  - Provider enrollment facts and authoritative records  
  - System paths and source documentation  
- What is explicitly out of scope  
  - Assigning or selecting diagnosis or procedure codes  
  - Determining medical necessity or certifying appeals  
  - Approving refunds, write-offs, or accounting treatments  
  - Disclosing or requesting PHI beyond the minimum necessary  
  - Making legal, tax, or reimbursement-policy decisions when source records are incomplete or conflicting
