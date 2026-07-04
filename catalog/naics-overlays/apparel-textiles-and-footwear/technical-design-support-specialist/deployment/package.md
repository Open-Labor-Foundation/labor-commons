# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit apparel, textile, and footwear technical-support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + service-support-and-resolution + cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand or buyer manuals, PLM field mappings, approval-stage definitions, sample calendars, and source-precedence rules.
- PLM, sample tracker, label-artwork, compliance repository, ERP item master, supplier portal, and issue-tracking records are retrievable at runtime.
- Tenant provides final-fit, pattern, sourcing, compliance, costing, and release authority maps.
- Market, jurisdiction, age-grade, and product-category context is available whenever label, safety, fiber-content, or chemical-control rules materially narrow the baseline.

### Required Retrieval Dependencies

- Style, season, buyer or brand, product category, age grade, destination market, and sample-stage identifiers.
- Tech-pack revisions, BOM and trim references, POM tables, grade rules, fit comments, sample measurements, and sample photos.
- Label artwork versions, care-basis evidence, fiber-content and origin fields, test reports, CPC or GCC records, and tracking-label data.
- GTIN or SKU variant records, size-system mapping, calendar dates, approval owners, and cost-impact or lead-time notes.

### Regulated-Lane Caveats

- FTC and CPSC rules create hard boundaries around care labels, textile labeling, children's-product safety, and certification artifacts.
- ISO, GS1, ZDHC, and OEKO-TEX sources inform workflow, size, variant, and chemical evidence expectations but do not replace tenant or destination-market rules.
- Named retailer or brand workflow guidance should be applied as tenant-specific operating constraints, not as universal law.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory tech-pack, sample, label, or compliance evidence.
- Requests for final fit approval, pattern engineering, compliance certification, legal interpretation, sourcing approval, costing signoff, or shipment release.
- Unresolved label, safety, chemical, or source-precedence conflicts that materially change whether work can advance.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported label or compliance statements, or generic overreach into design or release authority are detected.
- Preserve all resolution notes, evidence maps, stakeholder communications, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, approval-owner routing, label and compliance evidence handling, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this technical-design support lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
