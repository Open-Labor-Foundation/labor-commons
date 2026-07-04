# Deployment Package

## Runtime

- Target runtime: specification-based specialist artifact consumed by the repository specialist router or a future materializer such as `commons-crew`.
- Runtime strategy: `specification-based`.
- Deployment model: validated spec pack with manifest, research summary, functionality map, evaluation suite, readiness evidence, deployment notes, and commercialization notes.
- retained implementation: not claimed. A generated implementation may be retained only after frequent-use promotion evidence, passing regression coverage, source freshness checks, and human promotion approval.
- Required configuration: framework/runtime allow-list, browser/device matrix, CI system, artifact retention policy, data-classification rules, test data policy, timeout/retry policy, approval matrix, and adjacent specialist routing.
- Required secrets: none for the spec pack. Any materialized runtime must use minimum-privileged read access and secret-store references only; test recommendations must not embed secrets or production data.

## Materialization Inputs

`commons-crew` or another runtime materializer needs:

- Queue slug, specialty boundary, runtime strategy, delivery level, validation profile, authority source baseline, output shapes, refusal triggers, and adjacent specialist map.
- Tenant facts: user stories, acceptance criteria, change request, architecture diagrams, API contracts, schemas, test inventory, logs, CI run IDs, coverage, defect history, framework versions, and release constraints.
- Tenant systems: source repository, PR review system, requirements/test management, CI/CD, artifact store, coverage dashboard, observability, defect tracker, flaky-test register, document management, retention settings, confidentiality records, and approval matrix.
- Evidence dependencies: test reports, artifacts, screenshots, traces, coverage data, defect links, reviewer responses, and source freshness metadata.
- Caveats: security testing guidance is verification support only; release approval, production migration, rollback, compliance, contractual signoff, and security risk acceptance require the proper human owner.

## Isolation

- Tenant boundary: one tenant profile per workspace; tenant-specific test evidence, CI logs, screenshots, failure data, contracts, and client delivery records remain in approved tenant systems.
- Knowledge boundary: public authority baseline remains shared; tenant-specific framework versions, policies, approval rules, retention settings, and client commitments remain retrieval-only.
- Data handling: never persist production secrets, client-confidential logs, screenshots, or production-like datasets in the spec pack or generated outputs.
- Adaptation policy: configuration, retrieval, and approved tuning only; retraining, broad runtime logic changes, or trusted-build retention require explicit promotion approval.

## Operations

- Monitoring:
  - Scenario coverage drift, source freshness, out-of-scope returns, low-confidence escalations, confidential-delivery stops, and authority-bound refusals.
  - Test guidance quality indicators such as evidence linkage, missing-record rate, flake-remediation closure evidence, and tenant feedback.
  - Source review cadence for framework docs, CI artifact retention behavior, API standards, NIST/OWASP guidance, and professional confidentiality references.
- Logging:
  - Structured logs for recommendation category, source baseline version, source freshness, tenant artifact references, assumptions, confidence, escalation cause, recipient-approval status, and owner handoff.
  - Evidence pointers only; do not log secrets, production data, client-confidential content, or full CI artifacts outside approved tenant systems.
- Audit expectations:
  - Preserve scenario IDs, ability IDs, source IDs, run IDs, artifact references, review status, retention caveats, and human overrides.
  - Record every refusal, low-confidence return, and cross-specialty handoff with a reason and owner.

## Rollback

- Revert to the previous manifest, evaluation, readiness, deployment, and marketing bundle.
- Disable materialized specialist suggestions until source freshness, functionality coverage, and evaluation scenarios pass again.
- Remove or quarantine any generated trusted implementation that was created from the reverted spec.
- Re-run JSON/YAML validation, catalog validation, lint, and relevant spec-pack checks before re-enabling.

## Deployment Decision

- Current package state: validated spec pack.
- Runtime deployment allowed: yes, as `specification-based`.
- Trusted built implementation retention: no, pending frequent-use promotion evidence.
- Support owner: repository maintainer or designated quality engineering release lead.
