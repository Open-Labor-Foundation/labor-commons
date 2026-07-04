# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

- `manifest.yaml` with explicit funeral-home operations boundaries, refusal triggers, adjacent routing, regulated-lane caveats, runtime strategy, and target delivery level.
- `evaluation/functionality-map.json` covering all shared abilities, `execution-processing-and-fulfillment` abilities, and the `cross-industry` artifact-awareness ability.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json`, `evaluation/scenarios.md`, and readiness artifacts with complete functionality coverage and human verification.

## Runtime Assumptions

- Tenant provides jurisdiction, facility, brand, business unit, service model, operations workflow, pricing policy, preneed model, care-center practice, cemetery and crematory partner rules, and operating constraints.
- Tenant provides systems-of-record mapping across funeral home case management, family-service CRM, removal and transportation dispatch, custody logs, care-center queues, eDRS or vital-record portals, document/e-sign repositories, service scheduling, cemetery systems, crematory systems, payment ledgers, safety or compliance queues, and exception queues.
- Tenant provides owner and approval matrices for licensed funeral directors, embalmers, care-center leads, transportation dispatch, cemetery administrators, crematory operators, compliance, legal, benefits, payment, safety, and grief-support teams.
- Tenant provides any local or state-specific right-to-control disposition, embalming authorization, cremation or hydrolysis authorization, death-registration, permit, preneed funding, cemetery, crematory, custody, and remains-handling context needed for escalation routing.

## Required Retrieval Dependencies

- Decedent case ID, first-call note, removal or transfer record, chain-of-custody log, custody status, refrigeration or holding record, care-center work order, and location-of-remains reference.
- Authorized arranger, person authorized to direct disposition, preneed instructions, PADD, advance directive, or power-of-attorney evidence when applicable.
- General Price List, Casket Price List, outer burial container price list, selected goods and services, cash-advance items, package estimate, itemized statement, and payment status.
- Embalming authorization or declination posture, viewing or service request, preparation request, safety or infectious-exposure indicator, and licensed owner record.
- Death-certificate demographic intake, medical certifier or coroner status, eDRS reference, disposition permit, registrar dependency, and filing posture.
- Service schedule, visitation, clergy or celebrant, obituary, music, flowers, merchandise, transportation, cemetery, crematory, hydrolysis, VA committal, and destination dependencies.
- Completion ownership matrix, exception owner, final audit trail metadata, and retained completion evidence location.

## Refusal and Return Conditions

- Missing required tenant jurisdiction, policy, record locations, authority map, owner map, or source-of-truth access.
- Missing custody, location-of-remains, family-authority, price-disclosure, selected-services, authorization, vital-record, permit, destination-confirmation, service-completion, or audit evidence.
- Disputed right to control disposition, conflicting preneed instructions, conflicting public and tenant policy, conflicting case-system state, or conflicting cemetery or crematory requirements.
- Requests requiring legal, licensed funeral directing, embalming, care-center safety, cemetery, crematory, benefits, clinical, safety-critical, financial-approval, grief-support, arrangement redesign, or policy-override authority.

## Deployment Notes

- Enable behind queue controls that require explicit artifact-based outputs: lifecycle status, exception note, family-service workflow summary, completion evidence record, or adjacent-specialist routing note.
- Tenant onboarding must map local terminology and systems to the pack's required artifact classes before production use.
- Keep a warm review queue for the first 30 completion attempts per tenant to catch jurisdiction, custody, family-authority, care-center, cemetery, crematory, preneed, and payment ambiguity patterns.
- Runtime remains `specification-based` until a retained implementation is committed separately.

## Monitoring, Rollback, and Recovery

- Monitor for repeated completion attempts without custody closure, itemized statement evidence, missing family-authority facts, missing eDRS or permit references, unresolved destination confirmations, care-center safety issues, and adjacent-authority requests.
- Trigger rollback when the same unresolved refusal or escalation pattern repeats for 3 consecutive runs or when the lane attempts to provide legal, licensed, benefits, grief-support, safety, or financial approval.
- Rollback by disabling automated routing for this lane, preserving all exception and evidence artifacts, and returning new work to orchestrator-controlled manual review.
- Re-collect tenant assumptions, refresh authoritative sources, run package audit, and complete a human review before re-enable.

## retained-implementation Promotion Plan

- Do not change runtime authority from `specification-based` until usage proves common enough and stable enough to justify a retained implementation.
- Require explicit governance approval, tenant-specific retrieval contracts, reviewed prompt/tool boundaries, and evidence of three consecutive review windows without critical overreach.
- Promote through a separate retained-implementation package commit and PR that includes runtime implementation, tests, source refresh, rollback controls, and updated readiness evidence.
