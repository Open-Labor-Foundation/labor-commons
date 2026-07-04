# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit apparel analytics boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + analytics-reporting-and-disclosure + cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand or retailer programs, reporting calendars, market scope, age-grade context, metric dictionaries, disclosure posture, and source-precedence rules.
- PLM or PDM, PIM, POS, OMS, ERP, WMS, returns, retailer EDI, compliance, and sustainability records are retrievable at runtime.
- Tenant provides merchandising, pricing, technical-design, sourcing, compliance, finance, legal, and disclosure authority maps.
- Destination-market and children's-product context is available whenever label, safety, or disclosure rules materially narrow the baseline.

### Required Retrieval Dependencies

- Style, color, size, GTIN or UPC, season, product family, retailer or channel, market, and age-grade identifiers.
- PLM style masters, item-master attributes, size curves, colorway matrices, and retailer setup records.
- POS, ecommerce, OMS, ERP, WMS, retailer product-activity, reserve, on-order, and return-reason records.
- Markdown calendars, promotional calendars, pricing ladders, and allocation or inventory-aging context.
- Care-label basis evidence, textile-label fields, testing or certification records, tracking-label artifacts, and sustainability or certified-material workbooks.

### Regulated-Lane Caveats

- FTC and CPSC sources create hard boundaries around care labels, textile labeling, children's-product evidence, tracking labels, and product-safety claims.
- GS1 references inform style-color-size and item-master workflow semantics but do not replace tenant or retailer-specific operating policy.
- IFRS and SEC sources constrain external KPI and sustainability narratives but do not authorize public disclosures by themselves.
- Named retailer guidance should be applied as tenant operating constraints, not as universal industry law.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory style-color-size, inventory, returns, compliance, or disclosure evidence.
- Requests for merchandising, pricing, sourcing, product-compliance, legal interpretation, or external disclosure approval.
- Unresolved metric-definition, evidence-sufficiency, or source-precedence conflicts that materially change whether work can advance.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported compliance or sustainability statements, or generic overreach into merchandising, pricing, or disclosure authority are detected.
- Preserve all analytical briefs, evidence maps, reconciliation notes, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, style-color-size handling, compliance evidence, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this apparel analytics lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
