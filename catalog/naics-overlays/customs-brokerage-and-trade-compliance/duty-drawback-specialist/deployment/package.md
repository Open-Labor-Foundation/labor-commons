# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, sustained usage, and repeated validation stability.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit drawback workflow boundaries, refusal triggers, and adjacent-owner handoff rules.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + financial-services-and-insurance abilities.
- `evaluation/research-summary.json` with sources, workflow stages, artifact and system definitions, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete coverage and validated readiness gates.

### Runtime Assumptions

- Tenant must supply jurisdiction, business unit, claimant program context, and any tenant-specific routing or approval matrix that changes the public baseline.
- ACE, DIS, broker drawback-system retrieval hooks, finance tie-outs, and document imaging references must be available.
- Tenant must define where refund approval, prior disclosure review, protest posture, sanctions review, and legal interpretation leave the lane.
- Adjacent-owner maps for fraud, AML, legal or compliance, classification, valuation, and servicing operations must exist at runtime.

### Required Retrieval Dependencies

- Drawback packet artifacts, including import, export, destruction, substitution, and claim support records.
- Claimant authority, bond, approval, and party-screening records.
- Duty, tax, fee, refund, liquidation, and reimbursement references.
- ACE or broker-system statuses, rejects, deficiency indicators, DIS attachment references, and closure evidence.

### Regulated-Lane Caveats

- The lane may organize and summarize drawback eligibility evidence but may not issue final legal interpretations or binding drawback determinations.
- The lane may track accelerated-payment, liquidation, and refund states as evidence but may not authorize payment overrides, refund disbursements, or finance postings.
- Fraud, AML, sanctions, and customer or financial-impact issues require escalation rather than autonomous resolution.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or contradictory source evidence materially change the outcome.
- Public-source and tenant-policy conflict lacks explicit precedence resolution.
- The request asks for legal, licensed, policy-override, or financial-approval authority outside the lane.
- Work is asked to complete without evidence of filing disposition, liquidation or closure, refund controls, or approved closure.

## Rollback and Recovery

- Pause tenant routing for the lane if repeated reject loops, missing retrieval hooks, or unresolved policy conflicts degrade output safety.
- Preserve all evidence packets, assumptions, and escalation traces for post-rollback review.
- Re-enable only after retrieval dependencies, policy precedence, and adjacent-owner maps are restored and revalidated.

## retained-implementation Promotion Plan

- Keep runtime `specification-based` until a separate retained-implementation package is explicitly approved and committed.
- Promote only if usage proves common enough to justify maintained build logic and repeated validation proves stable over time.
- Promotion requires governance signoff, updated readiness evidence, and a distinct build package that preserves the same refusal and escalation controls.
