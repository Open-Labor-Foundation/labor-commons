# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit media-production analytics, reporting, and escalation boundaries, refusal triggers, and adjacent-lane return conditions.
- `evaluation/functionality-map.json` containing shared plus analytics-reporting-and-disclosure plus cross-industry abilities, mapped to scenario coverage.
- `evaluation/research-summary.json` with workflow stages, source classes, artifacts, systems-of-record, failure modes, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with complete gates, human verification, and functionality coverage marked complete.

### Runtime Assumptions

- Tenant title hierarchy, version lineage, release windows, territories, and platform maps.
- Tenant metric dictionary, source-precedence rules, release calendars, disclosure approval workflow, audience-methodology policy, and delivery-acceptance policy.
- Authenticated system state for production scheduling, production accounting, MAM or DAM, edit and finishing, delivery and QC, broadcast traffic or newsroom, streaming CMS, measurement, and reporting repositories.
- Named adjacent owners for accounting, payroll, post supervision, delivery and supply chain, rights and clearance, accessibility compliance, safety, labor relations, and legal review.
- Tenant-defined benchmark rules, disclosure thresholds, and public-release controls.

### Required Retrieval Dependencies

- Title, episode, version, territory, platform, reporting-window, and release-stage identifiers.
- Production schedule, DPR, cost, turnover, asset, and package artifacts.
- Delivery specifications, acceptance logs, QC defect records, and caption or subtitle artifacts when they affect metric meaning.
- Availability reports, as-run logs, streaming publish logs, audience-measurement extracts, and disclosure review notes.
- Source-precedence policy, rights-window maps, incident-hold notes, and approval artifacts.

### Refusal and Return Conditions

- Missing title lineage, version state, delivery requirements, rights window, or audience-methodology context.
- Incomplete production, delivery, availability, or audience evidence.
- Source-policy conflicts and unresolved denominator, acceptance-state, or comparability logic.
- Requests that require adjacent authority such as budget approval, payroll or residual certification, delivery signoff, accessibility signoff, rights clearance, labor or safety interpretation, legal override, or public disclosure approval.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind media-production analytics queue controls with prerequisite completion checks for title lineage, version, delivery, rights-window, and disclosure readiness.
- Enforce tenant-level allow-lists and approval controls to prevent unsupported benchmark, forecast, or public-disclosure claims.
- Attach metric-definition notes, source lineage, refresh assumptions, methodology labels, and escalation artifacts to every analytical output.
- Keep a minimum one-cycle validation checkpoint for the first 14 sessions in a new tenant, title family, or distribution-window context.

### Monitoring and Regression Controls

- Track:
  - blocked analytics due to missing title lineage, delivery requirements, rights windows, or measurement methodology,
  - stale or conflicting schedule, cost, asset, delivery, availability, or audience records,
  - unsupported benchmark, causal, or disclosure requests,
  - and repeated cross-window comparability failures involving theatrical, linear, and streaming outputs.
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request class in 3 consecutive sessions.

### Rollback and Recovery

- Disable this overlay in request routing and fallback to orchestrator support for affected tenants.
- Preserve recovery context packets and unresolved-control notes for each affected request lineage.
- Re-collect tenant policy artifacts, title-lineage maps, delivery baselines, rights-window rules, audience-methodology maps, and disclosure approvals before re-enabling.
- Run full spec-pack verification before any retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under this spec,
  - stable retrieval across production, post, delivery, availability, and audience systems,
  - zero unresolved public-disclosure or authority-overreach incidents,
  - full governance review with production operations, post, distribution, rights, finance, and legal signoff,
  - and explicit production value validation from usage.
- Promotion action must be initiated by a separate governance-backed build package.
