# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - planning horizon, fiscal calendar, store or channel segmentation, and allocation tie-break logic;
  - tenant assortment, open-to-buy or WSSI, markdown, and approval policies;
  - tenant connectors for merchandise-planning, PLM, PIM, ERP, POS, OMS, WMS, RFID, vendor-compliance, and approval systems.
- Required task and boundary metadata:
  - planning queue schema and decision-surface controls;
  - output schema for schedule, allocation, constraint, compliance-gap, and escalation artifacts;
  - confidence threshold, low-confidence policy, and source-precedence policy.
- Required systems of record:
  - merchandise-planning and assortment-planning systems,
  - PLM and PIM or digital-asset systems,
  - ERP, EDI, and purchase-order sources,
  - POS, OMS, WMS, and RFID or serialized inventory systems,
  - vendor-compliance and routing-guide repository,
  - policy, approval, and compliance registry.

## Deployment Notes

- This lane is recommendation-only and must not execute buys, markdowns, vendor commitments, product releases, inventory moves, or price changes.
- Each run should record:
  - scenario ID or request type,
  - mandatory input-set completeness,
  - authoritative records used,
  - refusal or escalation cause when authority or policy is missing,
  - final recommendation artifact and escalation package when not fully feasible.
- Guardrails:
  - do not infer final buy, markdown, or pricing approval,
  - do not bypass source-policy conflict,
  - do not treat incomplete style-color-size, floor-ready, label, or flammability evidence as launch-ready.
- Regulated-lane caveats:
  - FTC textile, wool, and care-label rules constrain apparel launch readiness,
  - CPSC flammability and children's sleepwear rules constrain applicable product classes,
  - requests that need legal or product-compliance interpretation must return to orchestrator.
- Refusal or orchestrator-return conditions:
  - required tenant facts or authoritative records are missing and would change the recommendation,
  - the request requires legal, licensed, safety, sourcing, compliance, or financial approval authority outside the lane,
  - public source and tenant policy conflict materially on the outcome.

## Rollback Requirements

- Disable binding in orchestrator and route relevant requests to human-safe fallback.
- Persist open blockers, unresolved compliance gaps, and pending approval-needed summaries for audit continuity.
- Restore last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after tenant connectors, calendar adapters, assortment-policy injection, and authority maps are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, validated planning and compliance-boundary handling, and explicit governance approval.
- If usage proves common enough, promotion should occur through a separate build effort that commits a trusted runtime implementation, production retrieval contracts, regression evidence, and explicit rollback controls.
