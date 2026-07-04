# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG category-operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, item-master, publication, planning, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, item-master or PIM, publication, planning, and logistics systems
  - escalation targets for quality, category management, commercial approvers, procurement, supplier-quality, inventory, production planning, and logistics owners
  - tenant-specific maps for category calendars, approved item repositories, hold and release authority, customer-impact thresholds, substitution constraints, publication completion rules, and signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of category calendars, campaign briefs, item-master records, production orders, lot histories, hold records, supplier files, customer publication artifacts, or site SOPs.
- Knowledge boundary: FDA, eCFR, and GS1 public baselines are shared; tenant assortment rules, customer portal requirements, pricing governance, PIM schemas, and hold rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology, business-unit names, systems-of-record connectors, category templates, customer publication formats, and escalation routing
  - prohibited: widening the lane into assortment strategy, pricing approval, regulatory interpretation, supplier approval, final QA release, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked activations, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing approved-item records, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek category strategy, pricing approval, regulatory approval, supplier approval, or final QA authority from the lane
- Logging:
  - record release version, tenant assumptions, business-unit and customer context, item and lot context, missing evidence, and routed owners
  - record whether the request involved readiness review, active execution, customer publication, traceability conflict, hold or rework escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route category-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent category-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG category operations specialist for category readiness, item and content activation control, blocked-work handling, traceability-aware execution, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying customer or channel, category workflow type, item or SKU set, requested disposition, plant or inventory context, and service-level timing
  - boundary metadata identifying quality, category management, commercial approvers, procurement, supplier-quality, inventory, production planning, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier records, item-master or PIM systems, publication systems, and completion-signoff artifacts
  - tenant overlays for approved item repositories, hold rules, release authority, pricing governance, customer publication rules, substitution limits, and completion evidence rules
- Regulated-lane caveats:
  - public FDA sources directly govern food-oriented CPG lines; non-food tenants must supply equivalent product-safety and content-governance overlays
  - public GS1 sources define identifier, item-master, and traceability baselines but do not replace tenant assortment rules, customer portal requirements, or pricing governance
  - runtime must refuse or return to orchestrator when assortment strategy, pricing approval, regulatory interpretation, supplier approval, final QA release, or safety override authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
