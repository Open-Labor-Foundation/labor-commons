# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: Read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, evidence retrieval, audit logging,
  and escalation to migration, modernization, cloud, middleware, batch,
  scheduler, mainframe, API, or RPA specialists when requests cross the
  boundary.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific factory stage names, wave labels, work packet templates,
    blackout windows, and risk thresholds
  - approved connectors for discovery exports, dependency maps, runbooks,
    release calendars, and cutover evidence
  - escalation targets for cloud architecture, modernization, batch, scheduler,
    middleware, API, and mainframe specialties
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any tenant credentials for
  discovery tools, migration inventories, evidence stores, or logging sinks
  remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice
  curation, evaluation normalization, readiness consistency checks, deployment
  normalization, commercialization review, source-policy review, boundary
  review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of application inventories,
  dependency maps, runbooks, blackout calendars, cutover evidence, or
  migration-risk notes.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; customer-specific migration evidence is injected only at request time
  through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, stage names, work packet fields,
  migration lanes, risk thresholds, source connectors, and confidence
  thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing adjacent
  specialty escalations, or replacing the authority-source baseline without a
  reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    and fallback activation
  - alert on stale source review dates, repeated wave-plan escalations,
    repeated missing dependency evidence, and delegated meta-agent timeout or
    staleness events
  - monitor repeated requests for cloud design, code conversion, scheduler
    redesign, or middleware implementation as routing-quality signals
- Logging:
  - record source freshness checks, release version, portfolio scope,
    assumptions, evidence reviewed, and whether the local baseline or shared
    meta-agent augmentation was used
  - record whether dependency maps, blackout windows, rollback notes, and
    cutover evidence were supplied and whether the specialist returned a
    low-confidence escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  legacy systems automation and integration specialists

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt
  shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline
  package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh
  delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and
  route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success and consistency
  between `manifest.yaml`, `evaluation/results.json`, and
  `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally
  consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if fallback mode persists across repeated
  runs or if source review dates exceed refresh intervals.
- Runtime prompts should remind downstream systems that migration-factory
  guidance covers intake, grouping, sequencing, cutover governance, and
  readiness evidence only and does not replace implementation engineering,
  cloud architecture, or platform-specific migration execution.
