# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route arts, entertainment, and recreation event-scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - booking holds, event briefs, venue-calendar records, and event status revisions
  - ticketing, reservation, accessible seating inventory, onsale, and allotment records
  - deposit, payment, refund, chargeback, and guest-service exception records
  - staffing minimums, contractor rosters, volunteer plans, and approval matrices
  - load-in, load-out, changeover, weather, site-readiness, and maintenance records
  - security, suspicious-activity, incident, access-control, and emergency-plan records
  - owner matrix, approval registry, and escalation routing rules
- Escalation routing targets for:
  - ticketing or box office
  - guest services or audience recovery
  - pricing and revenue management
  - fraud and loss prevention
  - venue operations or event production
  - security, safety, or emergency management
  - executive or operating approval owners

## Isolation and Adaptation

- Tenant data isolation: holds, guest records, ticketing data, staffing plans, incident records, and approval paths are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: promoter contracts, venue policies, refund rules, approval matrices, local permit posture, staffing models, and systems-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - venue, program, and business-unit overlays
  - planning horizons, hold-release rules, service levels, and approval matrix details
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into final event approval, pricing override, refund approval, fraud investigation, security command, or life-safety signoff.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, event type, requested decision surface, and current booking state
  - boundary metadata defining ticketing, pricing, refund, fraud, security, venue, and financial limits
  - retrieval wiring for booking, ticketing, CRM, payment, workforce, venue-calendar, service desk, and incident systems
  - tenant-supplied assumptions for venue model, staffing minimums, promoter hold windows, refund posture, weather thresholds, and approval matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for venue-specific accessible seating rules, local permit or fire-code posture, or promoter and ticketing terms
  - event safety, payment dispute, and consumer-protection obligations can vary materially by jurisdiction, venue class, event type, and tenant policy
  - the runtime must never convert a scheduling recommendation into final go-live, onsale, refund, or safety authority

## Operations

- Logging requirements:
  - schedule recommendations and deferred-work rationale
  - blocker, readiness, and dependency records
  - refusal or escalation events for ticketing, pricing, refunds, fraud, safety, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to schedule without booking, payment, or accessible-inventory readiness
  - capacity overload and fallback-date usage patterns
  - repeated missing tie-break-rule cases
  - attempts to force final approval or fraud or safety authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route event-scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for arts, entertainment, and recreation event-scheduling support when tenant policy and systems are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
