# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Promotion condition: 

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary and adjacent-lane rules.
- `evaluation/functionality-map.json` with full scenario-to-ability mapping.
- `evaluation/research-summary.json` with source classes and ambiguity records.
- `readiness/evidence.json` and `readiness/release.md`.
- `deployment/package.md` and `positioning/readiness.md`.

### Runtime assumptions

- Tenant-specific FERPA-role and consent-policy mapping.
- Approval-owner map for registrar, faculty review, accreditation, grants, and research compliance.
- Source-of-truth inventory for SIS, LMS, scheduling, study-admin, and document systems.
- Source refresh window and metric-definition dictionaries.

### Required retrieval dependencies

- Student, faculty, program, grant, and study identifiers.
- Consent or release materials and authorization records.
- Assessment evidence and source metric dictionaries.
- Workflow approval states and submission logic requirements.
- Evidence of schedule, accreditation, and grant-review constraints.

### Refusal and return conditions

- Missing consent, records, or public policy context.
- Missing approver/signoff chain or unresolved ethics/IRB status.
- Conflicting or stale source data that materially changes report meaning.
- Request asks for grading, ethics-board authority, legal approval, or financial-signoff actions.

## Deployment and Rollback Notes

- Deployment: enable in controlled routing only when all required assumptions are injected at runtime.
- Monitoring: track boundary deferrals, stale data escalations, unsupported claim attempts, and adjacent-lane reroutes.
- Rollback: disable this specialist route, preserve active request context, and reroute to orchestrator handoff.
- Promotion readiness: requires explicit governance approval and stable execution evidence.
