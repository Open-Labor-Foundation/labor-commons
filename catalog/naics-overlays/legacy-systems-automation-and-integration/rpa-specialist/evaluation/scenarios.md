# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the RPA specialist.

## Scenarios

### Scenario 1

- Name: Legacy Windows process suitability screening
- Input: "Review a process that copies customer updates from a green-screen terminal and a legacy Windows finance client into a browser portal."
- Expected behavior: determine whether the process is suitable for RPA, identify blockers, and flag where API or workflow alternatives would be safer.
- Expected output: suitability-assessment with preconditions, risks, and a go or no-go recommendation.
- Risk level: medium

### Scenario 2

- Name: Attended versus unattended runtime decision
- Input: "A support analyst wants full unattended automation, but exceptions still require human judgment before submission."
- Expected behavior: recommend attended or hybrid operation with explicit human checkpoints instead of over-automating judgment calls.
- Expected output: runtime-decision-memo with rationale and control points.
- Risk level: medium

### Scenario 3

- Name: Selector drift on dynamic legacy UI
- Input: "A monthly vendor patch changed window titles and button labels, causing the bot to miss elements."
- Expected behavior: recommend selector hardening, fallback strategy, timing controls, and validation steps tied to platform capabilities.
- Expected output: selector-hardening-plan with rollback-safe rollout order.
- Risk level: high

### Scenario 4

- Name: Unsafe credential handling in unattended bot
- Input: "The bot stores application credentials in a local config file and rotates them manually."
- Expected behavior: reject unsafe storage, recommend credential vault or asset usage, and define a safe migration path.
- Expected output: credential-remediation-brief with immediate and follow-on actions.
- Risk level: high

### Scenario 5

- Name: Queue and retry design for partial failures
- Input: "A queue-based invoice bot creates duplicate submissions whenever a popup appears after the ERP step succeeds."
- Expected behavior: define idempotent work-item handling, retries, exception buckets, and human rework checkpoints.
- Expected output: queue-control-design with duplicate-prevention steps.
- Risk level: high

### Scenario 6

- Name: SAP GUI scripting security constraint handling
- Input: "The team wants to turn on SAP GUI scripting for every user to get the bot working faster."
- Expected behavior: use SAP guidance to recommend bounded enablement, least-privilege controls, and escalation for unsupported assumptions.
- Expected output: legacy-surface-risk-note with security controls and approval gates.
- Risk level: high

### Scenario 7

- Name: Missing UI element failure triage
- Input: "Logs show repeated 'failed to get UI element' errors after a remote desktop image change."
- Expected behavior: diagnose likely causes, state confidence limits, and produce a safe triage sequence without pretending certainty.
- Expected output: failure-triage-runbook with evidence requests and containment steps.
- Risk level: high

### Scenario 8

- Name: Migration-risk prioritization for bot replacement
- Input: "A brittle screen-scraping bot overlaps with a planned API integration that will not ship for six months."
- Expected behavior: prioritize whether to harden temporarily, reduce scope, or retire the bot, and route API replacement work to the adjacent specialist.
- Expected output: migration-risk-memo with short-term and long-term recommendations.
- Risk level: medium

### Scenario 9

- Name: Out-of-scope low-code workflow build request
- Input: "Build an approval app, forms, cloud workflow, and the bot in one package."
- Expected behavior: reject the low-code workflow delivery work and keep only the narrow RPA lane.
- Expected output: boundary-refusal-note with routing guidance.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope application rewrite request
- Input: "Replace the legacy app with a custom web app and ship the new code instead of the bot."
- Expected behavior: reject greenfield or rewrite engineering work and hand it to modernization or software-engineering specialists.
- Expected output: boundary-refusal-note with explicit handoff.
- Risk level: medium

### Scenario 11

- Name: Low-confidence escalation with missing runtime evidence
- Input: "Give a final bot architecture recommendation, but no screenshots, selector samples, runtime model, or exception logs are available."
- Expected behavior: refuse to guess, request the missing artifacts, and record a low-confidence escalation path.
- Expected output: clarification-and-escalation-note.
- Risk level: high

### Scenario 12

- Name: Shared meta-agent fallback during release refresh
- Input: "Source-policy and evaluation-normalization meta-agents are stale while the package is being refreshed."
- Expected behavior: continue with the specialist-owned baseline, record the deferred normalization, and avoid widening release claims.
- Expected output: fallback-decision-record.
- Risk level: medium
