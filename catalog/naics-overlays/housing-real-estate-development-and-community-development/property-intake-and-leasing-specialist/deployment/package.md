# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-pack execution path).
- Runtime strategy: `specification-based`.
- Deployment target: `validated` catalog entry.

## Materialization Requirements

- Tenant-supplied runtime context:
  - jurisdiction, property, owner or management company, property type, program layer, unit inventory, service model, tenant selection plan, admission and occupancy policy, screening criteria, lease package, and operating constraints;
  - application schema, waitlist or referral rules, preference rules, identity and consent requirements, income and asset evidence rules, student-status rules, voucher packet requirements, unit inspection prerequisites, move-in access procedures, and document-retention criteria;
  - tenant systems-of-record connectors for property management, applicant tracking, waitlist, compliance, income verification, voucher administration, tenant screening, document control, inspection, maintenance, payment, CRM, and policy or approval registries;
  - approval matrix, fair housing and reasonable accommodation owners, legal owner, voucher administration owner, LIHTC compliance owner, screening compliance owner, finance or deposit owner, inspection owner, property manager, and escalation directory.
- Required task and boundary metadata:
  - accepted intake schema, applicant and household identifiers, property and unit identifiers, program layer, queue state, requested action, source links, due dates, blockers, and owner fields;
  - output schema for intake disposition notes, prerequisite checklists, lease-up readiness summaries, authorization gap lists, and routing or escalation packets;
  - source-precedence policy, confidence threshold, low-confidence policy, privacy and access policy, adverse-action workflow requirements, prerequisite criteria, and orchestrator-return policy.
- Required systems of record:
  - property management system or leasing platform,
  - applicant tracking, CRM, or guest-card system,
  - waitlist, referral, and preference management system,
  - affordable housing compliance system,
  - HUD TRACS, EIV, PIC or successor HUD tenant data systems when applicable,
  - PHA voucher administration system and RFTA or HAP workflow records,
  - tenant screening vendor or consumer reporting agency portal,
  - document management and secure evidence repository,
  - income, asset, employment, benefit, student, identity, and household verification repositories,
  - unit inventory, inspection, maintenance, accessibility, and move-in readiness systems,
  - payment, deposit, ledger, and accounting systems,
  - tenant policy, lease form, authority, and approval registry.

## Deployment Notes

- This lane validates intake readiness and must not decide final leasing approval or denial, reasonable accommodation, legal defensibility, voucher tenancy, LIHTC certification, rent reasonableness, rent or deposit exceptions, source-of-income disputes, safety signoff, lease signing, licensed brokerage duties, or policy waivers.
- Each run should record:
  - scenario ID or request type,
  - property, jurisdiction, program layer, unit, applicant, household, queue state, and requested action,
  - mandatory input-set completeness,
  - source records and systems used,
  - authoritative public and tenant sources applied,
  - missing evidence, assumptions, blockers, next owner, and due date,
  - refusal or escalation cause when authority, policy, authorization, or eligibility facts are missing,
  - final intake disposition, prerequisite checklist, readiness summary, authorization gap list, or routing artifact produced.
- Guardrails:
  - do not infer eligibility, approval, denial, accommodation outcome, fair housing conclusion, legal meaning, voucher approval, LIHTC certification, rent exception, deposit approval, or lease validity;
  - do not bypass tenant selection plans, waitlist order, screening authorization, FCRA handling, source-of-income or fair housing controls, subsidy rules, inspection blockers, voucher lease-up prerequisites, income or household verification, or tenant approval owners;
  - do not expose or summarize identity, income, disability, immigration, consumer-report, or household evidence outside tenant-approved privacy and access controls;
  - reopen or reverse intake disposition when new records invalidate a prerequisite or source hierarchy;
  - do not represent intake readiness as official owner, PHA, compliance, legal, or property manager approval.

## Rollback Requirements

- Disable binding in orchestrator and route relevant intake requests to human-safe fallback.
- Preserve open applicant blockers, incomplete prerequisite checklists, unresolved screening or authorization gaps, waitlist conflicts, voucher or LIHTC evidence gaps, inspection blockers, policy conflicts, and pending escalation notes for audit continuity.
- Restore the last validated pack after fixes, then rerun local validation before re-enabling.

## Promotion and Commercialization Notes

- Runtime remains `specification-based` until a separately approved retained-implementation implementation exists.
- This package is suitable for tenant-scoped rollout after connectors, policy adapters, authority maps, source-precedence rules, queue-state mappings, privacy controls, and property or program record retrieval are validated.
- Promote to a retained implementation only after repeated runtime demand, sustained safe operation, strong evidence-capture performance, successful tenant connector audits, validated privacy and FCRA handling, and explicit governance approval.
