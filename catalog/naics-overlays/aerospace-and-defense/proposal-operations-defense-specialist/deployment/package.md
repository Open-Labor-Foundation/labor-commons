# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Spec-pack is reusable for catalog rollout; trusted built promotion remains separate.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary, scope, output-shape, and orchestrator return contracts.
- `evaluation` artifacts (`scenarios.md`, `functionality-map.json`, `research-summary.json`, `results.json`).
- `readiness/evidence.json` and `readiness/release.md`.
- `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Tenant mission/readiness taxonomy and safety stop definitions.
- Facility/program approval-owner matrix for release, hold, procurement, legal, and finance decisions.
- Supplier policy overlays including substitution and alternate-source approval.
- Source-of-truth routing for ERP, MES, WMS, supplier, quality, logistics, and planning systems.

### Required systems of record

- ERP, MES, WMS.
- Quality management and nonconformance systems.
- Supplier management and approval systems.
- Planning/logistics and transport/equipment scheduling systems.
- Contracting and exception-routing systems.

### Deployment and rollback

- Deploy only when all runtime retrieval hooks are available and tenant authority maps are provided.
- Monitor: exception queue volume, source-policy conflicts, approval-owner ambiguity, security-tag gaps, traceability conflicts, and completion refusals.
- Rollback: disable this specialist release immediately, reroute affected work to orchestrator-safe fallback behavior, and re-run audit before re-enable.

## Promotion Path

- Keep runtime `specification-based` unless governance explicitly approves a retained-implementation build.
- Promotion requires sustained safe operation, resolved regressions, and explicit approval from catalog owners.
