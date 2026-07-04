# Healthcare Compliance Specialist Deployment Package

## Deployment Posture

- Package type: NAICS-derived industry-overlay spec pack
- Runtime strategy: `specification-based`
- Delivery target: `validated`
- retained implementation: not present
- Canonical path: `catalog/naics-overlays/healthcare/healthcare-compliance-specialist/`

This package can be used as a validated source specification for
orchestrated healthcare compliance workflows. It must not be treated as a
retained implementation until a separate promotion PR commits and validates a
maintained implementation.

## Safe Runtime Inputs

`commons-crew` or any materializer must supply or retrieve:

- tenant compliance policies, policy hierarchy, approval matrix, service model, and compliance committee cadence
- jurisdiction, business unit, program, product, facility type, provider type, service setting, payer, plan, and contract context
- patient or member status, service dates, encounter or claim identifiers, eligibility, authorization, referral, coverage rule, consent, and privacy handling facts
- current systems of record and retrieval hooks for compliance cases, policies, training, audits, EHR, billing, claims, payer portals, authorization, referral, access logs, privacy cases, QAPI, patient safety, and document repositories
- PHI minimum-necessary, role-access, retention, legal-hold, and approved-channel constraints

## Required Runtime Guardrails

- Keep all outputs evidence-backed and tied to named systems of record.
- Use approved retrieval hooks and PHI-minimized references for patient/member evidence.
- Return to orchestrator when source facts are missing, stale, inaccessible, or contradictory.
- Escalate legal, fraud, privacy, payer interpretation, coding, billing, utilization, clinical, patient-safety, regulator-facing, and executive approval questions.
- Refuse requests for legal advice, privileged investigation conclusions, direct regulator negotiation, formal certification, final payer interpretation, final clinical judgment, or signoff that a billing, privacy, fraud, or compliance issue is legally resolved.

## Deployment Steps

1. Register the spec pack at the canonical catalog path.
2. Load `manifest.yaml`, `evaluation/research-summary.json`, and `evaluation/functionality-map.json` as the authoritative package definition.
3. Configure the orchestrator to require tenant facts, systems-of-record hooks, and minimum-necessary PHI controls before materialization.
4. Route requests through the boundary rules in the manifest and functionality map.
5. Use the evaluation suite as the smoke-test baseline for any generated runtime behavior.
6. Keep runtime state as `specification-based` unless a separate trusted build is committed and approved.

## Rollback

Rollback is required if source staleness, validation failure, PHI handling risk,
or boundary regression is detected.

Rollback actions:

- Disable validated exposure for this spec pack in the consuming catalog or router.
- Revert to the previous approved healthcare compliance pack if one exists.
- Route all healthcare compliance requests to orchestrator review while the pack is remediated.
- Preserve PHI-sensitive incident evidence in approved tenant systems only.
- Re-run `npm run audit:spec-pack -- --industry healthcare --agent healthcare-compliance-specialist` before restoring validated exposure.

## Monitoring

Track:

- low-confidence or orchestrator-return rate due to missing tenant, payer, clinical, privacy, or record facts
- PHI handling refusals and privacy escalations
- legal/fraud/payer/clinical/patient-safety boundary escalations
- source refresh deadlines for OIG, OCR, CMS, payer, state, and tenant sources
- scenario or functionality coverage drift after package edits

## Promotion To retained implementation

Promote only through a separate PR when usage proves common enough or runtime
behavior has converged. Promotion requires:

- committed runtime implementation or trusted package metadata
- retained spec pack as source of truth
- regression tests covering all 14 scenario families and all 12 required abilities
- human review from compliance, privacy, and healthcare operations owners
- explicit update from `specification-based` to the approved trusted runtime state

Until then, this package remains validated as a spec pack only.
