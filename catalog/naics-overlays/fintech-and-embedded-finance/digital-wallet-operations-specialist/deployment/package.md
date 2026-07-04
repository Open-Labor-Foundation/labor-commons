# Deployment Package

## Runtime Model

- Deployment model: versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, retrieval of wallet operations
  inputs, audit logging, and escalation to fraud, disputes, security, sponsor
  bank, compliance, engineering, and approval owners.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant wallet product model and program taxonomy
  - sponsor-bank, processor, token-program, and card-network dependency map
  - system-of-record precedence for wallet platform, token service provider,
    processor, ledger, IAM, and change-management systems
  - wallet incident severity rules, customer-impact thresholds, and escalation
    ownership map
  - privileged-access approval workflow and production release approval matrix
  - change-window, testing, and rollback requirements
- Required secrets: none in the package itself; any wallet, processor,
  token-program, IAM, ticketing, or notification-system credentials remain
  orchestrator-managed.
- Optional dependencies: shared orchestration services for retrieval,
  validation logging, queue routing, partner status ingestion, and policy
  distribution.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of wallet tickets, token lifecycle
  records, processor acknowledgements, customer-impact records, or approval
  maps.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; tenant-specific sponsor-bank rules, processor constraints, card
  network obligations, and customer data are injected only at request time
  through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, lifecycle stage names, wallet product
  taxonomy, severity rules, approval checkpoints, maintenance windows, and
  retrieval hooks.
- Prohibited adaptation: widening the specialty boundary, suppressing fraud,
  disputes, security, sponsor-bank, or legal escalations, or replacing the
  authority-source baseline without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    lifecycle-state changes, and named dependency owners
  - alert on stale source review dates, repeated missing wallet-record facts,
    repeated access-approval or release-signoff requests, and repeated platform
    versus processor state conflicts
  - monitor repeated routing to fraud, disputes, security engineering, or
    sponsor-bank owners as specialization-quality signals
- Logging:
  - record source freshness checks, release version, wallet product model,
    payment rail, and whether tenant policy changed the public baseline outcome
  - record whether token, ledger, processor, IAM, and change artifacts were
    supplied and whether the specialist returned a low-confidence escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  industry-overlay specialists

## Packaging And Subscription Notes

- Target buyer: wallet operations leaders, embedded finance program owners,
  sponsor-bank operations teams, payments platform leaders, and change or
  incident operations managers.
- Target user: wallet operations analysts, incident coordinators, release
  coordinators, IAM reviewers, partner-integration managers, and orchestrator
  owners.
- Packaging model: tenant-level specialist entitlement with optional wallet
  queue review, dependency package review, and deployment-readiness validation
  support.
- Subscription model notes: the specialist supports internal or future SaaS
  guidance for wallet operations execution, but it does not make final legal,
  fraud, disputes, reimbursement, security-approval, or production-release
  commitments.

## Materialization Notes

- `commons-crew` would need task metadata covering wallet product model,
  affected payment rail, current lifecycle state, dependency graph, adjacent
  lane map, and allowed decision types.
- Runtime retrieval must supply tenant facts covering sponsor-bank context,
  processor and token-program ownership, system-of-record precedence,
  customer-impact rules, privileged-access approval thresholds, and release
  owner mappings.
- Regulated-lane caveats: public sources establish the baseline, but tenant,
  sponsor-bank, processor, and network controls may narrow allowable actions;
  the runtime must preserve those stricter controls without pretending they are
  public-law defaults.
- Refusal or orchestrator return is required when wallet state truth cannot be
  established, controlling tenant policy is missing, or the request implies
  fraud, disputes, reimbursement, legal, security-approval, or engineering
  authority outside the lane.

## Promotion And Rollback

- This package is validated as a spec pack and may be deployed in
  `specification-based` mode immediately after validation.
  package requires a separate committed implementation with observed usage,
  stable retrieval hooks, operator review, and repeated validation evidence.
- Promotion should occur only if this overlay becomes common enough to justify a
  maintained built runtime with tenant-safe connectors, stable wallet
  retrievals, and explicit approval controls.
- Roll back by restoring the previous validated spec pack and re-running the
  local audit and repository validation steps before reactivation.
