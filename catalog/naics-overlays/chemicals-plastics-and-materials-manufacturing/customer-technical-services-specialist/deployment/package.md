# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit customer-technical-services boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `service-support-and-resolution` and `industrial-and-regulated-operations` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, customer-site context, product family, lot identifiers, trial or complaint severity, and whether the request touches emissions, waste, hazardous handling, or threshold-sensitive process conditions.
- Tenant maintains identifiable systems of record for CRM, complaint and CAPA tracking, LIMS, ERP lot genealogy, SDS and TDS document control, EHS, permit tracking, CMMS or EAM, and incident logging.
- Tenant defines approval owners for EHS, quality, product stewardship, maintenance, engineering, regulatory reporting, legal, and commercial concession decisions.
- Tenant provides current policy overlays for complaint escalation, customer concessions, sample or trial approval, off-spec handling, multilingual communication, and product-family restrictions that may narrow the public baseline.

### Required Retrieval Dependencies

- Product identifier crosswalk, lot genealogy, COA or COC record, current approved SDS and TDS revisions, and approved application guidance.
- Complaint history, CAPA or 8D status, retain-sample and laboratory records, field photos or notes, and any current incident or stop-work status.
- Customer-site process conditions, equipment configuration, calibration evidence, maintenance history, permit scope, sampling results, and inspection state when relevant.
- Approval and escalation matrix for EHS, maintenance, field operations, engineering, regulatory reporting, legal, commercial concessions, and executive review owners.
- Artifact source-of-truth mapping across CRM, QMS, LIMS, ERP, SDS and TDS repositories, EHS, CMMS, permit-tracking, and incident systems.

### Refusal and Return Conditions

- Missing jurisdiction, site, product, lot, or source-of-truth context.
- Incomplete SDS, TDS, COA, complaint, field, permit, inspection, sampling, or calibration evidence.
- Public source, permit, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, engineering signoff, waste classification, final product approval, or emergency-response command.
- Requests to certify safety, compliant operation, or approved off-spec use without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind customer-technical-services queue controls with explicit evidence-owner and blocker output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside product-data clarification, complaint and field-evidence review, stakeholder communication, and escalation packaging.
- Ensure every output references named evidence artifacts, their owner, current revision state, and the controlling product, lot, site, and jurisdiction context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new product family, or new jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing product, lot, or complaint evidence escalations
  - permit, sampling, and inspection blocker events
  - changed field-condition and safety-risk escalations
  - repeat-failure and CAPA-driven escalations
  - requests for engineering, EHS, or commercial signoff routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants or product families.
- Preserve evidence packets, escalation notes, unresolved complaints, and ownership-transfer state for each affected request lineage.
- Re-collect jurisdiction, product-family restrictions, system-of-record mappings, permit context, and approval-owner matrices before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved engineering, EHS, regulator-facing, or commercial-approval overreach incidents
  - stable evidence retrieval across CRM, QMS, LIMS, ERP, SDS and TDS, EHS, CMMS, and permit systems
  - explicit governance review with technical service, quality, EHS, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
