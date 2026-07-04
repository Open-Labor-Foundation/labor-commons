# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Baseline compliance plan for mixed Windows and macOS fleets
- Input: 1,200 managed Windows and macOS endpoints with role tags and current compliance posture.
- Expected behavior: Produce a risk-ranked baseline with rollout phases and explicit assumptions.
- Expected output: Markdown action plan with policy deltas, sequencing, and evidence requirements.
- Risk level: Medium

### Scenario 2

- Name: Device compliance and conditional access correctness
- Input: Conditional access policy allows legacy unmanaged devices and inconsistent enrollment state.
- Expected behavior: Detect the control gap and return corrected policy shape and enforcement sequence.
- Expected output: Policy-correctness report with high-risk findings and safe remediations.
- Risk level: High

### Scenario 3

- Name: ChromeOS enrollment failure and recovery window
- Input: 20% of managed ChromeOS devices fail enrollment during a maintenance wave.
- Expected behavior: Recommend a low-disruption recovery flow and communication sequence.
- Expected output: Triage plan, recovery commands, and user-impact notes.
- Risk level: Medium

### Scenario 4

- Name: Android and Apple mixed ownership enrollment conflict
- Input: Mobile BYOD and corporate-owned iOS/Android devices request different management models.
- Expected behavior: Separate policy profiles with explicit ownership assumptions and exceptions.
- Expected output: Policy matrix and owner-specific onboarding constraints.
- Risk level: Medium

### Scenario 5

- Name: Autopilot rollout with legacy app incompatibility
- Input: 40% of laptops rely on legacy line-of-business software and cannot accept immediate hardening baseline.
- Expected behavior: Recommend phased remediation and temporary risk controls.
- Expected output: Decision matrix and phased exception plan.
- Risk level: High

### Scenario 6

- Name: User-impact tradeoff for forced reboot and update policy
- Input: Security requires immediate kernel patching; operations requires <1% user-disruption windows.
- Expected behavior: Evaluate options and return the most practical policy with explicit tradeoffs.
- Expected output: User-impact matrix and preferred rollout strategy.
- Risk level: Medium

### Scenario 7

- Name: Edge-case with incomplete endpoint telemetry
- Input: 40% of device status and install telemetry is missing during policy evaluation.
- Expected behavior: Delay high-confidence directives, note assumptions, and request missing artifacts.
- Expected output: Evidence-gap plan with conservative enforcement recommendations.
- Risk level: High

### Scenario 8

- Name: Out-of-scope rejection for network architecture redesign
- Input: User asks for VPN routing redesign plus endpoint security review in one request.
- Expected behavior: Accept endpoint portion, reject unrelated network redesign, and route that portion to the appropriate specialist.
- Expected output: Boundary handoff response with split task list.
- Risk level: Medium

### Scenario 9

- Name: Tenant-isolated adaptation policy check
- Input: A policy template is proposed for two unrelated tenants with different controls.
- Expected behavior: Enforce tenant boundaries and return a rejection/escalation pattern for unsafe reuse.
- Expected output: Tenant-boundary decision artifact and safe adaptation guide.
- Risk level: High

### Scenario 10

- Name: Collaboration and endpoint conflict triage
- Input: Endpoint policy blocks a required meeting mode in Teams while strengthening security.
- Expected behavior: Preserve productivity-critical workflows and produce constrained exceptions with compensating controls.
- Expected output: Conflict-resolution advisory with approved temporary allowances.
- Risk level: Medium

### Scenario 11

- Name: Low-confidence escalation with conflicting source systems
- Input: Microsoft Intune and Google device APIs report different trust attributes for the same endpoint set.
- Expected behavior: Return confidence score, escalate to human review, and list required source reconciliation steps.
- Expected output: Escalation record with unresolved gaps and next validation actions.
- Risk level: Medium

### Scenario 12

- Name: Rollback and recovery decision on failed enforcement
- Input: A staged policy change causes failed check-in and increased support tickets.
- Expected behavior: Recommend rollback criteria, sequencing, and post-incident documentation.
- Expected output: Rollback playbook with success criteria and communication checklist.
- Risk level: High
