# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed trusted runtime package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit government and public-sector policy administration boundaries, refusal triggers, adjacent-owner routing, required tenant facts, and authoritative source metadata.
- `evaluation/functionality-map.json` covering shared plus records-documentation-and-administration plus government-and-public-sector abilities.
- `evaluation/research-summary.json` with required source classes, workflow stages, artifacts, systems of record, decision boundaries, scenario family mapping, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, functionality coverage, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, agency, program, statute, regulation, policy manual, service population, case type, and authority delegation.
- Tenant supplies public-records, FOIA, privacy, access, retention, disposition, publication, redaction, amendment, and destruction rules where they materially affect the request.
- Tenant supplies eligibility, notice, appeal, hearing, due-process, procurement, grant, control-evidence, remediation, and audit owner matrices.
- Case management, records management, document repository, procurement, permit, public-service, transparency-log, privacy/access, workflow, and audit/control systems are retrievable at runtime.
- Tenant provides source-of-truth precedence and escalation owners for program adjudication, legal, public records, privacy, procurement, audit, agency authority, and records governance.

### Required Retrieval Dependencies

- Jurisdiction, agency, program, statute, policy manual section, authority delegation, and service-population context.
- Application, case, eligibility, permit, license, notice, correspondence, procurement, grant, and public-service decision identifiers.
- Record series, retention class, disposition rule, public-records routing state, FOIA or Privacy Act queue state, and transparency-log references.
- Control obligation, evidence owner, review cadence, exception register, monitoring result, remediation owner, and audit-trail references.
- Systems-of-record links for case management, records management, procurement, permits, document repository, public-service administration, transparency logs, privacy/access, and audit/control tools.

### Refusal and Return Conditions

- Missing tenant facts, stale systems of record, unresolved source precedence, or incomplete official records would change the outcome.
- Requests for legal interpretation, program adjudication, enforcement, procurement award approval, public-records release determination, Privacy Act determination, audit opinion, policy override, financial approval, or regulator-facing signoff.
- Requests to delete, backdate, conceal, destroy, disclose, publish, certify, or alter official records without delegated administrative authority and complete evidence.
- Rights, benefits, eligibility, license, permit, sanction, appeal, hearing, public-service equity, retention, access, procurement, or public obligation depends on statutory interpretation or official authority.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if unsupported record changes, premature eligibility statements, missed public-records or privacy escalations, unresolved procurement-file handling, control-evidence overclaims, or adjudication/enforcement overreach are detected.
- Preserve all record update notes, completeness summaries, administrative status notes, retention/access escalations, control summaries, exception notes, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, authority delegation, public-records and privacy routing, retention and disposition rules, procurement evidence handling, due-process escalation, and control-evidence requirements are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry government-and-public-sector --agent policy-administration-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this public-sector policy administration lane is common, stable, and retrieval dependencies are mature enough to justify a maintained runtime.
- Promotion requires governance review, updated authority-source review, regression validation, readiness evidence update, and a new PR that records the retained-implementation runtime separately from this spec pack.
