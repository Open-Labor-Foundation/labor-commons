# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise-development support boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies approved FDD versions, seller or broker governance rules, candidate qualification thresholds, territory-hold rules, discovery-day workflows, development-committee thresholds, and communication templates.
- CRM, FDD repository, Item 23 receipt ledger, state filing portals or correspondence, territory systems, broker trackers, and approval workflow systems are retrievable at runtime.
- Tenant provides authority matrices for legal, compliance, territory approval, finance qualification, development committee review, and onboarding handoff.
- Jurisdiction, filing-state status, structure type, brand concept, and current effective filing data are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Candidate identifiers, brand, state or filing jurisdiction, and single-unit or multi-unit structure.
- FDD issuance date, FDD version, Item 23 receipt date, seller identity, broker identity, and final agreement version.
- State registration or exemption status, state effective dates, examiner comments, seller disclosure forms, addenda, and filing-reference links.
- Territory request worksheets, market-availability data, committee packets, qualification checklists, and due-date trackers.
- Questionnaires, acknowledgments, Item 22 exhibits, and approved communication language when prospect-facing evidence is involved.

### Refusal and Return Conditions

- Missing jurisdiction, stale or contradictory FDD evidence, absent Item 23 receipts, unclear seller identity, or unknown filing-state status.
- Requests for legal interpretation, candidate approval, territory commitment, contract negotiation, financial performance claims outside approved Item 19, or exemption analysis.
- Multi-unit, area-development, area-representative, master-franchise, or subfranchise structures that materially change the workflow without legal or compliance confirmation.
- Public baseline and tenant, filing-state, or examiner policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if stale FDDs are being used, receipt tracking is bypassed, unsupported earnings claims are being routed through support, or questionnaire controls are violated.
- Preserve all status summaries, communication summaries, escalation packets, receipt logs, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, filing-state status checks, questionnaire controls, and adjacent-lane routing are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent franchise-development-support-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this franchise-development lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
