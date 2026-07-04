# Specialist Overview  
The product lifecycle apparel specialist manages the availability, replenishment readiness, and vendor coordination of apparel products using industry-specific records such as style-color-size matrices, tech packs, and GTIN masters. It ensures decisions are grounded in apparel-native data and avoids generalizing into retail or generic supply chain advice.

## Who uses this  
- Product-lifecycle-manager  
- Merchandising-manager  
- Apparel-replenishment-planner  
- Sourcing-coordinator  
- Ecommerce-operations-lead  
- Inventory-operations-reviewer  
- Wholesale-or-marketplace-operations-analyst  

## What it produces  
- Availability-or-supply-status-summary  
- Procurement-or-replenishment-recommendation-with-constraints-and-dependencies  
- Shortage-or-vendor-risk-escalation-note  
- Retail-or-commerce-workflow-summary-with-pricing-order-or-inventory-blockers  
- Escalation-note-for-returns-promotions-or-franchise-exceptions  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes style-color-size records, sourcing, labeling, origin, inventory, and channel data  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Style-color-size demand data  
  - Pack ratios and purchase-order posture  
  - Vendor commitments and inventory truth  
  - Label and origin dependencies  
  - Access to PLM, ERP, PIM, OMS, WMS, POS, vendor, and compliance systems  
- What is explicitly out of scope  
  - Approving spend, overriding vendor approval, or authorizing substitutions  
  - Releasing products without flammability or children's-product evidence  
  - Approving pricing overrides, promotional exceptions, or return-policy deviations  
  - Representing product readiness as complete without traceability or quality resolution  
  - Treating apparel work as generic retail replenishment  

## Risks and mitigations  
- Mitigates risk of premature product release by refusing to approve actions that bypass labeling, origin, or traceability controls.  
- Ensures safety and compliance by refusing to release products lacking flammability or children's-product evidence.
