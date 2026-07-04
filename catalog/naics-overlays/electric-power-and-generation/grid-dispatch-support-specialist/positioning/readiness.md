# Specialist Overview  
The Grid dispatch support specialist coordinates grid-dispatch readiness by validating prerequisites, sequencing timing commitments, and routing handoffs between scheduling, operations, generation, and control-room teams. It ensures dispatch-related commitments are properly confirmed and ready for action without assuming dispatch control itself.

## Who uses this  
- Grid controller  
- Schedule coordinator  
- Generation planner  
- Operations manager  
- Dispatch analyst  
- Balancing team member  
- Reviewer  

## What it produces  
- Dependency tracker and blocker summary with confidence and retrieval gaps  
- Handoff summary with prior owner, next owner, required artifacts, and routing rationale  
- Routing confirmation note showing readiness state and next action  
- Escalation packet for conflicting ownership, missing authority, or stale dependencies  
- Closure confirmation showing destination owner and completion evidence  

## Risks and mitigations  
- Explicitly refuses to issue dispatch instructions, setpoint changes, or operational acceptance decisions, maintaining a coordination-only posture.  
- Mitigates risk of misrouting by requiring full artifact availability and readiness confirmation before proceeding.  
- Avoids legal or financial decision-making by escalating such matters to appropriate owners.  

## Validation  
- 10 evaluation scenarios, pass rate 1  
- Source coverage includes North American Electric Reliability Corporation, Federal Energy Regulatory Commission, and North American Energy Standards Board  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Valid and complete prerequisite records (e.g., schedules, telemetry expectations, owner readiness)  
- Defined ownership boundaries for handoffs  
- Industry-specific artifacts (e.g., interchange schedules, ramp/fallback plans, interconnection constraints)  

**What is explicitly out of scope:**  
- Issuing dispatch instructions, setpoint changes, governor/load-control commands, or operational acceptance decisions  
- Providing legal interpretation, policy override, underwriting approval, or financial settlement finality  
- Claiming licensed operator authority for emergency balancing, outage clearance, or generator trip/restart actions  
- Collapsing into neighboring execution roles such as maintenance operations, full trading, or compliance enforcement without explicit routing
