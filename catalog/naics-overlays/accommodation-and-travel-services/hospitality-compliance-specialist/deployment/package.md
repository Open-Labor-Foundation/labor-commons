# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit hospitality compliance boundaries, refusal triggers, adjacent-lane routing, regulated-lane caveats, and tenant retrieval dependencies.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `retail-consumer-and-hospitality` ability coverage.
- `evaluation/research-summary.json` with authority rationale, workflow-stage mapping, systems of record, decision boundaries, scenario-family coverage, and ambiguity handling.
- `evaluation/results.json`, `readiness/evidence.json`, and `readiness/release.md` with scenario results, human verification, functional audit evidence, and validated gates.

### Runtime Assumptions

- Tenant provides jurisdiction, property, brand, service model, business unit, booking channel, rate plan, guest or booking status, and policy context before any property-specific compliance output is generated.
- Tenant maintains identifiable systems of record for compliance tracking, PMS audit logs, CRS or booking records, folios, payment controls, privacy complaints, incident management, safety inspections, fraud cases, and remediation plans.
- Tenant defines approval owners for legal review, regulator-facing communication, refund and pricing exceptions, service recovery, safety/security, public-health escalation, privacy signoff, payment-card controls, and executive policy override.
- Tenant provides current policy overlays for fee disclosure, cancellation and refund handling, guest data, cardholder-data handling, accessibility, public-health and safety incidents, fraud, loss prevention, and remediation cadence.

### Required Retrieval Dependencies

- Property, jurisdiction, booking channel, customer type, stay dates, booking or folio identifiers, rate plan, fee display, cancellation terms, refund status, and service policy context.
- PMS audit extracts, CRS records, folio ledger, incidental-hold evidence, payment tender records, payment-control SAQ or AOC evidence, processor rules, and chargeback or billing-error support artifacts.
- Privacy complaint records, guest profile access logs, data-request and retention evidence, approved privacy scripts, and data-security training or policy records.
- Incident logs, security reports, safety inspection records, fire-safety evidence, public-health or outbreak notices, guest-list requests, emergency action plan references, and remediation trackers.
- Fraud or loss-prevention case records, identity mismatch notes, refund reroute requests, loyalty-profile change records, and case owner decisions.
- Approval and escalation matrix for property compliance, front office, guest communications, revenue management, payment controls, privacy/legal, safety/security, public-health, fraud/loss-prevention, and executive signoff.

### Refusal and Return Conditions

- Missing tenant facts, jurisdiction, property, booking channel, systems of record, evidence owner, approval owner, or authoritative source context.
- Incomplete PMS, booking, folio, payment-control, privacy, incident, safety, fraud, or remediation evidence.
- Public source, tenant policy, brand standard, supplier term, processor rule, or jurisdiction conflict that materially alters the answer.
- Requests for legal interpretation, regulator response, formal certification, PCI attestation, privacy-law signoff, safety clearance, public-health closure, fraud adjudication, pricing or refund approval, or executive policy override.
- Requests to bypass documented compliance handling, evidence capture, or remediation approval.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind hospitality compliance queue controls with explicit source, evidence-owner, blocker, and escalation-owner output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside hospitality compliance mapping, evidence review, review-preparation, remediation routing, and escalation support.
- Ensure every output references named hospitality evidence artifacts, their systems of record, their owners, and the property or jurisdiction context controlling the answer.
- Keep enhanced validation checkpoints for the first 14 sessions in a new property group, jurisdiction, brand, or booking-channel deployment.

### Monitoring and Regression Controls

- Track missing PMS, CRS, folio, fee-display, payment-control, privacy, incident, safety, fraud, and remediation evidence escalations.
- Track unresolved public-source, tenant-policy, brand-standard, processor-rule, supplier-term, or jurisdiction conflicts.
- Track requests for legal advice, regulator response, PCI attestation, privacy signoff, safety clearance, refund approval, pricing override, service-recovery approval, fraud adjudication, and executive exception handling.
- Track informal workaround requests, cardholder-data handling violations, privacy exposure risk, guest-harm indicators, public-health signals, and policy-exception misuse.
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs or when any output overstates legal, certification, refund, pricing, safety, privacy, or fraud authority.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, control matrices, exception notes, remediation state, and unresolved conflict records for each affected request lineage.
- Re-collect jurisdiction, property, brand, booking-channel, source baseline, policy overlays, systems of record, evidence owners, and approval owners before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, certification, regulator-facing, refund, pricing, safety, privacy, fraud, or payment-control overreach incidents
  - stable evidence retrieval across PMS, CRS, folio, payment-control, privacy, incident, safety, fraud, and remediation systems
  - explicit governance review with compliance, privacy/legal, payment-control, safety/security, and operations signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
