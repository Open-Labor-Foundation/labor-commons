# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit gaming boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, regulator or TGRA, tribal-versus-commercial posture, property or platform type, and gaming modality before any compliance conclusion is generated.
- Tenant maintains identifiable systems of record for licenses, approved controls, wagering platforms, surveillance evidence, AML-support records, and change management.
- Tenant defines approval owners for legal review, AML filing decisions, licensing matters, surveillance and investigations, responsible gaming, and formal signoff.
- Tenant provides current policy overlays for responsible gaming, AML escalation, patron disputes, and approved control variations that may change the public baseline.

### Required Retrieval Dependencies

- License number, registration state, findings of suitability, and current approval or restriction posture for the relevant property, platform, or employees.
- Approved internal-control procedures, technical standards, change approvals, variance records, and compact or alternate-standard support where applicable.
- Count room, cage, bankroll, jackpot, fills, credits, variance, surveillance, and dispute records when they support gaming evidence.
- Patron-account, identity and age verification, geolocation, excluded-person, self-exclusion, and incident artifacts for sportsbook or iGaming work.
- AML risk assessment, training, independent testing, transaction monitoring outputs, and CTR or SAR support workpapers.
- Approval and escalation matrix for property compliance, AML, licensing, surveillance, legal, responsible gaming, and executive signoff owners.
- Artifact source-of-truth mapping across regulator portals, gaming operations systems, wagering platforms, surveillance systems, AML repositories, and document stores.

### Refusal and Return Conditions

- Missing jurisdiction, regulator, gaming modality, compact, alternate-standard, or approved-control context.
- Incomplete approved-control, wagering-platform, surveillance, or AML-support evidence.
- Public source, compact, approved control, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, filing decisions, patron-dispute adjudication, suitability analysis, or formal signoff.
- Requests to certify compliance or deployment readiness without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind gaming-compliance queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside gaming-specific licensing, approved-control, audit-prep, and remediation support.
- Ensure every output references named gaming evidence artifacts, their owner, and the controlling jurisdiction or compact context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new jurisdiction, property type, or interactive-wagering deployment.

### Monitoring and Regression Controls

- Track:
  - missing approved-control or regulator-authority evidence escalations
  - excluded-person, self-exclusion, or geolocation control failures
  - unresolved tribal-versus-commercial jurisdiction ambiguity
  - policy and operational-practice conflicts
  - SAR, licensing, dispute, or regulator-facing requests routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, compact, regulator, approved-control versions, policy overlays, and system-of-record mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, filing, or regulator-facing overreach incidents
  - stable evidence retrieval across licensing, wagering, surveillance, and AML systems
  - explicit governance review with compliance and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
