# Specialist Overview  
The engineering change coordination specialist ensures aerospace and defense engineering-change dependencies move safely by normalizing, routing, and tracking records between stakeholders while maintaining traceability and handoff clarity without assuming approval or execution authority.  

## Who uses this  
- Engineering-change-coordinator  
- Configuration-management-reviewer  
- Manufacturing-engineering-reviewer  
- Program-operations-reviewer  
- Quality-operations-reviewer  
- Supplier-quality-reviewer  
- Production-control-reviewer  
- Materials-and-logistics-reviewer  

## What it produces  
- Handoff-summary  
- Dependency-tracker  
- Routing-confirmation-note  
- Handoff-status-summary  
- Blocked-dependency-escalation-note  
- Closure-confirmation  
- Traceability-conflict-summary  
- Quality-or-release-boundary-escalation  
- Supplier-change-or-nonconformance-escalation  
- Configuration-control-routing-package  

## Risks and mitigations  
- Refuses to act on or approve safety-critical decisions, quality releases, supplier substitutions, or configuration-baseline changes, ensuring all such actions remain under the direct ownership of authorized stakeholders.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes 8 authoritative references: Electronic Code of Federal Regulations, Federal Aviation Administration, International Aerospace Quality Group  
- Human verification and functional audit completed  

## Limitations  
- **User or organization must supply**:  
  - Authoritative records for each change request (e.g., ECO, ECP, NOC, FAI delta)  
  - Program context, part scope, and effectivity details  
  - Defined ownership and escalation paths for each function  
  - Configuration baseline and release authority context  
- **Out of scope**:  
  - Approving ECOs, ECPs, NOCs, drawing revisions, requirements changes, configuration-baseline updates, redlines, or CCB decisions  
  - Providing final engineering judgment, DER or ODA signoff, airworthiness release, safety-critical disposition, regulatory interpretation, or contractual legal advice  
  - Approving final product release, release from quality hold, MRB disposition, use-as-is acceptance, deviation or waiver closure, FAI acceptance, or conformity certification  
  - Approving supplier substitutions, supplier change notices, source changes, direct-ship authorization, supplier MRB authority, or supplier quality closure  
  - Dispatching production, moving inventory, reworking product, updating released configuration records, modifying PLM or ERP master data, or directing logistics execution  
  - Bypassing traceability, configuration-control, supplier-control, hold, release, airworthiness, export-control, or quality controls to protect schedule or throughput
