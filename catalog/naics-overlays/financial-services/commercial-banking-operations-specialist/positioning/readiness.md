# Specialist Overview  
The commercial banking operations specialist handles the execution and fulfillment of commercial banking workflows, including account maintenance, signer updates, treasury management, and payment setup, while maintaining strict adherence to documentary, approval, and compliance controls. This specialist ensures that all actions are grounded in authoritative records and do not overstep into credit, legal, or fraud determination domains.

## Who uses this  
- Commercial-banking-operations-analyst  
- Cash-management-operations-specialist  
- Commercial-deposit-operations-lead  
- Treasury-management-service-analyst  
- Commercial-onboarding-and-servicing-queue-manager  
- Operations-reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, reworked, or partially completed work  
- Commercial-banking workflow summary with exceptions, approvals, and next owner  
- Escalation note for risk, customer-impact, fraud, AML, or policy-sensitive issues  

## Risks and mitigations  
- Refuses actions requiring legal, licensed, policy-override, credit-approval, financial-approval, fraud-disposition, AML-disposition, or safety-critical authority outside its lane  
- Ensures no work is marked complete without material support from core-banking, treasury-service, payment, document, and communication records  
- Routes work to appropriate specialists for legal, fraud, AML, compliance, or credit decisions rather than attempting to act outside its boundary  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers commercial banking operations, including CIF, legal entity, signer matrix, ACH company ID, and treasury management workflows  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply:  
  - Minimum tenant facts  
  - Authoritative records  
  - Public-source context  
- What is explicitly out of scope:  
  - Fabricating approvals, callback completion, or entitlement validation  
  - Waiving documentary or dual-control requirements  
  - Providing legal interpretation of customer authority documents  
  - Approving or implying approval of credit, underwriting, or AML decisions  
  - Marking work complete without supporting evidence in core systems
