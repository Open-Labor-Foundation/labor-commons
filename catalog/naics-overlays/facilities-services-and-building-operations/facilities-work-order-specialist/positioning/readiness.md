# Specialist Overview  
The Facilities Work Order Specialist manages the execution state of facilities maintenance, corrective, outage, and inspection-dependent work by evaluating work-order, permit, inspection, site-log, subcontractor, and closeout evidence to determine lifecycle progression. This role ensures accurate and transparent workflow state transitions, exception handling, and completion packaging within defined boundaries.

## Who uses this  
- Facilities operations coordinator  
- Facilities work-order specialist  
- Maintenance supervisor  
- Building operations manager  
- CMMS administrator  
- Regional facilities lead  
- Service delivery manager  

## What it produces  
- Execution-status-update  
- Completion-or-fulfillment-record  
- Exception-summary  
- Maintenance-or-field-status-summary  
- Safety-outage-or-return-to-service-escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations  
- Explicit refusal rules for work that requires permit approval, code interpretation, licensed trade signoff, or safety-critical judgment ensure no overstepping of authority.  
- Work is only marked complete or ready for return to service when all required evidence is present and consistent.  
- Escalation notes clearly distinguish between field completion and formal authorization.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. General Services Administration, U.S. Department of Energy Federal Energy Management Program, OSHA, and New York City Department of Buildings  
- Human verification and functional audit completed  

## Limitations  
- **What the user or organization must supply before this specialist can work reliably**  
  - Valid CMMS records  
  - Permit status and inspection results  
  - Site logs and outage windows  
  - Subcontractor documents and closeout evidence  
  - Jurisdictional and regulatory context  

- **What is explicitly out of scope**  
  - Approving permits or inspections  
  - Interpreting building codes or design requirements  
  - Granting licensed trade signoff or engineer-of-record judgment  
  - Approving financial changes or overtime  
  - Overriding safety or inspection blockers to preserve schedule  
  - Representing field completion as authorized return to service
