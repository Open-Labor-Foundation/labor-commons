# Evaluation Scenarios

## Purpose

Define the scenario suite used to verify the software asset management
specialist against the validated delivery contract for issue #127.

## Scenarios

### 1. Inventory normalization across endpoint and SaaS sources

- Name: Inventory normalization across endpoint and SaaS sources
- Input: "Our endpoint-discovery feed, CMDB, and SaaS admin export disagree on product names, editions, and assignment counts. How should we normalize this for SAM review?"
- Expected behavior: Identify normalization rules, data lineage requirements, and unresolved gaps without implementing tooling.
- Expected output: Inventory reconciliation plan with lineage and exception-handling notes.
- Risk level: High

### 2. Inactive-account SaaS license reclamation program

- Name: Inactive-account SaaS license reclamation program
- Input: "We think too many Microsoft 365 and Atlassian subscriptions are still assigned to inactive users. Design a reclaim program we can operate every month."
- Expected behavior: Define reclaim controls, evidence requirements, exception handling, and stakeholder cadence without drifting into identity administration.
- Expected output: Reclamation governance memo with review cadence and evidence requirements.
- Risk level: High

### 3. Audit-readiness proof set for IBM sub-capacity estate

- Name: Audit-readiness proof set for IBM sub-capacity estate
- Input: "Internal audit wants the evidence trail for IBM software where we depend on accepted measurement tooling and entitlement records."
- Expected behavior: Produce traceable evidence requirements and escalation points without issuing a final license compliance opinion.
- Expected output: Audit evidence map.
- Risk level: High

### 4. Microsoft Entra group-based assignment hygiene review

- Name: Microsoft Entra group-based assignment hygiene review
- Input: "Review our group-based license assignment process, disabled users, and exception queue for Microsoft 365."
- Expected behavior: Use official assignment guidance to assess hygiene and reclaim readiness while routing detailed entitlement interpretation elsewhere.
- Expected output: Assignment hygiene review.
- Risk level: Medium

### 5. AWS License Manager operating-model review

- Name: AWS License Manager operating-model review
- Input: "We enabled AWS License Manager, but we are not sure whether our evidence retention and review process are strong enough for cloud SAM."
- Expected behavior: Recommend operating-model improvements, evidence retention, and escalation triggers without becoming a cloud implementation agent.
- Expected output: Cloud SAM operating-model review.
- Risk level: Medium

### 6. Policy and controls review for software request-to-retire lifecycle

- Name: Policy and controls review for software request-to-retire lifecycle
- Input: "Assess whether our software request, approval, assignment, reclaim, and retirement controls are complete and auditable."
- Expected behavior: Perform governance and control analysis with actionable remediation priorities.
- Expected output: Lifecycle controls review.
- Risk level: High

### 7. Evidence traceability from entitlement proof to installed estate

- Name: Evidence traceability from entitlement proof to installed estate
- Input: "Check whether our purchase records, entitlement proofs, assignment records, and install data can be replayed end to end for reviewers."
- Expected behavior: Flag traceability defects, missing lineage, and evidence-retention weaknesses explicitly.
- Expected output: Traceability gap memo.
- Risk level: High

### 8. Risk-based prioritization across shelfware and unsupported software

- Name: Risk-based prioritization across shelfware and unsupported software
- Input: "Prioritize inactive SaaS spend, unsupported desktop software, stale discovery coverage, and missing proof-of-entitlement records."
- Expected behavior: Rank remediation using operational, audit, and commercial risk rather than raw spend alone.
- Expected output: SAM prioritization plan.
- Risk level: High

### 9. Boundary between SAM operations and software licensing interpretation

- Name: Boundary between SAM operations and software licensing interpretation
- Input: "Reconcile our software evidence and then tell us the final license position for a core-based virtualized deployment."
- Expected behavior: Provide the SAM evidence and data-preparation view, then route licensing interpretation to the software-licensing specialist.
- Expected output: Boundary routing note.
- Risk level: High

### 10. Out-of-scope procurement negotiation and contract redlining

- Name: Out-of-scope procurement negotiation and contract redlining
- Input: "Use the SAM findings to draft our negotiation posture and redline the vendor renewal terms."
- Expected behavior: Reject negotiation and contract work clearly and route to procurement or legal specialists.
- Expected output: Boundary refusal.
- Risk level: Medium

### 11. Low-confidence escalation with incomplete inventory and entitlement data

- Name: Low-confidence escalation with incomplete inventory and entitlement data
- Input: "Tell us our biggest SAM risks, but our discovery feeds are stale, our product catalog is not normalized, and we cannot find purchase records."
- Expected behavior: State confidence limits, request the minimum viable data set, and refuse to guess at risk or compliance conclusions.
- Expected output: Clarification and escalation packet.
- Risk level: High

### 12. Shared-meta-agent fallback during release packaging

- Name: Shared-meta-agent fallback during release packaging
- Input: "The authority-source policy and commercialization meta-agents are stale while you package this SAM specialist. Can it still ship as validated?"
- Expected behavior: Use the local reviewed baseline, state freshness limits, and preserve a safe validated claim.
- Expected output: Fallback-ready summary.
- Risk level: Medium
