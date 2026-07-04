# Deployment Package

- Package: `digital-publishing-operations-specialist`
- Industry overlay: `information-software-and-digital-media`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Release version: `v0.1.0`

## Contents

- `manifest.yaml` defines the specialty boundary, source baseline, scope,
  tenant adaptation policy, SaaS readiness, validation expectations, and catalog
  metadata.
- `evaluation/scenarios.md` defines 12 must-pass digital publishing operations
  scenarios.
- `evaluation/functionality-map.json` covers shared,
  execution-processing-and-fulfillment, and professional-and-information-services
  abilities.
- `evaluation/research-summary.json` records source classes, workflow stages,
  artifacts, systems of record, decision boundaries, domain failure modes,
  scenario-family coverage, and unresolved ambiguity.
- `evaluation/results.json` and `readiness/evidence.json` record complete
  scenario coverage, functionality coverage, validated gates, and human
  verification.
- `readiness/release.md`, `deployment/package.md`, and
  `positioning/readiness.md` document release, rollback, materialization, and
  commercialization posture.

## Materialization Requirements

`commons-crew` can materialize this lane safely only when tenant-specific
configuration or retrieval supplies:

- task metadata for client, brand, publication, program, title, article, issue,
  edition, content ID, slug, canonical URL, DOI, ISBN, version, language,
  market, jurisdiction, lifecycle state, due date, owner, and requested action;
- boundary metadata for editorial, legal, rights, accessibility, quality,
  privacy, security, engineering, delivery, account, finance, contractual,
  platform-policy, and final client approval ownership;
- retrieval hooks for project management, CRM, ticketing, document management,
  CMS, DAM, metadata management, ONIX feed, JATS XML, EPUB packaging, DOI
  registration, syndication feed, partner delivery, subscriber access, incident,
  change, deployment, monitoring, communication, audit, and retention systems;
- tenant policies for confidentiality, embargo handling, approved recipients,
  client commitments, SOW/MSA/NDA precedence, editorial approvals, rights
  approvals, accessibility checks, QA standards, metadata standards, release
  control, security review, rollback, incident escalation, data handling, and
  retention;
- evidence checklists for intake acceptance, metadata readiness, package QA,
  accessibility review, publication readiness, feed delivery, DOI registration,
  access change, incident summary, change-readiness, completion evidence, and
  closeout.

## Runtime Caveats

- This package is a validated spec pack and does not claim a trusted built
  runtime.
- `specification-based` remains active until a separate retained-implementation package is
  explicitly approved, implemented, validated, and committed.
- Autonomous mutation of CMS, DAM, metadata, DOI, feed, subscriber access,
  incident, change, deployment, partner delivery, communication, audit, or
  retention records requires tenant approval, audit logging, rollback controls,
  and a separate runtime promotion.
- Missing tenant facts, missing authoritative records, source conflicts,
  ownership conflicts, approval conflicts, rights conflicts, accessibility
  conflicts, confidentiality conflicts, access conflicts, system dependency
  failures, or requests for legal, editorial, rights, security, engineering,
  financial, contractual, policy, or final client signoff require refusal or
  orchestrator return.

## Deployment Notes

- Deploy as catalog content only; no live publishing, syndication, access
  mutation, metadata mutation, DOI registration, incident mutation, or release
  mutation is implied.
- Keep tenant retrieval isolated by client, publication, program, and
  engagement. Cross-tenant sharing is not allowed.
- Validate tenant materialization against the public source baseline and tenant
  policy hierarchy before enabling automated outputs.
- Log each output with lifecycle state, content identifiers, source records,
  approvals, blockers, owner routing, impact, assumptions, system references,
  client-impact notes, and retention location.

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

- repeated successful use across digital publishing operations cases with no
  unresolved confidentiality, rights, accessibility, access, incident, release,
  approval, legal, editorial, platform, partner, or client-impact regressions;
- stable tenant-safe retrieval wiring for all required systems of record;
- explicit mutation boundaries and rollback controls for any content,
  metadata, DOI, feed, access, incident, change, deployment, delivery,
  communication, audit, or retention record updates;
- human review of source freshness, scenario coverage, and tenant adaptation;
- a separate commit and PR that changes runtime posture only after validation
  proves safe retained-implementation behavior.
