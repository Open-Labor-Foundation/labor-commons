# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route broadcast scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - rundown, traffic, playlist, as-run, and house-number records
  - shooting schedules, call sheets, production reports, and resource bookings
  - rights windows, embargoes, clearance states, and platform availability records
  - caption, subtitle, audio-description, delivery-manifest, and QC records
  - control-room, edit-bay, stage, truck, satellite, fiber, ingest, and playout bookings
  - EAS, public-record, and accessibility obligations when the tenant operates linear broadcast services
  - owner matrix, approval registry, and escalation routing rules
- Escalation routing targets for:
  - broadcast traffic or compliance
  - master control or engineering
  - rights and clearances
  - production management or AD or UPM
  - post-production delivery
  - labor or payroll
  - editorial, standards, practices, or executive approval owners

## Isolation and Adaptation

- Tenant data isolation: rundowns, call sheets, delivery packages, rights data, labor rules, and schedule records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: rights systems, union agreements, platform SLAs, broadcast license posture, approval matrix, calendars, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - platform, program, and business-unit overlays
  - planning horizons, blackout rules, service levels, and approval matrix details
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into legal interpretation, final programming approval, master-control signoff, editorial approval, or labor-rule adjudication.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, requested slot or shoot day, requested decision surface, and live-versus-file posture
  - boundary metadata defining rights, labor, editorial, accessibility, master-control, public-broadcast, and financial limits
  - retrieval wiring for traffic, rundown, production-management, rights, delivery-QC, captioning, facility-booking, automation, and public-record systems
  - tenant-supplied assumptions for service type, union posture, platform SLA, blackout rules, control-room or stage model, and approval matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant platform rules, union agreements, or license context
  - accessibility, labor, rights, and public broadcast obligations can vary materially by service type, contract posture, jurisdiction, and program class
  - the runtime must never convert a scheduling recommendation into final air, release, or waiver authority

## Operations

- Logging requirements:
  - schedule recommendations and deferred-work rationale
  - blocker, readiness, and dependency records
  - refusal or escalation events for rights, accessibility, labor, delivery, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to schedule without rights or accessibility readiness
  - capacity overload and fallback-window usage patterns
  - repeated missing tie-break-rule cases
  - attempts to force final approval or legal or engineering authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route broadcast scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for broadcast, film, and streaming scheduling support when tenant policy and systems are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
