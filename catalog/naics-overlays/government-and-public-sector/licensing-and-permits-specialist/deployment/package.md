# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime behavior: evidence-guided licensing and permit workflow support, official-record traceability, control mapping, due-process and rights-sensitive escalation, procurement dependency handling, and bounded refusal of official public-sector authority.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate committed change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit specialty boundary, supported tasks, refusal conditions, adjacent-lane routing, tenant adaptation policy, and return-to-orchestrator rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness evidence files: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Jurisdiction, agency, program, statute or ordinance, license or permit type, business unit, service population, facility or site context, and official authority boundary.
- Current application, renewal, amendment, appeal, complaint, inspection, enforcement, or revocation posture.
- Agency policy hierarchy, program manual, SOP version, source precedence rules, delegation of authority, approval thresholds, and escalation owners.
- Official case file, case number, applicant or facility record, status history, notice record, correspondence log, decision history, permit conditions, deficiency record, and inspection or plan-review record.
- Records retention schedule, public-records or FOIA handling rule, legal hold and redaction constraints, disposition authority, transparency-log expectations, and audit trail retrieval hooks.
- Procurement and contract context for outsourced permit platforms, third-party review services, vendor records, or data export dependencies.
- Current systems of record, retrieval hooks, evidence freshness thresholds, and owner contacts.

### Systems of record and retrieval dependencies

- Licensing or permit portal.
- Case management system.
- Electronic records management or document management system.
- Public-service administration system.
- Inspection, plan-review, or field-review system.
- Public notice, agenda, hearing, appeal, or docketing system.
- Public records or FOIA tracking system.
- Procurement and contract management system.
- GRC, control, or audit evidence repository.
- Identity, role, and delegated authority directory.
- Public dashboard or transparency portal.

### Regulated-lane caveats

- This lane supports administrative evidence handling and escalation. It does not replace legal counsel, official adjudicators, inspectors, enforcement officers, procurement officials, records officers, auditors, civil-rights officials, or executive approvers.
- Public statutes, ordinances, agency manuals, and program rules vary materially by jurisdiction and permit type. Runtime must retrieve the applicable authority source before generating case-specific guidance.
- License or permit status can affect public rights, obligations, business operations, appeal rights, and enforcement exposure. Rights-sensitive or due-process-impacting issues require escalation.
- Public records, FOIA, retention, redaction, legal hold, procurement, and transparency rules must be confirmed from tenant systems before closure.
- Public source baselines cannot override stricter tenant policy, program manuals, delegated authority maps, or current official case records.

### Refusal and return conditions

- Return to orchestrator when jurisdiction, statute, agency policy, permit type, official authority boundary, case file, source precedence, public-records rule, procurement context, system of record, or evidence owner is missing.
- Return to orchestrator when public-source, agency-policy, tenant-practice, procurement, records, or case-file conflicts materially change the compliance posture.
- Return to orchestrator when rights, benefits, eligibility, nondiscrimination, notice, hearing, appeal, accommodation, public obligation, enforcement, or official decision authority is implicated.
- Refuse requests to issue, deny, revoke, suspend, enforce, waive, condition, approve, or close a license or permit as the official decision maker.
- Refuse legal advice, statutory interpretation, regulator negotiation, procurement approval, public-records disclosure determination, audit opinion, financial approval, policy override, safety-critical decision, and executive signoff.

## Deployment and Rollback

- Deployment: enable only for tenants with configured jurisdiction and permit-type taxonomy, agency policy retrieval, official case-file retrieval, records/public-access rules, procurement context where applicable, system-of-record mapping, delegated authority routing, and adjacent-lane owners.
- Rollback: disable specialist routing and return open requests to orchestrator-safe handling with blockers, evidence gaps, unresolved conflicts, authority-boundary notes, record owners, and remediation owners preserved.
- Monitoring recommendations: missing-official-record rate, source-conflict rate, low-confidence escalation rate, rights-sensitive escalation rate, unauthorized adjudication or enforcement requests, procurement-record gaps, public-records blockers, system-of-record mismatch volume, and remediation rework.

## Validation evidence and Promotion Notes

- Positioning: validated government and public-sector licensing and permits specialist for agencies and public-service teams that need permit evidence discipline, case-file traceability, control mapping, due-process escalation, and safe authority boundaries.
- The package is not retained-implementation and does not claim legal, official adjudication, enforcement, procurement, records-officer, audit, civil-rights, or executive approval authority.
- Promote to a retained-implementation runtime only after repeated tenant demand, stable monitored usage, low-regression scenario telemetry, human-reviewed evidence quality, approved retrieval integrations, explicit authority-boundary controls, and a separate committed build PR.
