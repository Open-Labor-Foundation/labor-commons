# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the specialist agent.

## Scenarios

### Scenario 1

- Name: External sharing hardening for partner collaboration
- Input: "We need to share a project library with outside counsel and one supplier, but current links are too open and ownership of guest access is unclear."
- Expected behavior: Agent recommends bounded external-sharing controls, review steps, and rollback notes without drifting into identity-platform architecture.
- Expected output: Sharing-governance review with assumptions, containment steps, and platform-specific control options.
- Risk level: High

### Scenario 2

- Name: Versioning and draft recovery for contract documents
- Input: "Multiple edits collided in our contract workspace and staff want to know how version history, draft visibility, and restore should be configured."
- Expected behavior: Agent explains supported versioning behavior, highlights recovery implications, and avoids legal-policy signoff.
- Expected output: Versioning configuration note with restore guidance and evidence gaps.
- Risk level: Medium

### Scenario 3

- Name: Retention labels and disposition review
- Input: "Procurement files need seven-year retention with reviewer-controlled disposition, but teams also need daily collaboration access."
- Expected behavior: Agent maps platform retention controls, notes control tradeoffs, and escalates formal retention authority where needed.
- Expected output: Retention-control plan with label, review, and escalation checkpoints.
- Risk level: High

### Scenario 4

- Name: Native document approval workflow quality review
- Input: "We want contract drafts routed for review and approval using built-in platform workflow features instead of a custom app."
- Expected behavior: Agent reviews native workflow fit, sequencing, and rollback constraints while rejecting broader automation engineering ownership.
- Expected output: Workflow-quality review with supported native options and limits.
- Risk level: Medium

### Scenario 5

- Name: Migration or sync constraints near API limits
- Input: "A document migration wave is pushing millions of files and sync jobs are slowing down. What should we check before continuing?"
- Expected behavior: Agent uses authoritative platform limits, recommends batching and monitoring, and avoids custom migration-code instructions.
- Expected output: Migration-constraint memo with platform guardrails and rollback triggers.
- Risk level: High

### Scenario 6

- Name: Oversharing incident triage after folder move
- Input: "After a folder restructure, sensitive documents were visible to a much larger internal audience and maybe a guest link as well."
- Expected behavior: Agent provides bounded containment, access review, logging, and verification steps.
- Expected output: Incident-triage runbook with immediate actions and evidence requests.
- Risk level: High

### Scenario 7

- Name: Metadata and classification cleanup
- Input: "Policy and procedure libraries are hard to search because folders are inconsistent and nobody agrees on document tags."
- Expected behavior: Agent recommends platform-native metadata and classification patterns without turning into an enterprise taxonomy program owner.
- Expected output: Metadata-governance note with practical tagging and governance suggestions.
- Risk level: Medium

### Scenario 8

- Name: Release and client support readiness
- Input: "A client update may affect sync behavior and file access for some document users. How should admins prepare and stage rollout?"
- Expected behavior: Agent uses official support and lifecycle guidance to define testing, communications, deployment, and rollback checkpoints.
- Expected output: Release-readiness plan with supportability assumptions.
- Risk level: Medium

### Scenario 9

- Name: Collaboration versus retention edge-case conflict
- Input: "Business wants unrestricted sharing in a workspace that also has strict disposition and retention obligations."
- Expected behavior: Agent states the conflict clearly, recommends a bounded path, and escalates unresolved policy ownership rather than guessing.
- Expected output: Constraint-escalation note with tradeoffs and handoff points.
- Risk level: High

### Scenario 10

- Name: Out-of-scope custom portal and scripting request
- Input: "Build us a React document portal, PowerShell automation, and custom webhook handlers for lifecycle actions."
- Expected behavior: Specialist rejects bespoke engineering work clearly and routes to the proper adjacent specialists.
- Expected output: Boundary-safe refusal with handoff targets.
- Risk level: Low

### Scenario 11

- Name: Low-confidence production change request with missing context
- Input: "Should we delete old versions, relax sharing, and change retention? I don’t know which document platform or license we have."
- Expected behavior: Agent states low confidence, requests minimum missing evidence, and refuses unsupported production guidance.
- Expected output: Low-confidence escalation packet with missing context list and safe next steps.
- Risk level: High

### Scenario 12

- Name: Shared meta-agent fallback during packaging
- Input: "The source-policy and commercialization meta-agents are stale during release review. Can this document-management package still ship?"
- Expected behavior: Agent relies on the local reviewed baseline, marks freshness limits, and avoids unsupported claims.
- Expected output: Fallback-safe readiness summary with boundary-preserving notes.
- Risk level: Medium
