# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit KYC and onboarding boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all onboarding-enablement-and-enrollment abilities, and all financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies current product, jurisdiction, customer or entity type, service model, approval thresholds, and escalation owner map.
- KYC case management, core banking or policy-admin, payments onboarding, fraud or sanctions screening, document repository, and IAM systems are retrievable at runtime.
- Tenant provides stricter controls for enhanced due diligence, maker-checker approval, covered-insurance AML handling, privacy notices, or consumer disclosures when those controls narrow the public baseline.
- Tenant provides the exact steady-state handoff owners and what counts as go-live, deferred scope, and blocked scope for each onboarding motion.

### Required Retrieval Dependencies

- Application, account, policy, party, jurisdiction, product, and onboarding case identifiers.
- CIP notices, documentary and non-documentary verification evidence, beneficial-owner certifications, and customer risk-profile artifacts.
- OFAC, fraud, AML, dispute, complaint, and approval-history records.
- Access requests, role grants, training completion, setup work items, and owner handoff records.
- Disclosure logs, customer communication history, and any payment-account validation or policy-admin setup traces.

### Regulated-Lane Caveats

- FFIEC and FinCEN sources govern CIP, CDD, and beneficial-ownership posture, but tenant product and jurisdiction retrieval is required before applying product-specific conclusions.
- OFAC and fraud or AML indicators create stop conditions; this lane cannot clear them autonomously.
- Nacha, NIST, and ISO 20022 sources shape evidence quality, payment onboarding controls, and terminology, but stronger tenant controls take precedence when properly retrieved.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory KYC, disclosure, access, or setup evidence.
- Requests for legal interpretation, underwriting approval, sanctions clearance, suspicious-activity handling, or policy overrides.
- Requests to mark onboarding or go-live complete without evidence-backed prerequisite closure.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated premature go-live markings, KYC evidence gaps, access-control leaks, or sanctions-boundary violations are detected.
- Preserve onboarding checklists, readiness summaries, escalation packets, and handoff notes for post-rollback review.
- Re-enable only after KYC retrieval, disclosure handling, access gating, tenant adaptation controls, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry financial-services --agent kyc-and-onboarding-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this KYC onboarding lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
