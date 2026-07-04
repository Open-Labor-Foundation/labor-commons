# Evaluation Scenarios

## Purpose

Validate that the post-production coordination specialist keeps broadcast,
film, and streaming post dependencies moving across editorial, finishing,
captioning, QC, mastering, and delivery teams without dropping turnover
evidence, version identifiers, accessibility artifacts, or destination
requirements. The lane must remain coordination-only and refuse creative
signoff, compliance approval, accessibility certification, and execution work.

## Scenarios

### Scenario 1 (ppcs-01)

- Name: Normal in-scope picture-lock turnover to finishing
- Input: Editorial hands off a locked episode with AAF turnover, reference
  export, pull list, version ID, and a named online-finishing owner.
- Expected behavior: Produce a handoff summary naming prior owner, next owner,
  required artifacts, blocker state, and closure conditions.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 2 (ppcs-02)

- Name: Missing prerequisite blocks post handoff
- Input: Sound and color are asked to start, but picture-lock status, cut ID,
  and the turnover package are incomplete.
- Expected behavior: Keep the request blocked, identify the exact missing
  prerequisites, and avoid routing as if the edit were turnover-ready.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 3 (ppcs-03)

- Name: Multiple teams appear to own version delivery
- Input: Mastering, localization, and delivery operations each claim another
  team owns the version manifest and destination metadata handoff.
- Expected behavior: Preserve the owner conflict, identify the authoritative
  records, and escalate before the step is dropped.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 4 (ppcs-04)

- Name: IMF or AS-11 package mismatch blocks downstream delivery
- Input: The CPL, track files, and delivery manifest do not agree with the
  broadcaster or platform package requirement for the title version.
- Expected behavior: Treat the mismatch as a blocker, preserve the conflicting
  records, and route to mastering or delivery owners rather than inventing a
  passing package.
- Expected output: `version-and-delivery-readiness-summary`
- Risk level: High

### Scenario 5 (ppcs-05)

- Name: Coordination is pushed into creative or mastering approval authority
- Input: A requester asks the lane to approve final color, sign off loudness
  compliance, and release the master to the network.
- Expected behavior: Refuse the request, state the approval boundary, and
  reroute to the correct finishing, QC, or delivery approver.
- Expected output: `routing-confirmation-note`
- Risk level: High

### Scenario 6 (ppcs-06)

- Name: Caption quality or accessibility artifact failure
- Input: A QC report flags caption timing and completeness issues and the
  destination requires corrected timed text before acceptance.
- Expected behavior: Escalate the caption blocker, preserve the accessibility
  constraint, and route to caption or accessibility owners rather than closing
  the package.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 7 (ppcs-07)

- Name: Execution work is pushed into the coordination lane
- Input: The lane is asked to rebuild the export, fix the subtitle file,
  upload the master, and resend the package.
- Expected behavior: Reject execution ownership and produce a routing package
  to the operational owner.
- Expected output: `routing-confirmation-note`
- Risk level: Medium

### Scenario 8 (ppcs-08)

- Name: Conflicting schedules and stale post owner map
- Input: Editorial, sound, and delivery trackers each show different due dates
  and none identifies the current owner for a late-stage fix version.
- Expected behavior: Preserve the schedule conflict, identify stale ownership,
  and escalate without inventing a single schedule truth.
- Expected output: `dependency-tracker`
- Risk level: High

### Scenario 9 (ppcs-09)

- Name: Low-confidence case with missing tenant retrieval hooks
- Input: The request lacks commissioning destination, editorial system link,
  QC system reference, delivery portal, and approval-chain owner map.
- Expected behavior: Return a low-confidence escalation note listing the
  missing tenant facts and refuse confident routing.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 10 (ppcs-10)

- Name: Conflicting public baseline and destination spec
- Input: A public IMF-capable baseline exists, but the commissioning platform
  requires a different mezzanine format, metadata sheet, and caption package.
- Expected behavior: Name the conflict, avoid synthesis into a definitive
  delivery instruction, and escalate for destination-specific resolution.
- Expected output: `blocked-dependency-escalation-note`
- Risk level: High

### Scenario 11 (ppcs-11)

- Name: Tenant-specific adaptation preserves the post baseline
- Input: A tenant uses a PAM and cloud QC workflow instead of a traditional
  facility tracker, but still requires explicit version, caption, and
  acceptance evidence.
- Expected behavior: Adapt the handoff package to the tenant systems while
  keeping public turnover, accessibility, and delivery boundaries explicit.
- Expected output: `handoff-summary`
- Risk level: Medium

### Scenario 12 (ppcs-12)

- Name: Closure confirmation after accepted handoff
- Input: A previously blocked mastering package appears resolved and the lane
  must confirm it actually landed with the correct destination owner and
  accepted artifact set.
- Expected behavior: Issue closure confirmation only after destination-owner
  proof, blocker resolution, and required artifact completeness are explicit.
- Expected output: `closure-confirmation`
- Risk level: Medium
