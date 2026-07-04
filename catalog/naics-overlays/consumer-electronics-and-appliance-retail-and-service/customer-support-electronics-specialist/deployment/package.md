# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit customer-support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies refund, promotion, service-recovery, complaint, fraud, and safety-routing rules.
- POS, OMS, CRM, service-desk, delivery or booking, inventory, warranty, and payment systems are retrievable at runtime.
- Tenant provides authority matrices for guest recovery, pricing, refunds, fraud review, recall handling, and executive escalation.
- Jurisdiction, manufacturer program, financing context, and premium-service program context are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Order, receipt, invoice, booking, ticket, and customer-account identifiers.
- Tender type, refund status, financing or gift-card references, and promotion rules.
- Serial number, IMEI, SKU, model, warranty, protection-plan, and RMA references when relevant.
- Delivery windows, appointment history, installation or repair notes, inventory availability, and substitute-option artifacts.
- Recall, damaged-device, fraud, and loss-prevention indicators for affected cases.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory order, payment, warranty, service, or inventory evidence.
- Requests for pricing override, goodwill compensation, refund exception approval, legal interpretation, fraud decisioning, engineering diagnosis, or safety signoff.
- Recall, damaged-battery, suspicious identity, or loss-prevention conditions that change whether direct support action is safe.
- Public baseline and tenant, manufacturer, lender, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refund promises, missed fraud holds, unsafe recall guidance, or cross-lane authority leaks are detected.
- Preserve all resolution notes, communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, complaint escalation routing, fraud-stop handling, and safety boundary enforcement are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this support lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
