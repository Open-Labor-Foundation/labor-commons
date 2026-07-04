# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive vehicle-logistics work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - VIN, production-order, build, and program records
  - yard, compound, gate, ramp, port, carrier, ETA, and proof-of-movement records
  - quality hold, campaign, recall, damage, nonconformance, and release records
  - supplier, approved-carrier, and vendor-constraint records
  - order, destination, dealer or fleet acceptance, and closure records
  - blocker, routing, shortage, escalation, and closure logs
- Escalation routing targets for:
  - quality and release
  - production planning and inventory operations
  - procurement and supplier quality
  - logistics control tower and carrier management
  - transportation compliance, customs, legal, and engineering change owners

## Isolation and Adaptation

- Tenant data isolation: VIN, movement, hold, supplier, destination, and proof-of-delivery records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: route books, carrier contracts, release matrices, destination rules, customs requirements, damaged-vehicle handling, and local owner maps.
- Allowed adaptation:
  - terminology and role names
  - plant, brand, and tenant policy overlays
  - handoff artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into plant release, recall approval, quality disposition, supplier approval, legal interpretation, customs approval, or dispatch execution.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, route state, prior owner, next owner, VIN population, destination, and requested action
  - boundary metadata defining quality, release, recall, supplier, engineering, transport-compliance, legal, and execution limits
  - retrieval wiring for VIN, MES, YMS or WMS, TMS, QMS, supplier, destination, and document systems
  - tenant-supplied assumptions for plant, brand, trade lane, approved carriers, stop-ship rules, destination acceptance rules, and owner matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant release matrices, route books, or customs rules
  - damaged-EV, battery, hazardous, export, and customs conditions can materially alter what movement is lawful or safe
  - the runtime must never convert coordination references into release approval, recall remedy approval, supplier approval, or transport-execution authority

## Operations

- Logging requirements:
  - handoff ownership transitions
  - blocker, dwell, shortage, carrier, and supplier-risk records
  - refusal or escalation events for hold, release, recall, substitution, or authority gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - stale handoffs or duplicated ownership claims
  - repeated missing-prerequisite attempts
  - attempts to force dispatch or release authority into the lane
  - repeated hold, recall, ETA, or carrier-capacity blockers by plant, program, or destination

## Rollback

- Disable the specialist release in orchestrator.
- Route vehicle-logistics traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve handoff summaries, blocker logs, VIN evidence maps, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for automotive vehicle-logistics coordination when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
