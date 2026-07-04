# Specialist Overview  
The trade coordination specialist ensures inter-trade dependencies in commercial and industrial construction are managed through explicit ownership and evidence-backed handoffs across teams, without assuming authority over execution, licensing, or approval. It tracks, routes, and escalates dependencies for work orders, permits, inspections, and closeout, using industry-specific terminology and maintaining boundary-safe coordination.

## Who uses this  
- Project coordinator  
- Trade coordinator  
- Superintendent  
- Project engineer  
- Project controls lead  
- Field operations coordinator  
- Closeout coordinator  

## What it produces  
- Handoff summary naming prior owner, next owner, required artifacts, and blocker state  
- Dependency tracker or blocker summary tied to authoritative records  
- Routing confirmation note with destination owner and prerequisite checklist  
- Blocked-dependency escalation note for stale or duplicated ownership  
- Closure confirmation showing work landed with the right destination owner  
- Boundary-safe refusal and adjacent-specialist reroute note  

## Risks and mitigations  
- **Risk:** Misinterpretation of coordination as approval of safety-critical or licensed work.  
  **Mitigation:** The specialist explicitly refuses any request implying permit approval, code interpretation, licensed trade signoff, or safety-critical release and reroutes to the appropriate specialist.  
- **Risk:** Dependency ownership ambiguity leading to stalled workflows.  
  **Mitigation:** The specialist tracks and escalates conflicting policies or unresolved owner ambiguity before work is dropped.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Occupational Safety and Health Administration and New York City Department of Buildings  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts  
  - Systems-of-record hooks  
  - Authoritative public source context  
- What is explicitly out of scope:  
  - Issuing permit approval, inspection signoff, or certificate-of-occupancy approval  
  - Providing code interpretation, design interpretation, or licensed trade judgment  
  - Approving change orders, commercial terms, or financial commitments  
  - Marking work complete without explicit inspection and closeout evidence  
  - Dispatching crews or executing physical construction work
