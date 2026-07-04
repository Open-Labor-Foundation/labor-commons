# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit retail beauty execution boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all execution-processing-and-fulfillment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies assortment mix, beauty-category taxonomy, product-class routing rules, used-cosmetics return rules, tester hygiene SOPs, franchise exception paths, and closure criteria for retail beauty workflows.
- PIM, planogram, POS, OMS, inventory, CRM, recall, and document systems are retrievable at runtime.
- Tenant provides the current jurisdiction, franchise or banner context, OTC assortment boundaries, systems-of-record map, and authority routing that make the lane materially different from generic retail operations.
- Tenant provides stricter local controls for sale-pricing exceptions, tester quarantine, used-product disposition, adverse-event routing, recall handling, and stop-sale enforcement when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Current product master, GTIN, shade, assortment, planogram, and pricing-file records.
- Ingredient declarations, Drug Facts where applicable, warning statements, brand or distributor identity records, display charts, and leaflet artifacts.
- POS receipts, OMS status, pickup or shipment confirmations, CRM notes, promo calendars, and return or disposition records.
- Recall, stop-sale, incident, adverse-event, and lot or batch references.
- Adjacent-owner contact paths for pricing, regulatory, recall, licensed esthetics, pharmacy or OTC compliance, customer recovery, and inventory escalation.

### Regulated-Lane Caveats

- FDA sources anchor cosmetics labeling, classification, and recall boundaries, but tenant product mix retrieval is required before applying OTC-drug or other non-cosmetic conclusions to a specific assortment.
- FTC and NIST sources constrain price, sale, and order-commitment handling, but state or local consumer-protection rules may narrow the public baseline and must be retrieved before location-specific answers.
- GS1 sources define vendor-neutral identity and attribute linkage, but tenant systems determine which identifiers, data pools, and assortment attributes are authoritative at runtime.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory product, pricing, order, display, recall, or completion evidence.
- Requests for regulatory interpretation, therapeutic suitability, legal advice, pricing override approval, final recall disposition, or policy override.
- Requests to mark work complete without evidence-backed closure.
- Public baseline and tenant, franchise, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported OTC-boundary answers, label-evidence shortcuts, recall mishandling, price-override leakage, or premature closure behaviors are detected.
- Preserve execution status updates, completion records, exception packets, and handoff notes for post-rollback review.
- Re-enable only after label-boundary handling, tenant adaptation logic, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry beauty-wellness-and-personal-care --agent retail-beauty-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this retail beauty execution lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
