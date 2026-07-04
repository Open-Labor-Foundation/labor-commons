# Home Services Compliance Specialist Deployment Package

## Deployment Posture

- Package type: NAICS-derived industry-overlay spec pack
- Runtime strategy: `specification-based`
- Delivery target: `validated`
- retained implementation: not present
- Canonical path: `catalog/naics-overlays/home-services-and-field-consumer-services/home-services-compliance-specialist/`

This package can be used as a validated source specification for
orchestrated home-service healthcare compliance support. It must not be treated
as a retained implementation until a separate promotion PR commits and validates a
maintained implementation.

## Safe Runtime Inputs

`commons-crew` or any materializer must supply or retrieve:

- tenant compliance policies, service model, field-service workflow, policy hierarchy, approval matrix, and compliance owner map
- jurisdiction, state Medicaid or EVV rules, business unit, program, facility type, provider type, payer, plan, and contract context
- patient or member status, service dates, service address, eligibility, authorization, referral, physician or allowed-practitioner order, plan of care, OASIS or quality evidence, consent, and privacy handling facts
- current systems of record and retrieval hooks for EHR/EMR, scheduling, dispatch, field-service visits, payer portals, authorization, referral, billing, claims, remittance, denials, appeals, quality reporting, incidents, complaints, privacy, compliance cases, policies, audits, training, and document repositories
- PHI minimum-necessary, proxy access, role-access, legal-hold, retention, and approved-channel constraints

## Required Runtime Guardrails

- Keep all outputs evidence-backed and tied to named systems of record.
- Use approved retrieval hooks and PHI-minimized references for patient/member evidence.
- Return to orchestrator when source facts are missing, stale, inaccessible, or contradictory.
- Escalate legal, policy-override, privacy, payer interpretation, coding, billing, utilization, revenue cycle, clinical, patient-safety, fraud, regulator-facing, and financial approval questions.
- Refuse requests for legal advice, backdating, record alteration, unsupported documentation closure, formal certification, privacy breach determination, payer final interpretation, clinical judgment, or signoff that a billing, privacy, payer, clinical, safety, or compliance issue is finally resolved.

## Deployment Steps

1. Register the spec pack at the canonical catalog path.
2. Load `manifest.yaml`, `evaluation/research-summary.json`, and `evaluation/functionality-map.json` as the authoritative package definition.
3. Configure the orchestrator to require tenant facts, systems-of-record hooks, payer/provider context, and minimum-necessary PHI controls before materialization.
4. Route requests through the boundary rules in the manifest and functionality map.
5. Use the evaluation suite as the smoke-test baseline for any generated runtime behavior.
6. Keep runtime state as `specification-based` unless a separate trusted build is committed and approved.

## Rollback

Rollback is required if source staleness, validation failure, PHI handling risk,
or boundary regression is detected.

Rollback actions:

- Disable validated exposure for this spec pack in the consuming catalog or router.
- Revert to the previous approved home-service or healthcare compliance pack if one exists.
- Route all home-service compliance requests to orchestrator review while the pack is remediated.
- Preserve PHI-sensitive incident evidence in approved tenant systems only.
- Re-run `npm run audit:spec-pack -- --industry home-services-and-field-consumer-services --agent home-services-compliance-specialist` before restoring validated exposure.

## Monitoring

Track:

- low-confidence or orchestrator-return rate due to missing tenant, payer, service model, clinical, privacy, or record facts
- PHI handling refusals and privacy escalations
- legal, policy-override, payer, billing, coding, clinical, patient-safety, and regulator-facing boundary escalations
- repeat-failure trends for late visit documentation, missing OASIS evidence, missing order or plan-of-care records, and unresolved corrective actions
- source refresh deadlines for CMS, eCFR, OIG, OCR, payer, state, and tenant sources
- scenario or functionality coverage drift after package edits

## Promotion To retained implementation

Promote only through a separate PR when usage proves common enough or runtime
behavior has converged. Promotion requires:

- committed runtime implementation or trusted package metadata
- retained spec pack as source of truth
- regression tests covering all 14 scenario families and all 11 required abilities
- human review from home health compliance, privacy, revenue cycle, and operations owners
- explicit update from `specification-based` to the approved trusted runtime state

Until then, this package remains validated as a spec pack only.
