# Deployment Package

## Runtime

- Target runtime: spec-pack materialization through repository catalog tooling or a future `commons-crew` materializer.
- Runtime strategy: `specification-based`.
- Canonical source: this package directory, especially `manifest.yaml`, `evaluation/research-summary.json`, `evaluation/functionality-map.json`, and readiness evidence.
- retained implementation: not claimed. A generated implementation must not be retained as trusted in-repo unless future usage evidence justifies promotion.
- Required configuration for materialization:
  - queue slug, agent slug, domain family, workflow phase group, industry profile, validation profile, runtime strategy, and issue references
  - supported tasks, owned workflows, owned artifacts, systems of record, output shapes, refusal triggers, adjacent specialists, and orchestrator return rules
  - authority sources with publisher, rationale, refresh cadence, decay policy, and review date
  - tenant-specific repository, workflow, docs, issue, PR, CI, test, release, defect, confidentiality, approval, and policy retrieval settings

## Tenant Isolation

- Tenant boundary: no shared mutable runtime state across tenants.
- Data boundary: do not store secrets, raw confidential logs, proprietary PR comments, screenshots, client artifacts, or tenant policy excerpts in the public package.
- Retrieval boundary: runtime must use tenant-approved connectors and evidence stores, with least-privilege access and recipient authorization for client-delivery outputs.
- Adaptation boundary: tenant policy may narrow recommendations but must not expand the specialist into platform operations, legal/compliance, security exception, product, staffing, release approval, contractual signoff, or unrelated feature ownership.

## Deployment Model

- Deploy as a validated spec pack under `catalog/software-engineering-and-application-delivery/developer-experience-specialist/`.
- Consumers load manifest metadata first, then research, functionality map, evaluation results, readiness evidence, deployment notes, and commercialization notes.
- Runtime may remain `specification-based` indefinitely when demand does not justify a retained generated implementation.
- If a runtime materializer generates an implementation, it must:
  - preserve all refusal and orchestrator return rules
  - require tenant facts and evidence before acting
  - produce service/support disposition, stakeholder communication summary, or escalation packet as appropriate
  - record evidence references, assumptions, confidence, and source freshness
  - avoid final approval, attestation, legal, contractual, editorial, security-risk, release, or platform execution authority

## Monitoring And Logging

- Track scenario pass rate, functional ability coverage, source refresh age, unresolved ambiguity count, and no-unreviewed-regression status.
- Track tenant runtime events by disposition: resolved, blocked on evidence, escalated, refused, or returned to orchestrator.
- Track recurring support categories: onboarding blockers, local setup drift, CI feedback delay, flaky tests, documentation defects, review friction, release evidence gaps, and confidentiality conflicts.
- Log only approved evidence references and redacted summaries; do not log secrets, confidential client records, raw restricted logs, or unapproved recipient details.

## Rollout

- Promote through pull request review against `main`.
- Require local validation of JSON parseability, package artifact presence, and repository lint/test gates.
- Keep release decision tied to `readiness/release.md` and structured evidence in `readiness/evidence.json`.
- Communicate that this is a spec-first package and not a retained trusted runtime.

## Rollback

- Revert this package directory to the last validated commit from git history.
- Re-run local validation and inspect JSON artifacts before restoring a validated claim.
- If source freshness, functionality coverage, confidentiality handling, or scenario pass evidence is questioned, downgrade deployment status until the package is refreshed and revalidated.
- If a generated runtime was created downstream, disable that runtime and reload from the prior validated spec pack.

## Promotion Criteria For retained implementation

Long-term storage of a generated implementation is justified only when usage
proves the lane is called frequently enough to merit retention. Promotion
requires:

- 30-day usage evidence showing recurring materialized calls for DX support.
- Stable scenario pass rate at or above 0.90 with no unreviewed regressions.
- Human approval of generated behavior against this spec pack.
- Monitoring for disposition outcomes, refusals, escalations, source freshness, and confidentiality-safe logging.
- Rollback plan from generated runtime to specification-based package.
- Evidence that generated runtime behavior preserves the no-signoff boundary.

## Support Ownership

- Package owner: repository maintainer or delegated catalog maintainer.
- Runtime owner if materialized: tenant-approved deployment owner.
- Escalation owner: orchestrator or human reviewer when evidence, policy, confidentiality, or authority constraints block safe action.
