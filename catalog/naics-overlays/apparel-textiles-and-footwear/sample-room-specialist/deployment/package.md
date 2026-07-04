# Deployment Package

## Runtime

- Target runtime: `commons-crew` or another orchestrator that can route apparel sample-room work into a spec-first specialist with retrieval and boundary metadata.
- Deployment model: versioned spec-pack artifact bundle with immutable manifest, research summary, functionality map, evaluation results, readiness evidence, deployment notes.
- Required secrets: none in the package itself; tenant PLM, merchandising, sample-room tracker, courier, showroom, quality, and sourcing connectors remain orchestrator-managed.
- Required configuration:
  - release version
  - approved source freshness policy
  - retrieval hooks for PLM, merchandising, sample-room inventory, courier, showroom, quality, and sourcing systems
  - escalation targets for quality, technical design, inventory, procurement, supplier-quality, and logistics owners
  - tenant-specific maps for sample classes, priority rules, location codes, return windows, hold and release posture, damaged-sample handling, and completion signoff requirements

## Isolation

- Tenant boundary: no cross-tenant sharing of sample requests, style and SKU sheets, fit comments, location logs, courier records, return sheets, showroom calendars, or private sample images.
- Knowledge boundary: GS1, FTC, CPSC, and ISO public baselines are shared; tenant sample classifications, priority rules, sample histories, courier accounts, location codes, and approval maps are injected only at request time.
- Adaptation policy:
  - allowed: terminology, sample classes, location codes, calendar names, systems-of-record connectors, and escalation routing
  - prohibited: widening the lane into fit approval, technical signoff, compliance signoff, supplier approval, or quality-release authority

## Operations

- Monitoring:
  - log dispatch decisions, lifecycle-state changes, blocked pulls, overdue returns, missing samples, shipping delays, hold events, unsupported substitution requests, and low-confidence returns
  - alert on stale source reviews, repeated location mismatches, repeated missing-return patterns, repeated conflicts for the same sample, and repeated attempts to bypass hold or custody controls
  - monitor for requests that incorrectly seek technical approval, compliance approval, supplier approval, or final release authority from the lane
- Logging:
  - record release version, tenant assumptions, business unit context, style and SKU context, sample type, current holder, due date, missing evidence, and routed owners
  - record whether the request involved intake validation, pull and reservation, shipping, review, return, traceability conflict, hold escalation, unsupported substitution, or tenant-specific adaptation
- Rollback path:
  - disable the current specialist release
  - route sample-room requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run `node infra/scripts/audit-spec-pack.mjs --industry apparel-textiles-and-footwear --agent sample-room-specialist` before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Internal role: evidence-backed apparel sample-room specialist for request intake, sample reservation, custody control, shipping and return handling, blocked-work escalation, and completion evidence capture.
- Materialization requirements for `commons-crew`:
  - task metadata identifying requester, style, SKU, sample type, size, color, location, due date, and requested disposition
  - boundary metadata identifying quality, technical design, sourcing, supplier-quality, inventory, and logistics owners
  - retrieval dependencies for PLM, merchandising, sample-room tracker, courier logs, showroom requests, quality records, and sourcing records
  - tenant overlays for sample taxonomy, priority rules, return windows, hold and release rules, damaged-sample posture, and completion evidence rules
- Regulated-lane caveats:
  - FTC and CPSC public sources constrain labeling, safety, and recall-related boundaries but do not replace tenant legal review or product-compliance workflows
  - GS1 and GS1 US sources define identity, attribute, and traceability baselines but do not replace tenant sample-room SOPs, showroom calendars, or priority policies
  - runtime must refuse or return to orchestrator when fit approval, technical signoff, compliance approval, supplier approval, or formal quality release is required
- Runtime remains `specification-based`; this package does not claim a retained implementation.
- Health checks should confirm manifest load success, artifact presence, source freshness dates, and scenario-coverage completeness.
