# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Enrollment standardization for mixed iOS and Android fleets
- Input: Mixed corporate iOS and Android device inventory with missing serial and enrollment source fields.
- Expected behavior: Produce a phased onboarding and remediation plan with enrollment checks, missing prerequisite guidance, and rollback for failures.
- Expected output: Markdown rollout plan with platform-specific prerequisites and recovery steps.
- Risk level: Medium

### Scenario 2

- Name: Access and control correctness for conditional policies
- Input: Conditional access policies and device-compliance mappings across normal and contractor groups.
- Expected behavior: Identify risky policy gaps, conflicting conditions, and tenant-safe alternative policy combinations.
- Expected output: Policy matrix with risk and remediation recommendations.
- Risk level: High

### Scenario 3

- Name: Lost-device response with user-impact tradeoff
- Input: Alert indicating likely lost phone for a critical engineer containing sensitive business apps.
- Expected behavior: Return options with impact analysis and clear recommendation thresholds for lock/selective wipe/full wipe.
- Expected output: Decision guide with impact/risk comparison and escalation path.
- Risk level: High

### Scenario 4

- Name: BYOD profile conflicts with privacy requirements
- Input: BYOD request combines personal apps with mandatory policy packs and encryption requirements.
- Expected behavior: Separate personal and work contexts where possible and recommend compliant deployment order.
- Expected output: Configuration remediation plan with privacy-safe boundaries.
- Risk level: Medium

### Scenario 5

- Name: Root/jailbreak enforcement edge case
- Input: Intermittent jailbreak/root detection failures across 8% of Android/iOS devices.
- Expected behavior: Avoid irreversible enforcement; request additional evidence and propose safe compensating controls.
- Expected output: Risk guardrail report with confidence callouts and follow-up evidence.
- Risk level: High

### Scenario 6

- Name: App deployment sequencing and rollback
- Input: 5 productivity apps and 3 security apps deployed to three user cohorts.
- Expected behavior: Recommend phased rollout with success criteria and rollback plan for each cohort.
- Expected output: Release sequencing plan with checkpoints and fallback criteria.
- Risk level: Medium

### Scenario 7

- Name: Out-of-scope rejection for network architecture redesign
- Input: Request to redesign WAN routing to solve enrollment and check-in timeouts.
- Expected behavior: Reject scope cleanly and refer to networking specialist with required handoff details.
- Expected output: Boundary rejection with referral notes and minimum accepted evidence.
- Risk level: High

### Scenario 8

- Name: Out-of-scope rejection for app engineering work
- Input: Request to implement offline sync patch in a fleet app.
- Expected behavior: Decline direct software engineering action and provide implementation handoff rules.
- Expected output: Orchestrator referral response with clear reason and next owner.
- Risk level: Medium

### Scenario 9

- Name: Edge-case profile conflict across OS versions
- Input: A policy requires features not supported by current OS baselines.
- Expected behavior: Recommend exception windows, risk acceptance options, and OS upgrade path.
- Expected output: Migration-readiness notes with phased exception removal.
- Risk level: Medium

### Scenario 10

- Name: Low-confidence escalation for incomplete enrollment telemetry
- Input: 25% of check-ins missing and stale last-sync timestamps for compliance enforcement.
- Expected behavior: Escalate due confidence below threshold and request missing telemetry before enforcement.
- Expected output: Escalation request containing confidence score, missing fields, and safe hold-off actions.
- Risk level: High

### Scenario 11

- Name: Cross-tenant adaptation and policy tuning safety
- Input: Request to duplicate MDM profiles from one tenant to another with different legal rules.
- Expected behavior: Reject automatic cross-tenant reuse and require explicit tenant adaptation approval.
- Expected output: Tenant-isolation decision and allowed tuning checklist.
- Risk level: High

### Scenario 12

- Name: Incident read-through for mass non-compliance
- Input: Compliance rollout causes 30% of devices to fail posture checks in one hour.
- Expected behavior: Provide containment and rollback sequence, communication plan, and residual-risk tracking.
- Expected output: Incident runbook for orchestrator execution and follow-up validation.
- Risk level: High
