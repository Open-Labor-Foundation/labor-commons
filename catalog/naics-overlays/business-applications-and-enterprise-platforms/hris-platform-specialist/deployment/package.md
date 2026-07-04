# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: Read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, evidence retrieval, audit logging,
  and escalation to payroll, benefits, identity, reporting, legal or policy,
  and engineering specialists when requests cross the boundary.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific workflow names, event reasons, and environment labels
  - approved connectors for HRIS logs, release notes, and configuration exports
  - escalation targets for payroll, identity, integration engineering, and HR
    policy or legal review
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any HRIS tenant credentials,
  identity provisioning credentials, log connectors, or export tooling remain
  orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice
  curation, evaluation normalization, readiness consistency checks, deployment
  normalization, commercialization review, source-policy review, boundary
  review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of worker records, event histories,
  workflow logs, configuration exports, release-impact notes, or audit traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; customer-specific HRIS evidence is injected only at request time
  through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, workflow names, event-reason lists,
  release calendars, risk thresholds, approved connectors, and confidence
  thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing payroll
  or adjacent-specialty escalations, or replacing the authority-source baseline
  without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    and fallback activation
  - alert on stale source review dates, repeated sync failures, repeated
    release-promotion exceptions, and delegated meta-agent timeout or staleness
    events
  - monitor repeated requests for payroll analysis, identity-platform changes,
    or custom integration coding as routing-quality signals
- Logging:
  - record source freshness checks, release version, environment scope,
    assumptions, evidence reviewed, and whether local baseline or shared
    meta-agent augmentation was used
  - record whether workflow exports, integration logs, or release-delta notes
    were supplied and whether the specialist returned a low-confidence
    escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  business applications and enterprise platforms specialists

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
- Runtime prompts should remind downstream systems that HRIS guidance covers
  platform configuration, workflow, integration mapping, and change governance
  only and does not replace payroll operations, policy interpretation, or
  engineering implementation.
