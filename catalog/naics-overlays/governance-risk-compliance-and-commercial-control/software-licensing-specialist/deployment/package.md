# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that controls tenant routing, retrieval of customer license artifacts, audit logging, and escalation to legal, sourcing, or software asset management specialists.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific agreement retrieval connectors
  - escalation targets for legal, procurement, vendor management, and software asset management
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any contract-system, procurement-system, or SaaS-admin credentials remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for source-policy normalization, scenario normalization, readiness packaging, deployment normalization, commercialization review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of agreements, order forms, entitlement proofs, deployment inventories, audit notices, pricing artifacts, or evaluation traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; customer-specific contract and usage evidence is injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, approved connectors, product catalogs, confidence thresholds, and human-approval checkpoints.
- Prohibited adaptation: widening the specialty boundary, suppressing legal or procurement escalations, or replacing the authority-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations, and fallback activation
  - alert on stale source review dates, repeated missing-entitlement evidence patterns, and delegated meta-agent timeout or staleness events
  - monitor repeated requests for legal interpretation or negotiation posture as routing-quality signals
- Logging:
  - record source freshness checks, release version, product-term version when known, and whether local baseline or shared meta-agent augmentation was used
  - record whether customer-provided agreements were supplied and whether the specialist returned a low-confidence escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for governance and commercial-control specialists

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if fallback mode persists across repeated runs or if source review dates exceed refresh intervals.
- Runtime prompts should remind downstream systems that licensing conclusions are operational guidance only and do not replace legal advice or contract approval authority.
