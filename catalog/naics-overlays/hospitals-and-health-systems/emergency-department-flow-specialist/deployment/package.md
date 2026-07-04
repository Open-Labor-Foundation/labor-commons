# Emergency Department Flow Specialist Deployment Package

## Package Identity

- Package path: `catalog/naics-overlays/hospitals-and-health-systems/emergency-department-flow-specialist/`
- Agent slug: `emergency-department-flow-specialist`
- Queue slug: `industry-overlays::hospitals-and-health-systems::emergency-department-flow-specialist`
- Issue: `#1446`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- retained implementation: not committed

## Deployment Posture

Deploy this package as a validated specification source for ED flow planning and allocation support. It can guide just-in-time materialization, reviewer evaluation, tenant discovery, and future runtime promotion, but it must not be treated as a retained implementation until a separate build PR is committed and approved.

The package is suitable for tenants that need ED flow recommendations, constraint logs, approval-needed summaries, high-risk escalation notes, safety or security incident status summaries, and adjacent-specialist routing. It is not suitable for autonomous clinical triage, medical screening, treatment planning, discharge readiness, EMTALA interpretation, payer-policy interpretation, privacy approval, staffing approval, ambulance diversion approval, or command decisions.

## Required Runtime Metadata

`commons-crew` must materialize this lane with:

- Task metadata: industry overlay path, agent slug, workflow phase group, industry profile, runtime strategy, target delivery level, requested output shape, requester role, tenant/facility context, operating period, and intended decision.
- Boundary metadata: clinical-triage boundary, EMTALA screening and stabilization boundary, privacy and minimum-necessary boundary, payer interpretation boundary, staffing and command approval boundary, security incident boundary, and adjacent specialist map.
- Evidence metadata: source record IDs, timestamps, source-system names, freshness rules, owner roles, assumptions, constraints, tradeoffs, unresolved blockers, required approvals, and downstream impact.
- Refusal metadata: missing fact, missing source record, stale source, conflicting policy, clinical authority, EMTALA authority, privacy authority, payer authority, staffing authority, command authority, legal authority, safety-critical authority, and final approval request.

## Tenant Prerequisites

Before producing tenant-specific recommendations, retrieve:

- Facility, ED campus, service model, treatment-space map, split-flow or fast-track model, observation model, and command structure.
- EHR or EMR ED module, ED tracking board, ADT feed, bed board, staffing roster, ambulance/offload log, diagnostic status, consult queue, transfer center, discharge milestone, case management, authorization, privacy, and incident-system retrieval hooks.
- Tenant ED flow playbook, approved service levels, boarding thresholds, ambulance offload thresholds, LWBS thresholds, tie-break rules, escalation timers, safety huddle cadence, downtime procedures, and RACI.
- Jurisdiction, state-specific privacy and consent rules, behavioral-health hold rules, transfer procedures, security procedures, and legal/compliance escalation paths.
- Payer, plan, eligibility, referral, authorization, utilization, coding, transfer, placement, and discharge documentation dependencies when post-ED placement or follow-up is implicated.

## Deployment Steps

1. Register the package as a specification-based hospitals-and-health-systems industry overlay.
2. Confirm the tenant has accepted the regulated-lane caveats and runtime retrieval dependencies.
3. Wire retrieval only to approved systems of record with role-based access and audit logging.
4. Configure output templates for capacity recommendation, constraint log, approval-needed summary, high-risk escalation note, incident status summary, and adjacent-owner routing.
5. Configure refusal and orchestrator-return checks before any recommendation is generated.
6. Run the 12 scenario families in `evaluation/scenarios.md` against tenant-adapted configuration.
7. Record source refresh, human verification, tenant assumptions, and deployment approval evidence.

## Rollback

Rollback is required if source retrieval is stale, tenant rules conflict with public emergency-care or privacy requirements, evaluation coverage regresses, PHI controls are incomplete, or generated recommendations imply clinical, payer, privacy, staffing, diversion, command, or legal authority.

Rollback actions:

- Disable tenant materialization for this lane.
- Preserve audit records for the failed recommendation or configuration.
- Route active ED flow work to human command, clinical, nursing, privacy, payer, or throughput owners.
- Restore the last verified tenant configuration and source baseline.
- Re-run the spec-pack audit, functionality coverage, and tenant scenario suite before re-enabling.

## Monitoring

Track:

- Percentage of recommendations with complete source-record traceability.
- Count of low-confidence returns due to missing ED board, ADT, staffing, bed, privacy, or policy data.
- Count of clinical, EMTALA, privacy, payer, staffing, diversion, command, and security refusals.
- Demand-over-capacity escalations and time to acknowledged owner.
- PHI disclosure blocks and privacy-review routing.
- Tenant source decay and source refresh status.

## Trusted Build Promotion

Promote to a retained implementation only through a separate PR that commits maintained runtime code, retrieval adapters, regression tests, updated readiness evidence, and deployment approvals. Promotion should be considered when usage is common enough to justify maintenance, tenant configurations converge, and human-reviewed outputs show stable safe behavior.
