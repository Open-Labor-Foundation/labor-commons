# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended financial outcome,
  - sponsor-bank, processor, program-manager, and legal-entity map,
  - product type, payment rail, and settlement-account structure,
  - ledger of record, ERP or GL interface, and reserve ownership map,
  - approval matrix for adjustments, reserves, write-offs, and manual interventions,
  - source-precedence and escalation policy across bank, processor, tenant, and public sources.
- Tenant-supplied assumptions or retrieval hooks:
  - sponsor-bank statements, processor settlement feeds, FBO or custodial account extracts, and subledger connectors,
  - ACH, card, chargeback, dispute, reserve, treasury, ERP, and document-system record locations,
  - partner-bank operating procedures, processor cutoffs, fee schedules, reserve schedules, and return-handling rules,
  - tenant policy overlays for posting authority, exceptions, write-offs, and escalation routing,
  - runtime flags for whether Part 370, alternative recordkeeping, or custodial-account caveats apply.
- Regulated-lane caveats:
  - the lane can review and package evidence but cannot redesign integrations or approve engineering changes,
  - the lane cannot provide legal, compliance, accounting, treasury, partner-bank, or tax authority,
  - disputes, fraud, AML, consumer-harm, or partner-bank approval implications require named-owner escalation rather than autonomous closure,
  - proposed or evolving custodial-account requirements must be handled as explicit runtime caveats, not assumed obligations.

## Required Systems Of Record

- sponsor-bank core banking or deposit platform
- processor settlement and reporting platform
- program subledger or wallet ledger
- treasury or bank-statement ingestion system
- ERP or general-ledger interface
- ACH operator or FedACH reporting tools
- chargeback, dispute, and case-management platforms
- compliance, fraud, and AML systems when exceptions cross boundaries
- document, contract, and policy repositories

## Deployment Notes

- Deployment posture: `specification-based` with strict no-signoff, no-config-change, and no-authority-substitution contract.
- Health and observability requirements:
  - log scenario ID, scope verdict, sponsor bank, processor, rail, and the source set used,
  - record which statements, files, or ledgers were checked and which dependencies were missing,
  - preserve assumption logs for settlement windows, reserve logic, FBO or custodial structure, and ledger-of-record decisions,
  - surface engineering, compliance, accounting, treasury, fraud, AML, and partner-bank escalation flags distinctly.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - legal, licensed, engineering-change, accounting-signoff, treasury, compliance, fraud, AML, or partner-bank approval authority is required,
  - conflicting public guidance, partner operating rules, or tenant policies materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open reconciliation notes, exception packets, and blocker logs for human continuation.
- Re-enable only after package correction and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable retrieval of sponsor-bank, processor, ledger, and custodial-account records,
  - boundary behavior is proven around engineering changes, partner-bank approvals, legal or compliance interpretation, formal accounting, and unsupported overrides,
  - a separate trusted built implementation is committed, reviewed, and approved.
