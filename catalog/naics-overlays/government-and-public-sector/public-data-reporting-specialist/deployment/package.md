# Deployment Package

## Runtime

- Target runtime: specification-based industry overlay package.
- Deployment model: catalog metadata and evaluation evidence consumed by `commons-crew` for governed just-in-time materialization when no retained implementation exists.
- Required secrets: none for the spec pack itself.
- Required configuration: tenant jurisdiction, agency, program, service population, statutory and policy context, public records rules, privacy constraints, systems of record, retrieval hooks, source precedence, metric dictionary, reporting cadence, disclosure audience, reviewer map, and signoff matrix.

## Isolation

- Tenant boundary: tenant records, metric mappings, public records policies, retrieval hooks, publication decisions, and source hierarchy remain tenant-scoped.
- Knowledge boundary: public baseline sources may be reused across tenants, but tenant source records, assumptions, caveats, case facts, and approval decisions must not cross tenants.
- Adaptation policy: configuration, retrieval, and approved tuning are allowed when they preserve source lineage, auditability, public records, privacy, due-process, and official authority boundaries.

## Operations

- Monitoring: track missing official records, stale data, metric-definition disputes, unsupported claim refusals, disclosure-risk escalations, rights-sensitive escalations, adjacent-specialist routing, and publication signoff blockers.
- Logging: record source versions, review dates, retrieval locations, system timestamps, metric definitions, calculation logic, assumptions, caveats, output approver dependencies, and every refusal or orchestrator return.
- Rollback path: remove the spec pack from catalog exposure or revert to the previous catalog revision if validation, source authority, or boundary handling regresses. Do not promote a generated runtime until a separate retained-implementation PR passes non-regression validation.
- Support owner: catalog maintainer plus tenant public data reporting owner, public records owner, legal owner, procurement owner, audit owner, privacy owner, and authorized publication official for runtime cases.

## Materialization Requirements

`commons-crew` must receive or retrieve:

- Task metadata: requested report or disclosure, audience, cadence, output shape, jurisdiction, agency, program, reporting mandate, reporting period, service population, and allowed decision type.
- Boundary metadata: official authority map, adjacent specialists, signoff requirements, public records release owner, privacy owner, procurement owner, audit owner, legal owner, adjudication owner, and publication owner.
- Tenant facts: tenant policy, service model, operating constraints, system inventory, record locations, retrieval hooks, source precedence, metric dictionary, refresh timestamps, and reviewer matrix.
- Regulated-lane caveats: no legal interpretation, no public records release decision, no procurement approval, no audit finding, no adjudication, no enforcement action, no unsupported causal or policy claim, and no final publication signoff.
- Refusal and orchestrator-return conditions: missing tenant facts, missing official records, missing authority source context, conflicting policy or source records, disputed metric definitions, stale data, privacy or disclosure risk, rights-sensitive exceptions, and any request requiring official authority.

## Deployment Notes

- This package may be deployed as a validated spec pack immediately after repository validation passes.
- Runtime use remains `specification-based` until a retained implementation is explicitly promoted in a separate PR.
