# Evaluation Scenarios

## Purpose

Define the scenarios used to validate the Business intelligence specialist.

## Scenarios

### Scenario 1

- Name: BI scope definition and KPI mapping
- Input: "We need a leadership sales dashboard. We have customer, order, and campaign data in three systems and no agreed KPI definitions."
- Expected behavior: Translate to KPI dictionary, grain, and ownership assumptions, then define in-scope BI recommendations with a narrow boundary.
- Expected output: scoped design brief with assumptions and ownership map.
- Risk level: low

### Scenario 2

- Name: Multi-source BI integration and freshness planning
- Input: "Source A refreshes hourly, Source B nightly, Source C via API with intermittent delays. Build a reporting approach for weekly performance.
"
- Expected behavior: Recommend source contracts, freshness SLAs, and sequencing that avoids stale joins.
- Expected output: integration plan with dependency and refresh windows.
- Risk level: medium

### Scenario 3

- Name: Semantic model normalization
- Input: "Current model has duplicate customer dimensions and contradictory date logic across reports."
- Expected behavior: Detect semantic drift and propose normalization, authoritative grain, and hierarchy standards.
- Expected output: model correction plan with migration-safe rollout steps.
- Risk level: medium

### Scenario 4

- Name: Data-quality rule design and evidence-backed remediation
- Input: "We are seeing nulls in critical region and duplicate invoice IDs in weekly finance KPIs."
- Expected behavior: Produce data-quality checks with priority and verification sequence tied to BI trust thresholds.
- Expected output: quality rule matrix plus remediation order and acceptance criteria.
- Risk level: high

### Scenario 5

- Name: BI pipeline failure recovery
- Input: "A scheduled ETL refresh failed; 30% of dashboard tiles are outdated."
- Expected behavior: Provide incident-safe recovery steps, rollback guidance, and confidence communication.
- Expected output: runbook for triage, backfill decisioning, and escalation.
- Risk level: high

### Scenario 6

- Name: Predictive feed monitoring
- Input: "Executive board view shows model-generated churn score deltas without visible model drift alerts."
- Expected behavior: Recommend monitoring and governance checks for model freshness, drift, and confidence before dashboard trust changes.
- Expected output: monitoring protocol with evidence required for action.
- Risk level: high

### Scenario 7

- Name: Evidence-backed recommendation comparison
- Input: "Choose between import mode and DirectQuery for a 10M-row operational KPI dashboard."
- Expected behavior: Compare options with evidence-backed tradeoffs, explicit assumptions, and caveats.
- Expected output: recommendation matrix and decision rationale.
- Risk level: medium

### Scenario 8

- Name: Out-of-scope handoff
- Input: "Migrate our entire data warehouse and redesign our networking architecture for BI workloads."
- Expected behavior: Reject as out-of-scope and provide clear reroute to adjacent data-platform or infrastructure specialists.
- Expected output: refusal and orchestrator handoff note.
- Risk level: medium

### Scenario 9

- Name: Low-confidence escalation
- Input: "You are asked to propose a final executive KPI definition, but source owners and retention policy are not known."
- Expected behavior: Ask for missing context and avoid fixed recommendations until required inputs are provided.
- Expected output: escalation memo listing missing metadata and confidence limits.
- Risk level: medium

### Scenario 10

- Name: Governance and privacy-aware dashboard publishing
- Input: "A dashboard includes customer tier, location, and behavior data requested by mixed internal/external users."
- Expected behavior: Apply governance-safe sharing settings, masking defaults, and publish controls.
- Expected output: governance-compliant publishing guidance.
- Risk level: high

### Scenario 11

- Name: Tenant adaptation with constraint checks
- Input: "A customer asks for custom refresh schedules and naming conventions while preserving platform compliance."
- Expected behavior: Accept safe configuration adaptations and block risky model behavior changes.
- Expected output: allowed/blocked adaptation list and approval workflow.
- Risk level: low

### Scenario 12

- Name: Commercial packaging readiness
- Input: "Produce deployment, rollback, and commercialization notes for this specialist package."
- Expected behavior: Generate packaging notes that align with deployment and commercialization expectations.
- Expected output: deployment and marketing-ready summary with proof points and rollout assumptions.
- Risk level: medium
