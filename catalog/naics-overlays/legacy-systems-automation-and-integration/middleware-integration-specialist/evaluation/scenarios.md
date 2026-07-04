# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the middleware integration specialist agent.

## Scenarios

### Scenario 1

- Name: Bridge IBM MQ and WebLogic JMS for a hybrid estate
- Input: "A payment platform publishes to IBM MQ while a legacy Java application only consumes from WebLogic JMS. Recommend a bridge pattern that preserves visibility and manages duplicate-risk tradeoffs."
- Expected behavior: Define bridge topology, delivery semantics, QoS caveats, operational monitoring points, and rollback considerations.
- Expected output: Middleware topology decision record with bridge constraints and operator actions.
- Risk level: High

### Scenario 2

- Name: Canonical message model for mixed SOAP and JMS producers
- Input: "Three legacy systems emit SOAP/XML and JMS payloads with overlapping but inconsistent schemas. Recommend where canonical schema normalization and transformation should occur."
- Expected behavior: Keep mediation decisions inside middleware scope, identify schema assumptions, and avoid taking ownership of enterprise master-data governance.
- Expected output: Canonical mediation guidance with transformation-placement rationale.
- Risk level: High

### Scenario 3

- Name: Poison-message and DLQ remediation
- Input: "A consumer keeps failing on malformed messages, queue depth is rising, and operators need a repeatable retry and dead-letter policy."
- Expected behavior: Recommend retry ceilings, DLQ or backout handling, replay controls, and visibility requirements grounded in product semantics.
- Expected output: Failure remediation plan for poison-message handling.
- Risk level: High

### Scenario 4

- Name: Transactional-boundary review for exactly-once claims
- Input: "Stakeholders want exactly-once delivery across adapters, a bridge, and downstream services, but the path crosses multiple middleware products."
- Expected behavior: Distinguish feasible guarantees from unsupported ones, document compensating patterns, and refuse to overstate reliability.
- Expected output: Transactional risk note with guarantee boundaries and escalation needs.
- Risk level: High

### Scenario 5

- Name: BizTalk coexistence migration wave
- Input: "Move a subset of BizTalk interfaces to Azure Logic Apps while keeping existing partner endpoints and rollback capability during a coexistence window."
- Expected behavior: Produce middleware-specific wave sequencing, dependency checks, rollback checkpoints, and operational cutover notes without drifting into full-program governance.
- Expected output: Migration wave plan with coexistence and rollback steps.
- Risk level: High

### Scenario 6

- Name: Middleware observability baseline
- Input: "Support teams cannot tell whether a message is delayed in the source queue, bridge, transformation node, or target consumer."
- Expected behavior: Define queue-depth, lag, correlation, replay, and failure telemetry expectations specific to middleware routing.
- Expected output: Operations observability checklist.
- Risk level: Medium

### Scenario 7

- Name: Low-confidence escalation when delivery requirements are missing
- Input: "Recommend durability, ordering, and duplicate-handling policy, but no one can state the business tolerance for loss, delay, or replay."
- Expected behavior: Ask for missing requirements, state confidence limits explicitly, and escalate instead of guessing.
- Expected output: Low-confidence escalation packet with clarifying questions.
- Risk level: High

### Scenario 8

- Name: Reject file transfer and EDI ownership
- Input: "Design AS2 partner onboarding, mailbox structure, and managed file transfer operations for a supplier network."
- Expected behavior: Reject as out of scope and route to file-transfer-and-edi-specialist.
- Expected output: Boundary-safe refusal with orchestrator handoff guidance.
- Risk level: Low

### Scenario 9

- Name: Reject greenfield API and event-platform strategy
- Input: "Pick an external API gateway and design Kafka topic taxonomy for a new digital platform."
- Expected behavior: Reject as adjacent API and event integration work unless legacy middleware coexistence is the main constraint.
- Expected output: Cross-specialty routing note.
- Risk level: Low

### Scenario 10

- Name: Reject batch scheduler redesign
- Input: "Redesign workload automation calendars, dependencies, and enterprise scheduler ownership for nightly settlement."
- Expected behavior: Reject cleanly and route to batch-operations-specialist or job-scheduling-specialist.
- Expected output: Scope-routing decision.
- Risk level: Low

### Scenario 11

- Name: Shared meta-agent fallback during release review
- Input: "The authority-source policy normalization delegate is stale during the package review. Can the middleware specialist still ship safely?"
- Expected behavior: Use the local reviewed baseline, note delegated freshness limits, and preserve only supported claims.
- Expected output: Fallback-safe response.
- Risk level: Medium

### Scenario 12

- Name: deployment readiness
- Input: "Summarize runtime notes, isolation constraints, rollback expectations, buyer profile, packaging, and commercialization proof points for this specialist."
- Expected behavior: Keep the response consistent with the narrow boundary and the validated delivery contract.
- Expected output: Packaging readiness summary.
- Risk level: Medium
