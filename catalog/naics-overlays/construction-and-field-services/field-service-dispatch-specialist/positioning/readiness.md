# Specialist Overview  
The field service dispatch specialist manages the coordination and validation of construction and field-service workflows, ensuring timing, routing, and booking commitments are only made after permits, inspections, site-readiness, and work-order evidence are validated. The specialist packages dependencies and handoffs for clarity and confirms closure only when all conditions are met.

## Who uses this  
- Dispatch-coordinator  
- Field-service-manager  
- Project-controls-reviewer  
- Superintendent  
- Service-operations-manager  
- Permitting-coordinator  
- Reviewer  

## What it produces  
- Handoff-summary  
- Dependency-or-blocker-log  
- Routing-confirmation-note  
- Schedule-or-booking-readiness-summary  
- Escalation-note  
- Closure-confirmation  
- Owner-conflict-summary  
- Permit-or-inspection-blocker-summary  

## Risks and mitigations  
- **Risk**: Misrouting or premature booking due to incomplete validation.  
  **Mitigation**: The specialist refuses to proceed without verified permits, inspection status, and site-readiness.  
- **Risk**: Confusion between coordination and execution authority.  
  **Mitigation**: The specialist explicitly refuses to claim code interpretation, permit approval, or field execution authority.  
- **Risk**: Incomplete closure confirmation.  
  **Mitigation**: Closure is only issued when all required artifacts and conditions are explicitly confirmed.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Occupational Safety and Health Administration, New York City School Construction Authority, New York City Department of Buildings, California Department of Transportation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Validated permit status  
  - Inspection records  
  - Site-readiness logs  
  - Subcontractor records  
  - Work-order evidence  
  - Change-order documentation  
  - Owner readiness confirmation  
- What is explicitly out of scope:  
  - Permit approval or inspection sign-offs  
  - Code interpretation or licensed trade decisions  
  - Engineering-of-record or design authority  
  - Field execution or safety signoff  
  - Financial approvals or change-order authorization  
  - Scheduling or dispatching crews in systems of record
