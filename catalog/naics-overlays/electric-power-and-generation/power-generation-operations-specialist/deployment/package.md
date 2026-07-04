# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that materializes this specialist from a specification-based package.
- Deployment form: versioned spec-pack bundle containing manifest, scenarios, research summary, functionality map, evaluation results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant system credentials and routing secrets remain orchestrator-managed.

## Required Configuration

- release version and source refresh policy
- task metadata describing unit identity, facility, business unit, RTO or BA footprint, and operating context
- retrieval hooks for:
  - plant control-room logs and shift-turnover records
  - DCS, SCADA, EMS, or historian systems
  - outage or derate workflow portals such as eDART-style systems
  - dispatcher communication records
  - clearance, permit, and safety isolation systems
  - GADS or equivalent event-report repositories
- escalation target mapping for dispatch, plant safety, engineering, compliance, environmental review, and legal owners
- tenant-specific authority matrix for who may approve loading changes, return-to-service, clearance release, and regulatory exceptions

## Materialization Requirements For `commons-crew`

- Required task and boundary metadata:
  - facility, unit, and fleet identifiers
  - request type and claimed lifecycle state
  - adjacent-lane ownership map
  - allowed decision envelope versus approval-only tasks
- Tenant-supplied or runtime-retrieved assumptions:
  - regional operator workflow and timing rules
  - plant operating limits, permit thresholds, and unit-specific procedures
  - systems-of-record locations and precedence order
  - escalation contacts and approver rosters
- Regulated-lane caveats:
  - public references define baseline posture only
  - tenant evidence controls state progression and closure
  - no autonomous dispatch, engineering signoff, safety release, or environmental waiver authority is granted
- Refusal or orchestrator-return conditions:
  - missing governing unit, region, or systems-of-record context
  - unresolved conflict between plant, outage, or safety records
  - request requires dispatcher, engineering, safety, legal, compliance, or financial approval authority

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of outage tickets, control-room logs, historian data, or escalation records.
- Knowledge boundary: public references are shared, while tenant procedures, plant limits, and live evidence remain tenant-local.
- Allowed adaptation: regional manual selection, plant-specific terminology, evidence retention windows, and escalation routing details.
- Prohibited adaptation: extending the lane into live dispatch control, final safety signoff, engineering approval, or compliance waiver authority.

## Operations

- Monitoring:
  - low-confidence escalations caused by missing region or unit context
  - repeated completion attempts without return-to-service evidence
  - recurring conflict between plant historian and outage workflow records
  - repeated cold-weather or seasonal readiness evidence gaps
- Logging:
  - request ID, unit or facility context, source records consulted, missing artifacts, assumptions, and escalation targets
  - lifecycle state before and after handling
  - whether output was status, exception, completion, refusal, or orchestrator return
- Alert triggers:
  - repeated requests for dispatch setpoint or commitment authority
  - repeated requests for safety clearance release through this lane
  - repeated policy conflicts involving emissions or regional operator rules

## Rollback and Recovery

- Disable the specialist release in orchestrator configuration.
- Route new requests to a human-reviewed fallback or adjacent-lane router.
- Restore the prior validated spec-pack bundle.
- Re-run package audit and relevant repo validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based`; this package does not claim a trusted built implementation.
- Safe production materialization requires tenant retrieval wiring for plant-state, outage, dispatcher, and clearance systems before any high-confidence execution output.
