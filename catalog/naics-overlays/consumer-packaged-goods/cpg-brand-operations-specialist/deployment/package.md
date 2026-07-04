# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG brand-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, item-master, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier-management, item-master, planning, and logistics systems
  - escalation targets for quality, production planning, procurement, supplier-quality, engineering, and logistics owners
  - tenant-specific maps for release authority, hold rules, approved supplier repositories, substitution constraints, rework rules, completion signoff requirements, and product-category applicability

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, brand SKU records, lot histories, co-manufacturer records, supplier files, quality holds, release records, or internal SOPs.
- Knowledge boundary: FDA, eCFR, CPSC, and GS1 public baselines are shared; facility SOPs, brand calendars, customer commitments, approved supplier repositories, and release-authority maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant and co-manufacturer names, systems-of-record connectors, line or portfolio templates, signoff templates, and escalation routing
  - prohibited: widening the lane into engineering approval, final supplier approval, final QA release, recall disposition, legal interpretation, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing release maps, repeated missing approved supplier records, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek engineering, supplier-approval, quality-disposition, or legal authority from the lane
- Logging:
  - record release version, tenant assumptions, plant or co-manufacturer context, brand SKU and lot context, missing evidence, and routed owners
  - record whether the request involved readiness review, active execution, inventory reconciliation, traceability conflict, hold or rework escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route brand-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent cpg-brand-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG brand-operations specialist for finished-goods readiness, production-adjacent execution, co-manufacturer coordination, traceability handling, blocked-release escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, co-manufacturer, brand SKU, lot or batch, requested disposition, and service-level timing
  - boundary metadata identifying quality, engineering, procurement, supplier-quality, production planning, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier-management, product-data, and completion-signoff artifacts
  - tenant overlays for approved supplier repositories, release authority, hold rules, substitution and rework limits, non-food product-category rules, and completion evidence rules
- Regulated-lane caveats:
  - public FDA sources directly govern food-oriented CPG lines; non-food tenants must supply equivalent product-safety and category overlays, with CPSC recall guidance as a public U.S. boundary reference
  - public GS1 sources define identifier, item-data, and traceability baselines but do not replace tenant item masters, approved suppliers, or customer-specific commitments
  - runtime must refuse or return to orchestrator when engineering, supplier-approval, final QA release, recall disposition, or legal interpretation authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
