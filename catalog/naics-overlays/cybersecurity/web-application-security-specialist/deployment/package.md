# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Target runtime: Future materializer or hosted specialist orchestration layer that loads this spec pack, tenant retrieval bindings, and source-refresh metadata.
- Built implementation status: No retained implementation is claimed or retained by this package.
- Promotion rule: Keep runtime as `specification-based` unless frequent-use promotion evidence proves the lane is called often enough to justify a retained generated implementation.

## Materialization Requirements

`commons-crew` or any future materializer must load:

- Task and boundary metadata from `manifest.yaml`.
- Required abilities and scenario coverage from `evaluation/functionality-map.json`.
- Research-constrained workflow stages, artifacts, systems of record, failure modes, and source metadata from `evaluation/research-summary.json`.
- Evaluation status and market-readiness evidence from `evaluation/results.json` and `readiness/evidence.json`.

Before acting for a tenant, runtime retrieval must provide or request:

- Application architecture notes, request-flow diagrams, data-flow diagrams, trust-boundary maps, route or endpoint inventory, and API contracts.
- Code/config snippets for auth, authorization, session, CSRF, CORS, CSP, output encoding, validation, file upload, dependency, deployment, and logging controls.
- Security findings from SAST, DAST, SCA, IaC checks, manual review, bug bounty triage, vulnerability management, CI gates, and release records.
- Tenant policy, source hierarchy, data classification, risk ranking, exception register, release constraints, contractual caveats, regulated-data flags, payment-card scope, privacy markers, and owner map.
- Systems-of-record links for source repository, security review tracker, vulnerability platform, GRC/evidence store, issue tracker, CI/CD logs, deployment records, exception register, and policy repository.

## Refusal And Return Controls

The materialized lane must apply hard refusal checks before analysis:

- Refuse penetration testing execution, exploitation, live attack simulation, scanning, payload tuning, proof-of-concept validation, or red-team activity.
- Refuse incident response execution, forensics, containment, recovery, breach determination, or customer notification.
- Refuse formal audit attestation, compliance certification, legal or regulatory opinion, privacy determination, risk acceptance, and production release approval.
- Refuse production secret, private key, token, credential, signing-key, or protected customer-data handling.
- Refuse unsupported official record mutation, waiver, closure, or completion without delegated authority and audit trail.
- Return to orchestrator when evidence, owner authority, tenant facts, source hierarchy, or source-of-record status is missing or conflicting.

## Tenant Isolation

- Tenant evidence and generated review artifacts stay in the tenant workspace.
- Cross-tenant sharing of tenant evidence, examples, logs, secrets, source snippets, or review outputs is not allowed.
- Global source baseline may be shared, but tenant-specific adaptation is configuration only and must be recorded with approval and rollback metadata.
- Sensitive artifacts must be redacted according to tenant policy before inclusion in generated records.

## Monitoring And Logging

Track:

- Scenario self-check pass rate and regression indicators.
- Out-of-scope refusal rate.
- Low-confidence escalation rate.
- Missing-evidence blockers by artifact type.
- Source-conflict and tenant-policy conflict frequency.
- Adjacent-specialist routing frequency.
- Unauthorized record-change attempts and protected-evidence attempts.

Log each material output with:

- Source IDs and source review dates.
- Tenant evidence IDs and systems-of-record references.
- Assumptions, confidence, and evidence gaps.
- Refusal or handoff reason when applicable.
- Human reviewer, approver, or adjacent owner when recorded.

## Rollback Path

1. Freeze tenant overrides and stop new materializations for the lane.
2. Revert runtime binding to the last approved spec pack release.
3. Preserve evidence packets, refusals, handoff notes, and generated records under tenant retention policy.
4. Re-run JSON validation, package smoke checks, and selected scenario review before reactivation.
5. Record rollback reason, affected tenants, source version, and restored release in the readiness log.

## Trusted-Build Promotion Criteria

Long-term storage of a generated implementation is not justified by this refresh alone. A separate promotion must show:

- At least 25 production-quality tenant calls in a rolling 30-day period for two consecutive periods.
- Sustained pass rate at or above 0.92 with no unreviewed regressions.
- Documented tenant isolation, secret redaction, logging, refusal, rollback, and incident-safe controls.
- Explicit human owner approval for retaining generated implementation artifacts.
- Separate PR that documents implementation provenance, runtime tests, rollback, and deprecation of stale generated artifacts.

## Deployment Constraints

- Do not deploy as an autonomous penetration testing, incident response, compliance certification, legal, privacy, or secret-management agent.
- Do not deploy without tenant retrieval bindings for required records and systems of record.
- Do not relax refusal triggers through tenant adaptation.
- Do not let the runtime close vulnerabilities, approve exceptions, accept risk, approve release, update source-of-truth records, or mutate production systems without separate delegated authority outside this lane.
