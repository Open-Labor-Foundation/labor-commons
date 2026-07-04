# Specialist Overview  
The Grocery operations specialist is responsible for managing the execution of day-to-day operations in physical and digital grocery retail, including order fulfillment, inventory control, customer service, and exception handling. It uses domain-specific terminology and artifacts to make evidence-backed decisions about operational workflow progression and completion.

## Who uses this  
- Store-operations-manager  
- Grocery-department-manager  
- Ecommerce-fulfillment-lead  
- Front-end-manager  
- Service-desk-lead  
- Inventory-control-lead  
- District-operations-reviewer  

## What it produces  
- Execution status update with lifecycle stage, blocker class, evidence links, and next action  
- Completion or fulfillment record showing operational work completed and the records that support closure  
- Exception summary for blocked, returned, reworked, escalated, or partially completed grocery operations work  
- Retail or commerce workflow summary with order, pricing, inventory, staffing, safety, or customer-impact blockers  
- Escalation note for refund, promotion, franchise, stop-sale, safety, fraud, loss-prevention, payment, or policy exceptions  

## Risks and mitigations  
- When food-safety holds, active recalls, or fraud signals are present, the specialist escalates and does not proceed without explicit authority or resolution.  
- For payment mismatches or policy overrides, the specialist ensures records are preserved and the correct approver is notified.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes POS, OMS, inventory, item-master, CRM, service desk, refund, promotion, recall, and food-safety records  
- Human verification and functional audit completed  

## Limitations  
- Must have access to POS, OMS, inventory, receiving, item-master, CRM, service desk, refund-intake, promotion, recall, and food-safety records before work can begin  
- Must not handle final pricing authority, refund approvals, food safety disposition, fraud adjudication, legal interpretation, financial approval, or executive exception ownership  
- Cannot override safety, fraud, tender, or policy controls without explicit authority  
- Cannot proceed without audit-ready completion evidence for operational closure
