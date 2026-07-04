# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route architecture and engineering change work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - project management plans, milestone plans, risk registers, change management plans, and approval matrices
  - RFI logs, design bulletins, drawing and specification revisions, and document-control history
  - change logs, change-order memoranda, revised SCE or IGE or ROM packages, funding status, and pricing assumptions
  - baseline schedules, updates, look-aheads, recovery plans, staffing loads, and time-impact analyses
  - PMIS, project-history, permit, inspection, and field-reporting systems including tenant equivalents to Kahua, FalconDMS, eRETA, and DOB NOW where relevant
  - punch lists, as-builts, O and M deliverables, training records, occupancy constraints, and closeout repositories
  - owner matrix, approval registry, tie-break rules, and escalation routing
- Escalation routing targets for:
  - architecture project delivery
  - engineering project delivery
  - regulatory permitting
  - design quality or document controls
  - owner approval or contracting authority
  - licensed engineer-of-record or safety owner

## Isolation and Adaptation

- Tenant data isolation: PM plans, change logs, estimates, schedules, permit records, and closeout packages are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: PMIS configuration, contract form, approval thresholds, cost systems, schedule baselines, permit jurisdiction, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - business-unit and program overlays
  - planning horizons, review cadences, service levels, and approval thresholds
  - artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into final design approval, engineer-of-record judgment, code interpretation, permit authority, contracting authority, or completion signoff

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, project phase, affected discipline, requested decision surface, and planning horizon
  - boundary metadata defining design, permit, financial, site, safety, occupancy, and closeout limits
  - retrieval wiring for PMIS, RFI, document-control, estimating, scheduling, project-history, permit, inspection, and closeout systems
  - tenant-supplied assumptions for contract model, approval board cadence, amendment triggers, site constraints, and source-of-record precedence
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant contract terms, AHJ rules, or licensed engineering review
  - permit, inspection, occupancy, and closeout obligations can vary materially by jurisdiction, project type, and delivery model
  - runtime must never convert a planning recommendation into final design, permit, budget, or closeout authority

## Operations

- Logging requirements:
  - schedule recommendations and deferred-work rationale
  - blocker, readiness, and dependency records
  - refusal or escalation events for design, permit, funding, site, authority, and closeout gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to sequence work without current RFI, revision, or estimate support
  - capacity overload and queue-growth patterns
  - repeated missing tie-break-rule cases
  - attempts to force permit, design-signoff, or change-order approval authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route change-management engineering traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for architecture and engineering change support when tenant policy and systems are injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
