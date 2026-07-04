# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit restaurant menu and pricing boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies menu governance, price-book ownership, promotion approvals, franchise routing, refund and comp thresholds, and food-safety and fraud escalation paths.
- POS, menu-management, digital-menu-board, marketplace, booking, CRM, order-management, service-desk, inventory, and payment-support records are retrievable at runtime.
- Tenant provides channel publication sequencing, guest-service ownership, service-fee rules, blocked-funds handling, and exception approval limits.
- Jurisdiction, business model, and brand context are available whenever chain-coverage, local fee-disclosure rules, alcohol rules, franchise obligations, or PMS-linked hospitality workflows materially narrow the public baseline.

### Required Retrieval Dependencies

- Brand, location, franchise or corporate scope, and approved menu or price-change identifiers.
- Menu item master, PLU, combo, modifier, calorie, nutrition, and allergen records.
- POS publication logs, menu-board or kiosk updates, marketplace sync records, test checks, and guest-facing receipt evidence.
- Order, booking, payment, refund, void, comp, chargeback, and service-recovery records for affected transactions.
- Inventory and 86 status, rollout calendar, service desk tickets, and owner-routing matrices.

### Regulated-lane Caveats

- FDA menu-labeling requirements are not universal to every restaurant format; runtime must confirm whether chain-coverage and establishment facts make them mandatory.
- State and local fee-disclosure, refund, service-charge, and franchise rules may be stricter than the federal public baseline.
- Guest-safety and allergen issues can create incident-handling obligations outside this lane even when the root cause began as a menu or price workflow problem.
- Payment-security references set handling boundaries but do not authorize the lane to adjudicate fraud, reimbursement liability, or legal compliance.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory menu, order, payment, refund, or completion evidence.
- Requests for pricing approval, refund or comp override approval, legal interpretation, guest-safety ownership, or fraud and loss-prevention adjudication.
- Unresolved order-total, blocked-funds, allergen, or policy-precedence conflict that materially changes whether execution may proceed.
- Public baseline and tenant, franchise, marketplace, or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unsupported refund overrides, or unsafe guest-impact recommendations are detected.
- Preserve all execution summaries, completion records, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, refund-boundary routing, pricing approval limits, and guest-safety escalation paths are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this restaurant menu and pricing lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
