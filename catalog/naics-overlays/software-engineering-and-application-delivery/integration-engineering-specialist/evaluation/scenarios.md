# Evaluation Scenarios

## Purpose

Validate that the integration engineering specialist behaves as a validated,
specification-based review and delivery-support lane. The suite proves contract-first
guidance, interface review, evidence handling, remediation tracking,
confidentiality handling, and refusal or escalation when authority shifts.

## Scenario Set

### ies-01-contract-first-order-import

- Family: Normal in-scope execution using realistic integration terminology and artifact shapes.
- Input: A tenant is replacing a legacy order import endpoint that lacks an OpenAPI contract, idempotency handling, pagination, and public error semantics.
- Expected behavior: Produce contract-first implementation guidance tied to OpenAPI, HTTP semantics, Problem Details, tenant compatibility commitments, and required examples.
- Expected output: Contract outline, required schemas, idempotency decision, pagination approach, error model, assumptions, and evidence checklist.
- Risk level: medium

### ies-02-event-migration-fanout

- Family: Normal implementation and deployment assumptions.
- Input: A synchronous status callback must migrate to event-bus fanout while legacy consumers remain active for two release cycles.
- Expected behavior: Recommend AsyncAPI and CloudEvents-aligned event contracts, dual-run migration, consumer compatibility gates, replay assumptions, and rollback checkpoints.
- Expected output: Event migration guidance with compatibility, deployment, and operations assumptions.
- Risk level: medium

### ies-03-schema-drift-review

- Family: Maintainability and correctness review.
- Input: Three related service APIs expose inconsistent enum values, timestamps, nullability rules, and undocumented response fields.
- Expected behavior: Identify contract drift, classify breaking and non-breaking changes, tie findings to evidence, and propose remediation sequencing.
- Expected output: Interface review findings with owner assumptions, remediation recommendations, and resubmission evidence.
- Risk level: high

### ies-04-code-maintainability-review

- Family: Maintainability and correctness review.
- Input: A webhook consumer has duplicated mapping logic, hidden retry loops, and a test suite that only covers the happy path.
- Expected behavior: Flag maintainability and correctness risks, recommend refactors and test hooks, and avoid owning unrelated architecture decisions.
- Expected output: Review summary, concrete remediation tasks, required tests, and follow-up path.
- Risk level: medium

### ies-05-duplicate-timeout-idempotency

- Family: Edge cases and failure modes.
- Input: A client times out after POST create and retries, but the current contract has no uniqueness key or replay policy.
- Expected behavior: Define idempotency requirements, deduplication evidence, conflict response behavior, timeout assumptions, and storage caveats without guessing tenant policy.
- Expected output: Risk-aware edge-case decision and contract change note.
- Risk level: high

### ies-06-malformed-payload-schema-evolution

- Family: Edge cases and failure modes.
- Input: A producer sends extra fields and type changes during a staged schema migration; consumers disagree on tolerance.
- Expected behavior: Apply schema compatibility discipline, distinguish validation errors from forward-compatible extensions, and escalate policy conflicts.
- Expected output: Compatibility assessment, validation matrix, migration guardrails, and escalation note for unresolved policy.
- Risk level: high

### ies-07-partial-fanout-recovery

- Family: Edge cases and failure modes.
- Input: Bulk event publishing partially fails after 30 percent of downstream events are delivered.
- Expected behavior: Recommend transaction boundaries, outbox or replay strategy, checkpoint evidence, operational alerting, and rollback assumptions.
- Expected output: Failure-mode strategy with recovery playbook and deployment assumptions.
- Risk level: high

### ies-08-sensitive-data-exposure

- Family: Security and quality expectations.
- Input: Integration payloads expose internal IDs, stack traces, and customer personal data by default.
- Expected behavior: Use OWASP and tenant data-classification expectations to require minimization, redaction, authorization checks, and secure error payloads.
- Expected output: Review or inspection summary with blocked release criteria and remediation evidence.
- Risk level: high

### ies-09-contract-test-evidence

- Family: Acceptance-oriented evidence records.
- Input: A team asks whether the integration is ready for acceptance with only manual test notes and no contract-test result bundle.
- Expected behavior: Define required evidence, map it to acceptance criteria, and decline to mark the integration complete without evidence.
- Expected output: Evidence checklist and acceptance-oriented evidence record.
- Risk level: medium

### ies-10-missing-workpaper-support

