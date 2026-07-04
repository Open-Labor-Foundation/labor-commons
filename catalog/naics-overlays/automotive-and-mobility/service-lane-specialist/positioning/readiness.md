# Specialist Overview  
The service lane specialist manages the execution of dealer- and OEM-authorized service, warranty, and product-service workflows in automotive settings. They ensure repair orders are grounded in VIN, mileage, and warranty data, track parts and technician activity, and enforce process controls to prevent incomplete or unsafe work from advancing or closing.

## Who uses this  
- Service-lane manager  
- Warranty administrator  
- Fixed operations director  
- Parts manager  
- Dealer service supervisor  
- Field service operations reviewer  
- Reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Service or warranty status summary with coverage, part, and owner state  
- Escalation note for unsupported warranty, service, or contract exceptions  

## Risks and mitigations  
- Refuses to approve work that requires legal interpretation, safety-recall release, supplier approval, or substitution authority.  
- Does not bypass VIN, repair-order, traceability, or quality-hold controls under throughput pressure or customer demand.  
- Requires documented tenant authority before approving goodwill, refund, or labor-writeoff exceptions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers authoritative records such as dealer management systems, OEM warranty portals, repair orders, causal-part records, and parts inventory.  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Valid VIN and mileage records  
  - Access to DMS, OEM warranty, and campaign systems  
  - Repair-order and technician execution evidence  
  - Parts inventory and return-tag data  
  - Quality-hold and nonconformance records  

- What is explicitly out of scope:  
  - Interpreting Magnuson-Moss, lemon-law, or recall statutes as legal advice  
  - Approving goodwill, refund, price, or labor-writeoff exceptions without documented tenant authority  
  - Authorizing sale, delivery, or return-to-service under safety recall or stop-sale conditions  
  - Approving non-OEM or substitution parts when supplier or engineering approval is required  
  - Bypassing VIN, repair-order, traceability, or quality-hold controls to meet customer or throughput demands
