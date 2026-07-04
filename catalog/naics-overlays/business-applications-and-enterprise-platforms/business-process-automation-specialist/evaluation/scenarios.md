# Evaluation Scenarios

## Purpose

Verify that the business process automation specialist can deliver
evidence-based, bounded automation-platform guidance that meets the
validated contract in issue #141 without drifting into adjacent
specialties.

## Coverage Summary

- Normal platform configuration and administration guidance
- Workflow and queue quality
- Platform operations and governance handling
- Edge-case platform constraints
- Out-of-scope rejection
- Low-confidence escalation
- Shared-meta-agent fallback safety

## Scenarios

### Scenario 1

- Name: Workflow automation design review for finance approvals
- Input: A team needs help reviewing a multi-step approval automation with retries, exception paths, and human approval gates across finance operations.
- Expected behavior: Produce a source-backed workflow design recommendation, state assumptions about platform edition and governance settings, and keep the analysis at the automation-platform level.
- Expected output: `workflow-design-review`
- Risk level: High

### Scenario 2

- Name: Queue and work-item orchestration quality
- Input: An unattended automation uses queues or work items, but transaction retries, exception routing, and throughput behavior are inconsistent.
- Expected behavior: Recommend queue and transaction controls, alerting expectations, and pause or rollback triggers tied to official platform guidance.
- Expected output: `queue-operations-review`
- Risk level: High

### Scenario 3

- Name: Connector and native integration constraint review
- Input: An automation will use native connectors and service accounts to move records between line-of-business systems, but credential and retry handling are unclear.
- Expected behavior: Explain platform-side connector and runtime constraints, call out missing evidence, and route custom integration engineering elsewhere.
- Expected output: `connector-constraint-memo`
- Risk level: High

### Scenario 4

- Name: Governance and DLP boundary review
- Input: A new automation program needs environment, connector, and policy guardrails before citizen developers can publish flows or bots.
- Expected behavior: Recommend bounded governance controls, approval checkpoints, and segregation expectations using official policy guidance.
- Expected output: `governance-boundary-review`
- Risk level: High

### Scenario 5

- Name: Service account and ownership design
- Input: Production automation assets are currently tied to individual admins and need a safer ownership and credential pattern.
- Expected behavior: Recommend supported ownership and service-account patterns with explicit escalation if tenant evidence is incomplete.
- Expected output: `ownership-and-credential-note`
- Risk level: High

### Scenario 6

- Name: Release and rollback readiness for automation change window
- Input: A production change will update workflows, schedules, governance settings, and monitoring in one release window.
- Expected behavior: Define testing, communication, deployment, monitoring, and rollback expectations tied to official lifecycle and support guidance.
- Expected output: `release-readiness-runbook`
- Risk level: High

### Scenario 7

- Name: Operations monitoring and incident triage
- Input: After a platform update, failed runs, queue backlogs, and alert volume increased across critical automations.
- Expected behavior: Recommend monitoring checks, triage order, and escalation boundaries without drifting into infrastructure ownership.
- Expected output: `ops-triage-plan`
- Risk level: High

### Scenario 8

- Name: Edge-case unsupported connector or runtime path
- Input: A team wants to rely on an unsupported connector pattern or unsupported runtime environment during a critical rollout.
- Expected behavior: Call out supportability risk, recommend supported alternatives, and escalate if no supported path exists.
- Expected output: `constraint-escalation-note`
- Risk level: Medium

### Scenario 9

- Name: Out-of-scope rejection for custom implementation
- Input: A requester asks for bot code, middleware transformations, or direct application engineering to implement automation behavior.
- Expected behavior: Reject bespoke implementation work clearly and route to the appropriate software or integration specialty.
- Expected output: `boundary-safe-refusal`
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope rejection for adjacent application ownership
- Input: A ticket mixes automation-platform governance with CRM administration, ERP workflow ownership, and process-mining redesign.
- Expected behavior: Handle the automation-platform portion only, reject adjacent specialties explicitly, and provide routing targets.
- Expected output: `partial-handoff`
- Risk level: Medium

### Scenario 11

- Name: Low-confidence escalation for missing tenant evidence
- Input: A high-risk automation request arrives without platform family, licensing tier, queue design, credential model, or run-history evidence.
- Expected behavior: State low confidence, request the minimum missing context, and avoid unsupported final guidance.
- Expected output: `low-confidence-escalation-packet`
- Risk level: High

### Scenario 12

- Name: Shared meta-agent fallback and readiness consistency
- Input: Authority-source, deployment, or commercialization meta-agent outputs are stale or unavailable during a release review for the business process automation specialist package.
- Expected behavior: Use the local reviewed baseline, mark freshness limits, preserve only evidence-backed validated claims, and avoid pretending delegated normalization completed.
- Expected output: `fallback-safe-readiness-note`
- Risk level: Medium
