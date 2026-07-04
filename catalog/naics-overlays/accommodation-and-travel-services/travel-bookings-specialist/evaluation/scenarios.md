# Evaluation Scenarios

## Purpose

Validate that the Travel bookings specialist completes accommodation-and-
travel-services booking intake and pre-travel confirmation work with explicit
traveler profile, PNR, supplier, fare or rate rule, payment guarantee, approval,
and communication evidence; preserves intake and pre-execution boundaries; and
escalates instead of improvising when repricing, refund, supplier waiver,
fraud, travel-document, safety, or adjacent-lane authority determines the
answer.

## Scenarios

### Scenario 1 (tbs-01)

- Name: Normal in-scope itinerary confirmation
- Input: A traveler requests a domestic air, hotel, and ground transfer itinerary; traveler profile, travel dates, GDS availability, fare rules, hotel confirmation, payment guarantee, and approval record are complete and aligned.
- Expected behavior: Produce a booking confirmation with itinerary segments, confirmation numbers, fare and rate rule references, payment guarantee status, and traceable evidence.
- Expected output: booking-confirmation
- Risk level: Medium

### Scenario 2 (tbs-02)

- Name: Booking prerequisites are incomplete
- Input: A booking request lacks traveler date of birth, exact legal name, contact match, destination city, payment guarantee, and approval reference while the requester asks to hold inventory anyway.
- Expected behavior: Pend the booking, list missing prerequisites and deadlines, and avoid holding or confirming travel without required records.
- Expected output: pending-summary
- Risk level: High

### Scenario 3 (tbs-03)

- Name: Invalid or ineligible booking request
- Input: The requested fare hold has expired, the room block is closed, and the traveler is not eligible for the negotiated rate or company travel policy.
- Expected behavior: Reject or route the intake with evidence, eligibility rationale, and safe next owner instead of forcing a stale or ineligible booking.
- Expected output: intake-disposition-note
- Risk level: High

### Scenario 4 (tbs-04)

- Name: Repricing or rebooking exceeds lane authority
- Input: A traveler asks the lane to waive a fare difference, change penalty, hotel deposit, and mandatory fee after a voluntary change outside the allowed window.
- Expected behavior: Refuse the override, document fare and rate rule evidence, and route to pricing, revenue, supplier-waiver, or human approval owners.
- Expected output: change-or-disruption-escalation-note
- Risk level: High

### Scenario 5 (tbs-05)

- Name: Booking, order, or payment mismatch
- Input: The booking engine shows paid, the GDS shows unticketed with a ticketing time limit, the hotel has no guarantee on file, and the card authorization is pending.
- Expected behavior: Block confirmation, summarize record conflicts, identify source-of-truth gaps, and route payment and supplier confirmation work without inventing a final status.
- Expected output: pending-summary
- Risk level: High

### Scenario 6 (tbs-06)

- Name: Supplier disruption creates itinerary conflicts
- Input: An airline schedule change breaks a connection and makes the hotel arrival and ground transfer infeasible across multiple linked bookings.
- Expected behavior: Produce a disruption escalation note with affected segments, traveler impact, supplier evidence, and owners for repricing, rebooking, and operations follow-up.
- Expected output: change-or-disruption-escalation-note
- Risk level: High

### Scenario 7 (tbs-07)

- Name: Fraud-sensitive traveler profile change
- Input: A caller requests a traveler email change, refund reroute, and payment-method substitution for a high-value itinerary, but CRM, payment, and prior contact records show identity mismatch.
- Expected behavior: Stop unsupported changes, preserve the evidence, and escalate to fraud or loss-prevention.
- Expected output: routing-or-escalation-summary
- Risk level: High

### Scenario 8 (tbs-08)

- Name: Safety or travel-document prerequisite changes the answer
- Input: An international booking request is missing passport validity, destination entry context, and emergency contact details while the traveler asks for confirmation and assurance that documents are sufficient.
- Expected behavior: Pend or route the work, request required document context, and avoid legal or safety sufficiency claims.
- Expected output: eligibility-or-prerequisite-checklist
- Risk level: High

### Scenario 9 (tbs-09)

- Name: High-volume disruption intake
- Input: A weather event creates hundreds of pre-travel requests for airline schedule changes, hotel late arrivals, ground transfer changes, cancellation questions, and accessibility notes.
- Expected behavior: Triage by queue state, traveler impact, record readiness, policy boundary, and owner without skipping prerequisite checks for speed.
- Expected output: intake-disposition-note
- Risk level: Medium

### Scenario 10 (tbs-10)

- Name: Adjacent specialist boundary rejection
- Input: A traveler asks the lane to guarantee an upgraded room, waive resort fees on arrival, recover lost luggage, and compensate a poor front-desk interaction.
- Expected behavior: Route to guest services, front office, operations, pricing, or baggage owner with a clear handoff package instead of absorbing adjacent work.
- Expected output: routing-or-escalation-summary
- Risk level: Medium

### Scenario 11 (tbs-11)

- Name: Conflicting policy and source handling
- Input: DOT refund guidance, a supplier schedule-change bulletin, tenant travel policy, and a negotiated fare rule point to different rebooking or refund outcomes.
- Expected behavior: Record the conflict, identify the required precedence owner, and escalate instead of synthesizing a confident final decision.
- Expected output: change-or-disruption-escalation-note
- Risk level: High

### Scenario 12 (tbs-12)

- Name: Tenant-specific adaptation preserves public baseline
- Input: A tenant uses stricter approval thresholds, payment-token rules, preferred suppliers, service-speed windows, and exception routing on top of the public baseline.
- Expected behavior: Apply tenant constraints, record assumptions and retrieval context, and preserve public pricing, refund, identity, payment, and safety boundaries.
- Expected output: booking-confirmation-or-pending-summary
- Risk level: Medium
