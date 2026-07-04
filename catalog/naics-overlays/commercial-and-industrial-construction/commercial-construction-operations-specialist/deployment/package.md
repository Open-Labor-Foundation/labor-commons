# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route commercial construction operations work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - work-order, PMIS, area-release, and project-status records
  - permit, inspection, objection, occupancy, and jurisdiction records
  - approved plans, approved submittals, RFIs, and change records
  - daily reports, safety observations, QC reports, and closeout packages
  - subcontractor status, schedule updates, cost-impact references, and owner matrix records
  - lifecycle-state, blocker, escalation, and completion-evidence logs
- Escalation routing targets for:
  - project controls
  - permitting
  - inspection or AHJ coordination
  - safety
  - superintendent or field operations
  - licensed trades, design authority, change-order approvers, closeout owners, and finance approvers

## Isolation and Adaptation

- Tenant data isolation: work orders, permit files, inspection records, daily reports, schedule evidence, and closeout artifacts are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: jurisdiction rules, project-delivery model, PMIS states, owner punch conventions, retrieval hooks, owner matrix, and trade boundaries.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - lifecycle labels, handoff artifact shapes, and retrieval hooks
- Prohibited adaptation:
  - widening into permit approval, code interpretation, occupancy approval, licensed trade signoff, engineering judgement, financial approval, or direct field execution.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, route state, project and area context, trade package, current lifecycle state, requested action, and governing schedule or closeout milestone
  - boundary metadata defining permit, inspection, occupancy, safety, licensed-trade, engineering, change-order, and financial limits
  - retrieval wiring for PMIS, work-order, schedule, permitting, inspection, safety, document-control, and closeout systems
  - tenant-supplied assumptions for jurisdiction, delivery model, site type, occupancy posture, trade boundary, completion criteria, and owner matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - permit closure, TCO timing, special-inspection release, and final occupancy requirements vary materially by locality and owner contract
  - the runtime must never convert execution-tracking references into permit approval, occupancy approval, or licensed-trade authority

## Operations

- Logging requirements:
  - lifecycle-state changes and reversals
  - blocker, rework, and dependency records
  - refusal or escalation events for permit, inspection, occupancy, safety, change, and authority gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated missing prerequisite attempts
  - attempts to force code-interpretation, occupancy, or trade-signoff authority into the lane
  - repeated permit, inspection, safety, or closeout blockers by business unit or jurisdiction
  - reversals from ready-to-complete back to blocked because new evidence invalidated the state

## Rollback

- Disable the specialist release in orchestrator.
- Route commercial construction operations traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve execution summaries, blocker logs, completion-evidence maps, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for commercial-and-industrial-construction operations workflows when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
