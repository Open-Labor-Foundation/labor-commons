# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains specification-based until governance approves a separate trusted built promotion.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, field-controls boundaries, authority constraints, and orchestrator return behavior.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Jurisdiction, site, trade, subcontractor, and contract-form context.
- Tenant hold, release, and closeout policy plus authority matrix.
- Permit status, inspection cadence, and site-readiness requirements.
- System-of-record hierarchy for PMIS, work orders, permitting, inspections, safety, and document control.
- Tenant definitions for substantial completion, punch-list closure, as-built acceptance, and retainage or warranty handling.

### Systems of record and retrieval dependencies

- Project management and scheduling systems.
- Work-order or field-service platforms.
- Permitting and inspection repositories.
- Safety, quality, incident, and corrective-action systems.
- Change-order, subcontractor, and document-control repositories.
- Closeout package and final-record storage.

### Regulated-lane caveats

- Public permit and safety sources define the baseline, but local AHJ rules and contract terms can materially change the answer.
- This lane cannot make permit approval, code interpretation, licensed trade signoff, legal, financial, or engineer-of-record decisions.
- Site safety changes, inspection failures, or design clarifications can force immediate escalation out of lane.

### Refusal and return conditions

- Missing tenant authority map, jurisdiction, or critical source-of-truth records.
- Missing evidence for hold release, incident closure, or closeout recommendation.
- Requests requiring code interpretation, permit approval, licensed trade judgment, engineering, legal, or financial authority.
- Contradictory public source and tenant policy without qualified human resolution.

## Deployment and Rollback

- Deployment: enable specialist routing only when retrieval dependencies are configured for permit, inspection, safety, work-order, schedule, and closeout records.
- Monitoring: hold-release decisions, bypass attempts, missing-prerequisite escalations, contradictory evidence cases, closeout blockers, and adjacent-lane routing frequency.
- Rollback: remove specialist from active routing, send new cases to orchestrator-safe fallback, and preserve full handoff context for open work.

## Validation evidence and Promotion Notes

- Position: validated spec-pack for construction and field-services project controls.
- The package remains `specification-based` by design and does not claim retained-implementation status.
