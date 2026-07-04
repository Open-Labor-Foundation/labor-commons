# Evaluation Scenarios

## Purpose

Define scenarios to verify the specialist can handle collaboration-platform in-scope
work, policy correctness, user impact, edge failures, out-of-scope routing, and
low-confidence escalation.

## Scenarios

### Scenario 1

- Name: Baseline guest and external access setup for Teams collaboration
- Input: Tenant admins need to allow partner collaboration between two Microsoft 365 orgs without exposing files by default.
- Expected behavior: The specialist distinguishes guest access vs external access, provides a staged configuration order, and flags risk implications and verification checkpoints.
- Expected output: markdown policy package with phased rollout and validation commands.
- Risk level: medium

### Scenario 2

- Name: SharePoint/OneDrive sharing constraint for domain trust
- Input: A tenant needs external sharing enabled but only with approved business domains and no anonymous links.
- Expected behavior: Recommend tenant-level and site-level settings, explain propagation, and provide a domain-limits verification list.
- Expected output: markdown controls matrix with enforcement and exceptions.
- Risk level: high

### Scenario 3

- Name: Multi-platform meeting access control tradeoff
- Input: New policy requests Teams-only convenience while preventing unsupervised Google Meet attendance.
- Expected behavior: Compare controls and propose minimum-common-denominator settings with migration steps and user communication impact.
- Expected output: tradeoff matrix and transition checklist.
- Risk level: high

### Scenario 4

- Name: Google Chat external communication policy review
- Input: Organization wants to restrict external chat, but still allow limited external spaces for selected roles.
- Expected behavior: Return exact external-chat/external-spaces configuration and explicit edition limitations.
- Expected output: settings checklist with guardrails and fallback.
- Risk level: medium

### Scenario 5

- Name: Google Meet host controls and safety posture
- Input: A risk review asks whether waiting rooms, host controls, and guest knock behavior can reduce meeting abuse.
- Expected behavior: Recommend setting combinations and side effects, and map controls to operational runbook.
- Expected output: policy guidance with expected user impact notes.
- Risk level: medium

### Scenario 6

- Name: Trusted-domain sharing policy and error handling
- Input: Google Workspace admin sees external sharing failing for a partner domain after allowlist updates.
- Expected behavior: Diagnose likely causes from trusted-domain controls and provide remediation sequence.
- Expected output: incident-style diagnostic steps with rollback-safe fixes.
- Risk level: medium

### Scenario 7

- Name: Conditional access and collaboration app protection alignment
- Input: Management requires approved apps only on managed or compliant devices.
- Expected behavior: Tie Microsoft Entra conditional access and Intune app protection/compliance signals into a coherent policy recommendation.
- Expected output: access map by user group/device state with escalation conditions.
- Risk level: high

### Scenario 8

- Name: Apple Business Manager and ADE deployment strategy
- Input: Organization adds new managed iOS/macOS devices and needs secure onboarding without user friction.
- Expected behavior: Recommend ADE flow, MDM linkage, and verification points; include user privacy/work-profile impacts.
- Expected output: step-by-step runbook and rollout checkpoints.
- Risk level: medium

### Scenario 9

- Name: Apple Business Manager federation decision
- Input: Team asks whether to enable managed Apple account federation with enterprise IdP.
- Expected behavior: Return decision criteria, required identity preconditions, and reversible rollout plan.
- Expected output: decision memo with rollback path.
- Risk level: medium

### Scenario 10

- Name: Linux endpoint identity integration for collaboration workspace access
- Input: Workplace team requests guidance on joining Ubuntu devices to AD before allowing collaboration software sign-on.
- Expected behavior: Explain integration model choices, tradeoffs, and required evidence/controls before release.
- Expected output: technical assessment with constraints and confidence tags.
- Risk level: low

### Scenario 11

- Name: Out-of-scope request: network/firewall redesign
- Input: User asks the specialist to redesign WAN/VPN topology for collaboration latency and QoS.
- Expected behavior: Explicitly reject as adjacent specialty and reroute to platform/network specialist.
- Expected output: concise boundary-rejection response with handoff destination.
- Risk level: medium

### Scenario 12

- Name: Low-confidence escalation with missing telemetry
- Input: Admin asks for final policy in a tenant with partial settings snapshots and contradictory logs.
- Expected behavior: Return escalation to request missing artifacts; provide required inputs and temporary safe posture.
- Expected output: escalation report with confidence score and non-guessing assumptions.
- Risk level: high

### Scenario 13

- Name: Tenant-specific adaptation and rollback decision
- Input: Two tenants require distinct collaboration policies due to differing legal and residency constraints.
- Expected behavior: Produce tenant isolation, adaptation rules, and rollback plan without cross-tenant policy leakage.
- Expected output: tenant adaptation matrix and rollback sequence.
- Risk level: medium
