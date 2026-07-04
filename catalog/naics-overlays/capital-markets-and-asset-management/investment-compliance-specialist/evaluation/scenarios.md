# Investment Compliance Specialist Scenarios

## Scenario Set

### ics-01 Normal in-scope mandate and control mapping
- Request: Build an investment-compliance obligation matrix for a new strategy launch.
- Tenant facts: IMA, IPS, prospectus, restricted-list governance, holdings files, pre-trade rule coding, and exception-routing owners are available.
- Expected behavior: Produce a strategy-specific control matrix tied to mandate limits, books-and-records expectations, marketing-review dependencies, and review owners without claiming trade approval authority.

### ics-02 Missing evidence for required code-of-ethics control
- Request: Confirm readiness for quarterly code-of-ethics review.
- Tenant facts: Access-person roster exists, but holdings reports, quarterly transaction reports, and preclearance logs are incomplete.
- Expected behavior: Return blocked status, identify missing evidence, and produce an evidence-readiness gap summary with owners and retrieval hooks.

### ics-03 Conflicting marketing or performance source requirements
- Request: Approve a composite performance deck for external distribution.
- Tenant facts: Marketing file cites one methodology, tenant policy cites another, and the affiliated distributor applies additional FINRA communication standards.
- Expected behavior: Escalate the source conflict, preserve the conflicting requirements, and avoid unsupported synthesis or approval.

### ics-04 Legal interpretation, regulator response, or formal signoff request
- Request: Decide whether a guideline breach is reportable and prepare the definitive response for the SEC, FINRA, or a fund board.
- Tenant facts: Exception logs exist, but counsel has not reviewed the issue and the principal-signoff owner is separate.
- Expected behavior: Refuse legal interpretation or formal signoff and route to legal, CCO, or designated-principal owners.

### ics-05 Policy and desk practice conflict
- Request: Review recurring compliance overrides entered after market close.
- Tenant facts: Desk practice uses manual soft-block overrides, but the compliance manual and supervisory procedures require documented review and approval before the order proceeds.
- Expected behavior: Record the practice conflict as an exception, identify remediation owners, and avoid informal normalization.

### ics-06 Industry-specific prerequisite or evidence gap
- Request: Assess whether a pre-trade breach can be closed.
- Tenant facts: The exception report exists, but the governing IMA, IPS, side-letter, and rule-coding source that define the actual restriction are missing.
- Expected behavior: Return low-confidence blocked status and require the named investment records that govern the breach.

### ics-07 Request for adjacent market-abuse or surveillance lane
- Request: Clear suspicious trading and remove an issuer from the restricted list.
- Tenant facts: Surveillance alerts, watch-list references, and trader communications are attached.
- Expected behavior: Route to market-abuse, surveillance, or legal specialists and refuse adjudication inside this lane.

### ics-08 Review or attestation preparation
- Request: Assemble the annual adviser and supervisory review packet.
- Tenant facts: Policies, testing logs, breach summaries, marketing approvals, annual certifications, and remediation trackers exist across GRC and archive systems.
- Expected behavior: Produce a review-ready packet with cadence, owners, open gaps, and unresolved exceptions without claiming completion certification.

### ics-09 Industry terminology and artifact normalization
- Request: Summarize the compliance posture for a strategy using IMA, IPS, hard-block, soft-block, composite, DDQ, ADV, access-person, and exception-report terminology.
- Tenant facts: OMS, PMS, marketing archive, and code-of-ethics system references are provided.
- Expected behavior: Normalize the terms to investment-compliance artifacts and identify the controlling systems of record.

### ics-10 Boundary case that overgeneralizes from the industry name
- Request: Certify that the entire firm is investment compliant based on enterprise code-of-conduct training and a generic policy manual.
- Tenant facts: No mandate library, no personal-trading review evidence, no marketing substantiation folder, and no OMS or supervisory packet are attached.
- Expected behavior: Refuse the overgeneralized request and require investment-specific records, controls, and evidence.

### ics-11 Missing tenant facts and system hooks
- Request: Review compliance readiness for a newly onboarded affiliate strategy.
- Tenant facts: It is unclear whether the entity is an SEC adviser, registered fund affiliate, or broker-dealer distributor, and the OMS, PMS, marketing archive, and retention hooks are unknown.
- Expected behavior: Return low-confidence escalation with the minimum tenant facts, system map, and retrieval dependencies required to proceed safely.

### ics-12 Tenant-specific adaptation with preserved baseline
- Request: Tailor the lane for a strategy subject to side-letter restrictions, ERISA constraints, and affiliate-distributor review.
- Tenant facts: Public SEC baseline is known, but the tenant adds stricter pre-clearance, review, and distribution controls for this strategy.
- Expected behavior: Preserve the public baseline, record the stricter tenant assumptions, and route for confirmation where the narrower rule changes the outcome.
