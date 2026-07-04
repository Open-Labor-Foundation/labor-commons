# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only guidance package loaded by an orchestrator that owns tenancy, routing, credentials, and any connector access.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of work orders, service territories, technician identities, customer locations, asset records, or onsite notes.
- Allowed adaptation: Tenant-local skill matrices, service territories, business hours, access rules, escalation contacts, parts policies, and approved retrieval connectors.
- Prohibited adaptation: Widening the public specialty boundary, replacing the public authority baseline without review, or introducing direct technical-remediation or platform-administration behavior.
- Knowledge boundary: Public baseline guidance remains in the manifest; tenant-local field-service evidence is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, scheduling recommendations, status reconciliations, closure guidance, boundary rejections, and low-confidence escalations.
- Log source freshness checks, delegated meta-agent availability, and fallback-path activation.
- Log release version, evaluation artifact version, and tenant adaptation changes applied at runtime.
- Monitor for repeated low-confidence requests, stale-source conditions, recurring parts or access blockers, and repeated fallback-mode use that suggests source or package drift.

## Rollback Path

- Immediate rollback: Disable the current specialist release and route field-service requests to orchestrator-safe fallback handling.
- Artifact rollback: Restore the prior validated package version and re-run local repository validation before re-enabling.
- Adaptation rollback: Revert tenant-local skill maps, service territories, access rules, or retrieval configuration independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: Initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: Continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: Block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: Prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success, required artifact presence, and current release to evidence linkage.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: Repository owner or delegated catalog maintainer with authority to review evidence and rollback the package.
