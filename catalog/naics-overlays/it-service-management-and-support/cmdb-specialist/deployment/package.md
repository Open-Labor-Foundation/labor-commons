# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that controls tenant routing, retrieval connectors, and audit logging.
- Required configuration:
  - release version
  - approved ITSM and CMDB connector list
  - tenant adaptation policy
  - escalation targets for adjacent specialties
  - source freshness policy and delegated meta-agent timeout thresholds
- Required secrets: none in the package itself; runtime platform credentials remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for source-policy normalization, scenario normalization, readiness packaging, deployment normalization, commercialization review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of CMDB extracts, CI data, service maps, ticket content, policy exceptions, or evaluation traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; tenant-local CMDB and ticket context are injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, approved connectors, class naming conventions, risk-threshold tuning, and human-approval checkpoints.
- Prohibited adaptation: widening the specialty boundary, suppressing required escalation behavior, or replacing the authoritative-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations, fallback activation, and repeated CMDB data-quality failure modes
  - alert on stale source review dates, recurring duplicate-CI patterns, broken service relationships, and delegated meta-agent timeout or staleness events
- Logging:
  - record source freshness checks, release version, evaluation artifact version, and whether local baseline or shared meta-agent augmentation was used
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for ITSM specialists

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse/load success and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if fallback mode persists across repeated runs or if source review dates exceed refresh intervals.
