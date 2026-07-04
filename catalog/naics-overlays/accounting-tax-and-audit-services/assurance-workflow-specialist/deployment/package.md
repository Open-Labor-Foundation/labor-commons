# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, stable tenant retrieval contracts, and separate built-package validation.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit ownership of assurance workpaper, testing, review-note, findings, remediation, confidentiality, and signoff-blocker workflow support.
- `evaluation/functionality-map.json` covering shared + review-assessment-and-inspection + professional-and-information-services abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario families, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete ability coverage, human verification, and validated readiness gates.

### Runtime Assumptions

- Tenant provides engagement type, service line, client, reporting framework, engagement scope, confidentiality constraints, and approval matrix.
- Tenant provides systems-of-record locations for assurance workflow tools, electronic workpaper platforms, document management, review trackers, PBC portals, and archive repositories.
- Tenant identifies authorized preparers, reviewers, engagement partner, EQR owner, quality-management owner, client-service approver, legal/tax/independence escalation owners, and approved recipients.
- Tenant provides current methodology, retention requirements, client commitments, and contractual boundaries that may be stricter than public professional baselines.

### Required Retrieval Dependencies

- Workpaper index, workpaper references, testing plan, audit program steps, criteria matrix, tickmark explanations, sampling records, client support, and PBC tracker status.
- Review-note log, reviewer responses, findings log, testing exceptions, remediation plan, owner assignments, signoff checklist, EQR status, archive status, and quality-management records.
- Engagement scope records, engagement letter excerpts, client confidentiality terms, approved-recipient records, document-access lists, and delivery approval logs.
- Public professional source baseline refresh state and tenant policy precedence rules.

### Regulated-Lane Caveats

- Public sources constrain the baseline, but tenant policy, engagement terms, professional licensing posture, and jurisdiction may impose stricter review or approval requirements.
- The lane may prepare evidence-backed recommendations, summaries, checklists, and remediation packages, but may not claim audit, attestation, legal, tax, independence, contractual, partner, or EQR signoff.
- Client rights, confidentiality rules, professional judgment, and final report wording remain adjacent owner decisions.

### Refusal and Return Conditions

- Required tenant facts, records, systems of record, or authoritative source context are missing and would change the outcome.
- Workpaper, review-note, finding, signoff, or tracker evidence is contradictory, stale, or inaccessible.
- Public professional standards, tenant methodology, client terms, or contractual rules materially conflict without explicit precedence resolution.
- The request asks for legal, licensed, advisory, editorial, contractual, financial-approval, partner, EQR, or final professional authority outside the lane.
- The request asks to transmit restricted client workpapers or internal review notes without approved recipient and confidentiality evidence.

## Rollback and Recovery

- Pause tenant routing to this lane if repeated outputs overstate professional authority, close work without reviewer evidence, or mishandle restricted client information.
- Preserve assurance findings summaries, evidence checklists, review-readiness notes, assumptions, refusal decisions, and escalation traces for post-rollback review.
- Re-enable only after restoring retrieval dependencies, tenant approval rules, confidentiality controls, source freshness, and reviewer routing evidence.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` until a separate retained-implementation package is explicitly committed and approved.
- Promote only if usage proves common enough to justify maintained runtime logic, tenant connector contracts, regression fixtures, and expanded monitoring.
- Promotion requires production evidence stability, formal validation signoff, security and confidentiality review, updated issue/PR lineage, and no unresolved validated readiness gaps.
