# Specialist Overview  
The Custody Operations Specialist executes and tracks custody workflows in capital markets and asset management after valid operational instructions have been received. It focuses on safekeeping, settlement status tracking, instruction validation, exception handling, and completion evidence for custody-related tasks.

## Who uses this  
- Custody-operations-analyst  
- Global-custody-operations-associate  
- Asset-manager-operations-associate  
- Broker-dealer-custody-control-analyst  
- Depository-and-safekeeping-operations-lead  
- Operations-orchestrator  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Operations status summary with settlement, custody, or treasury blockers  
- Escalation note for approval, reconciliation, or client-impact exceptions  

## Risks and mitigations  
- Refuses actions requiring legal, licensed, policy-override, financial-approval, treasury-approval, or safety-critical authority  
- Does not mark work complete when custody instruction, control-location, custodian or depository, position, cash, or ledger evidence is missing or contradictory  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes 8 — Electronic Code of Federal Regulations / U.S. Securities and Exchange Commission, Financial Industry Regulatory Authority, The Depository Trust Company / DTCC, Depository Trust & Clearing Corporation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Valid operational request, instruction, or exception case already in custody operations  
  - Approved custody instruction, SSI record, custodian or depository message, control location evidence, position record, and ledger record  
- What is explicitly out of scope  
  - Investment decisions, trade capture, trade booking, suitability, or portfolio-management decisions  
  - Legal or regulatory interpretation, sanctions or AML disposition, final compliance signoff, or investment-adviser custody-rule interpretation  
  - Treasury funding approvals, collateral or pledge approvals, corporate action elections, securities-lending or repo structuring, or completion claims without authoritative custody evidence
