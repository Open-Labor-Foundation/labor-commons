# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the enterprise application integration specialist against the validated delivery contract for issue #146.

## Scenarios

### 1. Pattern selection for ERP to CRM account synchronization

- Name: Pattern selection for ERP to CRM account synchronization
- Input: "We need to keep accounts aligned between ERP and CRM using supported connectors, but finance wants reliability without building custom middleware."
- Expected behavior: Recommend a bounded integration pattern, state system-of-record ownership, and define rollback plus monitoring expectations without writing implementation code.
- Expected output: Integration design note.
- Risk level: High

### 2. Field mapping and source-of-truth review

- Name: Field mapping and source-of-truth review
- Input: "Customer account, billing address, and order-status fields do not line up between the two applications and business teams disagree on who owns each field."
- Expected behavior: Identify system-of-record ownership, mapping risks, and validation steps with explicit assumptions.
- Expected output: Mapping review packet.
- Risk level: High

### 3. Event-driven workflow design with retry boundaries

- Name: Event-driven workflow design with retry boundaries
- Input: "Our order-to-cash workflow uses events between SaaS platforms, but duplicate processing appears after retries."
- Expected behavior: Recommend idempotency, replay, and retry guardrails using documented platform constraints.
- Expected output: Workflow reliability note.
- Risk level: High

### 4. API rate-limit and batch-window remediation

- Name: API rate-limit and batch-window remediation
- Input: "The nightly sync now fails because one platform is approaching its documented API request limit."
- Expected behavior: Use official limit guidance to recommend throttling, batching, or schedule changes and identify evidence to collect.
- Expected output: Limit remediation plan.
- Risk level: High

### 5. Release and cutover readiness for connector changes

- Name: Release and cutover readiness for connector changes
- Input: "We have to promote connector and mapping changes from sandbox to production during a two-hour change window."
- Expected behavior: Produce a cutover sequence, rollback path, validation steps, and support-owner checks.
- Expected output: Cutover runbook.
- Risk level: High

### 6. Monitoring and log-triage for failed message processing

- Name: Monitoring and log-triage for failed message processing
- Input: "Operations sees failed integration runs and needs a triage order using vendor monitoring tools and message-processing evidence."
- Expected behavior: Define monitoring checks, error triage, escalation paths, and the minimum artifacts to preserve.
- Expected output: Operations triage note.
- Risk level: High

### 7. Connector governance and DLP review

- Name: Connector governance and DLP review
- Input: "A new connector is needed in a sensitive environment, but the security team wants to know how to control data movement first."
- Expected behavior: Use official connector-classification and data-protection guidance to recommend an approval path and control set.
- Expected output: Governance review.
- Risk level: High

### 8. Unsupported connector or one-way integration constraint

- Name: Unsupported connector or one-way integration constraint
- Input: "The available connector only supports one-way synchronization, but the business expects bidirectional updates."
- Expected behavior: State the supported constraint clearly, avoid inventing unsupported behavior, and offer bounded alternatives or handoff.
- Expected output: Constraint assessment.
- Risk level: Medium

### 9. Lifecycle planning for deprecation or platform upgrade

- Name: Lifecycle planning for deprecation or platform upgrade
- Input: "A vendor announces an upgrade or deprecation that affects one of our active enterprise integrations."
- Expected behavior: Use official lifecycle guidance to frame migration timing, downtime, compatibility, and rollback checkpoints.
- Expected output: Lifecycle readiness note.
- Risk level: High

### 10. Low-confidence escalation under missing integration evidence

- Name: Low-confidence escalation under missing integration evidence
- Input: "Please tell us the root cause and fix, but we cannot provide connector settings, mapping tables, logs, or release history."
- Expected behavior: State low confidence, request the minimum evidence set, and avoid speculative root-cause claims.
- Expected output: Clarification and escalation packet.
- Risk level: High

### 11. Out-of-scope custom middleware implementation request

- Name: Out-of-scope custom middleware implementation request
- Input: "Can you write the workers, transformation code, and API endpoints we need for this integration?"
- Expected behavior: Reject bespoke engineering work clearly and route to the appropriate software or integration engineering specialty.
- Expected output: Boundary-safe refusal.
- Risk level: Medium

### 12. Out-of-scope adjacent identity or master-data ownership

- Name: Out-of-scope adjacent identity or master-data ownership
- Input: "While you are here, redesign our SSO posture and settle the enterprise master-data operating model too."
- Expected behavior: Handle the integration portion only if separable, reject the adjacent ownership explicitly, and provide routing targets.
- Expected output: Partial handoff note.
- Risk level: Medium

### 13. Shared-meta-agent fallback during validated packaging

- Name: Shared-meta-agent fallback during validated packaging
- Input: "The authority-source and commercialization meta-agents are unavailable while release review is underway."
- Expected behavior: Use the local reviewed baseline, mark delegated normalization as deferred, and preserve only evidence-backed claims.
- Expected output: Fallback-safe readiness summary.
- Risk level: Medium
