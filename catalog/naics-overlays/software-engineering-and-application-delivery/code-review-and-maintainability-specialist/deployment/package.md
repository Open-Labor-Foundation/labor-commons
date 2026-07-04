# Deployment Package

## Runtime Model

- Deployment model: validated spec pack consumed by an orchestrator or future
  materializer from
  `catalog/software-engineering-and-application-delivery/code-review-and-maintainability-specialist/`.
- Runtime strategy: `specification-based`. The spec pack is canonical; any generated
  implementation is a disposable materialization artifact unless later promoted.
- Trusted build posture: no retained implementation is claimed for this package.
  Promotion requires repeated high-volume use, stable tenant-independent
  behavior, passing evaluation coverage, human review, monitoring, and rollback
  evidence.
- Required runtime metadata: specialty boundary, supported tasks, output shapes,
  authority sources, tenant facts, systems of record, retrieval dependencies,
  refusal triggers, adjacent specialist map, functionality map, and evaluation
  scenario IDs.

## Tenant Inputs

- Tenant review policy, severity model, merge gates, code-owner and approval
  matrix, finding closure rules, source-of-truth hierarchy, confidentiality
  terms, retention rules, and approved recipients.
- Repository, PR or merge request, requirements, design, API contract, CI/CD,
  test report, coverage, artifact, defect, incident, document, and client
  commitment systems.
- Runtime and framework versions for stack-specific guidance. Public Git,
  GitHub, Google engineering practices, ISO, NIST, OWASP, CWE, OpenAPI, IETF,
  Python, Node.js, and ACM sources are only the public baseline.

## Isolation

- Tenant-specific records remain isolated through approved retrieval systems.
- Generated outputs should reference evidence locations, file paths, diff hunks,
  run IDs, defect IDs, and sanitized summaries rather than embedding restricted
  logs, secrets, production data, client artifacts, source fragments, or
  credentials.
- Tenant policy overlays may narrow review gates, severity language, or
  confidentiality handling, but may not remove refusal triggers, approval
  boundaries, or evidence traceability requirements.
- Cross-tenant sharing of tenant-specific evidence, examples, or outputs is not
  allowed.

## Monitoring And Logging

- Track scenario pass rate, finding severity distribution, confidence
  distribution, boundary refusal rate, orchestrator returns, low-confidence
  escalations, unresolved evidence gaps, stale source events, confidentiality
  conflicts, and cases requiring human approval.
- Log source baseline version, source freshness state, tenant policy references,
  systems queried, evidence IDs, assumptions, confidence state, output shape,
  owner routing, and approval dependencies.
- Do not log raw secrets, production data, customer data, restricted source,
  vulnerability details, or confidential client evidence in generated outputs
  or shared telemetry.

## Rollback

- Roll back by reverting the catalog package revision to the last audited
  manifest, scenarios, results, functionality map, research summary, readiness
  evidence, deployment notes.
- Disable tenant policy overlays or generated materializations first if a
  regression appears isolated to tenant adaptation.
- Suspend validated use when the scenario pass rate falls below 0.90, a
  blocking source ambiguity is discovered, a confidentiality boundary is
  violated, or a trusted-build materialization claims approval, merge, release,
  implementation, or security authority not in the spec.
- Re-enable only after the evidence bundle is refreshed, validation passes, and
  human verification is recorded.

## Operational Boundaries

- The specialist may recommend review findings, requested changes,
  maintainability refactors, test additions, hold recommendations, finding
  escalation, and evidence requirements.
- The specialist may not approve merges, clear holds, close findings, approve
  releases, bypass controls, publish client evidence, implement code, execute
  infrastructure, perform incident command, decide legal/privacy obligations,
  accept security risk, or sign contracts.
- Requests crossing those boundaries must return to the orchestrator with the
  evidence packet and owner route.
