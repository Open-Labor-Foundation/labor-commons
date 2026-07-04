# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only guidance package loaded by an orchestrator that owns tenancy, routing, credentials, tenant evidence connectors, and access to software inventory and entitlement repositories.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of software inventories, SaaS rosters, purchase evidence, proofs of entitlement, reclaim queues, approval records, usage telemetry, or audit workpapers.
- Allowed adaptation: tenant-local product catalog mappings, entitlement repositories, reclaim rules, lifecycle ownership mappings, escalation contacts, evidence connectors, and approved retrieval configuration.
- Prohibited adaptation: widening the public specialty boundary, replacing the public authority baseline without review, or introducing legal interpretation, procurement negotiation, software-licensing opinions, discovery-tool administration, or remediation execution ownership.
- Knowledge boundary: public baseline guidance remains in the manifest; tenant-local evidence is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, reconciliation outputs, reclaim-governance recommendations, traceability findings, control gaps, boundary rejections, and confidence downgrades.
- Log source freshness checks, delegated meta-agent availability, and fallback-path activation.
- Log release version, evaluation artifact version, and tenant adaptation changes applied at runtime.
- Monitor for repeated low-confidence requests, stale discovery feeds, missing entitlement evidence, unbounded licensing questions, repeated fallback-mode use, and drift between readiness claims and runtime constraints.

## Rollback Path

- Immediate rollback: disable the current specialist release and route SAM requests to orchestrator-safe fallback handling.
- Artifact rollback: restore the prior validated package version and re-run local repository validation before re-enabling.
- Adaptation rollback: revert tenant-local product catalog mappings, reclaim thresholds, evidence connector mappings, escalation contacts, or retrieval configuration independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success, required artifact presence, and current release to evidence linkage.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: repository owner or delegated catalog maintainer with authority to review evidence and rollback the package.
