# Release Readiness

## Package

- Agent: `housing-finance-specialist`
- Industry overlay: `housing-real-estate-development-and-community-development`
- Release: `v0.1.0`
- Delivery state: `validated`- Issue: 

## Gates

- [x] Manifest records runtime strategy, target delivery level, specialty boundary, source baseline, validation profile, tenant adaptation policy, and catalog metadata.
- [x] Required scenarios cover normal in-scope HAP reconciliation, unsupported rent or HAP adjustment, TRACS denial, unsupported financial override, missing HOME draw evidence, adjacent-lane routing, low-confidence handling, terminology handling, source conflict, tenant adaptation, LIHTC tax-credit routing, and development draw reconciliation without approval.
- [x] Required abilities for `revenue-billing-and-financial-reconciliation` plus `cross-industry` are present in `evaluation/functionality-map.json`.
- [x] Research summary satisfies contract `2026-04-08` and records authoritative source classes, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- [x] Human verification is recorded in `readiness/evidence.json`.
- [x] Deployment and rollback notes are documented.
- [x] Commercialization positioning and packaging notes are documented.

## Release Notes

This release adds the validated spec pack for the NAICS-derived housing,
real estate development, and community development housing finance specialist.
The pack is source-record-centered: it prepares billing readiness, posting
support, reconciliation notes, and financial exception packets for housing
finance records without approving the underlying rent, subsidy, draw, tax,
legal, accounting, lender, or owner-distribution decision.

until a separate implementation, telemetry review, connector plan, and
promotion approval are committed.

## Residual Risk

Tenant-specific rules remain required for property or project identifier,
funding stack, jurisdiction, program type, HAP contract, affordability covenant,
HOME or grant agreement, LIHTC documents, lender instructions, chart of
accounts, source hierarchy, approval matrix, write-off policy, accounting
policy, close criteria, and retrieval hooks. The spec requires orchestrator
return or adjacent-owner escalation when those facts are missing or conflicting.

## Promotion Path

Promote this overlay to a retained implementation only after repeated runtime
usage shows the lane is common enough to maintain, tenant retrieval connectors
are defined, materialized behavior is regression-tested against this scenario
suite, authority-boundary telemetry is reviewed, and a separate PR records build
approval.
