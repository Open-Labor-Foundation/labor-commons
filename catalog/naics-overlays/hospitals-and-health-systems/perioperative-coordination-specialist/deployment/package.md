# Deployment Package

## Target Runtime

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- retained implementation: not included
- Intended consumer: `commons-crew` or another orchestrator that can materialize a specialist from a validated spec pack with retrieval, tenant policy, RACI, PHI, and boundary metadata.

## Deployment Notes

Deploy this package as a catalog spec for hospitals-and-health-systems perioperative coordination. The runtime should invoke it only for coordination, handoff, routing, blocker, and closure-confirmation work involving perioperative workflows such as pre-admission testing, OR scheduling, anesthesia readiness, consent and H&P status, implant or equipment readiness, sterile processing, PACU or bed handoffs, authorization dependencies, and post-op documentation routing.

Runtime must provide:

- task metadata identifying tenant, facility, jurisdiction, service line, procedure setting, service date, patient or encounter identifiers, requested handoff, prior owner, candidate next owner, urgency, and destination-owner acceptance criteria
- boundary metadata for clinical, anesthesia, payer, privacy, utilization management, coding, revenue cycle, sterile processing, supply chain, bed, discharge, legal, staffing, safety, and final approval owners
- retrieval bindings for EHR, OR schedule, perioperative information system, anesthesia system, patient access, payer portal, authorization, utilization review, sterile processing, implant, supply chain, blood bank, PACU, bed, discharge, charge capture, coding, revenue, privacy, and audit systems
- tenant source hierarchy, RACI, escalation matrix, Universal Protocol implementation, cancellation or add-on policy, closure criteria, and minimum-necessary PHI handling rules
- refusal and orchestrator return hooks when records, policies, source systems, or authority owners conflict or are missing

## Safe Materialization Rules

- Materialize only recommendation-free coordination outputs: handoff summary, dependency tracker, blocker log, routing confirmation note, handoff status summary, blocked-dependency escalation note, or closure confirmation.
- Do not materialize actions that approve, cancel, prioritize, clear, perform, code, bill, or change a surgical case.
- Do not materialize PHI-rich exports unless tenant privacy controls, recipient scope, and minimum-necessary handling are provided.
- Do not infer clinical, anesthesia, payer, privacy, coding, financial, legal, staffing, safety-critical, or final operational authority from the fact that the work appears in a perioperative queue.

## Rollback

If validation, tenant review, or runtime monitoring shows over-authoritative behavior, PHI handling risk, unsupported payer interpretation, poor owner routing, missing closure proof, or generic coordination behavior:

1. Disable routing to this package in the catalog or orchestrator registry.
2. Fall back to generic orchestrator return with no patient-specific guidance beyond missing-fact collection.
3. Route active work to human perioperative operations, clinical, anesthesia, patient access, utilization management, privacy, coding, revenue cycle, or compliance owners as applicable.
4. Re-run `node infra/scripts/audit-spec-pack.mjs --industry hospitals-and-health-systems --agent perioperative-coordination-specialist` and repository validation before re-enabling.

## Trusted Build Promotion

This overlay should be promoted to a retained implementation only if usage proves common enough and a separate implementation commit adds:

- typed task and output schemas for perioperative handoffs, blockers, routing notes, and closure confirmations
- tenant-bound RACI and system-of-record integrations
- PHI minimization and audit controls
- refusal and orchestrator return tests for clinical, anesthesia, payer, privacy, coding, financial, safety, and approval boundaries
- scenario fixtures covering the 14 validated evaluation scenarios in this package
- implementation review by perioperative operations, privacy, and compliance stakeholders

Until then, the runtime remains `specification-based`.
