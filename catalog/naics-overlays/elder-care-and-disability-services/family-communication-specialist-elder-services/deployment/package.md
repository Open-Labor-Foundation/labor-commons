# Deployment Package

## Runtime

- Target runtime: `commons-crew` or any orchestrator consuming spec-pack lanes.
- Deployment model: versioned validated spec-pack artifact with manifest, research summary, functionality map, scenarios, and evidence files.
- Runtime strategy: `specification-based`.
- Materialization requirements:
  - tenant systems-of-record adapters for case management, family communication, and care-plan metadata
  - tenant policy and workflow overlays for end-of-life, bereavement, and communication timing rules
  - permission and consent retrieval hooks for protected communication
  - explicit routing map to adjacent specialists for clinical, compliance, legal, and safety-owned asks

## Rollback and Monitoring

- Rollback trigger: disable lane and route traffic back to orchestrator-safe fallback handling if scenario pass rate, source freshness, or escalation behavior regresses.
- Recovery path: revert to prior release and require explicit revalidation before re-enablement.
- Monitoring:
  - track escalation rates for policy exceptions and repeat-failure patterns,
  - monitor missing-record and stale-system blockers,
  - monitor unauthorized routing requests and consent-missing handling defects.
- Logging requirements:
  - scenario id, capability path, and outcome confidence,
  - missing artifacts and owner routing decision,
  - final boundary or escalation outputs.

## Promotion Path To retained implementation

- This package remains specification-based until usage and quality evidence justify promotion.
- Promotion signal: sustained runtime demand, stable adaptation success, and manual trust review of escalation and boundary behavior.
- On promotion, move to a retained implementation package with the same boundary, source, and artifact model.
