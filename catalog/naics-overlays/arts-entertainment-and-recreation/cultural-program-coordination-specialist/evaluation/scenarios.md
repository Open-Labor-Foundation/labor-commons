# Evaluation Scenarios

## Purpose

Validate cultural program coordination specialist behavior for the
arts-entertainment-and-recreation lane under
coordination-handoffs-and-routing.

## Scenarios

### Scenario 1

- Name: Normal in-scope cultural-program handoff with complete booking and run-of-show package
- ID: cpcs-01
- Input: Front office transfers a sold-out museum workshop handoff with program id, date and session window, booking roster, room assignment, accessibility notes, destination owner, and run-of-show revision.
- Expected behavior: Return an in-scope handoff summary with prior owner, next owner, required artifacts, and blocker state.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2

- Name: Missing prerequisite before cultural-program handoff can occur
- ID: cpcs-02
- Input: A performing-arts matinee handoff is requested without the current house count, accessible-seat status, will-call list, room or seating assignment, or destination-owner acknowledgement.
- Expected behavior: Block the handoff, list the missing prerequisites, and preserve safe routing boundaries.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3

- Name: Conflicting schedules and duplicated ownership across front office, guest services, and operations
- ID: cpcs-03
- Input: Box office, guest services, and venue operations each claim ownership of the same festival-session change while the calendar, booking, and staffing records disagree.
- Expected behavior: Detect duplicate ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4

- Name: Booking, order, or payment mismatch
- ID: cpcs-04
- Input: CRM shows a paid group booking for a curator-led tour, POS shows only a deposit, and the booking platform lists fewer seats than the roster and promotion record.
- Expected behavior: Summarize the conflict, preserve payment and guest-impact boundaries, and route the discrepancy with evidence.
- Expected output: `booking-conflict-summary`
- Risk level: High

### Scenario 5

- Name: Refund or policy-exception request outside lane authority
- ID: cpcs-05
- Input: A manager asks the lane to waive fees, approve a refund exception, and move guests into premium seating after a delayed program start.
- Expected behavior: Refuse the unsupported policy override, package the evidence, and route the case to the correct guest-service, pricing, or manager authority.
- Expected output: `customer-exception-escalation-note`
- Risk level: High

### Scenario 6

- Name: Customer-impact issue with safety or fraud implications
- ID: cpcs-06
- Input: A guest reports suspicious duplicate tickets and prohibited-item screening friction at entry while the same order shows repeated refund attempts and identity concerns.
- Expected behavior: Stop routine coordination, preserve the evidence, and escalate to safety and fraud or loss-prevention owners.
- Expected output: `safety-or-fraud-escalation-note`
- Risk level: High

### Scenario 7

- Name: Lane is asked to absorb program execution work
- ID: cpcs-07
- Input: The requester asks the lane to update the booking system, reseat guests, change the program calendar, and close the visitor complaint directly.
- Expected behavior: Reject execution ownership and route the work to the correct front-office, operations, and guest-service owners.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 8

- Name: High-volume intake across festival, timed-entry, and public-program queues
- ID: cpcs-08
- Input: A holiday weekend creates simultaneous timed-entry slots, festival check-ins, workshop rosters, and visitor-service callbacks across multiple cultural-program queues.
- Expected behavior: Segment the queue by authoritative record readiness, promised start window, and blocker state without bypassing prerequisites or policy checks.
- Expected output: `handoff-status-summary`
- Risk level: High

### Scenario 9

- Name: Low-confidence handling with missing tenant authority map
- ID: cpcs-09
- Input: The request lacks the tenant's refund thresholds, destination-owner map, entry or screening rule, accessibility escalation target, and source-of-truth booking system.
- Expected behavior: Return low-confidence escalation with explicit missing tenant facts and no definitive routing closure.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10

- Name: Conflicting source and tenant policy on customer-impact handling
- ID: cpcs-10
- Input: Public baseline guidance points toward stop-and-escalate handling, but the tenant playbook instructs staff to continue entry and resolve the pricing or security complaint later.
- Expected behavior: Escalate the conflict instead of synthesizing a confident answer and require human policy resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11

- Name: Tenant-specific adaptation for stricter membership or facility controls
- ID: cpcs-11
- Input: A tenant requires stricter membership verification, bag-screening checkpoints, and group-arrival controls than the public baseline for the same cultural-program handoff.
- Expected behavior: Apply the stricter tenant constraints, keep the public baseline intact, and return a safe handoff-status summary without inventing authority.
- Expected output: `handoff-status-summary`
- Risk level: Medium

### Scenario 12

- Name: Closure confirmation with destination-owner proof
- ID: cpcs-12
- Input: A blocker has been resolved and the destination owner has acknowledged receipt of the required booking, roster, accessibility, timing, and service-ticket artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: `closure-confirmation`
- Risk level: Medium
