# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route chemical-plant operating work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant EHS, asset-management, CMMS, work-order, permit-tracking, LIMS, incident-management, and regulatory-reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for EHS, asset management, CMMS or EAM, work-order, permit-tracking, inspection, LIMS, incident-management, regulatory-reporting, and document-control systems
  - escalation targets for EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, and plant leadership owners
  - tenant-specific maps for permit scope, facility and unit hierarchy, completion criteria, startup and shutdown steps, sample hold points, authority boundaries, and regulated-threshold handling

## Isolation

- Tenant boundary: no cross-tenant sharing of batch sheets, operator logs, samples, permits, work orders, incident files, environmental records, calibration certificates, or report workpapers.
- Knowledge boundary: OSHA, EPA, API, and ISO public baselines are shared; tenant operating limits, permit conditions, SOPs, completion criteria, and authority maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, facility names, connector paths, lifecycle-state labels, stricter tenant controls, and local record locations
  - prohibited: widening the lane into engineering signoff, safety-critical proceed authority, permit interpretation or modification, regulator representation, or final legal sufficiency

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked progressions, completion refusals, regulated-risk escalations, and adjacent-lane handoffs
  - alert on stale source reviews, repeated missing permit or sampling records, repeated calibration or maintenance blockers, and repeated attempts to request engineering or regulator authority from the lane
  - monitor for reversal events where new field or environmental evidence invalidates a prior ready state
- Logging:
  - record release version, tenant assumptions, facility and unit context, requested work, permit scope, samples reviewed, inspection posture, maintenance and calibration status, blockers, and next owner
  - record whether source or policy conflicts existed and whether the work escalated because of changed field conditions, threshold posture, or authority boundaries
- Rollback path:
  - disable the current specialist release
  - route chemical-plant operating requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry chemicals-plastics-and-materials-manufacturing --agent chemical-plant-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed chemical-plant operations specialist for accepted-work execution, lifecycle-state progression, completion evidence review, and regulated-risk escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying facility, unit, product or batch, requested action, current lifecycle state, shift context, and whether the work touches permit, sample, inspection, or incident posture
  - boundary metadata identifying EHS, maintenance, field operations, engineer-of-record, regulatory-reporting, legal, and plant leadership owners
  - retrieval dependencies for EHS, CMMS or EAM, work-order, permit, inspection, LIMS, incident, regulatory-reporting, and document-control systems plus historian or operating-log references where available
  - tenant overlays for operating procedures, startup and shutdown steps, hold points, completion criteria, permit conditions, sample rules, unit thresholds, and signoff boundaries
- Regulated-lane caveats:
  - public OSHA and EPA sources define the baseline, but tenant permit conditions, facility-specific threshold determinations, and local authority maps still control case-specific operating decisions
  - runtime must refuse or return to orchestrator when engineering signoff, safety-critical proceed authority, legal interpretation, environmental certification, or regulator-facing reporting is required
  - runtime must return to orchestrator when permit scope, threshold applicability, field conditions, or source conflicts are missing or disputed enough to change the answer
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
