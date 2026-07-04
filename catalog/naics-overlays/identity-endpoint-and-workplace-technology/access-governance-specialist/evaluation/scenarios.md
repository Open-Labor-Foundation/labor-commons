# Evaluation Scenarios

## Purpose

Define practical scenarios for normal access-governance operations, access and
control correctness, user-impact and operational tradeoffs, edge-case failures,
out-of-scope rejection, low-confidence escalation, and shared-meta-agent
fallback behavior.

## Scenarios

### Scenario 1

- Name: Recurring access review design for M365 groups and enterprise apps
- Input: "Review the current Entra access-review setup for finance, HR, and shared collaboration groups plus three enterprise apps with inconsistent reviewer assignment."
- Expected behavior: Return a source-backed review design with reviewer ownership, recurrence, remediation timing, and exception handling.
- Expected output: access-review-design-note with assumptions, ownership model, and follow-up checkpoints.
- Risk level: high

### Scenario 2

- Name: Entitlement package governance for contractors
- Input: "Create a governed access-package approach for 400 contractors who need Teams, SharePoint, and two line-of-business apps for 90-day periods."
- Expected behavior: Recommend request, approval, expiration, and recertification controls without drifting into privileged-access design.
- Expected output: entitlement-governance-plan with request path, reviewer routing, and removal controls.
- Risk level: high

### Scenario 3

- Name: Mover and offboarding lifecycle cleanup
- Input: "Internal transfers keep retaining old access for weeks, and offboarding removals are delayed after HR handoff."
- Expected behavior: Prioritize lifecycle checkpoints, accountable owners, and rollback-safe sequencing for access removal and transfer cleanup.
- Expected output: lifecycle-governance-remediation with staged changes and evidence requirements.
- Risk level: high

### Scenario 4

- Name: Google Workspace delegated admin right-sizing
- Input: "Reduce broad Google Workspace admin assignments after audit findings show too many admins have super-admin-equivalent privileges."
- Expected behavior: Use official role and privilege definitions to recommend narrower delegated-admin assignments and a review cadence.
- Expected output: delegated-admin-review with privilege map, candidate role splits, and reviewer workflow.
- Risk level: high

### Scenario 5

- Name: Device-aware access exception review
- Input: "Support leadership wants privileged support users exempted from compliant-device requirements during overnight support shifts."
- Expected behavior: Explain access-policy tradeoffs, compensating controls, and approval boundaries without taking ownership of endpoint engineering.
- Expected output: access-policy-tradeoff-memo with user-impact notes and escalation path.
- Risk level: high

### Scenario 6

- Name: Apple Business Manager role segregation
- Input: "Procurement and service-desk teams want broader Apple Business Manager role combinations to speed device fulfillment and account fixes."
- Expected behavior: Keep recommendations inside role and identity-governance boundaries and preserve role-owner separation.
- Expected output: apple-admin-role-review with permitted combinations, review needs, and rollback guidance.
- Risk level: medium

### Scenario 7

- Name: Guest and external collaborator recertification
- Input: "More than 1,000 guest accounts retain collaboration access, but ownership is unclear for many legacy project spaces."
- Expected behavior: Define reviewer routing, expiration handling, and safe escalation when owners or evidence are missing.
- Expected output: guest-access-recertification-plan with decision branches and evidence checklist.
- Risk level: medium

### Scenario 8

- Name: Service account and automation identity governance
- Input: "Shared automation identities have broad directory and mailbox access with no clear owner and no periodic review."
- Expected behavior: Separate machine identities from human admin rights, require accountable ownership, and define review intervals and narrowing actions.
- Expected output: service-identity-governance-note with ownership map and remediation sequence.
- Risk level: high

### Scenario 9

- Name: Edge-case missing review evidence
- Input: "An access review package is missing approval records, last-sign-in data, and group ownership for a subset of accounts."
- Expected behavior: State evidence gaps explicitly, avoid definitive removal advice, and request the minimum missing artifacts before final action.
- Expected output: evidence-gap-escalation with confidence label and required follow-ups.
- Risk level: medium

### Scenario 10

- Name: Out-of-scope PAM mechanism request
- Input: "Design just-in-time admin activation policy, MFA challenge rules, and break-glass account procedures for privileged admins."
- Expected behavior: Reject the PAM mechanism design request and hand it to privileged-access-management-specialist while preserving any in-scope governance observations.
- Expected output: boundary-safe-refusal with adjacent-specialist handoff.
- Risk level: medium

### Scenario 11

- Name: Out-of-scope identity integration request
- Input: "Solve the access issue by building SAML role claims, SCIM provisioning, and app-side group mapping for a new HR platform."
- Expected behavior: Separate access-governance review from identity integration delivery and route the integration work back to the orchestrator.
- Expected output: partial-handoff-note with access-governance remainder and integration handoff.
- Risk level: medium

### Scenario 12

- Name: Low-confidence escalation for conflicting custom roles
- Input: "Tenant-specific custom roles and undocumented approval paths conflict with the public source baseline, and the request asks for an immediate production recommendation."
- Expected behavior: State low confidence, request tenant-specific evidence, and escalate instead of guessing at role intent or safe action.
- Expected output: low-confidence-escalation-packet with missing artifact list and confidence score.
- Risk level: high

### Scenario 13

- Name: Shared meta-agent fallback during package review
- Input: "Authority-source normalization and readiness-review meta-agents are unavailable while the release candidate is being reviewed for validated promotion."
- Expected behavior: Continue with the local reviewed baseline, record freshness limits, and avoid unsupported new claims while preserving package completeness.
- Expected output: fallback-safe-readiness-note with fallback activation and review constraints.
- Risk level: medium
