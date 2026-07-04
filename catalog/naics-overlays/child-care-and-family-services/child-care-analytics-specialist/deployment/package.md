# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit child-care analytics, reporting, and escalation boundaries, refusal triggers, and adjacent-lane return conditions.
- `evaluation/functionality-map.json` containing shared plus analytics-reporting-and-disclosure plus cross-industry abilities, mapped to scenario coverage.
- `evaluation/research-summary.json` with workflow stages, source classes, artifacts, systems-of-record, failure modes, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with complete gates, human verification, and functionality coverage marked complete.

### Runtime Assumptions

- Tenant program-model, provider-type, jurisdiction, and funding-stream mappings.
- Tenant metric dictionary, source-precedence rules, report-calendar definitions, and disclosure approval workflow.
- Authenticated system state for attendance, subsidy, licensing, Head Start, staffing, and document repositories.
- Named adjacent owners for subsidy eligibility, licensing, family services, safety, legal, and publication approval.
- Tenant-defined small-cell suppression, privacy, and external-sharing rules.

### Required Retrieval Dependencies

- Child, family, provider, classroom, site, and program identifiers.
- Enrollment, attendance, vacancy, funded-slot, authorization, and provider-payment artifacts.
- Licensing status, inspection, complaint, corrective-action, ratio, and staffing artifacts.
- Head Start PIR, funded enrollment, chronic absence, and vacant-slot records when applicable.
- QRIS, family-service, incident, safety, and disclosure-approval artifacts.

### Refusal and Return Conditions

- Missing jurisdiction, provider type, funding mix, metric dictionary, or disclosure context.
- Incomplete subsidy authorization, provider-status, licensing, staffing, or safety evidence.
- Source-policy conflicts and unresolved denominator or provider-comparison logic.
- Requests that require adjacent authority such as subsidy award decisions, licensing judgment, privacy approval, legal override, or safety-critical action.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind child-care analytics queue controls with prerequisite completion checks for provider type, funding mix, and source-precedence readiness.
- Enforce tenant-level allow-lists and disclosure controls to prevent unsupported child-level or provider-status publication.
- Attach metric-definition notes, evidence lineage, and escalation artifacts to every analytical output.
- Keep a minimum one-cycle validation checkpoint for the first 14 sessions in a new tenant or jurisdiction context.

### Monitoring and Regression Controls

- Track:
  - blocked analytics due to missing metric definitions,
  - stale or conflicting subsidy, attendance, or licensing records,
  - provisional or restricted provider-status conflicts,
  - privacy and small-cell disclosure escalations,
  - and repeated unsupported benchmark or causal-claim requests.
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request class in 3 consecutive sessions.

### Rollback and Recovery

- Disable this overlay in request routing and fallback to orchestrator support for affected tenants.
- Preserve recovery context packets and unresolved-control notes for each affected request lineage.
- Re-collect tenant policy artifacts, provider-status baselines, and disclosure approvals before re-enabling.
- Run full spec-pack verification before any retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under this spec,
  - zero unresolved privacy, licensing, or subsidy-authority incidents,
  - full governance review with child-care operations, compliance, and legal signoff,
  - and explicit production value validation from usage.
- Promotion action must be initiated by a separate governance-backed build package.
