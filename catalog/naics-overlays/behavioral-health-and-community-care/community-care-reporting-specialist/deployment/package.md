# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit behavioral-health and community-care reporting boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and privacy-aware caveats.
- `evaluation/functionality-map.json` covering shared + analytics-reporting-and-disclosure + cross-industry abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies governing program authority, jurisdiction, reporting audience, publication channel, and reporting period before the lane acts.
- Tenant supplies its metric dictionary, source-of-truth precedence, report cadence, disclosure rules, public-reporting thresholds, and owner maps for clinical, privacy, compliance, legal, grant, payer, and publication escalation.
- Behavioral health EHR, care-management, claims or encounter, incident, grievance, consent, survey, and document systems are retrievable at runtime.
- Tenant provides stricter state, plan, grant, survey, and public-reporting rules whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Program authority, business unit, jurisdiction, reporting cadence, intended audience, and publication or submission path.
- Encounter, claims, authorization, care-plan, discharge, incident, grievance, survey, and consent records tied to the reporting population and period.
- Source-precedence rules across EHR, claims, care-management, incident, survey, and registry systems.
- State template names, portal requirements, QMR or URS or MH-CLD schedules, and required approver or publication checkpoints.
- Protected-record flags, minimum-necessary requirements, Part 2 applicability, and tenant suppression or small-cell thresholds.

### Regulated-Lane Caveats

- Public SAMHSA, CMS, Medicaid.gov, and HHS sources provide the baseline, but state and tenant rules may be stricter and must win when they materially change the answer.
- The lane supports reporting, reconciliation, and disclosure preparation; it does not become the clinician, privacy officer, legal reviewer, grant attestor, regulator, or publication approver.
- Community care is program-authority-sensitive. If the tenant cannot supply whether the work is governed by MHBG or URS, CCBHC, Health Home, HCBS, managed-care, or another reporting regime, the lane must stop short of case-specific submission or disclosure guidance.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing or stale encounters, claims, care-plan, incident, survey, or consent evidence that would change the outcome.
- Requests for clinical interpretation, legal advice, privacy interpretation, regulator attestation, payer adjudication, or final publication approval.
- Protected-record uncertainty, unresolved incident review, unsupported denominator logic, or policy conflicts that materially change the reporting posture.
- Public baseline and tenant or state policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported outcome claims, improper disclosure language, or program-authority-blind outputs are detected.
- Preserve all metric-definition summaries, report packages, reconciliation notes, escalation packets, and low-confidence decisions for post-rollback review.
- Re-enable only after source-of-truth retrieval, program-authority handling, protected-record controls, unsupported-claim refusal behavior, and adjacent-authority routing are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this community-care reporting lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
