# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

- `manifest.yaml` with explicit arrangement-conference boundaries, refusal triggers, adjacent routing, regulated-lane caveats, runtime strategy, and target delivery level.
- `evaluation/functionality-map.json` covering all shared abilities, `execution-processing-and-fulfillment` abilities, and the `cross-industry` artifact-awareness ability.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json`, `evaluation/scenarios.md`, and readiness artifacts with complete functionality coverage and human verification.

## Runtime Assumptions

- Tenant provides jurisdiction, facility, brand, service model, arrangement workflow, pricing policy, preneed model, cemetery and crematory partner rules, and operating constraints.
- Tenant provides systems-of-record mapping across funeral home case management, family-service CRM, eDRS or vital-record portals, document/e-sign repositories, cemetery systems, crematory systems, payment ledgers, and exception queues.
- Tenant provides owner and approval matrices for licensed funeral directors, embalmers, cemetery administrators, crematory operators, compliance, legal, benefits, payment, and grief-support teams.
- Tenant provides any local or state-specific right-to-control disposition, embalming authorization, cremation or hydrolysis authorization, death-registration, permit, preneed funding, and cemetery rule context needed for escalation routing.

## Required Retrieval Dependencies

- Decedent case ID, first-call note, removal or transfer record, custody status, and location-of-remains reference.
- Authorized arranger, person authorized to direct disposition, preneed instructions, PADD, advance directive, or power-of-attorney evidence when applicable.
- General Price List, Casket Price List, outer burial container price list, selected goods and services, cash-advance items, package estimate, and statement of funeral goods and services selected.
- Embalming authorization or declination posture, viewing or service request, refrigeration or delay note, and licensed owner record.
- Death-certificate demographic intake, medical certifier or coroner status, disposition permit, eDRS reference, and registrar dependency.
- Cemetery, crematory, hydrolysis, VA committal, transportation, obituary, clergy, flowers, music, and payment dependencies.
- Completion ownership matrix, exception owner, and audit trail metadata.

## Refusal and Return Conditions

- Missing required tenant jurisdiction, policy, record locations, authority map, or source-of-truth access.
- Missing family-authority, price-disclosure, selected-services, authorization, vital-record, permit, destination-confirmation, or completion evidence.
- Disputed right to control disposition, conflicting preneed instructions, conflicting public and tenant policy, or conflicting cemetery or crematory requirements.
- Requests requiring legal, licensed funeral directing, embalming, cemetery, crematory, benefits, clinical, safety-critical, financial-approval, grief-support, or policy-override authority.

## Deployment Notes

- Enable behind queue controls that require explicit artifact-based outputs: lifecycle status, exception note, family-service workflow summary, completion evidence record, or adjacent-specialist routing note.
- Tenant onboarding must map local terminology and systems to the pack's required artifact classes before production use.
- Keep a warm review queue for the first 30 completion attempts per tenant to catch jurisdiction, family-authority, cemetery, crematory, preneed, and payment ambiguity patterns.
- Runtime remains `specification-based` until a retained implementation is committed separately.

## Monitoring, Rollback, and Recovery

- Monitor for repeated completion attempts without signed statement evidence, missing family-authority facts, missing eDRS or permit references, unresolved destination confirmations, and adjacent-authority requests.
- Trigger rollback when the same unresolved refusal or escalation pattern repeats for 3 consecutive runs or when the lane attempts to provide legal, licensed, benefits, grief-support, or financial approval.
- Rollback by disabling automated routing for this lane, preserving all exception and evidence artifacts, and returning new work to orchestrator-controlled manual review.
- Re-collect tenant assumptions, refresh authoritative sources, run package audit, and complete a human review before re-enable.

## retained-implementation Promotion Plan

- Do not change runtime authority from `specification-based` until usage proves common enough and stable enough to justify a retained implementation.
- Require explicit governance approval, tenant-specific retrieval contracts, reviewed prompt/tool boundaries, and evidence of three consecutive review windows without critical overreach.
- Promote through a separate retained-implementation package commit and PR that includes runtime implementation, tests, source refresh, rollback controls, and updated readiness evidence.

