# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive parts execution work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant ERP, MES, WMS, QMS, supplier, EDI, label, planning, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for ERP, MES, WMS, QMS, supplier, EDI, label, PLM, planning, logistics, and traceability systems
  - escalation targets for quality, engineering, production planning, procurement, supplier-quality, inventory, and logistics owners
  - tenant-specific maps for OEM customer-specific requirements, approved-source status, PPAP posture, revision control, hold and release authority, relabel or rework limits, substitution constraints, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of orders, part masters, inventory records, supplier files, ASNs, labels, hold records, or customer-specific requirements.
- Knowledge boundary: IATF, AIAG, GS1, Odette, and NHTSA public baselines are shared; tenant-specific CSR sets, approved-source lists, release maps, label rules, and plant SOPs are injected only at request time.
- Adaptation policy:
  - allowed: terminology, plant names, sequence models, systems-of-record connectors, packout templates, and escalation routing
  - prohibited: widening the lane into final quality release, engineering approval, supplier approval, sourcing authority, recall authority, or safety override authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked starts, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated traceability mismatches, repeated missing CSR context, repeated missing revision repositories, and repeated attempts to bypass hold or completion controls
  - monitor for requests that incorrectly seek final quality, engineering, supplier-approval, sourcing, recall, or safety authority from the lane
- Logging:
  - record release version, tenant assumptions, plant and warehouse context, part and revision context, missing evidence, and routed owners
  - record whether the request involved readiness review, active execution, traceability conflict, hold or rework escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route parts-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent parts-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed automotive parts operations specialist for sequence and kit readiness, part execution, blocked-work handling, container and label traceability, quality-boundary escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying plant, warehouse, customer program, part family, order type, requested disposition, and service-level timing
  - boundary metadata identifying quality, engineering, production planning, procurement, supplier-quality, inventory, and logistics owners
  - retrieval dependencies for ERP, MES, WMS, QMS, supplier, EDI, label, PLM, planning, logistics, and completion-signoff artifacts
  - tenant overlays for CSR applicability, approved-source repositories, PPAP posture, revision control, label profiles, hold rules, release authority, relabel and rework limits, substitution constraints, and completion evidence rules
- Assumptions that must be tenant-supplied or retrieved at runtime:
  - which OEM or customer-specific requirements govern the part flow
  - whether the flow is production, service parts, aftermarket, or launch support
  - which systems are authoritative for part revision, approved source, inventory state, container IDs, labels, and shipment confirmation
  - which authority owns release, rework, concession, supplier approval, and recall escalation
- Regulated-lane caveats:
  - public NHTSA sources create hard escalation boundaries for safety-defect and recall handling but do not replace tenant legal or regulatory counsel
  - IATF, AIAG, GS1, and Odette sources define automotive operating baselines but do not replace OEM customer-specific requirements, purchasing agreements, or plant SOPs
  - runtime must refuse or return to orchestrator when final quality release, engineering approval, supplier approval, sourcing authority, or recall authority is required
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, authoritative records, or source context that would change the outcome
  - requests to bypass traceability, release, or quality controls
  - conflicting public guidance, CSR rules, or tenant policy that materially changes the answer
  - requests for safety, release, or supplier-approval authority outside the lane
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
