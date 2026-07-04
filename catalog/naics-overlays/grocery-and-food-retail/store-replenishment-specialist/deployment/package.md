# Deployment Package

## Deployment Scope

Deploy this overlay as a validated spec pack for tenants that need grocery
store replenishment support across shelf availability, backroom and cold-room
counts, warehouse replenishment, direct store delivery, promotion load-ins,
pickup and delivery availability, shortage escalation, vendor blockers, and
customer-impact handoffs while keeping runtime strategy at `specification-based`.

## Materialization Requirements

`commons-crew` would need the following runtime materialization inputs before
safe promotion beyond specification-based use:

- task metadata identifying banner, store, department, channel, product
  category, SKU, UPC, GTIN, PLU, vendor item, lot, order, customer impact,
  replenishment source, current hold status, and requested action
- boundary metadata naming spend approval, emergency-buy approval, supplier
  approval, supplier-risk, quality release, food-safety, pricing, refund,
  customer-service, loss-prevention, legal, and operations authorities
- tenant retrieval hooks for POS, item master, inventory, replenishment,
  warehouse allocation, DSD vendor portal, procure-to-pay, OMS, e-commerce
  availability, CRM, service desk, pricing, promotion, recall, food-safety, and
  loss-prevention systems
- tenant-supplied policies for min-max, reorder point, safety stock, shelf
  capacity, planogram, DSD calendars, warehouse allocation, emergency buys,
  substitutions, rain checks, WIC-sensitive categories, pricing, refunds,
  recalls, stop sales, quality holds, shrink, and vendor escalation
- regulated-lane caveats showing when the lane must stop for food-safety
  disposition, recall clearance, legal interpretation, fraud findings, pricing
  authority, refund approval, or supplier and spend approvals

## Deployment Notes

- Start with reviewer-assisted internal use and require explicit tenant
  confirmation of store, channel, product, jurisdiction, systems of record, and
  authority map on every substantive workflow.
- Keep outputs evidence-backed and force structured escalation whenever item
  identity, inventory, vendor, order, traceability, recall, hold, price, refund,
  or customer-impact records conflict.
- Do not enable autonomous spend approval, supplier onboarding, supplier-risk
  acceptance, quality release, pricing changes, refund decisions, or fraud
  determinations.
- Preserve item, lot, shelf, backroom, vendor, customer, recall, and exception
  evidence so downstream operations, customer service, pricing, food safety,
  loss prevention, procurement, and supplier teams receive usable handoff
  packets.

## Rollback Notes

- Roll back to the previous approved spec pack version if tenant retrieval
  fails, if escalation routing points to the wrong owner class, or if validation
  or audit evidence drifts from the documented boundary.
- If production usage shows repeated confusion between replenishment
  recommendations and spend, supplier, pricing, refund, quality, safety, or
  fraud authority, disable tenant exposure and revert to the last known-good
  package while boundary text and scenario coverage are corrected.
- Because runtime remains `specification-based`, rollback is a package-selection change
  rather than a built-agent binary rollback.

## Promotion Path

If this overlay sees repeated tenant usage and stable evaluation history,
promote it to a retained implementation by:

1. Wiring orchestrator-controlled retrieval for required systems of record,
   tenant policies, authority maps, and current source baselines.
2. Capturing runtime telemetry proving availability summaries,
   replenishment recommendations, refusal behavior, escalation behavior, and
   evidence traceability remain stable under real store traffic.
3. Adding a separately committed trusted runtime package with governance
   approval, rollback playbooks, tenant-safe evaluation evidence, and explicit
   delivery status separate from this specification-based package.
