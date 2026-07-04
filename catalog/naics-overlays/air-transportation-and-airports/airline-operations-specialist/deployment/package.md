# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route airline operations work into a spec-first specialist with retrieval, evidence, and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - flight, trip, aircraft registration or tail, station, gate, stand, route, schedule, off-block, on-block, and delay-code records
  - dispatch release, flight release, flight plan, route, weather, NOTAM, OCC, and ACARS or movement-message records
  - load manifest, load sheet, weight and balance, LMC, passenger, baggage, cargo, ULD, air waybill, NOTOC, and dangerous-goods records
  - aircraft maintenance log, maintenance-control notes, deferred-defect or MEL status, airworthiness release references, and service logs
  - customs, security, screening, cargo acceptance, warehouse, baggage reconciliation, station operations, and destination handoff records
- Escalation routing targets for:
  - dispatcher, PIC, OCC, and flight operations control
  - maintenance control and authorized airworthiness or return-to-service owners
  - load control, ramp, baggage, cargo, warehouse, and station operations
  - customs, security, dangerous-goods, legal, crew scheduling, customer operations, and airport operations

## Isolation and Adaptation

- Tenant data isolation: flight, passenger, baggage, cargo, aircraft, maintenance, customs, security, and operations records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: GOM, OpSpecs, station manuals, route books, security programs, cargo procedures, delay codes, service-level rules, owner matrices, and system retrieval hooks.
- Allowed adaptation:
  - tenant terminology, delay codes, role names, station milestone names, and evidence field names
  - airline-specific route, aircraft, cargo, baggage, security, and customs operating constraints
  - output templates and retrieval hooks that preserve the public baseline
- Prohibited adaptation:
  - widening into dispatch release, operational control, airworthiness release, maintenance disposition, customs release, security acceptance, dangerous-goods approval, legal interpretation, financial approval, or safety signoff.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, lifecycle state, flight, aircraft, station, route, service level, asset, load, cargo, baggage, documentation, and requested action
  - boundary metadata defining dispatch, PIC, operational-control, maintenance, customs, security, dangerous-goods, safety, legal, financial, and policy-override limits
  - retrieval wiring for OCC, dispatch, DCS, load control, maintenance, baggage reconciliation, cargo, WMS, TMS, customs, security, station, and movement-message systems
  - tenant-supplied assumptions for GOM, OpSpecs, security program, station manual, route book, owner matrix, completion criteria, exception queues, and source hierarchy
  - refusal rules that trigger orchestrator return when authority, evidence, or source context is incomplete or conflicting
- Regulated-lane caveats:
  - public baseline sources do not replace tenant GOM, OpSpecs, station manuals, security programs, customs procedures, or route books
  - route, weather, NOTAM, curfew, crew, hazmat, customs, security, and maintenance conditions can materially alter whether movement is lawful or safe
  - the runtime must never convert evidence packaging into dispatch, maintenance-release, customs, security, dangerous-goods, legal, or safety authority

## Operations

- Logging requirements:
  - lifecycle state transitions, hold, rework, return, completion, and orchestrator return decisions
  - missing-prerequisite, custody-break, documentation-gap, and conflicting-record summaries
  - refusal or escalation events for dispatch, operational control, maintenance, customs, security, dangerous goods, route disruption, and safety boundaries
  - source refresh checks and public-source or tenant-policy conflicts
- Monitoring:
  - repeated attempts to mark work complete without evidence
  - recurring custody breaks in baggage, cargo, ULD, air waybill, or handoff records
  - repeated missing dispatch, load, maintenance, customs, security, or hazmat prerequisites
  - attempts to force dispatch, airworthiness, customs, security, or safety authority into the lane

## Rollback

- Disable the specialist release in the orchestrator.
- Route airline operations traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve readiness summaries, exception notes, custody-break records, refusal notes, and completion evidence packages for post-rollback review.
- Re-run local spec-pack audit before re-enabling.

## Deployment Notes

- Suitable as a validated package for airline operations execution support when tenant policy and retrieval hooks are supplied at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
