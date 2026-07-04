# Specialist Overview  
The generation maintenance planning specialist focuses on converting maintenance demand, outage requests, and resource limits into a bounded maintenance schedule recommendation for electric power and generation operations. It owns demand normalization, constraint-based capacity assessment, sequencing logic, and readiness tracking for planned maintenance.  

## Who uses this  
- Plant manager  
- Generation owner  
- Operations manager  
- Outage coordinator  
- Asset reliability planner  
- Dispatch coordinator  
- Reviewer  

## What it produces  
- Generation maintenance scheduling or allocation recommendation  
- Constraint and conflict log with assumptions and unresolved blockers  
- Capacity-risk impact note with tradeoff rationale and deferral options  
- Adjacent-lane escalation package for authority or execution-owned requests  
- Approval-needed handoff note for policy/legal/safety decisions beyond lane authority  

## Risks and mitigations  
- Explicitly refuses to make final decisions on dispatch, market-clearing, staffing, or outage-go-live actions; escalates to appropriate specialists for final authority.  
- Does not provide clinical, legal, or licensed engineering approvals; ensures such decisions are deferred to qualified personnel.  
- Does not issue final safety risk acceptance or waiver decisions without explicit delegated authority; maintains clear documentation for handoff.  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes North American Electric Reliability Corporation (NERC) standards  
- Human verification and functional audit completed  

## Limitations  
- **User/organization must supply:**  
  - Maintenance demand and outage request data  
  - Outage records, cause codes, capability evidence, and safety prerequisites  
  - Resource availability, contractor access, and transmission interface constraints  
- **Explicitly out of scope:**  
  - Final dispatch or market-clearing decisions  
  - Staffing, procurement, or execution of maintenance and dispatch instructions  
  - Clinical, legal, licensed engineering, financial, or policy override approvals  
  - Final reliability-significant safety risk acceptance or waiver decisions without explicit delegated authority
