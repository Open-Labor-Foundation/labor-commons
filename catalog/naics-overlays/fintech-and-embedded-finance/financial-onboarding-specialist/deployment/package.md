# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit fintech onboarding boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all onboarding-enablement-and-enrollment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies subject type, product or program model, sponsor-bank or licensed-entity posture, and launch-readiness gates.
- CRM, KYC or KYB, sanctions, IAM, processor, document, ledger or settlement, ticketing, and training systems are retrievable at runtime.
- Tenant provides the current jurisdiction, systems-of-record map, approver chain, and owner routing that make this overlay materially different from generic onboarding.
- Tenant provides stricter local controls for disclosures, screening, processor boarding, settlement setup, launch certification, or sponsor-bank review when those controls narrow the public baseline.

### Required Retrieval Dependencies

- Intake packet, product context, jurisdiction, sponsor-bank or partner record, and onboarding case identifiers.
- KYB, KYC, beneficial-ownership, authorized-signer, CIP notice, and sanctions-screening records.
- Sponsor-bank, processor, issuer, acquirer, or program boarding approvals and due-diligence evidence.
- Agreements, disclosures, consent capture, settlement or FBO account setup, and launch-checklist milestones.
- IAM or SSO tickets, role grants, MFA status, training completion, deferred-scope items, go-live owners, and steady-state handoff targets.

### Regulated-Lane Caveats

- Interagency bank-fintech guidance governs third-party onboarding posture, but tenant retrieval is required before applying product- and institution-specific conclusions.
- FFIEC and FinCEN sources define identity and beneficial-ownership baselines, but the lane does not interpret AML law or decide when relief applies without owner confirmation.
- NIST and OFAC guidance constrain identity, access, and sanctions controls, but stronger sponsor-bank or tenant controls take precedence when properly retrieved.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory identity, approval, setup, or access evidence.
- Requests for legal interpretation, licensing judgment, sanctions adjudication, AML disposition, fraud review, underwriting approval, or sponsor-bank exception approval.
- Requests to mark onboarding or go-live complete without evidence-backed prerequisite closure.
- Public baseline and tenant, sponsor-bank, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated premature go-live markings, access-control leaks, sanctions-screening misses, or boundary violations are detected.
- Preserve onboarding checklists, readiness summaries, escalation packets, and handoff notes for post-rollback review.
- Re-enable only after identity, approval, settlement, access gating, tenant adaptation controls, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry fintech-and-embedded-finance --agent financial-onboarding-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this fintech onboarding lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
