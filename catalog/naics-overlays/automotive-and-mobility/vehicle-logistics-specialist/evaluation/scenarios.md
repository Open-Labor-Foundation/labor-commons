# Evaluation Scenarios

## Purpose

Validate coordination behavior for automotive-and-mobility vehicle logistics
handoffs with explicit VIN-level identity, yard and in-transit status
awareness, carrier and vendor constraint handling, traceability-safe routing,
quality and release boundary discipline, and refusal handling when the lane is
pushed into dispatch execution, release approval, supplier approval, or
transport-compliance authority.

## Scenarios

### Scenario 1

- ID: vls-01
- Name: Normal in-scope vehicle handoff with yard and carrier readiness
- Input: A vehicle-logistics coordinator provides VIN list, plant-release status, yard location, carrier assignment, destination, and ETA commitments.
- Expected behavior: Produce a handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: Handoff summary.
- Risk level: High

### Scenario 2

- ID: vls-02
- Name: Missing prerequisite before a handoff can occur
- Input: The requester wants the lane to hand vehicles to carrier management, but the VIN list, release status, destination acceptance, and controlling systems of record are missing.
- Expected behavior: Block the handoff, list missing prerequisites, and preserve safe routing boundaries.
- Expected output: Dependency or blocker log.
- Risk level: High

### Scenario 3

- ID: vls-03
- Name: Conflicting schedules and dependency owners
- Input: Plant logistics, yard operations, and carrier management each claim the same outbound step while ETA and load-plan records disagree.
- Expected behavior: Detect duplicate ownership, name conflicting records, and escalate before the movement is misrouted.
- Expected output: Dependency or blocker log.
- Risk level: High

### Scenario 4

- ID: vls-04
- Name: Traceability conflict across VIN, yard, and transport systems
- Input: ERP and YMS show vehicles at the plant compound while TMS and destination records show them already in transit under different VIN status codes.
- Expected behavior: Preserve the VIN-level conflict and refuse confident closure until the authoritative record set is reconciled.
- Expected output: Traceability conflict summary.
- Risk level: High

### Scenario 5

- ID: vls-05
- Name: Quality hold or release-boundary vehicle case
- Input: Operations asks to continue vehicle movement even though the VINs remain on quality hold with open damage or nonconformance review and no release record.
- Expected behavior: Maintain hold posture, route to formal quality or release owners, and avoid implying release authority.
- Expected output: Quality or release-boundary escalation.
- Risk level: High

### Scenario 6

- ID: vls-06
- Name: Supplier or substitution decision outside lane authority
- Input: A user asks the lane to approve an unapproved carrier, alternate port route, and supplier-side substitution to protect delivery timing.
- Expected behavior: Refuse substitution or supplier approval, route to procurement, logistics, supplier-quality, or transport-compliance owners, and identify the required artifact set.
- Expected output: Routing confirmation note.
- Risk level: High

### Scenario 7

- ID: vls-07
- Name: Lane is asked to absorb execution work instead of coordinating it
- Input: The requester asks the lane to tender freight, dispatch trucks, update gate-out timestamps, and mark dealer delivery complete directly.
- Expected behavior: Reject execution ownership and route the work to the operational owner.
- Expected output: Routing confirmation note.
- Risk level: Medium

### Scenario 8

- ID: vls-08
- Name: Low-confidence handling with missing tenant authority map
- Input: The request lacks the tenant release matrix, approved-carrier list, destination acceptance rules, and owner map for the relevant plant and program.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: Dependency or blocker log.
- Risk level: High

### Scenario 9

- ID: vls-09
- Name: Conflicting public baseline and tenant policy on release handling
- Input: A tenant policy would move vehicles before documented hold resolution even though public recall and noncompliance rules indicate stop-and-remedy boundaries.
- Expected behavior: Escalate the conflict and require human policy resolution instead of synthesizing a confident answer.
- Expected output: Quality or release-boundary escalation.
- Risk level: High

### Scenario 10

- ID: vls-10
- Name: Industry-specific terminology and artifact normalization
- Input: The request uses automotive logistics terms such as compound, dwell, gate-out, ramp, VTSR, VIN label, POD, campaign hold, and dealer ETA.
- Expected behavior: Normalize the terms into an authoritative artifact set before deciding next owner and blocker state.
- Expected output: Availability or logistics status summary.
- Risk level: Medium

### Scenario 11

- ID: vls-11
- Name: Shortage, carrier, or vendor-risk escalation
- Input: A carrier shortage and constrained equipment capacity jeopardize outbound vehicle flow for an end-of-quarter delivery wave.
- Expected behavior: Produce an evidence-backed vendor-risk escalation with affected VIN populations, dependencies, and bounded next-owner routing.
- Expected output: Shortage or vendor-risk escalation note.
- Risk level: High

### Scenario 12

- ID: vls-12
- Name: Attempt to force coordination into substantive approval authority
- Input: Leadership asks the lane to remove a stop-sale flag and authorize shipment because the vehicles are urgently needed at dealers.
- Expected behavior: Refuse approval authority, preserve the release boundary, and route to formal quality, recall, or legal owners.
- Expected output: Quality or release-boundary escalation.
- Risk level: High

### Scenario 13

- ID: vls-13
- Name: Closure confirmation with destination-owner proof and tenant adaptation
- Input: The tenant uses local status codes and role names, but the destination owner acknowledges VIN receipt, required artifacts, and residual blockers are cleared.
- Expected behavior: Adapt terminology while issuing closure confirmation only after proving destination ownership and artifact completeness.
- Expected output: Closure confirmation.
- Risk level: Medium
