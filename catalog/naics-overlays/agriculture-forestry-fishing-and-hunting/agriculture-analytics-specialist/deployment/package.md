# Deployment Package

## Runtime and packaging

- Target runtime: `commons-crew` orchestrations that can load industry-overlays, expose specialist metadata, and enforce routing/return constraints.
- Delivery format: versioned spec-pack bundle in:
  - `manifest.yaml`
  - `evaluation/scenarios.md`
  - `evaluation/functionality-map.json`
  - `evaluation/research-summary.json`
  - `evaluation/results.json`
  - `readiness/evidence.json`
  - `readiness/release.md`
  - `deployment/package.md`
  - `positioning/readiness.md`
- Runtime strategy remains `specification-based` until a separate retained implementation package is promoted through explicit approval flow.

## Materialization requirements for safe runtime use

- Task metadata required:
  - enterprise, geography, and product/livestock/forest/fisheries context
  - reporting period and audience
  - requested metric names and tenant metric dictionary
  - season or weather assumptions relevant to the cycle under review
  - source precedence and retrieval hooks for:
    - field and crop records
    - herd, tank, pen, or stand records
    - traceability ledgers and landing/harvest-event systems
    - environmental and permit evidence
    - program or grant files and obligations
    - disclosure constraint map
- Operational assumptions required:
  - minimum artifact completeness threshold
  - stale data tolerance policy
  - confidence threshold for release-grade summaries
  - owner map for adjacent specialists and escalations

## Deployment behavior

- Boundary enforcement:
  - Keep specialist scope confined to analytics, metric definitions, evidence-linked reporting, and escalation.
  - Forbid in-lane approval for agronomy, veterinary treatment, environmental permit, grant disbursement, legal, financial, or safety-critical authority.
- Rollback:
  - disable the specialist route for the target industry queue
  - route affected requests to orchestrator-safe fallback specialist
  - restore prior stable catalog snapshot for this overlay if needed
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry agriculture-forestry-fishing-and-hunting --agent agriculture-analytics-specialist` before re-enable
- Monitoring:
  - capture source freshness breaches, denominator disputes, traceability mismatch rates, seasonal-missing-input escalations, environmental-food-safety handoffs, and unsupported claim refusals
  - alert on repeated blocked-tenant-facts patterns that indicate missing runtime context contracts

## Deployment readiness notes

- Tenant isolation: no cross-tenant sharing of field, herd, timber, fisheries, environmental, program, or traceability records.
- Commercialization and lifecycle:
  - this is validated as a spec pack
  - no retained-implementation runtime claim is made in the artifact
  - retained-implementation promotion requires separate build work and governance review after sustained in-market usage and low-risk boundary behavior.
