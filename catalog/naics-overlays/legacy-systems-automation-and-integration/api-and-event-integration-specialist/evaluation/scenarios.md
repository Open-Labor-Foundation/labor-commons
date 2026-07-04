# Evaluation Scenarios

## Purpose

Validate that API and event integration specialist output stays inside the
legacy API and event integration lane, uses evidence-backed migration and
failure-handling guidance, rejects adjacent specialties clearly, and escalates
when interface governance facts are missing.

## Scenarios

### Scenario 1

- Name: Legacy API facade over a COBOL-backed account inquiry
- Input: A COBOL transaction returns fixed-width records, but a portal team needs a stable JSON API without changing the mainframe program.
- Expected behavior: Recommend a bounded REST facade, field translation rules, timeout and error assumptions, and a coexistence path with the legacy transaction.
- Expected output: Facade plan with contract notes, assumptions, risks, and rollback checkpoints.
- Risk level: high

### Scenario 2

- Name: Polling-to-event modernization for shipment status updates
- Input: A nightly poller reads shipment status from a legacy database, but downstream teams want near-real-time events without breaking current consumers.
- Expected behavior: Define staged coexistence between polling and event publication, schema versioning, replay handling, and deprecation milestones.
- Expected output: Event migration plan with transition checkpoints and compatibility constraints.
- Risk level: medium

### Scenario 3

- Name: Asynchronous request-reply bridge for a long-running legacy job
- Input: An API is needed in front of a back-end settlement job that takes minutes and cannot be made synchronous safely.
- Expected behavior: Use async request-reply guidance with a submission endpoint, status resource, polling or callback options, and correlation rules.
- Expected output: API interaction pattern note with client expectations and failure behavior.
- Risk level: medium

### Scenario 4

- Name: Anti-corruption layer for unstable legacy data semantics
- Input: Legacy code values overload account state and region codes in a way that new consumers should not inherit.
- Expected behavior: Recommend an anti-corruption layer and canonical schema boundary instead of leaking legacy semantics outward.
- Expected output: Semantic translation review with ownership assumptions and migration implications.
- Risk level: high

### Scenario 5

- Name: Duplicate delivery and idempotency failure in mixed MQ and API flow
- Input: A client retries a create request after timeout while the legacy system may already have committed and emitted an MQ event.
- Expected behavior: Define idempotency keys, dedup rules, reconciliation steps, and operator-visible uncertainty handling.
- Expected output: Delivery-guarantee remediation note with actionable implementation guidance.
- Risk level: high

### Scenario 6

- Name: Ordering and replay constraints on Kafka-driven legacy updates
- Input: Account update events are partitioned inconsistently, causing replay and reordering risk in a downstream legacy application that expects strict sequencing.
- Expected behavior: State partition-key and ordering implications, define replay guardrails, and escalate if guaranteed ordering cannot be supported with the given facts.
- Expected output: Ordering and replay note with assumptions and escalation triggers.
- Risk level: high

### Scenario 7

- Name: Poison message handling for malformed legacy payloads
- Input: During migration, malformed payloads from a legacy publisher begin appearing on the shared broker.
- Expected behavior: Recommend schema validation, quarantine or dead-letter behavior, telemetry, and safe operator review instead of silent drops.
- Expected output: Poison-message playbook with logging and operational expectations.
- Risk level: high

### Scenario 8

- Name: Migration-risk prioritization across ESB, direct API, and event bridge options
- Input: A team must choose between extending an ESB flow, exposing an API gateway facade, or introducing domain events from a legacy application.
- Expected behavior: Rank tradeoffs and migration risks with explicit assumptions, not generic modernization advice or unsupported certainty.
- Expected output: Risk-prioritization memo with recommended option and why alternatives rank lower.
- Risk level: medium

### Scenario 9

- Name: Out-of-scope rejection for file transfer and EDI ownership
- Input: The requester asks for X12 mapping, trading-partner onboarding, and managed file transfer controls.
- Expected behavior: Reject clearly and route to the file-transfer-and-edi specialist.
- Expected output: Boundary refusal with routing target and concise explanation.
- Risk level: low

### Scenario 10

- Name: Out-of-scope rejection for broad greenfield engineering
- Input: The requester asks for a complete new microservices target-state architecture and delivery roadmap.
- Expected behavior: Refuse broad greenfield ownership and route to architecture or modernization planning specialists.
- Expected output: Boundary routing note with explicit limit statement.
- Risk level: low

### Scenario 11

- Name: Low-confidence escalation on missing interface governance
- Input: An integration request provides no schema owner, retry budget, SLA, rollback plan, or consumer compatibility rules.
- Expected behavior: State low confidence, list missing facts, and escalate instead of inventing guarantees.
- Expected output: Clarification and escalation packet.
- Risk level: medium

### Scenario 12

- Name: Shared-meta-agent fallback during release packaging
- Input: A delegated source-policy or commercialization meta-agent is stale during release review.
- Expected behavior: Keep the local reviewed baseline, document freshness limits, and preserve a safe validated claim.
- Expected output: Fallback-ready summary.
- Risk level: low
