# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit CPG consumer-insights boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + analytics-reporting-and-disclosure + manufacturing-and-supply-chain abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies metric dictionaries, reporting audiences, source-precedence rules, disclosure constraints, and approval thresholds.
- ERP, MES, WMS, QMS, supplier, planning, inventory, traceability, and logistics records are retrievable at runtime.
- Tenant provides release authority, quality-hold rules, substitution limits, and escalation maps for procurement, supplier quality, and logistics.
- Product-category and jurisdiction context is available whenever the analysis touches regulated food, nutrition, health-related, or other consumer-facing claims that materially narrow the public baseline.

### Required Retrieval Dependencies

- Product family, SKU, GTIN, packaging hierarchy, batch, lot, and supplier identifiers.
- Plant, line, facility, channel, geography, and reporting-period context.
- Inventory status, hold status, release status, nonconformance records, traceability logs, and shipment or delivery confirmations.
- Tenant metric definitions, source refresh timestamps, baseline definitions, tenant overrides, and disclosure review requirements.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory batch, lot, inventory, hold, or release evidence.
- Requests for quality release, supplier approval, engineering disposition, public claim approval, legal interpretation, or financial signoff.
- Unresolved traceability conflict, quality hold, substitution decision, or policy-precedence conflict that materially changes whether the analysis can be trusted.
- Public baseline and tenant policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false certainty, unsupported disclosures, or traceability-bypass recommendations are detected.
- Preserve all analytical packages, reconciliation notes, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, hold and release routing, metric dictionary controls, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this CPG consumer-insights lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
