# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route apparel, textile, and footwear quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant PLM, QMS, ERP, lab, vendor, and document systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for PLM, QMS, ERP, lab portals, inspection systems, vendor portals, and document control
  - escalation targets for technical design, vendor compliance, sourcing, legal, product safety, and executive shipment authority
  - tenant-specific maps for shipment holds, release authority, customer manuals, age-grade or product-category rules, and customer or retailer quality overlays

## Isolation

- Tenant boundary: no cross-tenant sharing of tech packs, graded specs, lab reports, inspection findings, CAPA records, vendor corrective-action responses, customer manuals, or incident files.
- Knowledge boundary: CPSC, FTC, ISO, AATCC, and ASTM public baselines are shared; customer manuals, retailer requirements, restricted-substance overlays, and internal SOPs are injected only at request time.
- Adaptation policy:
  - allowed: terminology, systems-of-record connectors, shipment-authority maps, customer or retailer overlays, and approved escalation targets
  - prohibited: widening the lane into final compliance signoff, technical-design approval, vendor substitution approval, legal interpretation, or unsupported shipment overrides

## Operations

- Monitoring:
  - log dispatch decisions, hold-boundary outputs, failed or missing test evidence, repeat-defect escalations, and low-confidence returns
  - alert on stale source reviews, recurring quality-control bypass requests, repeated failed final-random-inspection patterns, and repeated children's-product safety triggers
  - monitor requests that incorrectly seek technical-design, vendor-compliance, or executive shipment authority from the lane
- Logging:
  - record release version, tenant assumptions, affected style or SKU context, missing evidence, and routed owners
  - record whether the request involved sample approval evidence, AQL disposition, care-label support, children’s-product safety, footwear durability, or CAPA handling
- Rollback path:
  - disable the current specialist release
  - route apparel, textile, and footwear quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run the spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed apparel, textile, and footwear quality-assurance specialist for inspection disposition, hold and release-boundary review, test-evidence packaging, corrective-action escalation, and incident summaries.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns evidence review and escalation only, not final technical, legal, compliance, or executive authority.
