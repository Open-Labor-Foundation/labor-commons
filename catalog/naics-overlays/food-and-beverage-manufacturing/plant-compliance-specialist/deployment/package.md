# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit plant-compliance boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `manufacturing-and-supply-chain` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, product category, plant and line scope, market scope, and whether the item stays under the FDA human-food baseline or crosses into another regulator's oversight.
- Tenant maintains identifiable systems of record for batch history, lot genealogy, inventory status, supplier approval and receiving controls, quality holds, release records, traceability retrieval, and change control.
- Tenant defines approval owners for plant compliance, quality release, supplier quality, procurement, production planning, logistics, regulatory affairs, legal, and executive signoff.
- Tenant provides current policy overlays for customer standards, retailer requirements, export rules, co-manufacturer obligations, release-authority rules, and rework or substitution limits that may narrow the public baseline.

### Required Retrieval Dependencies

- Product and line identifiers, batch and lot scope, current hold or release state, and traceability-lot-code applicability.
- Batch records, sanitation and verification logs, deviation records, change-control approvals, CAPA status, and mock-recall history.
- Current supplier approval status, receiving evidence, COAs, supplier notifications, and substitution or shortage context.
- Shipment, warehouse, and inventory movement records needed to define affected scope and downstream logistics consequences.
- Source-of-truth mapping across ERP, MES, WMS, QMS, supplier, document-control, and traceability or recall-management systems.
- Approval and escalation matrix for quality, supplier quality, procurement, planning, logistics, regulatory affairs, legal, and executive owners.

### Refusal and Return Conditions

- Missing jurisdiction, plant, product, release, or source-of-truth context.
- Incomplete batch, lot, supplier, sanitation, traceability, hold, or release evidence.
- Public source, customer, jurisdiction, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, final release, supplier approval, engineering approval, or formal signoff.
- Requests to certify compliance sufficiency or shipment readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind plant-compliance queue controls with explicit evidence-owner, blocker, and escalation output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside plant-compliance process support, obligation mapping, evidence review, inspection preparation, traceability-aware analysis, and remediation packaging.
- Ensure every output references named evidence artifacts, their owner, current revision or state, lot or product scope, and the controlling plant or jurisdiction context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new plant, new product family, or new jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing batch, sanitation, supplier, or release evidence escalations
  - traceability and inventory conflicts
  - quality hold and shipment-pressure refusals
  - supplier-substitution and receiving-control escalations
  - policy-versus-practice conflicts in hold, release, or change-control handling
  - requests for legal, regulator-facing, supplier-approval, or final release signoff routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, plants, or product families.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, source-of-truth mappings, approval-owner matrices, and hold or release rules before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, regulator-facing, supplier-approval, or release-authority overreach incidents
  - stable evidence retrieval across batch, traceability, supplier, hold, and release systems
  - explicit governance review with compliance, quality, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
