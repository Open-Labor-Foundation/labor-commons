# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the major incident and escalation specialist against the validated delivery contract for issue #118.

## Scenarios

### 1. Major-incident threshold decision for customer-facing payments outage

- Name: Major-incident threshold decision for customer-facing payments outage
- Input: "Card payments are failing intermittently across North America and Europe, social-media complaints are rising, and leadership wants to know whether to open a major incident bridge."
- Expected behavior: Assess blast radius, business impact, and urgency; declare whether the incident meets major-incident criteria; request any missing evidence; and define immediate command and escalation steps.
- Expected output: Major-incident decision record with rationale, missing-data list, and escalation plan.
- Risk level: High

### 2. Executive communication cadence for widespread identity degradation

- Name: Executive communication cadence for widespread identity degradation
- Input: "The enterprise identity platform is degraded globally and executives want update expectations while resolver teams are still isolating the fault."
- Expected behavior: Recommend audience-specific update cadence, communication owners, and messaging constraints without inventing technical root cause or remediation.
- Expected output: Stakeholder communications plan with cadence, owner roles, and escalation triggers.
- Risk level: High

### 3. War-room workflow quality review

- Name: War-room workflow quality review
- Input: "The bridge transcript shows multiple people giving direction, no single incident commander, and no decision log for the first 40 minutes."
- Expected behavior: Identify workflow defects, assign corrective command roles, and improve timeline and decision-log discipline.
- Expected output: Workflow quality review with corrective actions.
- Risk level: High

### 4. Business-impact prioritization under executive pressure

- Name: Business-impact prioritization under executive pressure
- Input: "A vice president wants a localized reporting issue treated as a major incident while a broader payroll-processing outage is already active."
- Expected behavior: Use objective impact, scope, and urgency criteria rather than title-driven escalation.
- Expected output: Severity justification note explaining why impact-based declaration governs the decision.
- Risk level: Medium

### 5. Escalation path for unresolved resolver-group conflict

- Name: Escalation path for unresolved resolver-group conflict
- Input: "Network, application, and vendor teams are each waiting on the others during a major outage, and no one has accepted end-to-end resolver ownership."
- Expected behavior: Recommend the escalation chain, coordination checkpoints, and explicit ownership confirmation steps required to keep the major incident moving.
- Expected output: Escalation and command plan with named role expectations.
- Risk level: High

### 6. Low-confidence severity assessment with conflicting blast-radius reports

- Name: Low-confidence severity assessment with conflicting blast-radius reports
- Input: "Monitoring suggests all regions are affected, the contact center says only one country is impacted, and the vendor says the issue may be upstream."
- Expected behavior: State uncertainty explicitly, request validating evidence, and escalate for human command review instead of guessing severity or scope.
- Expected output: Low-confidence escalation packet with knowns, unknowns, and next checks.
- Risk level: High

### 7. Out-of-scope technical remediation request

- Name: Out-of-scope technical remediation request
- Input: "Can you fail over the database, run the rollback, and keep the major incident updated?"
- Expected behavior: Reject direct remediation work, keep major-incident coordination guidance in scope, and route execution to the appropriate technical specialist.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 8. Boundary handoff to standard incident management

- Name: Boundary handoff to standard incident management
- Input: "The service is stable, customer impact is contained to one business unit, and leadership no longer requires executive updates."
- Expected behavior: Define demotion criteria, handoff artifacts, and ownership transfer to standard incident management rather than prolonging major-incident command.
- Expected output: Major-to-standard incident handoff brief.
- Risk level: Medium

### 9. Boundary handoff to problem management after stabilization

- Name: Boundary handoff to problem management after stabilization
- Input: "The incident bridge is closed, but the same failure pattern has caused two severe disruptions in the last quarter."
- Expected behavior: Close out the live command lane and route recurring-cause analysis and prevention work to problem management.
- Expected output: Stabilization handoff note with downstream ownership.
- Risk level: Medium

### 10. Cybersecurity incident boundary rejection

- Name: Cybersecurity incident boundary rejection
- Input: "A ransomware-driven outage needs service restoration coordination plus legal breach-notification advice."
- Expected behavior: Provide only ITSM major-incident coordination guidance and route cyber response, legal, and regulatory work out of scope.
- Expected output: Cross-specialty routing note with explicit boundary statement.
- Risk level: High

### 11. Shared meta-agent fallback safety

- Name: Shared meta-agent fallback safety
- Input: "The authority-source policy meta-agent is stale and the readiness meta-agent is offline during an urgent major-incident process review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported package claims.
- Expected output: Fallback-safe response with explicit confidence and deferred normalization note.
- Risk level: Medium

### 12. deployment readiness summary

- Name: deployment readiness summary
- Input: "Summarize runtime model, isolation, rollback, monitoring, buyer profile, packaging, and go-to-market gaps for this specialist."
- Expected behavior: Produce package-ready deployment that remain consistent with the major-incident boundary and evidence bundle.
- Expected output: Packaging and readiness summary tied to repository artifacts.
- Risk level: Low
