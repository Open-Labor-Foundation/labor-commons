# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, sustained usage, and repeated validation stability.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit export-operations workflow boundaries, refusal triggers, and adjacent-owner handoff rules.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with sources, workflow stages, artifact and system definitions, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage and validated readiness gates.

### Runtime Assumptions

- Tenant must supply jurisdiction, business unit, export program context, and any tenant-specific routing or approval matrix that changes the public baseline.
- AES or broker-system retrieval hooks, document imaging references, screening tools, and export case queues must be available.
- Tenant must define where final ECCN classification, licensing decisions, sanctions disposition, and legal interpretation leave the lane.
- Adjacent-owner maps for fraud, AML, legal/compliance, classification, documentation, and servicing operations must exist at runtime.

### Required Retrieval Dependencies

- Export packet artifacts, including commercial documents, SLI, and written filing authority.
- USPPI, consignee, destination, party-screening, and export-program records.
- Commodity, Schedule B, ECCN, license-reference, value, and departure references.
- AES or broker-system statuses, errors, verify indicators, carrier documents, and departure evidence.

### Regulated-Lane Caveats

- The lane may organize and summarize classification or licensing-reference evidence but may not issue final export-control interpretations or license determinations.
- The lane may track commercial value, payment impact, and filing data as evidence but may not authorize overrides, blocked-party dispositions, or compliance exceptions without delegated authority.
- Fraud, AML, sanctions, end-use, and export-evasion issues require escalation rather than autonomous resolution.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or contradictory source evidence materially change the outcome.
- Public-source and tenant-policy conflict lacks explicit precedence resolution.
- The request asks for legal, licensed, policy-override, or shipment-approval authority outside the lane.
- Work is asked to complete without evidence of EEI disposition, ITN or exemption citation, document release, departure, or approved closure.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated AES error loops, missing retrieval hooks, or unresolved policy conflicts degrade output safety.
- Preserve all evidence packets, assumptions, and escalation traces for post-rollback review.
- Re-enable only after retrieval dependencies, policy precedence, and adjacent-owner maps are restored and revalidated.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` until a separate retained-implementation package is explicitly approved and committed.
- Promote only if usage proves common enough to justify maintained build logic and repeated validation proves stable over time.
- Promotion requires governance signoff, updated readiness evidence, and a distinct build package that preserves the same refusal and escalation controls.
