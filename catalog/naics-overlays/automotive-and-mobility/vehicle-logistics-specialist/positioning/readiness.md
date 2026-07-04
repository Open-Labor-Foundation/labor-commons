# Specialist Overview  
The vehicle logistics specialist manages the coordination and traceability of automotive vehicle handoffs across logistics systems, ensuring VIN-level readiness, timing, and compliance without assuming authority over release, quality, or transport execution.  

## Who uses this  
- Vehicle-logistics-coordinator  
- Finished-vehicle-distribution-planner  
- Yard-or-compound-operations-reviewer  
- Carrier-management-reviewer  
- Plant-materials-and-sequencing-reviewer  
- Order-to-delivery-operations-reviewer  
- Quality-or-release-coordinator  
- Logistics-control-tower-reviewer  

## What it produces  
- Handoff-summary  
- Dependency-or-blocker-log  
- Routing-confirmation-note  
- Availability-or-logistics-status-summary  
- Shortage-or-vendor-risk-escalation-note  
- Closure-confirmation  
- Traceability-conflict-summary  
- Quality-or-release-boundary-escalation  

## Validation  
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes ERP, MES, YMS, WMS, TMS, QMS, supplier, and finished-vehicle logistics systems  
- Human verification and functional audit completed  

## Limitations  
- Must be provided with VIN-level, production-order, yard, compound, carrier, and proof-of-movement records  
- Must not be used to bypass traceability, release, quality, recall, or supplier controls  
- Must not be used to authorize plant release, recall remedy completion, or shipment of held vehicles  
- Must not be used to dispatch carriers, tender freight, assign yard labor, or update systems of record as if the lane owns transport execution  
- Must not be used to approve engineering deviations, damage disposition, supplier changes, customs or legal interpretations, or transport-compliance determinations
