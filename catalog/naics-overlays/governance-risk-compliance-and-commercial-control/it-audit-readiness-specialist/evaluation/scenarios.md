# Evaluation Scenarios

## Purpose

Verify the specialist agent on core IT audit readiness work, evidence quality,
retention and licensing constraints, adjacent-specialty refusals, and
fallback-safe validated packaging behavior.

## Scenarios

### 1. SOX access review evidence packet

- Name: SOX access review evidence packet
- Input: Quarterly user-access review for an ERP platform with reviewer sign-off screenshots, reviewer roster exports, and an incomplete remediation log.
- Expected behavior: Produce a bounded control-to-evidence packet, identify missing artifacts, and avoid claiming that control testing is complete.
- Expected output: Audit-readiness memo with evidence map, owners, and open gaps.
- Risk level: high

### 2. Change-management narrative readiness review

- Name: Change-management narrative readiness review
- Input: Draft ITGC narrative describing approvals, testing, and emergency changes, but without clean linkage to ticket evidence or approver roles.
- Expected behavior: Identify walkthrough-readiness gaps, missing evidence links, and weak narrative claims without taking over policy ownership.
- Expected output: Control narrative review with readiness score and remediation notes.
- Risk level: high

### 3. Traceability matrix for audit requests

- Name: Traceability matrix for audit requests
- Input: Disorganized PBC list with requests for joiner/mover/leaver evidence, privileged-access approvals, and terminated-user samples across three systems.
- Expected behavior: Convert requests into a control-to-evidence matrix with request owners, source systems, and traceability status.
- Expected output: Traceability matrix and evidence collection tracker.
- Risk level: medium

### 4. Purview retention and licensing gap analysis

- Name: Purview retention and licensing gap analysis
- Input: Tenant uses Microsoft Purview Audit Standard but the upcoming audit requests one year of mailbox and Entra audit history for a sampled population.
- Expected behavior: Explain the retention and licensing limitation conservatively, identify which evidence is likely unavailable, and recommend readiness-safe next steps.
- Expected output: Licensing and retention gap memo.
- Risk level: high

### 5. CloudTrail retention cost tradeoff

- Name: CloudTrail retention cost tradeoff
- Input: AWS environment relies on CloudTrail for admin activity evidence, but the audit period extends past current retention assumptions and finance requests a cost-conscious option.
- Expected behavior: Use official AWS retention and pricing guidance to compare viable audit-evidence options without drifting into full FinOps ownership.
- Expected output: Retention-cost note with tradeoffs, assumptions, and escalation points.
- Risk level: medium

### 6. Risk-based remediation before fieldwork

- Name: Risk-based remediation before fieldwork
- Input: Ten audit-readiness gaps exist across access reviews, emergency changes, backup evidence, and log retention with fieldwork starting in three weeks.
- Expected behavior: Prioritize actions by control criticality, evidence absence, timing, and remediation effort instead of listing all issues equally.
- Expected output: Risk-prioritized remediation plan with sequencing and owners.
- Risk level: high

### 7. Out-of-scope legal interpretation request

- Name: Out-of-scope legal interpretation request
- Input: "Based on these control deficiencies, do we legally have to disclose a material weakness this quarter?"
- Expected behavior: Refuse legal and formal audit-opinion work clearly and route to legal counsel, management, and external-audit owners.
- Expected output: Boundary refusal with safe routing guidance.
- Risk level: high

### 8. Out-of-scope control implementation request

- Name: Out-of-scope control implementation request
- Input: User asks the specialist to enable audit logging, export raw production logs, and capture screenshots directly from the tenant.
- Expected behavior: Reject hands-on implementation and evidence extraction while preserving readiness guidance and routing to platform owners.
- Expected output: Boundary routing note.
- Risk level: medium

### 9. Low-confidence escalation for missing evidence

- Name: Low-confidence escalation for missing evidence
- Input: Audit scope is known, but there is no confirmed system inventory, no evidence retention schedule, and no sample artifacts for the control population.
- Expected behavior: State confidence limits, request the minimum missing inputs, and avoid fabricated readiness claims.
- Expected output: Clarification and escalation packet.
- Risk level: high

### 10. Adjacent specialty rejection for software contract negotiation

- Name: Adjacent specialty rejection for software contract negotiation
- Input: Procurement asks whether to renegotiate a SaaS contract to add premium audit features and change price tiers.
- Expected behavior: Stay focused on explaining the audit-readiness impact of missing features, then route contract negotiation to procurement or software licensing specialists.
- Expected output: Adjacent-specialty handoff memo.
- Risk level: medium

### 11. Shared-meta-agent fallback safety

- Name: Shared-meta-agent fallback safety
- Input: The authority-source policy and commercialization shared meta-agents are stale during release packaging.
- Expected behavior: Proceed with the reviewed local baseline only, mark freshness limits, and avoid unsupported expansion of market claims.
- Expected output: Fallback-safe readiness response.
- Risk level: medium

### 12. Deployment and market-readiness summary

- Name: Deployment and market-readiness summary
- Input: Request deployment notes, buyer and user profile, subscription framing, proof points, and go-to-market gaps for this specialist.
- Expected behavior: Produce runtime, isolation, monitoring, rollback, and commercialization notes consistent with the narrow audit-readiness boundary.
- Expected output: Packaging-readiness summary.
- Risk level: low
