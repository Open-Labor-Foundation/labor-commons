# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route chemicals batch-production work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, historian, LIMS, EHS, CMMS, permit, inspection, incident, and regulatory-reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES or batch-execution, historian, LIMS, EHS, CMMS or EAM, work-order, inspection, permit-tracking, incident, and regulatory-reporting systems
  - escalation targets for EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, and plant leadership owners
  - tenant-specific maps for lifecycle states, control recipe repositories, released-material rules, rework limits, completion signoff requirements, permit stack, and approval boundaries

## Isolation

- Tenant boundary: no cross-tenant sharing of production orders, control recipes, batch records, genealogy, sample data, permit files, calibration history, work orders, inspection records, incident files, or regulatory artifacts.
- Knowledge boundary: ISA, OSHA, EPA, eCFR, and ISO public baselines are shared; plant-specific batch records, authority maps, SOPs, permit stacks, and product rules are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant work-center names, systems-of-record connectors, lifecycle-state labels, escalation routing, and batch-record templates
  - prohibited: widening the lane into engineering approval, permit interpretation, regulator representation, legal signoff, or final safety-critical release authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, deviation handling, unsupported completion attempts, permit blockers, field-risk escalations, and low-confidence returns
  - alert on stale source reviews, repeated missing batch-record repositories, repeated permit-evidence gaps, repeated changed-condition escalations, and repeated attempts to bypass authority boundaries
  - monitor for requests that incorrectly seek engineering approval, EHS signoff, regulatory certification, or safety-critical proceed authority from the lane
- Logging:
  - record release version, tenant assumptions, facility and process-cell context, batch and campaign context, missing evidence, and routed owners
  - record whether the request involved readiness review, active execution, deviation handling, permit or inspection blocker, changed field conditions, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route batch-production requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry chemicals-plastics-and-materials-manufacturing --agent batch-production-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed chemicals-sector batch-production specialist for control-recipe-aware execution, blocked-work handling, permit and field-risk escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, process cell, campaign, batch, product family, requested disposition, and timing expectation
  - boundary metadata identifying EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, and plant leadership owners
  - retrieval dependencies for ERP, MES or batch-execution, historian, LIMS, EHS, CMMS, permit, inspection, incident, and environmental-reporting artifacts
  - tenant overlays for control recipe repositories, lifecycle-state names, release dependencies, rework rules, completion evidence rules, permit stack, and escalation boundaries
- Assumptions that must be tenant-supplied or retrieved at runtime:
  - current controlling permit and jurisdiction context
  - source-of-truth locations for production orders, control recipes, batch records, samples, deviations, and completion signoffs
  - local terminology for process cells, lifecycle states, hold codes, and release checkpoints
  - current engineer-of-record, EHS, maintenance, and regulatory-reporting owner map
- Regulated-lane caveats:
  - public OSHA and EPA sources define the baseline, but facility-specific permit applicability, covered-process scope, and release authority still depend on tenant facts
  - runtime must refuse or return to orchestrator when engineering, safety-critical, environmental, legal, or regulator-facing authority is required
  - runtime must return to orchestrator when threshold, permit, or field-condition context is missing or disputed enough to change the answer
- Conditions that require refusal or orchestrator return:
  - required tenant facts, records, or source context are missing and would change the outcome
  - public source guidance and tenant policy conflict materially
  - the request requires legal, engineering, licensed, safety-critical, or approval authority outside the lane
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - repeated safe use under the same spec
  - stable evidence retrieval across batch, sample, permit, inspection, maintenance, and incident systems
  - zero unresolved overreach incidents around engineering, safety, or regulator-facing authority
  - explicit governance review with operations, EHS, maintenance, and plant leadership owners
  - a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.

