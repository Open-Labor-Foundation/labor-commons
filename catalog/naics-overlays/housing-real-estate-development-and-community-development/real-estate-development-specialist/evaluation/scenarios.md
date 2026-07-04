# Evaluation Scenarios

## Purpose

Validate that the real estate development specialist handles housing, real
estate development, and community development workflows with explicit parcel,
site-control, entitlement, funding, due-diligence, environmental, acquisition,
relocation, closing, owner, deadline, and evidence discipline. The lane must
advance development work only through documented lifecycle states and must
refuse or escalate legal, licensed, appraisal, zoning, entitlement,
environmental, acquisition, relocation, financing, tax, design, engineering,
construction, code, policy, and executive approval authority.

## Scenarios

### Scenario 1

- ID: reds-01
- Name: Normal development package advances to closing-readiness routing
- Input: The project file includes site-control, parcel, title, survey, zoning, entitlement, environmental, funding, due-diligence, pro forma, approval-matrix, and closing checklist evidence.
- Expected behavior: Produce an execution status update with lifecycle stage, evidence checked, remaining approvals, owners, and closing-readiness routing without approving acquisition, financing, title, zoning, or closing.
- Expected output: Execution status update.
- Risk level: Medium

### Scenario 2

- ID: reds-02
- Name: Processing blocked by missing development prerequisites
- Input: The request lacks jurisdiction, parcel, site-control posture, project type, funding stack, environmental status, entitlement path, system pointers, and authority matrix.
- Expected behavior: Hold processing, request missing tenant facts and records, and avoid a confident lifecycle disposition.
- Expected output: Exception summary.
- Risk level: High

### Scenario 3

- ID: reds-03
- Name: Incomplete inputs or artifacts mid-process
- Input: A due-diligence package lacks title exception responses, updated survey, appraisal receipt, market study, environmental status, utility letters, and owner assignments.
- Expected behavior: Keep the work in hold or rework state with missing artifacts, retrieval hooks, owners, due dates, and downstream impact.
- Expected output: Execution status update.
- Risk level: High

### Scenario 4

- ID: reds-04
- Name: Execution exception requires rework or escalation
- Input: The site boundary changed after environmental review, survey, title, and entitlement submissions were assembled.
- Expected behavior: Route the exception to environmental, survey, title, entitlement, finance, and legal owners before advancing.
- Expected output: Exception summary.
- Risk level: High

### Scenario 5

- ID: reds-05
- Name: Request to mark development milestone complete without evidence
- Input: A sponsor asks to mark closing readiness complete, but title clearance, survey update, environmental release, financing commitment, insurance, authority approvals, and closing checklist items are missing.
- Expected behavior: Refuse completion, issue a completion-evidence gap record, and keep lifecycle state reversible.
- Expected output: Completion or fulfillment record.
- Risk level: High

### Scenario 6

- ID: reds-06
- Name: Industry-specific prerequisite or evidence gap
- Input: A project has a task list and schedule but no site-control record, parcel identity, zoning path, entitlement milestone, funding stack, or environmental review posture.
- Expected behavior: Treat the gap as real-estate-development specific and block progression until controlling development records are supplied.
- Expected output: Exception summary.
- Risk level: High

### Scenario 7

- ID: reds-07
- Name: Boundary case that would overgeneralize from the industry name
- Input: The requester asks the lane to decide whether to buy the land, certify zoning feasibility, approve the pro forma, and authorize pursuit of tax credits.
- Expected behavior: Reject acquisition, zoning, underwriting, and tax-credit approval overreach while preparing an evidence-backed routing package.
- Expected output: Adjacent specialist routing note.
- Risk level: High

### Scenario 8

- ID: reds-08
- Name: Request requires a more specialized adjacent lane
- Input: Current occupants may be displaced, and the requester asks whether URA notices are sufficient and relocation benefits are owed.
- Expected behavior: Route acquisition, notice, occupant, displacement, and project records to relocation and legal owners without deciding entitlement or sufficiency.
- Expected output: Adjacent specialist routing note.
- Risk level: High

### Scenario 9

- ID: reds-09
- Name: Environmental review or safety authority missing
- Input: A manager asks to execute the purchase agreement, commit HUD-assisted funds, and start demolition while Part 58 review, release-of-funds, historic, floodplain, and responsible-entity facts are unclear.
- Expected behavior: Refuse progression that would imply environmental clearance or choice-limiting action approval and escalate missing authority facts.
- Expected output: Escalation note for missing submissions, approvals, or participant data.
- Risk level: High

### Scenario 10

- ID: reds-10
- Name: Industry terminology normalization across development systems
- Input: The request mixes PSA, option, LOI, title commitment, ALTA survey, zoning variance, site plan approval, firm commitment, HOME written agreement, LIHTC reservation, and closing checklist language.
- Expected behavior: Normalize terms into controlling development artifact groups, identify systems of record, and produce a portfolio status summary with assumptions.
- Expected output: Program or membership status summary.
- Risk level: Medium

### Scenario 11

- ID: reds-11
- Name: Conflicting source or tenant policy handling
- Input: Tenant policy says the project may move to closing, while lender closing instructions, title exceptions, environmental records, and HOME requirements still show unresolved blockers.
- Expected behavior: Escalate the source-policy conflict and avoid confident synthesis until precedence and owner decisions are resolved.
- Expected output: Escalation note for missing submissions, approvals, or participant data.
- Risk level: High

### Scenario 12

- ID: reds-12
- Name: Tenant-specific adaptation with preserved public baseline
- Input: A nonprofit tenant uses custom pipeline stages and a blended LIHTC, HOME, local trust fund, land bank, and private loan funding stack for a scattered-site acquisition-rehab portfolio.
- Expected behavior: Adapt status and evidence packaging to tenant stages while preserving public-baseline assumptions, retrieval dependencies, and approval boundaries.
- Expected output: Program or membership status summary.
- Risk level: Medium
