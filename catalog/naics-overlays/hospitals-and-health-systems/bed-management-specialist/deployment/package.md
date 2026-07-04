# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route hospital
  bed-management work into a spec-first specialist with retrieval and boundary
  metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios,
  functionality map, research summary, evaluation results, readiness evidence,
  deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is
  separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version, source refresh policy, and tenant source-of-truth hierarchy.
- Tenant retrieval keys for:
  - EHR or EMR encounter records, ADT feeds, location history, admission orders,
    service assignments, and responsible provider context
  - bed boards, unit census, physical bed inventory, staffed-bed rosters,
    closed-bed logs, capacity dashboards, and surge status
  - EVS room-clean state, transport queues, equipment trackers, isolation room
    maps, cohorting constraints, and infection-prevention escalation records
  - transfer-center requests, accepting provider evidence, discharge or
    care-transition records, case-management blockers, and post-acute placement
    status
  - eligibility, referral, authorization, utilization review, inpatient or
    observation status, payer portal, revenue cycle, claim, denial, and appeal
    references where material
  - tenant unit scope, service-line maps, priority matrix, tie-break rules,
    planning horizon, approval matrix, command-center thresholds, downtime
    procedures, and jurisdiction-specific privacy constraints
- Escalation routing targets for:
  - licensed clinical review, responsible provider, and nursing supervisor
  - infection prevention and patient safety
  - utilization management, patient access, payer operations, and revenue cycle
  - discharge planning, case management, transfer center, and legal or
    compliance review
  - healthcare privacy and consent controls
  - operations or command-center final approval

## Isolation and Adaptation

- Tenant data isolation: patient, encounter, ADT, location, bed, unit, staffing,
  transfer, payer, discharge, and approval records are tenant-bound and must not
  cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: unit taxonomy, bed class, source hierarchy,
    priority matrices, surge rules, transfer-center acceptance process,
    staffing escalation, infection-control signoff process, payer contracts,
    direct admission policy, and final approval authorities.
- Allowed adaptation:
  - facility, unit, service-line, and bed-class terminology
  - planning horizon, boarding threshold, surge posture, and priority rules
  - system names, retrieval hooks, evidence shapes, and approval matrices
  - escalation routing and command-center workflow
- Prohibited adaptation:
  - widening into clinical acuity, level-of-care decisions, discharge readiness,
    infection-control clearance, payer interpretation, utilization review,
    privacy exceptions, EMTALA legal conclusions, staffing adequacy signoff, or
    final operational approval.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, patient or encounter context, service
    line, source location, requested destination, planning horizon, priority
    flag, and intended decision surface
  - boundary metadata defining clinical, payer, privacy, legal, transfer,
    staffing, infection-control, discharge, and final approval limits
  - retrieval wiring for EHR, ADT, bed board, capacity dashboard, staffing,
    EVS, transport, equipment, transfer-center, case-management, utilization
    review, payer, privacy, incident, and approval systems
  - tenant-supplied assumptions for jurisdiction, facility, unit scope, bed
    class taxonomy, tie-break rules, surge policy, source hierarchy, isolation
    workflow, and authority matrix
  - refusal rules that trigger orchestrator return when authority or evidence is
    incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant jurisdiction,
    payer contract, service-line, transfer-center, and facility policy context
  - admission status, authorization, referral, discharge, transfer, privacy,
    infection-control, and staffing rules can vary materially by payer, program,
    facility, patient population, and jurisdiction
  - runtime must never convert a bed recommendation into clinical judgment,
    payer approval, privacy override, EMTALA legal conclusion, staffing
    approval, or final operational authority

## Operations

- Logging requirements:
  - bed allocation recommendations, deferred-demand rationale, shortfall state,
    and blocked alternatives
  - ADT, bed-board, staffed-bed, EVS, transport, isolation, equipment, transfer,
    discharge, authorization, and approval evidence references
  - refusal or escalation events for clinical, privacy, payer, legal, staffing,
    infection-control, discharge, system-conflict, and authority gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to place patients without current ADT, encounter, order,
    authorization, isolation, staffing, or discharge evidence
  - capacity overload, boarding, transfer delay, and closed-bed reopening
    patterns
  - missing tenant tie-break-rule or approval-matrix cases
  - attempts to force clinical, payer, privacy, legal, staffing, transfer, or
    final approval authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route hospital bed-management traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve bed recommendations, constraint logs, approval-needed summaries, and
  escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for hospitals and health systems bed
  management support when tenant policy and systems are injected at request
  time.
- Runtime remains `specification-based`; this package does not claim a trusted built
  runtime.
  tenant-safe retrieval wiring, PHI and audit controls, human governance review,
  scenario regression coverage, and an explicit commit that promotes the overlay
  beyond `specification-based`.
