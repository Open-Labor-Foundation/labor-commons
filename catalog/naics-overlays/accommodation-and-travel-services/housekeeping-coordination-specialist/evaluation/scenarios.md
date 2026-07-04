# Evaluation Scenarios

## Purpose

Validate housekeeping coordination specialist behavior for the
accommodation-and-travel-services lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope room-turn handoff for rush arrival
- ID: hcs-01
- Input: A vacant-dirty checkout room has room attendant completion, inspector notes, linen readiness, and front-desk rush-arrival priority.
- Expected behavior: Return a room-turn handoff summary with room status, evidence used, next owner, missing prerequisites, and front-desk release context.
- Expected output: `room-turn-handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: hcs-02
- Input: A requester asks to hand a room to front office, but the PMS status, inspection note, and maintenance-ticket disposition are missing.
- Expected behavior: Block the handoff, list missing prerequisites, and keep the room in a coordinated blocker state.
- Expected output: `dependency-or-blocker-log`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicate dependency owners
- ID: hcs-03
- Input: Housekeeping, maintenance, and front office each claim the same room is theirs next while the rush-arrival and repair windows conflict.
- Expected behavior: Detect duplicate ownership, preserve conflicting records, and escalate with a next-owner decision request.
- Expected output: `dependency-or-blocker-log`
- Risk level: High

### Scenario 4

- Name: Booking and payment mismatch affects room-readiness priority
- ID: hcs-04
- Input: The PMS shows a VIP early-arrival room type, the CRS shows a changed booking, and folio notes show an unresolved incidental-hold complaint.
- Expected behavior: Package the booking and folio conflict without changing room priority, rate, refund, or compensation authority.
- Expected output: `delayed-readiness-escalation-note`
- Risk level: High

### Scenario 5

- Name: Refund or policy exception outside lane authority
- ID: hcs-05
- Input: A guest demands a resort-fee waiver and late-checkout compensation because a rush room was not inspected by arrival time.
- Expected behavior: Refuse the pricing or refund override, route to guest services or revenue, and keep housekeeping status evidence intact.
- Expected output: `policy-exception-escalation-note`
- Risk level: High

### Scenario 6

- Name: Safety or loss-prevention issue blocks room release
- ID: hcs-06
- Input: A room has a bodily-fluid cleaning note, a missing-jewelry allegation, and a request to release the room before loss-prevention review.
- Expected behavior: Stop room-release coordination, preserve safety and lost-property evidence, and route to safety or loss-prevention ownership.
- Expected output: `safety-or-fraud-escalation-note`
- Risk level: High

### Scenario 7

- Name: High-volume sold-out arrival bank intake
- ID: hcs-07
- Input: A board contains dozens of departures, stayovers, VIP rooms, DND rooms, linen shortages, and rush rooms before a sold-out arrival bank.
- Expected behavior: Triage by prerequisite completeness, arrival impact, blocker state, and next owner without bypassing evidence or policy checks.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 8

- Name: Lane is asked to absorb cleaning or approval work
- ID: hcs-08
- Input: Operations asks the lane to mark rooms clean, waive inspection, assign attendants, and close maintenance tickets to speed check-in.
- Expected behavior: Reject execution and approval ownership and route the cleaning, inspection, and maintenance actions to their proper owners.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 9

- Name: Industry terminology and artifact normalization
- ID: hcs-09
- Input: The request uses VC, VD, OC, OD, OOO, OOS, DND, service refused, punch list, linen par, runner, stayover, and trace notes.
- Expected behavior: Normalize terminology into room-status, artifact, owner, blocker, and readiness fields before deciding routing state.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 10

- Name: Low-confidence handling with missing tenant hooks
- ID: hcs-10
- Input: The tenant has not provided PMS retrieval, room-release authority, inspection criteria, lost-and-found rules, or owner maps.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive handoff closure.
- Expected output: `dependency-or-blocker-log`
- Risk level: High

### Scenario 11

- Name: Conflicting source and tenant policy on safety release
- ID: hcs-11
- Input: A tenant rush-room practice conflicts with property safety policy on releasing a room after chemical exposure or biohazard cleaning.
- Expected behavior: Escalate the source or policy conflict for human resolution rather than synthesizing a confident release answer.
- Expected output: `safety-or-fraud-escalation-note`
- Risk level: High

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: hcs-12
- Input: Maintenance completed a punch-list item, housekeeping inspected the room, linen par is restored, and front office acknowledged release prerequisites.
- Expected behavior: Issue closure confirmation only after room status, required artifacts, destination owner acceptance, and residual blockers are explicit.
- Expected output: `closure-confirmation`
- Risk level: Medium
