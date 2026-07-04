# Deployment Package

## Runtime

- Target runtime: `commons-crew` with industry-overlay routing to this specialist for aerospace analytics, reporting, and disclosure preparation.
- Deployment model: versioned spec-pack artifact with immutable `manifest.yaml`, research, functionality map, scenario set, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Runtime strategy: `specification-based`.
- Target delivery level: `validated`.
- Runtime must not claim built execution authority until a separate retained implementation is explicitly promoted after governance and retrieval validation.

## Required configuration

- release version and package slug
- tenant runtime profile including:
  - industry workflow phase and profile identifiers
  - tenant policy overlays for release, hold, and supplier approval
  - retrieval hooks for ERP, MES, WMS, quality management, supplier management, planning, logistics, and document-control systems
  - owner maps for quality release, supplier quality, engineering, procurement, program management, and legal/security review
- evidence and traceability policy settings:
  - source-precedence and data-freshness thresholds
  - hold/traceability conflict handling policy
  - controlled-information handling and disclosure policy
- escalation channels for:
  - unresolved lot genealogy or inventory traceability disputes
  - active holds/NCR/MRB blockers
  - supplier nonconformance or substitution requests
  - missing prerequisites requiring tenant-specific authority

## Materialization requirements

`commons-crew` needs this package to be materialized with:

- Task metadata: industry overlay slug, specialist slug, workflow phase group, industry profile, target delivery level, runtime strategy, and validation profile.
- Boundary metadata: owned artifacts, allowed outputs, adjacent specialist routing, refusal triggers, and orchestrator return conditions.
- Tenant assumptions: program/facility/product/lots, retrieval owners, service-level intent, release authority, and required source precedence policy.
- Risk posture: whether CUI/controlled technical or supplier records are present and corresponding handling constraints.
- Evidence policy: minimum record set, traceability closure expectations, and required confidence/risk disclosures.

## Deployment constraints and isolation

- No cross-tenant sharing of lot genealogy, lot genealogy corrections, serial genealogy, hold history, source-inspection artifacts, supplier corrective actions, or release documentation.
- Public baselines (FAA, IAQG, DFARS, NASA, GS1, SEC, NIST) are reusable globally.
- Tenant-specific flowdowns, hold matrices, and authority maps remain tenant-provided at request time.
- The specialist must never produce final release, engineering, supplier-qualification, or financial approval statements.

## Operations and monitoring

- Log dispatch context, missing-input blocks, confidence levels, escalation reasons, and owner routing.
- Alert on repeated stale-source conditions, unresolved traceability conflicts, recurring hold-bypass attempts, and unauthorized supplier substitution pressure.
- Capture every boundary-safe refusal with rationale and required handoff artifact list.
- Track whether outputs are in-scope, blocked, escalated, or low-confidence.

## Rollback and rollback notes

- Disable routing for `aerospace-analytics-specialist` in the orchestrator.
- Re-route aerospace analytics requests to safe fallback handling (e.g., orchestrator triage or adjacent lane specialist prompts).
- Restore prior manifest bundle if needed.
- Re-run spec-pack audit before re-enabling routing.

Promotion should occur only after:

- repeated successful usage with stable retrieval wiring
- tenant-approved governance and security review for controlled records
- repeatable regression validation of scenario outcomes and boundary behavior
- explicit human approval to move beyond `specification-based`

## Support owner

- repository owner or designated industry-overlay catalog steward
