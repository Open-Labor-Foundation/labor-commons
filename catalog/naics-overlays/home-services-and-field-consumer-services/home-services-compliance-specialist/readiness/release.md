# Home Services Compliance Specialist Release Readiness

## Release

- Agent slug: `home-services-compliance-specialist`
- Package path: `catalog/naics-overlays/home-services-and-field-consumer-services/home-services-compliance-specialist/`
- Version: `v0.1.0`
- Issue: <- Target delivery level: `validated`
- Validation profile: `strict`

## Checklist

- [x] Manifest defines home-service healthcare compliance scope, business outcome, decision surface, adjacent lanes, refusal triggers, and orchestrator return rules.
- [x] Authority sources are public, authoritative, healthcare-specific, and include publisher, authority rationale, refresh interval, decay policy, and review date.
- [x] Research summary satisfies contract version `2026-04-08` and covers public healthcare regulator guidance, public payer or provider operating guidance, and recognized healthcare workflow or measure guidance.
- [x] Scenario suite covers normal execution, missing authorization/referral/eligibility, PHI handling, policy exceptions, missing control evidence, policy/practice conflict, licensed clinical escalation, payer/coding boundaries, patient-safety escalation, repeat failure, low confidence, tenant adaptation, and specification-based deployment gating.
- [x] Functionality map declares and validates all shared abilities, all `service-support-and-resolution` abilities, and all `healthcare-and-care-delivery` abilities.
- [x] Evaluation results record 14/14 passing scenarios, 1.00 pass rate, and complete functionality coverage.
- [x] Readiness evidence records human verification, deployment readiness, commercialization readiness, and no uncovered required abilities.

## Decision

Approved for `validated` spec-pack status.

## Residual Risk

This is a regulated healthcare and home-service lane. Runtime use must retrieve
tenant policy, jurisdiction, state Medicaid or EVV rules, payer, provider type,
service model, patient/member status, service dates, authorization, referral,
order, plan-of-care, privacy, consent, and system-of-record facts before
case-specific outputs. The specialist must escalate when legal, policy-override,
privacy, payer, billing, coding, utilization, clinical, patient-safety, fraud,
financial approval, or regulator-facing authority is required.

## Notes

Package satisfies issue #1427 with source-backed home-service healthcare
compliance scope, complete research and functionality artifacts, strict
evaluation evidence, deployment and rollback notes, commercialization notes, and
