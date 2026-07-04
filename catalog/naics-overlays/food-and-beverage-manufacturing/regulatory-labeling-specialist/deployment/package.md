# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit food-labeling boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `manufacturing-and-supply-chain` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, product category, market scope, claim type, current approved artwork source, and whether the item stays under FDA packaged-food rules or crosses into USDA-FSIS labeling.
- Tenant maintains identifiable systems of record for formulation and specifications, ingredient and allergen matrices, nutrition support, artwork and document control, ERP or WMS lot records, supplier notifications, and quality holds.
- Tenant defines approval owners for regulatory affairs, legal, quality release, supplier quality, packaging change control, marketing claims, and executive signoff.
- Tenant provides current policy overlays for retailer requirements, private-label commitments, export or bilingual rules, customer claim restrictions, and rework or overlabel limits that may narrow the public baseline.

### Required Retrieval Dependencies

- Product identifier crosswalk, formulation status, approved ingredient statement, allergen matrix, and nutrition support package.
- Current approved label text, artwork proof, packaging specification, print revision, and document-control approval trail.
- Product category, jurisdiction, claim type, lot-code template, affected lots, shipment state, and hold or release status.
- Supplier and co-manufacturer change notices, approved-supplier status, certificates, specification updates, and packaging-material approvals.
- Nonconformance, CAPA, relabel, overlabel, mock recall, and inspection-response records.
- Approval and escalation matrix for regulatory affairs, legal, quality release, supplier quality, planning, logistics, and marketing owners.
- Artifact source-of-truth mapping across label-control, ERP, MES, WMS, QMS, supplier, and recall-management systems.

### Refusal and Return Conditions

- Missing jurisdiction, product, claim, release, or source-of-truth context.
- Incomplete ingredient, allergen, nutrition, artwork, traceability, or hold evidence.
- Public source, jurisdiction, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, final label approval, formula signoff, quality release, supplier approval, or marketing-claim approval.
- Requests to certify label sufficiency or shipment readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind food-labeling queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside food-labeling process support, ingredient and allergen declaration review, nutrition-support packaging, artwork revision control, traceability-aware relabel support, and inspection-response preparation.
- Ensure every output references named evidence artifacts, their owner, current revision state, lot or product scope, and the controlling jurisdiction.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new product family, or new jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing ingredient, allergen, nutrition, or artwork evidence escalations
  - FDA-versus-FSIS jurisdiction conflicts
  - traceability and relabel record conflicts
  - quality hold and shipment-pressure refusals
  - supplier-driven label-change escalations
  - requests for legal, claim, supplier-approval, or final release signoff routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants, products, or facilities.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, artwork source-of-truth mappings, approval-owner matrices, and hold or release rules before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, regulatory, supplier-approval, or quality-release overreach incidents
  - stable evidence retrieval across formulation, artwork, traceability, supplier, and hold systems
  - explicit governance review with regulatory affairs, quality, and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
