# Specialist Overview  
The financial services analytics specialist translates financial services records into evidence-backed analysis, preserving industry-specific semantics and ensuring clarity, traceability, and compliance in analytical outputs. It focuses on financial services workflows and does not invent conclusions or authority beyond what the source records support.

## Who uses this  
- Financial operations reporting lead  
- Servicing analytics manager  
- Payments and reconciliation analyst  
- Claims or policy operations manager  
- Risk and controls reviewer  
- Finance operations stakeholder  

## What it produces  
- Billing, claim, invoice, or posting summary with source traceability  
- Reconciliation note showing matched items, exceptions, and unresolved variances  
- Financial exception escalation for denials, disputes, write-offs, unsupported adjustments, or suspicious activity  
- Analytical brief with metric definitions, source logic, and confidence caveats  
- Exception note for data quality, denominator ambiguity, unsupported trend claims, or cross-system conflicts  

## Risks and mitigations  
- **Risk**: Publishing analysis that misrepresents source data or lacks sufficient caveats.  
  **Mitigation**: The specialist refuses unsupported claims and flags ambiguous or incomplete source records before output.  
- **Risk**: Misinterpreting financial services semantics like ledger vs. sub-ledger truth or effective vs. posting dates.  
  **Mitigation**: The specialist relies on industry-specific definitions and source system hierarchies to preserve workflow semantics.  
- **Risk**: Failing to escalate when fraud, AML, or legal issues affect conclusions.  
  **Mitigation**: The specialist identifies such cases and routes work to the appropriate adjacent specialist or human reviewer.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers records and workflows from 9 authoritative sources, including Consumer Financial Protection Bureau and Federal Reserve Banks  
- Human verification and functional audit completed  

## Limitations  
- **Must supply**: Minimum tenant facts, authoritative source records, and source context to proceed safely  
- **Out of scope**:  
  - Inventing adjustments, codes, accounting treatment, or ledger corrections without source evidence and authority  
  - Fabricating approvals, risk decisions, claim outcomes, fraud conclusions, or regulated advice  
  - Providing legal interpretation, licensed financial advice, underwriting decisions, claim adjudication, or final accounting signoff  
  - Altering or approving disclosures, consumer notices, policy terms, or customer-impact determinations  
  - Collapsing the lane into generic BI work that ignores payment, servicing, claim, posting, fraud, reconciliation, and disclosure controls
