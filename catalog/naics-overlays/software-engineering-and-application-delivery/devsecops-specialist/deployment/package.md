# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`
- Deployment model: validated catalog spec pack consumed by a dispatcher, orchestrator, or future materializer.
- Package path: `catalog/software-engineering-and-application-delivery/devsecops-specialist/`
- Primary runtime role: generate evidence-backed DevSecOps guidance, review notes, remediation plans, release readiness notes, and boundary-safe handoffs from tenant-supplied repository, pipeline, scanner, artifact, release, policy, confidentiality, and approval records.
- retained implementation: not claimed. A generated implementation may be retained only after separate frequent-use promotion evidence meets the criteria in `manifest.yaml`.

## Materialization Inputs

A materializer must load:

- Task and boundary metadata from `manifest.yaml`, including supported tasks, refusal rules, adjacent specialists, output shapes, and runtime strategy.
- Research constraints from `evaluation/research-summary.json`, including source classes, workflow stages, systems of record, decision boundaries, and failure modes.
- Ability coverage from `evaluation/functionality-map.json`, including required inputs, required outputs, refusal triggers, and scenario coverage.
- Scenario expectations from `evaluation/scenarios.md` and pass evidence from `evaluation/results.json`.
- Readiness, deployment, and commercialization evidence from `readiness/evidence.json`, `readiness/release.md`, this file, and `positioning/readiness.md`.

Tenant-supplied or retrieved facts must include:

- Pull request diff, commit range, component context, repository ownership, branch protection, CODEOWNERS, and review state.
- CI/CD workflow definitions, runner model, job permissions, secrets use, deployment target, artifact registry, and release environment.
- Scanner output, dependency review, secret scanning alerts, SBOM, provenance attestation, artifact digest, container image metadata, and rollback plan.
- Threat model, architecture decision record, secure SDLC policy, tenant control baseline, risk register, exception register, client confidentiality terms, contractual delivery commitments, and approval matrix.

## Isolation And Adaptation

- Tenant isolation: tenant policies, source code, vulnerabilities, secrets, scanner output, logs, client terms, and release evidence must remain in tenant-controlled systems of record.
- Cross-tenant sharing: prohibited for tenant records, generated evidence, vulnerability details, credentials, client commitments, and policy overlays.
- Allowed adaptation: policy thresholds, evidence fields, scanner taxonomy, source precedence, approval routing, reporting verbosity, and tenant-specific control overlays.
- Disallowed adaptation: weakening baseline controls without authorized exception, adding adjacent platform or SOC execution, exposing confidential records, or removing refusal triggers.
- Approval requirement: tenant-specific policy overlays and exception paths require an authorized human owner and rollback path.

## Operations

- Monitoring expectations:
  - Track request type, in-scope versus refused routing, missing fact frequency, source freshness, scenario family hit rate, output shape emitted, and escalation owner.
  - Track evidence presence for PR, workflow, scanner, dependency, SBOM, provenance, artifact digest, release, approval, and rollback records.
  - Track repeated low-confidence and adjacent-lane returns as signals for either tenant retrieval gaps or need for a separate specialist.
- Logging expectations:
  - Log decision summaries, source IDs, artifact references, assumptions, refusal triggers, and handoff owners.
  - Do not log secrets, confidential source code, exploit details, sensitive vulnerability payloads, client records, or contractual terms beyond approved tenant retention rules.
- Human review:
  - Required for validated release changes, source refresh changes, new authority-source classes, policy exception behavior, and trusted-build promotion.

## Rollback

- Spec rollback: revert to the last validated package commit and mark new materializations as blocked until validation is rerun.
- Runtime rollback: if a future materialized runtime is promoted, disable the generated runtime and fall back to specification-based orchestration using the validated spec pack.
- Tenant overlay rollback: restore the last approved tenant policy overlay and preserve the evidence bundle hash for the rejected overlay.
- Source rollback: if a source is discovered stale or superseded, remove unsupported claims, mark source refresh required, and route affected outputs to low-confidence escalation.
- Evaluation rollback: if any scenario regression is found, disable validated release claim until `evaluation/results.json` and `readiness/evidence.json` are refreshed with passing evidence.

## Deployment Gates

- `manifest.yaml` records runtime strategy as `specification-based`, target delivery as `validated`, authority sources with refresh rules, and no retained implementation claim.
- `evaluation/scenarios.md` includes at least 12 strict scenarios and currently includes 18.
- `evaluation/results.json` records 18 of 18 passing scenarios, `pass_rate: 1`, `minimum_pass_rate: 0.92`, `accuracy_acceptance_met: true`, no regressions, and complete functionality coverage.
- `evaluation/functionality-map.json` maps all 12 required shared, workflow-phase, and industry-profile abilities to passing scenarios.
- `evaluation/research-summary.json` records research contract version `2026-04-08`, all required source classes, workflow stages, artifacts, systems, boundaries, failure modes, required scenario families, and no blocking unresolved ambiguity.
- `readiness/evidence.json` records human verification, functional audit, research audit, deployment readiness.

## Promotion Criteria

Retain a trusted built implementation in the repository only when all conditions are met:

- At least 20 successful tenant invocations in 30 days across three or more repositories or teams.
- Stable output schema, refusal behavior, retrieval contract, and tenant isolation behavior with no open high-severity regression.
- Human review confirms source freshness, scenario coverage, deployment rollback, and confidentiality controls.
- Repository maintainers approve generated runtime retention as a separate promotion decision.
