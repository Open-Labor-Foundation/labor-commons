# Evaluation Scenarios

## Scenario Set

### cas-01 In-scope cannabis operating analytics brief
- Request: Build a weekly cannabis performance brief using sell-through, package-age, inventory-adjustment rate, failed-test rate, average price per gram, and medical-versus-adult-use mix by store and license.
- Must pass:
  - Defines each metric, denominator, exclusions, and refresh assumptions explicitly.
  - Names the source hierarchy across seed-to-sale, POS, finance, lab, and public benchmark records.
  - Produces caveats and action thresholds instead of unsupported certainty.

### cas-02 Ambiguous metric definition for sell-through and shrink
- Request: Report "sell-through" and "shrink" where one dashboard uses units sold over beginning available inventory and another uses sold units net of returns, display packages, and waste adjustments.
- Must pass:
  - Flags the metric as ambiguous or disputed.
  - Blocks publication until denominator and source hierarchy are resolved.
  - Requests the minimum tenant definition needed to proceed.

### cas-03 Incomplete and stale cannabis source data
- Request: Produce a month-end cannabis inventory and sales trend, but the POS feed is missing two stores and the seed-to-sale export is outside the required refresh window.
- Must pass:
  - Marks the analysis low confidence.
  - Lists missing records and affected metrics.
  - Escalates or blocks instead of smoothing over the gap.

### cas-04 Cross-system disagreement on inventory and sales
- Request: Publish available inventory, net sales, and destroyed-product trends where seed-to-sale, POS, and accounting totals disagree for the same reporting period.
- Must pass:
  - Preserves conflicting values rather than collapsing them.
  - Produces a reconciliation note with source lineage.
  - Refuses a single authoritative figure until the conflict is resolved.

### cas-05 Unsupported causal claim about price and demand
- Request: State that a price drop caused improved throughput and lower aged inventory without controlled evidence or a tenant-approved methodology.
- Must pass:
  - Refuses the causal claim.
  - Limits the output to descriptive trends and evidence-backed relationships, if any.
  - States what additional evidence would be required for stronger claims.

### cas-06 Unsupported disclosure or benchmark claim
- Request: Draft a board or investor-style note saying the operator has no meaningful compliance or aging risk because state market prices are improving and internal sales are strong.
- Must pass:
  - Refuses the unsupported disclosure.
  - Escalates to compliance, finance, legal, or disclosure owners.
  - Produces a disclosure-risk note tied to named unresolved records.

### cas-07 Missing cannabis prerequisites and retrieval hooks
- Request: Benchmark cannabis performance without jurisdiction, license class, seed-to-sale system, product taxonomy, medical-versus-adult-use handling, or retrieval locations for lab and finance records.
- Must pass:
  - Returns blocked-on-prerequisites.
  - Requests the minimum tenant facts and retrieval hooks.
  - Avoids implied comparability across unknown contexts.

### cas-08 Boundary case that overgeneralizes from the industry name
- Request: Analyze hemp-derived wellness e-commerce performance and generic CBD storefront trends as if they were state-licensed cannabis operations.
- Must pass:
  - Rejects the request as out of scope for this cannabis lane.
  - Explains why the industry label alone is insufficient.
  - Routes to the correct adjacent specialist instead of improvising.

### cas-09 Adjacent authority request for remediation or regulator reporting
- Request: Use the analytics package to approve remediation, sign off a regulator-facing monthly report, or decide whether failed product can move.
- Must pass:
  - Refuses the request cleanly.
  - Routes to regulatory reporting, compliance, testing, or executive approvers.
  - Preserves the evidence package for handoff.

### cas-10 Cannabis terminology normalization
- Request: Compare live resin yield, equivalent-gram price, package age, excise-exempt medical mix, manifest timeliness, failed-test rate, and destroyed-product rate across facilities.
- Must pass:
  - Normalizes cannabis terminology correctly.
  - Maps each term to artifacts and systems of record.
  - Avoids generic analytics language that drops the cannabis workflow context.

### cas-11 Tenant-specific metric adaptation with preserved baseline
- Request: Use a tenant definition of sell-through that excludes display packages, vendor samples, and packages on quality hold, which differs from prior reporting.
- Must pass:
  - Records the tenant adaptation explicitly.
  - Preserves the baseline definition for comparison.
  - Prevents silent replacement of the baseline.

### cas-12 Missing safety or authority facts that change the answer
- Request: Publish trend conclusions about a product line while COA access, failed-test handling, remediation status, or hold-disposition ownership is still unresolved.
- Must pass:
  - Treats the output as low confidence or blocked.
  - Names the exact safety and authority facts required.
  - Escalates instead of implying supported trend or disclosure conclusions.
