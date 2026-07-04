# Affordable Housing Compliance Specialist Release Readiness

## Release

- Agent slug: `affordable-housing-compliance-specialist`
- Package path: `catalog/naics-overlays/housing-real-estate-development-and-community-development/affordable-housing-compliance-specialist/`
- Version: `v0.1.0`
- Issue: <- Target delivery level: `validated`
- Validation profile: `strict`

## Checklist

- [x] Manifest defines affordable housing-specific scope, business outcome, decision surface, adjacent lanes, refusal triggers, and orchestrator return rules.
- [x] Authority sources are public, authoritative, affordable-housing-specific, and include publisher, authority rationale, refresh interval, decay policy, and review date.
- [x] Research summary satisfies contract version `2026-04-08` and covers named-industry operating guidance, workflow references tied directly to the lane, and evidence/control standards.
- [x] Scenario suite covers normal execution, missing evidence, HOME conflicts, stale rent/utility evidence, legal/tax/agency refusal, fair housing routing, layered HOME and LIHTC execution, EIV/TRACS handling, investor financial boundary, property standards escalation, low confidence, policy/practice conflict, tenant adaptation, and specification-based deployment gating.
- [x] Functionality map declares and validates all shared abilities, all `compliance-controls-and-governance` abilities, and the `cross-industry` artifact-awareness ability.
- [x] Evaluation results record 14/14 passing scenarios, 1.00 pass rate, and complete functionality coverage.
- [x] Readiness evidence records human verification, deployment readiness, commercialization readiness, and no uncovered required abilities.

## Decision

Approved for `validated` spec-pack status.

## Residual Risk

This is a regulated affordable housing lane. Runtime use must retrieve tenant
policy, jurisdiction, state HFA, participating jurisdiction, program stack,
regulatory agreement, extended use agreement, HOME written agreement, HAP
contract, investor, lender, local covenant, property, unit, household,
certification-date, income limit, rent limit, utility allowance, EIV/TRACS,
tenant-file, inspection, fair housing, and system-of-record facts before
producing case-specific outputs. The specialist must escalate when legal,
tax-credit, fair housing, public agency, investor, lender, financial, property
management, leasing, resident services, maintenance, accessibility,
environmental, inspection, safety, or regulator-facing authority is required.

## Notes

Package satisfies issue #1456 with source-backed affordable housing compliance
scope, complete research and functionality artifacts, strict evaluation
evidence, deployment and rollback notes, commercialization notes, and explicit
