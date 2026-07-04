# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted build.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit grocery operations boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and source refresh rules.
- `evaluation/functionality-map.json` covering shared abilities, `execution-processing-and-fulfillment` abilities, and `retail-consumer-and-hospitality` abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, required scenario-family coverage, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing full scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store format, banner, jurisdiction, business unit, department, channel, service model, pickup and delivery rules, substitution policy, service recovery limits, refund authority, pricing and promotion authority, food-safety procedures, recall procedures, loss-prevention routing, payment-data controls, and franchise exceptions that narrow the public baseline.
- POS, OMS, CRM, service desk, refund, inventory, item-master, receiving, scale, pricing, promotion, loyalty, coupon, delivery, recall, food-safety, payment, and loss-prevention records are retrievable at runtime.
- Tenant provides authority maps for price overrides, markdowns, refunds, service credits, rain checks, EBT/SNAP exceptions, recall execution, food-safety holds, fraud review, payment disputes, and manager or executive approvals.
- Jurisdiction, product category, tender type, customer type, channel, franchise model, pickup or delivery status, and customer-impact severity are available whenever they materially change execution, escalation, or refusal behavior.

### Required Retrieval Dependencies

- Store, banner, channel, jurisdiction, business unit, department, customer, order, service-ticket, receipt, payment, tender, and loyalty identifiers.
- SKU, UPC, GTIN, PLU, lot code, date code, random-weight or catch-weight data, scale label, package size, item-master, price, promotion, coupon, and shelf identifiers.
- OMS order status, pickup or delivery window, substitution preference, shopper note, pick path, staged tote ID, cold-chain proof, pickup handoff, delivery handoff, cancellation, service-desk, and refund-intake records.
- Inventory state, on-hand count, allocation, out-of-stock note, replenishment task, receiving log, vendor invoice, shrink, spoilage, department production, recall pull, food-safety hold, stop-sale, fraud, chargeback, payment-data, and loss-prevention records.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, payment, delivery, item, inventory, receiving, substitution, service, refund, safety, fraud, or completion evidence.
- Requests for price overrides, promotion exceptions, markdown approvals, refund approvals, service credits, rain-check exceptions, SNAP/EBT legal or program exceptions, payment dispute adjudication, fraud or loss-prevention findings, food-safety disposition, recalled-product release, legal interpretation, or executive approval.
- Unresolved order-payment mismatch, recalled item, stop-sale, food-safety hold, cold-chain gap, fraud indicator, coupon-abuse signal, loss-prevention hold, payment-data concern, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant, franchise, jurisdictional, or program policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unsupported fulfillment claims, unauthorized price or refund recommendations, mishandled SNAP/EBT tender cases, unsafe stop-sale handling, food-safety boundary misses, payment-data exposure, fraud adjudication, or loss-prevention routing failures are detected.
- Preserve all execution summaries, completion records, order and payment mismatch notes, receiving and inventory exception packets, recall notes, food-safety notes, fraud-routing notes, service-ticket notes, and escalation artifacts for post-rollback review.
- Re-enable only after source-of-truth retrieval, lifecycle-state transitions, completion-evidence requirements, order and payment reconciliation, food-safety and recall escalation, loss-prevention routing, payment-data handling, and tenant authority checks are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this grocery operations lane is common, stable, and valuable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, source-refresh automation review, tenant-policy injection review, and a new PR that records the retained-implementation runtime separately from this spec pack.
