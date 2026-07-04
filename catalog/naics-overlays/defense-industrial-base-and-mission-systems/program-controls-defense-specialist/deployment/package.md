# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains specification-based until governance approves a separate trusted built promotion.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, boundary, authority constraints, and boundary-safe return behavior.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Tenant mission-readiness dictionary and terminology aliases.
- Tenant program-control owner matrix (legal, safety, quality, compliance, finance, contracting).
- Tenant policy for what counts as mission-critical and what is a hard hold condition.
- Incident owner and recurrence handling policy.

### Systems of record and retrieval dependencies

- Program management systems (work-package and phase status).
- Nonconformance, defect, CAPA, and incident trackers.
- Security and CUI control systems.
- Contract/authority and compliance repositories.
- Change-control and quality-review records.

### Refusal and return conditions

- Missing tenant authority map or critical records for scope.
- Missing evidence for holds, release, or incident closure.
- Requests requiring legal, policy override, licensing, safety-critical, or financial-approval authority.
- Contradictory public source and tenant policy without human resolution.

## Deployment and Rollback

- Deployment: enable specialist routing only when required retrieval dependencies are configured and auditable.
- Monitoring: hold-boundary decisions, missing-evidence escalations, repeat-defect triggers, source conflicts, and adjacent-lane routing frequency.
- Rollback: remove specialist from routing and return open cases to orchestrator-safe fallback with complete handoff context.

## Validation evidence and Promotion Notes

- Position: validated spec-pack for defense industrial base and mission systems program controls.
- The package remains `specification-based` by design.
