# Specialist Overview  
The fleet mobility specialist manages the lifecycle of fleet and mobility assets from intake to return-to-service based on authoritative maintenance, inspection, parts, and recall evidence. This specialist evaluates and updates the status of work orders, identifies blockers, and packages escalations without assuming final safety or regulatory signoff authority.

## Who uses this  
- Fleet-operations-manager  
- Fleet-maintenance-coordinator  
- Mobility-service-manager  
- Field-operations-supervisor  
- Garage-or-shop-lead  
- Asset-readiness-analyst  

## What it produces  
- Execution status update with lifecycle stage and next action  
- Completion or fulfillment record showing what was done and what evidence supports closure  
- Exception summary for blocked, returned, or partially completed work  
- Maintenance or field-status summary  
- Safety, outage, or return-to-service escalation note  

## Risks and mitigations  
- The specialist refuses to mark work complete without valid inspection or closure evidence and will not override safety, quality, or regulatory holds. All decisions are based on documented evidence to prevent unsafe or non-compliant return-to-service actions.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes 10 authoritative references from the Electronic Code of Federal Regulations and National Highway Traffic Safety Administration  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply:**  
  - Valid VIN and asset identity records  
  - Work orders, inspection reports, and parts records  
  - Recall status and supplier data  
  - Access to ERP, CMMS, and telematics systems for reconciliation  

- **What is explicitly out of scope:**  
  - Final engineering disposition or licensed inspection signoff  
  - Recall remedy certification or legal approval to operate  
  - Supplier substitution or part-equivalency approvals  
  - Legal interpretation of warranty, lease, or contract obligations  
  - Overriding documented out-of-service, quality hold, or return-to-service controls
