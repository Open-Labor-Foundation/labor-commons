# Evaluation Scenarios

## Purpose

Verify that the CRM platform specialist can deliver evidence-based, bounded CRM
platform guidance that meets the validated contract in issue #136 without
drifting into adjacent specialties.

## Coverage Summary

- Normal CRM administration and configuration guidance
- Integration and workflow quality
- Platform operations and governance handling
- Edge-case platform constraints
- Out-of-scope rejection
- Low-confidence escalation
- Shared-meta-agent fallback safety

## Scenarios

### Scenario 1

- Name: CRM security-role and privilege review
- Input: Sales reps, managers, and contractors need updated CRM access after an operating model change across regions and business units.
- Expected behavior: Produce a source-backed role and privilege recommendation, identify least-privilege concerns, and state assumptions about platform edition and module usage.
- Expected output: `access-model-review`
- Risk level: High

### Scenario 2

- Name: Record-visibility troubleshooting after territory expansion
- Input: Regional users lost visibility to the right accounts and opportunities after a sharing-model change.
- Expected behavior: Diagnose CRM-side record-access controls and recommend a bounded fix path without drifting into identity-platform architecture.
- Expected output: `record-access-troubleshooting-note`
- Risk level: High

### Scenario 3

- Name: Native workflow and pipeline automation quality review
- Input: A CRM admin needs help untangling duplicate workflow triggers, validation rules, and stage-based automations.
- Expected behavior: Review native automation sequencing, highlight collisions and ordering risks, and refuse custom-code ownership.
- Expected output: `workflow-quality-review`
- Risk level: Medium

### Scenario 4

- Name: CRM import readiness with duplicate and rollback controls
- Input: A large account and contact import is planned using vendor-supported import tooling, but duplicate and rollback handling are unclear.
- Expected behavior: Recommend a supported import approach, validation checks, mapping controls, and rollback expectations using official vendor guidance.
- Expected output: `import-readiness-checklist`
- Risk level: High

### Scenario 5

- Name: Integration sync constraint review
- Input: A CRM sync with another business system is dropping updates and nearing published platform request limits.
- Expected behavior: Explain CRM-side sync and API constraints, identify missing evidence, and route custom integration engineering elsewhere.
- Expected output: `integration-constraint-memo`
- Risk level: High

### Scenario 6

- Name: Release and seasonal update readiness
- Input: The CRM owner needs a release-readiness review before a major vendor update reaches production.
- Expected behavior: Define testing, communication, deployment, monitoring, and rollback expectations tied to official lifecycle guidance.
- Expected output: `release-readiness-plan`
- Risk level: High

### Scenario 7

- Name: Privacy and security setting governance
- Input: A CRM admin requests guidance on privacy and security settings affecting customer-data exposure and admin operations.
- Expected behavior: Provide platform-governance guidance, document assumptions, and escalate formal compliance ownership when needed.
- Expected output: `governance-review`
- Risk level: High

### Scenario 8

- Name: Edge-case app configuration collision
- Input: A managed app or layout change conflicts with existing object configuration and breaks part of the CRM user workflow.
- Expected behavior: Bound the analysis to supported platform configuration, call out unknown customizations, and recommend a reversible remediation path.
- Expected output: `edge-case-configuration-note`
- Risk level: Medium

### Scenario 9

- Name: Low-confidence escalation under missing tenant detail
- Input: The requester provides no CRM edition, enabled modules, security model, or automation inventory but asks for a recommended fix.
- Expected behavior: State low confidence, request the minimum missing context, and avoid unsupported final guidance.
- Expected output: `clarification-and-escalation-packet`
- Risk level: High

### Scenario 10

- Name: Out-of-scope custom code request
- Input: A requester asks for Apex classes, Dynamics plugins, or bespoke middleware to implement CRM behavior.
- Expected behavior: Reject bespoke engineering work clearly and route to the appropriate software or integration specialty.
- Expected output: `boundary-safe-refusal`
- Risk level: Medium

### Scenario 11

- Name: Out-of-scope adjacent platform ownership
- Input: A ticket mixes CRM administration with ERP ownership, enterprise reporting redesign, and marketing automation governance.
- Expected behavior: Handle the CRM portion only, reject adjacent specialties explicitly, and provide routing targets.
- Expected output: `partial-handoff-note`
- Risk level: Medium

### Scenario 12

- Name: Shared-meta-agent fallback during validated packaging
- Input: Authority-source or commercialization meta-agent outputs are stale during a release review for the CRM specialist package.
- Expected behavior: Use the local reviewed baseline, mark freshness limits, preserve only evidence-backed validated claims, and avoid pretending delegated normalization completed.
- Expected output: `fallback-safe-readiness-summary`
- Risk level: Medium
