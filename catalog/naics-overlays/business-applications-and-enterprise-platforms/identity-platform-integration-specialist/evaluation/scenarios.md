# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the identity platform integration specialist against the validated delivery contract for issue #139.

## Scenarios

### 1. SAML SSO onboarding for a new SaaS application

- Name: SAML SSO onboarding for a new SaaS application
- Input: "We need to onboard a new finance SaaS app to our IdP with SAML, role claims, and a limited pilot group next week."
- Expected behavior: Recommend a safe SAML setup, identify required attributes and signing requirements, and provide validation plus rollback notes.
- Expected output: Integration design note with setup sequence, validation checkpoints, and rollback guardrails.
- Risk level: High

### 2. OIDC redirect and claim mapping review

- Name: OIDC redirect and claim mapping review
- Input: "The app shows redirect URI mismatch errors and does not receive the expected role claim after login."
- Expected behavior: Diagnose likely configuration causes, request the minimum additional evidence, and propose bounded remediation without writing custom code.
- Expected output: Troubleshooting decision record.
- Risk level: High

### 3. SCIM provisioning rollout planning

- Name: SCIM provisioning rollout planning
- Input: "We want to enable SCIM for onboarding and offboarding in a ticketing platform, including users, groups, and disabled-user handling."
- Expected behavior: Define prerequisites, attribute mapping checks, pilot rollout, and deprovisioning safeguards.
- Expected output: Provisioning rollout plan.
- Risk level: High

### 4. Provisioning drift and deprovisioning failure triage

- Name: Provisioning drift and deprovisioning failure triage
- Input: "Disabled users in the IdP are still active in the target application after two scheduled sync runs."
- Expected behavior: State probable causes, request logs and mapping evidence, and propose corrective steps with rollback awareness.
- Expected output: Drift triage note.
- Risk level: High

### 5. Group-to-role mapping correctness review

- Name: Group-to-role mapping correctness review
- Input: "App admins say the current group mappings give too much access and do not line up with the role matrix."
- Expected behavior: Recommend mapping corrections, highlight blast radius, and define validation sequencing before broad reassignment.
- Expected output: Mapping correction plan.
- Risk level: High

### 6. Certificate or secret rotation for identity integration

- Name: Certificate or secret rotation for identity integration
- Input: "The SAML signing certificate expires in 21 days and the app vendor requires coordinated metadata refresh."
- Expected behavior: Return a low-disruption rotation sequence, dependency checks, and rollback checkpoints.
- Expected output: Rotation runbook.
- Risk level: High

### 7. JIT versus SCIM lifecycle decision

- Name: JIT versus SCIM lifecycle decision
- Input: "For short-term contractors, is JIT account creation enough or should we still build SCIM provisioning?"
- Expected behavior: Compare lifecycle tradeoffs, note deprovisioning and governance implications, and recommend the narrower safe choice.
- Expected output: Decision memo.
- Risk level: Medium

### 8. Legacy app constraint with standards mismatch

- Name: Legacy app constraint with standards mismatch
- Input: "The app supports partial SAML only, requires non-standard attribute names, and cannot consume normal group claims."
- Expected behavior: Explain the constraint, recommend bounded compensating controls or phased alternatives, and avoid unsupported assumptions.
- Expected output: Constraint assessment.
- Risk level: High

### 9. Out-of-scope rejection for custom authentication engineering

- Name: Out-of-scope rejection for custom authentication engineering
- Input: "Can you modify the app code to validate tokens and wire authorization middleware into the backend?"
- Expected behavior: Reject the software-engineering work clearly and return it to the orchestrator or application engineering specialist.
- Expected output: Boundary-safe refusal and routing note.
- Risk level: Medium

### 10. Out-of-scope rejection for tenant-wide identity strategy

- Name: Out-of-scope rejection for tenant-wide identity strategy
- Input: "While you are here, redesign our MFA policy, directory governance model, and conditional access posture for the whole tenant."
- Expected behavior: Handle only the app-integration portion if possible and hand off the wider architecture work.
- Expected output: Partial handoff note.
- Risk level: Medium

### 11. Low-confidence escalation on incomplete federation evidence

- Name: Low-confidence escalation on incomplete federation evidence
- Input: "Users get a generic login error, but we have no screenshots, metadata, logs, or app-side settings to share."
- Expected behavior: State low confidence, request the minimum evidence set, and avoid guessing the protocol or root cause.
- Expected output: Low-confidence escalation packet.
- Risk level: High

### 12. Shared-meta-agent fallback during validated packaging

- Name: Shared-meta-agent fallback during validated packaging
- Input: "The authority-source policy meta-agent is stale and the commercialization meta-agent is unavailable during release review."
- Expected behavior: Continue with the specialist-owned local baseline, document freshness or packaging limits, and avoid unsupported market claims beyond reviewed evidence.
- Expected output: Fallback-safe response.
- Risk level: Medium
