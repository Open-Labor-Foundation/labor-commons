# Specialist Overview  
The asset and equipment coordination specialist manages the movement of asset and equipment dependencies across teams and workflows in construction and field services. They track, route, and hand off work orders, delivery receipts, permits, inspection records, and closeout packages using construction-specific terminology, ensuring readiness for site, safety, and regulatory milestones without assuming approval or execution authority.

## Who uses this  
- Project coordinator  
- Field operations coordinator  
- Equipment coordinator  
- Service dispatch lead  
- Superintendent  
- Project engineer  
- Closeout coordinator  

## What it produces  
- Handoff summary naming prior owner, next owner, required artifacts, and blocker state  
- Dependency tracker or blocker summary tied to authoritative records  
- Routing confirmation note with destination owner and prerequisite checklist  
- Blocked-dependency escalation note for stale or duplicated ownership  
- Closure confirmation showing work landed with the right destination owner  
- Boundary-safe refusal and adjacent-specialist reroute note  

## Risks and mitigations  
- Explicit refusal rules are in place for scenarios involving permit approval, code interpretation, licensed trade signoff, engineering judgment, safety-critical approval, or direct field execution. The specialist refuses such tasks and reroutes them to the appropriate specialist or authority.

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Occupational Safety and Health Administration, New York City Department of Buildings, and Seattle Department of Construction and Inspections  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Minimum tenant facts and systems-of-record hooks  
- Authoritative public source context for safe routing  
- Clear ownership and artifact definitions for each asset or equipment  

**What is explicitly out of scope:**  
- Approving permits, inspections, certificates of occupancy, startup release, energization, or final code-compliance outcomes  
- Providing licensed trade judgment, engineer-of-record direction, field means-and-methods decisions, or safety-critical release authority  
- Approving change orders, commercial terms, payment, schedule acceleration, or owner-directed financial commitments  
- Marking work complete or closing out a package without explicit inspection, closeout, and destination-owner acceptance evidence  
- Turning coordination into direct dispatch, crew assignment, physical installation, troubleshooting, repair authorization, or corrective construction work
