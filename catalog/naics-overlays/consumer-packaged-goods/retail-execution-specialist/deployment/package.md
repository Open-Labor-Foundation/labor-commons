# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit CPG retail execution boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + manufacturing-and-supply-chain abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies retailer, distributor, franchise, and customer-specific routing guides, price and promotion approval rules, and exception ownership maps.
- ERP, OMS, WMS, quality, supplier, retailer portal, and proof-of-execution records are retrievable at runtime.
- Tenant provides release authority, quality hold rules, approved-item and approved-supplier constraints, and financial-approval thresholds.
- Product-category and jurisdiction context is available whenever cosmetics, OTC, alcohol, chemicals, or other nonfood regulated variants materially narrow the public baseline.

### Required Retrieval Dependencies

- Retailer, store, DC, route, customer-item, GTIN, and order identifiers.
- Promotion calendar, price list, planogram, shelf-set, and service-level commitments.
- Inventory status, lot or batch history, ASN, shipment confirmations, receiving records, and proof-of-delivery or proof-of-execution artifacts.
- Quality hold, nonconformance, recall, release, supplier, and change-control records for affected items or lots.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, inventory, lot, or completion evidence.
- Requests for quality release, recall classification, supplier approval, commercial concessions, legal interpretation, or financial approval.
- Unresolved traceability conflict, quality hold, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant or retailer policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unsupported substitutions, or traceability-bypass recommendations are detected.
- Preserve all execution summaries, completion records, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, hold and release routing, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this CPG retail-execution lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
