# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit chemicals-labeling boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `industrial-and-regulated-operations` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, product family, market scope, container state, shipment state, and whether the label is workplace-only, shipped-container, or transport-facing.
- Tenant maintains identifiable systems of record for SDS authoring, label artwork control, formulation or hazard data, ERP or WMS shipment records, training records, inspection findings, and CAPA actions.
- Tenant defines approval owners for EHS, product stewardship, transportation compliance, legal, engineering, and final label release.
- Tenant provides current policy overlays for non-U.S. markets, customer-specific labels, bilingual requirements, or product-claim restrictions that may change the public baseline.

### Required Retrieval Dependencies

- Product identifier crosswalk, formulation status, hazard-classification record, and current approved SDS revision.
- Current approved label text, artwork proof, print revision, and document-control approval trail.
- Container type, package type, shipment mode, hazmat applicability, warehouse release checklist, and transport training evidence.
- Inspection findings, internal audit notes, damaged-label observations, relabel or quarantine records, and incident or CAPA history.
- Approval and escalation matrix for EHS, product stewardship, transportation compliance, engineering, legal, and executive signoff owners.
- Artifact source-of-truth mapping across EHS, PLM, QMS, ERP or WMS, training, inspection, and incident systems.

### Refusal and Return Conditions

- Missing jurisdiction, product, shipment, or source-of-truth context.
- Incomplete SDS, label, training, inspection, or revision-control evidence.
- Public source, jurisdiction, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, final label approval, hazard-classification signoff, engineering judgment, or emergency-response command.
- Requests to certify label sufficiency or shipment readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind chemicals-labeling queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside chemical-labeling process support, SDS alignment, inspection-response packaging, and transport-overlap control handling.
- Ensure every output references named evidence artifacts, their owner, current revision state, and the controlling jurisdiction or shipment context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new product family, or new jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing SDS, label, or hazard-classification evidence escalations
  - changed-hazard-information events
  - damaged-label and field-condition escalations
  - transport-label and training blockers
  - requests for legal, engineering, or final signoff routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants or product families.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, market scope, system-of-record mappings, and approval-owner matrices before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, product-stewardship, or regulator-facing overreach incidents
  - stable evidence retrieval across SDS, label, shipment, training, and inspection systems
  - explicit governance review with compliance, EHS, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
