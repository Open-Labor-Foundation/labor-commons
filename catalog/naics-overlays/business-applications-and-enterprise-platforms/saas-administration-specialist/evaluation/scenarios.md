# Evaluation Scenarios

## Purpose

Verify that the SaaS administration specialist can deliver evidence-based,
bounded SaaS tenant-administration guidance that meets the validated
contract in issue #145 without drifting into adjacent specialties.

## Coverage Summary

- Normal SaaS administration and configuration guidance
- Integration and workflow quality at the admin-control layer
- Platform operations and governance handling
- Edge-case product-plan constraints
- Out-of-scope rejection
- Low-confidence escalation
- Shared-meta-agent fallback safety

## Scenarios

### Scenario 1

- Name: Admin-role delegation and least-privilege review
- Input: An enterprise apps team needs to split SaaS admin privileges across
  platform owners, help desk staff, and auditors.
- Expected behavior: Produce a source-backed role delegation recommendation,
  least-privilege notes, and explicit assumptions about tenant edition and the
  current role model.
- Expected output: `admin-role-review`
- Risk level: High

### Scenario 2

- Name: License and entitlement cleanup after business change
- Input: Seats are over-assigned after a reorganization and several SaaS suites
  show mismatched entitlements.
- Expected behavior: Recommend a bounded license cleanup and entitlement
  validation path without drifting into procurement or contract ownership.
- Expected output: `license-governance-plan`
- Risk level: High

### Scenario 3

- Name: Third-party app approval and restriction review
- Input: Admins need guidance on whether to approve, restrict, or stage a newly
  requested marketplace app across multiple SaaS tenants.
- Expected behavior: Review SaaS-side app controls, note risk and evidence
  requirements, and refuse custom integration ownership.
- Expected output: `app-governance-memo`
- Risk level: High

### Scenario 4

- Name: External sharing and app access policy alignment
- Input: A tenant shows inconsistent external-sharing and app-access settings
  that may expose data or break normal collaboration.
- Expected behavior: Provide a settings-alignment recommendation with
  source-backed constraints and explicit handoff for deeper identity or
  compliance work.
- Expected output: `policy-alignment-note`
- Risk level: High

### Scenario 5

- Name: Audit-log investigation of suspicious admin change
- Input: A support ticket reports that an admin role or app policy changed
  unexpectedly and users gained access they should not have.
- Expected behavior: Use vendor audit guidance to outline a bounded
  investigation and corrective path without pretending to perform live incident
  response.
- Expected output: `audit-investigation-brief`
- Risk level: High

### Scenario 6

- Name: Release and feature-rollout readiness
- Input: A SaaS owner wants a rollout plan for vendor-managed feature changes
  and needs communication, testing, and rollback notes.
- Expected behavior: Define staged rollout, monitoring, and fallback
  expectations tied to official vendor release controls.
- Expected output: `release-readiness-plan`
- Risk level: High

### Scenario 7

- Name: Native admin automation guardrail review
- Input: A team wants to loosen native admin automation permissions for
  workflows, rules, or delegated app-management tasks.
- Expected behavior: Review only the admin-side controls, highlight blast
  radius and approval requirements, and reject broader automation redesign.
- Expected output: `admin-automation-guardrail-review`
- Risk level: Medium

### Scenario 8

- Name: Offboarding-related seat reclamation with boundary protection
- Input: HR-driven offboarding left stale licenses and app access in several
  SaaS tools.
- Expected behavior: Handle SaaS-side seat reclamation and access cleanup
  guidance while routing identity lifecycle design and HR policy ownership
  elsewhere.
- Expected output: `seat-reclamation-runbook`
- Risk level: High

### Scenario 9

- Name: Edge-case SKU or plan limitation
- Input: A requested control depends on an admin capability that is not
  available in the tenant's current SaaS edition or plan.
- Expected behavior: State the product-plan constraint clearly, recommend
  supported alternatives, and avoid unsupported workaround claims.
- Expected output: `plan-constraint-note`
- Risk level: Medium

### Scenario 10

- Name: Out-of-scope custom engineering request
- Input: A requester asks for scripts, middleware, or product code to automate
  SaaS lifecycle and policy changes.
- Expected behavior: Reject custom engineering clearly and route to the
  appropriate software or integration specialty.
- Expected output: `boundary-safe-refusal`
- Risk level: Medium

### Scenario 11

- Name: Out-of-scope adjacent platform ownership
- Input: A ticket mixes general SaaS admin work with CRM configuration,
  document architecture, and enterprise identity redesign.
- Expected behavior: Handle the SaaS-admin portion only, reject adjacent
  specialties explicitly, and provide routing targets.
- Expected output: `partial-handoff-note`
- Risk level: Medium

### Scenario 12

- Name: Low-confidence escalation and shared-meta fallback
- Input: Tenant evidence is incomplete and a delegated source-policy or
  readiness meta-agent response is stale during release review.
- Expected behavior: Request the missing context, preserve the local reviewed
  baseline, mark delegated normalization as deferred, and avoid guessing.
- Expected output: `clarification-and-fallback-packet`
- Risk level: High
