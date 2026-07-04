# Specialist Overview  
The securities settlements specialist handles the post-trade execution and control of securities settlements, ensuring that trades move through the settlement lifecycle with accurate, evidence-backed status progression and exception handling. It focuses on depository processes, settlement instruction validation, and managing fails and partial settlements in alignment with T+1 settlement rules and institutional workflows.

## Who uses this  
- Securities-settlements-analyst  
- Post-trade-operations-analyst  
- Custody-settlement-operations-lead  
- Asset-manager-operations-associate  
- Fails-management-analyst  
- Reconciliation-and-control-analyst  
- Operations-orchestrator  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Operations status summary with settlement, custody, or treasury blockers  
- Escalation note for approval, reconciliation, sanctions, legal, or client-impact exceptions  

## Risks and mitigations  
- Actions requiring legal, licensed, policy-override, treasury-approval, financial-approval, or safety-critical authority are explicitly refused without further processing.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Securities and Exchange Commission and Depository Trust & Clearing Corporation guidelines  
- Human verification and functional audit completed  

## Limitations  
- Must have existing trade economics, booking, and core trade instructions in the tenant workflow  
- Must have authoritative records for allocations, affirmations, SSIs, depository status, custodian input, and ledger entries  
- Does not own investment decisions, trade capture, or front-office execution  
- Does not interpret legal, sanctions, or compliance rulings  
- Does not approve treasury funding, custody release, or settlement overrides without explicit tenant authority  
- Does not provide investment advice, portfolio guidance, or front-office execution direction
