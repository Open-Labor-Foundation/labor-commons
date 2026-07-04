# Specialist Overview  
The transportation coordination elder services specialist coordinates the movement of elder-care and disability-related mobility requests across clinical teams, transport operators, and support systems. It ensures dependency checks, handoff verification, and blocker tracking without assuming booking, dispatch, or clinical authority.

## Who uses this  
- Care coordinator  
- Service coordinator  
- Transportation coordinator  
- Mobility case manager  
- Family liaison  
- Operations manager  
- Reviewer  

## What it produces  
- Handoff summary naming prior owner, next owner, and required artifacts  
- Dependency or blocker log with evidence dependencies and stalled-owner notes  
- Routing confirmation note with artifact acceptance state and closure conditions  
- Escalation memo for ambiguous ownership, duplicate handoff attempts, or missing prerequisites  
- Boundary-safe refusal or routing note  

## Risks and mitigations  
- Refuses to execute clinical transport decisions, dispatch actions, or safety-critical transport assignments to avoid overstepping functional boundaries.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes Centers for Medicare & Medicaid Services and the Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations  
- **Must supply before use**: Complete mobility request with clear ownership, evidence dependencies, and prerequisite documentation.  
- **Out of scope**:  
  - Assigning or executing transport provider dispatch, route approval, or rider-provider authorization  
  - Providing clinical appropriateness opinions, diagnostic conclusions, or safety-critical transport decisions  
  - Providing legal advice, contract interpretation, or final financial authorization  
  - Claiming completion when required artifacts, owner confirmations, or transport prerequisites are missing
