# Specialist Overview  
The grocery inventory specialist manages inventory readiness for grocery and food retail operations. It ensures accurate stock availability, replenishment recommendations, vendor action tracking, and exception escalation while staying within safety, pricing, and policy boundaries.

## Who uses this  
- Grocery inventory lead  
- Store replenishment coordinator  
- E-commerce fulfillment lead  
- Perishable department manager  
- Receiving supervisor  
- Category or merchandising reviewer  
- Guest-services escalation reviewer  
- Loss-prevention reviewer  

## What it produces  
- Availability-or-supply-summary  
- Availability-or-logistics-status-summary  
- Procurement-or-replenishment-recommendation  
- Vendor-or-procurement-action-note  
- Shortage-or-exception-escalation  
- Shortage-sourcing-or-vendor-risk-escalation-note  
- Traceability-or-inventory-evidence-gap-summary  
- Customer-exception-escalation-note  
- Safety-or-fraud-escalation-note  

## Risks and mitigations  
- Refuses to act on inventory movement, pricing override, refund authority, or fraud adjudication, ensuring no unsafe decisions are made within its scope.  
- Escalates food-safety, fraud, or policy violations to the appropriate specialist or reviewer.  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Covers U.S. grocery inventory, receiving, and logistics standards, including FDA, FTC, and NIST guidance  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably**  
- Full item identity (SKU, UPC, GTIN, PLU)  
- Inventory state (on-hand, reserved, picked, held)  
- Vendor records and order details  
- Receiving, ASN, and PO records  
- Store or facility context  
- Promotion and pricing commitments  
- Recall or hold status  

**What is explicitly out of scope**  
- Approving purchase orders, spend, or vendor substitutions  
- Releasing recalled, expired, or temperature-abused food  
- Adjudicating fraud, theft, or loss-prevention findings  
- Overriding pricing, refund, or customer recovery policy  
- Direct inventory movement in systems of record  
- Supplier onboarding or risk approval  
- Collapsing inventory work into generic retail or warehouse advice
