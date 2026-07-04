# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff and sustained production validation.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit A/E boundary control, refusal triggers, and adjacent-owner handoff rules.
- `evaluation/functionality-map.json` covering shared + quality-safety-and-assurance + cross-industry abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, and failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing full scenario coverage and validated gates.

### Runtime Assumptions

- Tenant or project dictionary covering issue states such as issue-for-review, issue-for-bid, issue-for-permit, issue-for-construction, as-built, and record model.
- Active systems of record for the CDE, drawing register, transmittal log, model repository, specifications, and QA/QC issue tracking.
- Tenant-specific owner standards, BIM execution plan, sign/seal matrix, and approval workflow map.
- Licensed design-owner, QA, security, and contracts escalation paths.

### Required Retrieval Dependencies

- Project identifier, phase, client or owner standard set, and jurisdiction.
- Current authoritative drawing register, sheet index, transmittal history, revision history, and supersession state.
- Current specification package, verification reports, model files, metadata, and approval workflow evidence.
- Open nonconformance, comment, clash, change, and security issue records that affect release posture.

### Refusal and Return Conditions

- Missing tenant facts or unavailable systems of record materially change the answer.
- Public-source and tenant-policy conflict lacks explicit precedence resolution.
- Requests ask for licensed signoff, code interpretation, safety-critical finality, or contract authority.
- Security-sensitive information handling or unrestricted publication is requested without formal owner approval.

## Rollback and Recovery

- Pause routing for the tenant or project if revision truth sets or issue-state decisions repeatedly conflict across systems.
- Preserve all evidence packets, assumptions, and escalation traces for post-rollback review.
- Re-enable only after system-of-record access, owner-standard precedence, and authority maps are restored.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved.
- Promote only after recurring real-world use shows stable retrieval, low unresolved ambiguity, and no systemic release-boundary failures.
- Promotion requires formal validation signoff, updated issue linkage, and an explicit built-runtime commit separate from this spec pack.
