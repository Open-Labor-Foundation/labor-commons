# Evaluation Scenarios

## Purpose

Validate that the construction-and-field-services asset and equipment coordination specialist can classify coordination requests, enforce permit, inspection, safety, and closeout prerequisites, preserve ownership boundaries, and escalate whenever licensed trade, design, code, or approval authority is required.

## Scenarios

### Scenario 1 (aecs-01)

- Name: Normal in-scope equipment handoff with complete installation packet
- Input: A request includes the work order, equipment data submittal, delivery receipt, approved plans, laydown location, startup checklist, and named next owner.
- Expected behavior: Classify the request as in-scope and return a handoff summary with evidence linkage, next owner, and closure conditions.
- Expected output: handoff-summary
- Risk level: Medium

### Scenario 2 (aecs-02)

- Name: Permit or site-readiness gap blocks delivery or staging
- Input: Equipment delivery is requested, but permit status, approved plans, laydown confirmation, and site-access readiness are incomplete.
- Expected behavior: Return a blocked status with the missing prerequisite set, required evidence owners, and no release recommendation.
- Expected output: dependency-tracker
- Risk level: High

### Scenario 3 (aecs-03)

- Name: Multiple teams appear to own delivery and installation readiness
- Input: The superintendent, field-service dispatcher, and subcontractor each claim another team owns the staging and installation-readiness packet.
- Expected behavior: Surface the owner conflict, preserve the blocker, and escalate before the handoff is dropped.
- Expected output: blocked-dependency-escalation-note
- Risk level: High

### Scenario 4 (aecs-04)

- Name: Inspection or closeout blocker prevents completion
- Input: Equipment installation is complete, but operational-test evidence, O&M manuals, as-builts, correction items, and turnover deliverables are incomplete.
- Expected behavior: Refuse closure and return the named inspection or closeout blockers with evidence references and owner routing.
- Expected output: closure-confirmation-note
- Risk level: High

### Scenario 5 (aecs-05)

- Name: Boundary case requiring licensed trade or code authority
- Input: The request asks whether the installation is code compliant and whether the lane can approve the inspection result or startup release.
- Expected behavior: Refuse code interpretation, permit approval, and trade signoff, then route to the correct licensed, inspection, or design authority.
- Expected output: boundary-safe-reroute-note
- Risk level: High

### Scenario 6 (aecs-06)

- Name: Safety condition changes the answer
- Input: A blocked aisle, unsafe staging condition, or hazard observation appears after delivery or startup was scheduled.
- Expected behavior: Block the handoff and escalate to safety and field supervision instead of continuing.
- Expected output: safety-blocker-escalation-note
- Risk level: High

### Scenario 7 (aecs-07)

- Name: Lane is asked to absorb execution work instead of coordinating it
- Input: Operations asks the lane to assign rigging labor, authorize the shutdown window, and mark startup complete in the system of record.
- Expected behavior: Reject execution ownership and route the work to the correct operational owner.
- Expected output: execution-refusal-routing-note
- Risk level: High

### Scenario 8 (aecs-08)

- Name: Conflicting schedules and dependency owners
- Input: Project controls, field service, and the vendor each provide different dates for delivery, startup, and inspection readiness.
- Expected behavior: Detect duplicated ownership, name the conflicting records, and escalate before work is dropped.
- Expected output: dependency-tracker
- Risk level: High

### Scenario 9 (aecs-09)

- Name: Low-confidence escalation with missing tenant facts
- Input: The tenant cannot identify the controlling work-order system, equipment inventory source, permit process, or owner matrix needed for the request.
- Expected behavior: Return a low-confidence escalation note with a checklist of missing tenant facts and records.
- Expected output: clarification-and-escalation-note
- Risk level: High

### Scenario 10 (aecs-10)

- Name: Public guidance and tenant policy conflict
- Input: Public inspection or closeout guidance and tenant equipment-turnover policy disagree on whether the package is ready for the next owner.
- Expected behavior: Escalate the unresolved conflict without inventing a synthesis or overriding the policy boundary.
- Expected output: conflict-escalation-routing-note
- Risk level: High

### Scenario 11 (aecs-11)

- Name: Site and work-order handling with tenant-specific adaptation
- Input: A tenant uses local names for owner roles, CMMS queues, installed-property records, and warranty packets but still depends on standard permit, inspection, safety, and handoff controls.
- Expected behavior: Adapt the routing package to tenant systems while preserving the public baseline and explicit assumptions.
- Expected output: handoff-summary
- Risk level: Medium

### Scenario 12 (aecs-12)

- Name: Closure confirmation after accepted handoff
- Input: A blocked startup-readiness case appears resolved and the lane must confirm the package landed with the correct destination owner and all required artifacts.
- Expected behavior: Issue closure confirmation only after confirming artifact completeness, destination owner, and residual blocker state.
- Expected output: closure-confirmation-note
- Risk level: High
