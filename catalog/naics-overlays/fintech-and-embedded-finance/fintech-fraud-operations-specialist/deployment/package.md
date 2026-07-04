# Deployment Package

## Runtime Model

- Deployment model: versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, retrieval of fintech fraud case
  inputs, audit logging, and escalation to disputes, KYC, AML, compliance,
  legal, banking operations, or risk-approval specialists.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant fraud lifecycle-state taxonomy and escalation ownership map
  - sponsor-bank, processor, and program-specific policy precedence
  - reimbursement thresholds, approval checkpoints, and customer-notice rules
  - system-of-record precedence for ledger, processor, wallet, CRM, and case
    management platforms
  - delegated escalation timeout and stale-evidence thresholds
- Required secrets: none in the package itself; any banking, processor,
  case-management, CRM, identity, or compliance-system credentials remain
  orchestrator-managed.
- Optional dependencies: shared orchestration services for retrieval,
  validation logging, queue routing, and policy distribution.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of fraud case records, customer
  communications, transaction evidence, approval maps, or evaluation traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; tenant-specific sponsor-bank rules, processor operating constraints,
  and customer data are injected only at request time through
  orchestrator-controlled access.
- Allowed adaptation: tenant terminology, lifecycle stage names, fraud queue
  labels, payment-rail labels, approval checkpoints, and retrieval hooks.
- Prohibited adaptation: widening the specialty boundary, suppressing AML or
  legal escalations, or replacing the authority-source baseline without a
  reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    and lifecycle-state changes
  - alert on stale source review dates, repeated missing ledger or processor
    facts, repeated attempts to request reimbursement or SAR authority, and
    repeated policy conflicts
  - monitor repeated requests for KYC remediation, AML adjudication, or legal
    interpretation as routing-quality signals
- Logging:
  - record source freshness checks, release version, payment-rail category, and
    whether tenant policy changed the public baseline outcome
  - record whether customer-provided artifacts were supplied and whether the
    specialist returned a low-confidence escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  industry-overlay specialists

## Packaging And Subscription Notes

- Target buyer: fraud operations leaders, risk operations managers, embedded
  finance program owners, sponsor-bank operations teams, and payments-servicing
  leads.
- Target user: fraud analysts, disputes coordinators, banking operations leads,
  risk program managers, and orchestrator owners.
- Packaging model: tenant-level specialist entitlement with optional fraud queue
  review, evidence-package review, and deployment-readiness validation support.
- Subscription model notes: the specialist supports internal or future SaaS
  guidance for fraud-operations execution, but it does not make final legal,
  AML, reimbursement, underwriting, or account-action commitments.

## Materialization Notes

- `commons-crew` would need task metadata covering fraud-case type, payment
  rail, current lifecycle state, adjacent-lane map, and allowed decision types.
- Runtime retrieval must supply tenant facts covering sponsor-bank context,
  reimbursement thresholds, system-of-record precedence, customer-notice rules,
  and approval owner mappings.
- Regulated-lane caveats: public sources establish the baseline, but tenant and
  sponsor-bank controls may narrow allowable actions; the runtime must preserve
  those stricter controls without pretending they are public-law defaults.
- Refusal or orchestrator return is required when transaction truth cannot be
  established, controlling tenant policy is missing, or the request implies AML,
  SAR, legal, reimbursement, or account-action authority outside the lane.

## Promotion And Rollback

- This package is validated as a spec pack and may be deployed in
  `specification-based` mode immediately after validation.
  package requires a separate committed implementation with observed usage,
  stable retrieval hooks, operator review, and repeated validation evidence.
- Promotion should occur only if this overlay becomes common enough to justify a
  maintained built runtime with tenant-safe connectors and explicit approval
  controls.
- Roll back by restoring the previous validated spec pack and re-running the
  local audit and repository validation steps before reactivation.
