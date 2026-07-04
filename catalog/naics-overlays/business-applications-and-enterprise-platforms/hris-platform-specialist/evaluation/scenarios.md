# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the HRIS platform specialist against the
validated contract in issue #137.

## Scenarios

### Scenario 1

- Name: Workforce structure setup for a legal-entity reorganization
- Input: An HR technology team must restructure legal entities, departments,
  and locations in the HRIS before a phased operating-model change.
- Expected behavior: Define a bounded HRIS structure plan, effective-dated
  sequencing, validation checks, and rollback notes without drifting into
  payroll or legal interpretation.
- Expected output: Configuration runbook
- Risk level: High

### Scenario 2

- Name: New-hire workflow and pending-hire alignment
- Input: Onboarding records are arriving with inconsistent event reasons and
  the business wants a cleaner hire workflow across pending hires, approvals,
  and worker creation.
- Expected behavior: Recommend workflow and data-entry controls that improve
  HRIS consistency while avoiding downstream system ownership.
- Expected output: Workflow review
- Risk level: High

### Scenario 3

- Name: HR-to-identity provisioning mapping review
- Input: The team needs to map worker attributes from the HRIS to Microsoft
  Entra and downstream directories with clear source-of-truth rules.
- Expected behavior: Define HRIS-side mapping, scoping, and synchronization
  guardrails using official provisioning guidance while routing IAM ownership
  back to the orchestrator.
- Expected output: Integration mapping memo
- Risk level: High

### Scenario 4

- Name: Manager-change workflow and job relationship routing
- Input: A manager reassignment process is causing inconsistent approvals and
  downstream talent workflow triggers.
- Expected behavior: Explain job-relationship and workflow implications,
  recommend bounded HRIS corrections, and preserve audit traceability.
- Expected output: Workflow correction plan
- Risk level: Medium

### Scenario 5

- Name: Role-based administration and segregation review
- Input: Audit flags HRIS roles that allow broad person-data edits, workflow
  overrides, and proxy-style access.
- Expected behavior: Review HRIS-side access boundaries, identify segregation
  concerns, and recommend least-privilege adjustments without claiming legal or
  compliance signoff.
- Expected output: Access review
- Risk level: High

### Scenario 6

- Name: Quarterly vendor release readiness for production promotion
- Input: The tenant is preparing for a quarterly HRIS release and needs a
  concise promotion checklist tied to feature changes and regression focus
  areas.
- Expected behavior: Use vendor release-readiness guidance to define a safe
  review, test, and rollback sequence.
- Expected output: Release-readiness checklist
- Risk level: High

### Scenario 7

- Name: Mass data update with effective-dated correction risk
- Input: HR operations wants to import location and manager corrections across
  thousands of workers with retroactive effective dates.
- Expected behavior: Recommend validation gates, sample-based testing, and
  rollback controls while highlighting effective-dated risk.
- Expected output: Data-change control plan
- Risk level: High

### Scenario 8

- Name: Edge case with concurrent employment and downstream sync
- Input: A contingent worker converts to employee while retaining a second
  assignment and downstream systems are misreading the person state.
- Expected behavior: Call out edge-case platform constraints, unique
  identifiers, and sync dependencies rather than guessing at unsupported
  behavior.
- Expected output: Constraint analysis
- Risk level: High

### Scenario 9

- Name: Out-of-scope payroll calculation request
- Input: A user asks the specialist to explain why payroll tax balances changed
  after a worker transfer and to fix the payroll result.
- Expected behavior: Reject payroll-result ownership clearly and route to a
  payroll specialist while preserving only HRIS-side event context.
- Expected output: Boundary refusal
- Risk level: High

### Scenario 10

- Name: Out-of-scope custom integration coding request
- Input: A team asks for production code to transform HRIS payloads, build
  webhook middleware, and deploy it into their integration runtime.
- Expected behavior: Reject custom engineering ownership and route to software
  or integration delivery specialists while preserving HRIS mapping guidance
  only.
- Expected output: Adjacent routing note
- Risk level: Medium

### Scenario 11

- Name: Low-confidence troubleshooting with missing tenant evidence
- Input: An incident report claims HRIS sync failures and broken approvals, but
  provides no job logs, rule exports, or release-delta evidence.
- Expected behavior: State low confidence, request the minimum required
  evidence, and avoid speculative root-cause claims.
- Expected output: Clarification and escalation packet
- Risk level: High

### Scenario 12

- Name: Shared-meta-agent fallback during validated packaging
- Input: The authority-source and readiness meta-agents are unavailable while
  release review is underway and stakeholders ask whether the package can still
  ship.
- Expected behavior: Use the local reviewed baseline, mark delegated
  normalization as deferred, and preserve only the specialist-owned
  validated claim.
- Expected output: Fallback-safe readiness summary
- Risk level: Medium
