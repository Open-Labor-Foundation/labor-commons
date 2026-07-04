# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-and-beverage packaging execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, document-control, traceability, planning, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, document-control, traceability, planning, and logistics systems
  - escalation targets for quality, engineering, document control, production planning, procurement, supplier-quality, inventory, and logistics owners
  - tenant-specific maps for approved artwork and code-date governance, packaging specifications, line-clearance rules, hold and release authority, rework limits, substitution constraints, shipment-release gates, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of packaging orders, artwork files, label revisions, packaging-component lots, finished-goods lots, hold records, supplier files, traceability logs, or site SOPs.
- Knowledge boundary: FDA, eCFR, GS1, and SQFI public baselines are shared; plant-specific packaging records, authority maps, SOPs, supplier files, customer requirements, and label-governance rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant line names, systems-of-record connectors, coder and palletization templates, signoff templates, and escalation routing
  - prohibited: widening the lane into final quality release, regulatory label approval, engineering approval, supplier approval, recall authority, or shipment-release authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, supplier-substitution escalations, regulatory-label boundary requests, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing artwork repositories, repeated coding or label-control failures, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek final quality, regulatory, engineering, supplier-approval, recall, or shipment-release authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and line context, product and packaging-order context, missing evidence, and routed owners
  - record whether the request involved startup readiness, active packaging, traceability conflict, hold or rework escalation, unsupported completion, release-boundary rejection, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route packaging-line requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry food-and-beverage-manufacturing --agent packaging-line-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed packaging line specialist for line readiness, packaging execution, blocked-work handling, label and code-date evidence, lot and pallet traceability, quality-boundary escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, packaging order, requested disposition, and service-level timing
  - boundary metadata identifying quality, engineering, document-control, production planning, procurement, supplier-quality, inventory, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, document-control, traceability, planning, logistics, and completion-signoff artifacts
  - tenant overlays for approved artwork repositories, code-date rules, line-clearance controls, hold rules, release authority, rework limits, substitution constraints, customer labeling commitments, and completion evidence rules
- Regulated-lane caveats:
  - public FDA and eCFR sources directly govern human-food packaging lines; tenants outside that scope must supply equivalent product-safety overlays
  - public GS1 and SQFI sources define traceability and recognized operating baselines but do not replace tenant packaging records, SOPs, customer specifications, or audit-program obligations
  - runtime must refuse or return to orchestrator when final quality release, regulatory label approval, engineering approval, supplier approval, recall authority, or shipment-release authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
