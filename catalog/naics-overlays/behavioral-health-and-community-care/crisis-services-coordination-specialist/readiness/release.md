# Release Readiness

## Agent

- Name: Crisis services coordination specialist
- Domain: Behavioral Health And Community Care
- Release version: v0.1.0

## Readiness Gates

- [x] Specialty boundary is explicit
- [x] Authority sources are current
- [x] Evaluation scenarios are defined and executed
- [x] Evaluation thresholds are met
- [x] Human verification is recorded
- [x] Deployment package is documented
- [x] Positioning and readiness notes are documented
- [x] Runtime is clearly limited to `specification-based` until a trusted build is promoted separately

## Specialist-Owned Versus Delegated

- Specialist-owned: crisis-continuum boundary, ownership-transfer rules,
  blocker handling, confidentiality-aware routing, anti-generic industry
  constraints, functionality coverage, and the scenario pack.
- Delegated at runtime only if later materialized: tenant retrieval for
  jurisdiction rules, local service maps, crisis platform hooks, consent
  posture, and destination-program availability. Those inputs are not guessed by
  the pack.

## Release Decision

- Decision: Approved for validated review
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes: Package satisfies issue #1128 with a narrow behavioral-health crisis
  coordination boundary, documented public authoritative sources, explicit
  rejection of clinical, detention, payer, privacy-override, and transport
  authority, plus complete evaluation, readiness, deployment, and marketing
  package is committed separately.
