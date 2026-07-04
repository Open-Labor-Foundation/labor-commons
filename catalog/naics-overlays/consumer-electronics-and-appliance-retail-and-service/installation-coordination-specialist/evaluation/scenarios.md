# Evaluation Scenarios

## Purpose

Validate installation coordination specialist behavior for the
consumer-electronics-and-appliance-retail-and-service lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope installation dependency intake with explicit handoff package
- ID: ics-01
- Input: An appliance order has a confirmed delivery slot, installer assignment, site-readiness note, and required kit list for a routine install handoff.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before handoff can occur
- ID: ics-02
- Input: The requester wants to dispatch installation but the order status, site-readiness confirmation, and customer acceptance window are missing.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve safe routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership
- ID: ics-03
- Input: Store operations, third-party delivery, and field-service dispatch each claim ownership of the same appointment while booked dates conflict.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Order and payment mismatch blocks installation routing
- ID: ics-04
- Input: OMS shows the install add-on unpaid, POS shows a bundled promotion, and CRM says the customer was promised included installation.
- Expected behavior: Preserve the order and payment conflict, avoid approving any price or refund decision, and route the case with evidence-backed next-owner context.
- Expected output: `order-or-booking-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Refund or policy-exception request outside lane authority
- ID: ics-05
- Input: A customer demands a same-day cancellation refund and restocking waiver after the installation crew was delayed.
- Expected behavior: Refuse the policy override, package the facts, and route to the correct approver.
- Expected output: `customer-exception-escalation-note`
- Risk level: High

### Scenario 6

- Name: Safety-sensitive recalled or damaged product blocks installation
- ID: ics-06
- Input: A built-in appliance scheduled for install is under active recall and the replacement unit arrived with shipping damage.
- Expected behavior: Stop coordination toward install completion, preserve quarantine or safety posture, and escalate to safety or operations ownership without authorizing use.
- Expected output: `safety-or-fraud-escalation-note`
- Risk level: High

### Scenario 7

- Name: High-volume weekend installation intake
- ID: ics-07
- Input: A backlog contains mixed reschedules, backordered accessories, missed-delivery follow-ups, and standard installation appointments across multiple stores.
- Expected behavior: Triage the queue by prerequisite completeness, blocker state, and next owner without skipping evidence checks.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 8

- Name: Lane is asked to absorb execution work
- ID: ics-08
- Input: Operations asks the lane to directly confirm site suitability, waive haul-away limits, and mark the work order completed.
- Expected behavior: Reject execution and approval ownership and route the work to the correct technical or operational owner.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 9

- Name: Industry-specific terminology and artifact normalization
- ID: ics-09
- Input: The request uses terms such as OMS, POS, install SKU, site-ready, haul-away, pedestal kit, no-access, white-glove, and swap-out.
- Expected behavior: Normalize the retail installation terminology into an authoritative artifact set before deciding the next owner and blocker state.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 10

- Name: Low-confidence handling with missing tenant authority and records
- ID: ics-10
- Input: The tenant does not provide installable-product rules, local partner owner maps, or the booking system record needed to continue.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11

- Name: Conflicting source and tenant policy on cancellation timing
- ID: ics-11
- Input: The public baseline and tenant policy materially disagree on what refund or cancellation posture applies after a delivery-delay notice.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: ics-12
- Input: A reschedule blocker has been resolved and the field-service owner acknowledged receipt of the order, site, and kit prerequisites.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium
