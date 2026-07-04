# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route cannabis-quality work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant seed-to-sale, quality, laboratory, document, complaint, and regulator-reporting connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for seed-to-sale, QMS, LIMS, batch-record, document-control, complaint, and regulator-reporting systems
  - escalation targets for final release owners, laboratory-director or laboratory liaison owners, remediation approvers, recall or incident command owners, compliance owners, legal owners, and medical or clinical reviewers
  - tenant-specific maps for jurisdiction, license type, product classification, adult-use versus medical context, approved laboratories, remediation rules, release authority, and hold or recall procedures

## Materialization Requirements

- Required task metadata:
  - request type
  - jurisdiction, license type, and program context
  - product family, product form, and affected batch or package identifiers
  - visible hold, failed-test, remediation, or complaint status
  - requested decision and claimed authority owner
- Required boundary metadata:
  - final quality release owners
  - laboratory signoff and retest-approval owners
  - remediation approval owners
  - recall and regulator-contact owners
  - legal and medical escalation owners
  - tenant policy precedence and escalation tree
- Required runtime assumptions to retrieve:
  - current systems of record and lookup hooks
  - jurisdiction-specific cannabis rule set and program posture
  - approved-laboratory status and chain-of-custody handling rules
  - documented hold, remediation, CAPA, complaint, and recall procedures
  - product quality plans, manufacturing protocol location, and label-control records
- Regulated-lane caveats:
  - public state cannabis sources constrain the lane but do not replace tenant procedures, license conditions, or controlling jurisdiction-specific rules
  - the lane may support hold, release-boundary, laboratory-evidence, and incident analysis but cannot command final release, sign a COA, approve remediation, or communicate to regulators as the accountable owner
  - federal therapeutic-claim, medical-product, and legal-status questions remain external to the lane
- Refusal or orchestrator-return conditions:
  - missing tenant facts, authority maps, or records that would change the result
  - request for legal, medical, laboratory-director, remediation-approval, recall-command, or final release authority
  - conflicting public and tenant rules that materially change whether product can move or a finding can close

## Isolation

- Tenant boundary: no cross-tenant sharing of batch records, package histories, chain-of-custody files, COAs, complaints, CAPAs, remediation logs, or release authorities.
- Knowledge boundary: public cannabis regulator, ASTM, AOAC, and FDA baselines are shared; tenant SOPs, approved laboratory lists, release maps, and retrieval hooks are injected only at request time.
- Adaptation policy:
  - allowed: terminology, product family labels, jurisdiction maps, release-owner maps, system connectors, and tenant control overlays
  - prohibited: widening the lane into final release signoff, laboratory execution, remediation approval, recall command, legal interpretation, or medical advice

## Operations

- Monitoring:
  - log dispatch decisions, hold and release-boundary outputs, failed-test and remediation escalations, unresolved COA or chain-of-custody conflicts, and complaint or adverse-event escalations
  - alert on stale source reviews, recurring contaminant or potency failures, repeated override requests, multiple-COA conflicts, and attempts to close findings without formal review support
  - monitor for requests that incorrectly seek final release, lab signoff, remediation approval, or recall authority from the lane
- Logging:
  - record release version, tenant assumptions, affected batch or package scope, missing evidence, routed owners, and whether the request involved hold, release, failed-test, remediation, complaint, or incident escalation handling
  - record whether source or policy conflicts existed and whether the work escalated because of jurisdiction, classification, or authority-boundary uncertainty
- Rollback path:
  - disable the current specialist release
  - route cannabis-quality requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry cannabis-and-controlled-substance-operations --agent cannabis-quality-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed cannabis quality specialist for batch and package review, seed-to-sale truth-set handling, laboratory evidence review, hold and remediation boundary discipline, and corrective-action packaging.
- If usage proves common enough, promotion should be handled as a follow-on change that adds retained-implementation runtime artifacts, records production evaluation evidence, updates runtime strategy only after approval, and documents rollback to the spec pack.
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
- Runtime prompts should explicitly remind the lane that it owns cannabis-quality evidence handling and escalation only, not final release, laboratory signoff, legal interpretation, medical advice, or recall-command authority.
