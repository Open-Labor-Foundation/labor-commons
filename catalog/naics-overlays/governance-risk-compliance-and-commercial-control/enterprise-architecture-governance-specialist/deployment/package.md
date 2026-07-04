# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that controls tenant routing, customer-evidence retrieval, audit logging, and escalation to adjacent governance, commercial, architecture, and engineering specialists.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific architecture repository and evidence connectors
  - escalation targets for software architecture, cloud architecture, licensing, procurement, legal, and portfolio specialists
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any architecture-repository, portfolio-tool, CMDB, or review-workflow credentials remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of architecture principles, standards catalogs, decision logs, exception registers, capability maps, roadmap submissions, or evaluation traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; customer-specific architecture evidence is injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, architecture board names, principle taxonomies, standards labels, approved connectors, reviewer routing, and approved confidence thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing legal or commercial escalations, or replacing the authority-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations, and fallback activation
  - alert on stale source review dates, repeated standards-exception renewals, missing decision-record lineage, and delegated meta-agent timeout or staleness events
  - monitor repeated requests for detailed solution design, procurement negotiation, or licensing conclusions as routing-quality signals
- Logging:
  - record source freshness checks, release version, assumptions, confidence state, and whether local baseline or shared meta-agent augmentation was used
  - record whether customer-specific architecture evidence was supplied and whether the specialist returned a low-confidence escalation
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
- Runtime prompts should remind downstream systems that enterprise architecture governance recommendations are governance guidance only and do not replace legal advice, sourcing authority, licensing conclusions, portfolio-funding decisions, or detailed architecture and implementation ownership.
