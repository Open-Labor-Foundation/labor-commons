# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route accounting services analytics work into a spec-first specialist with retrieval, confidentiality, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, GL, close management, reconciliation, workflow, practice-management, document-management, client-collaboration, quality review, and BI credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, GL, close management, reconciliation, workflow, practice-management, workpaper, engagement-management, client-collaboration, quality review, and BI systems
  - escalation targets for legal, editorial, quality assurance, delivery management, account, audit, tax, advisory, bookkeeping, client accounting services, and compliance reporting owners
  - tenant metric dictionaries, source-precedence rules, engagement-scope boundaries, confidentiality rules, review-status definitions, and publication approval matrices

## Isolation

- Tenant boundary: no cross-tenant sharing of GL detail, reconciliations, close checklists, workpapers, exception logs, PBC trackers, payroll or banking data, taxpayer data, engagement records, client communications, or reporting outputs.
- Knowledge boundary: AICPA, PCAOB, SEC, APQC, IRS, and FTC public baselines are shared; client contracts, statements of work, KPI definitions, source-precedence policies, approval chains, and workpaper repositories are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, metric-definition overlays, artifact templates, system connector mappings, audience-specific output wrappers, and client or service-model reporting cadence settings
  - prohibited: widening the lane into accounting treatment, tax advice, audit or attestation conclusions, legal advice, financial approval, contractual commitment, policy override, or direct client-facing disclosure signoff

## Operations

- Monitoring:
  - log metric-definition choices, denominator overrides, blocked prerequisites, source conflicts, workpaper gaps, stale refreshes, confidentiality escalations, approval blockers, advisory or attestation boundary cases, and disclosure-risk notes
  - alert on repeated attempts to publish unsigned close metrics, expose restricted client records, treat descriptive trends as causal proof, or bypass source reconciliation
  - monitor for requests that incorrectly seek direct approval, professional judgment, or client communication authority from the lane
- Logging:
  - record release version, tenant assumptions, client/entity/period scope, engagement scope, metric definitions used, source lineage, refresh timestamps, confidence posture, confidentiality state, and systems of record consulted
  - record whether the request involved ambiguous definitions, missing facts, workpaper gaps, cross-system conflict, confidentiality limits, unsupported claims, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry accounting-tax-and-audit-services --agent accounting-services-analytics-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed accounting services analytics specialist for close-quality analytics, reconciliation and exception reporting, source reconciliation, metric caveat handling, confidentiality-aware delivery, and signoff-safe escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying client, entity, period, basis of accounting, business unit, service model, reporting cadence, requested metrics, and intended audience
  - boundary metadata identifying legal, editorial, quality assurance, delivery management, account, audit, tax, advisory, bookkeeping, client accounting services, and compliance reporting owners
  - retrieval dependencies for ERP, GL, close management, reconciliation, workflow, practice-management, workpaper, engagement-management, client-collaboration, quality review, and BI records
  - tenant overlays for metric definitions, source precedence, engagement scope, confidentiality restrictions, client commitments, review-status definitions, approval flow, and publication criteria
- Regulated-lane caveats:
  - public AICPA, PCAOB, SEC, APQC, IRS, and FTC sources clarify professional, evidence, metric, process, and confidentiality baselines but do not replace tenant engagement letters, professional review, or client authorization
  - runtime must refuse or return to orchestrator whenever accounting treatment, tax advice, legal advice, audit or attestation conclusions, financial approval, contractual signoff, client rights, or professional judgment determine the answer
  - outputs must not disclose confidential client, taxpayer, payroll, banking, or workpaper information outside authorized engagement and audience boundaries
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, and scenario coverage.
