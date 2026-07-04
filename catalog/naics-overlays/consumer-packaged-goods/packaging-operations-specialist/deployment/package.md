# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG packaging operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, labeling-control, supplier, planning, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, label-control, supplier, planning, and logistics systems
  - escalation targets for quality, packaging engineering, procurement, supplier-quality, inventory, and logistics owners
  - tenant-specific maps for line-clearance rules, approved packaging records, hold and release authority, relabel and rework rules, substitution constraints, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, packaging specifications, label masters, approved components, lot histories, pallet labels, hold records, supplier files, or site SOPs.
- Knowledge boundary: FDA, eCFR, and GS1 public baselines are shared; plant-specific packaging BOMs, approved artwork repositories, machine settings, hold rules, and customer labeling overlays are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant work-center names, systems-of-record connectors, line templates, signoff templates, and escalation routing
  - prohibited: widening the lane into engineering approval, regulatory-label approval, supplier approval, final QA release, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing approved-component records, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek engineering, regulatory, supplier-approval, or final QA authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and line context, SKU and lot context, missing evidence, and routed owners
  - record whether the request involved startup readiness, active execution, palletization, traceability conflict, hold or rework escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route packaging-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent packaging-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG packaging operations specialist for line readiness, packaging execution, blocked-work handling, pallet and lot traceability, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, SKU, packaging order, requested disposition, and service-level timing
  - boundary metadata identifying quality, packaging engineering, procurement, supplier-quality, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, label-control or artwork systems, supplier records, and completion-signoff artifacts
  - tenant overlays for approved packaging-component repositories, hold rules, release authority, relabel and rework limits, and completion evidence rules
- Regulated-lane caveats:
  - public FDA sources directly govern food-oriented CPG lines; non-food tenants must supply equivalent product-safety and labeling overlays
  - public GS1 sources define identifier and logistic-label baselines but do not replace tenant packaging specifications or customer labeling commitments
  - runtime must refuse or return to orchestrator when engineering, regulatory-label, supplier-approval, final QA release, or safety override authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
