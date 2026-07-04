# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route facilities space-planning work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - space intake requests, CPA or equivalent requirements packages, and OA or occupancy-agreement records
  - occupancy, utilization, seat-count, and headcount planning data
  - floor plans, stacking diagrams, adjacency matrices, and project phasing artifacts
  - work orders, project schedules, permits, inspection records, and safety observations
  - closeout packages, commissioning evidence, and document repositories
  - owner matrix, approval matrix, budget authority map, and move-management targets
- Escalation routing targets for:
  - project controls
  - permitting and AHJ coordination
  - inspection or commissioning coordination
  - safety
  - move management and workplace strategy
  - design authority, licensed trades, facilities leadership, and finance approvers

## Isolation and Adaptation

- Tenant data isolation: occupancy records, OA data, floor plans, work orders, permit files, inspection evidence, and closeout records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: neighborhood standards, privacy rules, security posture, lease terms, budget thresholds, local AHJ requirements, and approved tie-break logic.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - artifact shapes and retrieval hooks
  - planning horizon and service-model parameters
- Prohibited adaptation:
  - widening into permit approval, code interpretation, licensed trade signoff, architect or engineer judgment, lease execution, budget approval, or field execution.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, OA or facility identifiers, business-unit demand, requested action, planning horizon, and desired occupancy or move window
  - boundary metadata defining permit, inspection, safety, design-authority, licensed-trade, lease, finance, and final-approval limits
  - retrieval wiring for IWMS or CAFM, OA or inventory, occupancy reporting, project management, work-order, permitting, inspection, safety, and document systems
  - tenant-supplied assumptions for neighborhood standards, support-space ratios, privacy rules, security requirements, accessibility policy, tie-break rules, and approval matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - permit sets, accessibility reviews, occupancy-release conditions, and local inspection sequences vary materially by locality and building type
  - the runtime must never convert planning references into permit approval, occupancy authorization, or licensed design or trade authority

## Operations

- Logging requirements:
  - intake normalization and source selection
  - occupancy, utilization, and capacity metrics used
  - blocker, dependency, and tie-break records
  - refusal or escalation events for permit, inspection, safety, design-authority, and approval gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated missing prerequisite attempts
  - stale OA, occupancy, or floor-plan references
  - attempts to force final assignment, code, permit, or design authority into the lane
  - repeated permit, inspection, or closeout blockers by site, business unit, or jurisdiction

## Rollback

- Disable the specialist release in orchestrator.
- Route space-planning traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve recommendation packets, constraint logs, evidence maps, and escalation notes for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for facilities-services-and-building-operations space planning support when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
