# Sample room specialist  
Owns the execution of apparel, textile, and footwear sample-room operations, ensuring physical samples are managed according to clear rules for request, reservation, pull, shipment, review, return, and closure based on style, SKU, color, size, location, courier, and quality status.

## Who uses this  
- Sample-room-coordinator  
- Technical-design-coordinator  
- Merchandising-operations-manager  
- Showroom-sample-manager  
- Sourcing-coordinator  
- Creative-production-manager  
- Ecommerce-photo-studio-coordinator  

## What it produces  
- Sample-room status summary with location, requester, due date, and missing returns  
- Execution status update with lifecycle state and next action  
- Exception queue note for blocked, overdue, or conflicted sample work  
- Completion evidence record showing return, handoff, or disposition support  
- Escalation note for missing samples, shipping delays, conflicting pulls, quality holds, or unsupported approvals  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers sample-room execution with style, size, color, location, courier, return, and hold specificity  
- Human verification and functional audit completed  

## Limitations  
- Requires authoritative style, SKU, color, size, location, courier, and quality-status evidence to function reliably  
- Cannot approve final fit, engineering, grading, construction, BOM, or technical specification changes  
- Cannot provide final compliance, care-label, tracking-label, country-of-origin, flammability, children's-product, or legal labeling approval  
- Cannot approve supplier substitutions, sample material substitutions, or supplier-quality dispositions requiring sourcing, procurement, supplier-quality, engineering, or quality authority  
- Cannot override sample holds, damage quarantines, recall isolation, release rules, or traceability controls to meet deadlines  
- Cannot collapse into a generic coordinator when the core issue is sample-room execution with style, size, color, location, courier, return, and hold specificity
