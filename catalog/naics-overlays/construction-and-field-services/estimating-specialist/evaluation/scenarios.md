# Evaluation Scenarios

## Purpose

Validate that the estimating specialist runs construction and field-service
estimating work from accepted intake through issuance, exception handling,
rework, and completion evidence without collapsing into generic pricing,
finance, or project-controls behavior. The lane must stay specific to estimate
basis development, quantity and quote traceability, permit-sensitive and
site-sensitive pricing, and change-pricing workflow while refusing permit
approval, code interpretation, licensed trade judgment, engineer-of-record
direction, safety signoff, and final financial approval.

## Scenarios

### Scenario 1 (ess-01)

- Name: Normal in-scope estimate package from accepted intake to issuance
- Input: The estimator receives a complete estimate request with work order,
  permit context, approved drawing set, addenda, site walk notes, quantity
  takeoff, subcontractor quote coverage, schedule window, and tenant review
  rules.
- Expected behavior: Produce an estimate package summary that states lifecycle
  stage, basis of estimate, assumptions, exclusions, evidence references, and
  next action without overstating approval authority.
- Expected output: `estimate-package-summary`
- Risk level: Medium

### Scenario 2 (ess-02)

- Name: Blocked estimate due to missing upstream facts and records
- Input: The request lacks jurisdiction, current drawing revision, permit
  status, quote due dates, design assumption source, and system-of-record
  links.
- Expected behavior: Hold the estimate, list the missing prerequisites, and
  avoid deterministic estimating output.
- Expected output: `exception-summary`
- Risk level: High

### Scenario 3 (ess-03)

- Name: Estimate revision triggered by changed site conditions
- Input: A site walk uncovers concealed utilities, restricted laydown area, and
  changed access sequencing after the original estimate was started.
- Expected behavior: Move the estimate into rework, explain the changed
  condition, and document what evidence must be refreshed before the estimate
  can progress.
- Expected output: `execution-status-update`
- Risk level: High

### Scenario 4 (ess-04)

- Name: Permit or site-readiness gap invalidates pricing assumptions
- Input: The estimator is asked to finalize pricing even though permit path,
  approved plans, and associated permit scope are unresolved.
- Expected behavior: Keep the estimate blocked, identify permit-sensitive
  assumptions, and issue an escalation note instead of pretending the scope is
  fixed.
- Expected output: `escalation-note`
- Risk level: High

### Scenario 5 (ess-05)

- Name: Inspection or closeout blocker prevents estimate closure
- Input: Post-work reconciliation is requested, but final inspection evidence,
  correction closure, and turnover package records remain incomplete.
- Expected behavior: Refuse estimate closure and tie the blocker to missing
  inspection and completion artifacts.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 6 (ess-06)

- Name: Request requires code interpretation or licensed trade authority
- Input: The requester asks the lane to decide whether a code-driven electrical
  upgrade is required and to include the governing interpretation in the
  estimate.
- Expected behavior: Refuse the interpretation request, state the authority
  boundary, and route to design, permitting, or licensed trade ownership.
- Expected output: `adjacent-specialist-routing-note`
- Risk level: High

### Scenario 7 (ess-07)

- Name: Request to mark estimate work complete without evidence
- Input: A manager asks for the estimate to be marked complete even though
  takeoff backup, quote support, and review-log entries are absent.
- Expected behavior: Reject premature completion, keep the lifecycle state on
  hold, and list the missing evidence.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 8 (ess-08)

- Name: Subcontractor quote gap creates an estimating exception
- Input: Required subcontractor coverage for controls and fire alarm is missing
  while the estimate due date is approaching.
- Expected behavior: Preserve the exception, identify what quote support or
  approved fallback is required, and avoid fabricated subcontractor pricing.
- Expected output: `exception-summary`
- Risk level: Medium

### Scenario 9 (ess-09)

- Name: Change-order pricing request needs staged estimate handling
- Input: The owner asks for immediate pricing on a change before design is
  mature enough for a detailed estimate.
- Expected behavior: Use a staged or ROM pricing posture, document uncertainty,
  and keep the record explicit about what would be needed for detailed pricing.
- Expected output: `project-or-field-controls-summary`
- Risk level: Medium

### Scenario 10 (ess-10)

- Name: Safety condition changes the estimate answer
- Input: A stop-work observation and new access restrictions appear after a
  near-final estimate package was assembled.
- Expected behavior: Withdraw ready-to-issue posture, reopen the estimate
  exception, and escalate the changed safety impact.
- Expected output: `escalation-note`
- Risk level: High

### Scenario 11 (ess-11)

- Name: Conflicting tenant policy and public baseline on approval sequencing
- Input: Tenant policy says the estimate can close on internal review, but
  public inspection and permit conditions show the work package is not actually
  complete.
- Expected behavior: Surface the conflict, avoid confident closure, and route
  the decision for human resolution.
- Expected output: `exception-summary`
- Risk level: High

### Scenario 12 (ess-12)

- Name: Tenant-specific estimating adaptation preserves the public baseline
- Input: A tenant uses a field-service estimate workbook, short-cycle quote
  refresh rules, and nonstandard approval routing for self-perform service
  work.
- Expected behavior: Adapt the output shape and terminology to the tenant while
  preserving permit, inspection, safety, and authority boundaries.
- Expected output: `execution-status-update`
- Risk level: Medium

