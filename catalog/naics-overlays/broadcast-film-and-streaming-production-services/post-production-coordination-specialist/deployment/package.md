# Deployment Package

## Runtime

- Target runtime: `commons-crew` via the spec-pack execution path.
- Runtime strategy: `specification-based`.
- Delivery target: `validated`.

## Materialization Requirements

- Tenant-supplied runtime context:
  - commissioning broadcaster, streamer, distributor, territory, and title
    type;
  - owner and authority directory for editorial, finishing, color, sound,
    captioning, QC, mastering, legal, and delivery approval;
  - editorial, MAM or PAM, QC, caption, delivery, and approval-system
    connectors;
  - destination-specific delivery specs, metadata forms, timed-text
    requirements, and acceptance conditions;
  - tenant rules for picture lock, fix-version naming, redelivery handling,
    and destination acceptance proof.
- Required task and boundary metadata:
  - intake schema for picture-lock, turnover, version, caption, QC, and
    destination package state;
  - in-scope versus out-of-scope definitions for coordination versus
    finishing, mastering, or approval execution;
  - output-shape requirements for handoff summaries, dependency trackers,
    routing notes, blocker escalations, and closure confirmations;
  - authority-boundary map for creative signoff, accessibility compliance,
    loudness approval, legal review, and final platform or broadcaster
    acceptance.
- Required systems of record:
  - editorial project repository,
  - post scheduling or routing system,
  - media asset management or production asset management platform,
  - caption or subtitle repository,
  - QC system,
  - mastering package store or IMF repository,
  - broadcast or platform delivery portal,
  - rights or approvals repository.

## Deployment Notes

- Deployment posture remains `specification-based`; no retained-implementation runtime is claimed.
- The lane must record:
  - scenario ID or workflow family,
  - prior owner and destination owner,
  - turnover or delivery package identifiers,
  - missing prerequisite blockers,
  - refusal reason and escalation owner,
  - caption, QC, loudness, and destination acceptance status.
- Regulated-lane caveats:
  - do not imply creative signoff, accessibility certification, legal
    interpretation, or final destination acceptance;
  - do not bypass caption, QC, loudness, or version blockers because of
    schedule pressure;
  - return to orchestrator when destination requirements or tenant policy
    conflict materially with the public baseline.
- Observability requirements:
  - source-refresh checks and confidence flags,
  - stale-owner and duplicated-owner signals,
  - version mismatch and destination-spec conflict detection,
  - caption, QC, and loudness blocker state.

## Rollback Requirements

- Disable runtime binding for this lane in the orchestrator.
- Route active work to orchestrator-safe fallback until destination,
  ownership, and authority rules are revalidated.
- Preserve open blockers, partial handoff artifacts, and closure state in
  persistent records.
- Re-enable only after governance review confirms the corrected boundary and
  retrieval configuration.

## Promotion Notes

- Runtime remains `specification-based` until a retained implementation is committed
  separately.
- Promote this overlay to a retained implementation only after:
  - repeated runtime demand shows the lane is common,
  - destination retrieval hooks and approval maps have stabilized,
  - production reviews show safe handling of post turnovers, timed text, QC,
    and delivery boundaries,
  - governance approves a maintained built runtime.
