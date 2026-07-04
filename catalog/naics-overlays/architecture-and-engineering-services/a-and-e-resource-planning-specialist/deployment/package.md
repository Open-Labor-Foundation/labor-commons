# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route A/E resource-planning work into a spec-first specialist with retrieval and boundary metadata.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Required runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - project portfolio, backlog, and client-commitment records
  - PMIS schedules, phase codes, milestone calendars, and review gates
  - ERP or PSA fee and hour budgets, burn tracking, and utilization targets
  - resource roster, reviewer assignments, licensure map, and availability calendars
  - subconsultant scope, contract, and commitment records
  - BIM execution plans, model progression matrices, model-quality reports, and document-control repositories
  - approval matrix, overtime posture, fee authority thresholds, and escalation routing rules
- Escalation routing targets for:
  - architect-of-record
  - engineer-of-record
  - project executive or operations approver
  - contracts and fee management
  - quality management
  - BIM management
  - construction administration where applicable

## Isolation and Adaptation

- Tenant data isolation: project, staffing, fee, model, QA/QC, and contract records are tenant-bound and must not cross tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: jurisdiction rules, phase names, utilization targets, approval matrix, project-delivery method details, and system-of-record mappings.
- Allowed adaptation:
  - terminology and role names
  - phase code mappings and review-gate details
  - project-delivery method and office structure
  - artifact shapes and retrieval hooks
  - tie-break rules, service levels, and approval thresholds
- Prohibited adaptation:
  - widening into sign-and-seal, responsible-control, architect-of-record, engineer-of-record, contract negotiation, or final staffing and fee approval authority.

## Materialization Requirements

- Materialization requirements for `commons-crew`:
  - task metadata defining request class, planning horizon, project stage, requested date, and requested decision surface
  - boundary metadata defining licensure, responsible-control, contract, fee, QA/QC, BIM, and financial-approval limits
  - retrieval wiring for PMIS, ERP or PSA, timekeeping, resource-management, document-control, BIM, and approval systems
  - tenant-supplied assumptions for jurisdiction, phase taxonomy, utilization policy, review gates, subconsultant posture, and authority matrix
  - refusal rules that trigger orchestrator return when authority or evidence is incomplete
- Regulated-lane caveats:
  - public baseline sources do not remove the need for tenant or jurisdiction rules
  - sign-and-seal, firm authorization, and responsible-control requirements can vary materially by jurisdiction and contract posture
  - the runtime must never convert a staffing recommendation into licensed design authority, contract action, or final approval

## Operations

- Logging requirements:
  - schedule and allocation recommendations with tradeoff rationale
  - blocker and dependency records
  - refusal or escalation events for licensure, QA/QC, contract, fee, authority, and tie-break gaps
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - repeated attempts to plan without phase, fee, or licensure prerequisites
  - capacity overload and subconsultant dependency patterns
  - repeated missing tie-break-rule cases
  - attempts to force final approval or sign-and-seal authority into the lane

## Rollback

- Disable the specialist release in orchestrator.
- Route A/E resource-planning traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Preserve schedule recommendations, constraint logs, approval-needed summaries, and escalation packets for post-rollback review.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for architecture and engineering services resource planning when tenant policy is injected at request time.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
