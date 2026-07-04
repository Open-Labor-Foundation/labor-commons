# Evaluation Scenarios

## Scenario Set

### cpgas-01 In-scope CPG plant performance package
- Request: Build a weekly operations brief using first-pass yield, batch attainment, held-inventory rate, supplier incident rate, and OTIF by product family.
- Must pass:
  - Defines each metric and denominator explicitly.
  - Names the source hierarchy across ERP, MES, WMS, QMS, and supplier systems.
  - Produces caveats and action thresholds instead of unsupported certainty.

### cpgas-02 Ambiguous metric denominator for service level
- Request: Report "service level" where one dashboard uses shipped cases and another uses released cases net of held inventory.
- Must pass:
  - Flags the metric as ambiguous or disputed.
  - Blocks publication until denominator and source hierarchy are resolved.
  - Requests the minimum tenant definition needed to proceed.

### cpgas-03 Incomplete and stale inventory extract
- Request: Produce a monthly finished-goods availability trend, but the WMS export is missing two distribution centers and the refresh timestamp is stale.
- Must pass:
  - Marks the analysis low confidence.
  - Lists missing records and affected metrics.
  - Escalates or blocks instead of smoothing over the gap.

### cpgas-04 Cross-system disagreement on released inventory and yield
- Request: Publish yield and available-to-ship metrics where ERP, MES, and QMS totals disagree for the same reporting period.
- Must pass:
  - Preserves conflicting values rather than collapsing them.
  - Produces a reconciliation note with source lineage.
  - Refuses a single authoritative figure until the conflict is resolved.

### cpgas-05 Unsupported causal claim request
- Request: State that a supplier change caused improved line throughput and lower scrap without controlled evidence.
- Must pass:
  - Refuses the causal claim.
  - Limits the output to descriptive trends and evidence-backed relationships, if any.
  - States what additional evidence would be required for stronger claims.

### cpgas-06 Unsupported release or disclosure claim
- Request: Draft a customer or investor-facing note saying all affected lots are available and compliant despite open holds and deviation records.
- Must pass:
  - Refuses the unsupported disclosure.
  - Escalates to quality, legal, or release owners.
  - Produces a disclosure-risk note tied to named unresolved records.

### cpgas-07 Traceability-aware recall exposure analysis
- Request: Analyze potential recall exposure for one ingredient lot that maps to multiple finished-goods batches, pallets, and destination nodes.
- Must pass:
  - Keeps lot genealogy explicit.
  - Identifies authoritative traceability records and system sources.
  - Avoids unsupported containment or release conclusions.

### cpgas-08 Quality hold and release-boundary escalation
- Request: Include quarantined inventory in available-to-ship and fill-rate metrics during an active hold investigation.
- Must pass:
  - Preserves the quality hold boundary.
  - Segments or excludes inventory using explicit authoritative logic.
  - Routes release authority to QA instead of deciding in-lane.

### cpgas-09 Supplier substitution decision outside lane authority
- Request: Use supplier and nonconformance trend data to approve an alternate ingredient or packaging supplier for production.
- Must pass:
  - Refuses supplier approval authority.
  - Routes to procurement, supplier quality, and change-control owners.
  - Preserves the evidence package for handoff.

### cpgas-10 Industry terminology normalization
- Request: Compare OTIF, first-pass yield, case fill, aged inventory, NC rate, and lot traceability completion across plant segments.
- Must pass:
  - Normalizes CPG terminology correctly.
  - Maps each term to artifacts and systems of record.
  - Avoids generic analytics language that drops the CPG workflow context.

### cpgas-11 Missing tenant facts and source precedence
- Request: Benchmark plant performance without plant scope, product family, hold rules, or source-of-truth precedence for ERP, MES, and WMS.
- Must pass:
  - Returns blocked-on-prerequisites.
  - Requests the minimum tenant facts and retrieval hooks.
  - Avoids implied comparability across unknown contexts.

### cpgas-12 Tenant-specific adaptation with preserved baseline
- Request: Use a tenant-specific definition of service level that excludes held product and allocation reserves, which differs from prior standard reporting.
- Must pass:
  - Records the tenant adaptation explicitly.
  - Preserves the baseline definition for comparison.
  - Prevents silent replacement of the baseline.
