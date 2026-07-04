# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise execution boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all execution-processing-and-fulfillment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand-specific operating stages, approval chains, service model, and closure criteria for product, pricing, promotion, order, return, and inventory work.
- Franchise management, document, POS, OMS, ERP, inventory, vendor, and ticketing systems are retrievable at runtime.
- Tenant provides the current jurisdiction, unit or ownership context, systems-of-record map, and authority routing that make the lane materially different from generic retail operations.
- Tenant provides stricter local controls for price presentation, fee disclosures, approved suppliers, promo activation, regulated products, and unit-level completion when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Current FDD, franchise agreement, state addenda, operating-manual revision, and approved supplier or required-product rules.
- Unit roster, company-owned versus franchised flags, territory constraints, brand or concept context, and owner-routing map.
- Item master, SKU, PLU, GTIN or menu-code mappings, price books, promo calendars, mandatory fee configuration, and return rules.
- Orders, invoices, receiving logs, POS and OMS events, ERP or back-office status, inventory counts, and completion confirmations.
- Exception approvals, vendor case notes, field-visit findings, and adjacent-owner escalation contacts.

### Regulated-Lane Caveats

- FTC and NASAA sources govern franchise disclosure and state-variation posture, but tenant jurisdiction retrieval is required before applying state-specific conclusions.
- NIST retail pricing guidance constrains price and fee presentation, but local law and stricter tenant policy can narrow the public baseline.
- GS1 standards constrain item-master, barcode, and product-data evidence, but tenant catalog structure and approved-supplier rules determine what is actionable in-lane.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory franchise, item, pricing, order, inventory, or completion evidence.
- Requests for legal interpretation, supplier approval, permanent pricing or fee approval, finance or royalty approval, or regulated-product signoff.
- Requests to mark work complete without evidence-backed closure.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported supplier approvals, price or fee overrides, premature closure, or agreement-interpretation drift are detected.
- Preserve execution status updates, completion records, exception packets, and handoff notes for post-rollback review.
- Re-enable only after supplier-boundary handling, pricing controls, tenant adaptation logic, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent franchise-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this franchise execution lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
