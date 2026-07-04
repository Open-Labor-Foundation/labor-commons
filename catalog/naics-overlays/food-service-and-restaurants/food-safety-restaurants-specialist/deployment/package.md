# Deployment Package

## Deployment Scope

Deploy this overlay as a validated spec pack for tenants that need
restaurant food-safety assurance support across dine-in, takeout, catering,
drive-thru, and third-party delivery workflows while keeping runtime strategy
at `specification-based`.

## Materialization Requirements

`commons-crew` would need the following runtime materialization inputs before
safe promotion beyond specification-based use:

- task metadata that identifies restaurant unit, concept, jurisdiction, affected order or reservation, incident class, and current hold status
- boundary metadata that names refund, pricing, guest-recovery, fraud, legal, medical, and public-health authorities and escalation thresholds
- tenant retrieval hooks for POS, reservation, online-order, KDS, food-safety log, inventory, CRM, incident, payment, and chargeback systems
- tenant-supplied SOPs for HACCP, allergen handling, employee illness, incident retention, comps and refunds, third-party delivery routing, and local health-code adoption
- regulated-lane caveats showing when the lane must stop for medical advice, regulator-facing communication, public-health investigation leadership, or final disposition authority

## Deployment Notes

- Start with internal reviewer-assisted use only and require explicit tenant confirmation of jurisdiction, restaurant concept, and record locations on every substantive workflow.
- Keep food-safety outputs evidence-backed and force structured escalation whenever logs conflict, holds remain open, payment disputes are active, or customer harm may be involved.
- Do not enable autonomous pricing, refund, compensation, or fraud-decision actions in runtime.
- Preserve product-retention, complaint-retention, and incident-packet expectations so downstream QA, guest-recovery, and public-health teams receive usable evidence.

## Rollback Notes

- Roll back to the previous approved spec pack version if tenant SOP retrieval fails, if escalation routing points to the wrong owner class, or if validation or audit evidence drifts from the documented boundary.
- If production usage shows repeated confusion between food-safety review and guest-recovery or pricing authority, disable tenant exposure and revert to the last known-good package while boundary text and scenario coverage are corrected.
- Because runtime remains `specification-based`, rollback is a package-selection change rather than a built-agent binary rollback.

## Promotion Path

If this overlay sees repeated tenant usage and stable evaluation history,
promote it to a retained implementation by:

1. Wiring orchestrator-controlled retrieval for the required systems of record and tenant policy overlays.
2. Capturing runtime telemetry that proves refusal, escalation, and evidence-traceability behavior remain stable under production traffic.
3. Adding a separately committed trusted runtime package with governance approval, rollback playbooks, and tenant-safe evaluation evidence.
