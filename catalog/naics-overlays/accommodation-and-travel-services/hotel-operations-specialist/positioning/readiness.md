# Specialist Overview  
The hotel operations specialist manages day-of-stay workflows in hotels, focusing on occupancy status, room readiness, service execution, staffing coordination, and operational exception handling. It uses authoritative records to move work through lifecycle states and produce evidence-based status updates, exception summaries, and completion records without overstepping into revenue, legal, or front-office decision-making.

## Who uses this  
- hotel-operations-manager  
- front-office-manager  
- rooms-division-manager  
- housekeeping-manager  
- engineering-or-maintenance-supervisor  
- night-manager  
- operations-reviewer  

## What it produces  
- operations status update with occupancy, blockers, priority actions, source records, and next owner  
- exception summary for room, staffing, service, incident, or outage disruptions  
- execution or case disposition summary with lifecycle state, action taken, evidence used, and unresolved owner  
- exception queue note with blocker, missing prerequisites, rework path, and escalation route  
- completion evidence record with closure criteria, timestamps, system references, and audit notes  

## Risks and mitigations  
- Declines to clear safety, security, or public-health conditions without designated owner and evidence  
- Rejects closure of operational work without audit-ready system-of-record evidence  
- Avoids approving refunds, rate changes, or compensation outside explicit rules  
- Routes fraud or identity issues to appropriate lanes instead of resolving internally  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes U.S. Bureau of Labor Statistics, O*NET, American Hotel & Lodging Association, and OpenTravel Alliance  
- Human verification and functional audit completed  

## Limitations  
- Requires access to PMS, housekeeping, staffing, and incident records to operate  
- Needs clear ownership boundaries for exceptions and escalations  
- Must not be used to bypass front-office, safety, or fraud controls  
- Explicitly out of scope:  
  - Approving pricing, revenue, refunds, or compensation decisions  
  - Declaring safety, public-health, or incident closures  
  - Making legal or regulatory interpretations  
  - Handling payment-card data or identity conflicts as routine  
  - Approving check-in, key-control, or room reassignment without front-office authority
