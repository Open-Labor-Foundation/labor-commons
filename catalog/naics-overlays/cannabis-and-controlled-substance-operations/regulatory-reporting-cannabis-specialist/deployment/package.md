# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit cannabis reporting boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, license class, reporting period, and the exact state reporting system of record before any cannabis reporting conclusion is generated.
- Tenant maintains identifiable systems of record for seed-to-sale or inventory tracking, manifests and transfers, testing evidence, COAs, POS and accounting records, and exception management.
- Tenant defines approval owners for legal review, regulator relations, tax remittance, lab and quality release, controlled-substance compliance, and formal signoff.
- Tenant provides current policy overlays for inventory-adjustment approval, manifest correction handling, failed-batch disposition, and record-retention posture that may be stricter than the public baseline.

### Required Retrieval Dependencies

- License number, jurisdiction, license class, facility or store, reporting period, and due-date context for the request.
- Seed-to-sale or inventory tracking records for plants, packages, harvests, batches, transfers, manifests, destructions, and inventory adjustments.
- Sales, excise, remittance, POS, accounting, and prior filing records where the jurisdiction requires periodic reporting.
- Lab sample records, COAs, remediation or sanitization disclosures, failed-test handling artifacts, and linked SOP references.
- Approval and escalation matrix for compliance, tax, legal, testing and lab compliance, quality, regulator relations, and executive signoff owners.
- Artifact source-of-truth mapping across regulator portals, traceability systems, POS and finance systems, lab evidence repositories, and document stores.

### Refusal and Return Conditions

- Missing jurisdiction, license class, reporting period, or state system-of-record context.
- Incomplete manifest, inventory-adjustment, COA, remediation-disclosure, sales, or retained-record evidence.
- Public source, state rule, tenant policy, and operating-practice conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, filing certification, product-release decisions, tax payment approval, or federal controlled-substance interpretation.
- Requests to certify readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime
until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind cannabis-reporting queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside cannabis-specific reporting, evidence review, exception packaging, and escalation support.
- Ensure every output references named cannabis artifacts, their owner, and the controlling jurisdiction and system-of-record context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new jurisdiction, license class, or reporting-system environment.

### Monitoring and Regression Controls

- Track:
  - missing manifest, COA, or inventory-adjustment evidence escalations
  - unresolved jurisdiction or system-of-record ambiguity
  - spreadsheet or manual-workaround conflicts with state traceability systems
  - policy and operational-practice conflicts
  - product-release, tax-signoff, legal, or regulator-facing requests routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, license-class, state reporting-system, policy overlays, and system-of-record mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, filing, tax-signoff, or product-release overreach incidents
  - stable evidence retrieval across traceability, testing, POS, finance, and document systems
  - explicit governance review with compliance and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
