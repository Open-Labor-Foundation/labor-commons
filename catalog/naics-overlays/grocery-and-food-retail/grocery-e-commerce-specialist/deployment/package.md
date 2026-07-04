# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit grocery e-commerce boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and systems-of-record expectations.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store format, service model, fulfillment channel, delivery area, substitution, out-of-stock, refund, price-adjustment, coupon, SNAP online purchasing, pickup release, delivery exception, fraud-review, recall, allergen, and food-safety policies that narrow the public baseline.
- POS, OMS, e-commerce, CRM, inventory, item master, pricing, promotion, payment, SNAP EBT, pickup or delivery, service-desk, fraud, recall, and food-safety records are retrievable at runtime.
- Tenant provides delegated authority maps for price adjustments, refunds, substitutions, SNAP-sensitive exceptions, coupon exceptions, service recovery, fraud review, recall handling, food-safety disposition, and customer-impact escalation.
- Jurisdiction, business unit, banner, platform, product category, payment method, SNAP status, customer type, and fulfillment location are available whenever they materially change pricing, refunds, SNAP, release, safety, or exception handling.

### Required Retrieval Dependencies

- Store, channel, order, basket, customer, SKU, UPC, GTIN, PLU, lot, date-code, catch-weight, and substitution identifiers.
- POS receipts, OMS status, e-commerce order events, payment state, split-tender details, SNAP EBT authorization and refund records, coupon and promotion records, pickup or delivery state, and customer verification artifacts.
- Inventory reservation, picker note, substitution approval or rejection, short-pick record, staging-zone scan, temperature or cold-chain note, release scan, delivery proof, customer acknowledgment, refund record, and completion artifacts.
- Recall, allergen, food-safety, fraud, account-takeover, chargeback, loss-prevention, and service-recovery records for affected products or orders.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, payment, SNAP, item, substitution, staging, release, refund, or completion evidence.
- Requests for price overrides, refund exceptions, SNAP program interpretation, fraud adjudication, food-safety disposition, recall clearance, legal interpretation, or executive approval.
- Unresolved payment mismatch, SNAP-sensitive refund conflict, recall, allergen alert, temperature-abuse complaint, fraud indicator, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant, platform, payment, franchise, state, or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unauthorized pricing or refund guidance, SNAP-sensitive mishandling, customer release on bad payment state, unsafe food-safety handling, or recalled/allergen-impacted item release is detected.
- Preserve all execution summaries, completion records, payment-conflict packets, SNAP-sensitive exception notes, food-safety notes, fraud-boundary notes, recall and allergen notes, and escalation artifacts for post-rollback review.
- Re-enable only after source-of-truth retrieval, substitution controls, price and refund authority routing, SNAP online handling, fraud-review controls, cold-chain checks, recall handling, and completion-evidence requirements are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this grocery e-commerce lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, source-refresh review, and a new PR that records the retained-implementation runtime separately from this spec pack.
