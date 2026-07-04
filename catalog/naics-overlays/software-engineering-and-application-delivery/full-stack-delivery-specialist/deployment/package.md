# Deployment Package

## Runtime

- Runtime strategy: `specification-based`.
- Target runtime: on-demand specialist materialization by `commons-crew` or a future runtime materializer using the manifest, research summary, functionality map, evaluation suite, readiness evidence, and tenant context.
- Trusted build posture: no retained implementation is claimed or retained by default.
- Required task metadata: agent slug, domain family, workflow phase group, industry profile, delivery status, runtime strategy, release version, supported task list, output shapes, refusal rules, adjacent specialists, and orchestrator return conditions.
- Required tenant facts: request type, support severity, stakeholder outcome, repository and component ownership, runtime versions, API contracts, acceptance criteria, test and CI evidence, release and rollback records, policy constraints, confidentiality rules, and approval path.
- Required configuration: source retrieval permissions, tenant systems-of-record registry, approved source baseline, confidence threshold, redaction rules, escalation routing table, and audit logging destination.
- Required secrets: none for the spec pack itself. A runtime materializer may need tenant-local repository, ticketing, CI, observability, and document-system credentials; those secrets must remain tenant-scoped.

## Isolation

- Tenant boundary: tenant records, code, policies, credentials, client commitments, and confidentiality rules must remain isolated from other tenants.
- Knowledge boundary: public source baseline is reusable, but tenant-specific runtime facts, code evidence, support records, and approval rules are not portable.
- Adaptation policy: tenant adaptation may narrow guidance by runtime version, framework, policy, confidentiality, approval, and service model; it may not widen the lane into platform operations, legal signoff, product strategy, live incident execution, or retained implementation ownership.
- Recordkeeping: runtime outputs must record evidence references, source IDs, tenant assumptions, confidence, unresolved questions, next owner, and refusal or escalation rationale.

## Operations

- Monitoring: materialized runtimes should log scope verdicts, output type, source baseline version, missing evidence flags, low-confidence escalations, refusal triggers, adjacent-lane routing, confidentiality redactions, and regression scenario coverage.
- Logging: use structured tenant-local logs with trace IDs, request ID, source IDs, evidence artifact IDs, and sanitized payloads. Do not log client secrets, confidential implementation details, cross-tenant content, or unapproved client-facing wording.
- Quality controls: require scenario coverage for implementation planning, review findings, test matrix, release readiness, stakeholder communication, missing evidence, boundary refusal, unsupported exceptions, repeat failure, policy conflict, tenant adaptation, and specification-based materialization.
- Support owner: product engineering or agent platform owner for materialization defects; orchestrator for routing failures; tenant human reviewer for confidentiality, approval, contractual, legal, or policy questions.

## Rollback

- Spec rollback path: revert to the previous package version in source control, restore prior manifest and evaluation artifacts, and mark the refreshed package as superseded in release notes if a regression is found.
- Materialized runtime rollback path: disable the generated runtime, route requests back to specification-based orchestration, preserve audit logs, and regenerate only after the corrected spec and regression evidence pass.
- Tenant adaptation rollback: remove or disable the tenant overlay, restore the public baseline plus approved tenant policy, and re-run affected scenarios before resuming materialized guidance.
- Rollback triggers: missing required source class, broken functionality coverage, incorrect boundary behavior, confidentiality leak, policy override, unsupported signoff claim, unreviewed regression, or trusted-build claim without promotion evidence.

## Materialization Requirements

- Load the manifest first, then the research summary, functionality map, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Verify `runtime_strategy` is `specification-based` unless a separate trusted-build promotion record exists.
- Retrieve tenant-specific systems of record before producing material recommendations.
- Enforce refusal and orchestrator return conditions before drafting implementation guidance.
- Require approval-owner routing when client rights, confidentiality, professional judgment, legal terms, contractual obligations, or release authority determine the answer.
- Preserve safe fallback: if retrieval fails or source conflict exists, produce a low-confidence escalation packet instead of a recommendation.

## Promotion Criteria

Retaining a trusted generated implementation in-repo is justified only when all
of these are true:

- The specialist is called frequently enough across tenants or workflows to make regeneration cost material.
- The generated implementation passes the 18-scenario suite and tenant-specific regression coverage across at least three sustained materializations.
- Runtime telemetry shows stable scope classification, evidence discipline, confidentiality handling, adjacent-lane routing, and no unreviewed regressions.
- A human owner approves promotion with rollback path, source-to-runtime traceability, and ongoing refresh obligations.
