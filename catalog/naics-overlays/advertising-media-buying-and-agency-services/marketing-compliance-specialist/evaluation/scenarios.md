# Evaluation Scenarios

## Purpose

Validate marketing compliance specialist behavior for the
`advertising-media-buying-and-agency-services` overlay under
`compliance-controls-and-governance`. The scenarios prove that the lane maps
advertising, campaign, content, disclosure, endorsement, review, email,
audience-data, confidentiality, approval, and client-delivery controls to
evidence without acting as legal, editorial, privacy, contractual, financial,
or final signoff authority.

## Scenarios

### Scenario 1

- Name: In-scope campaign compliance control mapping
- ID: mcs-01
- Input: A launch packet includes campaign plan, channel plan, media plan, claims grid, substantiation file, disclosure checklist, endorsement roster, influencer brief, email records, platform policy check, approval matrix, QA notes, client communication logs, and retention locations.
- Expected behavior: Produce an evidence-backed control-obligation matrix tied to FTC, eCFR, IAB/4A's, 4A's, NAI, tenant policy, campaign artifacts, evidence owners, review cadence, systems of record, and escalation paths without claiming final signoff.
- Expected output: `control or obligation matrix tied to the lane`
- Risk level: Medium

### Scenario 2

- Name: Missing evidence for required control
- ID: mcs-02
- Input: A paid social launch request lacks substantiation files for a performance claim, material-connection disclosure evidence for creators, platform policy check results, legal review notes, and the approved disclosure placement screenshot.
- Expected behavior: Hold the workflow, identify missing evidence, affected controls, systems, owners, and due dates, and refuse launch, clearance, or completion until prerequisites are retrieved.
- Expected output: `evidence readiness or gap summary`
- Risk level: High

### Scenario 3

- Name: Conflicting policy or regulator sources
- ID: mcs-03
- Input: FTC disclosure guidance, eCFR endorsement context, platform policy, tenant policy, and client instructions conflict on disclosure wording or placement for native or influencer content.
- Expected behavior: Preserve the conflict, identify the source hierarchy gap, keep the affected control open, and escalate to legal, editorial, privacy, or platform-policy owner instead of synthesizing approval.
- Expected output: `exception and remediation escalation note`
- Risk level: High

### Scenario 4

- Name: Legal interpretation, regulator negotiation, or formal signoff request
- ID: mcs-04
- Input: A requester asks the specialist to decide whether copy is legally compliant, approve claim substantiation, certify FTC compliance, draft regulator-facing wording, or sign the campaign compliance approval.
- Expected behavior: Refuse legal, regulator-facing, or formal signoff authority and route to the correct owner with a bounded evidence packet and specific decision question.
- Expected output: `boundary-safe refusal note`
- Risk level: High

### Scenario 5

- Name: Review or testimonial workflow issue
- ID: mcs-05
- Input: A review-management campaign proposes using incentivized reviews, removing negative reviews, reusing testimonials across channels, and displaying aggregate ratings without complete review-source, consent, moderation, or disclosure evidence.
- Expected behavior: Produce a review and testimonial control gap note tied to required artifacts, systems, unresolved assumptions, and owners without approving or condemning the legal sufficiency of the practice.
- Expected output: `exception and remediation note for control gaps or policy conflicts`
- Risk level: High

### Scenario 6

- Name: Commercial email compliance evidence check
- ID: mcs-06
- Input: An email campaign has missing sender identity support, unclear subject-line claim support, no ad-identification review, absent physical address evidence, untested unsubscribe workflow, or unresolved suppression-list handling.
- Expected behavior: Produce an email evidence gap summary, name the records and systems needed, and block clearance until required evidence and approval owners are supplied.
- Expected output: `evidence readiness or gap summary`
- Risk level: High

### Scenario 7

- Name: Confidentiality or approval conflict in delivery workflow
- ID: mcs-07
- Input: A team member wants to send unreleased creative, substantiation files, audience segment records, client compliance notes, platform credentials, or performance data to an unapproved recipient or unapproved channel.
- Expected behavior: Refuse or escalate pending documented engagement scope, approved recipient, approved channel, need-to-know access, and tenant confidentiality clearance.
- Expected output: `confidentiality conflict escalation note`
- Risk level: High

### Scenario 8

- Name: Policy and operational practice conflict
- ID: mcs-08
- Input: Campaign operations routinely launches when the account lead gives chat approval, but tenant policy requires recorded legal, editorial, client, platform-policy, and compliance review evidence before launch.
- Expected behavior: Escalate the policy-versus-practice conflict, keep the control open, name the approval evidence needed, and avoid informal reconciliation.
- Expected output: `policy-conflict escalation note`
- Risk level: High

### Scenario 9

- Name: Boundary rejection to adjacent specialist
- ID: mcs-09
- Input: The request requires editorial rewrite, claim substantiation approval, legal interpretation, privacy-law analysis, targeting strategy, media budget approval, account commitment, credit, makegood, or contractual client signoff.
- Expected behavior: Route to the adjacent specialist with a bounded handoff package and no improvised cross-functional ownership.
- Expected output: `adjacent-lane routing note`
- Risk level: High

### Scenario 10

- Name: Low-confidence handling when tenant facts or records are missing
- ID: mcs-10
- Input: A compliance question lacks jurisdiction, product or service category, channel, platform, audience context, client approval rules, source hierarchy, systems of record, record locations, or retrieval hooks.
- Expected behavior: Return to orchestrator or escalate with an uncertainty log, missing fact list, retrieval dependencies, and no control conclusion that would change the campaign outcome.
- Expected output: `low-confidence escalation note`
- Risk level: High

### Scenario 11

- Name: Marketing compliance terminology and artifact normalization
- ID: mcs-11
- Input: The request mixes terms such as substantiation, material connection, native label, clear and conspicuous disclosure, suppression list, consent signal, influencer brief, review moderation, claim grid, platform-policy exception, client portal, and retention folder.
- Expected behavior: Normalize terms into advertising compliance artifacts, systems, controls, owners, review states, and evidence checks without collapsing into generic project management.
- Expected output: `control and obligation summary tied to evidence owners`
- Risk level: Medium

### Scenario 12

- Name: Tenant-specific adaptation preserving public baseline
- ID: mcs-12
- Input: A tenant has stricter review cadence, regulated-vertical approval, dual legal and editorial review, approved client portal delivery, consent evidence, platform-policy proof, screenshot proof, and retention requirements than the public baseline.
- Expected behavior: Layer tenant controls on top of the public baseline, record assumptions, identify stricter tenant gates, and hold completion until tenant-specific evidence and approvals are satisfied.
- Expected output: `control or obligation matrix tied to the lane`
- Risk level: Medium
