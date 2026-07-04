# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route food-and-beverage manufacturing safety work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant food-safety records, ERP, MES, WMS, QMS, supplier portals, and traceability systems remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier-quality, and traceability systems
  - escalation targets for QA release owners, food-safety leadership, supplier-quality owners, production leadership, logistics, regulatory, and legal owners
  - tenant-specific maps for jurisdiction, Food Traceability Rule applicability, hold authority, release authority, substitution rules, and rework constraints

## Materialization Requirements

- Required task metadata:
  - request type
  - product family and facility or co-manufacturer context
  - affected lot, batch, ingredient, or shipment identifiers
  - visible hold or release status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - final QA release owners
  - recall and regulator-contact owners
  - supplier approval and substitution authority
  - engineering or process-change authority
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - plant, line, product category, and jurisdiction context
  - supplier approval status and receiving procedures
  - documented hold, deviation, and rework constraints
  - whether the product falls under the Food Traceability List and any applicable exemptions
- Regulated-lane caveats:
  - public FDA, Codex, and GS1 baselines constrain the lane but do not replace tenant procedures or controlling product-jurisdiction rules
  - the lane may support hold, traceability, and incident analysis but cannot command recall, sign regulatory submissions, or authorize release
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, medical, engineering, supplier-approval, recall-command, or final QA authority
  - conflicting public and tenant rules that materially change whether product can move

## Isolation

- Tenant boundary: no cross-tenant sharing of batch records, lot histories, environmental results, allergen incidents, supplier corrective actions, traceability logs, or release authorities.
- Knowledge boundary: FDA, Codex, and GS1 public baselines are shared; tenant SOPs, retailer requirements, supplier agreements, release maps, and retrieval hooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product family labels, facility maps, release-owner maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into final release signoff, recall command, procurement ownership, engineering change authority, or unsupported supplier approval

## Operations

- Monitoring:
  - log dispatch decisions, hold and release-boundary outputs, supplier escalation notes, unresolved traceability conflicts, and low-confidence returns
  - alert on stale source reviews, recurring allergen or sanitation incidents, repeated override requests, and repeated supplier verification gaps
  - monitor requests that incorrectly seek final QA release or recall authority from the lane
- Logging:
  - record release version, tenant assumptions, affected lot or shipment scope, missing evidence, and routed owners
  - record whether the request involved hold, release, traceability, supplier verification, corrective action, or incident escalation handling
- Rollback path:
  - disable the current specialist release
  - route food-safety requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run spec-pack audit before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed food-safety specialist for preventive-control review, traceability conflict analysis, hold and release-boundary handling, supplier escalation, and incident packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Health checks should confirm manifest load success, artifact presence, and source freshness dates.
- Runtime prompts should explicitly remind the lane that it owns food-safety evidence handling and escalation only, not final QA release, recall command, or supplier-approval authority.
