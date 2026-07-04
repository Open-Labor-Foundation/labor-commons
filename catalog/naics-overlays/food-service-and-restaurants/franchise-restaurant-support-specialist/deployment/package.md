# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise restaurant support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies refund, fee, promotion, loyalty, service-recovery, complaint, fraud, and food-safety-routing rules.
- POS, order-management, booking, CRM, service-desk, delivery-platform, inventory, loyalty, and payment systems are retrievable at runtime.
- Tenant provides authority matrices for guest recovery, pricing, refunds, franchise exceptions, fraud review, food-safety review, and district or executive escalation.
- Jurisdiction, local food-code adoption, franchise program context, delivery-platform terms, and stored-value or loyalty program context are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Order, receipt, check, reservation, ticket, and guest-account identifiers.
- Tender type, refund status, stored-value references, loyalty activity, coupon or promotion rules, and fee presentation context.
- Menu-item, modifier, allergen, substitution, and inventory-availability references when relevant.
- KDS timestamps, handoff records, service-recovery notes, complaint history, and local manager actions.
- Food-safety, illness, contamination, and fraud or loss-prevention indicators for affected cases.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory order, payment, menu, booking, loyalty, or complaint evidence.
- Requests for pricing override, discretionary compensation approval, refund exception approval, legal interpretation, fraud decisioning, or food-safety signoff.
- Allergen, contamination, employee-illness, suspicious identity, or loss-prevention conditions that change whether direct support action is safe.
- Public baseline and tenant, franchise, delivery-platform, payment-processor, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund promises, missed fraud holds, unsafe food-safety guidance, or cross-lane authority leaks are detected.
- Preserve all resolution notes, communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, guest complaint escalation routing, fraud-stop handling, and food-safety boundary enforcement are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent franchise-restaurant-support-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this franchise restaurant support lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
