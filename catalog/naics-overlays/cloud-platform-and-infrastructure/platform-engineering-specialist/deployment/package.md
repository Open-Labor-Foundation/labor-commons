# Deployment Package

## Runtime Model

- Target delivery: validated spec pack.
- Runtime strategy: `specification-based`.
- Deployment model: runtime materializer consumes this package as the canonical source of truth and generates a bounded specialist on demand.
- retained implementation: not claimed.
- Built implementation retention: not justified until frequent-use evidence proves the lane is called often enough to merit a generated implementation retained in-repo.

## Materializer Requirements

`commons-crew` or a future materializer must load:

- task and boundary metadata from `manifest.yaml`
- allowed decision types, hard refusal triggers, orchestrator return rules, and adjacent specialist routing
- source baseline with publisher, authority rationale, refresh interval, decay policy, and review date
- required tenant facts, systems of record, record statuses, update permissions, retention rules, and evidence expectations
- scenario and functionality contracts from `evaluation/scenarios.md`, `evaluation/functionality-map.json`, and `evaluation/results.json`
- research constraints from `evaluation/research-summary.json`

The materializer must supply or retrieve:

- tenant platform topology, provider set, regions, and resource hierarchy records
- tenant policy, retention, access-control, approval, exception, and evidence-store rules
- IaC repositories, state backend, module registry, plan artifacts, pipeline history, drift records, and rollback records
- monitoring, logging, SLO/SLI, incident, runbook, backup, restore-test, and recovery evidence
- owner, approver, record custodian, and adjacent-specialist routing map

## Isolation And Adaptation

- Tenant boundary: one tenant context per request, with no cross-tenant evidence sharing.
- Knowledge boundary: public baseline sources remain shared; tenant facts remain tenant-scoped.
- Data boundary: do not store tenant secrets, credentials, privileged incident data, or private evidence in this spec pack.
- Adaptation policy: tenant policy can narrow, sequence, or contextualize recommendations but cannot erase public source caveats or refusal rules.
- Write authority: specification-based runtime may draft record update notes and evidence packets; official tenant record writes require explicit delegated authority, audit logging, and owner approval.

## Monitoring And Logging

Runtime deployment should record:

- source IDs, source freshness, source decay state, and source-policy conflicts
- requested output shape, scope verdict, assumptions, missing facts, and confidence state
- systems of record consulted and evidence artifacts referenced
- record update notes, evidence packet identifiers, handoff owners, and retention/access caveats
- refusals, orchestrator returns, adjacent-lane routing, and low-confidence escalation counts
- scenario-regression checks after source refresh or materializer changes

## Rollback Path

1. Disable generated runtime promotion for this lane and keep `runtime_strategy=specification-based`.
2. Revert to the prior package release if a package regression is introduced.
3. Preserve issue #1641 evidence artifacts and mark any failed scenario or source conflict as an unreviewed regression until reviewed.
4. Require human review before restoring a validated claim after rollback.

## Promotion Criteria

A retained implementation can be retained only when all criteria are met:

- frequent-use telemetry shows repeated platform engineering requests justify a retained generated implementation
- generated implementation passes this spec pack's scenario suite and repository package validation
- source baseline is refreshed and no blocking ambiguity remains
- tenant isolation, logging, record update permissions, retention controls, and refusal behavior are reviewed
- promotion PR documents rollback, monitoring, human verification, and no unreviewed regressions

## Deployment Caveats

- The specialist provides recommendations, evidence packets, record update notes, and handoff summaries, not production execution or final approval.
- Provider-specific configuration must be grounded in current provider documentation and tenant records.
- Legal, procurement, staffing, financial approval, security attestation, compliance signoff, and application architecture remain outside this lane.
- Low-confidence or conflicting-source cases must be returned to the orchestrator instead of guessed.
