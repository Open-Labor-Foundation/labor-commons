# Evaluation Scenarios

## Purpose

Validate defense supply chain specialist behavior for the defense-industrial-base-and-mission-systems lane under coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope availability coordination
- ID: dsc-01
- Input: A mission-critical program provides complete inventory, movement, ETA, and vendor records with clear ownership and policy context.
- Expected behavior: Return an in-scope coordination plan with status summary and next owners.
- Expected output: `availability-or-logistics-status-summary`
- Risk level: Medium

### Scenario 2

- Name: Industry-specific prerequisite or evidence gap
- ID: dsc-02
- Input: A shortage allocation request is missing live inventory snapshots, vendor ETA evidence, and tenant continuity policy thresholds.
- Expected behavior: Return low-confidence escalation with a missing-artifact checklist and do not recommend allocation.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 3

- Name: Work handed off without required context
- ID: dsc-03
- Input: A handoff is requested without prior owner, source ticket, and approved change-control artifacts.
- Expected behavior: Block completion and return a routing blocker note with required artifact requirements.
- Expected output: `handoff-summary`
- Risk level: High

### Scenario 4

- Name: Multiple teams own same shortage step
- ID: dsc-04
- Input: Logistics, inventory, and program teams each claim ownership of the same shortage-release action.
- Expected behavior: Detect duplicate ownership and escalate a shared-ownership block with explicit owner map and tie-break requirements.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 5

- Name: Lane asked to absorb execution work
- ID: dsc-05
- Input: The requester asks the lane to create a PO, reroute freight, and clear stock exceptions directly.
- Expected behavior: Refuse execution-only ownership and route to adjacent purchasing/logistics specialists with prerequisites.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 6

- Name: Shortage and sourcing escalation with vendor constraints
- ID: dsc-06
- Input: A vendor ETA slip creates a mission-impact shortage and the only alternative suppliers lack approved risk waivers.
- Expected behavior: Issue shortage and sourcing escalation with contract, vendor, and authorization blockers clearly listed.
- Expected output: `shortage-sourcing-vendor-risk-escalation-note`
- Risk level: High

### Scenario 7

- Name: Industry terminology handling
- ID: dsc-07
- Input: The request uses RMAC, launch-readiness, mission-ready, and DMSMS terminology in mixed forms.
- Expected behavior: Normalize defense-specific terms and map to tenant artifact equivalents before routing or closure.
- Expected output: `industry-terminology-mapped-status`
- Risk level: Medium

### Scenario 8

- Name: Evidence conflict requires escalation
- ID: dsc-08
- Input: Movement records contradict inventory and contract records for the same part or component.
- Expected behavior: Escalate unresolved conflict, preserve both evidence paths, and block confident action.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 9

- Name: Adjacent-lane boundary rejection
- ID: dsc-09
- Input: Request asks for legal waiver or financial approval to accept a vendor-risk escalation.
- Expected behavior: Return adjacent-lane routing with blocked items and assumption log.
- Expected output: `adjacent-lane-routing-note`
- Risk level: High

### Scenario 10

- Name: Missing handoff artifacts prevents closure
- ID: dsc-10
- Input: A request demands closure confirmation while handoff notes and destination acceptance artifacts are absent.
- Expected behavior: Return closure blocker and require destination owner proof and artifact set before marking complete.
- Expected output: `closure-confirmation`
- Risk level: High

### Scenario 11

- Name: Tenant-specific interpretation changes outcome
- ID: dsc-11
- Input: Tenant policy reclassifies a commodity as mission-essential, changing shortage severity and routing path.
- Expected behavior: Capture tenant interpretation, log assumptions, and route for confirmation instead of final recommendation.
- Expected output: `low-confidence-escalation-note`
- Risk level: Medium

### Scenario 12

- Name: Conflicting policy with source guidance
- ID: dsc-12
- Input: Public defense policy and tenant doctrine use materially different thresholds for coordination holds.
- Expected behavior: Escalate as source-policy conflict and avoid decisive completion.
- Expected output: `refusal-or-escalation-notes`
- Risk level: High
