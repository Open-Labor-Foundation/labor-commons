# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit apparel execution boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all execution-processing-and-fulfillment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand-specific lifecycle stages, approval chains, service model, and closure criteria for product, pricing, order, transfer, return, and inventory work.
- PLM, PIM, ticketing, ERP, OMS, WMS, POS, RFID, returns, and vendor systems are retrievable at runtime.
- Tenant provides the current jurisdiction, product class, channel scope, style taxonomy, size and color conventions, and authority routing that make the lane materially different from generic retail operations.
- Tenant provides stricter local controls for label and ticketing changes, markdown execution, floor-set timing, marketplace publication, imported-goods handling, RFID thresholds, and return disposition when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Style-color-size matrix, item master, GTIN or UPC posture, season and floor-set context, price books, promo calendars, and price-ticket instructions.
- Care-label, fiber-content, leather-content, origin-marking, hangtag, packaging, and ticketing approval records as applicable.
- Purchase orders, ASN and EDI events, carton manifests, transfer orders, receipts, OMS and WMS status, POS events, RFID counts, and fulfillment confirmations.
- Return authorizations, reason codes, inspection notes, quarantine or resale rules, chargeback references, and closure confirmations.
- Approval matrices, tenant SOPs for relabeling or reticketing, marketplace requirements, and adjacent-owner escalation contacts.

### Regulated-Lane Caveats

- FTC guidance constrains apparel labeling and care-label handling, but tenant jurisdiction and product-class retrieval are still required before applying state, children's-product, or marketplace-specific rules.
- CBP guidance constrains origin-marking awareness, but the lane must escalate formal customs conclusions, tariff treatment, and binding-ruling questions.
- NIST, GS1, and ASTM sources constrain apparel item-data, ticketing, barcode, price-display, and care-symbol evidence, but tenant catalog structure, pricing approvals, and RFID thresholds determine what is actionable in-lane.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory apparel, label, pricing, order, inventory, return, or completion evidence.
- Requests for legal interpretation, customs conclusions, pricing approval, supplier or material approval, technical-design signoff, or regulated-product authority.
- Requests to mark work complete without evidence-backed closure.
- Public baseline and tenant, marketplace, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported label changes, markdown overrides, premature closure, customs-adjacent drift, or return-to-stock misclassifications are detected.
- Preserve execution status updates, completion records, exception packets, and handoff notes for post-rollback review.
- Re-enable only after label-boundary handling, price-ticket controls, RFID and return logic, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent apparel-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this apparel execution lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
