# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit product-protection boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies contract forms, protection-plan terms, deductible schedules, BER thresholds, cancellation windows, service-network rules, exception-approval limits, and franchise or carrier differences.
- POS, CRM, claims, contract-administration, service-desk, dispatch, payment, inventory, manufacturer, recall, and fraud systems are retrievable at runtime.
- Tenant provides serial-capture requirements, diagnostic standards, authorized-servicer mappings, recall-routing rules, and escalation-owner mappings.
- Jurisdiction, carrier, administrator, manufacturer, and program context is available whenever public baseline guidance is narrowed by state law, contract wording, or recall posture.

### Required Retrieval Dependencies

- Receipt, order, invoice, customer, contract, and claim identifiers.
- Tender type, refund status, financing references, cancellation records, and promotion or bundle rules.
- Serial number, model, contract version, coverage term, deductible, diagnostic notes, service history, and authorized-servicer details.
- Repair, replacement, dispatch, inventory, BER, recall, and fraud-case references for affected items.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory contract, tender, serial, diagnostic, or completion evidence.
- Requests for pricing override, goodwill compensation, legal interpretation, insurer or manufacturer adjudication, fraud decisioning, or recall or safety signoff.
- Recall, stop-use, or other safety-sensitive conditions that change whether routine protection handling is safe.
- Public baseline and tenant, carrier, manufacturer, or jurisdiction policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false coverage approvals, unsupported deductible waivers, missed fraud holds, or unsafe recall-handling recommendations are detected.
- Preserve all workflow summaries, completion records, evidence maps, and escalation packets for post-rollback review.
- Re-enable only after source-of-truth retrieval, contract-version control, payment-disposition handling, recall routing, and tenant policy precedence are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this product-protection lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, and a new PR that records the retained-implementation runtime separately from this spec pack.
