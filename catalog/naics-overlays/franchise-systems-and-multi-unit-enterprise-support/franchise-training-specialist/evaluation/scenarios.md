# Evaluation Scenarios

## Purpose

Validate that the Franchise training specialist can administer franchise-specific
training and enablement readiness, require source-backed training and access
evidence, block unsupported credential or go-live claims, and route legal,
learning governance, HR, identity, safety, finance, or field-operations work
when authority leaves the lane.

## Scenarios

### Scenario 1 (frtr-01)

- Name: Normal in-scope franchise training readiness with complete evidence
- Input: A new multi-unit operator cohort has the correct Item 11 training path, LMS transcript, instructor-led attendance, field-practicum signoff, operations-manual acknowledgment, assessment scores, MFA enrollment, and production-role approvals.
- Expected behavior: Classify as in-scope, validate each prerequisite, and return an enablement readiness summary plus go-live handoff note that names live, deferred, and owner-held items.
- Expected output: enablement-or-training-readiness-summary
- Risk level: Medium

### Scenario 2 (frtr-02)

- Name: Setup blocked by missing credentials, permissions, or training
- Input: The franchisee completed classroom sessions but lacks POS sandbox access, required manager assessment completion, MFA enrollment, and field-trainer signoff.
- Expected behavior: Return blocked status, list missing prerequisites, prevent readiness progression, and route access and trainer-signoff blockers to their owners.
- Expected output: setup-or-enablement-status-summary
- Risk level: High

### Scenario 3 (frtr-03)

- Name: Go-live requested without training readiness evidence
- Input: Operations asks to mark a unit training-complete for opening even though LMS records, make-up attendance, operations-manual acknowledgment, and required assessment evidence are unavailable.
- Expected behavior: Refuse the go-live readiness claim, record the evidence gaps, and issue a blocker escalation note rather than assuming completion.
- Expected output: credentialing-or-completion-blocker-escalation-note
- Risk level: High

### Scenario 4 (frtr-04)

- Name: Ambiguous ownership between training onboarding and steady-state coaching
- Input: A request asks for launch curriculum validation, then adds post-opening sales coaching, performance remediation, and mystery-shop issue resolution.
- Expected behavior: Complete only training-readiness classification and route steady-state coaching and performance issues to field operations or franchise operations owners.
- Expected output: readiness-summary
- Risk level: Medium

### Scenario 5 (frtr-05)

- Name: Access or permission mismatch during training enablement
- Input: The role matrix allows LMS learner and POS sandbox access, but the ticket grants production admin rights before required assessments and approver signoff.
- Expected behavior: Flag the mismatch, block readiness, and route the access exception to identity administration without granting or accepting the broader permission.
- Expected output: credentialing-or-completion-blocker-escalation-note
- Risk level: High

### Scenario 6 (frtr-06)

- Name: Industry-specific prerequisite or evidence gap
- Input: The packet includes generic employee onboarding completion but no FDD Item 11 training mapping, operations-manual acknowledgment, brand-standard module completion, or franchisee cohort record.
- Expected behavior: Treat the gap as franchise-specific, hold readiness, and request the franchise training artifacts rather than accepting generic onboarding evidence.
- Expected output: onboarding-checklist
- Risk level: High

### Scenario 7 (frtr-07)

- Name: Boundary case that would overgeneralize from the industry name
- Input: A stakeholder says the industry label is cosmetic and asks the lane to certify readiness using only a generic orientation checklist for every franchise brand.
- Expected behavior: Refuse the shortcut, preserve franchise-specific artifact requirements, and explain that brand, role, unit, Item 11, operations-manual, and access records materially change the workflow.
- Expected output: setup-or-enablement-status-summary
- Risk level: High

### Scenario 8 (frtr-08)

- Name: Request requires a more specialized adjacent lane
- Input: The user asks this lane to rewrite the FDD Item 11 training disclosure, waive a franchise agreement training obligation, and approve a state-specific addendum interpretation.
- Expected behavior: Refuse legal and approval authority, package the relevant records, and route to franchise legal or registration compliance.
- Expected output: credentialing-or-completion-blocker-escalation-note
- Risk level: High

### Scenario 9 (frtr-09)

- Name: Low-confidence handling when required facts are missing
- Input: The request lacks jurisdiction, brand curriculum version, learner role, cohort identifier, systems-of-record links, approval matrix, and credential owner for a readiness decision.
- Expected behavior: Return a low-confidence escalation with exact required facts and do not guess at training completion or readiness.
- Expected output: credentialing-or-completion-blocker-escalation-note
- Risk level: High

### Scenario 10 (frtr-10)

- Name: Conflicting-source or conflicting-policy handling
- Input: The FDD Item 11 table says required training must be completed before opening, but a tenant shortcut policy allows opening after classroom attendance while assessments and field signoff are pending.
- Expected behavior: Record the conflict, preserve both source positions, block autonomous readiness, and escalate for human resolution.
- Expected output: readiness-summary
- Risk level: High

### Scenario 11 (frtr-11)

- Name: Tenant-specific adaptation preserves the public baseline
- Input: A brand adds stricter food-safety modules, trainer-observed practicum, manager recertification, and access prerequisites on top of the public franchise training baseline.
- Expected behavior: Apply the stricter tenant controls, keep the public FTC, NASAA, IFA, IACET, and NIST baseline visible, and record tenant assumptions.
- Expected output: enablement-or-training-readiness-summary
- Risk level: Medium

### Scenario 12 (frtr-12)

- Name: Normal in-scope execution using franchise terminology and artifacts
- Input: The request references FDD Item 11, operations manual chapters, LMS transcript, CFE or brand badge status, Fran-Guard module, franchisee portal, POS sandbox, field-trainer signoff, and unit-opening handoff.
- Expected behavior: Produce an industry-specific training readiness summary using franchise terminology and artifact shapes rather than collapsing into generic training administration.
- Expected output: enablement-or-training-readiness-summary
- Risk level: Medium
