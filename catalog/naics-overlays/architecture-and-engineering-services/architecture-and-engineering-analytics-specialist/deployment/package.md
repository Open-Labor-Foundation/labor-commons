# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and system-access credentials remain orchestrator-controlled.

## Required Configuration

- release version
- source refresh policy and review cadence
- retrieval connectors for:
  - PSA or ERP and project-finance records
  - timekeeping and utilization data
  - CDE or document-control records
  - BIM authoring, federation, clash, and issue data
  - CAD drawing and revision records
  - QA or QC review and comment logs
  - permit or jurisdiction portals
  - BI, warehouse, and disclosure-review repositories
- escalation target mapping for project delivery, design quality, CAD and document controls, permitting, change management, and licensed architect or engineer owners
- tenant-specific authority matrices for KPI definitions, source precedence, disclosure approval, contract deliverables, and final signoff ownership

## Materialization Requirements

- `commons-crew` must supply task metadata that identifies project, client, delivery method, phase, discipline scope, jurisdiction, reporting period, requested metric set, and requested decision shape.
- Runtime retrieval must provide the controlling systems of record, record locations, and freshness indicators before the specialist can act safely.
- Tenant-supplied assumptions must include metric dictionaries, fee and utilization rules, contract deliverables, phase-gate definitions, permit posture, source-precedence rules, and authority boundaries.
- Regulated-lane caveats must remain active for sign-and-seal posture, code interpretation, permit approval, safety-critical design judgments, client-disclosure approvals, and final delivery acceptance.
- Refusal or orchestrator return is required when required records are missing, tenant policy conflicts with the public baseline, or authority shifts outside the lane.

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of project financials, timesheets, model files, drawings, permit records, review comments, or escalation notes.
- Knowledge boundary: public references remain shared, while tenant policy overlays, metric dictionaries, and operational thresholds are injected at request time.
- Allowed adaptation: terminology, stage names, fee buckets, KPI thresholds, queue names, route maps, approved retrieval hooks, and contract-specific deliverable mappings.
- Prohibited adaptation: extending to permit approval, code interpretation, licensed design judgment, budget approval, scope authorization, or final external disclosure signoff.

## Operations

- Monitoring:
  - low-confidence escalations caused by missing phase, jurisdiction, permit, or source-precedence context
  - repeated cross-system conflicts between PSA or ERP, CDE, BIM, CAD, QA or QC, and permit records
  - repeated attempts to push sign-and-seal, code, permit, or final approval authority into the lane
- Logging:
  - request ID, project context, records used, assumptions, blocker set, and escalation targets
  - whether output was analytical brief, caveat package, refusal, or escalation
- Alert triggers:
  - repeated requests to bypass permit, seal, or review blockers
  - repeated readiness or disclosure claims with unresolved model or comment issues
  - repeated conflicts that require external authority ownership

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected requests to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final design approval, permit authority, code interpretation, fee approval, or licensed architect or engineer authority.
- Health checks should confirm artifact presence, YAML or JSON parseability, scenario coverage, and source-refresh compliance.
