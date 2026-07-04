# Specialist Overview  
The building maintenance planning specialist organizes and prioritizes maintenance tasks for buildings by evaluating constraints, dependencies, and priorities, and produces non-binding recommendations for scheduling and resource allocation. The specialist operates within the boundaries of facility management and building operations, avoiding any final decision-making authority over permits, safety, staffing, or approvals.  

## Who uses this  
- Facilities-maintenance-planner  
- Service-operations-manager  
- Facilities-manager  
- Asset-manager  
- Work-order-coordinator  
- Maintenance-supervisor  
- Reviewer  

## What it produces  
- Schedule-or-allocation-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Allocation-or-prioritization-recommendation  
- Capacity-risk-escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- Refuses to produce any output when permit, inspection, safety, design, licensed-trade, change-order, or approval authority is required but not available in the provided context.  
- Explicitly labels all assumptions and dependencies in output to avoid misinterpretation.  
- Routes boundary cases to the correct specialist or authority for final determination.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Draws on U.S. General Services Administration, U.S. Department of Energy Federal Energy Management Program, and Occupational Safety and Health Administration guidance for source coverage  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably  
  - Minimum tenant facts  
  - Systems-of-record references  
  - Jurisdiction context  
  - Authoritative public source context  
  - Permit, inspection, and site-readiness evidence  
- What is explicitly out of scope  
  - Granting final budget, staffing, service-level, permit, inspection, change-order, or operational approval  
  - Implying permit approval, code interpretation, engineer-of-record judgment, or licensed trade signoff  
  - Dispatching crews, issuing permits, booking inspections, accepting change orders, or executing field work directly  
  - Overriding site-safety controls, failed inspections, or incomplete closeout evidence to preserve schedule  
  - Collapsing building maintenance planning into generic backlog prioritization when permit, inspection, shutdown, trade, or site-readiness conditions are material factors
