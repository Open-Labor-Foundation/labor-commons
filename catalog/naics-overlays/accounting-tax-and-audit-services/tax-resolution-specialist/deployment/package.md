# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route tax-resolution work into a spec-first specialist with retrieval, confidentiality, authorization, deadline, and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant tax notice, transcript retrieval, authority portal, document-management, workflow, CRM, payment, and quality-review credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for tax notice management, IRS e-services or transcript retrieval, state authority portals, workflow, document-management, workpaper, correspondence, CRM, payment, billing, and quality-review systems
  - escalation targets for tax advisory, authorized representative, legal, quality assurance, delivery management, account, client accounting services, and tax operations owners
  - tenant engagement scope, Form 2848 or equivalent authorization rules, state jurisdiction mappings, client approval requirements, confidentiality rules, response templates, deadline policy, and source-precedence rules

## Isolation

- Tenant boundary: no cross-tenant sharing of taxpayer names, SSNs, EINs, notices, transcripts, returns, workpapers, payment confirmations, correspondence logs, authority communications, or client deliverables.
- Knowledge boundary: IRS, Treasury Circular 230, AICPA, taxpayer-rights, and taxpayer-data safeguard baselines are shared; client contracts, authorization files, response templates, reviewer instructions, approval matrices, case repositories, and authority records are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, notice-type routing tables, state-authority mappings, system connector mappings, output wrappers, deadline-calculation settings, and approved communication templates
  - prohibited: widening the lane into tax advice, written tax advice, tax-position approval, legal interpretation, taxpayer representation, settlement negotiation, financial approval, policy override, or client-facing signoff

## Operations

- Monitoring:
  - log notice classifications, tax periods, deadlines, source lineage, transcript refresh dates, authorization status, blocked prerequisites, source conflicts, missing workpapers, confidentiality escalations, approval blockers, settlement-boundary cases, and professional-judgment escalations
  - alert on repeated attempts to contact authorities without authorization, publish unsupported notice responses, disclose taxpayer records, promise payment-plan or settlement outcomes, or bypass reviewer approval
  - monitor repeated duplicate notices, missed authority deadlines, unresolved transcript conflicts, and high-frequency advisory escalations as signals for workflow tuning
- Logging:
  - record release version, tenant assumptions, taxpayer/entity scope, jurisdiction, notice number, tax period, response due date, authorization state, source records consulted, confidence posture, confidentiality state, and escalation owner
  - record whether the request involved missing facts, workpaper gaps, transcript conflicts, payment disputes, deadline risk, client-rights concerns, confidentiality limits, unsupported settlement asks, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry accounting-tax-and-audit-services --agent tax-resolution-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed tax-resolution specialist for tax notice triage, authority correspondence support, payment-plan intake, protest or response package preparation, deadline posture, confidentiality-aware delivery, and professional-boundary escalation.
- Materialization requirements for `commons-crew`:
  - task metadata identifying taxpayer/entity, jurisdiction, tax period, notice number, notice type, response due date, balance, penalty, interest, requested resolution, and intended audience
  - boundary metadata identifying tax advisory, authorized representative, legal, QA, delivery management, account, client accounting services, and tax operations owners
  - retrieval dependencies for notice management, transcript retrieval, state authority portals, tax workflow, document-management, workpaper, correspondence, CRM, payment, billing, and quality-review records
  - tenant overlays for engagement scope, authorization rules, state jurisdiction procedures, client commitments, confidentiality restrictions, response templates, source precedence, review status, approval flow, deadline policy, and publication criteria
- Regulated-lane caveats:
  - public IRS, Treasury Circular 230, AICPA, taxpayer-rights, and taxpayer-data sources clarify workflow and boundary baselines but do not replace tenant engagement letters, authorization records, professional review, or client approval
  - runtime must refuse or return to orchestrator whenever tax advice, written tax advice, tax-position decisions, legal interpretation, settlement negotiation, taxpayer representation, financial approval, client rights, or professional judgment determine the answer
  - outputs must not disclose taxpayer data, notices, transcripts, returns, identifiers, workpapers, or authority communications outside authorized engagement and audience boundaries
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, functionality coverage, scenario coverage, and no retained-implementation runtime claim.
