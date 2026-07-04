# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit dealer-support boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `service-support-and-resolution` and `manufacturing-and-supply-chain` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, scenario-family coverage, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, OEM or brand, dealer group, business unit, program, VIN or part scope, warranty and campaign context, and whether the request touches recall, stop-sale, quality hold, supplier nonconformance, or release authority.
- Tenant maintains identifiable systems of record for DMS, CRM, OEM warranty and campaign portals, ERP, MES, WMS, QMS, supplier systems, planning systems, and logistics systems.
- Tenant defines approval owners for warranty exceptions, pricing or goodwill concessions, field quality, engineering, supplier quality, inventory, procurement, logistics, legal, and safety-release decisions.
- Tenant provides current policy overlays for prior approval, claim coding, part return, audit requirements, parts restrictions, escalation templates, multilingual communication, and franchise-specific routing.

### Required Retrieval Dependencies

- VIN, in-service date, odometer, warranty start, campaign screen, customer and ownership context, and current repair-order state.
- Technician findings, DTCs, labor-op and authorization records, customer verbatims, claim status, part-return instructions, and any prior field or repeat-failure history.
- Parts inventory state, supersession chain, serial or lot genealogy, warehouse movements, shipment status, backorder posture, and causal-part scan evidence.
- Production orders, batch or lot records, supplier records, nonconformance or containment notices, quality holds, release records, and change-control references when the service issue intersects field quality.
- Approval and escalation matrix for warranty exceptions, safety or recall handling, quality holds, supplier approval, inventory allocation, logistics resolution, and legal review.

### Refusal and Return Conditions

- Missing VIN, repair-order, policy, OEM, or source-of-truth context that would change the answer.
- Incomplete warranty, campaign, technician, parts, lot, supplier, quality-hold, or release evidence.
- Public source, OEM, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, engineering signoff, safety-release authority, supplier approval, policy override, or financial concession authority.
- Requests to bypass traceability, stop-sale, recall, quality-hold, or part-return controls.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind dealer-support queue controls with explicit evidence-owner and blocker output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside warranty-status review, supported dealer-service communication, traceability-aware blocker handling, and escalation packaging.
- Ensure every output references named evidence artifacts, their owner, current revision or effective-date state, and the controlling VIN, part, lot, and OEM context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, OEM brand, or warranty program.

### Monitoring and Regression Controls

- Track:
  - missing VIN, RO, or OEM-program evidence escalations
  - traceability conflict and parts-containment events
  - quality hold, stop-sale, and recall-boundary escalations
  - supplier-substitution and concession requests routed out of lane
  - unsupported claim closure and part-return bypass attempts
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, OEM brands, or product families.
- Preserve evidence packets, escalation notes, unresolved claims, and ownership-transfer state for each affected request lineage.
- Re-collect OEM-specific rules, dealer-group policy, system-of-record mappings, quality-hold posture, and approval-owner matrices before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved overreach incidents involving warranty exception approval, safety release, supplier approval, or legal interpretation
  - stable evidence retrieval across DMS, OEM warranty, ERP, MES, WMS, QMS, supplier, planning, and logistics systems
  - explicit governance review with dealer operations, field quality, supplier quality, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