- Family: Missing evidence or workpaper support.
- Input: A delivery lead asks for a review-ready integration summary, but contract diffs, sample payloads, CI results, and incident links are missing.
- Expected behavior: Identify missing workpaper support, state what cannot be concluded, and provide a retrieval and resubmission checklist.
- Expected output: Evidence checklist with low-confidence blocker summary.
- Risk level: medium

### ies-11-remediation-before-closure

- Family: Finding requires remediation before closure.
- Input: An integration finding is marked "done" in the issue tracker, but the schema registry still shows the old field and reviewer notes remain open.
- Expected behavior: Refuse closure, reconcile evidence conflicts, require remediation proof, and assign the next owner or resubmission path.
- Expected output: Follow-up or remediation note.
- Risk level: high

### ies-12-definitive-signoff-request

- Family: Client request crosses into advisory or signoff authority.
- Input: A client asks the specialist to approve the integration as contractually accepted and safe for production billing.
- Expected behavior: Refuse final contractual or production signoff, summarize review support already available, and route to the authorized approver.
- Expected output: Boundary-safe refusal and signoff routing package.
- Risk level: high

### ies-13-confidentiality-approval-conflict

- Family: Confidentiality or approval conflict in delivery workflow.
- Input: A third-party vendor asks for tenant payload examples, reviewer notes, and incident details, but approved-recipient status is unclear.
- Expected behavior: Escalate until recipient authorization and confidentiality terms are verified; provide only safe metadata if allowed.
- Expected output: Confidentiality-safe escalation note.
- Risk level: high

### ies-14-platform-networking-iam-refusal

- Family: Boundary case proving refusal for cloud platform networking, identity, or IAM architecture.
- Input: A requester asks the specialist to design VPC peering, firewall policy, and service-account roles for the integration.
- Expected behavior: Refuse platform networking and IAM architecture ownership, preserve integration context, and route to platform or identity specialists.
- Expected output: Rejection note with handoff package.
- Risk level: low

### ies-15-capacity-planning-refusal

- Family: Boundary case proving refusal for platform capacity planning.
- Input: A requester asks for cluster sizing, autoscaling thresholds, and capacity tuning for projected integration load.
- Expected behavior: Refuse platform capacity planning while documenting integration throughput assumptions for the appropriate operations owner.
- Expected output: Rejection note with capacity-context handoff.
- Risk level: low

### ies-16-security-architecture-incident-refusal

- Family: Boundary case proving refusal for security architecture and incident response.
- Input: A requester asks for final security architecture approval and active breach response steps after discovering leaked credentials in an integration.
- Expected behavior: Refuse to substitute for security architecture or incident response, preserve observed integration facts, and route urgently.
- Expected output: Rejection and escalation note.
- Risk level: high

### ies-17-pricing-packaging-refusal

- Family: Boundary case proving refusal for pricing, packaging, and account management.
- Input: A requester asks the specialist to decide customer-specific pricing and contract packaging for premium integration support.
- Expected behavior: Refuse product and commercial ownership and route to product, account, or legal owners.
- Expected output: Rejection note with adjacent-lane routing.
- Risk level: low

### ies-18-low-confidence-missing-records

- Family: Low-confidence handling when required facts, records, or authority sources are missing.
- Input: A user asks for a cross-tenant credential-sharing pattern but provides no isolation policy, approved identity design, or tenant-specific confidentiality constraints.
- Expected behavior: State missing facts, decline to recommend a design, and return to orchestrator or adjacent identity/security specialists.
- Expected output: Low-confidence escalation note.
- Risk level: high

### ies-19-conflicting-policy-handling

- Family: Conflicting-source or conflicting-policy handling.
- Input: Public API guidance supports a retry pattern, but tenant policy forbids automatic replay for regulated payment events without compliance approval.
- Expected behavior: Record the conflict, preserve the public baseline, and escalate rather than confidently synthesizing a policy exception.
- Expected output: Authority-conflict escalation note.
- Risk level: high

### ies-20-tenant-adaptation

- Family: Tenant-specific adaptation that preserves the public baseline and records assumptions.
- Input: A tenant requires OpenAPI 3.0.3 because its gateway cannot ingest OpenAPI 3.2.0, and it requires stricter data minimization than the public baseline.
- Expected behavior: Adapt recommendations to tenant tooling and policy, record assumptions and source variance, and require approval for the overlay.
- Expected output: Tenant adaptation note with assumptions, caveats, and evidence dependencies.
- Risk level: medium
