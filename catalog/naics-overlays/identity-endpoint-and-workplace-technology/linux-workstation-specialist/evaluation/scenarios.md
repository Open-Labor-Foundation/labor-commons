# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: Baseline security posture and package alignment
- Input: A Linux fleet of 250 workstations with mixed Ubuntu LTS versions and inconsistent baseline settings.
- Expected behavior: Produce a risk-ordered Linux security baseline with policy assumptions and rollout sequence.
- Expected output: Markdown control-gap report with priorities, dependencies, and user-impact notes.
- Risk level: Medium

### Scenario 2

- Name: Standard Linux patching and update strategy
- Input: A list of Linux CVEs and downtime windows for a design team with 8-hour support shift overlap.
- Expected behavior: Recommend a phased patch plan balancing urgency and user productivity.
- Expected output: Prioritized maintenance plan with fallback and communication steps.
- Risk level: Medium

### Scenario 3

- Name: SSH and sudo control validation
- Input: Proposed SSH hardening and sudo policy that breaks existing build helper workflows.
- Expected behavior: Flag risky controls, add explicit exceptions, and define safe compensating controls.
- Expected output: Policy review note with exception matrix and residual risk language.
- Risk level: High

### Scenario 4

- Name: Identity integration sanity checks
- Input: Request to enforce MFA and conditional access on Linux workstations with mixed identity provider trust levels.
- Expected behavior: Validate identity control correctness, call out assumptions, and show what evidence is missing.
- Expected output: Control mapping with confidence and follow-up evidence checklist.
- Risk level: High

### Scenario 5

- Name: Onboarding and offboarding policy review
- Input: Joiner/mover/leaver process for contractor-heavy engineering environments.
- Expected behavior: Define deterministic onboarding/offboarding tasks and sequencing with explicit ownership.
- Expected output: Operational checklist with acceptance/revocation gates.
- Risk level: Medium

### Scenario 6

- Name: Workplace client readiness trade-off
- Input: Request to harden workstations before a scheduled all-hands meeting requiring stable communication tooling.
- Expected behavior: Provide rollout alternatives and timing tradeoffs across user impact and security lift.
- Expected output: Tradeoff matrix plus staged rollout recommendation.
- Risk level: Medium

### Scenario 7

- Name: Edge case: incomplete patch inventory
- Input: 35% of patch telemetry is missing from endpoint reporting.
- Expected behavior: Delay hard enforcement, request missing data, and provide provisional controls.
- Expected output: Triaged control plan with evidence backlog and escalation notes.
- Risk level: High

### Scenario 8

- Name: Edge case: conflicting control sources
- Input: Enrollment and identity guidance differ between two internal documents and one public source.
- Expected behavior: Compare conflict, prioritize official sources, and recommend temporary governance guardrails.
- Expected output: Conflict-resolution note with priority order and temporary constraints.
- Risk level: High

### Scenario 9

- Name: Out-of-scope rejection for cloud network platform design
- Input: User asks for BGP, SD-WAN, or core network architecture design in a Linux workstation thread.
- Expected behavior: Reject and return a clear boundary explanation with specialist handoff suggestion.
- Expected output: Boundary rejection artifact with routed recipient.
- Risk level: High

### Scenario 10

- Name: Out-of-scope rejection for non-Linux OS administration
- Input: User asks for macOS or Windows workstation rollout playbooks as part of Linux migration.
- Expected behavior: Reject non-Linux scope and route to adjacent OS specialist.
- Expected output: Scope routing note with explicit boundary rationale.
- Risk level: Medium

### Scenario 11

- Name: Tenant-isolated adaptation policy check
- Input: Request proposes template reuse across two customer tenants with differing data residency policies.
- Expected behavior: Reject unsafe template reuse and propose tenant-local adaptation constraints.
- Expected output: Isolation decision record and approved adaptation approach.
- Risk level: High

### Scenario 12

- Name: Low-confidence escalation for ambiguous compliance inputs
- Input: Logs show partial, conflicting compliance indicators for Linux workstation policy enforcement.
- Expected behavior: Return confidence score, request missing artifacts, and escalate safely.
- Expected output: Escalation artifact with evidence gaps, assumptions, and next steps.
- Risk level: Medium
