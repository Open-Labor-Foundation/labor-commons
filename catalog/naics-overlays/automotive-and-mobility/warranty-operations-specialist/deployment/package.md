# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route automotive warranty work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant DMS, OEM portal, VIN, parts, quality, recall, and logistics connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for DMS, OEM warranty portals, VIN services, service-information portals, parts inventory, returned-parts, recall, quality, and logistics systems
  - escalation targets for quality, production planning, inventory, procurement, supplier-quality, logistics, finance, legal, safety, and OEM field owners
  - tenant-specific maps for OEM policy hierarchy, labor-op and prior-approval rules, returned-parts and causal-part rules, goodwill boundaries, recall and stop-sale ownership, and EV or high-voltage technician authorization

## Isolation

- Tenant boundary: no cross-tenant sharing of repair orders, VIN-linked vehicle records, technician notes, warranty claims, returned-parts evidence, quality notices, or OEM policy files.
- Knowledge boundary: FTC, NHTSA, NASTF, AIAG, and GS1 public baselines are shared; dealer-specific DMS records, OEM warranty manuals, claim histories, authority maps, and local SOPs are injected only at request time.
- Adaptation policy:
  - allowed: terminology, DMS and OEM connector mapping, dealer RO states, claim-line templates, escalation routing, EV workflow controls, and approved reporting templates
  - prohibited: widening the lane into legal interpretation, goodwill approval, engineering authority, supplier approval, recall command, or safety-release authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked claims, unsupported completion attempts, recall or stop-sale escalations, supplier-substitution escalations, and low-confidence returns
  - alert on stale source reviews, repeated VIN or causal-part mismatches, repeated missing OEM policy artifacts, and repeated attempts to bypass recall, hold, or completion controls
  - monitor for requests that incorrectly seek legal, financial, supplier-approval, engineering, or safety-release authority from the lane
- Logging:
  - record release version, tenant assumptions, jurisdiction, OEM and dealer context, VIN and RO context, missing evidence, and routed owners
  - record whether the request involved routine warranty progression, claim blockage, traceability conflict, recall or stop-sale escalation, rework, unsupported completion, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route warranty-operations requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry automotive-and-mobility --agent warranty-operations-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed automotive warranty operations specialist for repair-order progression, warranty case handling, VIN and parts traceability, recall-boundary escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying dealer or business unit, OEM, VIN, repair order, requested disposition, and service-level timing
  - boundary metadata identifying quality, production planning, inventory, procurement, supplier-quality, logistics, finance, legal, safety, and OEM field owners
  - retrieval dependencies for DMS, OEM warranty portals, VIN and vehicle master data, service information, parts inventory, returned-parts, quality, recall, and completion-signoff artifacts
  - tenant overlays for OEM policy revisions, labor-op rules, prior approvals, returned-parts handling, goodwill boundaries, recall ownership, and EV high-voltage controls
- Regulated-lane caveats:
  - public FTC and NHTSA sources directly constrain disclosure, warranty, claim, communication, and safety-boundary posture, but they do not replace OEM policy manuals, state law, or tenant authority maps
  - public NASTF, AIAG, and GS1 references sharpen service-information and traceability discipline, but they do not by themselves authorize a repair, claim payment, supplier substitution, or release from hold
  - runtime must refuse or return to orchestrator when legal interpretation, goodwill approval, supplier approval, final recall handling, or safety-release authority is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
