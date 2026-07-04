# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit gaming analytics, reporting, and escalation boundaries, refusal triggers, and adjacent-lane return conditions.
- `evaluation/functionality-map.json` containing shared plus analytics-reporting-and-disclosure plus cross-industry abilities, mapped to scenario coverage.
- `evaluation/research-summary.json` with workflow stages, source classes, artifacts, systems-of-record, failure modes, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with complete gates, human verification, and functionality coverage marked complete.

### Runtime Assumptions

- Tenant jurisdiction, property type, game-vertical, and channel mappings.
- Tenant metric dictionary, source-precedence rules, report calendars, disclosure approval workflow, and promotional-treatment policy.
- Authenticated system state for casino management, sportsbook, internet gaming, player loyalty, finance, data warehouse, and filing repositories.
- Named adjacent owners for accounting close, tax and regulatory reporting, gaming compliance, sportsbook operations, marketing or promotions, surveillance, and legal review.
- Tenant-defined benchmark-cohort rules, disclosure thresholds, and public-release controls.

### Required Retrieval Dependencies

- Property, jurisdiction, game, channel, and reporting-period identifiers.
- Slot, table, sportsbook, and internet-gaming performance and reconciliation artifacts.
- Promotional-credit, loyalty-liability, cage, and wagering-account artifacts when they affect metric meaning.
- Regulator filing workbooks, revenue-audit workpapers, and general-ledger tie-out support.
- Approved internal controls, source-precedence policy, and disclosure-approval artifacts.

### Refusal and Return Conditions

- Missing jurisdiction, vertical, metric dictionary, source precedence, or disclosure context.
- Incomplete slot, sportsbook, internet-gaming, filing, or promotional evidence.
- Source-policy conflicts and unresolved denominator or comparability logic.
- Requests that require adjacent authority such as accounting signoff, tax certification, compliance judgment, marketing-policy approval, legal override, or public disclosure approval.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind gaming analytics queue controls with prerequisite completion checks for jurisdiction, vertical, source precedence, and disclosure readiness.
- Enforce tenant-level allow-lists and approval controls to prevent unsupported benchmark, forecast, or public-disclosure claims.
- Attach metric-definition notes, source lineage, refresh assumptions, and escalation artifacts to every analytical output.
- Keep a minimum one-cycle validation checkpoint for the first 14 sessions in a new tenant, property, or jurisdiction context.

### Monitoring and Regression Controls

- Track:
  - blocked analytics due to missing jurisdiction, control baseline, or metric definitions,
  - stale or conflicting slot, sportsbook, internet-gaming, promotional, or filing records,
  - unsupported benchmark, causal, or disclosure requests,
  - and repeated cross-channel comparability failures involving land-based and digital gaming.
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request class in 3 consecutive sessions.

### Rollback and Recovery

- Disable this overlay in request routing and fallback to orchestrator support for affected tenants.
- Preserve recovery context packets and unresolved-control notes for each affected request lineage.
- Re-collect tenant policy artifacts, metric dictionaries, source-precedence baselines, and disclosure approvals before re-enabling.
- Run full spec-pack verification before any retained-implementation migration.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under this spec,
  - stable retrieval across slot, table, sportsbook, internet-gaming, loyalty, and filing systems,
  - zero unresolved public-disclosure or authority-overreach incidents,
  - full governance review with gaming operations, finance, compliance, and legal signoff,
  - and explicit production value validation from usage.
- Promotion action must be initiated by a separate governance-backed build package.
