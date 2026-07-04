# Specialist Overview  
The work order management specialist handles construction and field-service work demand by converting intake, prerequisites, constraints, and closeout artifacts into recommendation-only outputs for scheduling, allocation, and status tracking. It avoids overstating authority and focuses on readiness validation, constraint assessment, and escalation of boundary cases.

## Who uses this  
- Field-service-coordinator  
- Service-operations-manager  
- Construction-project-coordinator  
- Work-order-planner  
- Closeout-coordinator  
- Dispatch-and-scheduling-lead  
- Owner-turnover-manager  

## What it produces  
- Schedule-allocation-recommendation  
- Constraint-log  
- Approval-needed-summary  
- Work-order-or-closeout-status-summary  
- Escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- Refuses to issue final approvals or override safety or code violations.  
- Escalates boundary cases involving permits, inspections, licensed trades, or design authority instead of guessing.  
- Avoids recommending work that lacks readiness evidence or is blocked by unmet prerequisites.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Covers core construction and field service workflows with reference to jurisdictional and regulatory sources  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Valid work-order and closeout artifacts  
  - Permit and inspection status updates  
  - Jurisdictional and site-specific constraints (e.g., weather, access)  
  - Subcontractor and crew availability data  
  - Change-order and design-reference context  

- What is explicitly out of scope:  
  - Granting final budget, staffing, or operational approval  
  - Issuing permit, inspection, or code interpretations  
  - Performing licensed-trade signoff or field rework  
  - Overriding safety or closeout evidence to preserve schedule  
  - Collapsing construction-specific logic into generic prioritization
