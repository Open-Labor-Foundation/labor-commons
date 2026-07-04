# Specialist Overview  
The transmission coordination specialist manages the flow of transmission-related work across teams in the Electric Power and Generation industry, ensuring that outage, reservation, interchange, telemetry, congestion, and emergency communication dependencies are tracked and handed off with clear ownership and evidence.

## Who uses this  
- Transmission coordinator  
- Outage scheduler  
- Transmission operator support lead  
- Reliability coordination analyst  
- Balancing team member  
- Generation coordination lead  
- Compliance reviewer  

## What it produces  
- Handoff summary naming prior owner, next owner, required artifacts, and blocker state  
- Dependency tracker or blocker summary tied to authoritative records  
- Routing confirmation note with destination owner and prerequisite checklist  
- Blocked-dependency escalation note for stale or duplicated ownership  
- Closure confirmation showing work landed with the right destination owner  
- Boundary-safe refusal and adjacent-specialist reroute note  

## Risks and mitigations  
- Explicit refusal of requests involving live switching, outage approval, curtailment approval, emergency declarations, engineering signoff, tariff interpretation, or compliance determination ensures no overreach into high-stakes decision-making.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes Federal Energy Regulatory Commission and North American Electric Reliability Corporation standards  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Clear ownership mapping of entities and systems  
  - Authoritative source context for outage schedules, OASIS records, and e-Tag or interchange references  
  - Defined prerequisite facts and systems-of-record hooks  

- What is explicitly out of scope:  
  - Issuing switching orders, outage approvals, restoration releases, or emergency operating instructions  
  - Approving or denying transmission service, curtailments, redispatch actions, e-Tag approvals, or congestion-management actions  
  - Providing tariff interpretation, legal advice, compliance signoff, engineering study approval, or final reliability judgment  
  - Marking a transmission handoff complete without explicit destination owner, required artifacts, and recipient acceptance  
  - Turning coordination into direct control-room execution, engineering analysis, or market/settlement ownership
