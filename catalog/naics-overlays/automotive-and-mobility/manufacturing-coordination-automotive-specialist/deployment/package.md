# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive manufacturing coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, PLM, EDI, logistics, and supplier-system access remains orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, PLM, EDI, supplier-management, and logistics systems
  - escalation targets for quality, production planning, inventory, procurement, supplier-quality, logistics, engineering, legal, and safety owners
  - tenant-specific maps for jurisdiction, plant and line topology, OEM customer-specific requirements, release authority, hold authority, deviation-permit workflow, substitution rules, certification handling, and recall escalation

## Materialization Requirements

- Required task metadata:
  - request type
  - plant, line, and product-family context
  - affected VIN, serial, part, container, and lot scope
  - visible hold, containment, and release state
  - requested decision and claimed authority owner
- Required boundary metadata:
  - quality release and concession owners
  - supplier approval and substitution authority
  - production, warehouse, and logistics execution owners
  - engineering-change and certification authority
  - recall and safety escalation tree
  - customer-specific requirement precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - plant, line, warehouse, supplier, destination, and jurisdiction context
  - controlling OEM customer-specific requirements and deviation workflow
  - documented hold, containment, rework, and release constraints
  - PPAP, change-control, and destination acceptance procedures
- Regulated-lane caveats:
  - public IATF, AIAG, and NHTSA baselines constrain the lane but do not replace tenant SOPs, OEM customer-specific requirements, export rules, or site-specific release procedures
  - the lane may support handoff, blocker, and evidence analysis but cannot authorize release, concession, PPAP approval, supplier approval, certification, or recall action
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, engineering, supplier-approval, production-execution, logistics-execution, certification, or final quality authority
  - conflicting public and tenant rules that materially change whether product, components, or vehicles can move

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, VIN histories, lot records, supplier files, quality holds, deviation permits, or escalation notes.
- Knowledge boundary: public IATF, AIAG, and NHTSA baselines are shared; tenant SOPs, customer-specific requirements, owner maps, system connectors, and release matrices are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product-family labels, plant maps, owner maps, system connectors, customer-specific overlays, and escalation routing
  - prohibited: widening the lane into final release signoff, concession approval, supplier approval, engineering signoff, certification statements, recall command, or direct production execution

## Operations

- Monitoring:
  - log dispatch decisions, handoff outputs, unresolved traceability conflicts, open containment or release blockers, and low-confidence returns
  - alert on stale source reviews, repeated duplicate-ownership loops, repeated requests for concession or supplier approval, and repeated supplier or recall-sensitive escalations
  - monitor requests that incorrectly seek final quality release, certification assertions, or direct production or logistics execution from the lane
- Logging:
  - record release version, tenant assumptions, affected VIN or part scope, missing evidence, and routed owners
  - record whether the request involved hold, release, traceability, supplier nonconformance, certification, or recall-sensitive handling
- Rollback path:
  - disable the current specialist release
  - route automotive manufacturing coordination requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed automotive manufacturing coordination specialist for cross-team handoffs, blocker management, VIN and supplier traceability review, and release-safe escalation.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns coordination and escalation only, not final release, concession approval, supplier approval, engineering signoff, certification, recall judgment, or execution authority.
