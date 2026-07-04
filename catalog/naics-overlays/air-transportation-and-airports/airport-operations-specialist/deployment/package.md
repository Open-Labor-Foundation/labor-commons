# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route airport operations work into a spec-first specialist with retrieval, lifecycle, custody, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant airport operations, FIDS/AODB, gate, stand, BHS/BRS, dispatch, maintenance, customs, security, telematics, WMS/TMS, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for airport operations logs, airport certification manual, local airport rules, FIDS/AODB, gate and stand systems, airfield inspection, field-condition, NOTAM, BHS/BRS, baggage, cargo, dispatch, maintenance, WMS/TMS, customs documentation, security, telematics, equipment, CRM, and service systems
  - escalation targets for dispatch, ATC liaison, customs/compliance, TSA or airport security, maintenance, warehouse, ground handling, airport compliance, customer operations, emergency response, and human duty managers
  - tenant authority maps for lifecycle states, airport certification manual controls, local airport rules, airline SLAs, turnaround dependencies, custody evidence, condition-reporting workflows, maintenance return-to-service criteria, customs boundaries, security boundaries, and completion evidence

## Isolation

- Tenant boundary: no cross-tenant sharing of flight, passenger, baggage, cargo, ULD, chain-of-custody, security, customs, maintenance, airport operations, service-level, incident, or irregular-operations artifacts.
- Knowledge boundary: FAA, eCFR, TSA, CBP, and IATA public baselines are shared; tenant airport certification manual content, security program details, airline SLAs, local airport rules, ground-handler SOPs, customs workflows, and owner maps are injected only at request time.
- Adaptation policy:
  - allowed: airport terminology maps, artifact templates, lifecycle state labels, connector mappings, owner registries, and tenant-specific evidence checklists
  - prohibited: widening the lane into dispatch release, ATC clearance, customs release, TSA or airport security determination, maintenance return-to-service approval, emergency command, legal interpretation, financial approval, or safety signoff

## Operations

- Monitoring:
  - log lifecycle transitions, holds, rework, owner routing, missing artifacts, custody breaks, route disruptions, equipment faults, field-condition blockers, documentation gaps, irregular-operations escalations, refusals, and completion records
  - alert on stale source reviews, repeated attempts to bypass dispatch/customs/security/safety/maintenance controls, repeated completion-without-evidence attempts, recurrent baggage or cargo custody breaks, and recurring source or tenant policy conflicts
  - monitor for drift into generic logistics, customer service, dispatch, customs, maintenance, or safety-signoff behavior
- Logging:
  - record release version, tenant assumptions, facility, flight, gate, stand, route, belt, baggage, cargo, ULD, equipment, maintenance, field-condition, NOTAM, customs, security, owner, blocker, and systems-of-record context
  - record whether the request involved missing prerequisites, execution exception, custody break, route or schedule disruption, passenger impact, security or customs boundary, maintenance boundary, source conflict, or unsupported completion request
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry air-transportation-and-airports --agent airport-operations-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed airport operations specialist for day-of-operation execution status, movement and turnaround dependency handling, chain-of-custody exception handling, irregular-operations escalation, documentation gap detection, adjacent-owner routing, and audit-ready closure.
- Materialization requirements for `commons-crew`:
  - task metadata identifying airport, terminal, gate, stand, belt, bay, route, flight, tail, movement, baggage, cargo, ULD, equipment, facility, passenger-impact, and requested execution outcome
  - boundary metadata identifying dispatch, ATC liaison, customs/compliance, TSA or airport security, maintenance, warehouse, ground handling, airport compliance, customer operations, emergency response, and duty manager owners
  - retrieval dependencies for airport operations logs, airfield inspection and condition records, NOTAM references, FIDS/AODB, gate and stand systems, BHS/BRS, baggage scans, cargo manifests, dispatch records, maintenance records, WMS/TMS, customs documentation, security systems, telematics, equipment status, and service logs
  - tenant overlays for airport certification manual requirements, local airport rules, airline SLAs, ground-handler SOPs, security program boundaries, customs processes, condition-reporting workflows, emergency plans, completion criteria, and escalation matrices
- Regulated-lane caveats:
  - public FAA, eCFR, TSA, CBP, and IATA sources constrain airport operations workflow and boundary claims, but they do not replace airport certification manuals, local airport rules, airline SLAs, security programs, customs procedures, or tenant SOPs
  - runtime must refuse or return to orchestrator whenever dispatch release, ATC clearance, customs release, TSA or airport security determination, maintenance return-to-service, legal interpretation, financial approval, emergency command, or safety-critical signoff is required
  - tenant deployment should verify facility, jurisdiction, airline, handler, customs, security, and airport certification overlays before allowing automation to influence movement, turnaround, passenger-impact, or closure outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and absence of trusted-runtime claims.
