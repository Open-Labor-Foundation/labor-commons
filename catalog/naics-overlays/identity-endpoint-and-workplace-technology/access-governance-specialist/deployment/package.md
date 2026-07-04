# Deployment Package

## Runtime

- Target runtime: orchestrator-routed specialist module used by advisory, review, and evidence-packaging workflows.
- Deployment model: versioned prompt and retrieval bundle with manifest-governed boundaries and evidence artifacts deployed per tenant.
- Required secrets: none for the baseline package.
- Required configuration: tenant identifier, approved source refresh window, escalation contacts, reviewer roles, allowed identity platforms, and fallback mode.
- Optional dependencies: shared meta-agent endpoints for best-practice curation, evaluation normalization, readiness consistency review, deployment normalization, commercialization review, source-policy normalization, boundary review, and scaffold review.

## Isolation

- Tenant boundary:
  - No cross-tenant access-package or reviewer-policy reuse by default.
  - Each recommendation must reference the tenant’s identity platforms, reviewer model, and approval boundaries explicitly.
- Knowledge boundary:
  - Use only tenant-provided artifacts plus cited public authoritative sources from the manifest.
  - Do not infer undocumented custom-role semantics, hidden approval paths, or privileged capabilities.
- Adaptation policy:
  - Allowed adaptation types: configuration overrides, approved retrieval augmentation, and approved tuning of reviewer-routing or evidence thresholds.
  - Tenant-specific reviewer chains, exception windows, and catalog naming may vary, but the public specialty boundary and refusal behavior must remain unchanged.

## Operations

- Monitoring:
  - Track recommendation confidence distribution, out-of-scope rejection rate, and low-confidence escalation volume.
  - Track repeated evidence gaps such as missing owner mappings, stale reviews, and undocumented custom roles.
  - Track source freshness age and fallback-mode activations when shared meta-agents are unavailable or stale.
- Logging:
  - Persist request context, cited source IDs, assumptions, boundary decisions, and escalation outputs for every recommendation.
  - Persist human verification state, readiness review outcomes, and release-version transitions.
  - Persist rollback decisions, tenant adaptation overrides, and shared-meta-agent fallback events.
- Rollback path:
  - Disable rollout of the current specialist version for the tenant and revert routing to the prior validated bundle.
  - Preserve the prior manifest and evidence package for immediate redeploy if source freshness, scenario coverage, or readiness claims are reopened.
  - Require human review before re-enabling a downgraded or replacement access-governance package.
- Support owner:
  - Identity governance or workplace security operations owner with escalation to adjacent specialists for PAM, identity integration, or endpoint-delivery work.

## Tenant Adaptation and Constraints

- Target buyer profile:
  - Mid-market and enterprise identity governance leaders, workplace platform owners, and managed service providers offering identity governance reviews.
- Target user profile:
  - Identity engineers, security reviewers, workplace administrators, and service-delivery leads who need bounded access-governance guidance.
- Tenant adaptation constraints:
  - Reviewer assignments, approver hierarchies, and access-catalog naming are tenant-specific and cannot be assumed from public sources.
  - Device-aware access guidance is limited to governance tradeoffs; device configuration implementation must remain with endpoint specialists.
  - Any request that turns into JIT elevation, break-glass mechanism design, or SSO or SCIM implementation is routed out of scope.

## Resilience and Recovery

- Shared meta-agent fallback:
  - Do not block startup on shared-corpus retrieval.
  - Continue with the local reviewed baseline when shared meta-agents are unavailable, stale, or low-confidence.
  - Record the fallback activation and avoid unsupported new claims until normalization is rerun.
- Source-baseline degradation:
  - If authoritative sources age past review windows or conflict materially, mark confidence as limited and require human verification before recommendation release.
- Evidence degradation:
  - If tenant artifacts are incomplete, conflicting, or stale, shift to low-confidence mode and emit a minimum-required-artifacts checklist instead of a definitive action plan.

## Validation evidence Readiness

- Specialist-owned deployment proof:
  - The package ships with a narrow access-governance boundary, a verified official source baseline, 13 scenario definitions, and evidence-backed readiness artifacts.
- Delegated deployment normalization:
  - Shared meta-agents normalize deployment-package phrasing and readiness packaging only after the local baseline is complete and must never replace specialist-owned evidence.
- Packaging notes:
  - Deliver as a validated specialist bundle under `catalog/identity-endpoint-and-workplace-technology/access-governance-specialist/`.
  - Include manifest, evaluation suite, results, readiness evidence, release review, deployment notes as the minimum deployable package.
- Subscription model notes:
  - Starter: baseline specialist package with quarterly source refresh and annual package review.
  - Growth: tenant-specific evaluation refresh and access-review evidence alignment support.
  - Enterprise: multi-tenant governance advisory with rollout playbooks, readiness review refresh, and enhanced monitoring expectations.
- Commercialization proof points:
  - 13 validated scenarios with a strict profile and 1.00 pass rate against a 0.92 threshold.
  - Explicit rejection of adjacent specialties including PAM mechanism design, identity integration delivery, and endpoint operations.
  - Documented rollback, tenant isolation, logging, monitoring, and shared-meta-agent fallback behavior.

## Go-To-Market Gaps and Assumptions

- Gap 1: No external benchmark yet compares this specialist’s review quality against commercial identity-governance advisory offerings.
- Gap 2: Tenant telemetry and review-completion dashboard integrations remain assumption-based and must be validated by deployment teams.
- Gap 3: Customer-facing collateral for non-identity stakeholders such as HR operations and workplace support leads is not yet published.
