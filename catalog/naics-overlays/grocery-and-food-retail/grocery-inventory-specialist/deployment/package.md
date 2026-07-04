# Grocery Inventory Specialist Deployment Package

## Package Identity

- Agent slug: `grocery-inventory-specialist`
- Agent name: Grocery inventory specialist
- Domain family: `naics-overlays/grocery-and-food-retail`
- Workflow phase group: `supply-procurement-and-availability`
- Industry profile: `retail-consumer-and-hospitality`
- Definition tier: `approved-lane-template`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`

## Deployment Scope

Deploy this package as a grocery and food retail inventory overlay for teams that need evidence-backed availability, replenishment, vendor-risk, shortage, and traceability handling across stores, e-commerce grocery, receiving, procurement, vendor, POS, OMS, WMS, CRM, service desk, recall, and loss-prevention records.

The package is not a retained implementation. `commons-crew` may load the spec, evaluation contract, and readiness evidence, but autonomous runtime execution should remain `specification-based` until a trusted implementation is committed and promoted separately.

## Required Runtime Metadata

- Tenant, banner, store, business unit, facility, department, and channel.
- Item identifiers: SKU, UPC, GTIN, PLU, lot, traceability lot code, date code, case pack, each, random-weight, catch-weight, and unit of measure where applicable.
- Systems-of-record locations and retrieval hooks for POS, OMS, inventory, WMS, procurement, vendor portal, receiving, price or promotion, CRM, service desk, recall, food-safety, fraud, and policy records.
- Tenant authority map for procurement, spend, vendor substitution, supplier approval, receiving hold, food-safety release, recall disposition, pricing, refund, customer recovery, privacy, fraud, and loss-prevention actions.
- Replenishment rules, par or shelf-cap targets, lead times, MOQs, allocation policies, substitution rules, promotion commitments, service windows, and customer exception policies.
- Jurisdictional context for retail food, traceability, price accuracy, unit pricing, SNAP/EBT, bottle deposit, privacy, and consumer-protection obligations.

## Deployment Steps

1. Register the spec pack under `catalog/naics-overlays/grocery-and-food-retail/grocery-inventory-specialist/`.
2. Confirm `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, `evaluation/results.json`, and `readiness/evidence.json` are present and internally consistent.
3. Configure retrieval hooks for required tenant systems before allowing the lane to produce status or recommendation outputs.
4. Configure orchestrator routing to guest services, pricing, fraud/loss-prevention, food safety, category management, procurement, and store operations.
5. Keep runtime strategy set to `specification-based` unless a retained implementation is added in a separate reviewed change.

## Rollback Notes

Rollback is safe because the package is specification-based and does not migrate runtime state.

1. Disable catalog registration for `grocery-inventory-specialist`.
2. Route grocery inventory requests back to the generic inventory, procurement, guest-services, or operations lane until the package is restored.
3. Preserve any evaluation or readiness evidence generated before rollback for audit comparison.
4. Re-enable only after the manifest, functionality map, research summary, evaluation results, and readiness evidence pass validation again.

## Promotion Path To retained implementation

Promote this overlay only after repeated usage proves the spec is common enough to warrant implementation. A retained implementation should add deterministic task metadata, retrieval adapters, output schemas, policy precedence handling, evidence citation enforcement, escalation routing, and regression tests. Promotion must be a separate PR that keeps this spec pack as the baseline contract, updates runtime strategy, and records new validation and rollback evidence.

## Operating Caveats

- Do not use this lane to approve purchase orders, spend, supplier substitutions, supplier risk, price changes, refunds, recalls, food-safety release, fraud outcomes, or legal interpretations.
- Do not claim availability when item, inventory, vendor, receiving, order, recall, or safety records are missing or contradictory.
- Escalate customer harm, fraud, safety, pricing, refund, and policy exception cases with an evidence-backed package.
