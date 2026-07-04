# Deployment Package

## Runtime Model

- Target runtime: `specification-based` catalog package. A runtime materializer may generate a disposable implementation on demand from this pack, but this package does not claim retained retained implementation ownership.
- Deployment model: Load the manifest, research summary, functionality map, evaluation evidence, readiness evidence, deployment notes, and commercialization notes as the canonical package definition.
- Runtime boundary: The materialized lane provides mobile application engineering guidance and planning recommendations. It must not execute deployments, submit apps, rotate secrets, approve releases, accept risk, negotiate contracts, or act as app store account owner.
- Required configuration: tenant allowlist, source freshness policy, evidence retrieval connectors, output retention rules, refusal reason codes, and approval-owner routing table.
- Required secrets: none for the spec pack. Runtime integrations may require read-scoped repository, CI, telemetry, App Store Connect, or Google Play evidence access, but signing keys, provisioning secrets, keystores, and production credentials must not be exposed to the specialist unless a separate privileged workflow explicitly authorizes it.

## Materialization Requirements

- Load task metadata: agent slug, queue slug, supported tasks, output shapes, specialty boundary, adjacent specialists, hard refusal triggers, orchestrator return rules, runtime posture, validation profile, and source baseline.
- Retrieve tenant facts: feature requirements, acceptance criteria, target platforms, stack versions, repository paths, architecture, API contracts, dependency lists, build logs, signing/provisioning state, test reports, crash/ANR telemetry, store feedback, release checklist, rollout plan, capacity, priority rule, change calendar, support owner, and approval owner.
- Retrieve client-delivery facts when relevant: statement of work, workpaper index, confidentiality restrictions, external-facing approval flow, client acceptance owner, and record retention policy.
- Apply source freshness checks before implementation-sensitive, policy-sensitive, security-sensitive, or release-sensitive claims.
- Emit structured outputs with evidence links, assumptions, confidence, constraints, owner handoffs, refusal/escalation reason codes, and recommendation-versus-approval caveats.

## Isolation And Adaptation

- Tenant isolation: repository content, build logs, signing metadata, store records, crash telemetry, screenshots, workpapers, client commitments, and generated artifacts must remain scoped to the tenant and engagement.
- Cross-tenant sharing: prohibited unless the output is sanitized to pattern-level guidance and rights are documented.
- Allowed adaptation: tenant retrieval configuration, tenant stack-specific official source selection, tenant terminology, output templates, and tenant-approved quality, privacy, release, schedule, and allocation thresholds.
- Prohibited adaptation: widening into product strategy, backend ownership, cloud/IAM/platform operations, procurement, HR, legal, contractual signoff, security execution, app store account authority, release approval, or cross-tenant evidence reuse.

## Operations

- Monitoring:
  - Track source freshness, scenario pass trend, refusal rate, low-confidence escalation rate, missing-evidence categories, capacity/priority conflict rate, and adjacent-specialist routing rate.
  - Track materialized-output evidence completeness, tenant isolation checks, approval-owner capture, and recommendation-versus-approval caveat presence.
- Logging:
  - Log request scope verdict, required sources, retrieved evidence identifiers, assumptions, confidence, scenario family, output type, refusal or escalation reason codes, and human verification markers.
  - Do not log secrets, signing keys, keystore material, provisioning secrets, confidential client content, or raw telemetry outside approved evidence storage.
- Rollback path:
  - Revert this package directory to the previous release version, deactivate `v0.3.0` in the catalog, and restore the prior package pointer.
  - Re-run JSON validation and package scenario evidence checks after rollback.
  - Revoke any materializer cache built from the rolled-back package and regenerate from the restored spec if needed.
- Support owner: mobile engineering catalog owner with orchestrator escalation to release engineering, CI/CD, secure software development, backend/API, platform, legal/privacy, procurement, or app store account owners as required.

## Trusted Build Promotion

- Current state: no retained retained implementation is justified.
- Promotion threshold: repeated production demand must show this lane is called frequently enough that retaining a generated implementation in-repo reduces operational cost without increasing boundary risk.
- Promotion evidence required: full scenario regression pass, source refresh audit, tenant isolation test, security/privacy review, store-policy refresh, materializer logging review, approval-flow test, rollback drill, and human release approval.
- Default posture: generated implementations remain disposable artifacts; this spec pack remains the source of truth.
