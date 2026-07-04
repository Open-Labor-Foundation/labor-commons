# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit food-service boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies reservation, refund, promotion, no-show, service-recovery, chargeback, fraud, and safety-routing rules.
- POS, PMS, booking, CRM, order-management, service-desk, inventory, staffing, and payment systems are retrievable at runtime.
- Tenant provides authority matrices for guest recovery, pricing, refunds, fraud review, food-safety handling, and executive escalation.
- Jurisdiction, franchise context, delivery-app agreements, service model, and premium-brand policy context are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Site identifiers, service channels, bookings, orders, reservations, guest records, and service tickets.
- Payment, deposit, refund, surcharge, service-charge, promotion, and no-show policy records.
- Inventory availability, staffing coverage, seating, prep, catering, and queue-state records.
- Delivery-app, complaint, and service-recovery artifacts for affected cases.
- Food-safety, illness, chargeback, fraud, and loss-prevention indicators when present.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory booking, payment, capacity, or policy evidence.
- Requests for pricing override, refund exception approval, comp authorization, food-safety disposition, fraud decisioning, or final operational approval.
- Customer harm, fraud, or food-safety conditions that change whether direct action is safe.
- Public baseline and tenant, franchise, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund promises, missed fraud holds, unsafe food-safety communication, or cross-lane authority leaks are detected.
- Preserve all resolution notes, communication summaries, escalation packets, and recommendation evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, capacity-risk routing, fraud-stop handling, and food-safety boundary enforcement are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
