# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime execution target: `commons-crew`
- Runtime promotion condition: 

## Materialization Requirements

- `manifest.yaml` with forestry operations boundaries, required tenant facts, source baseline, refusal triggers, adjacent routing, output contracts, and caveats.
- `evaluation/functionality-map.json` covering all shared abilities, `execution-processing-and-fulfillment` abilities, and `agriculture-and-natural-resources` abilities.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, artifacts, systems of record, decision boundaries, domain failure modes, and unresolved ambiguity.
- `evaluation/results.json`, `evaluation/scenarios.md`, `readiness/evidence.json`, `readiness/release.md`, and commercialization notes with complete coverage and human verification.

## Runtime Assumptions

- Tenant supplies jurisdiction, land ownership class, business unit, tract, stand, unit, road, watershed, product, facility, and program context.
- Tenant supplies current systems-of-record mapping for forestry operations, GIS/land records, field inspection, environmental/BMP monitoring, weather/fire release, safety, traceability, contract administration, and grant/program administration.
- Tenant supplies authority and owner maps for licensed forestry, environmental, safety, contract, legal, financial, program, field operations, logging coordination, and traceability decisions.
- Tenant supplies local conservation standards, permit terms, contract requirements, certification status, grant/program terms, and policy exceptions that narrow the public baseline.

## Required Retrieval Dependencies

- Work package, lifecycle state, tract/stand/unit identifiers, and current owner.
- Forest management plan, prescription reference, seasonal plan, operation plan, and local conservation-practice or program references.
- Field logs, crew reports, equipment status, inspections, photo evidence, incident notices, and communication logs.
- Weather/fire alerts, wet-weather release, road/soil condition, BMP, erosion-control, streamside, protected-resource, and water-quality evidence.
- Stand inventory, species/product identifiers, deck inventory, load tickets, scale tickets, custody certificates, shipment records, mill receipts, and regulated trade context when applicable.
- Completion criteria, owner acceptance, residual blockers, and records written or referenced.

## Refusal and Return Conditions

- Missing tenant facts, source-of-truth locations, authority maps, or authoritative source context that could change the outcome.
- Missing field, environmental, seasonal, traceability, program, or owner-acceptance evidence for completion.
- Requests requiring silvicultural prescription, licensed forestry signoff, environmental permit interpretation, legal advice, engineering design, safety certification, contract officer authority, financial approval, or program award decisions.
- Field conditions, weather/fire alerts, road or soil conditions, BMP/water-quality issues, protected-resource concerns, traceability breaks, or grant/program conflicts that require human interpretation.
- Conflicting public guidance, tenant policy, contract terms, permit rules, jurisdictional rules, certification requirements, or program requirements.

## Deployment Notes

- Enable behind queue controls requiring explicit artifact-based outputs: execution status update, lifecycle state transition note, exception summary, field-status summary, completion record, and escalation/routing note.
- Tenant onboarding must define systems-of-record hooks, owner maps, local conservation standards, environmental/BMP authority, certification and traceability posture, and completion criteria.
- Keep a review queue for the first 30 completion attempts per tenant to detect boundary drift, seasonal-condition ambiguity, traceability gaps, and recurring missing-record patterns.
- Runtime may remain `specification-based` indefinitely until usage volume and safety evidence justify a trusted build.

## Monitoring, Rollback, and Recovery

- Monitor repeated low-confidence completion attempts, missing field evidence, source-system conflicts, environmental/BMP escalations, fire/weather overrides, traceability breaks, grant/program approval confusion, and adjacent authority requests.
- Trigger rollback if the lane repeatedly tries to close work without evidence, synthesizes conflicting source context, or absorbs licensed/environmental/safety/legal/financial/program authority.
- Rollback by disabling routing into this overlay while preserving all exception, evidence, and source-context artifacts for review.
- Re-enable only after source refresh, tenant assumption review, scenario regression, and owner-map correction are complete.

## retained-implementation Promotion Plan

- Do not claim or enable retained implementation from this package.
- Promote only through a separate retained implementation after common usage is proven, tenant retrieval adapters are defined, authority boundaries are regression-tested, and governance approves the elevation.
- Required promotion evidence includes three consecutive review windows without critical overreach, stable scenario pass results, documented rollback drills, and tenant-specific systems-of-record mapping.
