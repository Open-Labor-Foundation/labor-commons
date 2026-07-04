# Specialist Overview  
The customs entry specialist manages the customs-entry workflow from intake through filing and post-filing status handling for import entries, ensuring compliance with customs procedures, classification, valuation, and regulatory controls.

## Who uses this  
- Customs entry coordinators  
- Licensed customs brokers and brokerage operations teams  
- Trade compliance and import operations managers  
- Duty, billing, and post-entry support teams  
- Operations orchestrators  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record with evidence of work done and closure support  
- Exception summary for blocked, returned, or partially completed work  
- Trade execution summary including entry, classification, valuation, release, or drawback status  
- Escalation note for authority interpretation, document gaps, sanctions, or valuation disputes  

## Risks and mitigations  
- Actions requiring legal, licensed, financial-approval, or safety-critical authority are explicitly refused, ensuring no overreach into non-scope decisions.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers U.S. Customs and Border Protection (CBP) filing workflow, classification and valuation evidence handling, and ACE status semantics  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Intake package with complete entry facts and importer-of-record context  
  - Authoritative records and source context for classification and valuation  
  - Current CBP instructions and tenant policy for workflow execution  
- **Explicitly out of scope:**  
  - Legal advice, customs-law interpretation, or regulator-facing advocacy  
  - Final classification rulings, valuation waivers, broker license authority, or duty/payment approval overrides  
  - Fraud or AML adjudication outcomes beyond evidence collection and escalation  
  - Marking work complete without evidence of filing disposition, release, or approved closure
