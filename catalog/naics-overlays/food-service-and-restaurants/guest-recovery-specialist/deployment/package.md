# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit restaurant guest-recovery boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies guest-recovery matrices, comp and remake caps, reservation-deposit and no-show rules, refund approvals, service-charge rules, complaint SLAs, fraud handling, and food-safety-routing rules.
- POS, reservation, booking, CRM, service-desk, order-management, delivery-platform, inventory, payment, and loyalty systems are retrievable at runtime.
- Tenant provides authority matrices for guest recovery, pricing, refunds, reservation deposits, front-office exceptions, fraud review, food-safety review, and district or executive escalation.
- Jurisdiction, local food-code adoption, franchise or brand context, marketplace terms, processor rules, and resort dining controls are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Order, receipt, check, reservation, booking, waitlist, and guest-account identifiers.
- Tender type, refund status, deposit status, service-charge presentation, loyalty activity, coupon or promotion rules, and recovery-history context.
- Recovery-matrix rules, remake or bounce-back caps, manager-approval thresholds, and complaint escalation rules.
- Menu-item, modifier, allergen, substitution, and inventory-availability references when relevant.
- KDS timestamps, handoff records, table-service notes, service-recovery notes, complaint history, and local manager actions.
- Food-safety, illness, contamination, and fraud or loss-prevention indicators for affected cases.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory order, reservation, payment, fee, recovery, or complaint evidence.
- Requests for pricing override, discretionary compensation approval, refund exception approval, legal interpretation, fraud decisioning, front-office deposit decisions, or food-safety signoff.
- Allergen, contamination, employee-illness, suspicious identity, or loss-prevention conditions that change whether direct guest-recovery action is safe.
- Public baseline and tenant, franchise, marketplace, payment-processor, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported comp promises, missed fraud holds, unsafe food-safety guidance, or cross-lane authority leaks are detected.
- Preserve all resolution notes, communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, guest-recovery approval routing, refund-boundary handling, fraud stops, and food-safety boundary enforcement are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry food-service-and-restaurants --agent guest-recovery-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this guest-recovery lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
