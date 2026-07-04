# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit franchise onboarding boundaries, refusal triggers, tenant fact requirements, and adjacent-owner routing.
- `evaluation/functionality-map.json` covering all shared abilities, all onboarding-enablement-and-enrollment abilities, and the cross-industry artifact-awareness ability.
- `evaluation/research-summary.json` with authoritative source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` proving complete scenario coverage, validated readiness gates, and human verification.

### Runtime Assumptions

- Tenant supplies brand-specific onboarding stages, approval chains, service model, and opening-readiness gates.
- Franchise CRM, document repository, LMS, IAM, opening-checklist, finance or royalty setup, and helpdesk systems are retrievable at runtime.
- Tenant provides the current jurisdiction, unit or operator context, systems-of-record map, and exact owner routing that makes this overlay materially different from generic onboarding.
- Tenant provides stricter local controls for permits, insurance, financing, territory, or state-registration review when those controls narrow the public baseline.

### Required Retrieval Dependencies

- FDD receipt, franchise agreement, state addenda, award identifiers, and document revision status.
- Training completion, operations-manual acknowledgment, field-trainer signoff, and enablement checklist status.
- IAM or SSO tickets, role grants, MFA status, and access approval records.
- Opening checklist, approved-vendor setup, royalty or ACH setup, and finance-dependency work items.
- Deferred-scope items, go-live owners, escalation contacts, and steady-state handoff targets.

### Regulated-Lane Caveats

- FTC and NASAA sources govern disclosure, receipt, and state-registration posture, but tenant jurisdiction retrieval is required before applying state-specific conclusions.
- SBA references can inform financing-related dependencies, but the lane does not make lender or financing approval decisions.
- NIST guidance constrains identity, access, and training controls, but stronger tenant controls take precedence when properly retrieved.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory disclosure, access, training, or opening evidence.
- Requests for legal interpretation, agreement amendment approval, state registration sufficiency signoff, permit signoff, or financial approval.
- Requests to mark onboarding or go-live complete without evidence-backed prerequisite closure.
- Public baseline and tenant or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated premature go-live markings, access-control leaks, or legal-boundary violations are detected.
- Preserve onboarding checklists, readiness summaries, escalation packets, and handoff notes for post-rollback review.
- Re-enable only after disclosure-evidence retrieval, access gating, tenant adaptation controls, and adjacent-lane routing rules are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry franchise-systems-and-multi-unit-enterprise-support --agent franchise-onboarding-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this franchise onboarding lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a separate PR that records the retained-implementation runtime independently from this spec pack.
