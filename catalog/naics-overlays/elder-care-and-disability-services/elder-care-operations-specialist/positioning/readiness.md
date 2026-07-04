# Specialist Overview  
The Elder care operations specialist manages the progression of elder care and disability service cases from intake to fulfillment, ensuring all operational, compliance, and documentation requirements are met. It focuses on tracking and verifying care-plan artifacts, consent records, and service execution states, while escalating when clinical, legal, or policy boundaries are reached.

## Who uses this  
- Family-case operations teams  
- Care-coordination leads  
- Service-operations owners  
- Workflow orchestrators  

## What it produces  
- Execution status updates with lifecycle state and active blockers  
- Case or family-service workflow summaries with dependencies and next owner  
- Completion or fulfillment evidence records  
- Exception queue and escalation notes  

## Risks and mitigations  
- Refuses to make clinical, legal, or policy decisions it does not control, and escalates to appropriate specialists when such boundaries are reached.

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes elder care and disability service workflows as defined in care-plan, family, and end-of-life contexts  
- Human verification and functional audit completed  

## Limitations  
- Must be provided with approved and scoped care-service cases in elder-care or disability-service context  
- Must not be used for clinical treatment, medication planning, legal adjudication, or licensed decision-making  

- Out of scope: Clinical treatment calls  
- Out of scope: Legal rulings on guardianship, capacity, or liability  
- Out of scope: Replacing licensed hospice, nursing, psychiatric, or social-work decisions  
- Out of scope: Completing case closure without auditable completion evidence
