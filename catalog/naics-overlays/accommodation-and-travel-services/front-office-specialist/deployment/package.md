# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit
  governance signoff, repeated runtime demand, stable validation history, and a
  separate retained-implementation package commit.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit accommodation and travel front-office intake
  boundaries, refusal triggers, adjacent-owner routing, and tenant fact
  requirements.
- `evaluation/functionality-map.json` covering shared plus
  `intake-access-and-initiation` plus `retail-consumer-and-hospitality`
  abilities.
- `evaluation/research-summary.json` with source classes, workflow stages,
  artifacts, systems of record, decision boundaries, scenario-family coverage,
  and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete
  scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies check-in, ID, early-arrival, room-readiness, accessible-room,
  overbooking, walk, key-control, VIP, refund, fee, payment, fraud, safety, and
  escalation policies.
- PMS, CRS or booking engine, CRM, payment preauthorization, folio ledger,
  room-status or housekeeping board, front-desk operations, itinerary or
  supplier, incident, and fraud systems are retrievable at runtime.
- Tenant provides authority matrices for front office, guest services,
  revenue or pricing, operations, fraud or loss-prevention, safety or
  compliance, supplier, and manager escalation.
- Jurisdiction, brand standards, supplier contracts, processor rules, property
  rules, and emergency plans are available whenever they materially change the
  answer.

### Required Retrieval Dependencies

- Confirmation numbers, booking-source references, stay dates, property
  identifiers, guest profile references, and itinerary segment identifiers.
- Reservation status, room type, accessible-room features, package inclusions,
  cancellation terms, late-arrival notes, OTA vouchers, and special requests.
- PMS folio, incidental holds, preauthorization status, payment guarantee,
  merchant-of-record details, refund status, and prior billing dispute notes.
- Room-status board, housekeeping clean or inspected state, out-of-order notes,
  do-not-move notes, walk list references, and key-control prerequisites.
- CRM notes, prior contacts, VIP handling flags, identity-verification signals,
  fraud or loss-prevention flags, safety notes, and guest-service escalation
  history.

### Regulated-lane Caveats

- ADA lodging reservation obligations constrain accessible-room descriptions,
  reservation blocking, and accessible-room intake handling.
- FTC short-term-lodging fee guidance constrains rate, fee, and mandatory-price
  disclosure handling when front-office records conflict with guest or OTA
  expectations.
- DOT aviation refund guidance constrains itinerary, ticket-agent,
  merchant-of-record, significant-change, ancillary-fee, and 24-hour
  cancellation routing.
- CFPB billing-error guidance constrains folio, duplicate charge, and
  refund-not-posted handling when issuer-versus-merchant boundaries determine
  the next step.
- FTC Red Flags, CDC accommodation outbreak guidance, and PCI SSC guidance
  constrain identity-mismatch, public-health, fraud, and payment-data handling.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or
  contradictory reservation, folio, payment, identity, room, itinerary,
  accessibility, safety, or fraud evidence.
- Requests for pricing override, refund exception approval, fee waiver,
  compensation approval, room-control decisions, walk decisions, legal
  interpretation, fraud decisioning, or safety signoff.
- Public-health, security, suspicious identity, loss-prevention, or
  payment-data-handling conditions that change whether check-in or routing is
  safe.
- Public baseline and tenant, brand, supplier, processor, property, or
  jurisdiction policy conflict without explicit precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns front-office arrival
  intake, check-in readiness, reservation or itinerary verification, payment
  guarantee, identity context, room-readiness blockers, or owner routing before
  service execution begins.
- Keep the lane isolated from direct payment processing, financial
  adjustments, refund approval, rate protection, room inventory control,
  safety clearance, fraud adjudication, and operational execution actions.
- Log front-office disposition notes, prerequisite checklists, routing notes,
  escalation summaries, refusal reasons, and the authoritative record
  references used for each output.
- Alert on repeated unsupported check-in clearances, rate or refund promises,
  accessible-room overpromises, payment-data handling violations, ignored
  fraud or safety stops, or room-control authority drift.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported check-in
  clearances, privacy leaks, payment-security violations, unsafe safety
  handling, or cross-lane authority leaks are detected.
- Preserve all disposition notes, prerequisite checklists, routing notes,
  escalation summaries, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, prerequisite validation,
  accessibility handling, payment guarantee controls, fraud stops, safety
  boundaries, and routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent front-office-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is
  explicitly approved and committed.
- Promote only after repeated production usage shows this front-office intake
  lane is common, stable, and valuable enough to justify a maintained runtime
  build.
- Promotion requires formal validation signoff, updated readiness evidence,
  operational monitoring for boundary drift, tenant retrieval controls, and a
  new PR that records the retained-implementation runtime separately from this spec pack.
