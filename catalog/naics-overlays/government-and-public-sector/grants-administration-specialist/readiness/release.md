# Release Readiness: Grants administration specialist

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

This spec pack introduces a government-and-public-sector grants administration
overlay focused on records, documentation, deadlines, audit trails, and
authority-safe handoffs. It handles opportunity, application, award setup,
reporting, subrecipient, closeout, retention, and escalation workflows without
claiming award, eligibility, legal, audit, public-records, enforcement, or
financial approval authority.

## Residual Risk

- Program-specific eligibility, appeal, and remedy rules vary by statute,
  agency, NOFO, and award terms.
- Public-records, FOIA, privacy, and retention rules vary by jurisdiction and
  custody model.
- Tenant systems may disagree on official grant lifecycle status.

These risks are managed by required tenant facts, source hierarchy retrieval,
system-of-record owner confirmation, and orchestrator return rules.

## Promotion Rule

The package may be promoted from `specification-based` to a retained implementation only
after a separate implementation is committed, runtime evidence shows common and
stable usage, retrieval connectors and authority maps are configured, and
governance approves the built runtime. This release does not claim trusted built
runtime status.
