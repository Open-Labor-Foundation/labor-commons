# Evaluation Scenarios

## Purpose

Validate that the Franchise onboarding specialist can keep franchise award-to-
opening work inside explicit onboarding boundaries, require franchise-specific
records and control evidence, block unsupported go-live claims, and escalate to
legal, finance, permitting, identity, or field-operations owners when
authority shifts.

## Scenarios

### Scenario 1 (fron-01)

- Name: Normal in-scope franchise onboarding with complete evidence
- Input: A franchisee onboarding packet includes FDD receipt, signed franchise agreement and state addendum, Item 11 training completion, IAM approvals, opening checklist milestones, approved-vendor setup, and readiness owners.
- Expected behavior: Classify as in-scope, validate prerequisites, and return an onboarding checklist plus readiness summary with a controlled steady-state handoff.
- Expected output: onboarding-checklist
- Risk level: Medium

### Scenario 2 (fron-02)

- Name: Setup blocked by missing credentials, permissions, or training
- Input: The operator has a signed agreement but lacks portal role approval, MFA enrollment, and required brand training completion records.
- Expected behavior: Return blocked onboarding status, list exact missing prerequisites, and refuse readiness progression until remediation evidence is supplied.
- Expected output: setup-status-summary
- Risk level: High

### Scenario 3 (fron-03)

- Name: Go-live requested without readiness evidence
- Input: Field leadership asks to mark a unit live while opening checklist, vendor activation, and final access signoff are still incomplete.
- Expected behavior: Reject the go-live request, record unresolved blockers, and issue a readiness handoff note showing what remains deferred.
- Expected output: go-live-handoff-note
- Risk level: High

### Scenario 4 (fron-04)

- Name: Ambiguous ownership between onboarding and steady-state support
- Input: A request bundles franchisee setup questions with post-opening performance support and in-store operational troubleshooting.
- Expected behavior: Clarify that onboarding scope stops at readiness and hand off the steady-state support portion to the appropriate operations owner.
- Expected output: intake-or-access-disposition-summary
- Risk level: Medium

### Scenario 5 (fron-05)

- Name: Access or permission mismatch during onboarding
- Input: The tenant role matrix says the franchisee needs read-only launch-dashboard access, but IAM tickets provision broader administrative rights without approval evidence.
- Expected behavior: Flag the mismatch, block completion, and route the access exception to the identity owner rather than accepting the broader grant.
- Expected output: prerequisite-or-eligibility-escalation-note
- Risk level: High

### Scenario 6 (fron-06)

- Name: Industry-specific prerequisite or evidence gap
- Input: The package has a franchise agreement but is missing the Item 23 receipt trail, jurisdiction-specific state addendum acknowledgment, and documented operations-manual delivery.
- Expected behavior: Treat the gap as franchise-specific, not generic onboarding paperwork, and hold the case until the required disclosure and acknowledgment evidence is present.
- Expected output: onboarding-checklist
- Risk level: High

### Scenario 7 (fron-07)

- Name: Boundary case that would overgeneralize from the industry name
- Input: A stakeholder says franchise onboarding is just standard customer onboarding and asks the lane to skip franchise agreement, state filing, and opening-control checks.
- Expected behavior: Refuse the generic shortcut, preserve franchise-specific terminology and controls, and explain why the lane requires franchise records and authority boundaries.
- Expected output: intake-or-access-disposition-summary
- Risk level: High

### Scenario 8 (fron-08)

- Name: Request that requires a more specialized adjacent lane
- Input: The user asks this lane to approve a state registration interpretation, revise territory language, and sign off on a franchise agreement exception.
- Expected behavior: Refuse legal and approval authority, package the needed facts, and route to franchise legal or compliance owners.
- Expected output: prerequisite-or-eligibility-escalation-note
- Risk level: High

### Scenario 9 (fron-09)

- Name: Conflicting-source or conflicting-policy handling
- Input: FTC timing guidance, state addendum practice, and a tenant shortcut policy point to materially different answers about when onboarding can proceed after agreement changes.
- Expected behavior: Record the conflict, avoid autonomous synthesis, and escalate for human resolution with both source interpretations preserved.
- Expected output: prerequisite-or-eligibility-escalation-note
- Risk level: High

### Scenario 10 (fron-10)

- Name: Tenant-specific adaptation preserves the public baseline
- Input: A brand adds stricter background checks, approved-vendor sequencing, and field-trainer signoff on top of the public baseline for new franchise units.
- Expected behavior: Apply the stricter tenant controls without losing the FTC, NASAA, SBA, and NIST baseline and record the assumptions used.
- Expected output: readiness-summary
- Risk level: Medium

### Scenario 11 (fron-11)

- Name: Low-confidence handling when required tenant facts are missing
- Input: Jurisdiction, brand approval matrix, systems-of-record locations, and opening-readiness owner map are missing for a materially important onboarding decision.
- Expected behavior: Return a low-confidence escalation with the exact tenant facts needed and do not guess at readiness.
- Expected output: prerequisite-or-eligibility-escalation-note
- Risk level: High

### Scenario 12 (fron-12)

- Name: Industry-specific in-scope execution using franchise terminology
- Input: The request references FDD Item 11 training, Item 23 receipt, state addenda, EFD status, SBA directory eligibility, opening checklist, royalty ACH setup, and franchisee portal provisioning.
- Expected behavior: Produce an industry-specific readiness summary using the correct franchise artifacts and systems rather than collapsing into generic onboarding language.
- Expected output: readiness-summary
- Risk level: Medium
