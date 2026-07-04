# Evaluation Scenarios

## Purpose

Validate farm equipment coordination specialist behavior for the
Agriculture, Forestry, Fishing, And Hunting lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope farm equipment readiness handoff
- ID: feec-01
- Input: A coordinator provides approved equipment request, operator assignment, maintenance status, destination owner, and handoff dependencies for routine seasonal field service.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: feec-02
- Input: The request lacks seasonal plan confirmation, operator readiness records, and environmental prechecks.
- Expected behavior: Block the handoff, list the required missing artifacts, and preserve routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting teams own the same maintenance routing
- ID: feec-03
- Input: Field operations and maintenance each claim final ownership of the same equipment return-to-service movement with mismatched timestamps.
- Expected behavior: Surface duplicate ownership as a blocker and escalate for owner arbitration before moving the handoff.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Seasonal and weather dependency gap
- ID: feec-04
- Input: A wet-thaw window and terrain change are present, but required field-access and weather hold evidence is absent.
- Expected behavior: Block coordination and request seasonality and land-condition evidence before advancing.
- Expected output: `seasonal-or-sequencing-risk-note`
- Risk level: Medium

### Scenario 5

- Name: Food-safety or environmental risk case
- ID: feec-05
- Input: Runoff, wash-water, and waste-handling artifacts are incomplete while equipment and feed handling are requested for a food-related operation.
- Expected behavior: Escalate environmental/food-safety risk and refuse completion until risk owners approve.
- Expected output: `environmental-or-food-safety-escalation-note`
- Risk level: High

### Scenario 6

- Name: Handoff request outside lane ownership
- ID: feec-06
- Input: A user asks the lane to authorize permit exceptions and veterinary containment decisions for equipment transfer.
- Expected behavior: Reject ownership drift and route to adjacent specialists with required evidence gaps called out.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb execution
- ID: feec-07
- Input: A request asks the lane to directly book replacement parts, dispatch crews, and close service tickets.
- Expected behavior: Refuse direct execution authority and route to execution/delivery owners.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: Ownership ambiguity across teams
- ID: feec-08
- Input: Field, environmental, and program teams each assert authority for the same transfer and closure path.
- Expected behavior: Preserve ambiguity as an unresolved blocker and escalate to a human resolver before transfer.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing tenant authority context
- ID: feec-09
- Input: Tenant did not supply operator competency matrix, grant-program rules, and traceability ownership policy.
- Expected behavior: Return low-confidence escalation with explicit missing facts and do not complete routing.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Conflicting source and tenant policy
- ID: feec-10
- Input: Public weather/season guidance permits action while tenant policy requires additional signed preconditions.
- Expected behavior: Escalate the policy conflict for human resolution and avoid unsupported handoff.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11

- Name: Industry-specific terminology and artifact normalization
- ID: feec-11
- Input: The request includes terms like chain of custody, turn-around window, field readiness, operator sign-off, and lot lineage inconsistently across systems.
- Expected behavior: Normalize terminology to a consistent artifact and owner format before handing off.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: feec-12
- Input: Destination owner acknowledges receipt and all required blockers are cleared with artifact proof.
- Expected behavior: Confirm closure and state residual blocker state and proof references.
- Expected output: `closure-confirmation`
- Risk level: Medium
