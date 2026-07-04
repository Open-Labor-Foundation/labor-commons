# Deployment Package

## Runtime Model

- Target posture: `specification-based` validated catalog package.
- Deployment model: The orchestrator or `commons-crew` materializer loads this spec pack, retrieves tenant facts, and materializes a bounded software architecture specialist on demand.
- retained implementation: Not retained. A generated implementation is a promoted artifact only after future frequent-use evidence, full regression validation, source refresh, tenant-isolation review, and human approval.
- Required package artifacts: `manifest.yaml`, evaluation scenarios, functionality map, research summary, evaluation results, readiness evidence, release notes, deployment notes, and marketing readiness notes.

## Materialization Requirements

The runtime materializer must load and enforce:

- Task metadata: slug, queue slug, domain family, target delivery level, workflow phase group, industry profile, runtime strategy, and issue lineage.
- Boundary metadata: owned workflows, allowed decision types, hard refusal triggers, adjacent specialists, orchestrator return rules, hold/release boundaries, and approval authority limits.
- Tenant prerequisites: requirements, quality attributes, diagrams, ADRs, repository/module evidence, runtime stack, official stack documentation, incidents, defects, risk records, client workpapers, confidentiality constraints, and approval owners.
- Evidence dependencies: architecture records, API contracts, source repositories, issue trackers, quality records, incident systems, risk registers, and client delivery folders.
- Caveats: no final legal, contractual, audit, editorial, executive, engineering-of-record, risk-acceptance, release, platform, CI/CD, security execution, or product strategy authority.

## Tenant Isolation

- Keep tenant diagrams, repositories, ADRs, workpapers, policies, incidents, defects, and generated outputs isolated by tenant and engagement.
- Do not reuse confidential tenant or client artifacts across tenants.
- Reusable patterns must be sanitized and stripped of tenant-specific facts.
- Runtime logs must redact secrets and sensitive client content while preserving structured reason codes, source versions, assumptions, and evidence identifiers.

## Operations

- Monitoring:
  - Scenario pass rate, regression count, and functionality coverage status.
  - Source freshness and decay policy status by source ID.
  - In-scope, refusal, low-confidence escalation, and adjacent-specialist handoff counts.
  - Hold, release, corrective-action, confidentiality, and approval-conflict reason codes.
- Logging:
  - Record request class, accepted scope, evidence artifacts used, assumptions, source baseline, tenant-specific source versions, output type, confidence, and escalation/refusal reasons.
  - Do not log tenant secrets, proprietary diagrams, source code excerpts, credentials, or confidential client workpapers unless the tenant logging policy explicitly permits that storage.
- Human review:
  - Required for validated release evidence, source refresh changes, boundary changes, trusted-build promotion, and unresolved authority conflicts.

## Rollback

- Immediate rollback: Set delivery status below validated, disable materialization for new requests, and route active requests to orchestrator or human architecture reviewer.
- Spec rollback: Restore the previous package version only if the previous version still satisfies current source freshness and functionality coverage requirements.
- Runtime rollback: Discard generated implementations and materialized prompts; do not retain a built runtime unless trusted-build promotion criteria have already been met.
- Evidence rollback: Mark affected scenarios, sources, and readiness claims stale; re-run validation before restoring validated status.

## Promotion Criteria

Retain a generated implementation in-repo only when all are true:

- The specialist is called frequently enough in production or pilot use to justify long-term runtime retention.
- Usage patterns remain inside the software architecture boundary and do not primarily route to adjacent specialists.
- Full scenario suite passes with no unreviewed regressions.
- Source refresh audit confirms current authoritative sources and tenant-stack source handling.
- Tenant isolation, confidentiality handling, logging, and approval-boundary controls pass review.
- A human reviewer approves promotion and records the evidence in readiness artifacts.

## Deployment Notes

- The safe default remains specification-based materialization.
- Tenant adaptation may adjust retrieval sources, approved terminology, evidence templates, and output formatting, but cannot weaken hard refusal triggers or approval boundaries.
- Any change that widens scope, stores confidential workpapers, automates release approval, or claims retained implementation ownership must be treated as a new review and promotion event.
