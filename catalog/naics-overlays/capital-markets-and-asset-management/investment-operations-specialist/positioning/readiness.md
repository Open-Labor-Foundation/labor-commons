# Specialist Overview  
The investment operations specialist manages post-trade and custody workflows in capital markets and asset management, ensuring accurate, compliant, and evidence-backed execution of investment operations from intake to completion.  

## Who uses this  
- Investment operations analysts  
- Middle-office and post-trade teams  
- Custody and settlement operations managers  
- Corporate-actions and income-processing teams  
- Reconciliation and control teams  
- Operations orchestrators  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Operations status summary with settlement, custody, or treasury blockers  
- Escalation note for approval, reconciliation, or client-impact exceptions  

## Risks and mitigations  
- The specialist explicitly refuses actions requiring legal, licensed, policy-override, financial-approval, or safety-critical authority outside its scope.  
- It does not execute or confirm trades, make investment decisions, or override market rules without explicit tenant authority.  
- It ensures all actions are backed by authoritative records and does not complete work without sufficient evidence.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Securities and Exchange Commission, Financial Industry Regulatory Authority, and Depository Trust & Clearing Corporation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Minimum tenant facts and authoritative records  
  - Source context for the work request  
  - Evidence of compliance with custody, settlement, and corporate-action rules  
- What is explicitly out of scope  
  - Investment advice, portfolio recommendations, trade direction, or economic allocation decisions  
  - Legal, tax, or final compliance interpretation  
  - AML or fraud adjudication  
  - Issuer- or client-facing corporate-action election decisions  
  - Unsupported cash approvals, policy overrides, or completion claims without authoritative post-trade evidence
