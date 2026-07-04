# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and separate committed build artifacts.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit travel booking boundaries, refusal triggers, adjacent-owner routing, intake states, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus intake-access-and-initiation plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario-family coverage, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies booking policy, traveler eligibility rules, payment guarantee rules, approval thresholds, supplier contracts, negotiated rates, waiver matrices, refund constraints, accessibility handling rules, safety/security escalation rules, and service-level windows.
- Booking engine, GDS or reservation platform, CRS/PMS, supplier portals, CRM, traveler profile, payment workflow, approval workflow, queue management, and traveler communications systems are retrievable at runtime.
- Tenant provides authority matrices for guest services, front office, pricing/revenue, refund operations, supplier relations, fraud or loss-prevention, operations, safety/security, travel compliance, and human approval owners.
- Jurisdiction, destination, supplier, processor, brand, and tenant travel-policy context is available whenever it materially changes the answer.

### Required Retrieval Dependencies

- Traveler legal-name fields, profile identifiers, contact match, requester authority, approval records, traveler type, loyalty details, accessibility notes, and itinerary request details.
- PNRs, record locators, booking-engine carts, GDS or supplier records, hotel confirmations, room or rate plans, fare basis, fare rules, ticketing time limits, cancellation windows, deposits, mandatory fees, and change logs.
- Payment guarantee, card-token or approved payment workflow reference, authorization status, deposit status, billing profile, cost center, and payment exception notes.
- Supplier schedule-change notices, waiver bulletins, inventory failure notices, waitlist state, disruption records, missed-connection analysis, and traveler-impact notes.
- Travel-document prerequisite context, destination or advisory context, emergency contact requirements, and tenant-authorized compliance routing when relevant.
- Fraud or loss-prevention signals, profile-change requests, refund reroute requests, account-recovery events, and payment-data handling requirements for affected cases.

### Regulated-lane Caveats

- DOT air-travel refund and consumer-protection guidance constrains booking-change, cancellation, schedule-change, refund, and ticket-agent boundary handling.
- eCFR air-fare advertising rules and FTC short-term lodging and travel-agent fee guidance constrain traveler-facing fare, fee, tax, optional-service, and mandatory-fee representations.
- DOJ ADA lodging reservation rules constrain accessible-room reservation descriptions, holding, blocking, and accommodation-sensitive booking handling.
- TSA and State Department guidance identifies travel identity and international travel prerequisites, but this lane must not provide legal or immigration sufficiency advice.
- FTC Red Flags guidance and PCI SSC standards constrain identity mismatch, suspicious account-change, refund-reroute, payment substitution, and cardholder-data handling.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory traveler, PNR, supplier, fare or rate rule, payment, approval, document-prerequisite, or disruption evidence.
- Requests for pricing override, fare-difference waiver, fee waiver, refund approval, supplier-waiver interpretation, chargeback handling, payment reversal, room-control decision, compensation approval, fraud finding, legal advice, travel-document sufficiency determination, or safety signoff.
- Identity mismatch, suspected account takeover, refund reroute, payment substitution, or insecure cardholder-data handling conditions.
- Public baseline and tenant, supplier, processor, destination, jurisdiction, or travel-policy rules conflict without explicit precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns pre-travel booking intake, itinerary creation, booking changes, prerequisite validation, confirmation readiness, or traveler-facing exception routing before travel begins.
- Keep the lane isolated from direct payment processing, ticketing execution, supplier-waiver decisioning, refund operations, financial adjustments, room inventory control, on-property guest services, and safety/security determinations.
- Log booking confirmations, pending summaries, prerequisite checklists, intake dispositions, escalation notes, refusal reasons, and authoritative record references.
- Alert on repeated unsupported no-cost rebooking promises, fee-waiver language, refund or credit promises, payment-data handling violations, travel-document sufficiency claims, or supplier-disruption under-escalation.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund or fee promises, untraceable confirmations, skipped identity or payment checks, unsafe document or safety claims, payment-data exposure, or cross-lane authority leaks are detected.
- Preserve all booking confirmations, pending summaries, escalation packets, evidence maps, and source-selection notes for post-rollback review.
- Re-enable only after source-of-truth retrieval, prerequisite validation, fare and fee boundary handling, fraud stops, supplier disruption routing, and payment-security controls are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent travel-bookings-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this travel-bookings lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, operational monitoring for boundary drift, and a new PR that records retained-implementation runtime artifacts separately from this spec pack.
