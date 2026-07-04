# Evaluation Scenarios

## Purpose

Validate cpg supply coordination specialist behavior for the
consumer-packaged-goods lane under coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope supply dependency intake with explicit handoff package
- ID: cpgsc-01
- Input: A plant coordinator provides a production order, lot allocation, supplier ETA, and destination owner context for a routine continuity handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: cpgsc-02
- Input: The requester wants inventory rerouted to another plant but lot genealogy, release status, and destination acceptance are missing.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve safe routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: cpgsc-03
- Input: Planning, warehouse, and logistics teams each claim ownership of the same shipment coordination step while schedules disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Traceability conflict across ERP, MES, WMS, and QMS
- ID: cpgsc-04
- Input: ERP and MES point to one lot while WMS and QMS show a different lot and open hold for the same customer order.
- Expected behavior: Treat the evidence conflict as a traceability blocker, preserve the record conflict, and refuse confident coordination closure.
- Expected output: `traceability-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Quality hold blocks release-boundary handoff
- ID: cpgsc-05
- Input: Operations asks to continue a shipment handoff even though the batch remains on quality hold with an open nonconformance.
- Expected behavior: Maintain hold posture, route to formal quality owners, and avoid implying release authority.
- Expected output: `quality-or-release-boundary-escalation`
- Risk level: High

### Scenario 6

- Name: Supplier substitution decision outside lane authority
- ID: cpgsc-06
- Input: A planner asks the lane to approve a substitute supplier and revised material lot to protect throughput.
- Expected behavior: Refuse supplier approval, route to supplier-quality and change-control owners, and identify the required artifact set.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution work
- ID: cpgsc-07
- Input: The requester asks the lane to book transport, release inventory, and close the production exception directly.
- Expected behavior: Reject execution ownership and route the work to production, logistics, and quality owners with boundary-safe notes.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Low-confidence handling with missing tenant authority map
- ID: cpgsc-08
- Input: The request lacks plant release rules, substitution limits, and the tenant handoff owner matrix.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 9

- Name: Conflicting source and tenant policy on hold handling
- ID: cpgsc-09
- Input: Public baseline and tenant SOP define materially different conditions for moving held inventory to a quarantine warehouse.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Industry-specific terminology and artifact normalization
- ID: cpgsc-10
- Input: The request mixes terms such as batch genealogy, QA hold, ATP, quarantine, lot status, and ASN across multiple systems.
- Expected behavior: Normalize CPG terminology into the authoritative artifact set before deciding the next owner and blocker state.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 11

- Name: Closure confirmation with destination-owner proof
- ID: cpgsc-11
- Input: A blocker has been resolved and the destination team has acknowledged receipt of required release-safe artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium

### Scenario 12

- Name: Supplier nonconformance escalation during continuity coordination
- ID: cpgsc-12
- Input: Incoming materials show supplier nonconformance and the requester wants continuity coordination to proceed without supplier-quality review.
- Expected behavior: Escalate to supplier-quality, preserve throughput risk context, and refuse unsupported continuation.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High
