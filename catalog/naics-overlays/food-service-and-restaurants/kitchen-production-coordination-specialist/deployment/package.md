# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit kitchen production coordination boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + coordination-handoffs-and-routing + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, complete functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies kitchen routing, KDS acceptance, expo ownership, coursing, pickup staging, banquet or catering signoff, refund or comp thresholds, and food-safety and fraud escalation paths.
- POS, KDS, booking or reservation, PMS, CRM, service-desk, inventory, delivery-platform, and payment-support records are retrievable at runtime.
- Tenant provides station ownership maps, fire-time rules, hold-time or discard posture, allergen communication SOPs, and service-recovery ownership.
- Jurisdiction, business model, and concept context are available whenever health-department rules, hotel or banquet operations, platform agreements, franchise obligations, or local delivery and reservation laws materially narrow the public baseline.

### Required Retrieval Dependencies

- Order identifiers, check numbers, reservation or BEO identifiers, service window, and requested coordination outcome.
- KDS and expo states, ticket timestamps, station assignments, fire-time notes, and destination-owner acknowledgements.
- Menu item, modifier, recipe, ingredient, allergen, availability, and 86-state records.
- Payment, refund, comp, void, promotion, service-recovery, and customer-complaint records for affected transactions.
- Inventory, pickup staging, delivery-platform, and owner-routing matrices.

### Regulated-lane Caveats

- FDA Food Code and menu-labeling guidance provide the public baseline, but state and local health-department rules may be stricter and must be retrieved at runtime.
- Reservation and delivery-platform statutes referenced here are jurisdiction-specific examples and do not replace tenant or local counsel review where law materially changes operational posture.
- Guest-safety and allergen issues can create incident-handling obligations outside this lane even when the root cause began as a kitchen production problem.
- PCI DSS constrains payment-data handling but does not authorize the lane to adjudicate fraud, reimbursement liability, or legal compliance.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory ticket, reservation, payment, allergen, or completion evidence.
- Requests for culinary execution, pricing approval, refund or comp override approval, legal interpretation, food-safety ownership, or fraud and loss-prevention adjudication.
- Unresolved booking, pickup, blocked-funds, allergen, or policy-precedence conflict that materially changes whether the handoff may proceed.
- Public baseline and tenant, platform, hotel, franchise, or jurisdictional policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false closures, unsupported comp or refund recommendations, or unsafe guest-impact recommendations are detected.
- Preserve all handoff summaries, blocker logs, routing notes, closure confirmations, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner-routing maps, refund-boundary handling, and food-safety escalation paths are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this kitchen production coordination lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
