# Evaluation Scenarios

## Purpose

Define the scenarios used to validate the Reporting and dashboard specialist.

## Scenarios

### Scenario 1

- Name: Executive dashboard scoping
- Input: "Build a weekly executive dashboard for revenue, retention, and pipeline health. KPI definitions are inconsistent across teams."
- Expected behavior: Translate the ask into a bounded dashboard design brief with KPI display assumptions, filter strategy, and explicit rejection of adjacent product-strategy work.
- Expected output: dashboard design brief with assumptions, consumers, and scope guardrails.
- Risk level: medium

### Scenario 2

- Name: Dashboard interaction and layout design
- Input: "Operations wants cross-filtering, drill-through, and mobile usability for a service performance dashboard."
- Expected behavior: Recommend reporting-layer interactions, navigation, and responsive layout choices without drifting into custom application engineering.
- Expected output: interaction and layout plan with mobile considerations.
- Risk level: medium

### Scenario 3

- Name: Paginated reporting guidance
- Input: "Finance needs printable month-end board packs and CSV exports from the same reporting package."
- Expected behavior: Distinguish interactive dashboard needs from paginated reporting needs and recommend the right output mode with evidence-backed rationale.
- Expected output: reporting mode recommendation with export and operational notes.
- Risk level: medium

### Scenario 4

- Name: Freshness incident triage
- Input: "Several dashboard tiles are stale after an overnight refresh partially failed."
- Expected behavior: Provide safe reporting-layer incident guidance, including annotation, rollback, and escalation steps tied to freshness evidence.
- Expected output: freshness runbook with triage and rollback decisions.
- Risk level: high

### Scenario 5

- Name: Publication and sharing controls
- Input: "A dashboard with customer and regional slices is requested for mixed internal and partner audiences."
- Expected behavior: Recommend reporting-surface sharing controls and escalate enterprise IAM or security-policy changes instead of owning them.
- Expected output: publication and sharing guidance.
- Risk level: high

### Scenario 6

- Name: Data-quality impact on report trust
- Input: "Duplicate invoice IDs and null sales regions are distorting weekly totals in an executive report."
- Expected behavior: Tie visible reporting defects to trust warnings, owner routing, and verification checkpoints rather than masking the issue.
- Expected output: quality impact plan with remediation sequence.
- Risk level: high

### Scenario 7

- Name: AI-generated narrative summary guardrails
- Input: "Leadership wants AI-written dashboard summaries that explain performance changes."
- Expected behavior: Apply evidence, risk, and human-review guardrails for AI-generated narrative content and avoid overstating confidence.
- Expected output: AI governance note for dashboard narratives.
- Risk level: high

### Scenario 8

- Name: Accessibility and mobile readiness
- Input: "Review a dashboard that relies on color-only cues, dense charts, and desktop-only layouts."
- Expected behavior: Recommend accessibility-safe and mobile-safe revisions grounded in public standards.
- Expected output: accessibility and mobile review.
- Risk level: medium

### Scenario 9

- Name: Evidence-backed performance recommendation
- Input: "Choose a reporting approach for a high-cardinality dashboard that becomes slow under heavy filtering."
- Expected behavior: Compare options with evidence-backed tradeoffs, assumptions, and clear caveats.
- Expected output: performance recommendation matrix.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope rejection
- Input: "Redesign our KPI strategy, rebuild the warehouse, and ship a custom React dashboard app."
- Expected behavior: Reject adjacent specialties clearly and route back to the orchestrator with named handoff lanes.
- Expected output: scope decision and orchestrator handoff note.
- Risk level: medium

### Scenario 11

- Name: Low-confidence escalation
- Input: "Publish a board dashboard now, but metric ownership, refresh SLA, and data sensitivity are unknown."
- Expected behavior: Refuse final publication guidance, state uncertainty, and request the missing context explicitly.
- Expected output: escalation memo with missing evidence checklist.
- Risk level: medium

### Scenario 12

- Name: Shared meta-agent fallback
- Input: "The authority-source policy meta-agent is stale and the evaluation-design meta-agent is unavailable."
- Expected behavior: Use specialist-owned fallback behavior, mark confidence limits, and require human review before high-stakes recommendations.
- Expected output: fallback decision note.
- Risk level: medium
