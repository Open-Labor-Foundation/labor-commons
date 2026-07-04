# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route commercial-and-industrial-construction site logistics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - work-order, material-request, and site-logistics records
  - permit, inspection, occupancy, and jurisdiction records
  - inventory, warehouse, laydown-yard, delivery-receipt, and vendor records
  - site logs, safety observations, and closeout packages
  - owner matrix, subcontractor state, and change-order records
  - blocker, routing, shortage, vendor-risk, and closure logs
- Escalation routing targets for:
  - project controls
  - permitting
  - inspection or AHJ coordination
  - safety
  - superintendent or field operations
  - licensed trades, design authority, procurement approvers, and finance approvers

## Isolation and Adaptation

- Tenant data isolation: work orders, permit files, inventory records, vendor evidence, site evidence, and closeout records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: jurisdiction rules, site-access controls, owner matrix, delivery-window rules, approved-vendor controls, and trade boundaries.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - handoff artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into permit approval, code interpretation, licensed trade signoff, engineering judgement, commercial approval, or field execution.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, route state, prior owner, next owner, material or delivery context, and requested action
  - boundary metadata defining permit, inspection, safety, licensed-trade, engineering, procurement, and financial limits
  - retrieval wiring for work-order, project-management, inventory, vendor, permitting, inspection, safety, and document systems
  - tenant-supplied assumptions for jurisdiction, service model, site type, access limits, trade boundary, delivery-window rules, and owner matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - occupancy, permit closure, inspection release, gate-access, and delivery-hour requirements can vary materially by locality and owner contract
  - the runtime must never convert coordination references into permit approval, substitution approval, or licensed-trade authority

## Operations

- Logging requirements:
  - handoff ownership transitions
  - blocker, shortage, and dependency records
  - refusal or escalation events for permit, inspection, safety, vendor-risk, and authority gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - stale handoffs or duplicated ownership claims
  - repeated missing prerequisite attempts
  - attempts to force execution or code-interpretation authority into the lane
  - repeated permit, inspection, shortage, or vendor blockers by business unit or jurisdiction

## Rollback

- Disable the specialist release in orchestrator.
- Route site logistics traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve handoff summaries, blocker logs, logistics evidence maps, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for commercial-and-industrial-construction site logistics coordination when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
