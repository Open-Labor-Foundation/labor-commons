# Deployment Package

## Runtime

- Target runtime: `commons-crew` via the spec-pack execution path.
- Runtime strategy: `specification-based`.
- Delivery target: `validated`.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, permit type, and AHJ inspection regime;
  - owner and authority directory for permitting, safety, superintendent,
    commissioning, controls, and licensed trades;
  - CMMS, PMIS, permitting, inspection, safety, BAS, and document-control
    system connectors;
  - tenant-specific shutdown, occupied-building, startup, turnover, and
    destination-acceptance rules;
  - contract, subcontract, self-perform, and engineer-of-record rules that
    alter building engineering boundaries.
- Required task and boundary metadata:
  - intake schema for work orders, shutdown requests, permit records,
    inspection status, startup evidence, and safety blockers;
  - in-scope versus out-of-scope definitions for coordination versus field
    execution;
  - output-shape requirements for handoff summaries, dependency trackers,
    routing notes, and closure confirmation;
  - authority-boundary map for permit approval, code interpretation, licensed
    trade signoff, engineer-of-record review, safety release, inspection
    signoff, and change-order approval.
- Required systems of record:
  - CMMS or facilities work-order platform,
  - PMIS or construction ERP,
  - permitting tracker or AHJ portal,
  - inspection management system,
  - safety management system,
  - BAS or controls evidence repository,
  - document control repository,
  - closeout or turnover repository.

## Deployment Notes

- Deployment posture remains `specification-based`; no retained-implementation runtime is claimed.
- The lane must record:
  - scenario ID or workflow family,
  - missing prerequisite blockers,
  - refusal reason and escalation owner,
  - prior owner and destination owner,
  - required artifact checklist and completion state,
  - permit, inspection, safety, outage, startup, and closeout dependency
    status.
- Regulated-lane caveats:
  - do not imply permit approval, AHJ authority, inspection signoff, code
    interpretation, licensed trade signoff, or engineer-of-record judgment;
  - do not bypass safety, shutdown, startup, or inspection blockers because
    of schedule pressure;
  - return to orchestrator when jurisdictional or tenant rules conflict.
- Observability requirements:
  - source-refresh checks and confidence flags,
  - owner ambiguity and stale handoff signals,
  - permit, inspection, safety, outage, startup, and closeout gate outcomes.

## Rollback Requirements

- Disable runtime binding for this lane in the orchestrator.
- Route active work to orchestrator-safe fallback until owner, permit, or
  authority rules are revalidated.
- Preserve open blockers, partial handoff artifacts, and closure state in
  persistent records.
- Re-enable only after governance review confirms the corrected boundary and
  retrieval configuration.

## Promotion Notes

- Runtime remains `specification-based` until a retained implementation is committed
  separately.
- Promote this overlay to a retained implementation only after:
  - repeated runtime demand shows the lane is common,
  - tenant retrieval hooks and authority maps have stabilized,
  - production reviews show safe handling of permit, inspection, safety,
    shutdown, startup, and closeout boundaries,
  - governance approves a maintained built runtime.
