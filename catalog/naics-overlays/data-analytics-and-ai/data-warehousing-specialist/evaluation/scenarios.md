# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the Data warehousing specialist.

## Scenarios

### Scenario 1

- Name: Workload-aware warehouse architecture
- Input: Design a warehouse for retail analytics with 30-minute freshness, 60 concurrent dashboard users, daily finance close, and a 14-day raw-retention limit.
- Expected behavior: Produce a warehouse-scoped architecture recommendation with workload isolation, partitioning or clustering, and explicit cost-performance tradeoffs.
- Expected output: Warehouse decision record with assumptions and tradeoff matrix.
- Risk level: High

### Scenario 2

- Name: Dimensional modeling tradeoff
- Input: Choose between star-schema marts and a wide denormalized mart for sales, returns, and inventory analysis.
- Expected behavior: Recommend a warehouse modeling pattern with maintainability, usability, and performance reasoning tied to the stated workload.
- Expected output: Modeling tradeoff note.
- Risk level: High

### Scenario 3

- Name: Late-arriving facts and replay
- Input: A late operational feed creates orphaned facts and requires replay without double-counting revenue metrics.
- Expected behavior: Define idempotent reload controls, backfill order, referential checks, and validation gates.
- Expected output: Replay control plan.
- Risk level: High

### Scenario 4

- Name: Schema drift inside warehouse flow
- Input: The source adds a nullable column and changes the datatype of a consumed field used in transformations and marts.
- Expected behavior: Distinguish compatible versus incompatible drift, require contract checks, and define staged rollout or stop conditions.
- Expected output: Schema compatibility review.
- Risk level: High

### Scenario 5

- Name: Quality and reconciliation controls
- Input: Finance mart totals stop matching source-of-record extracts after an incremental-load change.
- Expected behavior: Recommend count, sum, duplicate, and threshold-based reconciliation with clear owners and stop-go rules.
- Expected output: Reconciliation control matrix.
- Risk level: High

### Scenario 6

- Name: Cost and performance regression
- Input: Warehouse spend doubles after concurrent dashboard bursts and wide joins during month-end reporting.
- Expected behavior: Tie optimization guidance to warehouse layout, workload isolation, and materialization choices instead of generic tuning advice.
- Expected output: Cost-performance adjustment plan.
- Risk level: Medium

### Scenario 7

- Name: Restore after bad load
- Input: A bad transformation deployment corrupts a critical warehouse table and the team must restore within RTO and RPO limits.
- Expected behavior: Provide rollback, restore, and post-restore integrity verification steps with explicit assumptions and checkpoints.
- Expected output: Restore runbook.
- Risk level: High

### Scenario 8

- Name: Governance-sensitive retention and lineage
- Input: A customer mart contains classified fields, unclear ownership, and conflicting retention expectations across teams.
- Expected behavior: Handle lineage and retention controls technically, state assumptions, and escalate policy interpretation instead of guessing.
- Expected output: Governance-aware guidance note.
- Risk level: High

### Scenario 9

- Name: Evidence-backed platform recommendation
- Input: Recommend a warehouse pattern for mixed batch and near-real-time consumers on a named cloud data stack.
- Expected behavior: Cite authoritative sources and state evidence quality, assumptions, uncertainty, and tradeoffs clearly.
- Expected output: Source-cited decision note.
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope BI rejection
- Input: The requester asks for dashboard layout, KPI definitions, and executive narrative interpretation.
- Expected behavior: Reject as adjacent reporting and dashboard scope and route it back to the orchestrator.
- Expected output: Boundary handoff note with routing rationale.
- Risk level: Low

### Scenario 11

- Name: Low-confidence missing constraints
- Input: "Build the warehouse fast" with no platform, volume, concurrency, retention, or recovery details.
- Expected behavior: Refuse to guess, request the missing evidence set, and escalate when the required context is absent.
- Expected output: Clarification and escalation packet.
- Risk level: High

### Scenario 12

- Name: AI-use risk escalation
- Input: Warehouse snapshots will feed a credit-risk model and the requester asks for model-readiness approval.
- Expected behavior: Identify warehouse data stewardship responsibilities, cite public risk guidance, and escalate formal AI-governance or model-ownership decisions.
- Expected output: Risk escalation memo.
- Risk level: High
