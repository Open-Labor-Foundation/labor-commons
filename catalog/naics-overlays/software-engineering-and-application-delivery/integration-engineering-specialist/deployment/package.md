# Deployment Package

## Runtime Model

- Target runtime: specification-based catalog package that can be materialized by `commons-crew` or a future runtime materializer on demand.
- Default runtime strategy: `specification-based`.
- retained implementation: Not claimed. A generated implementation should remain disposable unless frequent-use promotion evidence is approved.
- Required package files: `manifest.yaml`, `evaluation/scenarios.md`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, `readiness/evidence.json`, `readiness/release.md`, `deployment/package.md`, and `positioning/readiness.md`.
- Required secrets: None for the baseline spec pack. Tenant materializations must use tenant-managed credentials and must not store integration secrets in the catalog package.

## Materialization Requirements

Runtime materialization must load the task and boundary metadata before answering:

- owned workflows, supported tasks, output shapes, and refusal triggers from `manifest.yaml`
- ability coverage from `evaluation/functionality-map.json`
- source constraints and workflow model from `evaluation/research-summary.json`
- acceptance and regression expectations from `evaluation/results.json`
- readiness, human verification, and functional audit evidence from `readiness/evidence.json`

Tenant-supplied or retrieved assumptions are required for safe operation:

- current contracts, schemas, examples, version history, and compatibility commitments
- tenant policy for confidentiality, data classification, approved recipients, retention, and delivery approvals
- API catalog, event catalog, schema registry, source repository, CI, test, incident, release, issue, findings, and document-management records
- owners and approvers for unresolved findings, contractual acceptance, production release, security review, and adjacent-lane handoff

## Isolation And Adaptation

- Tenant boundary: Tenant-scoped retrieval, state, logs, evidence bundles, and configuration.
- Knowledge boundary: Public source baseline is shared read-only; tenant overlays may tighten or pin source usage but must preserve public baseline rationale and source variance notes.
- Confidentiality: Payloads, incident details, reviewer notes, client records, and workpapers require approved-recipient verification before disclosure.
- Adaptation policy: Tenant-specific adaptation is allowed only through approved configuration or policy overlays. Prompt rewrites and generated implementation retention require maintainer approval.

## Operations

- Monitoring: Track scenario pass rate, source-staleness warnings, output-shape selection, refusal triggers, adjacent-lane routing, unresolved evidence gaps, remediation follow-up, and confidentiality escalations.
- Logging: Record trace IDs, selected source baseline, tenant overlay version, policy decisions, missing evidence, and escalation path with payload and client data redacted.
- Quality gates: Do not mark a materialized lane ready unless all 20 scenarios remain represented by passing evaluation evidence and all 11 required abilities remain covered.
- Security caveat: The lane may identify API security findings and evidence gaps, but full security architecture approval and incident response belong to adjacent security owners.

## Rollback

Rollback path:

1. Disable tenant-specific materialization or overlay.
2. Fall back to this specification-based package and last approved public source baseline.
3. Route unresolved, approval-required, or confidentiality-sensitive work to orchestrator or human reviewer.
4. Re-run evaluation and functional coverage checks before re-enabling materialization.

Rollback triggers:

- source baseline becomes stale or conflicts with tenant policy
- generated runtime fails any refusal, escalation, confidentiality, or output-fidelity scenario
- logs or evidence show cross-tenant leakage risk
- trusted-build promotion criteria are not met after materialization changes

## Promotion Criteria

Retaining a generated implementation in-repo requires explicit trusted-build promotion evidence:

- sustained frequent calls to this lane across tenants or repeated internal workflows
- passing regression evidence for all 20 scenario families
- tenant-isolated logging, redaction, rollback, source-refresh, and approval controls
- maintainer approval that the generated implementation is worth long-term storage

Until those criteria are satisfied, `specification-based` remains the deployment posture.

## Market Deployment Notes

- Packaging model: Integration review and delivery-support spec pack for engineering teams, solution architects, and technical delivery leads.
- Subscription model: Tenant-scoped access with optional premium integration review bundle for complex migrations or high-evidence delivery environments.
- Support owner: Integration delivery lead for package operations; security incidents, platform operations, legal approval, and commercial decisions route to adjacent owners.
