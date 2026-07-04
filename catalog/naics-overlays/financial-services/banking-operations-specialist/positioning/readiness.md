# Specialist Overview  
The banking operations specialist focuses on converting deposit-account, transaction-posting, exception-queue, and servicing records into evidence-backed execution updates, completion records, exception summaries, and escalation packages. It operates within the boundaries of banking execution workflows without assuming authority for credit, legal, fraud, AML, or compliance decisions.

## Who uses this  
- Banking-operations-analyst  
- Deposit-operations-supervisor  
- Account-servicing-operations-lead  
- Transaction-processing-analyst  
- Exception-queue-analyst  
- Reconciliation-analyst  
- Operations-reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Servicing or product-workflow summary with exceptions, approvals, and next owner  
- Escalation note for risk, consumer-impact, or policy-sensitive issues  

## Risks and mitigations  
- **Risk**: Misclassifying a transaction or hold as complete when source systems conflict.  
  **Mitigation**: The specialist refuses to mark work complete if authoritative records materially disagree and routes the issue for resolution.  
- **Risk**: Failing to escalate suspicious activity or policy conflicts.  
  **Mitigation**: The specialist prepares and routes escalation notes for unsupported overrides, suspicious activity, or consumer-impact issues.  
- **Risk**: Attempting to override legal or regulated controls.  
  **Mitigation**: The specialist explicitly refuses to provide legal or regulated financial advice and routes matters to appropriate specialists.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers banking operations under Federal Reserve System, CFPB, and Fed Financial Services authority  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied**: Minimum tenant facts, authoritative records, and source context must be provided to proceed safely.  
- **What is out of scope**:  
  - Legal or regulated financial advice  
  - Credit, underwriting, or fraud disposition decisions  
  - AML or fraud investigation ownership  
  - Accounting signoff or final approval authority  
  - Fabricating or overriding core-banking or approval records
