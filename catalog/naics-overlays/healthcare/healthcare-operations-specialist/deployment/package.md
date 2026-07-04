# Deployment Package

## Runtime

- Target runtime: `specification-based`
- Deployment model: Catalog spec pack consumed by the dispatcher or materialization layer. No retained implementation is committed in this package.
- Required secrets: None for the spec pack. A materialized runtime would require tenant-approved retrieval credentials for EHR operational dashboards, ADT, scheduling, bed/capacity, staffing, ITSM, referral, authorization, eligibility, document repository, privacy, and audit systems.
- Required configuration: Tenant facility, service line, operating unit, RACI, source-of-truth hierarchy, escalation SLA, downtime procedure, privacy/minimum-necessary policy, authorization/referral/eligibility retrieval rules, and adjacent specialist routing map.

## Isolation

- Tenant boundary: Cross-tenant sharing is prohibited. Tenant policies, system mappings, patient/member records, schedules, rosters, and PHI handling rules remain tenant-scoped.
- Knowledge boundary: Public authority sources define the baseline; tenant policy and retrieved systems determine final operational handling.
- Adaptation policy: Allow tenant terminology and workflow configuration only when it preserves the public baseline and records assumptions. Do not tune or adapt into clinical, privacy, payer, staffing licensure, legal, or executive authority.

## Operations

- Monitoring: Track scenario pass rate, ability coverage, source freshness, refusal/escalation rate, missing-prerequisite rate, source-conflict rate, PHI handling escalations, downtime escalations, and completion evidence defects.
- Logging: Record source records, status transitions, exception summaries, owner routing, refusals, escalation reasons, PHI handling posture, residual risks, completion evidence, and reopened-work triggers.
- Rollback path: Disable the validated claim or route all requests back to orchestrator if authority sources expire, tenant source hierarchy is missing, validation falls below threshold, privacy controls are unavailable, or production evidence shows unsafe routing.
- Support owner: Catalog maintainers for spec-pack content; tenant operations, privacy, clinical, IT, revenue cycle, and staffing owners for runtime decisions.

## Materialization Requirements For `commons-crew`

- Required task metadata: `industry-overlays::healthcare::healthcare-operations-specialist`, facility, unit or clinic, service line, operating date, requested action, lifecycle state, owner, due time, escalation SLA, and output shape.
- Required boundary metadata: clinical-versus-administrative boundary, PHI/minimum-necessary posture, payer/referral/authorization boundary, staffing licensure boundary, executive approval threshold, adjacent specialist routes, and refusal triggers.
- Tenant-supplied assumptions: tenant policies, source hierarchy, downtime procedure, RACI, service model, capacity definitions, staffing roster ownership, approved communication channels, and patient/member privacy constraints.
- Retrieval dependencies: EHR dashboard, ADT, scheduling, bed/capacity tool, staffing system, ITSM, referral, authorization, eligibility, document repository, privacy/access-control, and audit logs.
- Regulated-lane caveats: do not imply diagnosis, treatment planning, clinical protocol authority, staffing licensure decision, payer policy interpretation, PHI disclosure approval, or legal/executive authority.
- Orchestrator return conditions: missing tenant facts, missing source records, conflicting systems, PHI uncertainty, patient-safety indicator, clinical decision dependency, payer interpretation dependency, staffing licensure dependency, or conflicting public and tenant policy.

## Promotion Path

- Keep runtime as `specification-based` until usage patterns justify a trusted build.
- Promote only through a separate PR that adds trusted runtime implementation, connector contracts, privacy and security review evidence, clinical and compliance boundary review, production monitoring, rollback controls, and refreshed evaluation results.
- Do not infer trusted built status from this validated package alone.
