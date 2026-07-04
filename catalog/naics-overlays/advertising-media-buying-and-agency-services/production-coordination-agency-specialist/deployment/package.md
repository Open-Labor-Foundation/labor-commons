# Deployment Package

- Package: `production-coordination-agency-specialist`
- Industry overlay: `advertising-media-buying-and-agency-services`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Release version: `v0.1.0`

## Contents

- `manifest.yaml` defining specialty boundary, source baseline, scope, tenant
  adaptation policy, SaaS readiness, validation expectations, and catalog
  metadata.
- `evaluation/scenarios.md` with 12 must-pass production coordination
  scenarios.
- `evaluation/functionality-map.json` covering shared,
  coordination-handoffs-and-routing, and professional-and-information-services
  abilities.
- `evaluation/research-summary.json` with source classes, workflow stages,
  artifacts, systems of record, decision boundaries, domain failure modes,
  scenario-family coverage, and unresolved ambiguity.
- `evaluation/results.json` and `readiness/evidence.json` showing complete
  scenario coverage, validated gates, functionality coverage, and human
  verification.
- `readiness/release.md`, `deployment/package.md`, and
  `positioning/readiness.md` documenting release, rollback, materialization, and
  commercialization posture.

## Materialization Requirements

`commons-crew` can materialize this lane safely only when tenant-specific
configuration or retrieval supplies:

- task metadata for client, brand, campaign, project, job number, asset ID,
  version, review round, engagement scope, SOW, MSA, owner, deadline, prior
  owner, destination owner, handoff type, delivery channel, and closure target;
- boundary metadata for legal, editorial, creative direction, account, producer
  of record, vendor, rights, procurement, finance, media strategy, quality,
  delivery, privacy, platform-policy, contractual, and final client approval
  ownership;
- retrieval hooks for project management, CRM, ticketing, document management,
  DAM, proofing, approval, production calendar, job jacket, vendor management,
  finance or purchasing, legal review, editorial review, rights ledger, client
  portal, ad operations, trafficking, delivery, communication, audit, and
  retention systems;
- tenant policies for confidentiality, client commitments, SOW, MSA and NDA
  precedence, approval rules, review cadence, proofing standards, production
  standards, vendor routing, quality standards, claims evidence, disclosure
  review, usage rights, portfolio use, data handling, retention, rollback, and
  escalation thresholds;
- evidence checklists for dependency intake, handoff readiness, routing,
  blocked-dependency escalation, confidentiality hold, owner conflict,
  accepted handoff, closure confirmation, and closeout.

## Runtime Caveats

- This package is a validated spec pack and does not claim a trusted built
  runtime.
- `specification-based` remains active until a separate retained-implementation package is
  explicitly approved, implemented, validated, and committed.
- Autonomous mutation of project, ticket, proofing, approval, DAM, vendor,
  finance, rights, delivery, trafficking, client portal, communication, or
  retention records requires tenant approval, audit logging, rollback controls,
  and a separate runtime promotion.
- Missing tenant facts, missing authoritative records, source conflicts,
  ownership conflicts, approval conflicts, rights conflicts, confidentiality
  conflicts, or requests for legal, editorial, creative, financial,
  procurement, production, contractual, media, platform-policy, or final client
  signoff require refusal or orchestrator return.

## Deployment Notes

- Deploy as catalog content only; no live assignment, vendor routing, approval
  mutation, delivery, or closeout mutation is implied.
- Keep tenant retrieval isolated by client and engagement. Cross-tenant sharing
  is not allowed.
- Validate tenant materialization against the public source baseline and tenant
  policy hierarchy before enabling any automated outputs.
- Log each output with prior owner, next owner, lifecycle state, asset version,
  required artifacts, missing facts, blockers, assumptions, routing rationale,
  system references, client-impact notes, and retention location.

## Rollback

- Roll back by removing or disabling the package path from catalog distribution
  and reverting to the prior catalog build.
- Because runtime is `specification-based`, rollback does not require data migration or
  live workflow reversal.
- If a tenant used the package for materialization tests, invalidate cached
  prompts or generated runtime artifacts and rerun validation before
  re-enabling.

## retained-implementation Promotion

Promotion beyond `specification-based` requires:

- repeated successful use across production coordination cases with no
  unresolved confidentiality, rights, ownership, approval, legal, editorial,
  vendor, delivery, or client-impact regressions;
- stable tenant-safe retrieval wiring for all required systems of record;
- explicit mutation boundaries and rollback controls for any assignment,
  routing, owner, approval-state, vendor, delivery, rights, communication, or
  retention record updates;
- human review of source freshness, scenario coverage, and tenant adaptation;
- a separate commit and PR that changes runtime posture only after validation
  proves safe retained-implementation behavior.
