# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit warranty-fulfillment boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies retailer, OEM, dealer, and service-plan-specific routing guides, goodwill authority, fee-waiver limits, and policy-exception approval rules.
- POS, CRM, order, service-desk, warranty-administrator, payment, parts, and recall records are retrievable at runtime.
- Tenant provides product category, jurisdiction, commercial-use rules, service-plan hierarchy, labor and replacement approvals, and safety-owner mapping.
- Tenant provides loss-prevention escalation criteria whenever ID mismatch, receipt fraud, serial tampering, or repeat-abuse patterns materially change the safe workflow.

### Required Retrieval Dependencies

- Order, invoice, receipt, delivery, payment, and customer identifiers.
- Model number, serial number, serial-tag photo, warranty registration, and service-plan records.
- Service-order, dispatch, symptom, diagnosis, technician, parts, appointment, and completion records.
- OEM portal coverage lookups, approval notes, refund or goodwill matrix, and current recall or hazard status.

### Regulated-Lane Caveats

- Federal warranty law provides the public baseline, but state-law warranty, lemon-law, and refund rights can materially change escalation posture and must be tenant or jurisdiction supplied at runtime.
- CPSC safety or recall indicators override normal fulfillment progression and require stop-use or escalation handling rather than routine case closure.
- OEM public workflows illustrate common evidence and stage patterns but cannot replace actual tenant or manufacturer policy for a live case.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, coverage, service, or completion evidence.
- Requests for legal interpretation, pricing or refund override, goodwill approval, fraud adjudication, or safety-recall authority.
- Unresolved source or policy conflict that materially changes whether the case should be repaired, replaced, denied, refunded, or escalated.
- Public baseline and tenant or OEM policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unsupported refund recommendations, unsafe recall handling, or serial-evidence bypasses are detected.
- Preserve all execution summaries, completion records, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, safety-stop routing, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this warranty-fulfillment lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
