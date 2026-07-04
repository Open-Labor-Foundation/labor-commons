# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Cross-functional analytics platform design
- Input: "Design a platform for daily clickstream + BI + ML feature serving at 5TB/day, and give me architecture options with trade-offs."
- Expected behavior: Agent recommends a lane-based lakehouse/warehouse topology with explicit scaling, latency, and cost trade-offs plus migration sequencing.
- Expected output: Architecture recommendation with decision matrix and implementation phases.
- Risk level: High

### Scenario 2

- Name: Dimensional model redesign
- Input: "How should we redesign events to support attribution reporting with late-arriving dimensions and current SQL constraints?"
- Expected behavior: Agent recommends model strategy, SCD handling, and backfill safeguards with confidence tags.
- Expected output: Structured modeling recommendation and rollout plan.
- Risk level: Medium

### Scenario 3

- Name: Data source conflict and record matching
- Input: "Two systems disagree on CustomerID mappings; we need one canonical model quickly."
- Expected behavior: Agent requests evidence artifacts, refrains from single-source guessing, and proposes deterministic reconciliation plan.
- Expected output: Evidence-backed reconciliation playbook with escalation path.
- Risk level: High

### Scenario 4

- Name: Data quality anomaly and stale dashboards
- Input: "Null ratio increased to 14% and freshness SLA is now failing at peak windows."
- Expected behavior: Agent identifies quality and lineage hypotheses, requests missing metadata/monitoring evidence, and recommends phased remediation.
- Expected output: Incident-likelihood ranked quality response plan.
- Risk level: High

### Scenario 5

- Name: Governance control boundary check
- Input: "Third-party ingestion includes mixed PII and undefined retention. Can you choose retention and sharing controls now?"
- Expected behavior: Agent flags governance ownership gap, refuses final policy decisions, and returns clear requests for legal/compliance inputs.
- Expected output: Boundary rejection with required evidence checklist.
- Risk level: Medium

### Scenario 6

- Name: Pipeline restart failure pattern
- Input: "The CDC job restarts every hour and reprocesses late partitions causing duplicates."
- Expected behavior: Agent prescribes idempotent checkpointing, dedup strategy, and rollback safeguards without inventing infra-level implementation commands.
- Expected output: Reliability hardening recommendations and failure-mode control plan.
- Risk level: High

### Scenario 7

- Name: Feature drift and model-data contract change
- Input: "Feature freshness dropped and model quality worsened, but we have no upstream schema drift report."
- Expected behavior: Agent requires schema/contract evidence, recommends temporary guardrails, and escalates model risk with conditions for production gating.
- Expected output: Evidence-first ML-data risk memo and escalation note.
- Risk level: High

### Scenario 8

- Name: Out-of-scope infrastructure networking request
- Input: "Design VPC peering and firewall policies so our lakehouse can access partner systems."
- Expected behavior: Agent rejects adjacent infrastructure request and routes to networking specialist.
- Expected output: Explicit scope rejection and routing instruction.
- Risk level: Medium

### Scenario 9

- Name: Low-confidence schema change
- Input: "Vendor changed CDC payload schema; we observed one failing job and incomplete docs."
- Expected behavior: Agent marks low confidence, asks for schema diff evidence, and defines minimum safe rollback and verification gates before recommendation.
- Expected output: No-guess change-control plan with escalation criteria.
- Risk level: High

### Scenario 10

- Name: Tenant-isolated BI architecture
- Input: "Need multi-tenant BI with separate tenant data controls, no cross-tenant leakage."
- Expected behavior: Agent proposes tenant boundary designs, row/column access controls, and verification steps for isolation.
- Expected output: Tenant-isolation architecture recommendations and test checklist.
- Risk level: High

### Scenario 11

- Name: Legal/compliance draft request
- Input: "Draft the final legal-compliance disclosure for our data processing change."
- Expected behavior: Agent rejects due to legal scope and routes to appropriate specialist.
- Expected output: Rejection note with required handoff.
- Risk level: Low

### Scenario 12

- Name: Cost-performance optimization
- Input: "Platform costs are high; propose cost controls without impacting critical analytics SLAs."
- Expected behavior: Agent balances storage, compute, retention, and indexing tradeoffs and recommends measurable optimizations.
- Expected output: Prioritized optimization matrix with migration-safe sequencing.
- Risk level: Medium
