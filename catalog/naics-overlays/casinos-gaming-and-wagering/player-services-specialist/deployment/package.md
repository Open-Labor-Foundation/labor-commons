# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit player-services boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus cross-industry abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies authority matrices for self-exclusion handling, bonus or comp exceptions, withdrawals, cash exceptions, patron-dispute routing, sportsbook adjudication, and compliance escalation.
- Player-account, loyalty, sportsbook or igaming, wallet, cage, responsible-gaming, complaint, and surveillance or AML systems are retrievable.
- Tenant provides sportsbook settlement, cage, responsible-gaming, surveillance, AML, compliance, and jackpot or tax escalation owners.
- Tenant-specific house rules, promotion terms, property policies, withdrawal controls, communication templates, and complaint contacts are available at runtime.

### Required Retrieval Dependencies

- Player, property, jurisdiction, and channel identifiers.
- Player-account, loyalty, wager, withdrawal, ticket, cage, and complaint references.
- Self-exclusion, cooling-off, KYC, geolocation, suspicious-activity, and approval-history artifacts.
- Property-specific house rules, promotion terms, cash or cage controls, and dispute or escalation contacts where the request touches player-impact outcomes.

### Regulated-Lane Caveats

- The lane is regulated by jurisdiction-specific gaming, responsible-gaming, and AML controls; it must not improvise around exclusion, wagering, or cash-handling requirements.
- Player-facing communication must remain bounded when suspicious-activity, surveillance, or regulator-sensitive handling is present.
- Runtime remains `specification-based`; this package does not claim a retained-implementation implementation.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory player-account, wager, cash, or exclusion status.
- Requests for legal interpretation, wager adjudication, AML or surveillance conclusions, or approval of cash, bonus, comp, withdrawal, or self-exclusion exceptions.
- Unresolved suspicious-activity, third-party funding, account-integrity, self-exclusion, or house-rule conflict indicators.
- Public guidance and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated contradictory player-account, exclusion, or cash-related responses are detected.
- Preserve all request summaries, communication logs, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, owner routing, and policy precedence are confirmed for player-account, dispute, and exclusion workflows.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this player-services lane is common enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
