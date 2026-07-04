# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Canonical source: this spec pack under `catalog/software-engineering-and-application-delivery/frontend-engineering-specialist/`.
- Built runtime posture: no trusted built implementation is claimed or retained in this refresh.
- Materialization mode: future runtime materializers may generate a disposable frontend specialist implementation from the manifest, research summary, functionality map, scenarios, and readiness evidence.
- Target execution environment for a generated implementation: tenant-approved agent runtime with repository, design-system, CI, test, telemetry, and policy retrieval hooks.

## Required Runtime Metadata

- Specialist slug and queue slug.
- Supported tasks, hard refusal triggers, orchestrator return rules, adjacent specialists, and required output shapes.
- Source baseline version, review dates, refresh intervals, and decay policies.
- Scenario and ability identifiers for coverage checks.
- Tenant isolation and confidentiality rules.
- Reason codes for in-scope acceptance, low-confidence escalation, refusal, adjacent routing, and materialization-blocked states.

## Tenant Retrieval Requirements

- Feature request, user story, acceptance criteria, UX constraints, and requested authority.
- Frontend stack, exact framework/runtime/build/test tool versions, package manager, rendering mode, browser matrix, and official tenant stack documentation.
- Source repository, component ownership, design files, design tokens, component library rules, content and localization records, and responsive breakpoints.
- Accessibility target, test policy, performance budget, web-vitals baseline, observability requirements, source-map policy, release gate, and rollback rule.
- API contract summary, data-shape assumptions, loading/error-state rules, privacy constraints, and browser storage policy.
- Client statement of work, confidentiality constraints, design rights, approval workflow, quality policy, and record retention rules.

## Tenant Isolation

- Keep repositories, source maps, designs, client workpapers, telemetry, policies, and generated outputs scoped to the tenant and engagement.
- Do not reuse client implementation details, design assets, code excerpts, or review language across tenants unless an authorized rights record permits it.
- Reusable patterns must be sanitized to remove tenant-specific identifiers, unreleased product facts, client commitments, source-map details, and confidential architecture or design artifacts.

## Monitoring And Logging

- Log source baseline version, tenant source versions, stale-source checks, systems of record used, assumptions, and unresolved ambiguity.
- Log reason codes for every refusal, low-confidence escalation, adjacent handoff, or approval-boundary stop.
- Capture validation evidence referenced by generated outputs: build logs, lint output, test reports, browser compatibility evidence, accessibility checks, performance telemetry, and release handoff records.
- Monitor scenario pass-rate drift, repeated boundary refusals, stale source usage, missing tenant facts, confidentiality conflicts, and user attempts to request privileged deployment or signoff.

## Rollback

- Revert to the previous spec-pack version if validation, source coverage, ability coverage, or readiness evidence becomes inconsistent.
- Disable validated claims by setting readiness status below `validated` if blocking source ambiguity, uncovered abilities, failed scenarios, or unreviewed regressions appear.
- Suspend disposable runtime materialization if tenant isolation, confidentiality handling, or refusal routing fails.
- Re-run evaluation scenarios, JSON parse checks, repository structure checks, and human verification before restoring validated status.

## Promotion Criteria

- Keep runtime `specification-based` unless production telemetry shows this lane is called frequently enough to justify long-term in-repo built runtime ownership.
- Trusted-build promotion requires repeated demand evidence, full scenario regression evidence, source refresh audit, tenant isolation test evidence, security/privacy review, accessibility evidence review, and human release approval.
- Promotion must document why a retained implementation is safer or more economical than disposable materialization and must not weaken the spec pack as the canonical source of truth.

## Deployment Caveats

- The specialist can recommend frontend readiness, but authorized release owners retain final deployment, rollback, and risk acceptance authority.
- Accessibility guidance is implementation support, not formal conformance certification unless an authorized audit scope is supplied.
- Security-informed frontend recommendations do not authorize penetration testing, incident response, vulnerability patch ownership, or certification.
- Backend, API, data, cloud, IAM, platform, product, legal, editorial, contractual, and commercial work must route to adjacent specialists or human reviewers.
