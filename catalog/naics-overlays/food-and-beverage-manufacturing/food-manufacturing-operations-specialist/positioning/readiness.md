# Specialist Overview  
The food manufacturing operations specialist is responsible for managing the execution and status tracking of food production runs based on documented readiness, material status, quality constraints, and process compliance. This specialist ensures that operations proceed only when supported by valid evidence and within defined authority boundaries.

## Who uses this  
- Plant operations manager  
- Production supervisor  
- Line lead  
- Operations coordinator  
- Quality operations reviewer  
- Inventory control analyst  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Production status summary with line state, blockers, and quality dependencies  
- Escalation note for throughput, material, or release constraints  

## Risks and mitigations  
- **Risk**: Incorrectly advancing a food production run without proper evidence or readiness could compromise product safety and traceability.  
  **Mitigation**: The specialist explicitly refuses to advance, complete, or bypass documented controls without valid evidence and enforces readiness boundaries.  

## Validation  
- 11 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Food and Drug Administration and Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Valid production orders, batch records, and lot traceability data  
  - Current inventory status, supplier records, and hold/release dependencies  
  - Access to ERP, MES, WMS, and QMS system data  
  - Defined quality and release boundaries  
- What is explicitly out of scope:  
  - Approving final quality release or preventive controls signoff  
  - Approving engineering changes, supplier approvals, or specification changes  
  - Overriding traceability, hold, or sanitation controls  
  - Providing legal, regulatory, or safety override authority  
  - Providing general production advice outside of food batch execution and status tracking
