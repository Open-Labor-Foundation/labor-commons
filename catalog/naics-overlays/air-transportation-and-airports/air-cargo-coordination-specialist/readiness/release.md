# Release Readiness

## Status

- Release version: `v0.1.0`- Validation profile: `standard`
- Human verification: recorded in `readiness/evidence.json`

## Gate Summary

- Source baseline current: yes
- Evaluation threshold met: yes
- Functionality coverage complete: yes
- Deployment package documented: yes
- Rollback path documented: yes
- Commercialization notes documented: yes
- retained implementation claimed: no

## Release Notes

This release adds a validated spec pack for the air cargo coordination
specialist in the air transportation and airports industry overlay. The lane is
scoped to evidence-backed coordination: dependency intake, owner routing,
handoff packaging, blocker tracking, chain-of-custody and documentation gap
escalation, route or schedule compliance impact summaries, and closure
confirmation.

The package explicitly separates coordination from dispatch authority, customs
release, cargo screening certification, dangerous-goods acceptance, safety
signoff, maintenance release, financial approval, and warehouse or ramp
execution.

## Promotion Criteria

Promote this overlay to a retained implementation only after repeated successful
usage shows common demand, tenant-safe retrieval hooks are implemented for cargo
booking, TMS, WMS, customs, screening, DG, ULD, dispatch, maintenance, customer
operations, and service systems, and an explicit deployment approval commits
the runtime build separately from this spec pack.

## Rollback

Rollback should disable this release, route affected requests back to
orchestrator-safe generic coordination handling, restore the previous validated
catalog artifact bundle, and re-run:

```bash
npm run audit:spec-pack -- --industry air-transportation-and-airports --agent air-cargo-coordination-specialist
```
