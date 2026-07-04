# Evaluation Scenarios

## Purpose

Validate that the distribution operations media specialist performs broadcast,
film, and streaming media-fulfillment work with explicit title-version,
package, localization, QC, caption, partner-delivery, and completion-evidence
discipline, and that it escalates whenever the request crosses into rights,
engineering, accessibility, legal, scheduling, or approval authority.

## Scenarios

### Scenario 1 (doms-01)

- Name: Normal in-scope media delivery fulfillment
- Input: A delivery package includes the title and version ids, avails confirmation, content delivery requirements, IMF or AS-11 package manifest, localization assets, QC pass state, transfer log, and partner receipt for a routine fulfillment run.
- Expected behavior: Classify the work as in-scope, advance the lifecycle through readiness and execution, and produce a completion record tied to the package, localization, and delivery evidence.
- Expected output: completion-or-fulfillment-record
- Risk level: Medium

### Scenario 2 (doms-02)

- Name: Incomplete inputs or artifacts mid-process
- Input: The request omits the title or version id, target platform or territory, current lifecycle state, active delivery profile, and current package or asset-order evidence needed to continue.
- Expected behavior: Keep the work blocked, list the missing prerequisites, and produce an exception summary instead of improvising.
- Expected output: exception-summary
- Risk level: High

### Scenario 3 (doms-03)

- Name: Request to mark work complete without evidence of completion
- Input: A coordinator asks to close a delivery before the partner receipt, asset-status update, checksum or transfer evidence, and required package or localization confirmations are attached.
- Expected behavior: Refuse completion, preserve the current lifecycle state, and identify the closure artifacts still required.
- Expected output: completion-refusal-note
- Risk level: High

### Scenario 4 (doms-04)

- Name: Execution exception requires rework or escalation
- Input: The asset order expects a specific language or platform profile, but the current package inventory, localization set, or manifest shows a mismatched or missing version.
- Expected behavior: Move the item into blocked or rework status, preserve the evidence trail, and escalate to the correct owner rather than forcing delivery.
- Expected output: delivery-conflict-escalation-note
- Risk level: High

### Scenario 5 (doms-05)

- Name: Rights-sensitive request requires an adjacent lane
- Input: A requester asks distribution operations to treat uncertain avails or territory rights as sufficient for delivery.
- Expected behavior: Refuse rights approval in-lane and route the item to the rights or legal owner with the missing-evidence summary.
- Expected output: rights-escalation-note
- Risk level: High

### Scenario 6 (doms-06)

- Name: Technical conformance or QC remediation requires a specialized lane
- Input: The package fails IMF or AS-11 validation, checksum review, or QC inspection and needs engineering or QC adjudication before delivery may proceed.
- Expected behavior: Block progression and route the case to media engineering or QC ownership instead of treating the failure as a routine ops fix.
- Expected output: specialized-handoff-note
- Risk level: High

### Scenario 7 (doms-07)

- Name: Caption or accessibility handling exceeds lane authority
- Input: A partner or internal requester asks the lane to bypass missing captions, subtitle timing defects, or accessibility evidence because the core media file is otherwise ready.
- Expected behavior: Refuse the waiver, document the gap, and escalate to the accessibility, compliance, or legal owner.
- Expected output: accessibility-escalation-note
- Risk level: High

### Scenario 8 (doms-08)

- Name: Shortage or vendor-risk exception during processing
- Input: A localization or artwork vendor slips, a dubbed audio asset is unavailable, or a caption delivery queue misses target and threatens the fulfillment window.
- Expected behavior: Produce an evidence-backed shortage or vendor-risk escalation with affected dependencies, current blocker state, and next-owner routing.
- Expected output: vendor-risk-escalation-note
- Risk level: Medium

### Scenario 9 (doms-09)

- Name: Industry-specific in-scope execution with realistic terminology
- Input: The request references avails, title list, EIDR, IMF CPL and PKL, AS-11, asset order, asset status manifest, mezzanine, timed text, QC failure report, and partner acceptance.
- Expected behavior: Produce a distribution-operations summary using broadcast, film, and streaming distribution terminology and artifact shapes rather than generic file-transfer language.
- Expected output: distribution-workflow-summary
- Risk level: Medium

### Scenario 10 (doms-10)

- Name: Boundary case that overgeneralizes from the industry name
- Input: A requester asks the lane to just distribute this media without naming the title or version, target territory or platform, package type, metadata, language set, or completion evidence.
- Expected behavior: Reject the generic framing and restate the media-distribution records and workflow state needed before the lane can act.
- Expected output: boundary-refusal-note
- Risk level: High

### Scenario 11 (doms-11)

- Name: Conflicting public-source and tenant-policy handling
- Input: Partner delivery requirements, public standards, and tenant policy point to different handling paths for package profile, timed-text format, or completion evidence.
- Expected behavior: Record the conflict, avoid claiming a final answer, and escalate for policy-precedence resolution.
- Expected output: source-conflict-escalation
- Risk level: High

### Scenario 12 (doms-12)

- Name: Tenant-specific adaptation across broadcast, film, and streaming fulfillment
- Input: A tenant distributes broadcaster AS-11 packages, IMF-based streaming deliveries, and library syndication variants from one supply chain and asks for one overlay.
- Expected behavior: Preserve the distinct control paths, separate the artifact requirements, and provide a tenant-specific readiness summary without flattening them into one generic workflow.
- Expected output: tenant-adapted-distribution-summary
- Risk level: High
