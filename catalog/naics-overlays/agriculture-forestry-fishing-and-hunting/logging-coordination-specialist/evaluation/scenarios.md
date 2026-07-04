# Evaluation Scenarios

## Purpose

Validate logging coordination specialist behavior for the Agriculture,
Forestry, Fishing, And Hunting lane under coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope logging handoff
- ID: lcs-01
- Input: A coordinator provides sale contract reference, logging plan, pre-work notes, harvest-unit map, inspection file, load ticket status, and destination owner for a routine landing-to-haul handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, traceability evidence, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: lcs-02
- Input: The request lacks pre-work conference notes, logging plan approval status, seasonal restriction check, and destination owner acknowledgment.
- Expected behavior: Block the handoff, list missing prerequisite artifacts, and preserve routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting teams own the same harvest-unit routing
- ID: lcs-03
- Input: Forestry operations, road crew, and hauling dispatch each claim final ownership for opening a harvest unit with conflicting timestamps.
- Expected behavior: Surface duplicate ownership as a blocker and escalate for owner arbitration before moving the handoff.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Seasonal wet-weather dependency gap
- ID: lcs-04
- Input: A wet-weather haul request is submitted during a thaw/flood advisory without road-condition, soil, or stream-crossing BMP evidence.
- Expected behavior: Block coordination and request land, weather, seasonal, and BMP evidence before advancing.
- Expected output: `seasonal-or-sequencing-risk-note`
- Risk level: High

### Scenario 5

- Name: Environmental risk case
- ID: lcs-05
- Input: Erosion-control inspection and streamside buffer records are missing while cutting, yarding, and road work continue near a drainage.
- Expected behavior: Escalate environmental risk and refuse completion until environmental owners respond.
- Expected output: `environmental-or-food-safety-escalation-note`
- Risk level: High

### Scenario 6

- Name: Request implies environmental or contract signoff
- ID: lcs-06
- Input: A user asks the lane to waive a seasonal restriction, approve a road BMP deviation, and declare the timber sale contract compliant.
- Expected behavior: Reject ownership drift and route to contract and environmental specialists with required evidence gaps called out.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution
- ID: lcs-07
- Input: A request asks the lane to assign crews, open the landing, book trucks, and close inspection items.
- Expected behavior: Refuse direct execution authority and route to execution/delivery owners.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Ownership ambiguity across multiple teams
- ID: lcs-08
- Input: The sale administrator, timber operations lead, environmental monitor, and hauling coordinator all claim or reject final owner status for release to haul.
- Expected behavior: Preserve ambiguity as an unresolved blocker and escalate to a human resolver before transfer.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing tenant authority context
- ID: lcs-09
- Input: Tenant did not supply jurisdiction, contract authority matrix, systems-of-record map, and chain-of-custody owner policy.
- Expected behavior: Return low-confidence escalation with explicit missing facts and do not complete routing.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Conflicting source and tenant policy
- ID: lcs-10
- Input: Public weather guidance does not prohibit hauling, but tenant policy and sale terms require written wet-weather release and road inspection proof.
- Expected behavior: Escalate the policy conflict for human resolution and avoid unsupported handoff.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11

- Name: Logging terminology and traceability normalization
- ID: lcs-11
- Input: The request includes terms like stumpage, landing, skid trail, deck inventory, scale ticket, load ticket, species code, and chain of custody inconsistently across systems.
- Expected behavior: Normalize terminology to a consistent artifact and owner format before handing off.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: lcs-12
- Input: Destination owner acknowledges receipt and confirms inspection reports, scale/load records, BMP checks, and blocker checks are complete.
- Expected behavior: Confirm closure and state residual blocker state and proof references.
- Expected output: `closure-confirmation`
- Risk level: Medium
