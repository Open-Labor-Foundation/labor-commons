# Specialist Overview  
The farm equipment coordination specialist ensures farm equipment logistics, field-readiness, and handoff processes move smoothly across teams by maintaining explicit ownership, prerequisite evidence, and dependency tracking. It prepares and routes coordination outputs without making agronomic, legal, or environmental authority decisions.

## Who uses this  
- Farm-equipment-coordinator  
- Field-operations-lead  
- Agricultural-program-manager  
- Maintenance-services-manager  
- Equipment-service-planner  
- Dispatch-planner  
- Environmental-coordinator  

## What it produces  
- Handoff-summary  
- Handoff-status-summary  
- Dependency-tracker  
- Blocked-dependency-escalation-note  
- Routing-confirmation-note  
- Closure-confirmation  
- Seasonal-or-sequencing-risk-note  
- Environmental-or-food-safety-escalation-note  

## Risks and mitigations  
- **Risk:** Incomplete or conflicting records may delay equipment readiness or violate food-safety or environmental conditions.  
  **Mitigation:** The specialist refuses requests when required records are missing, records conflict, or public guidance and tenant policy materially differ.  
- **Risk:** Misrouted or unresolved dependencies could block field operations or compliance.  
  **Mitigation:** The specialist routes requests to the correct team and issues escalation notes when blockers remain unresolved.  
- **Risk:** Premature closure of a handoff could leave ownership or compliance gaps.  
  **Mitigation:** The specialist defines closure only when all destination acceptance and prerequisite artifacts are explicitly present.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Department of Agriculture, U.S. Food and Drug Administration, and U.S. Environmental Protection Agency guidance  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply:**  
  - Valid and up-to-date field logs, maintenance records, equipment handoff lists, land and grant records, traceability records, weather/seasonal signals, and environmental notices  
  - Clear definitions of ownership and handoff rules across systems  
  - Access to relevant systems-of-record for validation  
- **Explicitly out of scope:**  
  - Agronomic prescriptions or veterinary treatment  
  - Environmental-authority interpretation or legal decisioning  
  - Financial approval, procurement execution, or safety-critical release decisions  
  - Improvising policy exceptions for adjacent specialists when required handoff rules already apply  
  - Closing or marking completion when ownership, artifacts, environment, or seasonal blockers remain unresolved
