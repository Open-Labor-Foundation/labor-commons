# Deployment Package

## Runtime

- Target runtime: orchestrator service component used by specialist routing and answer orchestration layers.
- Deployment model: non-code guidance module with explicit tenant-aware policy templates.
- Required secrets: none for baseline recommendations.
- Required configuration: tenant identifier, jurisdiction/compliance profile, allowed admin domains, escalation contact list.

## Isolation

- Tenant boundary:
  - No cross-tenant policy inheritance by default.
  - Each recommendation references tenant context (directory tenant, workspace tenant, device-management tenant).
- Knowledge boundary:
  - Use only tenant-provided artifacts and cited public sources.
  - No inferred credentials, passwords, or hidden role capabilities.
- Adaptation policy:
  - Allowed adaptation types: configuration overrides, approved rule tuning, and approved workflow customization.
  - Tenant-specific role mappings must remain explicit and auditable.

## Operations

- Monitoring:
  - Track recommendation confidence score distribution and out-of-scope rejection rate.
  - Track privilege-activation and approval coverage for JIT-style paths.
  - Alert on missing artifact requests and unresolved escalations.
- Logging:
  - Persist request context, source IDs used, recommendations, uncertainty tags, and escalation paths.
  - Persist boundaries/reroutes and rollback instructions used for each output.
- Rollback path:
  - Disable specialist output flow for tenant, revert to baseline orchestrator routing, and escalate to human review.
  - Preserve review artifacts and evidence links for audit.
- Support owner:
  - Security specialist on rotation with documented escalation to platform/identity operator teams.

## Tenant Adaptation and Constraints

- Target buyer/user profile:
  - Mid-market to enterprise security operations, identity teams, device-management teams, and managed service desks.
- Tenant adaptation constraints:
  - Privileged role maps are tenant-specific and not globally reusable.
  - Any broad role simplification is rejected until tenant risk owner confirms equivalent control objectives.
- Rollback/containment:
  - Maintain a reversible change plan for every recommendation package, including a rollback owner and deadline.

## Resilience and Recovery

- If required source baselines are stale, conflict, or unavailable:
  - Mark confidence as limited.
  - Return escalation requirement and avoid high-confidence privilege actions.
- If telemetry is degraded:
  - Switch to reduced-confidence mode.
  - Emit explicit evidence gaps and hold on final recommendations.

## Validation evidence Readiness

- Packaging notes:
  - Bundle as a specialist advisory module with quarterly source refresh, scenario reruns, and evidence retention requirements.
- Subscription model notes:
  - Starter: baseline package and quarterly source refresh.
  - Advanced: custom scenario packs and tenant-specific onboarding support.
  - Enterprise: evidence package audits, rollout handoff playbooks, and support-level monitoring.
- Proof points:
  - 13 validated scenarios with pass rate 1.00 and strict profile.
  - Explicit out-of-scope and escalation behaviors implemented across scenarios 9–10.
  - validated readiness evidence in `readiness/evidence.json` and `readiness/release.md`.

## Go-to-Market Gaps and Assumptions

- Gap 1: No external benchmarking yet compares recommendation quality versus adjacent PAM vendors.
- Gap 2: Tenant telemetry integration connectors are assumption-based and must be validated by deployment teams.
- Gap 3: Managed service KPI dashboards are planned, not yet shipped.
