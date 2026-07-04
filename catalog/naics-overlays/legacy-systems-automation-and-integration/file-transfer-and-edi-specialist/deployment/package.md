# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist bundle loaded by an orchestrator that owns tenancy, routing, credentials, partner metadata retrieval, and any live connector or ticket integration.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of trading-partner identifiers, partner agreements, implementation guides, certificates, SSH keys, routes, file names, or operational incident logs.
- Allowed adaptation: tenant-local partner profiles, certificate and key inventories, trading-partner implementation guides, routing rules, retention settings, and approved retrieval connectors.
- Prohibited adaptation: widening the public specialty boundary, embedding proprietary X12 or partner guide content into the shared baseline, or adding unrelated middleware, API, or scheduling behavior.
- Knowledge boundary: public baseline guidance remains in the manifest; tenant-local partner specifics are injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, protocol recommendations, migration recommendations, boundary rejections, low-confidence escalations, and fallback-path activation.
- Log source freshness checks, shared meta-agent availability, and release-version to evidence-version linkage.
- Log runtime references to partner-specific artifacts by identifier only; do not persist secrets, raw certificates, private keys, or proprietary guide contents in shared logs.
- Monitor scenario pass-rate trends, repeated duplicate-delivery or acknowledgment-related support prompts, stale-source conditions, and sustained fallback-mode use.

## Rollback Path

- Immediate rollback: disable the current specialist release and route requests to orchestrator-safe fallback handling.
- Artifact rollback: restore the prior validated package version, rerun repository validation, and confirm manifest-to-evidence consistency before re-enabling.
- Adaptation rollback: revert tenant-local partner profiles, certificates, routing overlays, or retrieval configuration independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the specialty boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success, required artifact presence, and current release to evidence linkage.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: repository owner or delegated catalog maintainer with authority to review evidence and rollback the package.
