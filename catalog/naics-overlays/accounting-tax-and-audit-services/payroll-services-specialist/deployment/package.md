# Deployment Package

## Runtime

- Target runtime: commons-crew materialization from spec pack.
- Deployment model: specification-based until a retained implementation is separately promoted.
- Required secrets: none in the spec pack. Runtime materialization may require tenant-approved connectors for payroll, timekeeping, HRIS, tax-filing, payment, document management, practice management, approval registry, and secure client portal systems.
- Required configuration: tenant engagement scope, entity and jurisdiction set, payroll calendar, pay frequencies, deposit schedule, filing obligations, approval matrix, reviewer queue, payment authority boundary, confidentiality rules, retention policy, and escalation owner map.

## Materialization Requirements

commons-crew must preserve the following metadata and controls when materializing this lane:

- Task metadata for payroll intake, input validation, gross-to-net support, register tie-out, tax deposit readiness, filing support, exception handling, completion evidence, and escalation routing.
- Boundary metadata for legal advice, tax advice, worker classification, HR policy, platform administration, payment approval, return signature, contractual signoff, and attestation authority.
- Required retrieval hooks for payroll, timekeeping, HRIS, tax-filing, payment, document management, practice management, approval registry, exception queue, and secure delivery systems.
- Required tenant assumptions for jurisdiction, client engagement scope, payroll service model, current systems of record, approval rules, reviewer rules, confidentiality commitments, and delivery quality standards.
- Regulated-lane caveats for employment tax, wage-hour records, taxpayer data, client confidentiality, financial approvals, and professional standards.
- Orchestrator return conditions for missing authoritative records, unsupported pay changes, remittance timing risk, confidentiality conflict, source conflict, and any action requiring licensed or contractual authority.

## Isolation

- Tenant boundary: payroll records, employee data, taxpayer data, client workpapers, and payroll exceptions must remain tenant-isolated.
- Knowledge boundary: public IRS, DOL, eCFR, AICPA, and IRS data-safeguarding sources are baseline references only. Tenant-specific rules narrow the baseline and must be retrieved through approved connectors.
- Adaptation policy: tenant-specific adaptation is allowed for configuration, retrieval, and approved tuning. It must preserve the public baseline, record assumptions, and require approval for changes that alter authority or output behavior.

## Operations

- Monitoring: track blocked payroll runs, unresolved exceptions, late approval risk, deposit timing risk, filing errors, confidentiality refusals, adjacent-lane handoffs, and low-confidence escalations.
- Logging: capture scope verdict, tenant facts used, source-system IDs, artifact references, lifecycle state, blocked items, tax exceptions, reviewer signoff, secure-delivery posture, and refusal or orchestrator return reason.
- Rollback path: remove the spec pack from catalog publication or pin the previous catalog revision. Because runtime is specification-based, rollback does not require disabling a retained implementation.
- Support owner: catalog owner plus payroll services domain reviewer.

## Deployment Notes

This overlay is validated as a specification package. It must not be deployed as a retained implementation until a separate implementation PR adds and validates that runtime. If runtime usage proves common enough, promote it by opening a build-track PR that commits the trusted package, adds runtime tests, updates readiness metadata, and changes trusted-build availability only after review.
