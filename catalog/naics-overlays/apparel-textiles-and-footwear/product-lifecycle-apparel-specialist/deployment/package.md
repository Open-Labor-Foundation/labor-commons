# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route apparel product lifecycle work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for PLM, ERP, vendor, inventory, ecommerce, pricing, compliance, and trade systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for PLM, ERP or purchasing, vendor, PIM, OMS, WMS, POS, quality or compliance, and trade-document systems
  - escalation targets for merchandising, sourcing approval, product compliance, quality release, pricing, returns, customs, finance approval, and legal owners
  - tenant authority maps for supplier approval, spend thresholds, substitution limits, pricing exceptions, franchise exceptions, return-to-stock rules, release gates, and import-control handling

## Isolation

- Tenant boundary: no cross-tenant sharing of PLM records, tech packs, vendor terms, item masters, inventory states, pricing rules, or compliance evidence.
- Knowledge boundary: FTC, CPSC, CBP, and GS1 US baselines are shared; tenant sourcing, label-approval, RSL, pricing, franchise, and channel policies are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, connector mappings, escalation routing, channel-specific templates, and tenant-specific authority overlays
  - prohibited: widening the lane into pricing approval, supplier approval, customs or legal interpretation, quality release, or policy-exception signoff

## Operations

- Monitoring:
  - log availability decisions, size-run shortages, vendor slips, traceability mismatches, relabel conflicts, franchise exceptions, and children's-product safety escalations
  - alert on repeated attempts to bypass supplier approval, label signoff, release gates, or pricing and franchise controls
  - monitor recurring ASN or GTIN mismatches, repeated origin-document gaps, and repeated requests that misroute pricing or compliance work into this lane
- Logging:
  - record release version, tenant assumptions, season, channel, style-color-size context, vendor posture, source-country dependencies, and evidence references
  - record whether the request involved shortage, substitution pressure, incomplete traceability, franchise or returns exceptions, safety-sensitive apparel, or policy conflicts
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent product-lifecycle-apparel-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed apparel product lifecycle specialist for availability assessment, replenishment packaging, vendor constraint handling, and retail or commerce exception escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying season, channel, style, colorway, size curve, requested product action, and current shortage or vendor concern
  - boundary metadata identifying sourcing approval, product-compliance, quality-release, pricing, returns, customs, finance-approval, and legal owners
  - retrieval dependencies for PLM, ERP, item-master, vendor, inventory, ecommerce, pricing, compliance, and trade-document systems
  - tenant overlays for supplier approval, substitution policy, RSL or label approval, release criteria, pricing and franchise exception rules, and return-to-stock policy
- Regulated-lane caveats:
  - public country-of-origin and trade rules vary by sourcing path and product construction, so runtime must retrieve the actual sourcing context before making origin-sensitive recommendations
  - children's-product and flammability rules vary by garment category, so runtime must know the exact product class before acting on safety-sensitive requests
  - runtime must refuse or return to orchestrator whenever pricing approval, supplier approval, customs interpretation, quality release, legal judgment, or product-compliance authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
