# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route aviation and airport irregular-operations work into a spec-first specialist with retrieval, lifecycle, custody, service-level, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant irregular-operations, flight operations, dispatch, FIDS/AODB, gate, stand, baggage, cargo, customs, maintenance, security, telematics, WMS/TMS, customer operations, and service-desk credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for irregular-operations tickets, station logs, AOC/OCC records, dispatch and flight operations systems, FIDS/AODB, gate and stand systems, baggage and BRS/BHS systems, cargo booking and manifest systems, customs documentation, maintenance records, equipment status, telematics, WMS/TMS, security systems, customer operations, CRM, notification logs, and service systems
  - escalation targets for dispatch, ATC liaison, customs/compliance, TSA or airport security, maintenance, warehouse, ground handling, airport operations, airport customer services, customer operations, finance, legal, emergency response, and human duty managers
  - tenant authority maps for lifecycle states, irregular-operations playbooks, carrier customer service plans, tarmac-delay contingency plans, local airport rules, airline SLAs, passenger recovery dependencies, baggage and cargo custody evidence, maintenance return-to-service criteria, customs boundaries, security boundaries, and completion evidence

## Isolation

- Tenant boundary: no cross-tenant sharing of flight, passenger, booking, baggage, cargo, ULD, chain-of-custody, security, customs, maintenance, customer-impact, service-level, incident, or irregular-operations artifacts.
- Knowledge boundary: FAA, eCFR, DOT, TSA, CBP, and IATA public baselines are shared; tenant irregular-operations playbooks, carrier customer service plans, tarmac-delay contingency plans, station rules, security program details, airline SLAs, customs workflows, compensation policies, and owner maps are injected only at request time.
- Adaptation policy:
  - allowed: irregular-operations terminology maps, artifact templates, lifecycle state labels, connector mappings, owner registries, tenant-specific evidence checklists, and approved escalation matrices
  - prohibited: widening the lane into dispatch release, ATC clearance, customs release, TSA or airport security determination, maintenance return-to-service approval, emergency command, legal interpretation, compensation approval, financial approval, or safety signoff

## Operations

- Monitoring:
  - log lifecycle transitions, holds, rework, owner routing, missing artifacts, custody breaks, route disruptions, equipment faults, tarmac-delay clock dependencies, documentation gaps, passenger-impact escalations, refusals, and completion records
  - alert on stale source reviews, repeated attempts to bypass dispatch/customs/security/safety/maintenance controls, repeated completion-without-evidence attempts, recurrent baggage or cargo custody breaks, recurring tarmac-delay or passenger-notification gaps, and recurring source or tenant policy conflicts
  - monitor for drift into generic ticket handling, customer service, dispatch, customs, maintenance, airport operations, or safety-signoff behavior
- Logging:
  - record release version, tenant assumptions, station, facility, flight, tail, route, airport, gate, stand, belt, baggage, cargo, ULD, passenger-impact, crew, equipment, maintenance, field-condition, NOTAM, tarmac-delay, customs, security, owner, blocker, and systems-of-record context
  - record whether the request involved missing prerequisites, execution exception, custody break, route or schedule disruption, passenger impact, security or customs boundary, maintenance boundary, source conflict, or unsupported completion request
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry air-transportation-and-airports --agent irregular-operations-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed irregular operations specialist for disruption intake, execution status, movement and turnaround dependency handling, chain-of-custody exception handling, route and schedule disruption escalation, passenger-impact packaging, documentation gap detection, adjacent-owner routing, and audit-ready closure.
- Materialization requirements for `commons-crew`:
  - task metadata identifying station, airport, terminal, gate, stand, belt, route, flight, tail, booking, passenger impact, baggage, cargo, ULD, equipment, facility, disruption trigger, service level, and requested execution outcome
  - boundary metadata identifying dispatch, ATC liaison, customs/compliance, TSA or airport security, maintenance, warehouse, ground handling, airport operations, airport customer services, customer operations, finance, legal, emergency response, and duty manager owners
  - retrieval dependencies for irregular-operations tickets, OCC/AOC and station records, dispatch records, FIDS/AODB, gate and stand systems, BHS/BRS, baggage scans, cargo manifests, customs documentation, maintenance records, WMS/TMS, security systems, telematics, equipment status, CRM, notification logs, and service logs
  - tenant overlays for irregular-operations playbooks, carrier customer service plans, tarmac-delay contingency plans, local airport rules, airline SLAs, station escalation matrices, compensation boundaries, security program boundaries, customs processes, condition-reporting workflows, emergency plans, completion criteria, and owner maps
- Regulated-lane caveats:
  - public FAA, eCFR, DOT, TSA, CBP, and IATA sources constrain irregular-operations workflow and boundary claims, but they do not replace carrier plans, airport rules, airline SLAs, security programs, customs procedures, dispatch procedures, compensation policies, or tenant SOPs
  - runtime must refuse or return to orchestrator whenever dispatch release, ATC clearance, customs release, TSA or airport security determination, maintenance return-to-service, legal interpretation, compensation approval, financial approval, emergency command, or safety-critical signoff is required
  - tenant deployment should verify jurisdiction, airport, carrier, handler, customs, security, dispatch, customer service, and airport certification overlays before allowing automation to influence movement, turnaround, passenger-impact, cargo-impact, or closure outcomes
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and absence of trusted-runtime claims.
