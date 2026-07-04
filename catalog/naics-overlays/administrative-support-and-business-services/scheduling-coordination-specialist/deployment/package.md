# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route administrative support scheduling work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - client master, SOW, order form, service catalog, RACI, approval matrix, and escalation matrix records
  - ticket, case, BPM, queue, appointment, backlog, and exception records
  - scheduling, calendar, WFM, staffing table, timekeeping, capacity forecast, and seat-pool records
  - service-level reports, priority rules, tie-break rules, client service windows, blackout periods, and planning horizon records
  - source evidence bundles, intake packets, authorization records, document repository links, privacy classifications, retention classes, and handoff checklists
  - IAM, audit, GRC, policy, and exception records
- Escalation routing targets for:
  - administrative operations
  - workforce coordination
  - shared services and back-office processing
  - contact-center operations
  - records processing and records governance
  - administrative compliance, privacy, and access governance
  - HR, payroll, legal, finance, contract, quality acceptance, travel, events, IT, and client/service owners

## Isolation and Adaptation

- Tenant data isolation: client schedules, queue records, staff rosters, calendars, WFM extracts, SOWs, evidence bundles, and handoff artifacts are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: service catalog, SOW, labor rules, calendars, client windows, seat pools, confidentiality tiers, approval matrix, priority rules, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - queue, ticket, appointment, and handoff artifact names
  - service-level models, planning horizons, and priority matrices
  - tenant retrieval hooks, owner maps, and approval routing
  - stricter confidentiality, privacy, access, retention, or cross-client segregation rules
- Prohibited adaptation:
  - widening into final staffing, overtime, budget, service-level, client commitment, contract, HR, payroll, wage-and-hour, legal, privacy, compliance, quality acceptance, or operational approval authority.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, client, service category, queue, requested date, planning horizon, SLA, priority, prior owner, next-owner expectation, and requested decision surface
  - boundary metadata defining staffing, overtime, HR, payroll, wage-and-hour, legal, privacy, compliance, finance, contract, quality acceptance, travel, event, IT access, and final approval limits
  - retrieval wiring for client master, CLM/SOW, ticketing, queue, scheduling, calendar, WFM, timekeeping, document, IAM, audit, service reporting, and GRC systems
  - tenant-supplied assumptions for service model, client windows, capacity envelope, seat pools, staff eligibility, labor rules, source hierarchy, owner map, priority matrix, tie-break rules, and approval matrix
  - refusal rules that trigger orchestrator return when authority, evidence, tenant facts, or source hierarchy is incomplete or conflicting
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant, jurisdiction, worker-type, contract, and client-specific rules
  - wage-and-hour, accommodation, privacy, access, contract, service-level, and cross-client confidentiality requirements can vary materially
  - the runtime must never convert a schedule recommendation into final staffing, overtime, wage-and-hour, payroll, HR, contract, privacy, or client-commitment authority

## Operations

- Logging requirements:
  - schedule and allocation recommendations, deferred-work rationale, and capacity shortfall analysis
  - constraint logs, source records, tenant assumptions, and unresolved blockers
  - handoff status summaries naming prior owner, next owner, required artifacts, due date, and blocker state
  - refusal and escalation events for missing prerequisites, ownership ambiguity, policy conflicts, and approval-boundary requests
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to schedule without service catalog, SOW, source queue, staffing table, or handoff evidence
  - capacity overload and SLA shortfall patterns
  - repeated missing priority matrix or tie-break-rule cases
  - attempts to force final staffing, overtime, client commitment, HR, payroll, contract, legal, privacy, or quality authority into the lane
  - repeated ambiguous ownership or dropped-handoff patterns

## Rollback

- Disable the specialist release in orchestrator.
- Route administrative support scheduling traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, handoff status summaries, blocked-dependency notes, and refusal records for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for administrative support and business services scheduling coordination when tenant policy and records are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
