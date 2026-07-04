# Deployment Package

## Runtime

- Target runtime: `commons-crew` with retrieval-aware orchestrator routing.
- Deployment strategy: spec-pack artifact bundle with manifest, scenarios, functionality map, research summary, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Runtime posture: `specification-based` until a retained implementation is separately promoted.
- Delivery target: `validated`.

## Required Tenant Configuration

- Release version and source refresh policy.
- Tenant retrieval keys for:
  - transport intake requests
  - referral/care-plan authority records
  - member consent and eligibility artifacts
  - dispatch/triage and route ownership state
  - blocker and closure logs
- Escalation routing targets for:
  - clinical transport safety owners
  - legal/compliance reviewers
  - transportation provider operations
  - care coordination operations
  - finance/authorization policy owners

## Isolation and Adaptation

- Tenant data isolation: trip, health, and care-plan records are tenant-bound; do not share across tenants.
- Knowledge boundary:
  - Shared: this package and public baseline references.
  - Tenant-owned at runtime: facility-specific transportation workflows, contractual rules, and local safety restrictions.
- Allowed adaptation:
  - terminology and role names
  - jurisdiction and tenant policy overlays
  - handoff artifact shapes and retrieval hooks
- Prohibited adaptation:
  - widening into dispatch execution, clinical routing decisions, legal interpretation, or safety-critical trip approval.

## Operations

- Logging requirements:
  - handoff ownership transitions
  - blocker and dependency records
  - refusal/escalation events for missing prerequisite artifacts
  - source refresh checks and conflicting-policy escalations
- Monitoring:
  - stale handoffs or duplicated ownership claims
  - repeated missing prerequisite attempts
  - attempts to force execution authority

## Rollback

- Disable the specialist release in orchestrator.
- Route transportation-coordination traffic to safe fallback orchestrator handling.
- Restore the prior validated spec-pack configuration.
- Re-run local spec-pack validation before re-enabling.

## Deployment Notes

- Suitable as a validated package for elder-care and disability transport coordination when tenant policy is injected at request time.
- Explicitly promote to retained-implementation runtime only when telemetry confirms stable low-confidence handling and boundary-safe escalation at scale.
