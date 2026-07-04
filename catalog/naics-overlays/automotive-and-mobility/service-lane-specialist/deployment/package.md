# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit service-lane boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and service-lane lifecycle states.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + manufacturing-and-supply-chain abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies OEM- and dealer-specific policy hierarchy, prior-approval rules, claim filing standards, service-loaner policy, and goodwill or concession authority map.
- DMS, OEM warranty and campaign systems, parts inventory, parts-return, quality, and supplier records are retrievable at runtime.
- Tenant provides jurisdiction, business unit, brand, product family, VIN, program, service-lane routing, and escalation ownership context.
- Tenant provides release authority, quality-hold rules, substitution controls, failed-part retention thresholds, and chargeback or audit handling rules.

### Required Retrieval Dependencies

- VIN, mileage, repair-order, technician, customer complaint, op code, and sublet records.
- Warranty, service-contract, campaign, prior-approval, and OEM portal coverage records.
- Parts picks, lot or date-code details, causal-part records, failed-part tags, inventory allocations, and back-order status.
- Quality holds, nonconformance records, supplier alerts, logistics dependencies, and proof-of-correction or recall-completion records.

### Regulated-Lane Caveats

- FTC and NHTSA provide the federal baseline, but state-specific warranty, used-vehicle, and lemon-law overlays can materially change escalation posture and must be tenant or jurisdiction supplied at runtime.
- Open recalls, stop-sale instructions, and quality holds override normal service-lane throughput objectives and require escalation rather than routine completion.
- OEM public workflows illustrate common execution patterns but cannot replace actual tenant or OEM private policy for a live case.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems-of-record access, or stale or contradictory VIN, coverage, campaign, parts, or completion evidence.
- Requests for legal interpretation, recall release, supplier approval, engineering approval, goodwill authorization, or financial override.
- Unresolved source or policy conflict that materially changes whether the vehicle can be repaired, released, held, substituted, or closed.
- Public baseline and tenant or OEM policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, campaign-release errors, unsupported alternate-part recommendations, or traceability bypasses are detected.
- Preserve all execution summaries, completion records, traceability conflict notes, failed-part return evidence, and escalation packages for post-rollback review.
- Re-enable only after source-of-truth retrieval, campaign and hold routing, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this automotive service-lane workflow is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
