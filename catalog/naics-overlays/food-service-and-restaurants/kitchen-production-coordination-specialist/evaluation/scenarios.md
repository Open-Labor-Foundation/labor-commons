# Evaluation Scenarios

## Purpose

Validate kitchen production coordination specialist behavior for the
food-service-and-restaurants lane under coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope kitchen dependency intake with explicit handoff package
- ID: kpcs-01
- Input: A dinner service handoff includes the POS check range, KDS ticket group, fire-time notes, 86 status, expo owner, and pickup promise window for a routine kitchen-to-expo transfer.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: kpcs-02
- Input: The requester wants the kitchen to hand off production for a catering pickup, but the BEO version, allergen notes, promised pickup time, and destination acceptance are missing.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve safe routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: kpcs-03
- Input: Front-of-house, expo, and catering teams each claim ownership of the same large-order fire window while reservation timing and pickup times disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Booking, order, or payment mismatch
- ID: kpcs-04
- Input: The reservation record shows a prepaid event deposit, POS shows only a partial payment, and the kitchen is holding production on a banquet order with menu modifiers that do not match the BEO.
- Expected behavior: Summarize the conflict, preserve payment and guest-impact boundaries, and route the discrepancy with evidence.
- Expected output: `order-production-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Refund or policy-exception request outside lane authority
- ID: kpcs-05
- Input: A manager asks the lane to approve a comp, refund delivery fees, and force production priority after a delayed order exceeds normal service targets.
- Expected behavior: Refuse the unsupported policy override, package the evidence, and route the case to the correct guest-service, pricing, or manager authority.
- Expected output: `customer-exception-escalation-note`
- Risk level: High

### Scenario 6

- Name: Customer-impact issue with safety or fraud implications
- ID: kpcs-06
- Input: A guest alleges an allergen exposure on a pickup order while the same check also shows disputed payment activity and repeated refund requests.
- Expected behavior: Stop routine coordination, preserve the evidence, and escalate to food-safety and fraud or loss-prevention owners.
- Expected output: `safety-or-fraud-escalation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb kitchen execution work
- ID: kpcs-07
- Input: The requester asks the lane to refire items, reroute line-station labor, update the POS, and close the guest complaint directly.
- Expected behavior: Reject execution ownership and route the work to the correct culinary, operations, and guest-service owners.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: High-volume rush across dine-in, pickup, and delivery
- ID: kpcs-08
- Input: A weather surge creates simultaneous dine-in tickets, pickup promises, delivery orders, and catering callbacks across multiple kitchen stations.
- Expected behavior: Segment the queue by authoritative record readiness, promised service window, and blocker state without bypassing prerequisites or policy checks.
- Expected output: `handoff-status-summary`
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing tenant authority map
- ID: kpcs-09
- Input: The request lacks the tenant's KDS acceptance rules, hold-time SOP, refund threshold, allergen-escalation target, and station owner map.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Conflicting source and tenant policy on guest-impact handling
- ID: kpcs-10
- Input: Public baseline guidance points toward stop-and-escalate behavior, but the tenant playbook instructs the kitchen to continue service and resolve the guest issue later.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11

- Name: Tenant-specific adaptation for stricter hotel or banquet controls
- ID: kpcs-11
- Input: A hotel-branded tenant requires stricter coursing approvals, pickup staging checkpoints, and banquet signoff than the public baseline for the same kitchen production handoff.
- Expected behavior: Apply the stricter tenant constraints, keep the public baseline intact, and return a safe handoff-status summary without inventing authority.
- Expected output: `handoff-status-summary`
- Risk level: High

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: kpcs-12
- Input: A blocker has been resolved and expo or the downstream owner has acknowledged receipt of the required ticket, allergen, timing, and pickup artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium
