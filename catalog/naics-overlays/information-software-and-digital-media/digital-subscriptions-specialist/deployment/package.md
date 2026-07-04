# Deployment Package

## Runtime

- Target runtime: `specification-based` validated catalog package.
- Deployment model: consumed by catalog dispatch and `commons-crew` as a source-backed specification for just-in-time materialization when no retained implementation exists.
- Trusted build status: not claimed. A retained implementation must be committed separately with implementation artifacts, runtime validation, rollback proof, and release approval.
- Required configuration: tenant service model, jurisdiction matrix, subscriber lifecycle rules, approval matrix, systems of record, retrieval hooks, confidentiality rules, subscriber communication rules, access owners, change owners, incident severity model, quality standards, escalation thresholds, source-of-truth hierarchy, and rollback expectations.
- Required secrets: none in the spec pack. Runtime materialization must retrieve tenant credentials through approved secret and access-control systems only.

## Isolation

- Tenant boundary: no cross-tenant sharing of subscriber files, payment metadata, platform credentials, entitlement records, content-use logs, account records, client communication, source records, approvals, or output evidence.
- Knowledge boundary: public source baseline may be reused; tenant-specific policies, platform details, contract terms, subscriber rules, content-rights constraints, client commitments, and system records must be retrieved at runtime and must not be generalized across tenants.
- Authority boundary: operational evidence handling is allowed; legal, editorial, security, engineering, privacy, financial, billing, contractual, executive, attestation, and final client approval authority stays with named owners.
- Adaptation policy: tenant adaptation may configure lifecycle states, retrieval locations, source-of-truth hierarchy, approval matrices, output templates, and escalation thresholds, but cannot remove refusal triggers or evidence gates.

## Operations

- Intake: require work type, client or product scope, subscriber scope, platform, environment, affected system, requested action, source records, authority owner, and desired output shape before execution.
- Lifecycle states: accepted intake, investigating, awaiting evidence, ready for change, scheduled, blocked, rework, escalated, implemented-by-owner, validating, completed, and closed.
- Monitoring: track scenario pass rate, refusal correctness, low-confidence escalations, missing-evidence blocks, source refresh dates, unresolved ambiguity, and tenant-specific overrides.
- Logging: record source artifacts, ticket state, lifecycle transition, owner approvals, system references, subscriber impact, confidentiality checks, output shape, refusal or escalation rationale, and completion evidence.
- Exception queues: missing prerequisites, entitlement drift, paywall or meter mismatches, receipt-validation errors, webhook failures, app-store notification mismatches, billing-platform discrepancies, access conflicts, confidentiality conflicts, approval gaps, payment-data issues, and change-readiness gaps.
- Throughput expectations: process routine status, evidence, and blocker packaging without skipping retrieval, approval, confidentiality, testing, rollback, subscriber communication, payment-data, or completion gates; high-risk incidents and changes should route immediately when authority or facts are incomplete.
- Rollback path: demote `readiness/evidence.json` below `validated`, set manifest readiness gates to false, disable catalog dispatch for this package, and route affected work to the orchestrator or human review until source, scenario, or boundary defects are corrected and revalidated.
- Support owner: catalog maintainers and tenant operations owners for spec use; engineering owners only after a retained implementation is separately promoted.

## Materialization Requirements

- Required task metadata: work type, lifecycle target, tenant, business unit, product, subscriber segment, platform, environment, jurisdiction, channel, affected system, requested action, output shape, authority owner, and escalation threshold.
- Required boundary metadata: legal, cancellation, renewal-notice, refund, billing, editorial, security, engineering, privacy, contract, financial, executive, and final approval owners.
- Runtime facts to retrieve: subscriber identifier, source-of-truth hierarchy, CRM record, billing record, app-store record, entitlement record, paywall or meter log, ticket history, approval record, QA evidence, rollback plan, communication record, and retention location.
- Regulated-lane caveats: subscription consumer-protection obligations, payment-data handling, privacy obligations, and content-rights constraints are authority triggers, not decisions this lane can make independently.
- Required refusal or orchestrator return: missing source records, missing retrieval hooks, conflicting policies, unapproved data disclosure, unapproved payment-data handling, unsupported legal or refund decision, unapproved change, or completion without evidence.

## Promotion To retained implementation

- Promotion signal: recurring tenant usage for subscription incidents, access restoration, entitlement reconciliation, paywall or meter exceptions, app-store or billing event reconciliation, change-readiness, and integration-risk workflows; stable output templates; low exception leakage; and clear runtime value beyond manual JIT materialization.
- Required promotion evidence: production runtime implementation, unit and integration tests, tenant-fixture validation, source refresh review, security and privacy review, payment-data handling review, rollback exercise, monitoring plan, and human approval.
- Promotion constraint: the built package must preserve the spec pack's refusal triggers, confidentiality rules, evidence gates, source-of-truth requirements, and adjacent-specialist routing. Usage volume alone is not enough to promote.
