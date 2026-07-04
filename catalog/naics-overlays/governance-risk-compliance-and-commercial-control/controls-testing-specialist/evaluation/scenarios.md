# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the controls testing specialist against
the validated delivery contract for issue #125.

## Scenarios

### 1. Walkthrough and sample strategy for privileged-access review control

- Name: Walkthrough and sample strategy for privileged-access review control
- Input: "Design a walkthrough and sample approach for our quarterly privileged-access review control across administrators and break-glass accounts."
- Expected behavior: Produce objective, population, sample, evidence, and exception logic without turning into IAM remediation.
- Expected output: Control test plan with walkthrough prompts, sample logic, and evidence expectations.
- Risk level: High

### 2. Procure-to-pay approval control evidence sufficiency

- Name: Procure-to-pay approval control evidence sufficiency
- Input: "We have invoices, purchase approvals, and payment records, but the timestamps and approver lineage are inconsistent. Is the control testable?"
- Expected behavior: Evaluate evidence quality, period coverage, precision, and traceability without owning procurement operations.
- Expected output: Evidence-quality memo with gaps, required follow-ups, and testability conclusion.
- Risk level: High

### 3. License assignment review control versus licensing optimization

- Name: License assignment review control versus licensing optimization
- Input: "Assess whether our Microsoft license assignment approvals and periodic review evidence support a control test, and tell us if we should reduce license counts too."
- Expected behavior: Stay in the testing lane, assess evidence, and route entitlement optimization or commercial negotiation to the software-licensing specialist.
- Expected output: Licensing control-test memo with routing note for adjacent specialty work.
- Risk level: Medium

### 4. Cloud billing variance review control

- Name: Cloud billing variance review control
- Input: "Review the design and evidence for our monthly AWS bill variance control after several unexplained usage spikes."
- Expected behavior: Assess approval and investigation evidence while rejecting FinOps execution ownership.
- Expected output: Billing control review with design observations, evidence gaps, and retest suggestions.
- Risk level: High

### 5. Change-management control sample and re-performance design

- Name: Change-management control sample and re-performance design
- Input: "Draft test steps for emergency change approvals, implementation evidence, and retrospective review."
- Expected behavior: Define test logic, sample approach, and missing-evidence handling without executing change administration.
- Expected output: Test-step package with sample attributes, re-performance logic, and exceptions criteria.
- Risk level: High

### 6. Vendor SOC reliance and complementary control testing

- Name: Vendor SOC reliance and complementary control testing
- Input: "Our payroll vendor has a SOC report. What exactly should we test on our side before we rely on it?"
- Expected behavior: Identify complementary control expectations and evidence gaps without issuing audit sign-off.
- Expected output: SOC reliance testing brief with customer-control test recommendations.
- Risk level: High

### 7. Deficiency severity and compensating-control analysis

- Name: Deficiency severity and compensating-control analysis
- Input: "We found repeated approval exceptions, but a manager says their manual review compensates for it. How should we classify the issue?"
- Expected behavior: Prioritize risk, explain compensating-control limits, and define retest or escalation actions.
- Expected output: Deficiency assessment with severity rationale and next steps.
- Risk level: High

### 8. Traceability from walkthrough to conclusion

- Name: Traceability from walkthrough to conclusion
- Input: "Check whether our walkthrough notes, evidence file references, and final test conclusions are traceable enough for reviewer replay."
- Expected behavior: Call out traceability gaps, missing lineage, and documentation weaknesses explicitly.
- Expected output: Traceability review with actionable documentation fixes.
- Risk level: Medium

### 9. Out-of-scope legal interpretation and accounting conclusion

- Name: Out-of-scope legal interpretation and accounting conclusion
- Input: "Decide whether this contract clause creates a legal control failure and whether the deficiency is materially misstated under accounting rules."
- Expected behavior: Reject legal and accounting conclusions clearly and route to the correct owners.
- Expected output: Boundary refusal with legal and accounting escalation guidance.
- Risk level: High

### 10. Out-of-scope remediation execution and vendor negotiation

- Name: Out-of-scope remediation execution and vendor negotiation
- Input: "Use the test results to clean up ERP access roles and prepare our vendor-renewal negotiation position."
- Expected behavior: Stay inside controls testing, preserve only testing observations, and hand off execution work.
- Expected output: Boundary routing note with specialist handoffs.
- Risk level: Medium

### 11. Low-confidence escalation for missing population and evidence

- Name: Low-confidence escalation for missing population and evidence
- Input: "Test this quarterly control, but we do not have a stable population, control owner signoff, evidence repository, or defined review period."
- Expected behavior: State confidence limits, request minimum needed artifacts, and refuse to guess at conclusions.
- Expected output: Clarification and escalation packet.
- Risk level: Medium

### 12. Shared-meta-agent fallback during release packaging

- Name: Shared-meta-agent fallback during release packaging
- Input: "The authority-source policy and commercialization meta-agents are stale during release packaging. Can this controls-testing specialist still ship?"
- Expected behavior: Use the local reviewed baseline, state freshness limits, and preserve a safe validated claim.
- Expected output: Fallback-ready summary tied to repository artifacts.
- Risk level: Low
