# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route EV dealer, warranty, and product-service work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant DMS, OEM portal, scan-tool, parts, quality, inventory, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for DMS, OEM warranty and campaign portals, VIN and recall checks, diagnostics systems, parts systems, battery return systems, quality records, and logistics systems
  - escalation targets for quality, procurement, supplier-quality, logistics, warranty administration, and safety owners
  - tenant-specific maps for certified-dealer scope, technician qualification, battery quarantine, transport handoff, claim coding, release authority, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of repair orders, VIN-linked service history, OEM portal records, diagnostic traces, battery serials, quarantine records, parts orders, or tenant SOPs.
- Knowledge boundary: NHTSA, AIAG, and OEM public baselines are shared; dealer policy matrices, labor operations, technician rosters, carrier contracts, and private portal instructions are injected only at request time.
- Adaptation policy:
  - allowed: terminology, dealer group names, systems-of-record connectors, local checklist templates, escalation routing, and quarantine evidence templates
  - prohibited: widening the lane into engineering judgment, supplier approval, safety release authority, dangerous-goods legal authority, or financial exception authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked intake, holds, unsupported completion attempts, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated VIN or battery traceability mismatches, repeated missing certified-dealer evidence, repeated recall or hold overrides, and repeated attempts to bypass completion controls
  - monitor for requests that incorrectly seek engineering, supplier, logistics-release, or goodwill authority from the lane
- Logging:
  - record release version, tenant assumptions, dealership and VIN context, campaign and bulletin references, battery or component identity, missing evidence, and routed owners
  - record whether the request involved intake validation, diagnosis progression, parts waiting, battery return, hold or recall escalation, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route EV-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent ev-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed EV operations specialist for dealer execution, warranty progression, battery and charging issue handling, battery return coordination, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying dealership, VIN, product family, requested disposition, and service-level timing
  - boundary metadata identifying quality, procurement, supplier-quality, logistics, warranty, and safety owners
  - retrieval dependencies for DMS, OEM warranty and campaign portals, diagnostics records, parts systems, battery return systems, quality records, and completion-signoff artifacts
  - tenant overlays for certified-dealer scope, technician qualification, battery quarantine, transport and carrier rules, claim coding, release authority, and completion evidence rules
- Regulated-lane caveats:
  - public NHTSA sources govern safety, VIN, recall, and manufacturer-communication boundaries but do not replace tenant or OEM private claim procedures
  - public AIAG sources define automotive warranty terminology and supply-chain traceability baselines but do not replace private supplier contracts or return-center instructions
  - runtime must refuse or return to orchestrator when engineering, supplier approval, formal safety release, dangerous-goods legal interpretation, recall command, or financial or legal remedy authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
