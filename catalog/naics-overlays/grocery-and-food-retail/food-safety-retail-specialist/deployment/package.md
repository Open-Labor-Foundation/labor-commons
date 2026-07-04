# Deployment Package

## Deployment Scope

Deploy this overlay as a validated spec pack for tenants that need
grocery retail food-safety assurance support across stores, fresh departments,
prepared foods, pickup, delivery, ecommerce substitutions, recalls, and
third-party marketplace workflows while keeping runtime strategy at
`specification-based`.

## Materialization Requirements

`commons-crew` would need the following runtime materialization inputs before
safe promotion beyond specification-based use:

- task metadata that identifies banner, store, department, jurisdiction, affected product, lot or UPC, order, incident class, recall status, and current hold status
- boundary metadata that names refund, pricing, customer-care, fraud, loss-prevention, legal, medical, quality, and public-health authorities and escalation thresholds
- tenant retrieval hooks for POS, order management, ecommerce, marketplace, food-safety log, inventory, recall, supplier, CRM, incident, payment, and chargeback systems
- tenant-supplied SOPs for HACCP, allergen handling, employee illness, recall pulls, incident retention, comps and refunds, third-party delivery routing, and local health-code adoption
- regulated-lane caveats showing when the lane must stop for medical advice, regulator-facing communication, public-health investigation leadership, or final disposition authority

## Deployment Notes

- Start with internal reviewer-assisted use only and require explicit tenant confirmation of jurisdiction, banner, store, department, and record locations on every substantive workflow.
- Keep food-safety outputs evidence-backed and force structured escalation whenever logs conflict, recall pulls are unresolved, holds remain open, payment disputes are active, or customer harm may be involved.
- Do not enable autonomous pricing, refund, compensation, or fraud-decision actions in runtime.
- Preserve product-retention, complaint-retention, recall-pull, and incident-packet expectations so downstream QA, customer-care, loss-prevention, and public-health teams receive usable evidence.

## Rollback Notes

- Roll back to the previous approved spec pack version if tenant SOP retrieval fails, if escalation routing points to the wrong owner class, or if validation or audit evidence drifts from the documented boundary.
- If production usage shows repeated confusion between food-safety review and customer-care, pricing, loss-prevention, or final QA authority, disable tenant exposure and revert to the last known-good package while boundary text and scenario coverage are corrected.
- Because runtime remains `specification-based`, rollback is a package-selection change rather than a built-agent binary rollback.

## Promotion Path

If this overlay sees repeated tenant usage and stable evaluation history,
promote it to a retained implementation by:

1. Wiring orchestrator-controlled retrieval for the required systems of record and tenant policy overlays.
2. Capturing runtime telemetry that proves refusal, escalation, and evidence-traceability behavior remain stable under production traffic.
3. Adding a separately committed trusted runtime package with governance approval, rollback playbooks, and tenant-safe evaluation evidence.
