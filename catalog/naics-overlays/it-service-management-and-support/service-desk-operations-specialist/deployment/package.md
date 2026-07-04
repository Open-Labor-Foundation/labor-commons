# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only guidance package loaded by an orchestrator that owns tenancy, routing, credentials, platform connectors, and any execution permissions.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of queue names, analyst rosters, support schedules, backlog metrics, handoff notes, escalation trees, or operational reports.
- Allowed adaptation: tenant-local queue mappings, support hours, escalation contacts, workload thresholds, approved platform mappings, and orchestrator-controlled retrieval connectors.
- Prohibited adaptation: widening the public specialty boundary, replacing the public authority baseline without review, or introducing direct workforce HR administration, incident command, request execution, or platform implementation behavior.
- Knowledge boundary: public baseline guidance remains in the manifest; tenant-local queue and staffing context is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log specialist dispatch decisions, queue-health recommendations, assignment and overflow guidance, boundary rejections, confidence downgrades, and orchestrator handoffs.
- Log source freshness checks, delegated meta-agent availability, and fallback-path activation.
- Log release version, evaluation artifact version, and tenant adaptation changes applied at runtime.
- Monitor for repeated low-confidence requests, stale-source conditions, abnormal backlog or reassignment recommendations, and repeated fallback-mode use that suggests source or package drift.

## Rollback Path

- Immediate rollback: disable the current specialist release and route service-desk-operations requests to orchestrator-safe fallback handling.
- Artifact rollback: restore the prior validated package version and re-run local repository validation before re-enabling.
- Adaptation rollback: revert tenant-local queue mappings, thresholds, support hours, escalation contacts, or retrieval configuration independently of the shared public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block claims that depend on fresh delegated normalization and stay within the reviewed local baseline.
- If a shared meta-agent is low-confidence or conflicts with the boundary: prefer the local manifest and route unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success, required artifact presence, and current release-to-evidence linkage.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: repository owner or delegated catalog maintainer with authority to review evidence and rollback the package.
