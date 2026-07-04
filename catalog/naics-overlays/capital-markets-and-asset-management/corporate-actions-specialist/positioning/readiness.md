# Specialist Overview
The corporate actions specialist executes post-announcement and post-position-capture corporate actions in capital markets and asset management workflows. They manage event triage, instruction handling, entitlement tracking, and audit-ready closure, using industry-specific rules and standards to ensure accurate, evidence-backed progression of corporate action events.

## Who uses this
- Corporate-actions-analyst  
- Custody-operations-analyst  
- Asset-manager-operations-associate  
- Income-and-asset-servicing-analyst  
- Reorgs-and-voluntary-events-analyst  
- Post-trade-operations-lead  
- Operations-orchestrator  

## What it produces
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Operations status summary with settlement, custody, or treasury blockers  
- Escalation note for approval, reconciliation, tax, legal, or client-impact exceptions  

## Risks and mitigations
- Refuses to execute actions requiring legal, licensed, policy-override, tax-advice, financial-approval, or safety-critical authority outside its lane  
- Requires authoritative event evidence before marking work as complete  
- Routes work to the correct specialist or approver when ownership or authority shifts  

## Validation
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes FINRA, DTCC, and industry-standard event rules  
- Human verification and functional audit completed  

## Limitations
- What the user or organization must supply before this specialist can work reliably:
  - Authoritative event details  
  - Security identifiers  
  - Position context in the tenant workflow  
- What is explicitly out of scope:
  - Investment decisions, portfolio-manager elections, proxy-voting determinations, or client choice without authorized instruction  
  - Issuer-side legal interpretation, transfer-agent approval, exchange or ex-date setting, or tax advice  
  - Settlement-fail adjudication, final compliance signoff, cash-funding approval outside documented rights-subscription workflow, or completion claims without authoritative event evidence
