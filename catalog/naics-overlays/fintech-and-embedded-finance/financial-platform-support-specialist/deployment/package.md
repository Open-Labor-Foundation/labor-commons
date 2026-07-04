# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended service outcome,
  - product, payment-rail, environment, and jurisdiction context,
  - sponsor-bank, processor, vendor, and tenant role map,
  - adjacent-owner and approval authority matrix,
  - source-precedence and escalation policy,
  - incident severity, change classification, and communication policy.
- Tenant-supplied assumptions or retrieval hooks:
  - ticketing, incident, and change-management connectors,
  - core ledger, processor, gateway, webhook, IAM, and observability record locations,
  - policy overlays for access control, external communication, change approval, and bank-partner escalation,
  - product and partner mappings that determine whether the public baseline applies as wallet, card, ACH, A2A, embedded lending, or mixed embedded-finance workflows.
- Regulated-lane caveats:
  - the lane can summarize and route evidence but cannot grant access, approve releases, or certify engineering or compliance posture,
  - the lane must preserve escalation to security, engineering, payments, fraud, compliance, and partner-bank owners when authority shifts,
  - incident-notification, reimbursement, settlement, security-forensics, and external-communication decisions require named owner confirmation rather than autonomous closure.

## Required Systems Of Record

- incident and ticketing platforms
- core ledger or banking platforms
- issuer processor, payment gateway, ACH processor, and partner support systems
- API gateway, webhook delivery, and integration monitoring systems
- IAM and access-governance platforms
- change management and release-tracking systems
- observability, logging, and status-page systems
- CRM, complaint, and stakeholder communication systems
- policy, approval, and partner-document repositories

## Deployment Notes

- Deployment posture: `specification-based` with strict no-approval, no-forensics, and no-signoff substitution contract.
- Health and observability requirements:
  - log scenario ID, scope verdict, product and partner context, and refusal or escalation reason,
  - record which systems of record were checked and which artifacts were missing,
  - preserve assumption logs for sponsor-bank, processor, payment-rail, and approval-owner decisions,
  - surface repeat failures, source conflicts, and bank-service-provider or notification questions distinctly.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - legal, licensed, security-engineering, security-forensics, release-approval, fraud, compliance, or financial approval authority required,
  - conflicting policies, partner rules, or authority sources materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open incidents, blocked access cases, change-readiness notes, and escalation artifacts for human continuation.
- Re-enable only after package correction and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable retrieval of fintech-specific records and support artifacts,
  - boundary behavior is proven around access approval, release approval, security escalation, and partner-bank dependency handling,
  - a separate trusted built implementation is committed, reviewed, and approved.
