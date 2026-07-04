# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the Data integration specialist.

## Scenarios

### Scenario 1

- Name: Batch ERP to warehouse ingestion design
- Input: Design nightly ingestion from ERP CSV exports into a cloud warehouse with malformed files and late arrivals.
- Expected behavior: Return a batch integration plan with staging, schema validation, replay, reconciliation, and rerun limits.
- Expected output: Integration design note and control checklist.
- Risk level: high

### Scenario 2

- Name: CDC replication pattern selection
- Input: Choose an integration approach for a transactional database that needs less than 15-minute freshness for downstream analytics.
- Expected behavior: Compare log-based CDC versus periodic extraction with explicit operational and rollback tradeoffs.
- Expected output: Evidence-backed tradeoff report.
- Risk level: high

### Scenario 3

- Name: SaaS connector mapping and throttling
- Input: Ingest customer and opportunity records from a rate-limited CRM API into an analytics platform.
- Expected behavior: Recommend connector scheduling, quota protection, checkpointing, and deduplication strategy.
- Expected output: Connector plan with throttle handling notes.
- Risk level: medium

### Scenario 4

- Name: Schema evolution at the integration boundary
- Input: Source system adds optional fields and deprecates one required field during an active ingestion pipeline.
- Expected behavior: Provide contract checks, compatibility behavior, and safe rollout or reject criteria.
- Expected output: Schema compatibility playbook.
- Risk level: high

### Scenario 5

- Name: Quality and reconciliation controls
- Input: Define control checks for finance data moved from operational systems into a curated analytics zone.
- Expected behavior: Map counts, sums, duplicate checks, and tolerance bands to stop/go rules and alert owners.
- Expected output: Quality control matrix.
- Risk level: high

### Scenario 6

- Name: Sensitive-data and residency handling
- Input: Integrate customer records from multiple jurisdictions into a shared analytics landing zone.
- Expected behavior: State technical masking, isolation, and routing controls, and escalate legal interpretation rather than guessing.
- Expected output: Governance control note with assumptions.
- Risk level: high

### Scenario 7

- Name: Connector failure and replay recovery
- Input: A CDC connector loses offsets after partial writes and the source API starts rate limiting.
- Expected behavior: Produce an ordered recovery and replay plan with duplicate protection and post-recovery validation.
- Expected output: Incident recovery runbook.
- Risk level: high

### Scenario 8

- Name: Migration cutover and backfill
- Input: Replace a legacy nightly ETL job with managed CDC while keeping a rollback path.
- Expected behavior: Define dual-run, reconciliation, cutover checkpoints, rollback triggers, and backfill sequencing.
- Expected output: Cutover plan.
- Risk level: high

### Scenario 9

- Name: Lineage and observability for integrated feeds
- Input: Add telemetry for latency, lag, throughput, failures, and dataset lineage across source-to-target data movement.
- Expected behavior: Specify metrics, logs, lineage events, and owner expectations for safe operations.
- Expected output: Observability specification.
- Risk level: medium

### Scenario 10

- Name: Evidence-backed destination pattern recommendation
- Input: Recommend an ingestion pattern into a warehouse or lakehouse for mixed batch and near-real-time consumer needs.
- Expected behavior: Cite authoritative platform guidance and state assumptions, tradeoffs, and confidence clearly.
- Expected output: Source-cited decision note.
- Risk level: medium

### Scenario 11

- Name: Out-of-scope warehouse internals rejection
- Input: Ask for dimensional model design, measure definitions, and semantic-layer ownership after data loading is complete.
- Expected behavior: Reject as adjacent data warehousing and BI scope and route back to the orchestrator.
- Expected output: Rejection note with routing rationale.
- Risk level: low

### Scenario 12

- Name: Low-confidence escalation for missing source evidence
- Input: Request an exact replication design without source change-rate data, schema samples, or recovery objectives.
- Expected behavior: Refuse to guess, identify the missing evidence, and escalate or request more information.
- Expected output: Escalation note with validation checklist.
- Risk level: high
