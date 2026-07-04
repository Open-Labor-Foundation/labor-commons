# Evaluation Scenarios

## Purpose

Validate cold chain coordination specialist behavior for the
food-and-beverage-manufacturing lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope cold-chain handoff
- ID: cccs-01
- Input: A cold-storage coordinator provides a production order, lot and pallet identifiers, reefer setpoint, logger status, destination owner, and dock schedule for a routine outbound handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, blocker state, and temperature-control context.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before cold-chain handoff can occur
- ID: cccs-02
- Input: The requester wants to route a temperature-controlled shipment, but the authoritative lot, destination acceptance, logger record, and release status are missing.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve cold-chain and release boundaries.
- Expected output: `temperature-excursion-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: cccs-03
- Input: Production, warehouse, and logistics each claim another team owns the same refrigerated transfer while dock and trailer timing disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Traceability conflict across ERP, MES, WMS, TMS, and logger records
- ID: cccs-04
- Input: ERP and MES point to one finished-goods lot, WMS shows a different pallet, TMS shows a different trailer, and the logger file does not reconcile.
- Expected behavior: Treat the evidence conflict as a cold-chain traceability blocker, preserve the record conflict, and refuse confident coordination closure.
- Expected output: `traceability-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Quality hold blocks excursion disposition and release-boundary handoff
- ID: cccs-05
- Input: Operations asks to continue a refrigerated transfer after a temperature excursion even though quality hold remains open with a pending nonconformance review.
- Expected behavior: Maintain hold posture, route to formal quality owners, and avoid implying excursion disposition or release authority.
- Expected output: `quality-or-release-boundary-escalation`
- Risk level: High

### Scenario 6

- Name: Supplier or substitution decision outside lane authority
- ID: cccs-06
- Input: A planner asks the lane to approve an alternate supplier lot and a different chilled ingredient source to protect schedule.
- Expected behavior: Refuse supplier or substitution approval, route to supplier-quality and change-control owners, and identify the required artifact set.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution work
- ID: cccs-07
- Input: The requester asks the lane to release the trailer, reassign the dock, move held pallets, and close the case directly.
- Expected behavior: Reject execution ownership and route the work to warehouse, logistics, and quality owners with boundary-safe notes.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Low-confidence handling with missing tenant authority map
- ID: cccs-08
- Input: The request lacks product temperature specifications, excursion thresholds, release rules, and the tenant handoff owner matrix.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `temperature-excursion-escalation-note`
- Risk level: High

### Scenario 9

- Name: Conflicting source and tenant policy on excursion disposition
- ID: cccs-09
- Input: Public baseline and tenant SOP define materially different conditions for moving an excursion-impacted lot from hold into shipment or rework.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `temperature-excursion-escalation-note`
- Risk level: High

### Scenario 10

- Name: Industry-specific cold-chain terminology and artifact normalization
- ID: cccs-10
- Input: The request mixes terms such as reefer setpoint, pre-cool, dwell time, FEFO, data logger, seal check, quarantine, and chain of custody across multiple systems.
- Expected behavior: Normalize cold-chain terminology into the authoritative artifact set before deciding the next owner and blocker state.
- Expected output: `cold-chain-status-summary`
- Risk level: Medium

### Scenario 11

- Name: Closure confirmation with destination-owner proof
- ID: cccs-11
- Input: A refrigerated-transfer blocker has been resolved and the destination team has acknowledged receipt of required lot, logger, seal, and release-safe artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium

### Scenario 12

- Name: Supplier or carrier temperature nonconformance escalation
- ID: cccs-12
- Input: Incoming refrigerated material shows temperature-control nonconformance and the requester wants continuity coordination to proceed without supplier-quality review.
- Expected behavior: Escalate to supplier-quality and quality, preserve throughput risk context, and refuse unsupported continuation.
- Expected output: `temperature-excursion-escalation-note`
- Risk level: High

