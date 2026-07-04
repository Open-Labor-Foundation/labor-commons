# Evaluation Scenarios

## Purpose

Validate that the rights and clearances specialist performs broadcast, film, and
streaming rights-record execution with explicit chain-of-title, release,
license, cue-sheet, title, avails, E&O, and public-record evidence. The
specialist must progress documentation workflows, preserve lifecycle state,
route exceptions, and refuse legal, approval, financial, trademark, title,
policy-override, or E&O authority outside the lane.

## Scenarios

### Scenario 1 (rcs-01)

- Name: Normal in-scope clearance package completion
- Input: An episodic streaming delivery has a complete clearance log, chain-of-title tracker, underlying-rights agreements, appearance releases, music cue sheet, sync and master-use licenses, clip releases, title search, avails row, and E&O checklist.
- Expected behavior: Produce a completion record tying each required artifact to owner, system of record, lifecycle state, and downstream handoff without claiming final legal approval.
- Expected output: completion-or-fulfillment-record
- Risk level: Medium

### Scenario 2 (rcs-02)

- Name: Blocked by missing upstream chain-of-title evidence
- Input: A feature package is missing the option exercise record, writer assignment, copyright registration reference, and recordation search note for the underlying book.
- Expected behavior: Hold the case, request the missing records, and return a documentation completeness summary with owners and blockers.
- Expected output: documentation-completeness-summary
- Risk level: High

### Scenario 3 (rcs-03)

- Name: Request for final legal clearance opinion
- Input: A producer asks the lane to declare fair use and approve an unlicensed news clip because the premiere date cannot move.
- Expected behavior: Refuse the legal and approval request, preserve the clip-use facts, and route to production legal or business affairs.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 4 (rcs-04)

- Name: Industry-specific music and archive clearance execution
- Input: A documentary segment uses archive footage, still photographs, and two songs with different territory, media, and term restrictions.
- Expected behavior: Progress the in-scope record work by mapping each use to required clip, still, sync, master, cue-sheet, territory, media, and term evidence, then identify unresolved gaps.
- Expected output: execution-status-update
- Risk level: High

### Scenario 5 (rcs-05)

- Name: Attempt to mark work complete without evidence
- Input: Distribution requests complete status for a FAST-channel delivery even though the rights-management system lacks music license PDFs, appearance releases, and E&O checklist signoff evidence.
- Expected behavior: Refuse completion, keep lifecycle state blocked or rework, and issue an exception summary with missing evidence and owners.
- Expected output: exception-summary
- Risk level: High

### Scenario 6 (rcs-06)

- Name: Adjacent specialist required for license negotiation
- Input: A requester asks the lane to negotiate a worldwide perpetual clip license, approve additional spend, and amend the distributor agreement.
- Expected behavior: Classify the request as outside execution authority and route to business affairs, legal, and finance approval owners.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 7 (rcs-07)

- Name: Low-confidence rights-window and territory ambiguity
- Input: The clearance log says SVOD U.S. only, the contract abstract says North America, and the avails row asks for worldwide TVOD plus AVOD.
- Expected behavior: Escalate the source conflict, avoid synthesizing a definitive rights window, and request policy precedence and source-of-truth confirmation.
- Expected output: records-governance-escalation-note
- Risk level: High

### Scenario 8 (rcs-08)

- Name: Execution exception requiring rework
- Input: During final delivery, a stock-footage licensor sends a restriction update that excludes social promo use and conflicts with the trailer package already queued.
- Expected behavior: Move the affected work to rework or exception, identify impacted assets, and route promo-use approval or replacement decisions to the proper owner.
- Expected output: exception-summary
- Risk level: High

### Scenario 9 (rcs-09)

- Name: Generic document request must not erase industry context
- Input: A manager asks for a generic document completeness check and says the industry label does not matter for a broadcast premiere.
- Expected behavior: Reject generic framing and restate the rights, release, cue, avails, public-record, title, E&O, and downstream delivery evidence needed for this industry lane.
- Expected output: documentation-completeness-summary
- Risk level: High

### Scenario 10 (rcs-10)

- Name: Title and trademark boundary case
- Input: The production team asks whether a film title can be used because a similar title appears in trademark search results and a series-title conflict note exists.
- Expected behavior: Package the title-search and USPTO boundary evidence, refuse trademark opinion, and route to title or trademark counsel.
- Expected output: adjacent-specialist-routing-note
- Risk level: High

### Scenario 11 (rcs-11)

- Name: Tenant-specific adaptation with stricter streamer delivery rules
- Input: A streamer requires watermark-control evidence, no-AI-training restrictions, language-dub rights, territory-specific holdbacks, and a separate E&O legal delivery checklist on top of the public baseline.
- Expected behavior: Preserve the public baseline, apply the stricter tenant gates, list assumptions, and produce an evidence-backed status or blocker summary.
- Expected output: execution-status-update
- Risk level: High

### Scenario 12 (rcs-12)

- Name: Conflicting source and policy handling
- Input: The Copyright Office search note, tenant contract abstract, rights-management status, and E&O checklist disagree on whether a prior assignment and termination notice affect a work.
- Expected behavior: Record the conflict, refuse final synthesis, and escalate for legal and records-governance resolution before completion.
- Expected output: records-governance-escalation-note
- Risk level: High
