# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-and-beverage manufacturing cold-chain work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, TMS, QMS, supplier portals, logger platforms, and traceability systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, TMS, QMS, supplier-quality, and temperature-monitoring systems
  - escalation targets for QA release owners, supplier-quality owners, warehouse leadership, logistics leadership, production leadership, and legal or regulatory owners
  - tenant-specific maps for jurisdiction, product-family temperature specifications, excursion thresholds, hold authority, release authority, substitution rules, quarantine movement rules, and destination acceptance requirements

## Materialization Requirements

- Required task metadata:
  - request type
  - product family and facility context
  - affected lot, batch, pallet, shipment, seal, and trailer identifiers
  - visible hold or release status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - final QA release and excursion-disposition owners
  - supplier approval and substitution authority
  - warehouse, logistics, and dock execution owners
  - engineering or process-change authority
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - plant, line, warehouse, destination, and jurisdiction context
  - product-specific temperature specifications, excursion thresholds, and dwell limits
  - documented hold, deviation, and quarantine movement constraints
  - destination acceptance, logger retrieval, and chain-of-custody procedures
- Regulated-lane caveats:
  - public FDA and GS1 baselines constrain the lane but do not replace tenant procedures or controlling customer, export, or site-specific rules
  - the lane may support handoff, blocker, and evidence analysis but cannot authorize release, disposition, recall, or supplier approval
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, engineering, supplier-approval, warehouse-execution, logistics-execution, recall-command, or final QA authority
  - conflicting public and tenant rules that materially change whether product can move

## Isolation

- Tenant boundary: no cross-tenant sharing of batch records, lot histories, logger files, trailer histories, supplier corrective actions, traceability logs, or release authorities.
- Knowledge boundary: FDA, eCFR, GS1, and SQF public baselines are shared; tenant SOPs, product specifications, alarm thresholds, customer requirements, retrieval hooks, and release maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product family labels, facility maps, owner maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into final release signoff, excursion disposition approval, warehouse execution, logistics execution, procurement ownership, or unsupported supplier approval

## Operations

- Monitoring:
  - log dispatch decisions, handoff outputs, unresolved traceability conflicts, logger or excursion blockers, and low-confidence returns
  - alert on stale source reviews, recurring temperature excursions, repeated override requests, and repeated supplier-temperature nonconformance
  - monitor requests that incorrectly seek final QA release or direct transport execution from the lane
- Logging:
  - record release version, tenant assumptions, affected lot or shipment scope, missing evidence, and routed owners
  - record whether the request involved hold, release, traceability, temperature excursion, supplier nonconformance, or duplicate-ownership handling
- Rollback path:
  - disable the current specialist release
  - route cold-chain requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed cold-chain coordination specialist for temperature-controlled handoffs, logger and traceability evidence review, excursion packaging, blocker escalation, and closure confirmation.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns cold-chain coordination and escalation only, not final QA release, excursion disposition approval, warehouse execution, or supplier-approval authority.

