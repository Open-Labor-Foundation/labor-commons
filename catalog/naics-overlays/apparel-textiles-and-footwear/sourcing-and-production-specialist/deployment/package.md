# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route apparel sourcing and production work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for PLM, ERP or MRP, supplier, testing, quality, warehouse, and traceability systems remain orchestrator-managed.
- Required configuration:
  - release version
  - retrieval hooks for PLM, ERP or MRP, supplier portal, warehouse, quality, testing, traceability, and buyer-manual repositories
  - escalation targets for vendor compliance, product compliance, trade compliance, quality release, technical design, procurement approval, and finance approval owners
  - tenant authority maps for substitution limits, spend approval, sample and testing approvals, release controls, origin-sensitive routing, and buyer-manual precedence
  - product-class and market classifiers that indicate when children's-product, sleepwear, flammability, care-label, or UFLPA-sensitive evidence is required

## Isolation

- Tenant boundary: no cross-tenant sharing of tech packs, BOMs, supplier data, lab results, buyer manuals, origin declarations, or factory findings.
- Knowledge boundary: public OECD, ILO, Better Work, GS1, AFIRM, CBP, FTC, and CPSC baselines are shared; tenant buyer manuals, style data, supplier records, approval maps, and factory status records are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, document templates, connector mappings, approved escalation targets, and tenant-specific T&A, sample, or testing checklists
  - prohibited: widening the lane into spend approval, supplier-award authority, final release signoff, compliance interpretation, customs adjudication, or legal advice

## Operations

- Monitoring:
  - log shortage decisions, fabric or trim delays, failed sample or testing gates, factory-capacity blockers, origin-traceability gaps, and escalation frequency
  - alert on repeated attempts to bypass sample, testing, label, care, flammability, or release controls
  - monitor recurring shade-lot conflicts, buyer-manual conflicts, and repeated misroutes of compliance, trade, or technical-design work into this lane
- Logging:
  - record release version, tenant assumptions, product class, market, style ID, supplier and factory context, schedule stage, hold posture, and evidence references
  - record whether the request involved shortage, substitution pressure, failed testing, origin tracing, or buyer-manual conflicts
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent sourcing-and-production-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed apparel sourcing and production specialist for availability review, replenishment packaging, vendor-risk handling, and production-readiness escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying style, product class, destination market, brand or buyer program, requested action, and shortage or release concern
  - boundary metadata identifying vendor compliance, technical design, product compliance, trade compliance, quality release, and procurement approval owners
  - retrieval dependencies for PLM, ERP or MRP, supplier systems, warehouse and inventory records, lab or testing systems, traceability repositories, and buyer-manual documentation
  - tenant overlays for approval ladders, substitution rules, testing and sample criteria, origin-traceability posture, and market-specific product controls
- Regulated-lane caveats:
  - labeling, care, flammability, and children's-product obligations vary materially by product class and destination market, so runtime must retrieve the exact market and class before finalizing guidance
  - buyer manuals and sourcing calendars often impose tighter gates than public baselines, so runtime must know the controlling customer or brand program in force
  - runtime must refuse or return to orchestrator whenever spend approval, supplier nomination, compliance interpretation, customs or forced-labor adjudication, technical signoff, or final release authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
