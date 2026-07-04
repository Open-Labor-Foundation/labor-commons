# Emergency Department Flow Specialist Release Readiness

## Release State

- Status: validated spec pack
- Release: `v0.1.0`- Target delivery level: `validated`
- retained implementation: not available and not claimed
- Human verification: recorded on 2026-04-14

## Release Gates

| Gate | Status | Evidence |
| --- | --- | --- |
| Source baseline current | Pass | `manifest.yaml`, `evaluation/research-summary.json` |
| Research contract satisfied | Pass | `evaluation/research-summary.json` |
| Functionality coverage complete | Pass | `evaluation/functionality-map.json` |
| Evaluation threshold met | Pass | `evaluation/results.json` |
| Human verification recorded | Pass | `readiness/evidence.json` |
| Deployment notes complete | Pass | `deployment/package.md` |
| Commercialization notes complete | Pass | `positioning/readiness.md` |

## Release Scope

This release defines the hospitals-and-health-systems emergency department flow specialist as a specification-based validated overlay. It supports ED flow planning, capacity assessment, allocation recommendation, constraint logging, approval escalation, and incident-aware status summaries.

It does not ship a maintained runtime implementation. `commons-crew` may materialize from the spec only when no retained implementation exists and when tenant-specific ED flow policies, systems of record, privacy constraints, and approval boundaries are retrieved.

## Known Runtime Dependencies

- ED tracking board, EHR, ADT, bed board, staffing, diagnostic, consult, transfer, authorization, privacy, and incident-system retrieval hooks.
- Tenant ED flow playbook, split-flow and fast-track rules, boarding thresholds, ambulance offload thresholds, LWBS thresholds, tie-break rules, command RACI, and approval matrix.
- Jurisdiction-specific EMTALA, privacy, behavioral-health, consent, transfer, and security procedures.
- Payer, plan, eligibility, referral, authorization, utilization, coding, and post-ED placement rules where they affect flow blockers.

## Promotion Criteria

Promote this spec pack to a retained implementation only after repeated usage shows common demand, tenant adapters stabilize, ED flow outputs pass human-reviewed regression tests, and a separate PR commits the trusted runtime with updated deployment and readiness evidence.
