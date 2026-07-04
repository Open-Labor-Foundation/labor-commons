# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit aviation compliance boundaries, refusal triggers, adjacent-lane routing, regulated-lane caveats, and tenant retrieval dependencies.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `transportation-and-logistics` ability coverage.
- `evaluation/research-summary.json` with authority rationale, workflow-stage mapping, systems of record, decision boundaries, scenario-family coverage, and ambiguity handling.
- `evaluation/results.json`, `readiness/evidence.json`, and `readiness/release.md` with scenario results, human verification, functional audit evidence, and validated gates.

### Runtime Assumptions

- Tenant provides jurisdiction, airport or station, carrier or ground-handler role, route, flight, shipment, asset, service level, business unit, policy context, security-program boundary, customs role, and approval matrix before any case-specific compliance output is generated.
- Tenant maintains identifiable systems of record for TMS, WMS, cargo management, booking, dispatch, flight operations, load planning, air waybill or e-AWB documentation, customs documentation, cargo screening, dangerous-goods documentation, maintenance, fleet, airport operations, safety, GRC, document control, and service-level records.
- Tenant defines approval owners for dispatch release, customs clearance, TSA or security-program handling, dangerous-goods acceptance, maintenance return to service, airport operations command, safety review, legal review, regulator-facing communication, customer commitments, financial approval, and executive policy override.
- Tenant provides current policy overlays for cargo acceptance, air waybill handling, station custody, cargo screening, customs documentation, dangerous goods, ULD serviceability, maintenance status, route disruption, temperature-control, service-level evidence, and remediation cadence.

### Required Retrieval Dependencies

- Jurisdiction, airport, station, route, flight number, tail or asset, shipment identifier, MAWB, HAWB, booking, load, ULD, service level, destination, diversion, customer commitment, and documentation status.
- Air waybill or e-AWB references, booking records, cargo acceptance records, WMS custody scans, station handoff logs, TMS milestones, load records, flight or dispatch releases, flight plans, operational-control records, and load manifests.
- TSA cargo acceptance or screening evidence, security-program references, known-shipper or regulated-agent evidence where applicable, security holds, screening exceptions, and security incident records.
- CBP or ACE records, air cargo manifests, customs entries, export filings, holds, releases, inspection notices, broker documentation, and customs compliance records.
- Dangerous-goods declarations, shipper declarations, lithium battery evidence, hazmat acceptance records, notification records, stowage or segregation notes, and discrepancy reports.
- Aircraft maintenance status, MEL/CDL references, airworthiness release references, maintenance records, fleet records, telematics, ULD serviceability or damage records, equipment status logs, airport self-inspection records, NOTAM or condition records, SMS records, safety reports, and remediation trackers.
- Approval and escalation matrix for dispatch, customs/compliance, maintenance, warehouse, cargo operations, safety, security, airport operations, ground handling, customer operations, dangerous goods, legal, regulator relations, finance, and executive signoff.

### Refusal and Return Conditions

- Missing tenant facts, jurisdiction, airport, station, route, flight, shipment, asset, systems of record, evidence owner, approval owner, or authoritative source context.
- Incomplete air waybill, booking, dispatch, load, manifest, custody, screening, customs, dangerous-goods, equipment, maintenance, route, safety, service-level, or remediation evidence.
- Public source, tenant policy, airline procedure, airport procedure, security program, customs broker instruction, dangerous-goods rule, service-level commitment, customer requirement, or jurisdiction conflict that materially alters the answer.
- Requests for legal interpretation, regulator response, formal certification, dispatch release, customs clearance, TSA security determination, cargo screening certification, dangerous-goods acceptance, safety clearance, maintenance return-to-service approval, airworthiness release, airport operations command, financial approval, or executive policy override.
- Requests to bypass documented compliance handling, custody scans, security screening, customs documentation, dangerous-goods evidence, maintenance status, equipment status, route restriction, service-level evidence, or remediation approval.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind aviation compliance queue controls with explicit source, evidence-owner, blocker, route or shipment context, and escalation-owner output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside aviation compliance mapping, evidence review, movement documentation checks, review preparation, remediation routing, and escalation support.
- Ensure every output references named aviation evidence artifacts, their systems of record, their owners, and the jurisdiction, airport, route, flight, shipment, or service-level context controlling the answer.
- Keep enhanced validation checkpoints for the first 14 sessions in a new carrier, airport, station, jurisdiction, cargo product, dangerous-goods program, or customs workflow deployment.

### Monitoring and Regression Controls

- Track missing air waybill, booking, dispatch, load, manifest, custody, screening, customs, dangerous-goods, equipment, maintenance, route, safety, service-level, and remediation evidence escalations.
- Track unresolved public-source, tenant-policy, security-program, customs-instruction, airport-procedure, airline-procedure, service-level, customer-requirement, and jurisdiction conflicts.
- Track requests for legal advice, regulator response, formal certification, dispatch release, customs clearance, TSA security determination, cargo screening certification, dangerous-goods acceptance, safety clearance, maintenance return to service, airport command, financial approval, and executive exception handling.
- Track operational workaround requests, custody breaks, documentation mismatches, security holds, customs holds, ULD damage, maintenance-status gaps, route disruption, diversion impacts, temperature-control excursions, service-level breach signals, and policy-exception misuse.
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs or when any output overstates legal, regulator-facing, dispatch, customs, security, dangerous-goods, safety, maintenance, airport-command, financial, or formal signoff authority.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, control matrices, movement documentation checklists, exception notes, remediation state, and unresolved conflict records for each affected request lineage.
- Re-collect jurisdiction, airport, station, route, flight, shipment, asset, source baseline, policy overlays, systems of record, evidence owners, service-level commitments, and approval owners before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal, regulator-facing, dispatch, customs, security, dangerous-goods, safety, maintenance, airport-command, financial, customer-commitment, or policy-overreach incidents
  - stable evidence retrieval across TMS, WMS, cargo, booking, dispatch, air waybill, customs, screening, dangerous-goods, maintenance, fleet, airport operations, safety, GRC, document-control, and service-level systems
  - explicit governance review with compliance, dispatch, customs, security, safety, dangerous-goods, maintenance, airport operations, cargo operations, customer operations, legal, and tenant executive owners
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
