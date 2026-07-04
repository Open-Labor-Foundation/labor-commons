# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance package loaded by an orchestrator that controls tenant routing, tool access, retrieval connectors, and execution logs.
- Required configuration: release version, approved connector list, tenant adaptation policy, escalation target, and evaluation-artifact linkage.
- Required secrets: none in the package itself; runtime connectors and downstream systems stay orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for corpus curation, evaluation normalization, readiness checks, deployment normalization, commercialization review, authority-source policy checks, boundary review, and package scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of prompts, traces, retrieval corpora, tool outputs, policy exceptions, or evaluation examples.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; tenant-local retrieval context is injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant-specific terminology, approved connectors, risk-threshold tuning, and human-approval checkpoints.
- Prohibited adaptation: widening the specialty boundary, suppressing required escalation behavior, or replacing the authoritative-source baseline without a reviewed release.

## Operations

- Monitoring: log dispatch decisions, boundary rejections, low-confidence escalations, fallback activation, and repeated failure-mode categories such as hallucination or retrieval miss patterns.
- Logging: record source freshness checks, release version, evaluation artifact version, and whether local baseline or shared meta-agent augmentation was used.
- Rollback path: disable the current specialist release, route requests to orchestrator-safe fallback handling, restore the prior validated artifact bundle, and re-run local repository validation before re-enabling.
- Support owner: repository owner or designated orchestrator operator for catalog releases.

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse/load success, artifact presence, and consistency between `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if source review dates exceed refresh intervals or if fallback mode persists across repeated runs.
