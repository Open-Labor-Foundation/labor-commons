# Deployment Package

## Runtime Model

- Deployment model: versioned validated spec pack loaded by an orchestrator or future materializer from the manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime strategy: `specification-based`. The package is the canonical definition and does not claim a trusted retained implementation.
- Runtime expectation: read-only specialist that produces bounded cybersecurity compliance readiness guidance while the orchestrator owns tenant routing, credentials, source retrieval, human approvals, and adjacent-specialist handoffs.
- Required secrets: none for the package itself. Tenant deployments may require tenant-scoped credentials for GRC, policy, evidence, document, ticketing, architecture, vendor risk, customer assurance, or regulator response systems.
- Required configuration: manifest path, approved source baseline, source refresh policy, tenant obligation inventory, regulated-sector overlays, evidence retention settings, escalation contacts, refusal-routing targets, and logging policy.

## Materialization Requirements

- Load task metadata, boundary metadata, supported output shapes, authority sources, source decay rules, tenant-required facts, adjacent specialists, refusal triggers, and orchestrator-return rules before responding.
- Require tenant-supplied or retrieved regulatory driver, jurisdiction or sector context, product or service scope, system boundary, data classification, evidence lineage, control ownership, inherited-control terms, exception status, and authority owner before confident guidance.
- Preserve public-source baseline assumptions and record tenant-specific overrides, source conflicts, evidence gaps, and low-confidence conditions explicitly.
- Enforce refusal for legal advice, privacy-law conclusions, formal audit attestation, certification, definitive compliance determinations, penetration testing execution, incident response execution, broad architecture ownership, generic control mapping, and unsupported customer or regulator claims.

## Tenant Isolation And Adaptation

- Tenant isolation: no cross-tenant sharing of regulatory scope notes, obligation inventories, customer questionnaires, SSPs, POA&Ms, audit findings, policies, evidence artifacts, inherited-control proof, contracts, or regulator requests.
- Knowledge boundary: public baseline guidance in `manifest.yaml` is reusable across tenants; all tenant-specific facts, contracts, systems, evidence, policy context, and responses remain tenant-local.
- Allowed adaptation: tenant-local terminology, regulated-sector overlays, retrieval connectors, escalation contacts, evidence templates, output formatting, and approved prompt or policy context.
- Prohibited adaptation: widening the lane into legal advice, privacy-law ownership, penetration testing, incident response, formal attestation, definitive compliance decisions, generic mapping without a regulatory driver, or broad architecture ownership.

## Monitoring And Logging

- Log boundary decisions, public source IDs, source freshness checks, tenant evidence IDs, assumptions, missing facts, evidence gaps, inherited-control caveats, compensating-control rationale, low-confidence escalations, and refusal or handoff decisions.
- Log release version linkage across `manifest.yaml`, `evaluation/results.json`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, and `readiness/evidence.json`.
- Monitor for stale authority sources, repeated low-confidence applicability questions, repeated inherited-control proof gaps, repeated requests for legal or attestation wording, boundary drift into adjacent specialties, and tenant overlay conflicts.
- Do not log secrets, raw sensitive evidence, customer confidential material, regulated data, or personal data unless the tenant logging policy explicitly allows that storage.

## Rollback Path

- Immediate rollback: disable the current specialist release and route requests to conservative orchestrator handling or human security compliance review.
- Artifact rollback: restore the prior validated package version from version control and rerun local repository validation before re-enabling.
- Adaptation rollback: revert tenant-local overlays, retrieval connectors, source overrides, escalation targets, or output templates without altering the shared public baseline.
- Trusted-build rollback: not applicable for this release because no retained implementation is claimed.

## Promotion Criteria

- Keep runtime as `specification-based` by default.
- Consider retaining a generated implementation only after sustained tenant demand shows this lane is called frequently enough to justify in-repo implementation storage.
- Promotion requires at least two release cycles with stable pass rate, no boundary regressions, complete source refresh, low escalation false-positive rate, tenant isolation review, logging review, and rollback validation.
- Any promoted implementation must remain traceable to this spec pack and carry separate evidence for security, tenant isolation, source freshness, materialization safety, and regression performance.

## Operational Notes

- Health checks should confirm manifest load success, required artifact presence, JSON parseability, source review date, runtime strategy, and internal consistency across readiness and evaluation artifacts.
- Safe startup depends on the reviewed local package. External retrieval improves tenant specificity but is not required to identify boundary refusals or missing-fact escalations.
- Support owner: repository owner or delegated catalog maintainer with authority to pause releases and review scope-boundary disputes.
