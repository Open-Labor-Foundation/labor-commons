# Deployment Package

## Runtime Model

- Deployment model: Versioned specialist package with immutable manifest,
  evaluation artifacts, readiness evidence, deployment notes, and marketing
  notes.
- Runtime expectation: Read-only specialist guidance package loaded by an
  orchestrator that controls tenant routing, evidence retrieval, audit logging,
  and escalation to identity, product-specific platform, legal, procurement,
  and engineering specialists when requests cross the boundary.
- Required configuration:
  - release version
  - approved source freshness policy
  - tenant-specific product catalog, admin groups, license SKUs, and feature
    labels
  - approved connectors for admin logs, release notices, and configuration
    exports
  - escalation targets for identity-platform integration, product-specific
    platform specialists, procurement, and integration engineering
  - delegated meta-agent timeout and staleness thresholds
- Required secrets: none in the package itself; any SaaS tenant credentials,
  log connectors, API tokens, or support-system access remain
  orchestrator-managed.
- Optional dependencies: shared meta-agent endpoints for best-practice
  curation, evaluation normalization, readiness consistency checks, deployment
  normalization, commercialization review, source-policy review, boundary
  review, and scaffold validation.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of license exports, admin actions,
  audit logs, app approval history, release notes marked for customer impact,
  or support traces.
- Knowledge boundary: the public authority baseline in `manifest.yaml` is
  shared; customer-specific SaaS evidence is injected only at request time
  through orchestrator-controlled access.
- Allowed adaptation: tenant terminology, admin-group names, license bundles,
  approved app lists, release calendars, risk thresholds, and confidence
  thresholds.
- Prohibited adaptation: widening the specialty boundary, suppressing identity
  or product-specific escalations, or replacing the authority-source baseline
  without a reviewed release.

## Operations

- Monitoring:
  - log dispatch decisions, boundary rejections, low-confidence escalations,
    and fallback activation
  - alert on stale source review dates, repeated app-approval conflicts,
    repeated licensing drift, repeated privileged-role changes, and delegated
    meta-agent timeout or staleness events
  - monitor repeated requests for SSO design, CRM or ERP ownership, or custom
    automation coding as routing-quality signals
- Logging:
  - record source freshness checks, release version, tenant scope, assumptions,
    evidence reviewed, and whether local baseline or shared meta-agent
    augmentation was used
  - record whether admin exports, audit logs, app requests, or service notices
    were supplied and whether the specialist returned a low-confidence
    escalation
- Rollback path:
  - disable the current specialist release
  - route requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local repository validation before re-enabling
- Support owner: repository owner or designated catalog release steward for
  business applications and enterprise platforms specialists

## Shared Meta-Agent Contracts

- Startup behavior: load the specialist-owned baseline first, then attempt
  shared meta-agent enrichment only when available and fresh.
- If a shared meta-agent is unavailable: continue with the local baseline
  package and mark broader normalization as deferred.
- If a shared meta-agent is stale: block any claim that depends on fresh
  delegated normalization and stay within the local reviewed source set.
- If a shared meta-agent conflicts with the boundary: prefer this manifest and
  route the ambiguous work back to the orchestrator.

## Operational Notes

- Health checks should confirm manifest parse or load success and consistency
  between `manifest.yaml`, `evaluation/results.json`, and
  `readiness/evidence.json`.
- Promotion requires the validated evidence bundle to remain internally
  consistent and for local validation scripts to pass.
- Monitoring alerts should trigger if fallback mode persists across repeated
  runs or if source review dates exceed refresh intervals.
- Runtime prompts should remind downstream systems that SaaS administration
  guidance covers tenant roles, licenses, app governance, audit review, release
  readiness, and bounded troubleshooting only and does not replace identity
  architecture, domain-specific platform ownership, procurement, legal review,
  or engineering implementation.
