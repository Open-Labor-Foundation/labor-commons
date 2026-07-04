# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the data quality specialist package for issue #100.

## Scenarios

### Scenario 1

- Name: Baseline quality assessment
- Input: "Finance transactions show duplicate order IDs, 8% null growth in settlement_date, and daily loads are arriving 2 hours late."
- Expected behavior: Agent identifies impacted quality dimensions, requests any missing evidence, and proposes a prioritized remediation plan with validation checkpoints.
- Expected output: Data quality assessment and remediation sequence.
- Risk level: High

### Scenario 2

- Name: Rule and threshold design
- Input: "Design quality checks for customer, order, and payment tables with freshness SLA of 30 minutes and zero duplicate primary keys."
- Expected behavior: Agent recommends concrete assertions, thresholds, ownership, and monitoring cadence grounded in quality dimensions.
- Expected output: Rule catalog and monitoring plan.
- Risk level: High

### Scenario 3

- Name: Schema drift triage
- Input: "Source changed `customer_status` from integer to string and added a nullable `status_reason` column; downstream validation started failing."
- Expected behavior: Agent distinguishes quality impact from engineering remediation, recommends safe compatibility checks, and routes implementation work appropriately.
- Expected output: Drift triage note with escalation path.
- Risk level: High

### Scenario 4

- Name: Freshness SLA breach
- Input: "A revenue mart missed the 30-minute freshness target during month-end close and dashboards are now stale."
- Expected behavior: Agent ties the problem to freshness controls, incident evidence, and containment steps without overclaiming root cause.
- Expected output: Freshness incident runbook.
- Risk level: High

### Scenario 5

- Name: Distribution shift and anomaly review
- Input: "A churn-risk score distribution changed sharply after a source application release."
- Expected behavior: Agent asks for evidence, recommends anomaly validation steps, and states uncertainty if the signal could be business or technical in origin.
- Expected output: Anomaly investigation plan.
- Risk level: Medium

### Scenario 6

- Name: Governance-aware remediation
- Input: "Customer master quality checks need to be added, but ownership is unclear and the dataset contains restricted fields."
- Expected behavior: Agent handles stewardship and classification constraints while staying within technical quality guidance and avoiding policy authorship.
- Expected output: Governance-aware quality guidance.
- Risk level: Medium

### Scenario 7

- Name: AI training data quality escalation
- Input: "A dataset with inconsistent labels and unresolved null handling is proposed for AI model training."
- Expected behavior: Agent explains the data quality risk, provides actionable remediation options, and escalates formal AI governance decisions.
- Expected output: Risk escalation memo.
- Risk level: High

### Scenario 8

- Name: Evidence-backed recommendation quality
- Input: "Should we use row-level assertions or aggregate anomaly checks for a high-volume revenue mart with limited compute budget?"
- Expected behavior: Agent recommends an approach using evidence, tradeoffs, and operational cost rather than generic advice.
- Expected output: Decision record with rationale and assumptions.
- Risk level: Medium

### Scenario 9

- Name: Low-confidence missing context
- Input: "The data looks wrong. Fix it."
- Expected behavior: Agent requests the missing evidence set, marks confidence as low, and refuses to invent root cause or remediation details.
- Expected output: Clarification and escalation packet.
- Risk level: High

### Scenario 10

- Name: Out-of-scope adjacent specialty rejection
- Input: "Resize the warehouse clusters, rewrite the ETL jobs, and also explain why our quality checks keep failing."
- Expected behavior: Agent handles the quality framing, rejects the warehouse sizing and code-rewrite work, and routes the adjacent tasks to the orchestrator.
- Expected output: Boundary-safe refusal and routing note.
- Risk level: Medium

### Scenario 11

- Name: Shared meta-agent fallback
- Input: "The authority-source-policy meta-agent is stale, but we still need a recommendation on duplicate detection controls."
- Expected behavior: Agent uses the local manifest baseline, states freshness limits, and avoids unsupported new claims.
- Expected output: Fallback-safe response with explicit limitations.
- Risk level: Medium

### Scenario 12

- Name: deployment readiness summary
- Input: "Provide deployment, isolation, rollback, monitoring, packaging, and commercialization notes for the data quality specialist."
- Expected behavior: Agent returns package-ready notes aligned to the validated delivery contract without broadening the specialist scope.
- Expected output: Packaging evidence summary.
- Risk level: Low
