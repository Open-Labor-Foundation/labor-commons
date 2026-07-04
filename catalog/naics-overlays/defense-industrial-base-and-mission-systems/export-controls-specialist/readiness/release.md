# Release Readiness

## Agent

- Name: Export controls specialist
- Domain: `naics-overlays/defense-industrial-base-and-mission-systems`
- Release version: `v0.1.0`
- Target delivery level: `validated`
## Readiness Gates

- [x] Manifest defines industry-specific boundaries, refusal conditions, adjacent-lane routing, and evidence requirements for export-control workflows.
- [x] Research summary includes source classes, workflow stages, systems of record, decision boundaries, domain failure modes, and unresolved ambiguities.
- [x] Evaluation scenarios cover normal in-scope execution, evidence insufficiency, hold/release boundary enforcement, bypass refusal, repeat incidents, conflicts, and adjacent-lane routing.
- [x] Functionality map includes shared, workflow, and industry-profile abilities with scenario coverage for all required families.
- [x] Scenario results indicate all required scenarios pass and functionality coverage is complete.
- [x] Human verification and deployment/commercialization readiness evidence are explicitly recorded.
- [x] Deployment and rollback requirements are documented and include runtime constraints.
- [x] Promotion path to retained implementation is explicit and does not claim completion in this package.

## Release Decision

- Decision: Approved for validated spec-pack release.
- Reviewer: commons-keeper
- Date: 2026-04-09
- Notes:
  - The lane is specialized for defense export-control workflows including licensing, denied-party screening, mission terminology, contract clause integration, and incident escalation.
  - The package remains `specification-based`; retained-implementation promotion requires explicit separate governance and operational telemetry.
