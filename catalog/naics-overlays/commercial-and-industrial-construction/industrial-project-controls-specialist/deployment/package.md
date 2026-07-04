# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains specification-based until governance approves a separate trusted built promotion.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit industrial controls scope, authority constraints, refusal conditions, and orchestrator return behavior.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Jurisdiction, site, system, subsystem, trade, subcontractor, and outage context.
- Tenant hold, release, turnover, energization, and closeout policy plus authority matrix.
- Permit status, inspection cadence, special-inspection obligations, and site-readiness requirements.
- System-of-record hierarchy for PMIS, work orders, permitting, inspections, safety, quality, and document control.
- Tenant definitions for mechanical completion, subsystem turnover, punch closure, redline acceptance, and final owner acceptance.

### Systems of record and retrieval dependencies

- Project management and scheduling systems.
- Work-order or field-service platforms.
- Permitting and inspection repositories.
- Safety, incident, NCR, and corrective-action systems.
- Change-order, subcontractor, and document-control repositories.
- Turnover package and closeout storage.

### Regulated-lane caveats

- Public permit, inspection, environmental, and safety sources define the baseline, but local AHJ rules, owner standards, and contract terms can materially change the answer.
- This lane cannot make permit approval, code interpretation, licensed trade signoff, legal, financial, engineer-of-record, commissioning-acceptance, or safety-manager decisions.
- Site safety changes, failed inspections, hazardous conditions, energization boundaries, or design clarifications can force immediate escalation out of lane.

### Refusal and return conditions

- Missing tenant authority map, jurisdiction, system turnover rules, or critical source-of-truth records.
- Missing evidence for hold release, incident closure, turnover readiness, or closeout recommendation.
- Requests requiring code interpretation, permit approval, licensed trade judgment, engineering, legal, or financial authority.
- Contradictory public source and tenant policy without qualified human resolution.

## Deployment and Rollback

- Deployment: enable specialist routing only when retrieval dependencies are configured for permit, inspection, safety, work-order, schedule, quality, and turnover records.
- Monitoring: hold-release decisions, bypass attempts, missing-prerequisite escalations, contradictory evidence cases, repeat defects, turnover blockers, and adjacent-lane routing frequency.
- Rollback: remove specialist from active routing, send new cases to orchestrator-safe fallback, and preserve full handoff context for open work.

## Validation evidence and Promotion Notes

- Position: validated spec-pack for industrial construction project controls inside the commercial-and-industrial-construction overlay.
- The package remains `specification-based` by design and does not claim retained-implementation status.
