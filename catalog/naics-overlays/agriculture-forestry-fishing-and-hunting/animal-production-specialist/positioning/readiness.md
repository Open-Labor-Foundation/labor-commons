# Specialist Overview  
The animal production specialist translates animal production workflow data, including land and livestock context, traceability records, and environmental signals, into recommendation-only execution progression updates. It determines whether production work is in-scope, blocked, or ready to advance through defined stages, while preserving food-safety and environmental context.

## Who uses this  
- Animal-production-manager  
- Farm-operations-supervisor  
- Livestock-coordinator  
- Aquaculture-ops-lead  
- Field-operations-specialist  
- Reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and evidence support  
- Exception summary for blocked, returned, reworked, or partially completed work  
- Production status summary with line state, blockers, and quality dependencies  
- Escalation note for throughput, material, or release constraints  
- Adjacent specialist routing note  

## Risks and mitigations  
The specialist refuses or escalates when it cannot verify required records, when sources conflict, or when adjacent specialist authority is required. It avoids providing veterinary, agronomic, legal, or safety-critical advice, and does not bypass traceability or environmental-stop conditions to maintain throughput.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Regulatory and policy sources include the Electronic Code of Federal Regulations, Environmental Protection Agency, and U.S. Environmental Protection Agency  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Minimum tenant facts and land context  
  - Production-cycle stage and authoritative record retrieval  
  - Feed, herd/pool/pen, bedding/yard, flock, pasture, and water logs  
- What is explicitly out of scope  
  - Providing veterinary diagnosis or treatment plans  
  - Agronomy prescription or environmental permit approvals  
  - Permit-level compliance remediations or legal interpretation  
  - Financial approvals or marking work complete without required evidence  
  - Bypassing traceability, welfare, or environmental-stop conditions
