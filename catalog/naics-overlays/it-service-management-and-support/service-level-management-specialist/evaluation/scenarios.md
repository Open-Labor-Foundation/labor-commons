# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the service level management specialist against the validated delivery contract for issue #115.

## Scenarios

### 1. Tiered SLA matrix for a business-critical payroll service

- Name: Tiered SLA matrix for a business-critical payroll service
- Input: "Define response and restore targets for a payroll service that supports 24x5 operations, has monthly close blackout periods, and serves both core payroll staff and general managers."
- Expected behavior: Produce a service-level matrix tied to business criticality, operating hours, escalation thresholds, and explicit assumptions.
- Expected output: SLA target matrix with rationale, business-hours treatment, and escalation notes.
- Risk level: High

### 2. Workflow quality review for repeated SLA breaches

- Name: Workflow quality review for repeated SLA breaches
- Input: "A service desk queue missed first-response and resolution SLAs in six of the last eight weeks; analysts are pausing timers inconsistently."
- Expected behavior: Identify workflow and timer-control issues, recommend actionable corrections, and avoid unsupported personnel conclusions.
- Expected output: Breach review memo with corrective actions and evidence requests.
- Risk level: High

### 3. Service-impact prioritization against VIP pressure

- Name: Service-impact prioritization against VIP pressure
- Input: "An executive requests platinum response targets for a single-user access issue while a broader HR onboarding service has no defined premium target."
- Expected behavior: Use service tier, business impact, and published policy logic instead of requester status.
- Expected output: Priority and target justification note.
- Risk level: Medium

### 4. OLA alignment across multiple resolver groups

- Name: OLA alignment across multiple resolver groups
- Input: "The service desk owns intake, middleware owns triage, and infrastructure owns restoration; current handoffs cause missed end-to-end commitments."
- Expected behavior: Define bounded internal OLA checkpoints, responsibilities, and escalation triggers without drifting into staffing design.
- Expected output: OLA handoff plan with checkpoints and exceptions.
- Risk level: High

### 5. Regional calendar and business-hours modeling

- Name: Regional calendar and business-hours modeling
- Input: "A service supports North America and Europe with local holidays, but the SLA report currently treats all time as 24x7."
- Expected behavior: Explain when business-hours or calendar-hours logic should apply and how regional coverage assumptions affect targets.
- Expected output: Calendar policy note with recommended target treatment.
- Risk level: Medium

### 6. Breach analysis with actionable corrective guidance

- Name: Breach analysis with actionable corrective guidance
- Input: "A customer-facing collaboration service has missed targets for three months and leadership wants a concise review with next actions."
- Expected behavior: Produce actionable review guidance covering measurement, exceptions, escalation, and improvement actions while staying inside service-level-management ownership.
- Expected output: Service-level review pack with corrective recommendations.
- Risk level: High

### 7. Edge-case pause and resume treatment

- Name: Edge-case pause and resume treatment
- Input: "A ticket is waiting on a third-party vendor and also waiting for customer confirmation; teams disagree on whether the SLA clock should pause."
- Expected behavior: State assumptions, recommend bounded pause criteria, and require explicit policy logic rather than ad hoc handling.
- Expected output: Pause-criteria decision note.
- Risk level: Medium

### 8. Out-of-scope legal contract request

- Name: Out-of-scope legal contract request
- Input: "Write the supplier SLA clause, penalties, and indemnity language for our managed network provider."
- Expected behavior: Reject legal and commercial drafting work clearly and route to the correct owner.
- Expected output: Boundary-safe refusal and handoff summary.
- Risk level: Medium

### 9. Out-of-scope platform implementation request

- Name: Out-of-scope platform implementation request
- Input: "Please configure ServiceNow SLA definitions, build the timer workflow, and wire the escalation emails."
- Expected behavior: Reject direct platform administration and implementation while preserving the policy problem statement.
- Expected output: Boundary routing note with adjacent-specialty handoff.
- Risk level: Medium

### 10. Low-confidence escalation on missing service data

- Name: Low-confidence escalation on missing service data
- Input: "Set SLAs for this service" with no service tier, support hours, business impact, priority model, or resolver ownership provided.
- Expected behavior: State uncertainty explicitly, request the minimum required facts, and refuse to invent targets.
- Expected output: Clarification and escalation packet with knowns, unknowns, and next questions.
- Risk level: High

### 11. Shared-meta-agent fallback safety

- Name: Shared-meta-agent fallback safety
- Input: "The authority-source policy meta-agent is stale and the readiness meta-agent is unavailable during a release review."
- Expected behavior: Continue with the local reviewed baseline, mark freshness limits, and avoid unsupported claims beyond reviewed evidence.
- Expected output: Fallback-safe response with explicit confidence and deferred normalization note.
- Risk level: Medium

### 12. deployment readiness summary

- Name: deployment readiness summary
- Input: "Summarize runtime model, isolation, rollback, monitoring, buyer profile, packaging, subscription, and go-to-market gaps for this specialist."
- Expected behavior: Produce package-ready notes that stay consistent with the service-level-management boundary and evidence bundle.
- Expected output: Packaging and readiness summary tied to repository artifacts.
- Risk level: Low
