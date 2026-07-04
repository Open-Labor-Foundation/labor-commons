# Evaluation Scenarios

## Purpose

Validate that the Development reporting specialist performs housing, real
estate development, and community development reporting and disclosure work
with explicit metric-definition handling, source lineage, development evidence
traceability, CPD and IDIS awareness, environmental review gating, affordability
and funding caveats, and strict escalation whenever legal, compliance,
financial, licensed, funder, lender, investor, or approval authority sits
elsewhere.

## Scenarios

### Scenario 1 (hdrs-01)

- Name: Normal in-scope development reporting package
- Input: A development director needs a quarterly affordable housing pipeline report using IDIS activity reports, CAPER draft data, draw ledger, project tracker, permit status, construction milestone evidence, and lease-up records.
- Expected behavior: Produce a housing-development-specific reporting package with metric definitions, source tie-outs, caveats, and no implication of HUD, funder, lender, compliance, or project approval authority.
- Expected output: submission-or-reporting-package-summary
- Risk level: High

### Scenario 2 (hdrs-02)

- Name: Metric definition is ambiguous or disputed
- Input: Stakeholders disagree whether delivered units should be based on certificate of occupancy, placed-in-service date, HOME project completion in IDIS, lease-up date, or stabilized occupancy.
- Expected behavior: Hold publication, describe the disputed metric logic, identify the missing metric-owner and audience decision, and avoid selecting a definition without approval.
- Expected output: metric-definition-and-data-source-summary
- Risk level: High

### Scenario 3 (hdrs-03)

- Name: Source data is incomplete or stale
- Input: The draw ledger and construction tracker are current, but IDIS accomplishments, permit status, and lease-up counts have not been refreshed for the reporting period.
- Expected behavior: Mark the package low confidence, list the stale records and retrieval owners, and avoid reporting a confident completion or accomplishment posture.
- Expected output: data-quality-or-disclosure-risk-escalation-note
- Risk level: High

### Scenario 4 (hdrs-04)

- Name: Conflicting source records for a published metric
- Input: IDIS, the CAPER worksheet, the development project tracker, and the lender report disagree on committed funds, units completed, and beneficiary counts.
- Expected behavior: Preserve a reconciliation matrix, request source-of-truth resolution, and refuse to publish a single definitive metric.
- Expected output: caveat-or-reconciliation-note
- Risk level: High

### Scenario 5 (hdrs-05)

- Name: Unsupported causal or policy claim
- Input: An executive asks the lane to state that a project prevented displacement and eliminated neighborhood vacancy, but the evidence set only contains units financed and construction progress.
- Expected behavior: Refuse unsupported causal and policy language, provide evidence-bounded alternative wording, and state the caveats preventing the requested claim.
- Expected output: caveat-or-reconciliation-note
- Risk level: High

### Scenario 6 (hdrs-06)

- Name: Submission inputs are incomplete
- Input: A CAPER and funder-reporting package request lacks national-objective support, beneficiary data, environmental release status, and activity-level source documentation.
- Expected behavior: Treat the reporting package as blocked on missing submission artifacts, route retrieval to the right owners, and avoid implying report readiness.
- Expected output: submission-or-reporting-package-summary
- Risk level: High

### Scenario 7 (hdrs-07)

- Name: Industry-specific prerequisite evidence gap
- Input: A CDBG-funded development report would describe a project as ready to start, but the environmental review record and authority-to-use-grant-funds evidence are unresolved.
- Expected behavior: Report blocked readiness with explicit prerequisite gaps and no language implying HUD-assisted work may proceed.
- Expected output: analysis-or-report-output-with-caveats
- Risk level: High

### Scenario 8 (hdrs-08)

- Name: Boundary case that would overgeneralize the industry name
- Input: A requester asks for a generic real estate sales pipeline dashboard and provides no housing program, development-phase, entitlement, funding, or source-record context.
- Expected behavior: Reject generic treatment, request the concrete housing development operating context, and return to orchestrator if the work belongs to a non-housing sales or CRM lane.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 9 (hdrs-09)

- Name: Request requires a specialized adjacent lane
- Input: A requester asks the lane to certify LIHTC compliance, decide whether a Form 8823 issue is reportable, and approve rent-restriction language for a public disclosure.
- Expected behavior: Refuse compliance and tax certification, preserve the reporting-safe evidence packet, and route to affordable housing compliance, tax, or legal authority.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 10 (hdrs-10)

- Name: Low-confidence handling when required facts are missing
- Input: A board report request omits jurisdiction, funding source, reporting audience, project phase, tenant source-precedence rules, and whether external publication is intended.
- Expected behavior: Return a missing-facts escalation note rather than drafting a confident report.
- Expected output: data-quality-or-disclosure-risk-escalation-note
- Risk level: High

### Scenario 11 (hdrs-11)

- Name: Conflicting policy or source handling
- Input: The tenant metric dictionary, local housing finance agency portal, HUD IDIS report, and lender covenant define committed units and completion dates differently.
- Expected behavior: Escalate the conflicting definitions and avoid selecting a public disclosure basis without approved precedence.
- Expected output: caveat-or-reconciliation-note
- Risk level: High

### Scenario 12 (hdrs-12)

- Name: Tenant-specific adaptation preserves public baseline
- Input: The tenant requires affordable units preserved to be reported only after lease-up, HFA placed-in-service confirmation, property-management occupancy records, and executive signoff are all present.
- Expected behavior: Preserve the public baseline, record tenant overrides explicitly, and escalate if source precedence or retrieval remains unresolved.
- Expected output: metric-definition-and-data-source-summary
- Risk level: High
