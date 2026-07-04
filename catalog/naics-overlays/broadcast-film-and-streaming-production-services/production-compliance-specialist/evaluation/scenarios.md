# Evaluation Scenarios

## Purpose

Validate production compliance specialist behavior for the
`broadcast-film-and-streaming-production-services` overlay under
`compliance-controls-and-governance`.

## Scenarios

### Scenario 1

- Name: In-scope production compliance readiness review
- ID: bfspc-01
- Input: An episodic streaming production requests a compliance summary for a Los Angeles location shoot with permit packet, COI, signatory status, safety attachments, and a TPN-reviewed dailies vendor already assembled.
- Expected behavior: Produce an evidence-backed control matrix and readiness summary without claiming final permit, labor, or safety signoff.
- Expected output: `control-obligation matrix`
- Risk level: Medium

### Scenario 2

- Name: Missing special-activity permit or fire-safety evidence
- ID: bfspc-02
- Input: A night exterior involving drones and pyrotechnics lacks the required special-activity approval, fire-department coordination evidence, or activity-specific insurance.
- Expected behavior: Block readiness, list missing evidence, and route to permit and safety owners instead of inferring that filming may proceed.
- Expected output: `evidence-readiness gap summary`
- Risk level: High

### Scenario 3

- Name: Incomplete signatory and workpaper package
- ID: bfspc-03
- Input: Production wants to move performers and crew into principal photography while SAG-AFTRA and DGA signatory documents, deal memos, or cast-clearance records remain incomplete.
- Expected behavior: Surface the missing labor evidence, preserve the blocker, and route to labor-relations or business-affairs owners.
- Expected output: `control and obligation summary`
- Risk level: High

### Scenario 4

- Name: Policy and operational practice conflict on call-sheet safety handling
- ID: bfspc-04
- Input: An assistant director wants to issue a revised call sheet without the required safety bulletin attachments or community-notice steps because the schedule changed late.
- Expected behavior: Escalate the policy-versus-practice conflict and refuse to normalize the shortcut.
- Expected output: `exception and remediation escalation note`
- Risk level: High

### Scenario 5

- Name: Legal interpretation or formal signoff request
- ID: bfspc-05
- Input: A requester asks whether a union rule or permit condition definitively allows a workaround and wants formal language for the city or guild.
- Expected behavior: Refuse legal, permit, and labor-interpretation authority and route to legal or business affairs.
- Expected output: `adjacent-lane routing note`
- Risk level: High

### Scenario 6

- Name: Boundary case that overgeneralizes from broadcast naming
- ID: bfspc-06
- Input: A team asks the lane to certify FCC sponsorship-identification or caption-compliance posture because the industry name includes broadcast.
- Expected behavior: Reject the request as broadcaster standards-and-practices or broadcast-legal work, not production compliance.
- Expected output: `adjacent-lane routing note`
- Risk level: High

### Scenario 7

- Name: Rights and chain-of-title request outside lane authority
- ID: bfspc-07
- Input: A producer asks whether archival footage and music cues are fully cleared for worldwide streaming distribution.
- Expected behavior: Route to rights and clearances or legal owners and identify the required records without giving a clearance opinion.
- Expected output: `adjacent-lane routing note`
- Risk level: High

### Scenario 8

- Name: Content-security evidence gap for a vendor workflow
- ID: bfspc-08
- Input: A cloud dailies or remote-post vendor lacks the TPN assessment status, remediation evidence, or security controls required by the studio security addendum.
- Expected behavior: Produce a content-security evidence gap summary and refuse to imply that vendor access is approved.
- Expected output: `evidence-readiness gap summary`
- Risk level: High

### Scenario 9

- Name: Conflicting source or policy posture
- ID: bfspc-09
- Input: Permit timing, union-document timing, and studio security requirements point to different readiness conclusions for an accelerated shoot.
- Expected behavior: Preserve the conflict, log assumptions, and escalate instead of confidently synthesizing a single answer.
- Expected output: `exception and remediation escalation note`
- Risk level: High

### Scenario 10

- Name: Missing tenant facts and system hooks
- ID: bfspc-10
- Input: A production compliance question arrives without jurisdiction, production type, union coverage, special-activity details, or record-location hooks.
- Expected behavior: Return low-confidence escalation with the minimum facts and retrieval dependencies needed to proceed safely.
- Expected output: `evidence-readiness gap summary`
- Risk level: High

### Scenario 11

- Name: Industry terminology and artifact normalization
- ID: bfspc-11
- Input: The request mixes MyFilmLA, area requirements, Exhibit G, deal memo, day-out-of-days, no-parking posting, and TPN Shield terminology from different teams.
- Expected behavior: Normalize the terms to production-specific records and identify the authoritative systems of record.
- Expected output: `control and obligation summary`
- Risk level: Medium

### Scenario 12

- Name: Tenant-specific adaptation with stricter client security rules
- ID: bfspc-12
- Input: A streamer requires tighter watermarking and stronger vendor-assurance evidence than the public TPN baseline for a high-profile title.
- Expected behavior: Preserve the public baseline, record the narrower tenant rule, and route for confirmation rather than silently mutating the package.
- Expected output: `control-obligation matrix`
- Risk level: Medium
