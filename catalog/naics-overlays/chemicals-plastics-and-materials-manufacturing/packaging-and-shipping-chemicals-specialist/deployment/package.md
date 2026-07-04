# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit chemical packaging and shipping boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `coordination-handoffs-and-routing` and `industrial-and-regulated-operations` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, facility, product family, package type, shipping mode, destination requirements, and whether the move is product shipment, waste transfer, or another regulated movement.
- Tenant maintains identifiable systems of record for SDS management, shipping documents, package specifications, ERP or warehouse records, manifest handling, training records, incident records, and carrier or vendor commitments.
- Tenant defines approval owners for EHS, transportation compliance, warehouse execution, engineering, maintenance, regulatory reporting, legal, and final shipment release.
- Tenant provides current policy overlays for state registrations, carrier qualification rules, damaged-package handling, waste-transfer rules, and any customer or contract restrictions that may change the public baseline.

### Required Retrieval Dependencies

- Current SDS revision, shipped-container label state, shipping paper draft, emergency response information, and destination instructions.
- Current approved package specification, UN mark or certification trail, closure instructions, package condition evidence, and any overpack details.
- Hazmat training evidence, owner authorization map, registration or permit status, and carrier qualification records.
- Hazardous-waste manifest or e-Manifest path, receiving-facility identification, transporter chain, and any environmental-reporting dependencies.
- Inventory counts, packaging-material availability, shortage signals, vendor commitments, calibration or maintenance records, and laboratory or batch-release dependencies.
- Incident logs, damaged-package observations, hold or quarantine records, and source-of-truth mapping across EHS, ERP, document control, manifest, training, maintenance, and incident systems.

### Refusal and Return Conditions

- Missing jurisdiction, product, package, shipment, manifest, or source-of-truth context.
- Incomplete SDS, shipping, package-certification, training, incident, or manifest evidence.
- Public source, jurisdiction, carrier, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, hazard classification, package certification, shipment release, manifest signoff, engineering judgment, emergency command, or financial approval.
- Requests to certify packaging or shipment readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind packaged-chemical shipping queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside coordination, prerequisite validation, blocker handling, shortage or vendor-risk escalation, and closure confirmation.
- Ensure every output references named evidence artifacts, their owner, current revision state, and the controlling jurisdiction, package, and shipment context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new facility, or new jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing SDS, shipping paper, training, or package-certification escalations
  - manifest or hazardous-waste routing blockers
  - damaged-package and field-condition escalations
  - shortage and carrier or vendor-risk escalations
  - requests for engineering, safety, legal, or shipment-release authority routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, facilities, or product families.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, owner maps, carrier qualification rules, and system-of-record mappings before re-enabling.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry chemicals-plastics-and-materials-manufacturing --agent packaging-and-shipping-chemicals-specialist` before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, engineering, shipment-release, or manifest-overreach incidents
  - stable evidence retrieval across SDS, shipping, packaging, training, manifest, and incident systems
  - explicit governance review with EHS, transportation compliance, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
