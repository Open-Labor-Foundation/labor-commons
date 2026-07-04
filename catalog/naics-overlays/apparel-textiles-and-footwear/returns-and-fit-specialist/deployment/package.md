# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route apparel, textile, and footwear return and fit work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant credentials for product-master, PLM, POS, OMS, RMA, inventory, vendor, and policy systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for product-master, size-chart, image, order, return, inventory, vendor, and policy systems
  - escalation targets for pricing, compliance, safety, procurement approval, fraud, and specialized-fit owners
  - tenant authority maps for substitution limits, exception approvals, hygiene restrictions, and vendor action boundaries

## Isolation

- Tenant boundary: no cross-tenant sharing of order data, fit notes, measurements, style-color-size records, inventory states, vendor terms, or exception policies.
- Knowledge boundary: public FTC, CPSC, California, GS1, ASTM, and ISO baselines are shared; tenant fit logic, size charts, return policies, and vendor programs are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, connector mappings, approved escalation targets, size-chart retrieval hooks, and tenant-specific return-policy overlays
  - prohibited: widening the lane into legal interpretation, spend approval, pricing override, compliance signoff, medical-fit authority, or direct procurement approval

## Operations

- Monitoring:
  - log availability decisions, size-curve shortages, exchange blockers, vendor mis-packs, care-label disputes, and safety-boundary escalations
  - alert on repeated attempts to bypass hygiene restrictions, approval controls, or fit-evidence requirements
  - monitor recurring style-color-size mismatches, floor-ready or pre-ticketing issues, and requests that misroute compliance or specialized-fit work into this lane
- Logging:
  - record release version, tenant assumptions, channel, product class, style-color-size-width context, return reason, and evidence references
  - record whether the request involved shortage, substitution pressure, care-label disputes, policy conflicts, or safety-sensitive product classes
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent returns-and-fit-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed specialist for apparel, textile, and footwear return and fit workflows where exchange availability, size-curve readiness, vendor exceptions, and shortage handling matter.
- Materialization requirements for `commons-crew`:
  - task metadata identifying channel, product class, return reason, style-color-size-width, requested action, and current shortage or vendor concern
  - boundary metadata identifying pricing, compliance, safety, procurement approval, fraud, and specialized-fit owners
  - retrieval dependencies for product-master, size charts, images, POS or OMS orders, RMA records, inventory states, vendor records, and policy repositories
  - tenant overlays for return windows, hygiene rules, alteration handling, approved substitutions, width or fit conventions, and vendor compliance programs
- Regulated-lane caveats:
  - refund-policy outcomes vary materially by jurisdiction, marketplace program, and channel, so runtime must retrieve the applicable tenant and jurisdiction policy before finalizing a return recommendation
  - brand-specific size charts, fit models, and conversion logic vary materially by brand and product class, so runtime must retrieve the tenant's actual fit artifacts before recommending substitutions
  - runtime must refuse or return to orchestrator whenever children's sleepwear, protective footwear, safety-sensitive, legal, medical-fit, or approval authority is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
