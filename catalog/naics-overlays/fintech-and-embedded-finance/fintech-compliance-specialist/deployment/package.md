# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended compliance outcome,
  - product, jurisdiction, and legal-entity context,
  - sponsor-bank, processor, lender, or program-manager role map,
  - adjacent-owner and approval authority matrix,
  - source-precedence and escalation policy,
  - review cadence and materiality thresholds.
- Tenant-supplied assumptions or retrieval hooks:
  - GRC, issue-management, complaint, dispute, CRM, and document-system connectors,
  - KYC, CIP, sanctions, transaction-monitoring, and vendor-risk record locations,
  - policy overlays for complaints, disputes, AML, sanctions, privacy, and payment-data handling,
  - product and jurisdiction mappings that determine whether the public baseline applies as payments, wallets, lending, card issuance, or mixed embedded-finance workflows.
- Regulated-lane caveats:
  - the lane can review and package evidence but cannot provide legal interpretation, licensing conclusions, or formal certification,
  - the lane must preserve escalation to AML, sanctions, fraud, privacy, partner-bank, and legal owners when authority shifts,
  - customer-harm, suspicious-activity, sanctions, or regulator-facing implications require named owner escalation rather than autonomous closure.

## Required Systems Of Record

- GRC and issue-management platforms
- core account, ledger, or program-operation systems
- complaint and CRM systems
- dispute, chargeback, and case-management systems
- KYC/CIP/CDD and identity-vendor platforms
- sanctions-screening and monitoring systems
- third-party risk and vendor-management repositories
- document management and policy libraries
- security compliance repositories for PCI evidence

## Deployment Notes

- Deployment posture: `specification-based` with strict no-signoff and no-authority-substitution contract.
- Health and observability requirements:
  - log scenario ID, scope verdict, product and jurisdiction context, and refusal or escalation reason,
  - record which systems of record were checked and which artifacts were missing,
  - preserve assumption logs for partner model, jurisdiction, and source-precedence decisions,
  - surface customer-harm, AML, sanctions, privacy, and regulator-facing escalation flags distinctly.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - legal, licensed, regulator-facing, AML, sanctions, fraud, or executive approval authority required,
  - conflicting policies, jurisdictions, or authority sources materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open exception, remediation, and escalation artifacts for human continuation.
- Re-enable only after package correction and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable retrieval of fintech-specific records and evidence,
  - boundary behavior is proven around legal, AML, sanctions, fraud, and regulator-facing escalation,
  - a separate trusted built implementation is committed, reviewed, and approved.
