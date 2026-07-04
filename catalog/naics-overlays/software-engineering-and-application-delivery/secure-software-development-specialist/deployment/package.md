# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Target runtime: Future `commons-crew` materializer or hosted specialist orchestration layer that loads this spec pack, tenant retrieval bindings, source-refresh metadata, and refusal rules.
- Built implementation status: No retained implementation is claimed or retained by this package.
- Promotion rule: Keep runtime as `specification-based` unless frequent-use promotion evidence proves the lane is called often enough to justify a retained generated implementation.

## Materialization Requirements

`commons-crew` or any future materializer must load:

- Task, boundary, adjacent specialist, source, workflow, records, and refusal metadata from `manifest.yaml`.
- Required abilities and scenario coverage from `evaluation/functionality-map.json`.
- Research-constrained workflow stages, artifacts, systems of record, decision boundaries, failure modes, source metadata, and unresolved ambiguity handling from `evaluation/research-summary.json`.
- Evaluation status and market-readiness evidence from `evaluation/results.json` and `readiness/evidence.json`.

Before acting for a tenant, runtime retrieval must provide or request:

- User story, feature request, acceptance criteria, misuse cases, business constraints, architecture notes, sequence diagrams, API contracts, data-flow notes, trust-boundary maps, and design decision records.
- Code diffs, pull requests, source snippets, test plans, code review comments, changed component context, branch protection state, CODEOWNERS, and required review rules.
- SAST, DAST, SCA, dependency review, secret scanning, SBOM, lockfile, advisory, scanner suppression, vulnerability management, CI log, release record, rollback, and exception evidence.
- Tenant secure SDLC policy, source hierarchy, data classification, confidentiality terms, approved recipients, client commitments, approval matrix, release constraints, risk ranking, and legal/compliance caveat flags.
- Systems-of-record links for source repository, issue tracker, architecture records, API contract store, scanner systems, dependency and SBOM stores, evidence repository, release tracker, risk register, exception register, GRC system, and client document management system.

## Refusal And Return Controls

The materialized lane must apply hard refusal checks before analysis:

- Refuse cloud platform infrastructure operation, CI/CD provider administration, network hardening, firewall, DNS, IAM directory, endpoint, monitoring, ticketing, support queue, and SOC workflows.
- Refuse production incident remediation, incident response execution, forensics, containment, breach determination, customer notification, and post-incident legal communication.
- Refuse legal, privacy, data residency, compliance, formal audit attestation, certification, contractual approval, executive risk acceptance, product strategy, pricing, editorial, marketing claim, and release approval authority.
- Refuse production secret, private key, token, credential, signing-key, protected customer-data, source-code, vulnerability, or client-record disclosure outside approved channels.
- Refuse unsupported official record mutation, finding closure, waiver, control suppression, release readiness approval, or source-of-truth status change without delegated authority and audit trail.
- Return to orchestrator when evidence, owner authority, tenant facts, source hierarchy, confidentiality terms, client rights, policy precedence, or source-of-record status is missing or conflicting.

## Tenant Isolation

- Tenant evidence and generated review artifacts stay in the tenant workspace.
- Cross-tenant sharing of tenant evidence, source snippets, logs, secrets, scanner output, vulnerability details, client records, or review outputs is not allowed.
- Global source baseline may be shared, but tenant-specific adaptation is configuration only and must be recorded with assumptions, source hierarchy, approval, and rollback metadata.
- Sensitive artifacts must be redacted according to tenant policy before inclusion in generated records or client-delivery packets.

## Monitoring And Logging

Track:

- Scenario self-check pass rate and regression indicators.
- Out-of-scope refusal rate.
- Low-confidence escalation rate.
- Missing-evidence blockers by artifact type.
- Source-conflict, tenant-policy conflict, and confidentiality conflict frequency.
- Adjacent-specialist routing frequency.
- Unauthorized record-change, unsupported waiver, protected-evidence, and secret-handling attempts.

Log each material output with:

- Source IDs and source review dates.
- Tenant evidence IDs and systems-of-record references.
- Assumptions, confidence, source conflicts, and evidence gaps.
- Refusal or handoff reason when applicable.
- Human reviewer, approver, release owner, policy owner, client recipient approval, or adjacent owner when recorded.

## Rollback Path

1. Freeze tenant overrides and stop new materializations for the lane.
2. Revert runtime binding to the last approved spec pack release.
3. Preserve evidence packets, refusals, handoff notes, generated records, and audit logs under tenant retention policy.
4. Re-run JSON validation, package smoke checks, and selected scenario review before reactivation.
5. Record rollback reason, affected tenants, source version, materializer version, and restored release in the readiness log.

## Trusted-Build Promotion Criteria

Long-term storage of a generated implementation is not justified by this refresh alone. A separate promotion must show:

- At least 25 production-quality tenant calls in a rolling 30-day period for two consecutive periods.
- Sustained pass rate at or above 0.92 with no unreviewed regressions.
- Documented tenant isolation, secret redaction, logging, refusal, rollback, source-refresh, and incident-safe controls.
- Explicit human owner approval for retaining generated implementation artifacts.
- Separate PR that documents implementation provenance, runtime tests, rollback, deprecation of stale generated artifacts, and ongoing validation ownership.

## Deployment Constraints

- Do not deploy as an autonomous cloud, CI/CD administration, network hardening, incident response, compliance certification, legal, privacy, release approval, risk acceptance, product strategy, or secret-management agent.
- Do not deploy without tenant retrieval bindings for required records and systems of record.
- Do not relax refusal triggers through tenant adaptation.
- Do not let the runtime close vulnerabilities, approve exceptions, accept risk, approve release, update source-of-truth records, alter branch protection, mutate production systems, or disclose confidential artifacts without separate delegated authority outside this lane.
