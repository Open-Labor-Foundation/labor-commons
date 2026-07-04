# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains proposal-operations ready-only until a separate trusted built promotion cycle.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, boundary statements, and orchestrator return rules.
- `evaluation` bundle with scenarios, functionality map, research summary, and results.
- `readiness/release.md` and `readiness/evidence.json`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Tenant mission doctrine and readiness thresholds.
- Approval-owner matrix for legal, contracting, safety, security, and finance boundaries.
- Proposal artifact naming dictionary and local terminology aliases.
- Security/CUI handling metadata policy for proposal attachments.

### Required systems of record

- Proposal management system.
- Contract lifecycle and acquisition systems.
- Mission readiness registry and transport/equipment operations systems.
- Security and compliance systems for CUI handling.
- Exception and escalation tracking system.

### Runtime assumptions and retrieval dependencies

- Intake requests include proposal identifier, approver context, and artifact links.
- Approval ownership and exception routing metadata is retrievable at runtime.
- Safety and mission updates are surfaced as part of operational data streams.

### Refusal and escalation conditions

- Missing tenant mission/authority context that changes the outcome.
- Missing approver ownership, security handling metadata, or completion evidence.
- Requests that require legal, financial, contracting, safety, or engineering final authority.
- Conflicting source or policy interpretations that cannot be resolved safely.

## Deployment and Rollback

- Deployment: enable only when tenant retrieval and handoff pathways are configured.
- Monitoring: missing-evidence escalations, exception queue growth, source-conflict events, adjacent-lane routing frequency, and completion refusal patterns.
- Rollback: disable this specialist from routing and restore safe fallback orchestrator handling while preserving open exceptions.

## Validation evidence and Rollout Notes

- validated spec-pack entry under industry overlay domain.
- No retained-implementation runtime claim until explicit separate governance approval and operational review.
- Promotion path: sustained safe operation, governance signoff, and evidence of non-regressive autonomous behavior under real workloads.
