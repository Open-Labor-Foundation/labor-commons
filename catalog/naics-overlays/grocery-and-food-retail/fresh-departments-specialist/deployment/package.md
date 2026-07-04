# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit fresh-department boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and no retained-implementation claim.
- `evaluation/functionality-map.json` covering shared + execution-processing-and-fulfillment + retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, functionality coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies store format, department scope, service model, production model, pricing, markdown, substitution, refund, service-recovery, food-safety, pull-and-hold, recall, shrink, and loss-prevention policies that narrow the public baseline.
- POS, OMS, CRM, service desk, inventory, production, scale-label, pricing, food-safety, recall, supplier, and loss-prevention records are retrievable at runtime.
- Tenant provides refund authority, price and markdown authority, substitution authority, food-safety release ownership, recall and pull-and-hold ownership, fraud-review routing, and service-recovery thresholds.
- Jurisdiction, product category, department, order channel, payment method, customer type, and local health or weights-and-measures context are available whenever they materially change price, refund, safety, or completion handling.

### Required Retrieval Dependencies

- Store, department, fixture or case, daypart, service window, task, production batch, SKU, PLU, UPC, GTIN, lot, scale-label, tare, random-weight, or shellstock identifiers.
- Department task lists, par sheets, production plans, prep logs, temperature logs, date-marking records, sanitation evidence, closeout photos, cull logs, shrink records, and completion artifacts.
- POS receipts, OMS status, payment state, pickup or delivery state, substitution approval, CRM notes, service tickets, return authorizations, refund requests, and service-recovery records.
- Recall, pull-and-hold, food-safety, illness-complaint, foreign-material, fraud, shrink, and loss-prevention records for affected products or orders.

### Refusal and Return Conditions

- Missing tenant facts, unavailable system-of-record access, or stale or contradictory order, payment, pricing, scale, PLU, lot, temperature, date-marking, recall, pull-and-hold, or completion evidence.
- Requests for price overrides, markdown approvals, refund exceptions, service-recovery approvals, food-safety release, recall clearance, formal corrective-action signoff, fraud adjudication, legal interpretation, or executive approval.
- Unresolved order mismatch, payment mismatch, temperature excursion, date-marking gap, lot-code gap, recall, pull-and-hold notice, food-safety incident, fraud indicator, or policy-precedence conflict that materially changes whether execution can advance.
- Public baseline and tenant, jurisdictional, health-department, or weights-and-measures policy conflict without explicit precedence resolution.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated false completions, unauthorized price or refund recommendations, unsupported food-safety release language, or mishandled recall, hold, illness, foreign-material, or fraud cases are detected.
- Preserve all execution summaries, completion records, pricing-conflict packets, order mismatch notes, food-safety escalation notes, pull-and-hold artifacts, and loss-prevention routing records for post-rollback review.
- Re-enable only after source-of-truth retrieval, price and refund authority routing, food-safety hold handling, recall and pull-and-hold routing, fraud-review controls, and completion-evidence gates are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this fresh-department lane is common, stable, and valuable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, runtime instrumentation review, tenant-safe retrieval wiring, and a new PR that records the retained-implementation runtime separately from this spec pack.
