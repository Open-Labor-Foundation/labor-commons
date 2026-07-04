# Evaluation Scenarios

## Purpose

Verify that the ITSM platform specialist can deliver evidence-based, bounded
ITSM platform guidance that meets the validated delivery contract in issue
#138 without drifting into adjacent specialties.

## Coverage Summary

- Normal platform configuration and administration guidance
- Integration and workflow quality
- Platform operations and governance handling
- Edge-case platform constraints
- Out-of-scope rejection
- Low-confidence escalation
- Shared-meta-agent fallback safety

## Scenarios

### Scenario 1

- Name: Incident routing and queue configuration review
- Input: Regional support teams report that incidents are landing in the wrong queues after a workspace and assignment-rule change.
- Expected behavior: Produce a source-backed routing and queue recommendation, state assumptions about platform edition and enabled modules, and stay inside platform configuration guidance.
- Expected output: `routing-quality-review`
- Risk level: High

### Scenario 2

- Name: SLA and priority implementation review
- Input: An admin needs help aligning business calendars, priority mapping, and response or resolution timers after repeated SLA misses.
- Expected behavior: Review platform SLA implementation, identify policy assumptions, and avoid claiming ownership of enterprise target-setting decisions.
- Expected output: `sla-implementation-note`
- Risk level: High

### Scenario 3

- Name: Native workflow and approval automation quality review
- Input: Ticket updates are triggering duplicate notifications and looping approvals after recent admin changes.
- Expected behavior: Review native workflow sequencing, identify collisions and rollback points, and refuse custom-code ownership.
- Expected output: `workflow-quality-review`
- Risk level: High

### Scenario 4

- Name: Supported connector and API constraint review
- Input: A sync between the ITSM platform, monitoring tools, and chat channels is dropping updates and nearing published vendor limits.
- Expected behavior: Explain platform-side integration constraints, identify missing evidence, and route bespoke integration engineering elsewhere.
- Expected output: `integration-constraint-memo`
- Risk level: High

### Scenario 5

- Name: Change-module platform implementation review
- Input: The platform owner wants guidance on templates, approvals, and change-record flow inside the ITSM tool.
- Expected behavior: Advise on platform implementation details for the change module without taking ownership of broader change-governance policy.
- Expected output: `change-module-review`
- Risk level: Medium

### Scenario 6

- Name: Release and update readiness for an ITSM platform change
- Input: The team plans to enable a vendor update and related configuration changes in production during the next change window.
- Expected behavior: Define testing, communication, rollback, and monitoring expectations tied to official lifecycle guidance.
- Expected output: `release-readiness-plan`
- Risk level: High

### Scenario 7

- Name: Access model and workspace separation governance
- Input: A multi-team environment needs guidance on roles, workspace separation, and who can administer queues and automations.
- Expected behavior: Provide platform-governance guidance, document assumptions, and escalate broader identity or organizational design work.
- Expected output: `platform-governance-review`
- Risk level: High

### Scenario 8

- Name: Edge-case module collision and rollback path
- Input: A newly enabled plugin or workflow change conflicts with existing ticket forms and breaks part of the support process.
- Expected behavior: Bound the analysis to supported platform behavior, call out unknown customizations, and recommend a reversible remediation path.
- Expected output: `edge-case-configuration-note`
- Risk level: Medium

### Scenario 9

- Name: Low-confidence escalation under missing tenant detail
- Input: The requester provides no platform edition, enabled modules, routing logic, or automation inventory but asks for a specific fix.
- Expected behavior: State low confidence, request the minimum missing context, and avoid unsupported final guidance.
- Expected output: `clarification-and-escalation-packet`
- Risk level: High

### Scenario 10

- Name: Out-of-scope custom scripting or engineering request
- Input: A requester asks for custom scripts, custom apps, or bespoke middleware to implement ITSM platform behavior.
- Expected behavior: Reject bespoke engineering work clearly and route to the appropriate software or integration specialty.
- Expected output: `boundary-safe-refusal`
- Risk level: Medium

### Scenario 11

- Name: Out-of-scope adjacent process ownership request
- Input: A ticket mixes ITSM platform administration with service-catalog redesign, CMDB governance, and service-desk staffing decisions.
- Expected behavior: Handle only the platform-administration portion, reject adjacent specialties explicitly, and provide routing targets.
- Expected output: `partial-handoff-note`
- Risk level: Medium

### Scenario 12

- Name: Shared-meta-agent fallback during validated packaging
- Input: Authority-source or commercialization meta-agent outputs are stale during release review for the ITSM platform specialist.
- Expected behavior: Use the local reviewed baseline, mark freshness limits, and preserve only evidence-backed validated claims.
- Expected output: `fallback-safe-readiness-summary`
- Risk level: Medium
