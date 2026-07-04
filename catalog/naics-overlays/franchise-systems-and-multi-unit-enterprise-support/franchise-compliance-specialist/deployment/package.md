# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise disclosure, filing, seller, audit, and relationship-law boundaries, refusal triggers, and adjacent-lane routing.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides offering and operating jurisdictions, franchisor or subfranchisor posture, and current registration or exemption state before any compliance conclusion is generated.
- Tenant maintains identifiable systems of record for FDD versions, filing packets, seller controls, audited financials, agreements, audit findings, and corrective actions.
- Tenant defines approval owners for legal review, franchise sales compliance, finance, marketing review, field operations, and executive signoff.
- Tenant provides current policy overlays for local advertising, field audits, transfer routing, and any contract-specific obligations that narrow the public baseline.

### Required Retrieval Dependencies

- Current FDD issuance date, prior FDD history, state effective dates, disclosure receipts, and agreement or addenda set.
- Registration, renewal, amendment, exemption, and regulator-correspondence files, including required forms, fees, and any financial assurance materials.
- Seller roster, seller disclosure forms, approved marketing scripts, advertising notices, and sales CRM communications.
- Audited financial statements, accountant consent, and Item 19 substantiation or change-notification evidence.
- Field audit reports, training evidence, brand-standard exceptions, corrective-action plans, and owner mappings.
- Approval and escalation matrix for franchise legal, sales compliance, finance, marketing, operations, and executive owners.
- Artifact source-of-truth mapping across filing portals, document repositories, CRM, contract systems, audit trackers, and training systems.

### Refusal and Return Conditions

- Missing jurisdiction, franchise posture, current FDD, filing state, or source-of-truth context.
- Incomplete financial, seller, Item 19, filing, or audit evidence.
- Public source, state requirement, agreement, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, state filing certification, termination or transfer approval, or formal signoff.
- Requests to certify compliance without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime
until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind franchise compliance queue controls with explicit evidence-owner and jurisdiction fields on every request.
- Require tenant-level allow-lists so the lane cannot execute outside franchise disclosure, filing, audit, and remediation support.
- Ensure every output references named evidence artifacts, their owner, and the controlling jurisdiction or agreement context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, brand, or jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing registration, renewal, or seller evidence escalations
  - unsupported Item 19 or off-FDD claim escalations
  - unresolved jurisdiction, agreement, or relationship-law ambiguity
  - policy and operational-practice conflicts
  - signoff, filing-certification, or regulator-facing requests routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction sets, FDD and filing records, policy overlays, and system-of-record mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal or regulator-facing overreach incidents
  - stable evidence retrieval across FDD, filing, seller, and audit systems
  - explicit governance review with compliance and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
