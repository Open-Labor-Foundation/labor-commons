# Release Readiness

## Agent

- Name: Financial crimes operations specialist
- Domain: naics-overlays/financial-services
- Release version: v0.1.0- Target delivery: validated

## Readiness Gates

- [x] Financial-crimes operations boundaries are distinct from fraud
  adjudication, AML disposition, underwriting, legal interpretation, sanctions
  clearance, and financial approval authority.
- [x] Required source classes and authority rationale are documented and mapped
  to workflow stages.
- [x] Required tenant facts, systems of record, and evidence dependencies are
  explicitly listed in the manifest and research summary.
- [x] Scenario suite includes normal execution and all required escalation,
  refusal, mismatch, suspicious-activity, and ambiguity-handling cases.
- [x] Evaluation map and results are complete and internally consistent.
- [x] Human verification and functional audit are recorded.
- [x] Deployment, rollback, and commercialization notes are present.
- [x] No retained implementation is claimed.

## Deployment Decision

- Decision: Approved for validated spec-pack release.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - This lane is constrained to evidence-backed financial-crimes operational
    handling of suspicious payment, sanctions, KYC/CIP, customer-impact, and
    reconciliation exceptions.
  - It preserves separate banking and covered-insurance applicability baselines
    rather than flattening them into generic finance logic.
  - `specification-based` remains active until explicit retained-implementation promotion.
