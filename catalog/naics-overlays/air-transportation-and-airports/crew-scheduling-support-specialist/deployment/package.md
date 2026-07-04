# Deployment Package

## Runtime Model

- Target runtime: `commons-crew` or equivalent orchestrator that routes this specification-based specialist from queue context.
- Deployment form: versioned spec-pack artifact bundle with immutable manifest, scenarios, functionality map, research summary, results, readiness evidence, release notes, deployment notes.
- Required secrets: none in the package itself; tenant policy and system-access credentials remain orchestrator-controlled.
- Runtime strategy: `specification-based` until a retained implementation is explicitly promoted in a separate implementation commit.

## Required Configuration

- Release version and package path.
- Source refresh policy and review cadence.
- Retrieval connectors for:
  - crew management, crew rostering, and crew tracking systems
  - pairing, trip sequence, open-time, reserve, qualification, and fatigue or fit-for-duty records
  - dispatch, flight operations, flight planning, operations control, booking, and schedule management systems
  - aircraft routing, fleet, telematics, OOOI, and movement-status feeds
  - maintenance status, MEL or CDL references, return-to-service blockers, and aircraft readiness records
  - customs documentation, APIS, crew manifest, load manifest, and compliance systems
  - customer operations, station operations, TMS, WMS, or handoff systems where crew movement affects cargo, service level, or station readiness
- Escalation target mapping for dispatch, customs/compliance, maintenance, warehouse, customer operations, OCC, crew tracking, labor relations, safety, and finance approval owners.
- Tenant-specific authority matrices for final crew assignment approval, reserve and reassignment rules, junior assignment, CBA interpretation, fatigue escalation, movement approval, dispatch release, customs clearance, maintenance release, and service-level tradeoff approval.

## Tenant Isolation and Adaptation

- Tenant boundary: no cross-tenant sharing of rosters, pairings, duty/rest calculations, crew qualifications, fatigue signals, manifests, flight plans, dispatch releases, aircraft status, CBA rules, station playbooks, or escalation notes.
- Knowledge boundary: public FAA, eCFR, and CBP references remain shared, while tenant CBA rules, airline policies, fleet/base structures, station procedures, authority matrices, and retrieval hooks are injected at request time.
- Allowed adaptation: airline terminology, crew groups, base and fleet topology, route and station vocabulary, planning horizon, reserve-callout conventions, service-priority rules, and escalation targets.
- Prohibited adaptation: extending the lane to final crew approval, dispatch release, flight release, operational control, customs clearance, maintenance release, safety signoff, labor-policy interpretation, legal advice, or financial approval.

## Materialization Notes For `commons-crew`

- Required task metadata:
  - lane slug, release version, planning horizon, crew group, fleet, base, route, segment, flight or trip identifier, disruption context, and requested output shape
- Required boundary metadata:
  - approval matrix, adjacent specialist routing map, dispatch authority map, customs/compliance owner map, maintenance owner map, safety escalation owner, labor-policy owner, and final crew assignment owner
- Required runtime assumptions:
  - current systems of record, authoritative duty/rest calculation source, roster source, pairing source, reserve assignment policy, priority tie-break policy, aircraft and route status source, documentation source, and owner-readiness signals must be tenant-supplied or retrieved
- Regulated-lane caveats:
  - public sources define the baseline but exact carrier operations, aircraft type, route, jurisdiction, CBA, crew category, fatigue review, customs documentation, and station procedures remain tenant-specific
- Conditions requiring refusal or orchestrator return:
  - missing tenant facts or authoritative records that would change the outcome
  - requests for final crew approval, dispatch release, customs clearance, maintenance release, safety signoff, labor interpretation, legal advice, financial approval, or system execution outside explicit scope
  - movement depends on regulated or safety-critical approval
  - conflicting public sources, CBA rules, tenant policies, or system records materially change the safe recommendation

## Operations

- Monitoring:
  - low-confidence escalations caused by stale crew, duty/rest, dispatch, aircraft, APIS, or maintenance records
  - recurring demand-over-capacity cases with no published tie-break policy
  - repeated attempts to use the lane as dispatch release, customs clearance, maintenance release, safety signoff, or final crew approval authority
- Logging:
  - request ID, crew group, base, fleet, route, flight or pairing identifiers, inputs used, missing artifact list, assumptions, affected flights, owner readiness, and escalation targets
  - whether output was recommendation-only, readiness summary, refusal, or escalation
- Alert triggers:
  - repeated recommendations attempted without authoritative duty/rest or roster sources
  - repeated movement handoffs with APIS, manifest, dispatch release, flight plan, load manifest, station acceptance, or aircraft readiness gaps
  - repeated conflicts between FAA/eCFR/CBP baseline, tenant CBA, station playbook, or authority matrices

## Rollback and Recovery

- Disable the specialist release in orchestrator config.
- Route affected crew scheduling support scenarios to a safe fallback policy that requires human routing decisions.
- Restore the prior validated manifest bundle if one exists.
- Clear cached tenant-specific prompt or retrieval configuration for this lane.
- Re-run package audit and catalog validation before re-enabling.

## Deployment Notes

- Runtime remains `specification-based` and does not claim final crew scheduling approval, dispatch release, customs clearance, maintenance release, safety signoff, labor-policy interpretation, or system execution authority.
- Health checks should confirm artifact presence, YAML and JSON parseability, required scenario counts, functional coverage, no blocking research ambiguity, and refresh-policy compliance.
