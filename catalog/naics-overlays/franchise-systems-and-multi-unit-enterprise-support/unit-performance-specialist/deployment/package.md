# Deployment Package

## Deployment Model
- Catalog path: `catalog/naics-overlays/franchise-systems-and-multi-unit-enterprise-support/unit-performance-specialist/`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- retained implementation: not included

This package is deployable as a validated specification pack for routing, evaluation, documentation, and future runtime materialization. The runtime should continue to use `specification-based` behavior until a retained implementation is explicitly promoted in a separate reviewed change.

## Materialization Requirements
`commons-crew` would need these tenant-supplied or retrievable inputs before safely materializing this lane:

- Task and boundary metadata for unit performance reporting, scorecards, variance analysis, caveat notes, reconciliation notes, and adjacent-specialist handoffs.
- Current FDD edition, Item 19 support, Item 20 outlet status, state or jurisdiction context, and disclosure approval matrix.
- Unit master retrieval hooks with ownership, status, open date, closure date, transfer date, maturity, brand, franchisee group, and territory fields.
- Agreement and area-development record retrieval hooks for gross-sales definitions, royalty exclusions, development commitments, transfer history, and renewal or termination context.
- POS, royalty billing, ERP, franchisee reporting, field audit, training, and support work-item retrieval hooks with refresh metadata.
- Tenant metric dictionary, source-precedence rules, reporting cadence, benchmark cohorts, and publication audience.
- Regulated-lane caveats for franchise disclosure, prospect-facing earnings claims, public reporting, financial approvals, privacy, and legal interpretation.

## Deployment Steps
1. Register the spec pack in the catalog using the manifest, evaluation, research, readiness, deployment, and marketing artifacts.
2. Configure routing so unit performance requests land in this lane only when they ask for descriptive metric logic, scorecards, reconciliation, caveats, or escalation packaging.
3. Configure orchestrator returns for Item 19 drafting, state filings, public disclosures, royalty concessions, field mandates, transfer or termination decisions, development remedies, and legal interpretations.
4. Keep runtime behavior `specification-based` until trusted retrieval, test fixtures, and built-runtime evidence are committed separately.

## Rollback
- Remove or disable the catalog route for `unit-performance-specialist`.
- Revert to adjacent `franchise-analytics-specialist`, `franchise-operations-specialist`, or orchestrator handling for unit performance requests.
- Mark the delivery status below `validated` if source staleness, scenario regressions, or unresolved functionality coverage gaps appear.
- Do not promote or retain a trusted runtime if tenant retrieval contracts or evidence traceability are incomplete.

## Monitoring
- Review authority sources at the configured refresh interval or sooner when FTC, NASAA, SEC, state filing, or tenant agreement guidance changes.
- Re-run package audit after scenario, source, or readiness changes.
- Track escalations caused by missing unit master, POS, royalty, ERP, field audit, Item 19, Item 20, or agreement context.
- Use recurring escalations to decide whether a retained implementation is warranted.

## Promotion Path
Promote from `specification-based` to a retained implementation only after usage proves common enough to justify runtime investment and after a separate PR adds tenant retrieval contracts, fixture-backed scenario tests, source freshness checks, and runtime safeguards that preserve every refusal and handoff boundary in this pack.
