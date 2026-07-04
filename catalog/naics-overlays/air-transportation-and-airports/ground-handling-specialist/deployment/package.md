# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route ground handling work into a spec-first specialist with retrieval, lifecycle, custody, service-log, equipment, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant station control, turn management, ramp log, GSE, baggage, cargo, load-control, dispatch, maintenance, customs, security, WMS/TMS, telematics, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for turn plans, station control records, ramp logs, airline station messages, GSE status, baggage scans, BRS/BHS, cargo manifests, ULD records, load-control status, dispatch records, maintenance records, WMS/TMS, customs documentation, security systems, telematics, equipment status, service logs, station SOPs, SGHA or SLA terms, local airport rules, and owner maps
  - escalation targets for dispatch, load control, airport operations, ATC or airport movement liaison, customs/compliance, dangerous goods, TSA or airport security, maintenance, warehouse, cargo operations, baggage operations, customer operations, emergency response, and human duty managers
  - tenant authority maps for lifecycle states, station SOPs, SGHA or SLA service scope, local airport rules, airline ground operations procedures, load-control release boundaries, baggage and cargo custody evidence, GSE readiness, maintenance return-to-service criteria, customs boundaries, security boundaries, and completion evidence

## Isolation

- Tenant boundary: no cross-tenant sharing of flight, passenger, baggage, cargo, ULD, chain-of-custody, GSE, load, security, customs, maintenance, ground handling, service-level, incident, or irregular-operations artifacts.
- Knowledge boundary: IATA, ICAO, FAA, eCFR, TSA, and CBP public baselines are shared; tenant station SOPs, SGHA or SLA terms, security program details, airline procedures, local airport rules, customs workflows, load-control procedures, labor rules, and owner maps are injected only at request time.
- Adaptation policy:
  - allowed: ground handling terminology maps, artifact templates, lifecycle state labels, connector mappings, owner registries, tenant-specific evidence checklists, and service-scope overlays
  - prohibited: widening the lane into dispatch release, final load-control approval, ATC or airport movement clearance, customs release, dangerous goods acceptance, TSA or airport security determination, maintenance return-to-service approval, emergency command, legal interpretation, financial approval, or safety signoff

## Operations

- Monitoring:
  - log lifecycle transitions, holds, rework, owner routing, missing artifacts, custody breaks, route disruptions, equipment faults, GSE shortages, service-log gaps, cargo documentation gaps, customs or security blockers, irregular-operations escalations, refusals, and completion records
  - alert on stale source reviews, repeated attempts to bypass dispatch/customs/security/load-control/safety/maintenance controls, repeated completion-without-evidence attempts, recurrent baggage or cargo custody breaks, and recurring source or tenant policy conflicts
  - monitor for drift into generic logistics, airport operations, dispatch, load control, customs, maintenance, security, or safety-signoff behavior
- Logging:
  - record release version, tenant assumptions, facility, flight, tail, gate, stand, route, belt, baggage, cargo, ULD, GSE, load, service, maintenance, customs, security, owner, blocker, and systems-of-record context
  - record whether the request involved missing prerequisites, execution exception, custody break, customs documentation gap, route or schedule disruption, passenger impact, security boundary, maintenance boundary, source conflict, or unsupported completion request
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry air-transportation-and-airports --agent ground-handling-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed ground handling specialist for aircraft turnaround execution, GSE dependency handling, baggage and cargo chain-of-custody exception handling, irregular-operations escalation, documentation gap detection, adjacent-owner routing, service-log summaries, and audit-ready closure.
- Materialization requirements for `commons-crew`:
  - task metadata identifying airport, terminal, gate, stand, bay, belt, route, flight, tail, movement, baggage, cargo, mail, ULD, GSE, service, equipment, facility, passenger-impact, and requested execution outcome
  - boundary metadata identifying dispatch, load control, airport operations, ATC or airport movement liaison, customs/compliance, dangerous goods, TSA or airport security, maintenance, warehouse, cargo operations, baggage operations, customer operations, emergency response, and duty manager owners
  - retrieval dependencies for turn plans, station control records, ramp logs, airline station messages, GSE status, baggage scans, BRS/BHS, cargo manifests, ULD records, load-control status, dispatch records, maintenance records, WMS/TMS, customs documentation, security systems, telematics, equipment status, service logs, SGHA/SLA terms, station SOPs, airport rules, and owner maps
  - tenant overlays for ground handling SOPs, local airport ramp rules, airline ground operations procedures, load-control release criteria, SGHA/SLA service scope, security program boundaries, customs processes, dangerous goods procedures, completion criteria, and escalation matrices
- Regulated-lane caveats:
  - public IATA, ICAO, FAA, eCFR, TSA, and CBP sources constrain ground handling workflow and boundary claims, but they do not replace station SOPs, airline manuals, SGHA or SLA terms, security programs, customs procedures, load-control procedures, airport rules, or tenant SOPs
  - runtime must refuse or return to orchestrator whenever dispatch release, final load-control release, airport movement clearance, customs release, dangerous goods acceptance, TSA or airport security determination, maintenance return-to-service, legal interpretation, financial approval, emergency command, or safety-critical signoff is required
  - tenant deployment should verify facility, jurisdiction, airline, handler, customs, security, load-control, maintenance, airport operations, and SGHA/SLA overlays before allowing automation to influence movement, turnaround, passenger-impact, or closure outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and absence of trusted-runtime claims.
