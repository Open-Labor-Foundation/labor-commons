# Release Readiness

## Package

- Agent: `public-finance-coordination-specialist`
- Industry overlay: `government-and-public-sector`
- Release: `v0.1.0`
- Delivery state: `validated`- Issue: 

## Gates

- [x] Manifest records runtime strategy, target delivery level, specialty boundary, source baseline, validation profile, tenant adaptation policy, and catalog metadata.
- [x] Required scenarios cover normal in-scope finance handoff, missing prerequisites, conflicting owners, forced approval authority, eligibility or rights-sensitive escalation, audit-trail gaps, adjudication and enforcement refusal, adjacent-lane routing, terminology handling, source conflict, tenant adaptation, and closure confirmation.
- [x] Required abilities for `coordination-handoffs-and-routing` plus `government-and-public-sector` are present in `evaluation/functionality-map.json`.
- [x] Research summary satisfies contract `2026-04-08` and records authoritative source classes, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- [x] Human verification is recorded in `readiness/evidence.json`.
- [x] Deployment and rollback notes are documented.
- [x] Commercialization positioning and packaging notes are documented.

## Release Notes

This release adds the validated spec pack for the NAICS-derived government
and public-sector public finance coordination specialist. The pack is
handoff-centered: it coordinates budget, grant, procurement, payment, case,
records, transparency, and audit dependencies without approving the underlying
financial, adjudicative, legal, procurement, public-records, or audit decision.

until a separate implementation, telemetry review, connector plan, and
promotion approval are committed.

## Residual Risk

Tenant-specific rules remain required for jurisdiction, program statute,
appropriation or grant authority, source hierarchy, delegation of authority,
procurement rules, due-process rules, public-records rules, owner maps, closure
criteria, and retrieval hooks. The spec requires orchestrator return or
adjacent-owner escalation when those facts are missing or conflicting.

## Promotion Path

Promote this overlay to a retained implementation only after repeated runtime
usage shows the lane is common enough to maintain, tenant retrieval connectors
are defined, materialized behavior is regression-tested against this scenario
suite, and a separate PR records build approval.
