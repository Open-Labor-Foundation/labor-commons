# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit accommodation hotel-operations boundaries, refusal triggers, lifecycle states, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies room-readiness criteria, room-release authority, staffing model, labor or union constraints, service-level expectations, service-recovery matrix, and escalation SLAs.
- PMS, CRS or booking engine, housekeeping, work-order, staffing, service-ticket, guest messaging, payment, incident, safety, and fraud systems are retrievable at runtime.
- Tenant provides authority matrices for front office, housekeeping, maintenance, rooms division, guest services, lodging revenue, fraud or loss-prevention, safety or security, compliance, and property leadership.
- Jurisdiction, brand standards, emergency plans, payment processor rules, local public-health direction, and property-specific operating policies are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Property, date, shift, service model, occupancy target, arrivals, departures, stayovers, no-shows, accessible-room status, VIP notes, room assignments, and room inventory states.
- PMS room status, housekeeping board, room-turn queue, inspection notes, DND status, out-of-order and out-of-service logs, linen or amenity constraints, and room-release evidence.
- Work orders, engineering tickets, outage logs, maintenance closeout notes, service tickets, guest-impact notes, and approved service-recovery records.
- Staffing roster, callout log, coverage constraints, labor rules, cross-training limits, shift handoff notes, and supervisor approval evidence.
- Incident reports, public-health guest lists, safety or security logs, PMS cyber-risk notes, fraud or loss-prevention signals, and payment-data handling requirements.
- Closure checklist, timestamps, accountable owner, approval records, unresolved blocker register, and audit trail.

### Regulated-Lane Caveats

- FTC short-term-lodging fee guidance constrains operational responses to resort-fee, amenity-fee, and outage-related pricing complaints.
- CFPB billing-error guidance constrains folio, duplicate charge, incidental hold, and refund-not-posted communication when merchant-versus-issuer boundaries matter.
- DOJ ADA lodging reservation rules constrain accessible-room descriptions, holding, blocking, substitution, and room-control handling.
- CDC outbreak guidance and local safety or public-health plans constrain guest-list handling and outbound safety statements.
- CISA lodging security guidance constrains property-security and guest-safety incident handling.
- NIST hospitality PMS guidance and PCI SSC payment-security guidance constrain how PMS and cardholder-data risks are handled.
- FTC Red Flags guidance constrains operational actions when identity mismatch, account takeover, refund reroute, or guest-profile update signals appear.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory PMS, CRS, housekeeping, work-order, staffing, ticketing, incident, payment, safety, fraud, or approval evidence.
- Requests for pricing override, refund exception approval, fee waiver, compensation approval, oversell or walk strategy, room-control decision, accessible-room substitution, legal interpretation, fraud decisioning, engineering clearance, safety signoff, or executive approval.
- Outbreak, physical security, PMS cyber-risk, suspicious identity, or payment-card handling conditions that change whether direct execution is safe.
- Public baseline and tenant, brand, labor, supplier, processor, jurisdiction, emergency, or property policy conflict without explicit precedence resolution.
- Request to mark work complete without authoritative closure evidence.

## Deployment Notes

- Route this lane only when the controlling request is hotel operations execution, exception handling, occupancy status, room readiness, staffing coordination, service-ticket movement, outage handling, or completion evidence.
- Keep the lane isolated from direct financial adjustments, room-control approval, front-office check-in authority, legal interpretation, engineering clearance, safety signoff, and fraud adjudication.
- Log operations status updates, exception queue notes, completion evidence records, refusal reasons, and authoritative record references for each output.
- Alert on repeated unsupported room releases, completion without evidence, refund or fee-waiver promises, unsafe safety closure, identity-workaround attempts, or cross-lane authority drift.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported completion, unsafe room release, pricing or refund promises, privacy leaks, payment-data handling violations, fraud workarounds, or safety-language drift are detected.
- Preserve all operations status updates, exception packets, completion evidence records, and source maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, lifecycle-state movement, completion evidence, pricing and refund boundary handling, accessible-room boundary handling, fraud stops, and safety escalation are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent hotel-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this hotel-operations lane is common, stable, and valuable enough to justify maintained runtime behavior.
- Promotion requires formal validation signoff, updated readiness evidence, operational monitoring for boundary drift, and a new PR that records the retained-implementation runtime separately from this spec pack.
