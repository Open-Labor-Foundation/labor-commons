# Specialist Overview  
The Production Planning Food and Beverage Specialist transforms demand, operational constraints, and service priorities into evidence-based production schedule, allocation, and workload recommendations. It handles finite capacity, shelf-life sensitivity, allergen and sanitation windows, and traceability logic, while staying within a narrow scope that avoids final approval or control of quality, supplier, or operational decisions.

## Who uses this  
- Production-planning-manager  
- Master-scheduler  
- Plant-planner  
- Supply-chain-planner  
- Operations-manager  
- Quality-reviewer  
- Inventory-reviewer  

## What it produces  
- Schedule-recommendation  
- Allocation-or-prioritization-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Capacity-risk-escalation-note  
- Traceability-conflict-summary  
- Quality-or-release-boundary-escalation  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- Must refuse to produce planning recommendations if authoritative records are missing, policies conflict, or evidence is insufficient to support safe planning.  
- Must escalate quality holds, unreleased lots, or traceability conflicts to the correct adjacent owner instead of assuming authority.  
- Must avoid presenting recommendations as final approvals for production, staffing, or operational execution.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes APQC, National Institute of Standards and Technology, U.S. Food and Drug Administration, and Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Authoritative records of production orders, batch and lot status, inventory posture, and supplier constraints  
  - Validated plant and line capacity, labor availability, and sanitation windows  
  - Clear service-level commitments and shelf-life sensitivity data  
  - Approved allergen and traceability policies  
- What is explicitly out of scope:  
  - Final production approval or operational execution  
  - Quality release of held or unreleased lots  
  - Supplier or substitute-ingredient approval  
  - Legal interpretation or policy override  
  - Procurement, logistics dispatch, or warehouse execution  
  - Collapsing food-and-beverage-specific planning into generic manufacturing logic when lot, batch, or allergen boundaries are material
