# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: promote to retained-implementation only after explicit governance signoff, repeated runtime demand, stable validation history, and a separately committed built package.
- Execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit public-service delivery boundaries, refusal triggers, adjacent-owner routing, tenant fact requirements, and public authority limits.
- `evaluation/functionality-map.json` covering shared plus service-support-and-resolution plus government-and-public-sector abilities.
- `evaluation/research-summary.json` with source classes, workflow stages, artifacts, systems of record, decision boundaries, and domain failure modes.
- `evaluation/results.json` and `readiness/evidence.json` showing complete scenario coverage, validated gates, and human verification.

### Runtime Assumptions

- Tenant supplies jurisdiction, agency, program, service model, service population, service-standard policy, public-records procedure, privacy-release rules, appeal rules, civil-rights or language-access protocols, procurement communication limits, and authority matrices.
- Case management, records management, public-service administration, public-records, privacy, procurement, permit, benefits, correspondence, complaint, enforcement referral, service recovery, and audit systems are retrievable at runtime.
- Tenant provides official authority boundaries for public-service support, program adjudication, legal review, public records, procurement, audit, privacy, enforcement, civil-rights review, compensation, and escalation.
- Tenant identifies records retention hooks, accessibility or accommodation procedures, source precedence, and due-process constraints whenever they materially affect communication or escalation.

### Required Retrieval Dependencies

- Requester, beneficiary, applicant, resident, vendor, representative, or stakeholder identity context; jurisdiction; program; agency; case number; application number; permit number; public-records tracking number; solicitation number; ticket number; or correspondence reference.
- Privacy release, consent, representative authorization, identity verification, and records-access prerequisites.
- Applications, case files, eligibility records, benefit or permit notices, adverse-action notices, appeal windows, missing-item records, complaint history, service tickets, and correspondence logs.
- Public-records requests, Privacy Act requests, transparency logs, records-location notes, retention metadata, legal hold indicators, and disclosure routing artifacts.
- Procurement documents, contracting officer or COR references, vendor communications, solicitation artifacts, contract records, and procurement transaction history where relevant.
- Audit trail artifacts including timestamps, filing acknowledgments, source-system references, action logs, unresolved items, equity or accommodation flags, and next owner.

### Refusal and Return Conditions

- Required tenant facts, jurisdiction, privacy permissions, authority sources, official records, service-standard context, or systems-of-record retrieval hooks are missing or contradictory.
- Requests require legal interpretation, program adjudication, eligibility decisioning, appeal handling, enforcement action, public-records release, Privacy Act disclosure, procurement commitment, audit signoff, civil-rights determination, safety-critical action, or financial approval.
- Conflicting statutes, agency manuals, tenant policies, notices, public-records rules, service standards, procurement rules, equity protocols, or system records materially change the answer.
- A proposed communication would imply preferential treatment, bypass due process, disclose protected records, bind the government, promise unsupported service access, or approve a policy exception.

## Rollback and Recovery

- Pause tenant routing for this lane if repeated unsupported eligibility promises, records disclosures, procurement commitments, legal interpretations, enforcement actions, missed appeal risks, ignored civil-rights concerns, or missing audit trails are detected.
- Preserve all resolution notes, communication summaries, escalation packets, evidence maps, retrieval logs, source-precedence notes, and system references for post-rollback review.
- Re-enable only after source-of-truth retrieval, privacy-release validation, public-records routing, due-process escalation, procurement boundary handling, equity escalation, and audit-trail capture are reconfirmed.

## retained-implementation Promotion Plan

- Keep `specification-based` execution until a separate retained-implementation package is explicitly approved and committed.
- Promote only after repeated production usage shows this public-service delivery lane is common, stable, and bounded enough to justify a maintained build.
- Promotion requires formal validation signoff, updated readiness evidence, tenant retrieval contract tests, escalation-quality review, operational telemetry, and a new PR that records the retained-implementation runtime separately from this spec pack.
