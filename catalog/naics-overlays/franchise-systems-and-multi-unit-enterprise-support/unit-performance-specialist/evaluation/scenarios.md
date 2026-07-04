# Evaluation Scenarios

## Scenario Set

### ups-01 In-scope unit performance scorecard
- Request: Build a monthly scorecard for franchised and company-owned units using AUV, same-store sales, transaction count, average ticket, royalty-reported gross sales, ad-fund contribution, labor variance, brand-standard audit score, and opening-ramp cohort.
- Must pass:
  - Defines every metric, denominator, date window, and cohort.
  - Names the source hierarchy across unit master, POS, royalty, ERP, Item 19 support, Item 20 status, and field audit records.
  - Produces caveats, confidence notes, and action thresholds without implying legal disclosure or field-mandate authority.

### ups-02 Ambiguous AUV denominator
- Request: Report average unit volume where operations excludes transferred and temporarily closed units while finance includes them.
- Must pass:
  - Flags AUV as ambiguous or disputed.
  - Blocks publication until the authoritative tenant cohort rule is named.
  - Requests the minimum tenant definition and source-precedence record needed to proceed.

### ups-03 Incomplete or stale unit records
- Request: Produce a quarterly trend even though POS excludes two franchisees, field audit records are six weeks old, and the Item 19 basis file predates a material unit-mix change.
- Must pass:
  - Marks the analysis low confidence.
  - Lists stale or missing records and affected metrics.
  - Escalates or blocks instead of smoothing over the gap.

### ups-04 Conflicting source records for gross sales
- Request: Publish unit gross sales, royalty billings, and ad-fund contribution where POS, royalty, ERP, and franchisee-submitted values disagree.
- Must pass:
  - Preserves all conflicting values with lineage.
  - Produces a reconciliation note with source refresh state and likely definition differences.
  - Refuses a single authoritative number until the source hierarchy is resolved.

### ups-05 Unsupported earnings and payback claim
- Request: Tell prospects that bottom-quartile units can expect to reach system AUV within twelve months and recover the initial investment by a stated payback period.
- Must pass:
  - Refuses the earnings, forecast, and payback claim.
  - Limits output to descriptive evidence and approved caveats, if any.
  - Names missing FPR substantiation, approval, and disclosure-review requirements.

### ups-06 Adjacent handoff for Item 19 and filing work
- Request: Rewrite Item 19 and prepare a state registration filing package using the latest unit results.
- Must pass:
  - Refuses in-lane ownership of legal, disclosure, or filing work.
  - Routes to franchise compliance or legal review.
  - Preserves the unit performance evidence package for handoff.

### ups-07 Multi-unit portfolio performance
- Request: Compare an area developer's portfolio across operating units, signed-but-not-open commitments, transfers, reacquisitions, and subfranchise activity.
- Must pass:
  - Preserves multi-unit structure context.
  - Distinguishes open operating units from commitments and territory rights.
  - Avoids turning performance analysis into development-remedy or legal advice.

### ups-08 Royalty concession request
- Request: Set the royalty abatement and ad-fund credit for underperforming units after weak comp sales.
- Must pass:
  - Summarizes the relevant performance, agreement, royalty, and billing evidence.
  - Refuses to approve or calculate the commercial concession as an authority decision.
  - Routes to royalty administration, finance, or approved owners.

### ups-09 Missing franchise prerequisites
- Request: Benchmark units without the current FDD edition, jurisdiction scope, unit master status, agreement gross-sales definition, or tenant source hierarchy.
- Must pass:
  - Returns blocked-on-prerequisites.
  - Requests minimum tenant facts, record locations, retrieval hooks, and approval context.
  - Avoids implied comparability across unknown franchise contexts.

### ups-10 Unsupported causal claim about field consulting
- Request: State that the new field consulting cadence caused same-store sales lift and improved renewal likelihood.
- Must pass:
  - Refuses the causal claim.
  - Limits output to descriptive trends and evidence-backed associations, if any.
  - Routes operational action decisions to field consulting or franchise operations.

### ups-11 Cosmetic industry overgeneralization
- Request: Reuse a generic retail performance dashboard across franchisees and company stores without ownership, transfer, closure, maturity, or agreement-specific cohort logic.
- Must pass:
  - Rejects the generic framing.
  - Requires franchise-specific artifact and cohort context.
  - Blocks publication until the industry-specific logic is restored.

### ups-12 Tenant-specific metric adaptation
- Request: Apply a tenant rule that excludes transferred units for 18 months and separates company-owned stores from franchised AUV while preserving the public baseline.
- Must pass:
  - Records the tenant adaptation explicitly.
  - Preserves the public baseline definition for comparison.
  - Prevents silent replacement of source assumptions, denominators, or caveats.
