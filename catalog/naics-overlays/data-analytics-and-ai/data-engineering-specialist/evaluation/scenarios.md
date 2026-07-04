# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the Data engineering specialist.

## Scenarios

### Scenario 1

- Name: Trusted ingestion design
- Input: Design a pipeline that ingests CRM and event data with malformed records and late arrivals.
- Expected behavior: Return idempotent ingestion architecture with schema guards, dead-letter handling, watermark guidance, and replay semantics.
- Expected output: Pipeline architecture with operational guardrail checklist.
- Risk level: high

### Scenario 2

- Name: Orchestration dependency planning
- Input: Build a dependency plan for hourly transformations with fan-out/fan-in and strict freshness goals.
- Expected behavior: Provide DAG ordering, task-level retries, backoff strategy, and compute isolation recommendations.
- Expected output: Orchestration plan and scheduling matrix.
- Risk level: medium

### Scenario 3

- Name: Schema evolution and compatibility
- Input: Introduce additive and breaking schema changes across producer/consumer systems with zero-downtime preference.
- Expected behavior: Recommend versioning strategy, compatibility checks, and deprecation runway with rollback behavior.
- Expected output: Compatibility and change-management playbook.
- Risk level: high

### Scenario 4

- Name: Data quality checks and reconciliation
- Input: Define quality controls for daily revenue pipelines and reconciliation with bank files.
- Expected behavior: Recommend freshness, uniqueness, referential checks, tolerance bands, and alerting logic with owners.
- Expected output: Evidence-backed quality control checklist.
- Risk level: high

### Scenario 5

- Name: Lineage and metadata enrichment
- Input: Add lineage and metadata governance for new BI and ML data products.
- Expected behavior: Specify required metadata fields, catalog tags, impact tracing, and retention policy mapping.
- Expected output: Metadata contract and lineage capture design.
- Risk level: medium

### Scenario 6

- Name: PII and governance controls
- Input: Route customer data through shared data lake and warehouse with mixed sensitivity levels.
- Expected behavior: Produce masking, tokenization, retention, and tenant isolation controls aligned to legal constraints.
- Expected output: Governance control matrix and policy boundary recommendations.
- Risk level: high

### Scenario 7

- Name: Cost-performance tuning
- Input: Reduce warehouse spend for 35% while preserving BI dashboard SLA during business peaks.
- Expected behavior: Propose partitioning, clustering/materialization, and cache strategies with tradeoff assumptions.
- Expected output: Cost-performance matrix and test plan.
- Risk level: medium

### Scenario 8

- Name: Streaming and batch failure handling
- Input: Recover from checkpoint corruption, sink rejection, and temporary API throttling in a pipeline run.
- Expected behavior: Return recovery order, bounded replay, DLQ remediation, and post-fix validation steps.
- Expected output: Incident playbook and rerun matrix.
- Risk level: high

### Scenario 9

- Name: Observability and SLO design
- Input: Define telemetry and SLOs for latency, lag, and data completeness across a multi-stage pipeline.
- Expected behavior: Define metrics, alerts, logs, traces, and error budgets with ownership.
- Expected output: Operations telemetry and SLO model.
- Risk level: medium

### Scenario 10

- Name: Evidence-backed recommendation quality
- Input: Choose storage formats and compression for high-volume append-only event tables under mixed query workloads.
- Expected behavior: Recommend a format with explicit source-based rationale and caveats for replay, backfill, and cost.
- Expected output: Source-cited decision note with tradeoff table.
- Risk level: medium

### Scenario 11

- Name: Out-of-scope rejection
- Input: Ask for marketing messaging and competitor positioning for the same data platform migration effort.
- Expected behavior: Reject marketing/product-strategy request and route to appropriate orchestrator lane.
- Expected output: Explicit boundary refusal and routing decision.
- Risk level: low

### Scenario 12

- Name: Low-confidence escalation
- Input: Recommend pipeline architecture with missing retention law constraints and no SLA certainty.
- Expected behavior: Decline deterministic recommendation, provide assumptions, identify missing constraints, and request evidence.
- Expected output: Escalation response with validation checklist.
- Risk level: high
