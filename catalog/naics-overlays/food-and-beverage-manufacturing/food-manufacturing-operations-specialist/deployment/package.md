# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-manufacturing execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, logistics, and traceability systems
  - escalation targets for quality, engineering, production planning, procurement, supplier-quality, inventory, and logistics owners
  - tenant-specific maps for sanitation and allergen-changeover rules, approved batch records, hold and release authority, rework limits, substitution constraints, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, batch sheets, ingredient or packaging lots, hold records, supplier files, traceability logs, or site SOPs.
- Knowledge boundary: FDA, eCFR, GS1, and SQFI public baselines are shared; plant-specific batch records, authority maps, SOPs, supplier files, and customer commitments are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant work-center names, systems-of-record connectors, line templates, signoff templates, and escalation routing
  - prohibited: widening the lane into final quality release, engineering approval, supplier approval, recall authority, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing batch-record repositories, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek final quality, engineering, supplier-approval, recall, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and line context, product and batch context, missing evidence, and routed owners
  - record whether the request involved startup readiness, active execution, traceability conflict, hold or rework escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route food-manufacturing-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-and-beverage-manufacturing --agent food-manufacturing-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed food manufacturing operations specialist for line readiness, batch execution, blocked-work handling, lot traceability, quality-boundary escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, production order, requested disposition, and service-level timing
  - boundary metadata identifying quality, engineering, production planning, procurement, supplier-quality, inventory, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, planning, logistics, traceability, and completion-signoff artifacts
  - tenant overlays for approved batch-record repositories, sanitation and allergen controls, hold rules, release authority, rework limits, substitution constraints, and completion evidence rules
- Regulated-lane caveats:
  - public FDA and eCFR sources directly govern human-food manufacturing lines; tenants outside that scope must supply equivalent product-safety overlays
  - public GS1 and SQFI sources define traceability and recognized operating baselines but do not replace tenant batch records, SOPs, customer specifications, or audit-program obligations
  - runtime must refuse or return to orchestrator when final quality release, engineering approval, supplier approval, recall authority, or safety override authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
