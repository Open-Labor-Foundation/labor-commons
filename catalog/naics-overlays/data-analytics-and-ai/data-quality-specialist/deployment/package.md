# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that handles routing, tenancy, and connector access.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness checks, deployment normalization, commercialization review, authority-source policy checks, boundary routing review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of customer data, profiles, incidents, or threshold overrides.
- Allowed adaptation: tenant-local thresholds, approved retrieval connectors, and approved tuning for terminology or alert-severity mapping.
- Prohibited adaptation: modifying the public authority-source baseline or widening the specialty boundary without a reviewed release.
- Knowledge boundary: baseline public guidance remains in the manifest; tenant-local evidence is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, boundary rejections, confidence downgrades, and orchestrator handoffs.
- Log source freshness checks and whether local or shared-meta-agent source policy was used.
- Log evaluation result version, release version, and any tenant adaptation changes applied at runtime.
- Monitor for repeated low-confidence requests, repeated stale-source conditions, and recurring quality incident categories that indicate manifest or scenario drift.

## Rollback Path

- Immediate rollback: disable the current specialist release and route requests to orchestrator-safe fallback handling.
- Artifact rollback: restore the prior validated manifest/evidence bundle version and re-run local repository validation before re-enabling.
- Adaptation rollback: revert tenant-local threshold or retrieval changes independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared meta-agent enrichment only if available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and state that broader normalization is deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh shared normalization and use conservative local guidance.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and route ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse/load success, required artifact presence, and current release/evidence linkage.
- Release promotion requires the validated evidence bundle to stay internally consistent across `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Monitoring alerts should trigger if source review dates exceed refresh intervals or if fallback mode remains active for repeated runs.
