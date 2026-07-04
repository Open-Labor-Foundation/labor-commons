# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains specification-based until governance approves a separate trusted built promotion.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit A/E project-delivery scope, authority constraints, and orchestrator return behavior.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Contract form, task-order structure, project phase, discipline, client, site, and jurisdiction.
- Tenant authority matrix for licensed review, permit ownership, cost approval, schedule approval, and closeout signoff.
- System-of-record hierarchy across PMIS, document control, schedule, estimate, RFI, submittal, permitting, inspection, and commissioning tools.
- Tenant stage-gate definitions for design review, IFC release, mobilization readiness, substantial completion, turnover, and closeout.
- Tenant communication policy, escalation thresholds, and branded output rules.

### Systems of record and retrieval dependencies

- Project management information system.
- Common data environment or document control repository.
- Schedule and estimate-control systems.
- RFI, submittal, meeting, and issue-management applications.
- Permit and inspection portals.
- Commissioning, punch-list, and closeout repositories.

### Regulated-lane caveats

- Public owner and AHJ sources define the baseline, but contract form and jurisdiction materially change the exact workflow.
- This lane cannot make licensed architect or engineer judgments, code interpretations, permit approvals, or safety-critical authorizations.
- Commercial approval, fee commitment, and change-order money remain outside the lane.

### Refusal and return conditions

- Missing tenant authority map, contract context, jurisdiction, or critical source-of-truth records.
- Missing evidence for design release, mobilization readiness, milestone approval, or closeout recommendation.
- Requests requiring licensed review, permit approval, code interpretation, legal interpretation, financial approval, or safety-critical authority.
- Contradictory public guidance, contract terms, and tenant policy without qualified human resolution.

## Deployment and Rollback

- Deployment: enable specialist routing only when retrieval dependencies are configured for project management plans, design submissions, estimates, schedules, permit records, inspection records, commissioning artifacts, and closeout records.
- Monitoring: unsupported exception requests, licensed-boundary escalations, permit or site-readiness blockers, repeated review-cycle failures, source conflicts, and closeout blockers.
- Rollback: remove specialist from active routing, send new cases to orchestrator-safe fallback, and preserve full handoff context for any open work.

## Validation evidence and Promotion Notes

- Position: validated spec pack for architecture-and-engineering project delivery support.
- The package remains `specification-based` by design and does not claim retained-implementation status.
