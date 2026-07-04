# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist artifact with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only guidance package loaded by an orchestrator that owns tenancy, execution routing, credentials, and any tenant retrieval connectors.
- Required secrets: None for the static package itself; orchestrator-managed secrets only if tenant retrieval or platform telemetry connectors are enabled.
- Required configuration: Confidence threshold, attended versus unattended runtime policy, source freshness policy, release-version pinning, delegated-meta-agent timeout rules, and tenant-specific retrieval boundaries.
- Optional dependencies: Shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency checks, deployment normalization, commercialization review, source-policy review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant isolation: No cross-tenant sharing of bot logs, screenshots, queue contents, credential references, selector samples, or process documentation.
- Allowed adaptation: Tenant-local runtime configuration, approved retrieval connectors, process naming, exception categories, and platform-specific selector examples.
- Prohibited adaptation: Widening the specialty into workflow platform engineering, API integration, scheduler ownership, or direct bot execution.
- Knowledge boundary: Public baseline guidance remains in the manifest; tenant-local automation evidence is injected only at request time through orchestrator-controlled retrieval.

## Monitoring And Logging

- Log dispatch decisions, boundary refusals, confidence downgrades, source references, delegated-meta-agent fallback activation, and orchestrator handoffs.
- Log release version, evaluation artifact version, and tenant adaptation changes applied at runtime.
- Monitor for repeated selector failures, stale-source conditions, frequent low-confidence escalations, recurring popup or timing issues, and excessive fallback-mode use.
- Maintain enough evidence to reconstruct why a bot-hardening, containment, or retirement recommendation was made.

## Rollback Path

- Immediate rollback: Disable the current specialist release and route RPA requests to orchestrator-safe fallback handling.
- Artifact rollback: Restore the prior validated package version and re-run local repository validation before re-enabling.
- Adaptation rollback: Revert tenant-local runtime policies, retrieval connectors, or selector exemplars independently of the public baseline.

## Shared Meta-Agent Contracts

- Startup behavior: Initialize the specialist-owned baseline first, then attempt shared-meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: Continue with the local reviewed baseline and record the deferred delegated work.
- If a shared meta-agent is stale: Keep the local baseline, avoid claims that depend on fresh normalization, and record the refresh debt.
- If a shared meta-agent is low-confidence or conflicts with the boundary: Prefer the local manifest and return unresolved ambiguity to the orchestrator.

## Operational Notes

- Health checks should confirm manifest load success, artifact presence, and consistency between manifest, evaluation results, and readiness evidence.
- Release promotion requires `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json` to remain internally consistent.
- Support owner: Repository owner or delegated catalog maintainer with authority to review evidence and roll back the package.
