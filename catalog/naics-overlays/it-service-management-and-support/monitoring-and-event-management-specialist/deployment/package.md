# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only guidance package loaded by an orchestrator that owns tenancy, routing, credentials, and any connector access.
- Required secrets: None for the static package itself; orchestrator-managed credentials only if tenant retrieval connectors are enabled.
- Required configuration: Confidence thresholds, event-priority matrix, event-to-incident promotion rules, ownership mappings, maintenance-window policy, source freshness policy, delegated meta-agent timeout thresholds, and release-version pinning.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of event history, alert payloads, service maps, ownership data, on-call schedules, or tenant-specific incident evidence.
- Allowed adaptation: Tenant-local ownership maps, escalation paths, severity matrices, maintenance calendars, notification templates, and approved retrieval connectors.
- Prohibited adaptation: Widening the public specialty boundary, replacing the public authority baseline without review, or introducing direct monitor administration, rule authoring, or technical remediation behavior.
- Knowledge boundary: Public baseline guidance remains in the manifest; tenant-local event evidence is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, event classification recommendations, event-to-incident promotion decisions, boundary rejections, confidence downgrades, and orchestrator handoffs.
- Log source freshness checks, delegated meta-agent availability, and fallback-path activation.
- Log release version, evaluation artifact version, and tenant adaptation changes applied at runtime.
- Monitor for repeated low-confidence requests, event-noise spikes, stale-alert backlog growth, repeated event-to-incident misrouting, stale-source conditions, and repeated fallback-mode use that suggests package drift.

## Rollback Path

- Immediate rollback: Disable the current specialist release and route monitoring-and-event-management work to orchestrator-safe fallback handling.
- Artifact rollback: Restore the prior validated package version and re-run local repository validation before re-enabling.
- Adaptation rollback: Revert tenant-local ownership maps, event-priority rules, maintenance calendars, notification templates, or retrieval configuration independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: Initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: Continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: Block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: Prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success, required artifact presence, and current release-to-evidence linkage.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: Repository owner or delegated catalog maintainer with authority to review evidence and rollback the package.
