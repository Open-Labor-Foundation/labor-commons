# Technician Support Specialist Deployment Package

- Package path: `catalog/naics-overlays/home-services-and-field-consumer-services/technician-support-specialist/`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Release version: `v0.1.0`

## Included Artifacts

- `manifest.yaml` defining the technician support specialty, semantic profile, source baseline, scope, systems, boundaries, and readiness gates.
- `evaluation/scenarios.md` with 12 must-pass scenarios covering normal support, missing prerequisites, PHI handling, clinical/payer refusal, unsupported workaround refusal, repeat failure, handoff, safety refusal, terminology, policy conflict, and tenant adaptation.
- `evaluation/functionality-map.json` covering all shared, service-support-and-resolution, and healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, failure modes, scenario family coverage, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete functionality coverage, validated gates, and human verification.
- `readiness/release.md` and `positioning/readiness.md` for release and commercialization posture.

## Materialization Requirements

`commons-crew` should materialize this lane only with explicit task and boundary metadata:

- Tenant service model, jurisdiction, business unit, program, product, facility or service setting, payer mix, provider type, source hierarchy, routing matrix, decision-rights matrix, escalation SLA, and approved communication channels.
- Work-order, dispatch, field-service, technician mobile note, CRM, dealer, manufacturer, warranty, service-contract, RMA, part inventory, EHR/EMR, payer portal, eligibility, referral, authorization, utilization review, case management, revenue cycle, coding, claim, remittance, denial, appeal, privacy, consent, document, and audit retrieval hooks.
- Required tenant facts for customer or patient/member status, service date, equipment model, serial, asset tag, ownership/rental/purchase state, warranty posture, coverage status, part state, prior repair attempts, complaint history, PHI controls, consent/proxy constraints, and safety flags.
- Regulated-lane caveats that prevent the runtime from deciding diagnosis, treatment planning, medical necessity, payer coverage, authorization approval, referral sufficiency, coding, claim payment, denial/appeal strategy, privacy disclosure approval, warranty legal interpretation, field repair method, licensed trade signoff, or safety release.
- Refusal and orchestrator-return conditions for missing prerequisites, conflicting systems, stale sources, PHI handling uncertainty, clinical risk, patient safety, payer interpretation, warranty or service-contract exception pressure, unsupported workaround requests, and unknown next owner.

## Deployment Notes

- Deploy as a spec pack only. Do not attach trusted execution, tool automation, warranty adjudication, claim handling, PHI disclosure automation, field repair instruction, or clinical decisioning unless a separate retained-implementation package is committed and approved.
- Load the public source baseline as policy context, then require tenant retrieval for current source-of-truth records and tenant-specific constraints.
- Configure logging for request id, requester role, customer or patient/member context, service date, equipment identity, source systems consulted, evidence sufficiency, confidence state, refusal trigger, next owner, and unresolved items.
- Keep PHI-bearing outputs minimum-necessary, role-scoped, channel-scoped, and auditable.
- Treat DME/HME, home health, post-discharge, payer-funded, and patient/member-linked requests as healthcare-regulated by default until tenant context proves otherwise.
- Treat consumer warranty and service-contract guidance as communication and boundary context, not as approval authority.

## Rollback

- Roll back by removing this package directory from the catalog deployment set and restoring the prior catalog index build.
- Preserve any tenant audit logs generated while the pack was active.
- Reopen cases routed through this pack if rollback was caused by source decay, scenario failure, PHI handling defect, clinical/payer boundary defect, or warranty/safety escalation defect.
- Re-run `npm run audit:spec-pack -- --industry home-services-and-field-consumer-services --agent technician-support-specialist`, `npm run lint`, `npm run verify:structure`, and `npm test` before re-enabling.

## Promotion To retained implementation

Promotion requires a separate implementation PR with:

- Stable tenant demand across technician support, DME/HME, warranty, service, coverage, claim, and PHI-controlled handoff workflows.
- Approved tool contracts for read-only retrieval and controlled writeback to work-order, CRM, EHR/EMR, payer, warranty, part, privacy, and audit systems.
- Expanded live or synthetic regression fixtures for PHI, clinical, payer, safety, warranty, repeat-failure, and source-conflict cases.
- Human approval from clinical, privacy, payer operations, revenue cycle, warranty/service, field safety, and legal/compliance owners.
- Rollback and monitoring that can disable automation while preserving the specification-based pack.

Until that promotion happens, runtime remains `specification-based`.
