# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit grocery customer-service boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies return, refund, substitution, price-adjustment, loyalty, coupon, rain-check, missed delivery, service recovery, SNAP/WIC, food-safety, fraud, and loss-prevention policies.
- POS, order-management, e-commerce, pricing, promotion, loyalty, CRM, service-desk, payment, inventory, recall, quality, and loss-prevention systems are retrievable at runtime.
- Tenant provides authority matrices for store operations, pricing or revenue, e-commerce operations, payment operations, food safety, fraud or loss prevention, compliance, pharmacy where applicable, and manager escalation.
- Jurisdiction, store, channel, supplier recall notice, local health-department rule, processor rule, and promotion terms are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Customer identifiers, loyalty accounts, receipt numbers, order numbers, store identifiers, pickup or delivery windows, channel, service tickets, and contact history.
- UPC, SKU, PLU, department, scale weight, shelf tag, circular, unit price, advertised price, digital coupon, loyalty offer, BOGO, and promotion terms.
- POS receipt lines, tender records, split-tender details, refund status, SNAP EBT or WIC processor references where applicable, gift-card or store-credit records, and payment gateway evidence.
- Order status, substitution records, picker notes, shorted-item records, inventory state, delivery proof, curbside handoff logs, cold-chain notes, and customer acceptance or rejection of substitutions.
- Lot codes, best-by dates, recall notices, prepared-food production references, food-safety or quality case notes, incident logs, illness or allergen complaint facts, and local escalation owner references.
- Fraud or loss-prevention signals, account-change requests, refund reroute requests, payment-data handling requirements, and restricted credential handling rules.

### Regulated-lane Caveats

- FDA Food Code and local adoption rules constrain prepared-food, perishable, time-and-temperature, allergen, and illness-complaint handling.
- FDA recall and safety-alert references constrain customer-facing statements about recalled or unsafe products.
- FTC order and pricing guidance constrains online order delay communication, cancellation or refund options, advertised savings, and promotion statements.
- NIST price-verification procedures and state or local weights-and-measures rules constrain shelf-tag, UPC, PLU, scale-weight, and receipt mismatch evidence handling.
- USDA FNS SNAP EBT guidance and processor rules constrain benefit-tender communication and transaction-record handling.
- CFPB billing-error guidance constrains duplicate-charge and refund-not-posted communication when merchant-versus-issuer boundaries determine the next step.
- FTC Red Flags and PCI SSC guidance constrain suspicious identity, refund reroute, account-change, and payment-card data handling.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory order, POS, item, promotion, payment, refund, inventory, recall, food-safety, CRM, or loss-prevention evidence.
- Requests for pricing override, refund exception approval, service-recovery approval, SNAP/WIC interpretation, food-safety signoff, recall disposition, legal interpretation, fraud decisioning, loss-prevention action, or manager approval.
- Illness, recall, allergen, temperature-control, security, suspicious identity, refund reroute, payment-card, EBT PIN, or account-takeover conditions that change whether direct communication is safe.
- Public baseline and tenant, store, jurisdiction, supplier, processor, SNAP/WIC, local-health, recall, or promotion policy conflict without explicit precedence resolution.

## Deployment Notes

- Route this lane only when the request primarily concerns grocery customer-service status, explanation, resolution note, supported policy application, customer communication, or escalation packaging.
- Keep the lane isolated from direct payment processing, price-file changes, inventory corrections, store operations execution, food-safety decisions, and loss-prevention action.
- Log customer communication summaries, escalation notes, refusal reasons, source hierarchy, and authoritative record references for each output.
- Alert on repeated unsupported refund or pricing promises, food-safety overstatements, unsafe recall language, SNAP/WIC interpretation drift, payment-data mishandling, or fraud-sensitive account changes.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund or price-adjustment promises, privacy leaks, unsafe illness or recall messaging, SNAP/WIC overreach, payment-data handling violations, or cross-lane authority leaks are detected.
- Preserve all resolution notes, customer communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, pricing and promotion evidence handling, food-safety escalation, tender handling, fraud stops, and boundary enforcement are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry grocery-and-food-retail --agent grocery-customer-service-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this grocery customer-service lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, operational monitoring for boundary drift, retrieval connectors for the required systems of record, and a new PR that records the retained-implementation runtime separately from this spec pack.

