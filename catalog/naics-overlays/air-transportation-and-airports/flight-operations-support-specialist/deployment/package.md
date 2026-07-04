# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route flight operations support work into a spec-first specialist with retrieval, evidence, communication, movement, custody, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant flight operations, dispatch, flight planning, booking, cargo, baggage, load, maintenance, customs, security, telematics, fleet, airport operations, CRM, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for flight operations logs, AOC notes, dispatch records, operational flight plans, flight status, weather and NOTAM context, schedule systems, load control, booking, cargo, airway bill, ULD, baggage, maintenance, customs documentation, security, gate, stand, GSE, telematics, fleet, CRM, and service systems
  - escalation targets for dispatch, customs/compliance, maintenance, warehouse, ground handling, airport operations, customer operations, safety, security, crew operations, legal, finance, and human duty managers
  - tenant authority maps for support lifecycle states, operations specifications references, carrier SOPs, dispatch procedures, station procedures, service-level commitments, passenger-impact rules, cargo and baggage handoff rules, customs boundaries, security boundaries, maintenance boundaries, and closure criteria

## Isolation

- Tenant boundary: no cross-tenant sharing of flight, passenger, crew, baggage, cargo, ULD, booking, dispatch, customs, security, maintenance, safety, service-level, incident, or irregular-operations artifacts.
- Knowledge boundary: FAA, eCFR, TSA, CBP, and IATA public baselines are shared; tenant operations specifications, carrier manuals, dispatch procedures, station SOPs, airport rules, service policies, customs workflows, security programs, and owner maps are injected only at request time.
- Adaptation policy:
  - allowed: local terminology maps, artifact templates, service workflow labels, retrieval connector mappings, owner registries, and tenant-specific evidence checklists
  - prohibited: widening the lane into dispatch release, operational control, ATC clearance, customs release, security determination, maintenance return-to-service, deicing or airworthiness signoff, legal interpretation, financial approval, or customer-policy override

## Operations

- Monitoring:
  - log support intake classification, resolution actions, stakeholder communications, holds, rework, owner routing, missing artifacts, custody breaks, route disruptions, equipment faults, documentation gaps, irregular-operations escalations, refusals, and closure evidence
  - alert on stale source reviews, repeated attempts to bypass dispatch/customs/security/safety/maintenance/customer-policy controls, repeated completion-without-evidence attempts, recurrent baggage or cargo custody breaks, recurring route or schedule disruption patterns, and source or tenant policy conflicts
  - monitor for drift into generic customer service, dispatch, customs, maintenance, ground handling, airport operations, or safety-signoff behavior
- Logging:
  - record release version, tenant assumptions, flight, leg, tail, station, gate, stand, route, schedule, passenger-impact, booking, load, baggage, cargo, ULD, customs, maintenance, safety, security, owner, blocker, and systems-of-record context
  - record whether the request involved missing prerequisites, policy exception, unsupported workaround, chain-of-custody break, route or schedule disruption, passenger impact, customs or security boundary, maintenance boundary, source conflict, or unsupported closure request
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry air-transportation-and-airports --agent flight-operations-support-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed flight operations support specialist for service resolution, stakeholder communication, movement and turnaround dependency summaries, chain-of-custody exception handling, documentation gap detection, irregular-operations escalation, adjacent-owner routing, and auditable support closure.
- Materialization requirements for `commons-crew`:
  - task metadata identifying flight number, date, leg, origin, destination, alternate, route, tail, aircraft type, station, gate, stand, service level, passenger-impact, cargo or baggage movement, and requested support outcome
  - boundary metadata identifying dispatch, customs/compliance, maintenance, warehouse, ground handling, airport operations, customer operations, safety, security, crew operations, legal, finance, and duty-manager owners
  - retrieval dependencies for flight operations logs, dispatch and flight planning systems, weather and NOTAM context, schedule systems, load records, booking records, cargo manifests, airway bills, ULD records, baggage scans, maintenance records, customs documentation, security records, telematics, fleet, gate and station systems, CRM, and service logs
  - tenant overlays for carrier manuals, operations specifications references, dispatch procedures, station SOPs, airport rules, service policies, passenger-impact commitments, cargo and baggage handoff rules, customs processes, security programs, maintenance programs, completion criteria, and escalation matrices
- Regulated-lane caveats:
  - public FAA, eCFR, TSA, CBP, and IATA sources constrain workflow and boundary claims, but they do not replace tenant operations specifications, carrier manuals, dispatch procedures, station SOPs, security programs, customs procedures, maintenance programs, or service policies
  - runtime must refuse or return to orchestrator whenever dispatch release, operational control, ATC clearance, customs release, security determination, maintenance return-to-service, safety risk acceptance, deicing release, airworthiness decision, legal interpretation, financial approval, or policy override is required
  - tenant deployment should verify carrier, jurisdiction, station, airport, customs, security, maintenance, and customer-service overlays before allowing automation to influence movement, disruption, passenger-impact, cargo, or closure outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and absence of trusted-runtime claims.
