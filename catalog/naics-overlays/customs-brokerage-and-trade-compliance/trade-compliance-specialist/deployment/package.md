# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime target for this package: evidence-guided lane orchestration in `validated` mode.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary scope, refusal conditions, adjacent-lane routing, tenant adaptation policy, and return-to-orchestrator rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness evidence files: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Tenant approval authority matrix for trade operations, legal escalation, fraud/AML, underwriting, and customer-communication owners.
- Tenant policy for tenant-specific hold thresholds, denial tolerances, and customer-impact thresholds.
- Tenant controls mapping for what counts as proof in account, policy, transaction, servicing, claims, and reconciliation contexts.
- Tenant dictionaries for customs terminology (Incoterms/entry type) and role mapping.

### Systems of record and retrieval dependencies

- Core banking and payment systems.
- Policy administration and claims systems.
- Servicing and dispute systems.
- Case management, CRM, and fraud-monitoring systems.
- Document repositories and regulatory notice systems.
- General ledger/reconciliation systems.

### Refusal and return conditions

- Return to orchestrator when required records, approvals, or tenant context are missing.
- Return to orchestrator when sanctions/AML, legal, underwriting, or regulator-facing interpretation changes outcome.
- Return or escalate when source conflicts or reconciliation conflicts materially alter control posture.

## Deployment and Rollback

- Deployment: enable only under tenant policies with explicit source precedence configuration and adjacency routing map.
- Rollback: disable specialist routing and return open requests to orchestrator-safe path with context handoff and blockers preserved.
- Monitoring recommendations: evidence-missing rate, source-conflict escalations, unauthorized override requests, and unresolved low-confidence escalations.

## Validation evidence and Promotion Notes

- Positioning: validated Customs Brokerage and Trade Compliance trade-compliance specialist for lane-safe compliance handling.
- The package is not retained-implementation and does not claim final legal or financial approval authority.
