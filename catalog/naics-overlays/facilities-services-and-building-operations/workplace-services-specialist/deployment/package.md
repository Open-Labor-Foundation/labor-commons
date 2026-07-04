# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route facilities and workplace-service work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - workplace requests, communication logs, and service-history records
  - work-order and field-service records
  - project, permit, inspection, and occupancy records
  - safety observations, incident records, and equipment isolation logs
  - contractor, subcontractor, and schedule records
  - closeout packages, room-ready checklists, training acknowledgements, and document repositories
- Escalation routing targets for:
  - project controls
  - permitting
  - inspection or AHJ coordination
  - safety
  - superintendent or field operations
  - licensed trades, engineering authority, lease approvers, and finance approvers

## Isolation and Adaptation

- Tenant data isolation: workplace requests, work orders, permit files, safety observations, and service evidence are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: service catalogs, access and operating-hours rules, jurisdiction-specific permit or occupancy requirements, owner matrix, system mappings, and escalation thresholds.
- Allowed adaptation:
  - terminology and role names
  - workplace service categories and communication templates
  - jurisdiction and tenant policy overlays
  - retrieval hooks and artifact labels
- Prohibited adaptation:
  - widening into permit approval, code interpretation, licensed trade signoff, engineering judgement, or financial exception authority.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, affected area, service impact, urgency, and requested outcome
  - boundary metadata defining permit, inspection, safety, lease, licensed-trade, engineering, and financial limits
  - retrieval wiring for workplace-service, work-order, project-management, permitting, inspection, safety, occupancy, and document systems
  - tenant-supplied assumptions for jurisdiction, facility type, service model, owner matrix, and communication policy
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - permit closure, inspection release, occupancy turnover, and after-hours use rules can vary materially by locality and lease structure
  - the runtime must never convert workplace-service communication into permit approval, safety signoff, or licensed trade authority

## Operations

- Logging requirements:
  - request classification and resolution state
  - blocker and dependency records
  - refusal or escalation events for permit, inspection, safety, occupancy, and authority gaps
  - source refresh checks and conflicting-policy escalations
  - communications sent to customers, stakeholders, and next owners
- Monitoring:
  - repeated unresolved workplace-service failures
  - attempts to force exception approvals or technical signoff into the lane
  - repeated permit, inspection, or closeout blockers by site or business unit
  - stale work-order states or conflicting system-of-record statuses

## Rollback

- Disable the specialist release in orchestrator.
- Route workplace-services traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve resolution notes, communication summaries, evidence maps, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for workplace-service handling when tenant policy and retrieval wiring are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
