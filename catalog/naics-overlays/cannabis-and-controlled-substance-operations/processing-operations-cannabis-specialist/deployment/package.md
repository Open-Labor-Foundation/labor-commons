# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route cannabis-processing execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant seed-to-sale, batch-record, lab, quality, label, and security connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - jurisdiction and license-type resolver
  - retrieval hooks for seed-to-sale, batch-record, QA, lab, inventory, label, manifest, and security systems
  - escalation targets for compliance, quality, extraction safety, distribution, inventory, legal, and product owners
  - tenant-specific maps for local approvals, remediation SOPs, QA signoff, packaging and label governance, transfer rules, and completion evidence requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of batch records, source package tags, seed-to-sale events, COAs, manifests, equipment certifications, surveillance references, or tenant SOPs.
- Knowledge boundary: California DCC and Massachusetts CCC public baselines are shared; tenant-specific record locations, local approvals, quality signoff maps, remediation SOPs, and extraction certifications are injected only at request time.
- Adaptation policy:
  - allowed: terminology, facility names, connector mapping, jurisdiction routing, local approval references, and signoff templates
  - prohibited: widening the lane into legal interpretation, final quality release, remediation approval, product-approval authority, or extraction-safety engineering authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, testing holds, failed COA cases, unsupported completion attempts, extraction-safety escalations, and low-confidence returns
  - alert on stale source reviews, repeated missing source-package lineage, repeated COA or seed-to-sale mismatches, repeated manifest gaps, and repeated attempts to bypass testing or release controls
  - monitor for requests that incorrectly seek legal, remediation, final-release, or engineering authority from the lane
- Logging:
  - record release version, tenant assumptions, jurisdiction, facility, product family, license type, missing evidence, and routed owners
  - record whether the request involved readiness review, active processing, testing hold, remediation routing, packaging readiness, transfer readiness, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route processing-operations-cannabis requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry cannabis-and-controlled-substance-operations --agent processing-operations-cannabis-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed cannabis processing specialist for batch readiness, in-process manufacturing, testing and hold handling, transfer readiness, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying jurisdiction, facility, license type, product family, extraction method, batch or source package IDs, requested disposition, and service-level timing
  - boundary metadata identifying compliance, quality, extraction safety, distribution, inventory, legal, and product owners
  - retrieval dependencies for seed-to-sale, batch-record, QA, lab, label, manifest, inventory, and security artifacts
  - tenant overlays for remediation SOPs, local approvals, QA signoff, label governance, transfer rules, and completion evidence rules
- Regulated-lane caveats:
  - state cannabis regulation, local approval requirements, and license architecture materially change how processing, testing, QA, and transfer work must be handled
  - public DCC and CCC sources define workflow baselines but do not replace tenant SOPs, local permits, extraction certifications, or internal approval maps
  - runtime must refuse or return to orchestrator when legal interpretation, remediation approval, final quality release, formulation or label approval, or extraction-safety engineering authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
