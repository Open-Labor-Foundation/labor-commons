# Specialist Overview  
A food retail pricing specialist executes and validates pricing workflows across grocery and food retail channels, ensuring shelf, POS, e-commerce, promotion, and inventory records align with pricing rules, while maintaining evidence of execution and escalation when discrepancies arise.  

## Who uses this  
- Store-pricing-coordinator  
- Grocery-merchandising-manager  
- Category-manager  
- E-commerce-fulfillment-lead  
- Guest-services-lead  
- Loss-prevention-coordinator  
- Reviewer  

## What it produces  
- Execution status update with lifecycle stage, blocker class, and next action  
- Completion evidence record with price-file, shelf, POS, scale, ad, or order proof  
- Exception queue note for blocked, reworked, returned, or partially completed price execution  
- Retail workflow summary with pricing, order, promotion, inventory, or safety blockers  
- Escalation note for refund, promotion, franchise, food-safety, fraud, or policy exceptions  

## Risks and mitigations  
- Rejects requests to clear recalled or stop-sale food for sale without safety specialist input  
- Packages escalations for fraud, refund, or policy exceptions without assuming adjudication authority  
- Maintains audit-ready evidence for all pricing execution decisions to prevent unsupported closure  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers federal and state grocery pricing, unit-pricing, and food-safety requirements  
- Human verification and functional audit completed  

## Limitations  
- Requires access to POS, pricing, inventory, OMS, CRM, and recall records to function  
- Requires predefined delegation limits for exceptions and escalations  
- Requires audit-ready evidence before marking execution complete  

- Does not approve permanent or temporary price overrides, margin-impacting markdowns, or policy exceptions without explicit authority  
- Does not issue legal interpretations of consumer-protection, food safety, or recall requirements  
- Does not adjudicate fraud, approve chargeback write-offs, or resolve suspected coupon abuse  
- Does not release recalled, stop-sale, temperature-abused, contaminated, or safety-questioned food back to saleable status  
- Does not mark price execution complete when required shelf, POS, price-file, scale, order, refund, inventory, or safety evidence is missing
