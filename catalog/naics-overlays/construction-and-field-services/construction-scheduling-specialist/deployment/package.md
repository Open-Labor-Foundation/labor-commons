# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route construction scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - work-order, dispatch, and backlog records
  - permit, inspection, occupancy, and jurisdiction records
  - site logs, safety observations, and closeout packages
  - baseline schedules, look-ahead plans, milestone trackers, and change-order records
  - crew, subcontractor, equipment, access-window, and service-level records
  - owner matrix, approval registry, and escalation routing rules
- Escalation routing targets for:
  - project controls
  - permitting
  - inspection or AHJ coordination
  - safety
  - superintendent or field operations
  - licensed trades, design authority, and finance or operations approvers

## Isolation and Adaptation

- Tenant data isolation: work orders, schedule records, permit files, site evidence, and labor rules are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: jurisdiction rules, calendars, labor agreements, owner matrix, service levels, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - schedule horizons, service levels, and approval matrix details
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into permit approval, code interpretation, licensed trade signoff, superintendent execution authority, or final staffing and budget approval.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, requested date, predecessor state, and requested decision surface
  - boundary metadata defining permit, inspection, safety, licensed-trade, superintendent, engineering, and financial limits
  - retrieval wiring for work-order, schedule, project-management, permitting, inspection, safety, and document systems
  - tenant-supplied assumptions for jurisdiction, service model, labor rules, subcontractor posture, site type, and owner matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - occupancy, permit closure, inspection release, and labor-rule requirements can vary materially by locality, owner contract, and workforce agreement
  - the runtime must never convert a schedule recommendation into permit approval, code interpretation, or licensed-trade authority

## Operations

- Logging requirements:
  - schedule recommendations and deferred-work rationale
  - blocker and dependency records
  - refusal or escalation events for permit, inspection, safety, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to schedule without permit or inspection readiness
  - capacity overload and service-level shortfall patterns
  - repeated missing tie-break-rule cases
  - attempts to force final approval or code-interpretation authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route construction scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for construction and field-service scheduling support when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
