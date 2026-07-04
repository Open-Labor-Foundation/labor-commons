# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit returns-and-exchange boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies return-policy windows, promotional exclusions, restocking rules, exception-approval limits, franchise differences, and financing or installment refund rules.
- POS, OMS, CRM, payment, returns-management, inventory, service-desk, warranty, recall, and fraud systems are retrievable at runtime.
- Tenant provides serial-capture requirements, open-box grading rules, accessory checklists, quarantine logic, and escalation-owner mappings.
- Jurisdiction, manufacturer, lender, and product-category context is available whenever public baseline guidance is narrowed by local law, warranty terms, or safety handling rules.

### Required Retrieval Dependencies

- Receipt, order, invoice, customer, and RMA identifiers.
- Tender type, refund status, gift-card or financing references, and promotion or bundle rules.
- Serial number, IMEI, model, warranty lookup, condition grade, accessory completeness, and inspection notes.
- Inventory disposition, restock or quarantine state, RTV references, recall notices, service tickets, and fraud-case references for affected items.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, tender, serial, inspection, or completion evidence.
- Requests for pricing override, goodwill compensation, legal interpretation, warranty adjudication, fraud decisioning, chargeback handling, or safety signoff.
- Recalled-product, damaged-battery, or other hazmat-sensitive conditions that change whether routine handling is safe.
- Public baseline and tenant, manufacturer, lender, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false refunds, unsupported pricing exceptions, missed fraud holds, or unsafe return-handling recommendations are detected.
- Preserve all workflow summaries, completion records, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, payment-disposition handling, safety routing, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this returns-and-exchange lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
