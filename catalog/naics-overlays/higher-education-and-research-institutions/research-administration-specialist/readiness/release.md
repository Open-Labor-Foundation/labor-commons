# Release Readiness: Research administration specialist

## State

- Delivery status: `validated`- Release version: `v0.1.0`
- Validation profile: `standard`
- Issue: [#1420]()

## Readiness Gates

- Source baseline current: passed
- Evaluation threshold: passed, 12 of 12 scenarios
- Functionality coverage: passed, 11 of 11 required abilities
- Human verification: recorded in `readiness/evidence.json`
- Packaging: complete
- Deployment notes: complete
- Commercialization notes: complete

## Release Scope

This release adds a specification-based industry overlay for higher-education research
administration. It owns protocol-aware administrative coordination, evidence
tracking, records completeness, owner routing, due-date tracking, and safe
handoffs for sponsored research, laboratory workflow, consent materials,
participant or learner records, grant files, and study administration records.

It does not claim authority to approve protocols, determine IRB status, validate
consent, approve budgets, decide cost allowability, change official learner
records, make grading or instructional judgments, certify accreditation
findings, issue safety signoff, or provide legal or privacy determinations.

## Human Verification

Reviewed on 2026-04-13 by `commons-keeper`.

Verification covered:

- source authority rationale and refresh metadata,
- required education-and-research source classes,
- research administration workflow stages and artifacts,
- consent, FERPA, Common Rule, sponsor, FCOI, retention, and access boundaries,
- scenario coverage for missing evidence, conflicting records, approval blockers, tenant conflicts, and adjacent authority refusals,
- functionality map coverage for all shared, workflow-phase, and industry-profile abilities.

## Promotion Guidance

This package remains `specification-based`. Promote it to a retained implementation only
through a separate PR after usage proves common enough, retrieval connectors are
stable, tenant authority maps are validated, sponsor and IRB source handling is
tested, and governance approves a built runtime.
