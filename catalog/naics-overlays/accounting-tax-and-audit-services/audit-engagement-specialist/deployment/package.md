# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route audit engagement coordination work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle containing the manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant audit workflow, workpaper, document request, secure file exchange, collaboration, CRM, and calendar credentials remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for engagement management, audit workflow, workpaper, PBC/document request, secure collaboration, issue tracker, and calendar systems
  - escalation targets for preparers, reviewers, engagement managers, engagement partners, quality reviewers, legal, tax, delivery management, account specialists, and authorized client owners
  - tenant authority maps for engagement scope, reviewer signoff, workpaper release, confidentiality, client communications, audit committee routing, closeout readiness, and contractual approvals

## Isolation

- Tenant boundary: no cross-tenant sharing of engagement letters, PBC lists, request trackers, workpapers, reviewer notes, issue logs, client communications, or contact matrices.
- Knowledge boundary: PCAOB, AICPA, and GAO public baselines are shared; firm methodology, engagement files, client records, access matrices, review policies, and service commitments are injected only at request time.
- Adaptation policy:
  - allowed: terminology maps, artifact templates, system connector mappings, owner registries, escalation thresholds, and tenant-specific PBC or closeout checklists
  - prohibited: widening the lane into audit conclusions, workpaper signoff, review-note clearance, engagement quality review approval, legal or tax advice, or contractual approval

## Operations

- Monitoring:
  - log scope verdicts, request inventory changes, overdue PBC items, missing evidence, duplicated ownership, reviewer handoffs, schedule blockers, confidentiality escalations, and closeout readiness outcomes
  - alert on stale source reviews, repeated attempts to force audit signoff, repeated unauthorized workpaper-release requests, unresolved ownership loops, and recurring missing tenant authority maps
  - monitor for requests that incorrectly seek professional judgment, report issuance, legal, tax, or contractual approval from the lane
- Logging:
  - record release version, engagement type, applicable source path, tenant assumptions, prior owner, next owner, required artifacts, evidence links, PBC aging, confidentiality status, and systems of record consulted
  - record whether the request involved missing prerequisites, late evidence, ambiguous ownership, schedule conflict, confidentiality conflict, signoff boundary, or tenant-policy conflict
- Rollback path:
  - disable the current specialist release
  - route affected requests back to orchestrator-safe fallback handling
  - restore the previous validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry accounting-tax-and-audit-services --agent audit-engagement-specialist` before re-enabling
- Support owner: repository owner or designated catalog steward

## Deployment Notes

- Internal role: evidence-backed audit engagement coordination specialist for dependency intake, PBC and request tracking, reviewer handoffs, blocker escalation, client follow-up, confidentiality-aware communication, and closeout readiness.
- Materialization requirements for `commons-crew`:
  - task metadata identifying client, engagement, audit type, reporting period, business unit, jurisdiction, requested coordination outcome, and urgency
  - boundary metadata identifying preparer, reviewer, engagement manager, engagement partner, quality reviewer, legal, tax, delivery, account, and authorized client owners
  - retrieval dependencies for engagement letter, PBC list, request tracker, workpaper index, reviewer notes, issue log, secure portal, client access matrix, firm methodology, and closeout checklist
  - tenant overlays for applicable standards, confidentiality rules, workpaper release approval, client communication rules, reviewer signoff, quality review, audit committee routing, and contractual commitments
- Regulated-lane caveats:
  - PCAOB sources directly govern issuer audit baselines; nonissuer audits require AICPA SAS path selection; government audits may require GAO Yellow Book handling
  - public professional standards clarify evidence, documentation, workflow, confidentiality, and quality boundaries but do not replace tenant methodology or engagement documents
  - runtime must refuse or return to orchestrator whenever audit conclusions, workpaper signoff, report issuance, legal or tax advice, confidentiality exceptions, client rights, or policy conflict resolution are required
- This package is validated as a spec pack, but runtime may still remain `specification-based` until a retained implementation is committed separately.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and complete coverage of required abilities.
