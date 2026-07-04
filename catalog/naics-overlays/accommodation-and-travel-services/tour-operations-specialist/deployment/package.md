# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, and stable validation history.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit accommodation and travel tour-operations boundaries, refusal triggers, adjacent-owner routing, and tenant fact requirements.
- `evaluation/functionality-map.json` covering shared plus execution-processing-and-fulfillment plus retail-consumer-and-hospitality abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies tour runbooks, departure lifecycle rules, guide credential requirements, transport supplier contracts, venue ticket terms, refund thresholds, substitution rules, safety escalation plans, and guest communication SLAs.
- Tour booking, dispatch, ticketing, CRM, guide management, transport, supplier, payment, incident, and run-of-show systems are retrievable at runtime.
- Tenant provides authority matrices for guest services, pricing/revenue, booking changes, transport, supplier operations, fraud or loss-prevention, safety or compliance, and executive escalation.
- Jurisdiction, public-land permit, venue, supplier, carrier, emergency, and processor rules are available whenever they materially change the answer.

### Required Retrieval Dependencies

- Tour code, departure date and time, route, pickup location, itinerary, capacity, minimum passenger count, and run-of-show version.
- Manifest, departure list, booking references, party sizes, accessibility notes, standby or no-show status, and guest exception log.
- Guide assignment, guide check-in, guide credentials, briefing acknowledgment, and contact status.
- Transport confirmation, vehicle or operator identifier, driver details, pickup windows, route constraints, and passenger-carrier safety context where applicable.
- Ticket allotments, supplier confirmations, vouchers, will-call records, timed-entry admissions, venue scan status, and permit or CUA conditions.
- CRM notes, guest communications, cancellation terms, refund policy, service-recovery thresholds, fraud signals, and payment or chargeback context.
- Closeout records for manifest reconciliation, ticket or admission status, transport completion, guide completion, and unresolved exception disposition.

### Regulated-lane Caveats

- NPS commercial-use authorization rules and equivalent public-land or venue permit rules constrain whether tours, guides, routes, and activity substitutions can proceed.
- FTC fee-disclosure and travel-fraud guidance constrains price, ticket, package, and suspicious payment or refund-reroute handling.
- DOT public charter rules constrain air-inclusive tour cancellations, deposits, price increases, and refund communication.
- FMCSA passenger-carrier guidance constrains transport-readiness handling when bus or motorcoach authorization and safety status cannot be verified.
- PCI SSC payment-security guidance constrains how payment-card data can be handled in dispatch, call-center, or guest-message workflows.
- ISO adventure-tourism safety standards provide a recognized baseline for activity-risk handling but do not replace tenant or jurisdiction-specific safety authority.

### Refusal and Return Conditions

- Missing tenant facts, unavailable systems of record, or stale or contradictory manifest, ticketing, transport, guide, supplier, payment, safety, fraud, or exception evidence.
- Requests for pricing override, refund exception approval, booking change, supplier substitution, legal interpretation, fraud decisioning, permit approval, or safety signoff.
- Unsafe transport, guide credential gap, weather or route hazard, suspicious identity, duplicate voucher, stolen ticket, or payment-data-handling condition that changes whether execution is safe.
- Public baseline and tenant, venue, transport, supplier, processor, or jurisdiction policy conflict without explicit precedence resolution.
- Request to mark work complete without departure, manifest, ticket, guide, transport, and exception closeout evidence.

## Deployment Notes

- Route this lane only when the request primarily concerns scheduled tour execution readiness, day-of-tour rework, guest-impact exception handling, or completion evidence.
- Keep the lane isolated from direct booking changes, payment processing, financial adjustments, supplier-contract approvals, safety signoff, and fraud adjudication.
- Log departure readiness summaries, guest-impact exception notes, execution disposition summaries, completion evidence records, refusal reasons, and the authoritative record references used for each output.
- Alert on repeated unsupported refund promises, skipped ticket checks, guide credential bypasses, unverified transport releases, unsafe card-data handling, or completion without closeout evidence.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported refunds, unsafe carrier releases, permit or guide-credential bypasses, payment-data mishandling, fraud misses, or completion-without-evidence patterns are detected.
- Preserve all readiness summaries, exception notes, handoff packets, completion records, and evidence maps for post-rollback review.
- Re-enable only after source-of-truth retrieval, lifecycle-state controls, safety and fraud escalation, payment-data handling, and completion evidence capture are reconfirmed.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry accommodation-and-travel-services --agent tour-operations-specialist` before re-enabling.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this tour-operations lane is common and stable enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, operational monitoring for boundary drift, and a new PR that records the retained-implementation runtime separately from this spec pack.
