# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended support outcome,
  - application, EHR module, ancillary system, environment, affected workflow, and severity,
  - interface name, message type, integration points, downstream systems, and monitoring signal,
  - requester identity, access role, department, job function, and approval context,
  - PHI sensitivity, patient-safety impact, operational continuity impact, and revenue or payer dependency,
  - adjacent-owner and approval authority matrix,
  - source-precedence, downtime, change-management, privacy, security, and escalation policies.
- Tenant-supplied assumptions or retrieval hooks:
  - ITSM, incident, access, and change-management connectors,
  - EHR application administration and clinical workflow ownership references,
  - integration engine logs, interface queues, message acknowledgements, and reconciliation records,
  - IAM, RBAC, break-glass, privacy, audit, and security-policy systems,
  - monitoring, observability, outage status, vendor case, and downtime procedure repositories,
  - payer portal, eligibility, referral, authorization, charge, claim, and revenue-cycle records when the request depends on them.
- Regulated-lane caveats:
  - the lane can summarize and route evidence but cannot grant access, approve privacy or security exceptions, approve production changes, or certify patient-safety readiness,
  - the lane must preserve escalation to clinical informatics, licensed clinicians, privacy, IAM/security, payer, revenue-cycle, release, vendor, and integration owners when authority shifts,
  - PHI, patient-safety, payer interpretation, downtime continuity, and external communication decisions require named owner confirmation rather than autonomous closure.

## Required Systems Of Record

- ITSM and incident management platforms
- EHR application administration and EHR patient/encounter/order/result context
- integration engine, interface queue, API gateway, and message monitoring systems
- identity and access management, RBAC, and audit systems
- privacy and security policy repositories
- change-management and release-tracking systems
- monitoring, observability, and outage communication systems
- downtime procedure and emergency operations repositories
- vendor support portals and application owner records
- revenue-cycle, charge, claim, eligibility, referral, authorization, and payer portal systems

## Deployment Notes

- Deployment posture: `specification-based` with strict no-access-approval, no-privacy-exception, no-security-exception, no-clinical-judgment, no-payer-interpretation, and no-release-approval substitution contract.
- Health and observability requirements:
  - log scenario ID, scope verdict, application, environment, interface, access role, patient-safety impact, PHI posture, and refusal or escalation reason,
  - record which systems of record were checked and which artifacts were missing or contradictory,
  - preserve assumption logs for application owner, integration owner, IAM owner, clinical operations owner, privacy/security owner, payer/revenue owner, and release owner routing,
  - surface repeat failures, PHI risks, patient-safety risks, downtime impacts, authorization/referral/eligibility dependencies, and source conflicts distinctly.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - licensed clinical, privacy-office, security-exception, release-approval, payer-interpretation, vendor-contract, or data-correction authority required,
  - conflicting public guidance, tenant policy, payer rules, vendor instructions, facility downtime procedures, or systems of record materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected healthcare IT support requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open incidents, access blockers, interface packets, downtime notes, change-readiness checklists, vendor cases, and escalation artifacts for human continuation.
- Re-enable only after package correction, source refresh, and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable retrieval of healthcare ITSM, EHR admin, integration, IAM, monitoring, change, downtime, vendor, and privacy/security records,
  - boundary behavior is proven around PHI handling, patient-safety escalation, access approval, production change control, payer dependency routing, and clinical workflow handoffs,
  - a separate trusted built implementation is committed, reviewed, validated, and approved.
