# Deployment Package

## Runtime

- Target runtime: specification-based catalog lane for orchestrator and future runtime materializers.
- Runtime strategy: `specification-based`.
- Deployment model: Static catalog artifact promotion through repository review and merge. Materializers load the manifest, research summary, functionality map, evaluation evidence, readiness evidence, deployment notes as the canonical source of truth.
- retained implementation: Not promoted. No generated implementation should be retained in-repo unless future usage evidence satisfies the promotion criteria in the manifest and readiness evidence.
- Required secrets: No package-level secrets are embedded. Runtime credentials, tokens, connector permissions, workflow engine access, and evidence retrieval are tenant-supplied.
- Required configuration: Tenant profile, workflow engine inventory, connector/DLP policies, approved recipients, data classification, approval matrix, evidence-store locations, and adjacent specialist routing.

## Safe Materialization

Any future `commons-crew` or runtime materializer needs:

- Task and boundary metadata from `manifest.yaml`, including supported tasks, output shapes, refusal triggers, adjacent specialists, and orchestrator return rules.
- Tenant-supplied or retrieved facts for automation goals, workflow artifacts, API/interface contracts, connector inventories, credential models, run history, tests, release records, policies, confidentiality terms, and approvals.
- Source baseline and research constraints from `evaluation/research-summary.json`.
- Ability coverage and scenario mappings from `evaluation/functionality-map.json` and `evaluation/results.json`.
- Evidence dependencies and stop conditions from `readiness/evidence.json`.

The materializer must stop and return to the orchestrator when required artifacts are missing, policy/source conflicts are unresolved, confidentiality or approval authority controls the answer, or the request becomes primarily platform operations, identity administration, infrastructure execution, legal/procurement, compliance policy ownership, product strategy, pricing, or unrelated software engineering implementation.

## Isolation

- Tenant boundary: One tenant context per materialized execution. Cross-tenant reuse is limited to the public spec baseline and non-confidential templates.
- Knowledge boundary: Public source baseline is repository-scoped; tenant policies, workflow payloads, run logs, credentials, client records, approval matrices, and generated evidence remain tenant-scoped.
- Adaptation policy: Tenant adaptation may tighten controls, add evidence requirements, and tune owner routing. It may not weaken the public baseline without documented authorized exception.
- Confidentiality: Do not include secrets, tokens, client records, unreleased payloads, contract terms, or tenant-specific policies in shared catalog artifacts or unapproved output.

## Operations

- Monitoring: Track usage volume, scenario family, workflow engine mix, missing-evidence escalations, boundary refusals, confidentiality blocks, low-confidence escalations, and post-materialization regressions.
- Logging: Capture structured execution metadata with tenant redaction. Do not log secrets, workflow payloads, client records, or credential material in shared telemetry.
- Evidence retention: Store review summaries, checklists, remediation notes, refusals, assumptions, and approval dependencies in tenant evidence repositories, not in shared package files.
- Support owner: Delivery engineer or delegated catalog operations owner for package metadata; tenant workflow owners retain runtime evidence and approval ownership.

## Rollback

- Rollback path: Revert the catalog package commit to the last known-good revision, validate required files, parse JSON evidence, rerun package verification, and document the rollback reason.
- Runtime rollback: Materializers should pin to a known spec package revision. If a spec regression is found, stop new materializations for this lane, route active requests to the orchestrator, and resume only after human review.
- Data rollback: The spec pack does not execute tenant workflow changes. Tenant workflow rollback remains with authorized workflow, platform, SRE, or release owners.

## Promotion Criteria

Retain a generated implementation only after a separate trusted-build promotion decision verifies:

- At least 20 successful tenant invocations in a 30-day period across three or more distinct teams, repositories, or workflow portfolios.
- Stable prompt, retrieval, refusal, evidence, and output schemas with no open high-severity regression.
- Human review confirms source freshness, scenario coverage, tenant isolation, confidentiality handling, and rollback behavior.
- Repository owners approve storing generated implementation artifacts in addition to the spec pack.
