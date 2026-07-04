# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution mode).
- Deployment model: versioned spec-pack artifact with manifest, research summary, functionality map, evaluation scenario set, evaluation results, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`.
- Runtime promotion condition: promote to retained implementation only after sustained successful use, tenant-safe retrieval wiring, and explicit approval.

## Required Deployment Inputs

- Release version and target catalog path.
- Tenant configuration for:
  - Medicaid/SSI/DISABLED-safety intake pathways and state identifiers.
  - Eligibility policy retrieval endpoints.
  - Intake and referral source systems.
  - Authorization and prior-auth connectors.
- Privacy and consent policy map for identity and records.
- Adjacent specialist directory and routing permissions.

## Required Systems of Record

- Intake and referral systems.
- Tenant eligibility systems (Medicaid/Social Services/SSI/SSDI connectors as applicable).
- Consent and access-control logs.
- Case orchestration/workflow systems.
- Authorization and scheduling systems.

## Isolation

- Tenant isolation: no cross-tenant sharing of intake packets, medical/functional evidence, consent records, authorization data, or referral bundles.
- Knowledge boundary: public CMS/SSA/HHS baseline remains shared; tenant-specific policy and authorization rules are injected at orchestration runtime.
- Disallowed adaptation: adding downstream clinical, legal, or approval authority into this lane.

## Operations

- Monitoring:
  - Track missing-prerequisite rates, pending escalation frequency, and bypass-access attempts.
  - Alert when sources are stale beyond refresh policy windows.
  - Track wrong-lane requests and recurring source conflicts.
- Logging:
  - Log outcome state (`ACCEPT`, `REJECT`, `PEND`, `ROUTE`), blocking reason, and escalated owner.
  - Log consent checks, privacy flags, and authorization verification steps.
- Rollback:
  - Disable the current specialist artifact.
  - Re-route affected streams to orchestrator-safe fallback handling.
  - Restore prior validated bundle and re-run local package checks before re-enable.

## Validation evidence Notes

- This lane is validated as a packaged specification-based specialist for elder care and disability intake validation.
- Commercial deployment posture is tenant-level entitlement with optional source refresh and policy refresh support.
- Runtime remains `specification-based` until explicit retained implementation promotion.
