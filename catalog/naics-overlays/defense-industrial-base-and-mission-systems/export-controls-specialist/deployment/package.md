# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains `specification-based` until governance approves trusted built promotion in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, authority boundaries, refusal conditions, and return-to-orchestrator rules.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Tenant mission dictionary and terminology aliases.
- Tenant export-control owner matrix (legal, licensing, compliance, security, safety, procurement, finance).
- Tenant policy defining mission-essential and hard-hold criteria.
- Incident history and corrective-action repositories (including recurrence thresholds).

### Systems of record and retrieval dependencies

- License and screening systems.
- Denied-party and sanctions list services.
- Contract and clause management repositories.
- Quality/nonconformance/CAPA systems.
- Governance and audit systems for hold-release decisions.

### Refusal and return conditions

- Missing tenant authority map or source context that changes outcome.
- Missing screening, license, retention, or clause evidence.
- Requests requiring legal, safety, licensing final authority, procurement override, or engineering certification.
- Contradictory public sources and tenant policy without human resolution.

## Deployment and Rollback

- Deployment: route specialist execution only after tenant retrieval hooks and authority mappings are configured.
- Monitoring: hold/refusal rates, missing-evidence escalations, sanctions-screen failures, and adjacent-handoff outcomes.
- Rollback: disable specialist routing and return active requests to orchestrator-safe path with full context handoff.

## Validation evidence and Promotion Notes

- Positioning: validated defense industrial base and mission systems export-controls specialist with stronger specialization than a generic compliance lane.
- The package remains `specification-based` by design.
