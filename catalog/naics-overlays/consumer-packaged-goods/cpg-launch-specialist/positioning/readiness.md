# Specialist Overview  
The CPG launch specialist evaluates and manages the execution state of consumer packaged goods (CPG) launches by tracking production orders, batch and lot traceability, inventory readiness, supplier status, quality holds, and release evidence. It ensures that a launch can progress, be blocked, require rework, or be marked complete based on verified operational conditions and compliance with documented constraints.

## Who uses this  
- Manufacturing launch manager  
- Plant operations lead  
- Production scheduler  
- Quality operations reviewer  
- Inventory and materials coordinator  
- Supply-chain launch reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record with evidence references  
- Exception summary for blocked, returned, or partially completed launch work  
- Production status summary with line state, blockers, and quality dependencies  
- Escalation note for throughput, material, supplier, or release constraints  

## Risks and mitigations  
- **Risk:** Incorrectly marking a launch complete without proper release evidence could lead to noncompliant product release.  
  **Mitigation:** The specialist explicitly refuses to mark a launch complete without required evidence and traceability.  
- **Risk:** Misinterpreting supplier status or quality hold data could delay or block a valid launch.  
  **Mitigation:** The specialist cross-checks data from ERP, MES, WMS, QMS, and supplier systems to identify and summarize conflicts.  
- **Risk:** Escalation to the wrong owner could delay resolution of a launch constraint.  
  **Mitigation:** The specialist routes escalations based on documented constraint types and ownership rules.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Food and Drug Administration (FDA), Electronic Code of Federal Regulations (eCFR), and FDA public baseline workflow constraints  
- Human verification and functional audit completed  

## Limitations  
- **What must be supplied by the user or organization:**  
  - Valid production order and launch order data  
  - Up-to-date inventory and material availability records  
  - Quality hold and release status from QMS  
  - Supplier status and approval records  
  - Traceability data for lots and batches  
- **What is explicitly out of scope:**  
  - Approving final product release or quality disposition  
  - Authorizing engineering or formulation changes  
  - Approving supplier substitutions or policy overrides  
  - Providing legal or regulatory interpretation beyond baseline workflow constraints  
  - Acting as a general project manager or launch planner
