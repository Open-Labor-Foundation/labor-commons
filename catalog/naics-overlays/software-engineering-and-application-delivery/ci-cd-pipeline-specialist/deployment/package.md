# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Deployment model: validated catalog spec pack consumed by `commons-crew` or a future runtime materializer.
- Canonical artifacts: `manifest.yaml`, `evaluation/scenarios.md`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, `readiness/evidence.json`, `readiness/release.md`, `deployment/package.md`, and `positioning/readiness.md`.
- Built runtime posture: no trusted generated implementation is claimed or retained by this package.
- Required secrets: none for the spec pack. Tenant execution must use orchestrator-injected, tenant-scoped credentials and must not assume runner administration, cloud, secret, or production deployment authority.

## Materialization Requirements

`commons-crew` or another materializer needs:

- Agent identity, queue slug, runtime strategy, validation profile, workflow phase group, industry profile, and source baseline from the manifest.
- Supported tasks, output shapes, refusal triggers, adjacent routing map, tenant facts, systems of record, and retrieval dependencies.
- Research constraints from `evaluation/research-summary.json`, including workflow stages, decision boundaries, domain failure modes, source classes, unresolved ambiguity handling, and scenario family coverage.
- Functional ability coverage from `evaluation/functionality-map.json`.
- Scenario expectations and pass/fail evidence from `evaluation/scenarios.md` and `evaluation/results.json`.
- Tenant-supplied repository, CI/CD platform, test, scan, artifact, provenance, deployment, observability, incident, confidentiality, approval, and policy evidence at runtime.

## Tenant Isolation And Adaptation

- Tenant data must remain tenant-scoped by tenant ID, repository scope, document-access policy, CI/CD platform scope, and approval matrix.
- Cross-tenant memory or artifact reuse is not allowed for confidential workflow files, logs, scans, SBOMs, attestations, incidents, review notes, client commitments, or delivery evidence.
- Adaptation is configuration-first: tenant-specific CI provider, runner labels, environment names, approval rules, retention policies, evidence stores, source repositories, and retrieval connectors may be added without widening the CI/CD pipeline boundary.
- Tenant policy overrides the public baseline when stricter; unresolved source or policy conflicts require escalation.
- Tenant-specific prompt tuning requires approval, rollback plan, and regression review.

## Operations

- Monitoring:
  - Track scenario pass-rate drift, source freshness, functionality coverage, boundary-refusal rate, low-confidence escalation rate, hold/release refusal rate, confidentiality conflict rate, and tenant retrieval blockers.
  - Alert when pass rate drops below 0.90, source review date decays, a scenario family becomes uncovered, or a trusted-build promotion claim appears without evidence.
- Logging:
  - Record source version, tenant evidence references, output shape, confidence flags, assumptions, hold/release recommendations, refusals, escalations, and human verification.
  - Redact secrets, tokens, environment variables, client records, incident notes, scan details, and confidential logs in materializer logs; store tenant-approved references where possible.
- Quality gates:
  - Validate JSON artifacts for parseability.
  - Confirm functionality coverage and readiness evidence stay internally consistent.
  - Confirm runtime strategy remains `specification-based` unless trusted-build promotion criteria are separately met.
  - Re-run repository validation before release or PR merge.

## Rollout

- Stage 1: publish refreshed spec pack in the catalog path and route only issue-linked validation traffic.
- Stage 2: canary with internal CI/CD design, review, release-readiness, and incident-summary workflows using read-only repository, CI/CD, artifact, and observability retrieval.
- Stage 3: enable broader tenant use once boundary refusals, source freshness, pass rate, hold/release handling, confidentiality handling, and retrieval reliability remain stable.

## Rollback

- Freeze new tenant routing to this release.
- Re-point materializer or orchestrator routing to the previous validated package snapshot.
- Preserve current manifest, research, evaluation, readiness, deployment, and marketing artifacts for audit.
- Reopen validated readiness only after source freshness, functionality coverage, scenario pass rate, no-unreviewed-regression evidence, and human verification are restored.

## Promotion Criteria For Trusted Build

Keep this lane `specification-based` unless all of the following are documented:

- Frequent invocation across multiple tenants or repeated internal delivery programs.
- Repeated workflow paths where generated implementation materially reduces latency or reviewer effort.
- No open boundary, confidentiality, security, accuracy, hold/release, or regression issues in recent evaluation cycles.
- Named owner accepts maintenance, security review, source refresh, tenant isolation, monitoring, rollback, and incident response obligations.

## validated Deployment Notes

- Target buyer: engineering organizations that need consistent CI/CD pipeline design, release-readiness review, control verification, and evidence-based remediation support.
- Target users: release engineers, DevOps engineers, software engineers, technical leads, delivery reviewers, and engineering managers.
- Packaging: versioned spec pack with manifest, research, evaluation, readiness, deployment, and commercialization artifacts.
- Commercial proof points: 16 passing scenarios, full 11-ability coverage, source-backed research summary, human verification, explicit boundaries, and deployment/commercialization readiness evidence.
- Known go-to-market gaps: no external benchmark study yet; tenant onboarding templates for provider-specific evidence stores and materializer telemetry remain to be validated in pilots.
