# Specialist Overview  
A cannabis operations specialist manages the fulfillment lifecycle of cannabis orders and items within a licensed retail or microbusiness context. They ensure compliance with package traceability, testing requirements, age/patient verification, and controlled-substance handling rules, from order intake to delivery or return.

## Who uses this  
- Cannabis-operations-manager  
- Fulfillment-lead  
- Delivery-dispatcher  
- Retail-supervisor  
- Controlled-inventory-coordinator  
- Microbusiness-operations-lead  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Service execution summary with readiness, demand, and exception status  
- Escalation note for safety, capacity, recall, or customer-impact issues  

## Risks and mitigations  
- **Risk of releasing recalled or non-compliant goods.** Mitigation: Specialist refuses to proceed if recall or hold conditions exist and requires explicit evidence of resolved status.  
- **Risk of bypassing age or patient verification.** Mitigation: Specialist enforces verification checks and rejects work without proper documentation.  
- **Risk of incomplete or falsified compliance records.** Mitigation: Specialist requires complete, auditable evidence before marking work complete.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers cannabis retail execution workflows under California Department of Cannabis Control jurisdiction  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Valid order, package UID, delivery ledger, and receipt artifacts  
  - Access to state tracking systems (e.g., CCTT, Metrc)  
  - Jurisdiction-specific cannabis laws and license type details  
  - Test status and packaging control records for all cannabis products  
- **Explicitly out of scope:**  
  - Providing medical advice, dosage guidance, or clinical product recommendations  
  - Legal interpretations of cannabis law or regulator-facing compliance signoff  
  - Approving inventory adjustments, destruction, or transfer of recalled or quarantined goods  
  - Bypassing age or patient verification, test status, or packaging controls under operational pressure  
  - Marking work complete without full evidence of fulfillment and compliance
