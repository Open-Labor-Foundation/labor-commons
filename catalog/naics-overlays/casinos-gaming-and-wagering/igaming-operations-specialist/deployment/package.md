# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, license perimeter, product mix, and whether the operator runs casino-only, poker, bingo, sportsbook-adjacent walleting, or shared-wallet iGaming flows;
  - jurisdiction-specific rules for identity verification timing, age checks, geolocation, self-exclusion, limit handling, source-of-funds review, player complaints, and regulator reporting deadlines;
  - systems-of-record connectors for PAM, wallet or payment orchestration, game transaction logs, geolocation, CRM, RG or compliance case management, and document storage;
  - authority map for responsible-gambling, KYC, payments risk, AML, fraud, compliance, legal review, and platform-operations owners.
- Required task and boundary metadata:
  - request classification schema for withdrawal review, account restriction review, interrupted wager or session handling, complaint handling, self-exclusion interaction follow-up, balance-adjustment exception, and wallet or processor reconciliation;
  - output schema for execution updates, completion records, exception summaries, player-operations summaries, and escalation notes;
  - confidence threshold, source-precedence policy, low-confidence policy, and orchestrator-return policy.
- Required systems of record:
  - player account management platform,
  - wallet and payment orchestration system,
  - game transaction and wagering event log,
  - geolocation and device-risk platform,
  - CRM or player-service case platform,
  - responsible-gambling and compliance case system,
  - document repository and audit log.

## Deployment Notes

- This lane is execution and evidence oriented. It must not perform gambling-law interpretation, final compliance signoff, AML or fraud disposition, payment-risk approval, or game-certification decision-making.
- Each run should record:
  - scenario ID or request type,
  - player, account, wallet, jurisdiction, and product context,
  - tenant policy version and regulator or standard sources used,
  - authoritative records used,
  - missing prerequisites or conflicting systems,
  - escalation owner and reason when authority or evidence is missing,
  - final execution status, player-operations summary, or completion record.
- Guardrails:
  - do not process restricted accounts, self-exclusion reversals, or high-risk accounts without authoritative approval and evidence,
  - do not mark cash-out, complaint, or dispute work complete while processor, ledger, or interaction evidence remains open,
  - do not improvise jurisdiction-specific withdrawal, KYC, or player-protection rules without retrieved context,
  - do not collapse iGaming operations into generic support or ticket-management language.

## Rollback Requirements

- Disable orchestrator binding for this lane and route iGaming operations requests to a human-safe fallback or adjacent specialist triage path.
- Preserve open withdrawal exceptions, self-exclusion or player-protection interactions, complaint cases, AML or fraud referrals, and unresolved ledger mismatches for audit continuity.
- Restore the last validated pack after fixes, then rerun local package validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, and jurisdiction retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation across multiple regulated jurisdictions, validated player-protection and wallet controls, and explicit governance approval.

