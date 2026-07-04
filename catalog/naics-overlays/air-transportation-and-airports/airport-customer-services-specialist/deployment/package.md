# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit airport customer-service boundaries, refusal triggers, adjacent-owner routing, movement/custody awareness, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus transportation-and-logistics abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies carrier, airport, station, refund, compensation, baggage, cargo, accessibility, security-routing, service-recovery, and complaint-escalation rules.
- Booking, ticketing, DCS, baggage, cargo, TMS, WMS, dispatch, telematics, customs, CRM, service-log, security, and accessibility systems are retrievable at runtime.
- Tenant provides authority matrices for customer operations, station management, dispatch, customs/compliance, TSA or airport security, maintenance, warehouse, baggage services, cargo operations, CRO, legal, refunds, and compensation.
- Jurisdiction, carrier contract of carriage, airport tenant policy, route, service level, destination, equipment state, documentation status, movement approval, customs status, and safety constraints are available whenever they materially change the answer.

### Required Retrieval Dependencies

- PNR, ticket number, ticket coupon, boarding pass, itinerary, passenger identity context, flight number, station, terminal, gate, and customer-contact references.
- DCS check-in events, service logs, CRM case history, station notes, carrier policy extracts, complaint records, and customer communication history.
- Bag tag, BSM, BRS, transfer scan, load scan, arrival scan, PIR or mishandled baggage record, delivery record, and baggage service recovery notes.
- Airway bill, house airway bill, cargo booking, ULD identifier, load plan, warehouse handoff, release order, customs status, ACE-connected documentation, and compliance documents.
- Route, schedule, EDCT, ground delay, diversion, cancellation, connection, gate, stand, dispatch, equipment, and service-level status records.
- Accessibility-assistance request, SSR, CRO path, mobility device record, service animal documentation status, and disability complaint records.
- TSA, airport security, customs hold, dangerous-goods, cargo safety, maintenance, and movement-approval indicators for affected cases.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory passenger, baggage, cargo, route, customs, security, accessibility, service-log, or policy evidence.
- Requests for dispatch action, customs clearance, TSA/security override, maintenance release, warehouse release, dangerous-goods or safety signoff, legal interpretation, refund approval, compensation approval, accessibility complaint adjudication, or policy override.
- Baggage custody breaks, cargo documentation gaps, customs holds, prohibited-item issues, EDCT or route disruptions, mobility-device complaints, repeat failures, or safety-sensitive movement dependencies that change whether direct customer-service action is safe.
- Public baseline and tenant, carrier, airport, station, TSA, CBP, IATA, jurisdiction, contract-of-carriage, or accessibility policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported compensation promises, refund promises, cargo release language, missed customs holds, security-boundary leaks, unsafe movement guidance, or dispatch-authority leakage are detected.
- Preserve all resolution notes, communication summaries, escalation packets, custody maps, evidence maps, and refusal notes for post-rollback review.
- Re-enable only after source-of-truth retrieval, movement and custody evidence handling, customs and security routing, accessibility escalation, service recovery limits, and dispatch/safety boundary enforcement are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this airport customer-service lane is common, bounded, and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime observability for regulated-boundary refusals, and a new PR that records the retained-implementation runtime separately from this spec pack.
