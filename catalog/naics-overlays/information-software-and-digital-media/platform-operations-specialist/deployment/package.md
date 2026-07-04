# Deployment Package

## Runtime

- Target runtime: `specification-based` validated catalog package.
- Deployment model: consumed by catalog dispatch and `commons-crew` as a source-backed specification for just-in-time materialization when no retained implementation exists.
- Trusted build status: not claimed. A retained implementation must be committed separately with implementation artifacts, runtime validation, rollback proof, and release approval.
- Required configuration: tenant service model, approval matrix, systems of record, retrieval hooks, confidentiality rules, access owners, change owners, incident severity model, content workflow rules, quality standards, escalation thresholds, status communication rules, and rollback expectations.
- Required secrets: none in the spec pack. Runtime materialization must retrieve tenant credentials through approved secret and access-control systems only.

## Isolation

- Tenant boundary: no cross-tenant sharing of client files, subscriber data, platform credentials, operational logs, performance records, unpublished content, source records, approvals, or output evidence.
- Knowledge boundary: public source baseline may be reused; tenant-specific policies, platform details, contract terms, client commitments, content rules, and system records must be retrieved at runtime and must not be generalized across tenants.
- Authority boundary: operational evidence handling is allowed; legal, editorial, security, engineering, privacy, financial, contractual, attestation, executive, and final client approval authority stays with named owners.
- Adaptation policy: tenant adaptation may configure lifecycle states, retrieval locations, approval matrices, output templates, status communication rules, and escalation thresholds, but cannot remove refusal triggers or evidence gates.

## Operations

- Intake: require work type, client or product scope, platform, workspace, environment, affected system, content lifecycle state when relevant, requested action, source records, authority owner, and desired output shape before execution.
- Lifecycle states: accepted intake, investigating, awaiting evidence, ready for change, scheduled, blocked, rework, escalated, implemented-by-owner, validating, completed, and closed.
- Monitoring: track scenario pass rate, refusal correctness, low-confidence escalations, missing-evidence blocks, source refresh dates, unresolved ambiguity, tenant-specific overrides, and trusted-build promotion signals.
- Logging: record source artifacts, ticket state, lifecycle transition, owner approvals, system references, confidentiality checks, output shape, refusal or escalation rationale, and completion evidence.
- Exception queues: missing prerequisites, failed jobs, API errors, webhook errors, connector failures, identity dependency failures, content workflow blockers, source conflicts, access conflicts, confidentiality conflicts, approval gaps, and change-readiness gaps.
- Throughput expectations: process routine status, evidence, blocker, and closeout packaging without skipping retrieval, approval, confidentiality, testing, rollback, or completion gates; high-risk incidents and changes should route immediately when authority or facts are incomplete.
- Rollback path: demote `readiness/evidence.json` below `validated`, set manifest readiness gates to false, disable catalog dispatch for this package, and route affected work to the orchestrator or human review until source, scenario, or boundary defects are corrected and revalidated.
- Support owner: catalog maintainers and tenant operations owners for spec use; engineering owners only after a retained implementation is separately promoted.

## Promotion To retained implementation

- Promotion signal: recurring tenant usage for platform incident, access, change-readiness, integration-risk, client delivery, and content workflow operations; stable output templates; low exception leakage; and clear runtime value beyond manual JIT materialization.
- Required promotion evidence: production runtime implementation, unit and integration tests, tenant-fixture validation, source refresh review, security and privacy review, rollback exercise, monitoring plan, and human approval.
- Promotion constraint: the built package must preserve the spec pack's refusal triggers, confidentiality rules, evidence gates, completion proof, and adjacent-specialist routing. Usage volume alone is not enough to promote.
