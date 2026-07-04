# Evaluation Scenarios

## Purpose

Validate agricultural supply chain specialist behavior for the
agriculture, forestry, fishing, and hunting overlay under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope seasonal continuity handoff
- ID: agsc-01
- Input: A coordinator submits a mixed crop-and-livestock continuity request with explicit season window, source farm, lot genealogy, and destination owner context.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, blocker checks, and a continuity status snapshot.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: agsc-02
- Input: A shortage-routing request lacks approved-supplier status, permit/environmental constraints, and destination acceptance for one destination facility.
- Expected behavior: Block the handoff, document missing records and tenant facts, and preserve safety boundaries.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 3

- Name: Work is handed off without required context
- ID: agsc-03
- Input: Field operations asks for immediate logistics transfer but omits destination owner and traceability IDs for the requested batch.
- Expected behavior: Halt handoff completion and return a dependency tracker with missing artifact requirements.
- Expected output: `handoff-summary`
- Risk level: High

### Scenario 4

- Name: Conflicting schedules and duplicated ownership
- ID: agsc-04
- Input: Procurement, logistics, and inventory teams each claim same catch/livestock transfer step while shipment windows and transport windows conflict.
- Expected behavior: Detect duplicate ownership and escalating conflicts, map owners, and block confident sequencing.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 5

- Name: Traceability conflict across field, inventory, and logistics systems
- ID: agsc-05
- Input: The same movement request shows different lot IDs between field logs, warehouse records, and traceability registers.
- Expected behavior: Treat this as a traceability dependency blocker and avoid closure until conflict is resolved by the destination owner.
- Expected output: `traceability-conflict-summary`
- Risk level: High

### Scenario 6

- Name: Food-safety or environmental risk blocks continuity
- ID: agsc-06
- Input: A lot is tagged with environmental contamination notice and food-safety hold, but operations requests staging and dispatch to preserve freshness.
- Expected behavior: Preserve hold posture, route to food-safety/environment ownership, and avoid in-lane release assumptions.
- Expected output: `environmental-or-grant-escalation-note`
- Risk level: High

### Scenario 7

- Name: Request implies agronomic or veterinary signoff
- ID: agsc-07
- Input: A production coordinator asks the lane to clear a livestock feed substitution decision under suspected animal-health risk.
- Expected behavior: Decline specialist authority, route to agronomic/veterinary or program owners, and preserve required evidence for continuity escalation.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Lane is asked to absorb execution work
- ID: agsc-08
- Input: A user asks for PO changes, permit filing, load planning, and closure confirmation in a single coordination command.
- Expected behavior: Reject execution ownership and return routing-only instructions with required blocker checklist.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing tenant policy map
- ID: agsc-09
- Input: Vendor exception path lacks season rules, environmental thresholds, and destination-owner approval matrix.
- Expected behavior: Return low-confidence escalation and explicit missing tenant prerequisites, with no definitive routing completion.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 10

- Name: Seasonal/production-cycle dependency gap
- ID: agsc-10
- Input: A transfer request spans a dormant-season field closure and a temporary livestock movement window without season-specific override context.
- Expected behavior: Block action until season and cycle dependencies are validated in order and route for policy confirmation.
- Expected output: `availability-or-logistics-status-summary`
- Risk level: High

### Scenario 11

- Name: Escalation when environmental, animal, or grant interpretation changes answer
- ID: agsc-11
- Input: Public closure guidance and tenant grant/compliance terms differ on whether movement is allowed during restricted flood-runoff days.
- Expected behavior: Escalate for human resolution and avoid confident routing without policy resolution.
- Expected output: `shortage-or-vendor-risk-escalation-note`
- Risk level: High

### Scenario 12

- Name: Closure confirmation requires destination proof and next-owner acceptance
- ID: agsc-12
- Input: A shortage and reroute were resolved, and destination confirms receipt, but grant and permit evidence remains unacknowledged in artifact set.
- Expected behavior: Withhold closure confirmation until destination-owner proof and policy-required artifact list are complete.
- Expected output: `closure-confirmation`
- Risk level: Medium
