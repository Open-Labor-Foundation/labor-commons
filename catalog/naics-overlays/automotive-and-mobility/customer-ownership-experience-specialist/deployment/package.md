# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit ownership-experience boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus manufacturing-and-supply-chain abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies goodwill, reimbursement, refund, mobility-assistance, release-authority, quality-hold, substitution, and escalation rules.
- CRM, DMS, warranty, campaign, ERP, MES, WMS, QMS, supplier, parts-planning, and logistics systems are retrievable at runtime.
- Tenant provides authority matrices for compensation approval, quality release, supplier substitution, engineering review, safety escalation, and executive escalation.
- Jurisdiction, dealer-group, OEM program, fleet contract, and mobility-service context are available whenever they materially change the answer.

### Required Retrieval Dependencies

- VIN, repair-order, appointment, dealer, fleet, and customer-account identifiers.
- Campaign status, warranty state, TSB references, prior-case history, and service notes.
- Parts master, service-part order, backorder ETA, inventory reservation, shipment status, and alternate-part request artifacts.
- ERP, MES, WMS, QMS, supplier-management, and document-control records for lot, serial, batch, suspect stock, quarantine, nonconformance, and release state.
- Goodwill, refund, reimbursement, loaner, and escalation policy extracts.

### Regulated-Lane Caveats

- NHTSA recall, manufacturer-communication, and defect-signal baselines limit what may be said about recall closure, safety disposition, and formal defect handling.
- AIAG PPAP and Service PPAP boundaries limit what may be claimed about supplier approval, service-part approval, and release readiness.
- GS1 and MMOG/LE baselines require traceability and inventory evidence discipline before vehicle-ready or part-installed messages are treated as safe.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory VIN, service, campaign, parts, inventory, traceability, supplier, or release evidence.
- Requests for pricing override, compensation approval, refund approval, legal interpretation, engineering signoff, supplier approval, or safety-release signoff.
- Quality hold, nonconformance, suspect-stock, recall, or supplier-substitution conditions that change whether direct support action is safe.
- Public baseline and tenant, OEM, fleet, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported release promises, traceability misses, supplier-boundary leaks, or unsafe recall guidance are detected.
- Preserve all resolution notes, communication summaries, escalation packets, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, quality-hold routing, supplier-boundary enforcement, and traceability checks are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this ownership-experience lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
