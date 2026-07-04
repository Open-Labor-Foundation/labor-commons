# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route construction and field-service asset or equipment coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - work-order, PMIS, CMMS, dispatch, and field-service records
  - permit, inspection, and jurisdiction records
  - site logs, safety observations, delivery receipts, startup records, and closeout packages
  - owner matrix, subcontractor state, inventory, installed-property, and change-order records
  - blocker, routing, and closure logs
- Escalation routing targets for:
  - project controls
  - permitting
  - inspection or AHJ coordination
  - safety
  - superintendent or field operations
  - facilities, licensed trades, design authority, and finance approvers

## Isolation and Adaptation

- Tenant data isolation: work orders, permit files, site evidence, delivery records, and closeout records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: jurisdiction rules, contract requirements, owner matrix, equipment classes, trade boundaries, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - handoff artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into permit approval, code interpretation, licensed trade signoff, engineering judgment, startup authorization, or field execution.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, route state, prior owner, next owner, and requested action
  - boundary metadata defining permit, inspection, safety, licensed-trade, engineering, and financial limits
  - retrieval wiring for work-order, PMIS, CMMS, permitting, inspection, safety, inventory, and document systems
  - tenant-supplied assumptions for jurisdiction, service model, site type, equipment class, trade boundary, and owner matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - occupancy, permit closure, inspection, startup, and turnover requirements can vary materially by locality and owner contract
  - the runtime must never convert coordination references into permit approval or licensed-trade authority

## Operations

- Logging requirements:
  - handoff ownership transitions
  - blocker and dependency records
  - refusal or escalation events for permit, inspection, safety, startup, and authority gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - stale handoffs or duplicated ownership claims
  - repeated missing prerequisite attempts
  - attempts to force execution or code-interpretation authority into the lane
  - repeated delivery, startup, or inspection blockers by business unit or jurisdiction

## Rollback

- Disable the specialist release in orchestrator.
- Route construction and field-service asset or equipment coordination traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration if one exists.
- Preserve handoff summaries, blocker logs, evidence maps, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for construction and field-service asset or equipment coordination when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
