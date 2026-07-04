# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
  governance signoff and sustained production stability evidence.
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit seed-to-sale boundaries, refusal triggers,
  adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete
  `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale,
  workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review
  artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, license type, facility, product class,
  medical-versus-adult-use posture, and governing traceability platform before
  any compliance conclusion is generated.
- Tenant maintains identifiable systems of record for license files,
  traceability entries, manifests, lab evidence, ERP or POS reconciliation, and
  document retention.
- Tenant defines approval owners for legal review, product release, quality,
  lab escalation, transport or distribution, controlled-substance reporting,
  security, and formal signoff.
- Tenant provides current policy overlays for holds, quarantine, recall,
  destruction, discrepancy handling, and traceability correction that may raise
  stricter requirements than the public baseline.

### Required Retrieval Dependencies

- License number, current approval state, premises identifier, and any
  jurisdiction-specific restrictions for the relevant facility or product line.
- State traceability platform identifiers and current records for plants,
  harvest batches, production batches, packages, manifests, receipts, holds,
  recalls, destruction events, and inventory adjustments.
- Sample chain-of-custody, certificate of analysis, failed-batch hold,
  quarantine release, and lab communication artifacts.
- Approval and escalation matrix for compliance, quality, lab, transport,
  security, legal, regulator relations, and executive signoff owners.
- Artifact source-of-truth mapping across regulator portals, traceability
  systems, ERP or POS, LIMS, GRC repositories, and dispatch or custody logs.
- If applicable, DEA registrant inventory and suspicious-order workpapers that
  signal the request has crossed into adjacent controlled-substance compliance
  authority.

### Refusal and Return Conditions

- Missing jurisdiction, license scope, facility, product class, or
  traceability-platform context.
- Incomplete package-lineage, manifest, quarantine, lab, recall, or destruction
  evidence.
- Public source, tenant SOP, and controlled-substance boundary conflicts that
  materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, product-release
  approval, recall closure, suspicious-order decisioning, or formal signoff.
- Requests to certify compliance or change authoritative traceability records
  without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime
until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind seed-to-sale compliance queue controls with explicit
  evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside
  traceability, testing, transfer, discrepancy, and remediation support.
- Ensure every output references named seed-to-sale evidence artifacts, their
  owner, and the controlling jurisdiction or license context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new
  jurisdiction, product line, or traceability platform.

### Monitoring and Regression Controls

- Track:
  - missing package-lineage, manifest, or lab evidence escalations
  - unresolved jurisdiction or traceability-platform ambiguity
  - off-system inventory or destruction conflicts
  - quarantine, recall, or product-release requests routed out of lane
  - controlled-substance or DEA-reporting requests routed to adjacent owners
- Trigger rollback when the same unresolved refusal or escalation class appears
  for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support
  for affected tenants.
- Preserve evidence packets, escalation notes, and unresolved traceability state
  for each affected request lineage.
- Re-collect jurisdiction, license scope, traceability mappings, policy
  overlays, and system-of-record dependencies before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, product-release, regulator-facing, or DEA-reporting
    overreach incidents
  - stable evidence retrieval across licensing, traceability, lab, ERP or POS,
    and document systems
  - explicit governance review with compliance, quality, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any
  runtime change away from `specification-based`.
