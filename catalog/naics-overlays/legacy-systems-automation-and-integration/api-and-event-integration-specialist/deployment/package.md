# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that controls tenant routing, customer-evidence retrieval, audit logging, and escalation to adjacent specialists for middleware administration, EDI, scheduling, RPA, cloud operations, or broad modernization ownership.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific interface inventories, schema registries, and incident evidence connectors
  - approved brokers, gateways, middleware touchpoints, and consumer compatibility rules
  - escalation targets for middleware, EDI, batch, scheduling, RPA, platform, security, and architecture specialists
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any middleware consoles, broker credentials, API gateways, schema registries, or observability credentials remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of interface inventories, schema definitions, event traces, middleware incidents, migration plans, or operational review data.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; customer-specific integration artifacts are injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, approved protocols or brokers, naming conventions, retention windows, retry budgets, escalation routing, and evidence connectors.
- Prohibited adaptation: widening the specialty boundary, suppressing adjacent-specialty escalations, bypassing rollback expectations, or replacing the authority-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, migration recommendations, boundary refusals, low-confidence escalations, and fallback activation
  - alert on stale source review dates, repeated duplicate-delivery incidents, repeated poison-message patterns, and delegated meta-agent timeout or staleness events
  - monitor repeated requests for platform tuning, EDI ownership, or greenfield architecture as routing-quality signals
- Logging:
  - record source freshness checks, release version, assumptions, confidence state, and whether local baseline or shared meta-agent augmentation was used
  - record whether tenant-specific interface evidence was supplied and whether the specialist escalated due to missing interface governance facts
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for legacy-systems-automation-and-integration specialists

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if fallback mode persists across repeated runs or if source review dates exceed refresh intervals.
- Runtime prompts should remind downstream systems that this specialist handles bounded legacy API and event integration guidance only and does not replace middleware administration, EDI, scheduling, security signoff, or architecture ownership.
