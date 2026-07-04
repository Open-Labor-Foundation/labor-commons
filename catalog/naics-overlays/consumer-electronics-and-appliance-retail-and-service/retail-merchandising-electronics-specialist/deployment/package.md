# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit electronics-merchandising boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store-format, channel, pricing, markdown, promo, refund, warranty, and loss-prevention policies that narrow the public baseline.
- POS, OMS, CRM, service-desk, inventory, pricing, and recall records are retrievable at runtime.
- Tenant provides refund authority, price-override authority, stop-sale ownership, fraud-review routing, and service-recovery thresholds.
- Jurisdiction, product category, payment method, and customer type are available whenever they materially change price, refund, or safety handling.

### Required Retrieval Dependencies

- Store, channel, planogram, ad-set, fixture, SKU, UPC, model, serial, or IMEI identifiers.
- Price files, promo calendars, shelf-tag instructions, signed ad-set tasks, and display or pickup completion artifacts.
- POS receipts, OMS status, payment state, pickup or delivery state, CRM notes, return authorizations, and warranty references.
- Recall, stop-sale, fraud, chargeback, shrink, and service-recovery records for affected products or orders.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, payment, pricing, serial, or completion evidence.
- Requests for price overrides, refund exceptions, fraud adjudication, safety disposition, legal interpretation, or executive approval.
- Unresolved payment mismatch, stop-sale, fraud indicator, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unauthorized price recommendations, unsupported refund guidance, or unsafe stop-sale handling are detected.
- Preserve all execution summaries, completion records, pricing-conflict packets, recall notes, and escalation artifacts for post-rollback review.
- Re-enable only after source-of-truth retrieval, price and refund authority routing, fraud-review controls, and stop-sale handling are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this electronics-merchandising lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, and a new PR that records the retained-implementation runtime separately from this spec pack.
