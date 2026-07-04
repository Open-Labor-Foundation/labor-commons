# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route CPG supply coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, planning, and logistics credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, planning, and logistics systems
  - escalation targets for quality, planning, inventory, procurement, supplier-quality, engineering, and logistics owners
  - tenant authority maps for release, hold, quarantine, substitution, nonconformance, and destination-owner acceptance rules

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, lot genealogy, inventory states, quality records, supplier files, change controls, or logistics commitments.
- Knowledge boundary: FDA, eCFR, GS1, and SQF public baselines are shared; plant SOPs, release authority maps, substitution rules, and service-level commitments are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, destination-owner registries, and plant-specific handoff checklists
  - prohibited: widening the lane into final release authority, supplier approval, engineering disposition, or direct planning, logistics, or warehouse execution

## Operations

- Monitoring:
  - log handoff decisions, blocked dependencies, owner overlaps, traceability conflicts, quality-hold escalations, and closure confirmations
  - alert on stale source reviews, repeated attempts to bypass hold or release controls, repeated ownership ambiguity, and recurring supplier nonconformance routed through this lane
  - monitor for requests that incorrectly seek direct execution or final approval authority from the lane
- Logging:
  - record release version, tenant assumptions, prior owner, next owner, required artifacts, blocker state, lot or batch context, and systems-of-record consulted
  - record whether the request involved missing prerequisites, duplicated ownership, traceability conflict, quality hold, supplier boundary handling, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry consumer-packaged-goods --agent cpg-supply-coordination-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed CPG coordination specialist for dependency intake, handoff packaging, blocker escalation, traceability-aware routing, and closure confirmation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, line, product family, production order, lot or batch scope, and requested coordination outcome
  - boundary metadata identifying quality, planning, inventory, procurement, supplier-quality, logistics, and engineering owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier records, traceability logs, and destination-owner acknowledgements
  - tenant overlays for release authority, hold posture, quarantine handling, substitution constraints, supplier approval flow, and closure criteria
- Regulated-lane caveats:
  - public FDA sources directly govern food CPG lines; non-food tenants must supply equivalent product-specific safety and release overlays
  - public GS1 and SQF sources clarify evidence and workflow boundaries but do not replace tenant SOPs or approval matrices
  - runtime must refuse or return to orchestrator whenever release authority, safety, recall, supplier approval, engineering disposition, or policy conflict resolution is required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
