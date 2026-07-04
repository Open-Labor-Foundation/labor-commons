# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable production evidence.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit ownership of customs classification and valuation review support, refusal triggers, and adjacent-lane routing.
- `evaluation/functionality-map.json` covering shared + review-assessment-and-inspection + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, scenario families, and failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete ability coverage and validated readiness gates.

### Runtime Assumptions

- Tenant provides jurisdiction and program context, including whether the work is pre-entry, post-summary correction, reconciliation, protest support, or CF28/CF29 response support.
- Tenant provides approval thresholds for classification changes, related-party value review, prior-disclosure handling, and legal/compliance escalation.
- ACE, broker workpapers, document repositories, ERP/product master, and finance tie-out systems are accessible or retrievable.
- Tenant maintains the owner map for licensed broker signoff, legal/compliance, fraud/AML, transfer-pricing, and entry filing execution.

### Required Retrieval Dependencies

- Entry numbers, importer of record, port, commodity identifiers, country of origin/export, and transaction dates.
- Product literature, specifications, BOMs, and any samples/photos or prior rulings tied to the merchandise.
- Commercial invoices, purchase orders, payment evidence, assists schedules, royalty or license agreements, and related-party fact sets.
- Entry summary, reconciliation, CF28/CF29, protest, and broker communication records.

### Regulated-Lane Caveats

- Public sources constrain the baseline, but tenant policy may impose stricter signoff and escalation requirements.
- The lane may prepare an evidence-backed recommendation but may not claim a binding ruling, legal conclusion, or final customs approval.
- Fraud, TBML, sanctions, admissibility, legal protest strategy, and transfer-pricing ownership remain adjacent specialties.

### Refusal and Return Conditions

- Required tenant facts or systems of record are missing and would change the outcome.
- Public authority, ruling history, and tenant policy materially conflict without explicit precedence resolution.
- The request asks for legal, licensed, fraud, AML, or final approval authority outside the lane.
- Evidence is contradictory or insufficient for product identity, valuation adjustments, or reconciliation tie-out.

## Rollback and Recovery

- Pause tenant routing to this lane if repeated unsupported classification or valuation conclusions are observed.
- Preserve all findings summaries, assumptions, evidence packets, and escalation traces for post-rollback review.
- Re-enable only after restoring retrieval dependencies, tenant approval rules, and authority-source freshness.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` until a separate retained-implementation package is explicitly committed and approved.
- Promote only if this overlay is used frequently enough to justify maintained runtime logic and regression fixtures.
- Promotion requires production evidence stability, formal validation signoff, and updated issue/PR lineage for the built package.
