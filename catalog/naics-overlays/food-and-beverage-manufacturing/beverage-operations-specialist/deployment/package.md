# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route beverage-manufacturing execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, logistics, and traceability connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, logistics, and traceability systems
  - escalation targets for quality, engineering, production planning, procurement, supplier-quality, inventory, logistics, and food-safety owners
  - tenant-specific maps for beverage product family, formula control, CIP and sanitation rules, approved batch-record repositories, hold and release authority, reblend limits, substitution constraints, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, batch sheets, ingredient or packaging lots, hold records, supplier files, traceability logs, or site SOPs.
- Knowledge boundary: FDA, eCFR, GS1, and SQFI public baselines are shared; plant-specific batch records, authority maps, SOPs, supplier files, and customer commitments are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant work-center names, systems-of-record connectors, beverage line templates, signoff templates, and escalation routing
  - prohibited: widening the lane into final quality release, engineering or formulation approval, supplier approval, recall authority, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing batch-record repositories, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek final quality, engineering, formulation, supplier-approval, recall, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and line context, product and batch context, missing evidence, and routed owners
  - record whether the request involved startup readiness, active execution, traceability conflict, hold or reblend escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route beverage-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-and-beverage-manufacturing --agent beverage-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed beverage operations specialist for syrup or blend readiness, beverage execution, blocked-work handling, lot traceability, quality-boundary escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, production order, requested disposition, and service-level timing
  - boundary metadata identifying quality, engineering, production planning, procurement, supplier-quality, inventory, logistics, and food-safety owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, planning, logistics, traceability, and completion-signoff artifacts
  - tenant overlays for approved batch-record repositories, CIP and sanitation controls, formula and specification governance, hold rules, release authority, reblend limits, substitution constraints, and completion evidence rules
- Assumptions that must be tenant-supplied or retrieved at runtime:
  - beverage product family and jurisdiction
  - governing regulatory branch if the line is juice, bottled water, aseptic, or alcohol-adjacent
  - source-of-truth locations for formula, batch, lot, hold, release, and palletization records
  - local terminology for blend areas, fill lines, package-integrity checks, and completion signoffs
- Regulated-lane caveats:
  - public FDA and eCFR sources directly govern many beverage-manufacturing lines, but product-family-specific branches still depend on actual beverage type and jurisdiction
  - public GS1 and SQFI sources define traceability and recognized operating baselines but do not replace tenant batch records, SOPs, customer specifications, or audit-program obligations
  - runtime must refuse or return to orchestrator when final quality release, engineering or formulation approval, supplier approval, recall authority, or safety override authority is required
- Conditions that require refusal or orchestrator return:
  - required tenant facts or authoritative records are missing and would change the answer
  - public source guidance and tenant policy conflict materially
  - the request requires legal, engineering, licensed, safety-critical, or approval authority outside the lane
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
