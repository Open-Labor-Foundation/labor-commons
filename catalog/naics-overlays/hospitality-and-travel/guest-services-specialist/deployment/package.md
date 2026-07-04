# Deployment Package

## Package

- Agent slug: `guest-services-specialist`
- Queue slug: `industry-overlays::hospitality-and-travel::guest-services-specialist`
- Delivery target: `validated`
- Runtime strategy: `specification-based`
- Validation profile: `standard`
- Release version: `v0.1.0`

This is a validated spec pack for healthcare-aware guest services inside the
hospitality-and-travel industry overlay. It does not include a trusted built
runtime. Runtime systems may use the spec for routing, evaluation, and
configuration until a separate trusted build is implemented and promoted.

## Included Artifacts

- `manifest.yaml` with scope, boundaries, sources, validation posture, runtime strategy, and tenant adaptation policy.
- `evaluation/scenarios.md` with 13 must-pass scenarios.
- `evaluation/functionality-map.json` covering shared, service-support-and-resolution, and healthcare-and-care-delivery abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems of record, decision boundaries, scenario-family coverage, and ambiguity handling.
- `evaluation/results.json` with passing validation evidence.
- `readiness/evidence.json` and `readiness/release.md` with human verification and market readiness.
- `positioning/readiness.md` with commercialization positioning.

## Materialization Requirements For `commons-crew`

Required task and boundary metadata:

- Lane slug, workflow phase group, resolved healthcare industry profile, delivery target, runtime strategy, and adjacent specialist registry.
- Request classes: informational, complaint-driven, exception-driven, blocked on missing prerequisites, owner-transfer sensitive, and out of scope.
- Refusal and escalation triggers for PHI, clinical judgment, payer interpretation, authorization approval, coding, claims, denials, appeals, refunds, waivers, compensation, legal advice, and patient-safety authority.

Tenant-supplied or runtime-retrieved assumptions:

- Tenant service model, medical-travel program rules, lodging/transportation policies, interpreter/visitor support rules, service recovery matrix, refund/compensation thresholds, facility and jurisdiction constraints.
- Current systems of record and retrieval hooks for EHR/EMR, practice management, payer portal, eligibility, referral, authorization, utilization review, case management, CRM, contact center, privacy/consent, revenue cycle, claim/denial/appeal, and medical-travel support systems.
- Payer, plan, coverage rules, provider/facility type, service setting, patient/member status, service date, authorization status, referral dependencies, privacy posture, requester authority, and minimum-necessary handling constraints.
- Authority owners and SLAs for clinical review, privacy, patient access, utilization management, payer operations, coding, revenue cycle, denials, appeals, service recovery, lodging, transportation, and compliance.

Regulated-lane caveats:

- The lane is administrative service support, not clinical care, utilization management, payer interpretation, coding, claims adjudication, privacy approval, legal advice, or financial approval.
- PHI handling requires requester verification, role-based access, approved channels, minimum-necessary scope, and auditability.
- Active eligibility does not prove clearance when referral, authorization, documentation, service setting, consent, or tenant policy dependencies remain unresolved.
- Public sources define baseline constraints. Tenant contracts, state rules, facility policies, payer procedures, and supplier agreements can narrow allowed handling.

Conditions requiring refusal or orchestrator return:

- Required tenant facts or source records are missing and would change the outcome.
- PHI disclosure authority, proxy/consent status, requester role, or approved channel is unresolved.
- The request requires diagnosis, treatment, medical necessity, discharge instruction changes, licensed review, payer interpretation, authorization approval, coding, claim correction, appeal strategy, refund/waiver approval, compensation, legal interpretation, or safety-critical signoff.
- Public baseline, tenant policy, payer portal, facility rule, supplier instruction, or jurisdictional requirement conflicts materially.
- The correct adjacent owner cannot be identified.

## Deployment Notes

1. Load the package into the catalog as a specification-based validated industry overlay.
2. Keep runtime disabled for autonomous execution until a retained implementation is committed separately.
3. Configure tenant source hierarchy and adjacent specialist routing before using the spec for live triage.
4. Require audit logging for request classification, evidence references, communication summaries, PHI handling basis, unresolved items, and next owner.
5. Revalidate sources at or before `2026-08-12`, or earlier when CMS, HHS OCR, CAQH CORE, AHRQ, Joint Commission, payer, or tenant policies change.

## Rollback Notes

Rollback is low risk because this package is specification-based. To roll back:

1. Remove the package from catalog publication or mark it unavailable in deployment configuration.
2. Revert routing rules that target `industry-overlays::hospitality-and-travel::guest-services-specialist`.
3. Preserve audit artifacts generated while the package was active.
4. Route affected guest-service requests to existing patient access, care coordination, privacy, payer operations, revenue-cycle, or human supervisor queues until the corrected package is redeployed.

## Trusted Built Promotion

Promote to a retained implementation only after usage justifies implementation and a separate PR adds:

- Runtime connectors and retrieval tests for tenant systems of record.
- PHI minimization and audit controls.
- Configurable authority maps and escalation SLAs.
- Scenario tests matching this spec pack.
- Deployment evidence proving the runtime enforces refusal and orchestrator-return rules.
