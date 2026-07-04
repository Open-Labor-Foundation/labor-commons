# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator with retrieval and boundary metadata routing for aerospace quality tasks.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation suite, readiness evidence, deployment notes.
- Required configuration:
  - release version
  - approved source freshness policy and review cadence
  - retrieval hooks for ERP, MES, WMS, quality management, supplier management, and traceability systems
  - escalation targets for quality release owners, supplier-quality, engineering, legal, safety, and regulator-facing owners
  - tenant-specific maps for hold authority, release authority, delegated approval scope, and customer flowdown handling

## Materialization Requirements

- Required task metadata:
  - request type and decision surface required
  - facility, program, product family, lot, serial, and affected shipment context
  - current hold/release state and whether the part is flight-critical
  - requested decision owner and claimed authority
  - whether action is evidence-supported, contradictory, or missing key records
- Required boundary metadata:
  - final quality release owners
  - DER/ODA or engineering release approver
  - supplier approval and substitution authority
  - safety/quality escalation targets and supplier-quality routing
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - program quality plan, release authority map, and MRB routing
  - supplier flowdown obligations and customer-specific procedures
  - jurisdiction and commercial constraints that limit authority
- Regulated-lane caveats:
  - public FAA, IAQG, and NASA baselines constrain workflow but do not replace tenant authority maps.
  - the lane may support hold/release boundary recommendations and escalation but cannot approve final release, DER/ODA authority, or airworthiness conclusions.
- Refusal or orchestrator-return conditions:
  - missing tenant facts, release authorities, or required evidence that can change the outcome
  - request for legal, engineering, regulator-facing, safety-critical approval, or source substitution authority
  - unresolved conflict among public source, tenant policy, and customer flowdown requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of WIP, lot histories, supplier corrective-action records, MRB evidence, release logs, or inspection results.
- Knowledge boundary: FAA, IAQG, and NASA baselines are shared; tenant policies, customer flowdowns, release authority maps, and current systems-of-record details are request-time runtime context only.
- Adaptation policy:
  - allowed: terminology normalization, tenant naming overlays, retrieval wiring, and approved runtime tuning
  - prohibited: widening into final engineering release, legal interpretation, regulator-facing communication, or unsupported supplier-disposition authority

## Operations

- Monitoring:
  - log requests, decisions, holds, traceability conflicts, and escalations
  - alert on stale source reviews, repeated release-bypass requests, recurring repeat defects, and unresolved supplier substitutions
  - monitor attempts to close CAPA/NCR without review evidence
- Logging:
  - record release version, scenario id, evidence source IDs, tenant assumption set, and owner routing
  - record whether output is summary, hold-release record, findings summary, or corrective-action escalation
- Rollback path:
  - disable the specialist release
  - route aerospace quality requests to orchestrator-safe fallback handling
  - restore prior validated bundle
  - re-run local package audit before re-enable
- Support owner: repository owner or aerospace catalog steward

## Deployment Notes

- Internal role: evidence-backed quality-systems specialist for release-boundary review, CAPA handling, supplier-quality escalation, traceability conflicts, and audit-readiness summaries.
- If usage proves common enough, promote by adding a retained-implementation runtime path, adding production telemetry, and documenting the explicit authority expansion after stakeholder approval.
- Health checks should confirm artifact presence, manifest integrity, source freshness date coverage, and no policy regression.
- Runtime prompts should always reinforce that the lane owns evidence-backed quality support only and not final engineering or release authority.
