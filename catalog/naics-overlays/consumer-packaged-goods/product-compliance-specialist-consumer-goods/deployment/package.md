# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended outcome,
  - product family and jurisdiction,
  - facility or line context,
  - release authority map,
  - substitution and rework rules,
  - tenant source-precedence and escalation policy.
- Tenant-supplied assumptions or retrieval hooks:
  - ERP, MES, WMS, QMS, and supplier-system connectors,
  - lot, batch, shipment, and consignee record locations,
  - policy overlays for traceability, recall, and hold-release handling,
  - category-specific regulatory overlays for dietary supplements, cosmetics, OTC, or customer standards when applicable.
- Regulated-lane caveats:
  - the lane can review and package evidence but cannot grant final release, legal, or supplier-approval authority,
  - the lane must preserve quality holds and traceability controls under service-level pressure,
  - date-sensitive Food Traceability Rule timing must be confirmed against tenant enforcement posture before making timing-critical commitments.

## Required Systems Of Record

- ERP and production-order systems
- MES and batch or lot genealogy systems
- WMS and shipment or consignee tracking systems
- quality management and CAPA systems
- supplier management and approved-supplier repositories
- document control and recall-management systems

## Deployment Notes

- Deployment posture: `specification-based` with strict no-signoff and no-control-bypass contract.
- Health and observability requirements:
  - log scenario ID, source set, and refusal or escalation reason,
  - record which systems of record were checked and which were missing,
  - preserve assumption logs for category applicability and tenant-policy overrides,
  - surface traceability conflicts, hold states, and unresolved owner routing.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - legal, engineering, release, supplier-approval, or safety-critical authority required,
  - conflicting policies or sources materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open blocker, hold, and escalation artifacts for human continuation.
- Re-enable only after package correction and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable artifact retrieval and boundary behavior,
  - release, hold, supplier, and recall escalation patterns are observed in production-like operation,
  - a separate trusted built implementation is committed and approved.
