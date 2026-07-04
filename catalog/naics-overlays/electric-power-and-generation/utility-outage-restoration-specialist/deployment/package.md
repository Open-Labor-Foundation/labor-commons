# Deployment Package

## Runtime Model

- Deployment model: versioned utility outage restoration specialist package at
  `catalog/naics-overlays/electric-power-and-generation/utility-outage-restoration-specialist/`.
- Runtime expectation: orchestrator-invoked execution specialist overlay that provides outage-restoration progression, exception handling, completion-evidence capture, and authority-safe routing.
- Runtime strategy: `specification-based`.
  - The package does not claim retained-implementation execution authority.
  - Trusted built promotion requires a separate commit and explicit package-level promotion flow.
- Required configuration:
  - release version and manifest versioning
  - authority-source review policy and stale-source handling
  - retrieval hooks for OMS, ADMS or DMS, SCADA, GIS, field assessment, switching, crew, logistics, and customer-status records
  - tenant emergency response plan, critical-customer policy, ETR approval path, and escalation roster
  - queue and state tracing integration for `accepted`, `damage_assessing`, `awaiting_clearance`, `in_progress`, `exception_queued`, `rework`, `partially_restored`, `completed`, `blocked`, and `escalated`

## Tenant Adaptation and Boundaries

- Tenant boundary: no cross-tenant sharing of outage incidents, feeder topology, switching logs, damage assessments, customer-priority lists, crew assignments, or mutual-aid details.
- Knowledge boundary: the public restoration baseline in `manifest.yaml` is static within release; tenant emergency-plan rules, priority matrices, and connectors are injected at runtime by orchestrator.
- Allowed adaptation: utility-specific lifecycle names, critical-customer tiers, mutual-aid workflows, data connectors, and escalation contacts.
- Prohibited adaptation: converting execution support into switching authority, engineering signoff, legal or regulatory interpretation, or public-communications approval authority.

## Queue and Lifecycle Behavior

- Expected lifecycle states:
  - `accepted`, `damage_assessing`, `awaiting_clearance`, `in_progress`, `exception_queued`, `rework`, `partially_restored`, `completed`, `blocked`, and `escalated`.
- Stage advancement is evidence-driven and reversible if outage, switching, or field records are later corrected.
- Explicit exception queue entries are required for missing damage assessment, record conflicts, incomplete mutual-aid readiness, missing critical-customer context, and missing completion evidence.

## Monitoring and Logging

- Monitor:
  - exception frequency by type such as missing evidence, source conflict, mutual-aid gap, or unsafe authority request
  - stale source checks against authority-source review dates
  - repeated blocked attempts to force switching, engineering, or public-communications authority
  - repeated low-confidence requests with unresolved tenant facts
- Log:
  - request or trace id, current restoration state, confidence, scenario mapping, and routing rationale
  - outage incident, feeder or device references, and evidence package references used for progression or closure assertions
  - escalation recipient and reason when ownership leaves this lane

## Rollback Path

- Disable the current release path in orchestrator routing.
- Re-route active requests to safe fallback specialist handling.
- Restore prior validated package contents from repository release catalog.
- Re-run `node infra/scripts/audit-spec-pack.mjs --industry electric-power-and-generation --agent utility-outage-restoration-specialist` before re-enabling.

## Materialization Notes

- `commons-crew` needs task metadata for outage incident, feeder or circuit scope, switching posture, customer-impact severity, request type, and claimed authority level.
- Runtime retrieval must supply tenant-specific facts for emergency response plan version, priority rules, critical-customer list, switching owner, engineering owner, mutual-aid workflow, ETR approval path, and systems-of-record locations.
- Regulated-lane caveat: public baseline sources are sufficient for terminology and boundary posture, but not for final switching, communications, or completion decisions without tenant evidence.
- Refusal or orchestrator return is required when the request needs switching authority, engineering approval, public-regulatory commitment, legal interpretation, or final safety signoff.

- Current state remains `specification-based` as required by issue #1294.
- Promote only when:
  - repeated outage-restoration use shows stable low-conflict completion outcomes,
  - tenant-specific telemetry confirms safe boundary compliance and evidence retrieval reliability,
  - and an explicit retained-implementation package approval is committed in a separate change set.

## Support Owner

- Repository owner or designated catalog release steward.
