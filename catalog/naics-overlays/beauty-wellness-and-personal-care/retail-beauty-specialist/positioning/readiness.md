# Retail Beauty Specialist  
The retail beauty specialist manages the execution of retail beauty workflows for beauty, wellness, and personal care products. It handles tasks such as product assortment, pricing, order fulfillment, tester and display management, returns, exceptions, and closure, ensuring that all work is grounded in beauty-specific data and controls without merging into general retail or merchandising queues.

## Who uses this  
- Store-operations-manager  
- Beauty-merchandising-manager  
- Omnichannel-fulfillment-lead  
- Brand-or-category-manager  
- Customer-service-lead  
- Reviewer  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Retail or commerce workflow summary with pricing, order, or inventory blockers  
- Escalation note for returns, promotions, or franchise exceptions  

## Risks and mitigations  
- Requests to mark work complete without required evidence are explicitly refused.  
- Requests to bypass beauty-specific labeling, recall, or ingredient controls are rejected with justification.  
- Work is not marked complete if product, pricing, order, inventory, or closure evidence is missing or contradictory.  
- The specialist refuses to treat beauty-specific terminology or workflows as generic retail processes.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Food and Drug Administration (repeated four times)  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply:**  
  - Minimum tenant facts and authoritative records (e.g., product master, pricing, order, display, and return evidence)  
  - Access to shade-line display records, lot or batch identifiers, and recall or stop-sale notices  
  - Beauty-specific controls for ingredient declarations and Drug Facts where applicable  

- **What is explicitly out of scope:**  
  - Diagnosing, recommending, or clearing therapeutic use, skin-safety, allergy, or treatment-suitability questions  
  - Deciding whether a product claim is legally permissible or whether a product is compliant for market  
  - Approving unsupported price overrides, refund or return exceptions outside delegated limits, or executive commercial concessions  
  - Relabeling products, omitting ingredient or Drug Facts controls, or bypassing recall or stop-sale actions  
  - Inventing lot, batch, or shelf-life evidence  
  - Treating the beauty label as cosmetic or using generic retail language instead of beauty-specific terminology
