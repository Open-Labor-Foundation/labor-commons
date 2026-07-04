# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains `specification-based` until a retained-implementation promotion is explicitly approved in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, authority boundaries, refusal conditions, and return-to-orchestrator rules.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Tenant authority matrix including approver chain, legal/compliance, finance, and safety owners.
- Tenant mission dictionary for terms like mission-essential, deployment-ready, maintenance deferral, and transport constraints.
- Contract artifact locations and systems-of-record retrieval hooks.
- Tenant policy overrides and readiness criteria that modify public source guidance.

### Systems of record and retrieval dependencies

- Contract repository and modification ledger.
- Readiness registry and mission constraints systems.
- Transport/equipment planning and maintenance systems.
- Exception, incident, and CAPA records.
- Security/compliance handling systems for sensitive artifact movement.

### Refusal and return conditions

- Missing tenant facts, authority matrices, or systems-of-truth that materially affect disposition.
- Requests requiring legal, safety, clinical, licensing, financial, or engineering decisions.
- Conflicting policy or source interpretation without human-resolution plan.
- Missing closeout/acceptance evidence for completion.

## Deployment and Rollback

- Deployment: enable only with required tenant retrieval dependencies and authority mapping configured.
- Monitoring: track scenario classes for evidence-deficiency escalations, blocked completions, source conflicts, and adjacent-reroute accuracy.
- Rollback: disable specialist route and return all active requests to orchestrator with current state, blockers, and artifacts preserved.

## Validation evidence and Promotion Notes

- Positioning: defense contracting specialist for mission-ready contract execution, evidence capture, and safe execution-state control.
- Package remains validated as a specification-based pack with explicit evidence and rollout constraints.
- retained-implementation promotion requires governance approval, stable production safety profile, and telemetry showing non-regressive boundary behavior.
