# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: Read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, customer-evidence retrieval, audit
  logging, and escalation to legal, vendor-management, software-licensing,
  finance, security, or technical specialists.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific sourcing template and evidence connectors
  - escalation targets for legal, vendor management, software licensing,
    security review, architecture review, and finance signoff
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any procurement platform,
  contract repository, pricing-tool, ERP, or cloud account credentials remain
  orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice
  curation, evaluation normalization, readiness consistency checks, deployment
  normalization, commercialization review, source-policy review, boundary
  review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of quotes, bids, contracts, sourcing
  event data, negotiation notes, forecasts, or evaluation traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; customer-specific commercial artifacts are injected only at request
  time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, approval chains, template formats,
  weighting models, risk thresholds, approved connectors, and confidence
  thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing legal or
  adjacent-specialty escalations, or replacing the authority-source baseline
  without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    and fallback activation
  - alert on stale source review dates, expired pricing assumptions, repeated
    sole-source requests, and delegated meta-agent timeout or staleness events
  - monitor repeated requests for legal drafting, post-award remediation, or
    detailed licensing interpretation as routing-quality signals
- Logging:
  - record source freshness checks, release version, assumptions, pricing
    inputs, confidence state, and whether local baseline or shared meta-agent
    augmentation was used
  - record whether customer-specific quotes or forecast data were supplied and
    whether the specialist returned a low-confidence escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  governance and commercial-control specialists

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
- Runtime prompts should remind downstream systems that sourcing
  recommendations are commercial and governance guidance only and do not replace
  legal review, final approval authority, or implementation design work.
