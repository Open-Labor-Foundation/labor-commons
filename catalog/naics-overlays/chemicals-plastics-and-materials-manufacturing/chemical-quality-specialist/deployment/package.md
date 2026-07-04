# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route chemical-quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant LIMS, QMS, ERP, MES, EHS, asset, CMMS, inspection, permit, and regulatory-reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for LIMS, QMS, ERP, MES, EHS, asset management, CMMS, inspection, permit-tracking, incident-management, and regulatory-reporting systems
  - escalation targets for quality leadership, EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, and plant leadership owners
  - tenant-specific maps for product specifications, release authority, reblend and rework rules, covered-process posture, permit-to-work rules, calibration ownership, and signoff requirements

## Materialization Requirements

- Required task metadata:
  - request type
  - product family, facility, and process context
  - affected batch, lot, tank, reactor, or shipment identifiers
  - visible hold or release status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - final QA release owners
  - EHS and environmental escalation owners
  - maintenance and field-operations execution owners
  - engineer-of-record authority
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - product specification hierarchy and customer requirements
  - local permit, inspection, and covered-process context
  - documented rework, reblend, deviation, and CAPA rules
  - calibration, retained-sample, and reference-material handling rules
- Regulated-lane caveats:
  - public OSHA and EPA sources constrain the lane but do not replace tenant procedures, permits, customer specifications, or controlling jurisdictional rules
  - the lane may support hold, release-boundary, quality, and incident analysis but cannot command final release, sign environmental reports, or authorize engineering changes
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, engineering, safety-critical, environmental-reporting, or final QA authority
  - conflicting public and tenant rules that materially change whether material can move or a finding can close

## Isolation

- Tenant boundary: no cross-tenant sharing of batch records, retained-sample data, laboratory results, calibration histories, customer complaints, incident files, permit records, or release authorities.
- Knowledge boundary: OSHA, EPA, NIST, and ACC public baselines are shared; tenant SOPs, customer specifications, release maps, permits, and retrieval hooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product family labels, facility maps, release-owner maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into final QA signoff, EHS command, engineering approval, regulatory-reporting ownership, or unsupported use-as-is or reblend authorization

## Operations

- Monitoring:
  - log dispatch decisions, hold and release-boundary outputs, threshold blockers, field-condition escalations, repeat-defect escalations, and boundary-safe refusals
  - alert on stale source reviews, recurring quality defects, repeated override requests, missing calibration evidence, unresolved permit posture, and attempts to close findings without formal review support
  - monitor for requests that incorrectly seek final QA release, engineering signoff, or environmental certification from the lane
- Logging:
  - record release version, tenant assumptions, affected batch or lot scope, missing evidence, routed owners, and whether the request involved hold, release, permit, inspection, deviation, or incident escalation handling
  - record whether source or policy conflicts existed and whether the work escalated because of changed field conditions or authority boundaries
- Rollback path:
  - disable the current specialist release
  - route chemical-quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry chemicals-plastics-and-materials-manufacturing --agent chemical-quality-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed chemicals-sector quality specialist for batch review, laboratory and calibration evidence handling, hold or release-boundary discipline, field-condition escalation, and corrective-action packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
- Runtime prompts should explicitly remind the lane that it owns chemical-quality evidence handling and escalation only, not final QA release, engineering signoff, EHS command, or regulatory-reporting authority.

