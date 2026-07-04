# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated usage, stable retrieval contracts, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit aviation metric-definition ownership, source hierarchy, refusal triggers, adjacent-lane routing, and tenant-fact prerequisites.
- `evaluation/functionality-map.json` covering all shared abilities plus analytics-reporting-and-disclosure and transportation-and-logistics abilities.
- `evaluation/research-summary.json` with authoritative sources, workflow stages, artifacts, systems, decision boundaries, domain failure modes, source-class coverage, and ambiguity handling.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario and functionality coverage.

### Runtime Assumptions

- Tenant supplies jurisdiction, station, business unit, route, service model, operating constraints, metric dictionary, publication cadence, and source-precedence rules.
- Tenant systems expose retrieval hooks for DCS, ACARS/OOOI, AODB, FIDS, dispatch, flight-following, schedule, slot, SWIM, BTS/DOT, baggage, cargo, WMS, TMS, customs, screening, maintenance, service, document, and approval records.
- Tenant provides approval thresholds and escalation owners for dispatch, customs/compliance, maintenance, warehouse, customer operations, ground handling, safety, security, legal/compliance, and regulator-facing work.
- Runtime can log assumptions, source lineage, metric definitions, denominator choices, event anchors, refresh timestamps, low-confidence states, and escalation evidence for each report package.

### Required Retrieval Dependencies

- Flight, tail, station, route, gate, departure, arrival, passenger, baggage, cargo, shipment, booking, ULD, and air waybill identifiers.
- OOOI, ACARS, DCS, AODB, FIDS, dispatch, schedule, slot, route, delay code, NOTAM, SWIM, FAA performance, BTS, and DOT service-quality records.
- Shipment, booking, load, AWB, cargo manifest, ACAS, screening, customs, WMS/TMS, telematics, chain-of-custody, and handoff records.
- Equipment status, maintenance status, MEL/CDL indicators, GSE status, service logs, customer operations records, and disclosure or approval history.

### Refusal and Return Conditions

- Required tenant facts, jurisdiction, source context, metric dictionary, event anchors, systems of record, or retrieval hooks are missing and would change the answer.
- Public-source and tenant-policy interpretation conflict without explicit precedence resolution.
- Request requires flight release, dispatch instructions, route clearance, cargo screening or customs clearance, maintenance return-to-service, safety signoff, legal interpretation, financial approval, policy override, or final disclosure signoff.
- Metric definitions, denominators, refresh assumptions, custody records, documentation gates, source conflicts, or signoff conditions remain unresolved.
- Movement depends on regulated or safety-critical approval.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated stale-data, source-conflict, custody-break, unsupported-disclosure, or authority-overreach incidents appear.
- Preserve all report packages, caveat logs, source-lineage mappings, metric definitions, assumption registers, and escalation traces for rollback review.
- Re-enable only after retrieval dependencies, source precedence, metric definitions, movement documentation, and escalation ownership are restored and retested.

## retained-implementation Promotion Plan

- Keep `specification-based` execution active until a separate retained-implementation package is intentionally created and merged.
- Promote only if usage proves common enough to justify a built runtime and production evidence shows stable low-risk behavior across tenants.
- Promotion requires governance review, tenant retrieval contracts, updated validation evidence, operational monitoring, rollback controls, and release documentation distinct from this spec pack.
