# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit accommodation guest-communications boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies service-recovery matrices, approval thresholds for compensation, fee waivers, refunds, accessible-room exceptions, and escalation SLAs.
- PMS, CRS or booking engine, CRM, contact-center, guest-messaging, service-recovery, payment, and incident systems are retrievable at runtime.
- Tenant provides authority matrices for front office, lodging revenue, operations, fraud or loss-prevention, safety or compliance, and executive escalation.
- Jurisdiction, brand standards, supplier contracts, emergency plans, and processor rules are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Confirmation numbers, folio identifiers, stay dates, property identifiers, and guest profile references.
- Reservation status, room type, package inclusions, cancellation terms, incidental holds, fee displays, refund status, and prior dispute or complaint history.
- Messaging transcripts, call notes, service tickets, prior service-recovery actions, and approved recovery-offer records.
- Outage notices, room out-of-order logs, maintenance or transport disruption records, and incident or public-health escalation references.
- Accessibility notes, alternate-format needs, service-animal or mobility context, and property-specific room-feature descriptions when relevant.
- Fraud or loss-prevention signals, account-change requests, and payment-data handling requirements for affected cases.

### Regulated-lane Caveats

- ADA lodging reservation and effective-communication obligations narrow what may be promised about accessible rooms, alternate formats, and stay assistance.
- FTC short-term-lodging fee rules constrain guest-facing price, fee, and amenity communication, especially after disruptions or service failures.
- CFPB billing-error boundaries constrain folio and refund communication when the issuer-versus-merchant boundary determines the next step.
- CDC outbreak guidance and local safety or compliance plans constrain outbound safety messaging and guest notification handling.
- PCI SSC call-center payment-security guidance constrains how payment-card data can be handled in contact-center and messaging workflows.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory reservation, folio, payment, recovery, accessibility, or incident evidence.
- Requests for pricing override, refund exception approval, compensation approval, room-control decisions, legal interpretation, fraud decisioning, or safety signoff.
- Outbreak, security, suspicious identity, or payment-data-handling conditions that change whether direct communication is safe.
- Public baseline and tenant, brand, supplier, processor, or jurisdiction policy conflict without explicit precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns guest-facing status, expectation control, disruption communication, or service-recovery wording.
- Keep the lane isolated from direct payment processing, financial adjustments, room inventory control, and operational execution actions.
- Log guest communication summaries, escalation notes, refusal reasons, and the authoritative record references used for each output.
- Alert on repeated unsupported compensation promises, fee-waiver language, inaccessible-room overpromises, payment-data handling violations, or safety-language drift.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund or fee promises, privacy leaks, unsafe outbreak messaging, or cross-lane authority leaks are detected.
- Preserve all guest communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, accessibility-aware communication, fee-disclosure handling, fraud stops, and safety boundary enforcement are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent guest-communications-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this guest-communications lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, operational monitoring for boundary drift, and a new PR that records the retained-implementation runtime separately from this spec pack.
