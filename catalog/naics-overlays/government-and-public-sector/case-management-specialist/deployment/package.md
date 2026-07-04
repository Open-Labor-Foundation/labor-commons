# Deployment Package

- Package: `case-management-specialist`
- Industry overlay: `government-and-public-sector`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`

## Included Artifacts

- `manifest.yaml` with the specialist boundary, source baseline, runtime strategy, validation profile, scenarios, tenant adaptation policy, and SaaS readiness.
- `evaluation/scenarios.md` with 12 government-and-public-sector case-management evaluation scenarios.
- `evaluation/functionality-map.json` covering shared + planning-scheduling-and-allocation + government-and-public-sector abilities.
- `evaluation/research-summary.json` with source classes, authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario family coverage, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete functional coverage, research coverage, validated gates, and human verification.
- `readiness/release.md` and `positioning/readiness.md` for release and commercialization posture.

## Safe Materialization Requirements

`commons-crew` can materialize this lane only after tenant-controlled retrieval
and boundary metadata are available:

- Task metadata: jurisdiction, agency, program, case type, service population, planning horizon, queue scope, service-level target, statutory or program deadline, owner state, and requested output shape.
- Boundary metadata: delegated authority, approval matrix, public-records role, procurement role, adjudication role, enforcement role, legal escalation path, audit escalation path, and records-management owner.
- Required systems: case management, records management, public-service administration, procurement, permits, grant or award management, identity or participant-data, calendar or workforce management, document management, and audit logging.
- Required tenant facts: tenant-specific policies, service model, operating constraints, jurisdiction, program statute, agency policy, public-records rules, due-process rules, retention rules, service population, records locations, retrieval hooks, and approved priority or tie-break rules.
- Required evidence: applications, case files, eligibility or permit records, notices, correspondence, appeal or hearing records, procurement or grant documents, official records, deadline logs, owner maps, capacity plans, audit trails, and source freshness metadata.

## Regulated-Lane Caveats

- Do not present schedule, capacity, or allocation recommendations as final budget, staffing, eligibility, benefits, permit, procurement, enforcement, legal, public-records, audit, or operational approvals.
- Do not impersonate official adjudication, enforcement, hearing, public-records, procurement, audit, legal, or financial authority.
- Escalate when rights, benefits, public obligations, appeal deadlines, hearing rights, notices, accessibility obligations, participant data, or eligibility-adjacent outcomes depend on statutory or policy interpretation.
- Refuse or return to orchestrator when official records, source context, jurisdiction, program policy, authority boundaries, or systems of record are missing and would change the answer.

## Deployment Notes

Deploy as a `specification-based` overlay for tenants that need public-sector
case-management planning discipline before any built runtime exists. Tenant
configuration should load approved program authority maps, source retrieval
policies, system-of-record connectors, records-retention rules, public-records
and privacy routing, deadline calendars, priority rules, and escalation owners.

The first production use should run in review-required mode with decision logs
retained. Human reviewers should verify that output packages keep records,
deadlines, assumptions, unresolved blockers, and authority boundaries explicit.

## Rollback

Rollback is package-level: remove tenant entitlement for this overlay or revert
the catalog package to the previous catalog state. Because no trusted built
runtime is committed, rollback does not require code rollback outside catalog
configuration. Preserve all generated case recommendations, source references,
and audit logs under tenant records policy before disabling access.

## Promotion To retained implementation

Promote only if repeated tenant usage proves common enough and review logs show
stable behavior across jurisdictions and programs. Promotion requires a separate
retained-implementation implementation commit, connector-specific retrieval tests,
authority-boundary regression tests, records and privacy controls, escalation
workflow tests, rollback playbook, and approval from the catalog owner. This
spec pack does not claim that retained implementation.
