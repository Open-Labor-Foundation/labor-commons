# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit apparel vendor-compliance boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `supply-procurement-and-availability` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides brand or retailer program, style and season scope, age-grade, product family, sourcing region, and whether the work sits inside the U.S.-facing FTC, CPSC, CBP, and DOL baseline or a materially different regime.
- Tenant maintains identifiable systems of record for PLM, vendor compliance, product-compliance evidence, audit or remediation workflow, import or customs documents, shipment booking, and document storage.
- Tenant defines approval owners for sourcing, product compliance, customs or trade compliance, logistics, finance approval, labor-compliance, quality, and legal review.
- Tenant provides current retailer or brand vendor-manual overlays, approved-factory lists, restricted-substance or chemistry overlays, age-grade rules, ex-factory gates, routing-guide rules, and substitution limits that may narrow the public baseline.

### Required Retrieval Dependencies

- Style, SKU, colorway, season, age-grade, factory, mill, purchase-order, ex-factory date, and shipment milestone scope.
- Current approved-factory and approved-mill status, subcontractor posture, vendor scorecards, CAP status, and sourcing exceptions.
- Label approvals, flammability reports, GCC or CPC packets, tracking-label evidence, origin worksheets, and UFLPA traceability documents.
- Shipment records, packing lists, carton ranges, commercial invoices, detention notices, and logistics handoff evidence.
- Source-of-truth mapping across PLM, ERP, vendor-compliance portal, testing repository, customs system, logistics platform, and document storage.
- Approval and escalation matrix for sourcing, trade compliance, product compliance, logistics, labor-compliance, finance, and legal owners.

### Refusal and Return Conditions

- Missing style, factory, age-grade, shipment, source-of-truth, or approved-factory context.
- Incomplete label, certification, flammability, origin, UFLPA, labor-remediation, or shipment evidence.
- Public source, jurisdiction, retailer-manual, and tenant-policy conflicts that materially alter the outcome.
- Requests for legal interpretation, customs interpretation, final shipment release, product-safety signoff, vendor approval, or purchase-order approval.
- Requests to certify compliance sufficiency or clear a shipment without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind apparel-vendor-compliance queue controls with explicit evidence-owner, blocker, and escalation output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside vendor-compliance support, control mapping, evidence review, shortage escalation, remediation packaging, and blocked-shipment analysis.
- Ensure every output references named style, factory, shipment, or audit artifacts, their owner, current status, and the controlling product, origin, and age-grade context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new retailer program, new age-grade profile, or new sourcing region.

### Monitoring and Regression Controls

- Track:
  - missing style, label, certification, origin, or UFLPA evidence escalations
  - approved-source shortages and substitution-pressure requests
  - vendor CAP delays and labor-remediation blockers
  - attempts to bypass product-compliance, customs, or purchase-order approval gates
  - requests that misroute customs interpretation, product-safety signoff, or legal review into this lane
  - repeated attempts to answer from generic vendor language without apparel-specific facts
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, retailers, programs, or sourcing regions.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect style, age-grade, approved-factory, product-compliance, customs, and shipment source-of-truth mappings before re-enabling.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent vendor-compliance-apparel-specialist` before any reactivation or retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved customs, legal, product-safety, or purchase-order approval overreach incidents
  - stable evidence retrieval across PLM, vendor-compliance, testing, customs, and shipment systems
  - explicit governance review with sourcing, product-compliance, trade-compliance, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
