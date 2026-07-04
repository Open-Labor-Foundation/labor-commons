# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

- `manifest.yaml` with explicit funeral compliance boundaries, refusal triggers, adjacent routing, regulated-lane caveats, runtime strategy, and target delivery level.
- `evaluation/functionality-map.json` covering all shared abilities, `compliance-controls-and-governance` abilities, and the `cross-industry` artifact-awareness ability.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow stages, artifacts, systems, decision boundaries, domain failure modes, scenario-family coverage, and unresolved ambiguity handling.
- `evaluation/results.json`, `evaluation/scenarios.md`, and readiness artifacts with complete functionality coverage and human verification.

## Runtime Assumptions

- Tenant provides jurisdiction, licensed location, service model, business unit, facility type, operating constraints, compliance policy, complaint policy, price-list process, preneed model, cemetery and crematory partner rules, and approval matrix.
- Tenant provides systems-of-record mapping across funeral home case management, family-service CRM, document and e-sign repositories, price-list and billing systems, eDRS or vital-record portals, cemetery systems, crematory or hydrolysis systems, preneed ledgers, complaint trackers, safety systems, and audit repositories.
- Tenant provides owner and approval matrices for licensed funeral directors, embalmers, cemetery administrators, crematory operators, documentation owners, preneed owners, compliance, legal, benefits, payment, safety, privacy, and records teams.
- Tenant provides local and state-specific right-to-control disposition, embalming authorization, cremation or hydrolysis authorization, death-registration, permit, preneed funding, cemetery, complaint, exposure-control, and retention context needed for escalation routing.

## Required Retrieval Dependencies

- Case, location, jurisdiction, license, and business-unit context.
- General Price List, Casket Price List, outer burial container price list, selected goods and services, itemized statement, cash-advance items, required-purchase explanation, direct-cremation alternative-container evidence, and price-list retention state.
- Decedent case ID, first-call note, removal or transfer record, custody status, authorized arranger or person authorized to direct disposition evidence, preneed instructions, and dispute notes.
- Embalming authorization or exception record, viewing or service request, licensed funeral director or embalmer owner, and exposure-control escalation note.
- Death-certificate demographic intake, medical certifier or coroner status, eDRS reference, registrar dependency, disposition permit, and filing evidence.
- Cemetery, crematory, hydrolysis, VA committal, interment-right, container, chain-of-custody, scheduling, transportation, and destination confirmations.
- Preneed contract, trust, insurance, funding, cancellation, refund, assignment, and policy exception references where financial or legal interpretation is outside this lane.
- Complaint, regulator correspondence, corrective-action, control attestation, internal audit, training, PPE, exposure-control, incident, and safety records.

## Refusal and Return Conditions

- Missing required tenant jurisdiction, policy, record locations, authority map, source-of-truth access, or public-source context.
- Missing price-list, selected-services, statement, authorization, vital-record, disposition, cemetery, crematory, preneed, complaint, corrective-action, retention, or safety evidence.
- Disputed right to control disposition, conflicting preneed instructions, conflicting public and tenant policy, conflicting cemetery or crematory requirements, or unresolved regulator correspondence.
- Requests requiring legal, regulator-facing, licensed funeral directing, embalming, cemetery, crematory, hydrolysis, benefits, safety-critical, financial-approval, privacy, records-retention, or policy-override authority.

## Deployment Notes

- Enable behind queue controls that require explicit artifact-based outputs: control or obligation matrix, evidence readiness or gap summary, exception and remediation escalation note, control summary tied to evidence owners, or adjacent-specialist routing note.
- Tenant onboarding must map local terminology and systems to the pack's required artifact classes before production use.
- Keep a warm review queue for the first 30 control summaries per tenant to catch jurisdiction, price-list, disposition, cemetery, crematory, preneed, safety, complaint, and evidence-owner ambiguity patterns.
- Runtime remains `specification-based` until a retained implementation is committed separately.

## Monitoring, Rollback, and Recovery

- Monitor for repeated attempts to certify compliance, respond to regulators, decide legal or licensed questions, close controls without evidence, bypass price-list or statement evidence, clear disposition without vital-record or permit references, or handle preneed and benefits disputes inside the lane.
- Trigger rollback when the same unresolved refusal or escalation pattern repeats for 3 consecutive runs or when the lane attempts to provide legal, licensed, regulator-facing, benefits, safety-critical, financial, or policy approval.
- Rollback by disabling automated routing for this lane, preserving all exception and evidence artifacts, and returning new work to orchestrator-controlled manual review.
- Re-collect tenant assumptions, refresh authoritative sources, run package audit, and complete a human review before re-enable.

## retained-implementation Promotion Plan

- Do not change runtime authority from `specification-based` until usage proves common enough and stable enough to justify a retained implementation.
- Require explicit governance approval, tenant-specific retrieval contracts, reviewed prompt and tool boundaries, integration tests, and evidence of three consecutive review windows without critical overreach.
- Promote through a separate retained-implementation package commit and PR that includes runtime implementation, tests, source refresh, rollback controls, and updated readiness evidence.
