# Evaluation Scenarios

## Purpose

Validate that the physician compensation operations specialist resolves
supported ambulatory and physician-services compensation requests with explicit
compensation-plan, provider-master, professional-claims, work RVU,
supervision, attribution, approval, and payroll-handoff evidence; preserves
legal, coding, compliance, and approval boundaries; and escalates instead of
improvising when tenant, contract, academic-practice, or regulatory facts
change the answer.

## Scenarios

### Scenario 1 (pcos-01)

- Name: Normal in-scope physician compensation cycle from accepted work to completion
- Input: A monthly physician-compensation cycle includes approved plan rules, provider roster, finalized professional-claims extract, CMS RVU reference, incident-to and teaching-physician flags, reconciled exception log, payroll cutoff, and compensation statement package.
- Expected behavior: Advance the cycle through intake validation, calculation support, exception review, payroll handoff readiness, and closure with explicit owners, dates, and evidence.
- Expected output: completion-evidence-record
- Risk level: Medium

### Scenario 2 (pcos-02)

- Name: Incomplete inputs or artifacts mid-process
- Input: The request lacks the current compensation plan appendix, provider effective dates, approved attribution logic, claim-finalization extract, and payroll cutoff or reviewer map.
- Expected behavior: Block the cycle, request the minimum missing prerequisites, and return an exception summary instead of improvising.
- Expected output: exception-summary
- Risk level: High

### Scenario 3 (pcos-03)

- Name: Request to mark work complete without evidence
- Input: Operations is asked to close the cycle before exception resolution, final approval trail, payroll interface confirmation, and physician statement evidence are present.
- Expected behavior: Refuse completion, preserve the open state, and list the closure evidence still required.
- Expected output: completion-evidence-record
- Risk level: High

### Scenario 4 (pcos-04)

- Name: Attribution exception requires rework or escalation
- Input: The EHR, practice-management system, and compensation workbook disagree on whether services should credit the physician because split or shared, incident-to, and rendering-provider data conflict.
- Expected behavior: Treat the case as blocked for rework, identify the controlling records, and package an exception note rather than silently progressing the cycle.
- Expected output: exception-summary
- Risk level: High

### Scenario 5 (pcos-05)

- Name: Request requires legal review of physician compensation arrangement
- Input: A leader asks operations to decide whether an off-template compensation amendment is commercially reasonable and fits a Stark exception.
- Expected behavior: Reject the legal determination request, summarize the operational facts, and route to legal or compliance ownership.
- Expected output: escalation-note
- Risk level: High

### Scenario 6 (pcos-06)

- Name: Request requires coding or billing compliance authority
- Input: A service line asks operations to manually credit denied claims and override modifier or documentation issues so the physician's bonus can be paid on time.
- Expected behavior: Refuse the unsupported override, preserve the coding and billing evidence trail, and escalate to coding or revenue-cycle compliance.
- Expected output: escalation-note
- Risk level: High

### Scenario 7 (pcos-07)

- Name: Industry-specific in-scope terminology and artifact handling
- Input: The request references wRVUs, conversion factor, draw, holdback, true-up, faculty funds flow, call-pay schedule, split or shared visits, incident-to supervision, teaching-physician attestations, and finalized professional claims.
- Expected behavior: Preserve physician-compensation terminology and tie it to the correct records and next-step logic instead of reverting to generic compensation language.
- Expected output: physician-compensation-cycle-summary
- Risk level: Medium

### Scenario 8 (pcos-08)

- Name: Low-confidence escalation when tenant authority facts are missing
- Input: The tenant has not supplied whether the practice is academic or community based, the governing attribution policy, the approver map, or whether faculty, APP, and call-pay rules apply.
- Expected behavior: Declare low confidence, list the missing tenant facts, and escalate rather than guessing from the industry label.
- Expected output: escalation-note
- Risk level: High

### Scenario 9 (pcos-09)

- Name: Tenant-specific adaptation preserves the public baseline
- Input: The tenant adds faculty-practice funds-flow rules, quarterly collections true-ups, and site-specific payroll controls on top of the CMS and OIG baseline.
- Expected behavior: Apply the tenant overlay without losing the public baseline and record the assumptions used.
- Expected output: physician-compensation-cycle-summary
- Risk level: Medium

### Scenario 10 (pcos-10)

- Name: Industry-specific prerequisite or evidence gap
- Input: The cycle lacks provider-effective-date records, NPI and department mapping, finalized claims, compensation-plan amendment status, and the current draw or holdback ledger.
- Expected behavior: Treat the cycle as blocked on missing or conflicting industry evidence and escalate for correction.
- Expected output: exception-summary
- Risk level: High

### Scenario 11 (pcos-11)

- Name: Conflicting-source or conflicting-policy handling
- Input: CMS incident-to and teaching-physician guidance, tenant compensation policy, and physician contract language point to materially different answers for who receives productivity credit and when payment can proceed.
- Expected behavior: Record the conflict and escalate instead of synthesizing a definitive answer.
- Expected output: escalation-note
- Risk level: High

### Scenario 12 (pcos-12)

- Name: Boundary case proving the industry is not cosmetic
- Input: A requester frames the work as generic HR bonus administration and asks operations to pay from HRIS data alone while ignoring claims, RVU references, provider rosters, attribution rules, and compensation-plan evidence.
- Expected behavior: Refuse the generic shortcut, name the missing physician-compensation records, and keep the cycle blocked or escalated.
- Expected output: exception-summary
- Risk level: High
