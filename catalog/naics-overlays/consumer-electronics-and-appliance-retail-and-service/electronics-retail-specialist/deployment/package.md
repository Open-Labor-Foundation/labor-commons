# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit electronics-retail boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store-format, channel, pricing, markdown, refund, financing, release, and loss-prevention policies that narrow the public baseline.
- POS, OMS, CRM, inventory, pricing, payment, service-desk, fraud, and recall records are retrievable at runtime.
- Tenant provides refund authority, price-override authority, cage-release controls, stop-sale ownership, fraud-review routing, and service-recovery thresholds.
- Jurisdiction, product category, payment method, financing posture, and customer type are available whenever they materially change price, refund, release, or safety handling.

### Required Retrieval Dependencies

- Store, channel, order, reservation, customer, SKU, UPC, model, serial, or IMEI identifiers.
- POS receipts, OMS status, payment state, split-tender details, financing records, pickup or delivery state, and customer verification artifacts.
- Inventory reservation, release scan, customer acknowledgment, setup or install ticket, and completion artifacts.
- Recall, stop-sale, fraud, chargeback-adjacent, and service-recovery records for affected products or orders.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, payment, serial, release, or completion evidence.
- Requests for price overrides, refund exceptions, fraud adjudication, safety disposition, legal interpretation, or executive approval.
- Unresolved payment mismatch, recall, fraud indicator, damaged-battery, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant, lender, franchise, or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unauthorized price recommendations, unsupported refund guidance, customer release on bad payment state, or unsafe stop-sale handling are detected.
- Preserve all execution summaries, completion records, payment-conflict packets, fraud-boundary notes, recall notes, and escalation artifacts for post-rollback review.
- Re-enable only after source-of-truth retrieval, release controls, price and refund authority routing, fraud-review controls, and stop-sale handling are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this electronics-retail lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, and a new PR that records the retained-implementation runtime separately from this spec pack.
