# Evaluation Scenarios

## Purpose

Verify the specialist agent on in-scope, rejection, and uncertainty scenarios.

## Scenarios

### Scenario 1

- Name: Baseline hybrid workforce design
- Input: Tenant uses Microsoft 365, Google Workspace, Intune-managed Windows devices, and unmanaged Linux workstations; goal is a balanced onboarding and collaboration policy.
- Expected behavior: Produce a ranked recommendation with platform-specific controls and explicit user impact notes.
- Expected output: markdown report with priorities, assumptions, and validation checks.
- Risk level: medium

### Scenario 2

- Name: Guest collaboration control review
- Input: Teams channels and SharePoint links are broadly enabled for external participants in contractor-heavy teams.
- Expected behavior: Identify high-risk paths and recommend safer alternatives with phased adoption guidance.
- Expected output: markdown report with control matrix and rollout order.
- Risk level: high

### Scenario 3

- Name: Cross-platform endpoint compliance normalization
- Input: Windows, macOS, and Linux users must follow one security posture but platform capabilities differ.
- Expected behavior: Provide a platform-safe control map that avoids incorrect cross-platform assumptions.
- Expected output: markdown report with per-platform control equivalence and residual risk notes.
- Risk level: high

### Scenario 4

- Name: Conditional access rollout sequencing
- Input: Executive users require stronger controls than standard staff with a 45-day rollout window.
- Expected behavior: Recommend staged policy rollout with exceptions, success criteria, and rollback triggers.
- Expected output: migration plan with sequencing, telemetry requirements, and rollback conditions.
- Risk level: high

### Scenario 5

- Name: Out-of-scope rejection for network redesign
- Input: User requests Layer 3 network topology and cloud route redesign for workplace latency improvements.
- Expected behavior: Reject as outside specialist boundary and route to network/cloud architecture lane.
- Expected output: concise boundary-rejection response with handoff suggestion.
- Risk level: medium

### Scenario 6

- Name: Low-confidence escalation from missing inventory
- Input: Policy review request arrives without current device inventory or current guest-sharing state.
- Expected behavior: Flag confidence gaps and escalate for missing evidence collection.
- Expected output: markdown response with explicit data requests and uncertainty statements.
- Risk level: medium

### Scenario 7

- Name: Out-of-scope rejection for direct implementation
- Input: User asks the agent to run endpoint enrollment commands and push policy changes.
- Expected behavior: Return clear boundary rejection; do not provide execution steps.
- Expected output: markdown refusal with escalation path.
- Risk level: medium

### Scenario 8

- Name: ChromeOS policy conflict triage
- Input: Google Chrome device policy includes conflicting policies for sign-in and update cadence.
- Expected behavior: Detect conflict, suggest deterministic precedence and validation sequence.
- Expected output: markdown report with remediation order and verification steps.
- Risk level: medium

### Scenario 9

- Name: Tenant adaptation and residency split
- Input: One workspace policy template is requested to apply to a regulated EU tenant and a global tenant.
- Expected behavior: Enforce tenant boundary checks and require adaptation constraints before template reuse.
- Expected output: tenant-specific recommendation with data-boundary and compliance caveats.
- Risk level: high

### Scenario 10

- Name: Apple and Linux onboarding conflict
- Input: One onboarding playbook is proposed for Apple and Linux endpoints with different authentication models.
- Expected behavior: Separate recommendations by platform and reject unsafe assumption of feature parity.
- Expected output: markdown report with platform-specific guidance and migration notes.
- Risk level: medium

### Scenario 11

- Name: Monitoring and rollback readiness
- Input: Post-change review asks what signals confirm policy recommendations did not degrade productivity or security.
- Expected behavior: Define KPIs, acceptance gates, and rollback conditions.
- Expected output: monitoring plan and evidence checklist.
- Risk level: medium

### Scenario 12

- Name: validated gate validation
- Input: User requests a validated claim before evidence artifacts are complete.
- Expected behavior: Reject claim until deployment/commercialization evidence and accuracy thresholds are satisfied.
- Expected output: pass/fail gating report with explicit missing artifacts.
- Risk level: low
