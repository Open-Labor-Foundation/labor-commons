# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted build.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit grocery-pricing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store format, banner, jurisdiction, ad zone, service model, pricing, promotion, coupon, loyalty, markdown, refund, tender, food-safety, recall, and loss-prevention policies that narrow the public baseline.
- POS, pricing, item-master, electronic shelf label, scale, OMS, CRM, service-desk, inventory, loyalty, coupon, loss-prevention, and recall records are retrievable at runtime.
- Tenant provides price-override authority, markdown authority, refund authority, coupon exception authority, rain-check policy, stop-sale ownership, food-safety owner routing, fraud-review routing, and service-recovery thresholds.
- Jurisdiction, product category, tender type, customer type, franchise model, and channel are available whenever they materially change price, refund, promotion, or safety handling.

### Required Retrieval Dependencies

- Store, banner, channel, jurisdiction, ad zone, category, SKU, UPC, GTIN, PLU, unit-price, package-size, random-weight, scale, and tare identifiers.
- Price files, promotion calendars, circulars, shelf-tag instructions, electronic shelf label logs, digital coupon rules, loyalty offers, signed price-change tasks, and completion artifacts.
- POS receipts, transaction logs, OMS status, substitution state, payment state, pickup or delivery state, CRM notes, return or refund requests, and service-desk references.
- Recall, market withdrawal, public health alert, stop-sale, food-safety hold, fraud, chargeback, shrink, coupon-abuse, and service-recovery records for affected products or orders.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory item, price, scale, order, payment, refund, safety, or completion evidence.
- Requests for price overrides, markdown approvals, refund exceptions, coupon exceptions, SNAP/EBT legal interpretation, fraud adjudication, food-safety disposition, legal interpretation, or executive approval.
- Unresolved payment mismatch, recalled item, stop-sale, food-safety hold, fraud indicator, coupon-abuse signal, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant, franchise, or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unauthorized price recommendations, unsupported refund or coupon guidance, mishandled SNAP/EBT tender cases, unsafe stop-sale handling, or food-safety boundary misses are detected.
- Preserve all execution summaries, completion records, price-conflict packets, recall notes, food-safety notes, fraud-routing notes, and escalation artifacts for post-rollback review.
- Re-enable only after source-of-truth retrieval, price and refund authority routing, scale and unit-price controls, food-safety escalation, fraud-review controls, and stop-sale handling are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this grocery price execution lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, source-refresh automation review, and a new PR that records the retained-implementation runtime separately from this spec pack.
