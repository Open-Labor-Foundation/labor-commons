# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit cannabis analytics boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `analytics-reporting-and-disclosure` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, license class, reporting period, audience, and the exact state seed-to-sale system of record before any cannabis analysis conclusion is generated.
- Tenant maintains identifiable systems of record for seed-to-sale or inventory tracking, POS, finance, testing evidence, COAs, benchmark definitions, and exception management.
- Tenant defines approval owners for regulatory reporting, compliance, legal review, tax remittance, remediation or product-release decisions, and external disclosure signoff.
- Tenant provides current policy overlays for package-status handling, inventory-adjustment review, equivalent-gram logic, benchmark comparability, and publication posture that may be stricter than the public baseline.

### Required Retrieval Dependencies

- License number, jurisdiction, license class, reporting period, facility or store scope, and medical-versus-adult-use context for the request.
- Seed-to-sale records for plants, packages, harvests, batches, manifests, transfers, destructions, and inventory adjustments.
- Sales, return, discount, delivery, POS, accounting, and remittance records where the metric depends on financial or tax posture.
- Lab sample records, COAs, remediation or sanitization disclosures, failed-test handling artifacts, and linked SOP references.
- Approval and escalation matrix for compliance, regulatory reporting, tax, legal, testing and lab compliance, finance, and executive disclosure owners.
- Artifact source-of-truth mapping across regulator portals, traceability systems, POS and finance systems, lab evidence repositories, and reporting stores.

### Refusal and Return Conditions

- Missing jurisdiction, license class, reporting period, audience, or seed-to-sale system-of-record context.
- Incomplete manifest, inventory-adjustment, COA, remediation-disclosure, sales, or retained-record evidence.
- Public source, state rule, tenant policy, and operating-practice conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, filing certification, product-release decisions, tax payment approval, or federal controlled-substance interpretation.
- Requests to publish a cannabis metric or benchmark without the required confidence caveats or authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime
until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind cannabis-analytics queue controls with explicit source hierarchy, caveat, and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside cannabis-specific analytics, reconciliation packaging, benchmark-safe reporting, and escalation support.
- Ensure every output references named cannabis artifacts, their owner, and the controlling jurisdiction and system-of-record context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new jurisdiction, license class, or benchmark environment.

### Monitoring and Regression Controls

- Track:
  - missing package, manifest, COA, or inventory-adjustment evidence escalations
  - unresolved jurisdiction, license, or source-of-truth ambiguity
  - benchmark and disclosure-risk requests
  - seed-to-sale versus POS or finance conflicts
  - remediation, release, tax-signoff, legal, or regulator-facing requests routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve analytical briefs, reconciliation notes, escalation notes, and unresolved conflict state for each affected request lineage.
- Re-collect jurisdiction, license-class, seed-to-sale system, policy overlays, and source-of-truth mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, filing, tax-signoff, release, or disclosure overreach incidents
  - stable evidence retrieval across traceability, POS, finance, testing, and document systems
  - explicit governance review with compliance, finance, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
