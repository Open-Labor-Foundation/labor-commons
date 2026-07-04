# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: Read-only specialist guidance bundle loaded by an orchestrator that controls tenant routing, retrieves customer agreements and privacy artifacts, records audit logs, and escalates to counsel, sourcing, vendor-governance, licensing, or engineering specialists when required.
- Required configuration:
  - release version
  - approved source freshness policy
  - agreement and addendum retrieval connectors
  - escalation targets for legal, procurement, vendor governance, software licensing, records management, and engineering
  - delegated meta-agent timeout and staleness thresholds
  - approved confidence threshold for low-confidence escalation
- Required secrets: none in the package itself; any contract-system, CLM, trust-center, or customer-document credentials remain orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for source-policy normalization, scenario normalization, readiness packaging, deployment normalization, commercialization review, boundary review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of agreements, redlines, DPAs, security addenda, review comments, evaluation traces, or legal escalation notes.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is shared; customer-specific contracts, addenda, and approval positions are injected only at request time through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, approved connectors, clause-taxonomy mappings, review workflows, human-approval checkpoints, and confidence thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing legal escalation, replacing signed-agreement precedence with public-source-only reasoning, or changing the authority-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations, and fallback activation
  - alert on stale source review dates, repeated signed-agreement conflicts, missing subprocessor evidence, and delegated meta-agent timeout or staleness events
  - monitor repeated requests for formal legal advice or negotiation tactics as routing-quality signals
- Logging:
  - record source freshness checks, release version, signed-agreement precedence decisions, and whether local baseline or shared meta-agent augmentation was used
  - record whether customer-provided agreements and privacy artifacts were supplied and whether the specialist returned a low-confidence escalation
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
- Runtime prompts should remind downstream systems that outputs coordinate privacy and contract review but do not replace legal advice, contract approval authority, or signature authority.
