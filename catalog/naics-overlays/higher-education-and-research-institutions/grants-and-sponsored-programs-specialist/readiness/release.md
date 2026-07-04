# Release Readiness: Grants and sponsored programs specialist

## State

- Release version: `v0.1.0`
- Delivery status: `validated`- Validation profile: `standard`
- Source baseline reviewed: `2026-04-13`

## Gates

- Source baseline current: passed.
- Evaluation threshold met: passed, 12 of 12 scenarios.
- Functionality coverage complete: passed, 11 of 11 required abilities.
- Human verification recorded: passed.
- Deployment package documented: passed.
- Rollback path defined: passed.
- Commercialization notes present: passed.

## Release Notes

This spec pack introduces a higher education and research institutions overlay
for grants and sponsored programs execution. It tracks proposal routing,
submission evidence, sponsor portal exceptions, award setup, prior approvals,
reporting, subawards, study dependencies, consent and student-record blockers,
and closeout evidence by lifecycle state, owner, deadline, and source record.

The lane is intentionally administrative. It does not claim PI, AOR, sponsor,
IRB, legal, financial, grading, instructional, faculty-review, accreditation, or
research-compliance authority.

## Residual Risk

- Sponsor-specific proposal, reporting, prior-approval, and closeout rules vary by sponsor, opportunity, award terms, and funding mechanism.
- Institutional delegation for AOR submission, PI approvals, cost transfers, effort certification, and financial approvals varies by tenant.
- FERPA, informed consent, IRB, participant-data, accreditation, and assessment-record boundaries can overlap in sponsored-program workflows.
- Tenant systems may disagree on official proposal, submission, report, approval, or closeout state.

These risks are managed by required tenant facts, source hierarchy retrieval,
system-of-record owner confirmation, authority-map checks, privacy and research
compliance escalation, and orchestrator return rules.

## Promotion Rule

The package may be promoted from `specification-based` to a retained implementation only
after a separate implementation is committed, runtime evidence shows common and
stable usage, retrieval connectors and authority maps are configured, scenario
telemetry validates safe refusal and escalation, and governance approves the
built runtime. This release does not claim retained implementation status.
