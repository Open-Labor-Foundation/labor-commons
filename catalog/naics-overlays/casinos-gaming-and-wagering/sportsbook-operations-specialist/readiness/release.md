# Release Readiness

## Agent

- Name: Sportsbook operations specialist
- Domain: naics-overlays/casinos-gaming-and-wagering
- Release version: v0.1.0- Target delivery: validated

## Readiness Gates

- [x] Sportsbook-operations boundaries are distinct from trading, compliance, cage, AML, responsible-gaming, surveillance, and legal specialties.
- [x] Required source classes and authority rationale are documented and mapped to sportsbook workflow stages.
- [x] Required tenant facts, systems of record, and evidence dependencies are explicitly listed in the manifest and research summary.
- [x] Scenario suite includes normal sportsbook execution and all required escalation, refusal, mismatch, low-confidence, policy-conflict, and completion-evidence cases.
- [x] Evaluation map and results are complete and internally consistent.
- [x] Human verification and functional audit are recorded.
- [x] Deployment, rollback, and commercialization notes are present.
- [x] No retained implementation is claimed.

## Deployment Decision

- Decision: Approved for validated spec-pack release.
- Reviewer: commons-keeper
- Date: 2026-04-10
- Notes:
  - This lane is constrained to evidence-backed sportsbook ticket, wagering-account, settlement, payout, reconciliation, and player-service exception handling.
  - It preserves distinct sportsbook controls instead of flattening into generic casino operations or adjacent trading and compliance behavior.
  - `specification-based` remains active until explicit retained-implementation promotion.
