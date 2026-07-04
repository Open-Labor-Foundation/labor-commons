# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit housing development reporting boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, source-precedence rules, and jurisdiction-aware caveats.
- `evaluation/functionality-map.json` covering shared + analytics-reporting-and-disclosure + cross-industry artifact-awareness abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, program, business unit, project type, funding source, development phase, reporting audience, report cadence, and external-vs-internal publication context before the lane acts.
- Tenant supplies its metric dictionary, source-of-truth precedence, report calendars, disclosure approval rules, and owner maps for housing compliance, housing finance, real estate development, construction draw, environmental review, legal, tax, appraisal, lender, investor, and board escalation.
- IDIS, CAPER, eCon Planning Suite, DRGR when applicable, HEROS or environmental review repository, development pipeline, project management, construction, draw, accounting, HFA, lender, investor, property management, document control, and BI systems are retrievable at runtime.
- Tenant provides stricter program, funder, lender, investor, HFA, local jurisdiction, board, and publication rules whenever they narrow the public baseline.

### Required Retrieval Dependencies

- Project identifier, activity identifier, site location, program, funding source, business unit, jurisdiction, reporting audience, cadence, and reporting period.
- IDIS reports, CAPER sections, Consolidated Plan and Annual Action Plan references, CDBG activity files, HOME project records, beneficiary or national-objective support, and accomplishment records.
- Environmental review record, HEROS or responsible-entity status, request for release of funds, authority-to-use-grant-funds status, and choice-limiting action caveats.
- Development pipeline tracker, site control, acquisition or disposition records, entitlement or zoning status, permits, inspection posture, construction milestone records, certificate of occupancy status, punch-list posture, and lease-up or occupancy records.
- Funding commitments, loan or grant agreements, budgets, sources-and-uses, draw packages, draw ledger, general ledger extracts, funder or lender reporting templates, investor reporting templates, and board report requirements.
- HFA portal status, LIHTC placed-in-service signals, Form 8609 or Form 8823 status, affordability-period evidence, rent or income certification summaries, and compliance-owner caveats where applicable.
- Tenant source-precedence rules, publication thresholds, approver signoff status, and escalation owner maps.

### Regulated-Lane Caveats

- Public HUD, eCFR, IRS, ULI, GRESB, and federal award references provide the baseline, but jurisdiction-specific, funder-specific, lender-specific, HFA-specific, investor-specific, and tenant-specific rules may be stricter and must win when they materially change the answer.
- The lane supports reporting, reconciliation, caveat drafting, and submission package preparation; it does not become HUD, the responsible entity, legal counsel, tax advisor, LIHTC compliance authority, fair housing authority, appraiser, lender, investor, board approver, environmental review certifier, or final submitter.
- CPD, HOME, CDBG, environmental review, LIHTC, and benchmark guidance must be treated as context-sensitive. If the tenant cannot supply the governing program, jurisdiction, funding stack, source precedence, and authority sequence, the lane must stop short of case-specific readiness, completion, compliance, or publication claims.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or missing or stale IDIS, CAPER, HOME, CDBG, environmental, funding, draw, permit, construction, lease-up, affordability, or benchmark evidence that would change the outcome.
- Requests for legal interpretation, tax interpretation, LIHTC compliance certification, fair housing determination, environmental review clearance, appraisal conclusion, funder negotiation, lender or investor assurance, board approval, budget approval, draw approval, project approval, or formal submission without configured authority and approver signoff.
- Conflicting public baseline, tenant policy, local jurisdiction, HFA portal, funder agreement, lender covenant, investor definition, or benchmark rule without explicit precedence resolution.
- Unsupported causal, policy, community-impact, displacement-prevention, compliance, affordability, financial-performance, schedule-certainty, or final-submission claims.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported compliance or community-impact claims, improper submission authority, generic real estate reporting, or jurisdiction-blind outputs are detected.
- Preserve all metric-definition summaries, report packages, reconciliation notes, escalation packets, source-precedence decisions, and low-confidence decisions for post-rollback review.
- Re-enable only after source-of-truth retrieval, program and jurisdiction handling, IDIS/CAPER lineage, environmental prerequisite checks, unsupported-claim refusal behavior, and adjacent-authority routing are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this housing development reporting lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, tenant-safe retrieval adapters, source refresh automation, runtime audit logging, and a new PR that records the retained-implementation runtime separately from this spec pack.
