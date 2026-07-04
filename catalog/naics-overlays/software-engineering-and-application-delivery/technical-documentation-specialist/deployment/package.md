# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Target runtime: Orchestrator-materialized specialist that reads this spec pack and produces bounded technical-documentation artifacts.
- Deployment model: Catalog spec referenced by `commons-crew` or a future materializer; no trusted built implementation is retained by default.
- Delivery target: `validated`.
- Required package artifacts:
  - `manifest.yaml`
  - `evaluation/scenarios.md`
  - `evaluation/results.json`
  - `evaluation/functionality-map.json`
  - `evaluation/research-summary.json`
  - `readiness/evidence.json`
  - `readiness/release.md`
  - `deployment/package.md`
  - `positioning/readiness.md`

## Required Configuration

- `TENANT_ID`
- `DOCUMENTATION_REPOSITORY_REF`
- `DOCUMENTATION_STYLE_POLICY_REF`
- `DOCUMENTATION_APPROVAL_MATRIX_REF`
- `CONFIDENTIALITY_POLICY_REF`
- `RETENTION_POLICY_REF`
- `SOURCE_RECORD_RESOLUTION_POLICY`
- `DOCUMENTATION_GATE_PROFILE`

## Runtime Retrieval

The materializer must retrieve or receive:

- Feature briefs, design notes, acceptance criteria, user stories, implementation tickets, and product requirements.
- Code diffs, pull requests, API contracts, OpenAPI files, schema files, interface examples, dependency notes, and test results.
- Architecture decision records, diagrams, runbook context, incident summaries, observability notes, and support workflow records.
- Release plans, changelogs, migration constraints, compatibility notes, rollback expectations, and support readiness records.
- Documentation repository state, page ownership, link inventory, glossary, reusable snippets, review comments, and publication branch or target.
- Tenant policy for style, confidentiality, access control, retention, publication approval, accessibility, localization, legal review, and release gates.

## Materialization Rules

- Load the manifest boundary, source baseline, functionality map, research summary, and scenario expectations before generating outputs.
- Classify each request as in-scope, blocked, out-of-scope, or requiring orchestrator return before drafting.
- Require named source records for every substantive implementation, API, architecture, operational, release, support, security, privacy, or contractual claim.
- Preserve assumptions, missing evidence, conflicting records, confidentiality status, approval status, and reviewer dependencies in the output.
- Produce only documentation-support artifacts unless explicit tenant permission grants a narrower update action.
- Never publish, delete, reclassify, externally share, archive, or retain confidential records outside approved systems.
- Route implementation coding, platform operations, IAM, networking, release engineering, production incident response, legal, licensing, compliance certification, final editorial approval, final release approval, and product strategy work to adjacent owners.

## Isolation

- Use one package instance per tenant workspace.
- Keep tenant retrieval, policy overlays, evidence packets, and generated documentation isolated per tenant.
- Do not mix source records, examples, customer details, incident details, architecture notes, credentials, or confidential context across tenants.
- Tenant overlays may add stricter rules but may not weaken source traceability, confidentiality, approval, retention, or refusal gates.

## Monitoring

Track:

- Scenario pass rate and regression status.
- Source refresh and decay violations.
- Missing-evidence escalations.
- Conflicting-record escalations.
- Confidentiality and approval blocks.
- Adjacent-specialist routing frequency.
- Unauthorized record-change refusals.
- Low-confidence returns to orchestrator.
- Tenant overlay changes and rollback events.

Alert when:

- Authority source refresh intervals expire.
- A runtime output lacks source-record traceability.
- A request is completed despite missing required tenant facts.
- A confidentiality, approval, legal, security, or release boundary is bypassed.
- A generated implementation is retained without promotion evidence.

## Logging

- Persist artifact type, source record IDs, assumptions, confidence state, review owner, approval dependency, refusal reason, escalation route, and retention disposition.
- Do not log restricted source content outside tenant-approved evidence stores.
- Preserve audit-trail or exception summaries for blocked publication, missing evidence, conflicting records, and unsupported record changes.

## Rollback Path

- Deactivate the current package version in the orchestrator catalog.
- Revert to the previous approved spec-pack manifest and evidence set from `catalog/naics-overlays`.
- Invalidate outputs produced after the triggering incident when source traceability, confidentiality, approval, or boundary controls were affected.
- Route active requests to orchestrator fallback or human documentation owner until the package is revalidated.
- Re-run JSON/YAML validation, scenario evidence review, functionality coverage review, and source refresh review before re-enabling.

## Promotion Criteria

The package remains `specification-based` until all of the following are true:

- Production usage shows frequent, repeated calls for this lane across tenant workflows.
- Retrieval dependencies are stable enough to materialize source-record evidence without manual reconstruction.
- Evaluation coverage is expanded for tenant-specific source systems and still meets or exceeds the validated threshold.
- Boundary, confidentiality, approval, rollback, and source refresh controls are automated and verified.
- A human reviewer approves retaining a generated implementation as a retained implementation.

Long-term storage of a trusted built implementation is not justified by this package alone. Usage evidence, operational telemetry, and promotion approval are required before retaining generated runtime code in-repo.

## Support Owner

- Primary support: `olf-agents-specialists`.
- Required reviewers for materializer changes: catalog owner, documentation domain owner, security reviewer when confidential or security documentation claims are affected, and release steward when runtime routing changes.
