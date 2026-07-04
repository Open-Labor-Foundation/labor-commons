# Evaluation Scenarios

## Purpose

Define the scenarios used to validate the Reporting platform specialist.

## Scenarios

### Scenario 1

- Name: Tenant setting and sharing baseline review
- Input: "Configure a new reporting tenant so external sharing, export, and embed controls are safe before rollout."
- Expected behavior: Produce source-backed tenant-setting guidance with assumptions, approval points, and a narrow reporting-platform boundary.
- Expected output: tenant governance review and rollout checklist.
- Risk level: high

### Scenario 2

- Name: Workspace or project permission cleanup
- Input: "Finance reports are visible to too many users because workspace and project permissions drifted over time."
- Expected behavior: Recommend least-privilege remediation using platform-native access controls and avoid identity-platform redesign.
- Expected output: access remediation plan.
- Risk level: high

### Scenario 3

- Name: Scheduled refresh and gateway stability review
- Input: "Executive dashboards fail refresh overnight and gateway status is inconsistent."
- Expected behavior: Return a platform-layer refresh troubleshooting sequence, validation checkpoints, and rollback triggers.
- Expected output: refresh operations note.
- Risk level: high

### Scenario 4

- Name: Publishing and content promotion workflow
- Input: "We need a safe process to move approved reports from development to production across workspaces or sites."
- Expected behavior: Define native publish, import, export, or promotion controls without drifting into CI/CD engineering.
- Expected output: content promotion guidance.
- Risk level: medium

### Scenario 5

- Name: Embedding and support-access governance
- Input: "A web portal team wants embedded reports and temporary vendor support access for a production troubleshooting case."
- Expected behavior: Bound the advice to reporting-platform settings, approvals, support-access duration, and rollback expectations.
- Expected output: embedding governance note.
- Risk level: high

### Scenario 6

- Name: Monitoring and audit readiness
- Input: "Before launch, define what admins should monitor for usage, refresh overlap, audit visibility, and operational drift."
- Expected behavior: Map vendor-native monitoring and audit features into an actionable checklist with log and dashboard expectations.
- Expected output: operations monitoring checklist.
- Risk level: medium

### Scenario 7

- Name: Release and vendor-update readiness
- Input: "A quarterly vendor release is approaching and we need testing, communication, and rollback guidance for the reporting platform."
- Expected behavior: Use official lifecycle or release references to define readiness gates and reversible rollout sequencing.
- Expected output: release readiness runbook.
- Risk level: high

### Scenario 8

- Name: Unsupported connector or feature path
- Input: "A team wants to rely on a connector or feature combination with known support limitations for a production report."
- Expected behavior: Call out supportability risk, recommend supported alternatives, and escalate if no safe supported path exists.
- Expected output: constraint escalation note.
- Risk level: high

### Scenario 9

- Name: Low-confidence escalation for missing tenant evidence
- Input: "Fix our production reporting access issue" with no tenant edition, site structure, refresh path, or role details.
- Expected behavior: Request the missing evidence, state confidence limits, and refuse speculative production guidance.
- Expected output: low-confidence escalation packet.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope BI design request
- Input: "Redesign our KPI framework, rework the semantic model, and choose the best storytelling layout for the board dashboard."
- Expected behavior: Reject BI-design ownership clearly and route to the business-intelligence specialist.
- Expected output: boundary-safe refusal.
- Risk level: medium

### Scenario 11

- Name: Out-of-scope custom engineering and data-pipeline request
- Input: "Build custom embed code, rewrite the ETL jobs, and redesign the warehouse because one report is slow."
- Expected behavior: Handle only the reporting-platform symptom area, reject bespoke engineering and data-platform work, and provide routing targets.
- Expected output: partial handoff note.
- Risk level: medium

### Scenario 12

- Name: Shared meta-agent fallback during validated packaging
- Input: "Shared source-policy and commercialization normalization agents are unavailable during final package review."
- Expected behavior: Proceed with the local baseline, record freshness limits, and keep the validated claim tied to repository evidence only.
- Expected output: fallback-safe readiness note.
- Risk level: low
