# Deployment Package

## Package Identity

- Agent slug: `royalty-administration-specialist`
- Industry overlay: `franchise-systems-and-multi-unit-enterprise-support`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- Validation profile: `standard`
- Release version: `v0.1.0`

## Included Artifacts

- `manifest.yaml`
- `evaluation/scenarios.md`
- `evaluation/functionality-map.json`
- `evaluation/research-summary.json`
- `evaluation/results.json`
- `readiness/evidence.json`
- `readiness/release.md`
- `deployment/package.md`
- `positioning/readiness.md`

## Deployment Notes

This package is validated as a spec pack. It may be deployed for catalog,
evaluation, routing, and tenant-discovery use while runtime remains
`specification-based`. It must not be represented as a retained implementation until a
separate built package is implemented, validated, committed, and promoted.

Tenant enablement must bind:

- franchise agreement, amendment, FDD, Item 6 fee schedule, state addenda, and approved exception repositories
- unit roster, franchisee master, brand, territory, role, and period context
- POS, sales reporting, franchisor portal, ERP, AR, GL, payment processor, bank, reconciliation, dispute, workflow, IAM, and audit-log retrieval hooks
- gross-sales definitions, royalty rates, minimums, ad-fund rules, technology fees, late-fee rules, area-representative splits, due dates, and payment matching logic
- retention, legal-hold, access, privacy, payment-data, QA, review, approval, escalation, and rollback policies

## Safe Materialization Requirements

`commons-crew` would need the following before materializing this lane:

- task metadata for brand, unit, franchisee, period, fee type, jurisdiction, requested output, source hierarchy, and lifecycle state
- boundary metadata that blocks legal interpretation, revenue-recognition decisions, tax advice, collections strategy, payment approval, write-off approval, fee waiver approval, audit finding approval, privacy/access decisioning, retention-disposition approval, and official-record approval
- tenant retrieval hooks for agreement/FDD records, sales reports, POS data, portal submissions, AR records, payment records, bank reconciliation, approved adjustments, disputes, workflow tickets, document repositories, IAM, and audit logs
- refusal and orchestrator-return rules for missing records, conflicting sources, unsupported changes, authority-sensitive requests, and generic donor/member/contribution framing

## Rollback Notes

Rollback is catalog-level because no trusted runtime is shipped.

- Disable or remove the package entry from tenant routing.
- Revert tenant entitlements that reference `royalty-administration-specialist`.
- Preserve any evaluation evidence and tenant-adaptation notes generated before rollback.
- Route in-flight work to `franchise-compliance-specialist`, `accounts-receivable-specialist`, `revenue-accounting-specialist`, `tax-reporting-specialist`, `contract-management-specialist`, or the official approver based on blocker type.

## Promotion Path

Promote this overlay to a retained implementation only after repeated tenant usage
shows stable demand and after governance approves implementation. Promotion
requires runtime code, tenant-safe connectors, test fixtures, monitored
evaluation results, source-refresh checks, rollback controls, and explicit
signoff that the built runtime preserves all legal, accounting, tax, AR,
payment, audit, privacy, access, retention, and approval boundaries from this
spec pack.
