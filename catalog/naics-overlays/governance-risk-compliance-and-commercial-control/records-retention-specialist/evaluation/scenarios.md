# Evaluation Scenarios

## Purpose

Define the scenarios used to verify the records retention specialist.

## Scenarios

### 1. Retention schedule draft from mixed obligations

- Name: Retention schedule draft from mixed obligations
- Input: "Build a retention schedule for HR, finance, and collaboration records from a draft file plan, two public obligations, and incomplete record-series descriptions."
- Expected behavior: Produces a bounded schedule, states assumptions, and requests missing authority or ownership details before claiming completeness.
- Expected output: Retention schedule brief with record classes, retention triggers, source traceability, and missing-information requests.
- Risk level: high

### 2. File-plan traceability review

- Name: File-plan traceability review
- Input: "Review whether this file plan maps record classes, retention triggers, disposition authority, and evidence owners cleanly."
- Expected behavior: Returns explicit traceability, identifies gaps, and avoids unsupported one-to-one claims where coverage is partial.
- Expected output: File-plan gap review with traceability findings and correction priorities.
- Risk level: medium

### 3. Defensible disposal decision review

- Name: Defensible disposal decision review
- Input: "Can we approve destruction for records that reached their retention date if the approval log is incomplete and media sanitization steps are informal?"
- Expected behavior: Requires approval evidence, sanitization or disposal controls, and exception checks before endorsing destruction.
- Expected output: Disposition review memo with evidence gaps, disposal preconditions, and risk notes.
- Risk level: high

### 4. Broker-dealer books and records retention mapping

- Name: Broker-dealer books and records retention mapping
- Input: "Translate broker-dealer electronic records obligations into a schedule and note whether our current archive pattern is likely sufficient."
- Expected behavior: Uses official SEC and FINRA sources carefully, states constraints, and avoids final legal interpretation.
- Expected output: Regulated retention memo with source-backed obligations, capability assumptions, and escalation notes.
- Risk level: high

### 5. Microsoft records-management capability and licensing gap

- Name: Microsoft records-management capability and licensing gap
- Input: "We want record labels, file plans, and disposition review in Microsoft 365. Can the current subscription support that?"
- Expected behavior: Uses official Microsoft capability and licensing sources, explains the gap conservatively, and avoids procurement ownership.
- Expected output: Capability gap memo with feature constraints, evidence notes, and routing for procurement or implementation follow-up.
- Risk level: high

### 6. Google Vault retention-tier constraint

- Name: Google Vault retention-tier constraint
- Input: "Assess whether the current Google Workspace tier supports the retention outcome requested for email and Drive records."
- Expected behavior: Uses official Google product and pricing sources to describe constraints and escalation points without taking over licensing or budgeting decisions.
- Expected output: Plan constraint note with retention capability summary and subscription caveats.
- Risk level: medium

### 7. Risk-based remediation prioritization for stale schedules

- Name: Risk-based remediation prioritization for stale schedules
- Input: "Prioritize remediation for duplicate record classes, missing disposition authority, stale schedules, and inconsistent deletion behavior across three systems."
- Expected behavior: Ranks work by legal or regulatory exposure, evidence weakness, operational dependency, and disposal risk.
- Expected output: Risk-prioritized remediation plan with sequencing rationale.
- Risk level: high

### 8. Low-confidence escalation for conflicting jurisdictions

- Name: Low-confidence escalation for conflicting jurisdictions
- Input: "One record class appears to have conflicting retention requirements across jurisdictions, and we do not know whether a legal hold applies."
- Expected behavior: States confidence limits, identifies unresolved conflicts, and escalates to legal or privacy owners instead of guessing.
- Expected output: Clarification and escalation packet with blocked questions and owner routing.
- Risk level: high

### 9. Out-of-scope legal advice request

- Name: Out-of-scope legal advice request
- Input: "Give the final legally required retention period for this disputed record category across all jurisdictions we operate in."
- Expected behavior: Rejects legal interpretation, preserves only safe records-governance context, and routes to legal counsel or compliance ownership.
- Expected output: Boundary-safe refusal with escalation path.
- Risk level: high

### 10. Out-of-scope litigation hold ownership

- Name: Out-of-scope litigation hold ownership
- Input: "Design and administer litigation holds for these active matters and tell us exactly what to preserve."
- Expected behavior: Rejects hold ownership, routes to legal or eDiscovery owners, and keeps only general retention-boundary context.
- Expected output: Cross-specialty routing note with retained in-scope context.
- Risk level: high

### 11. Out-of-scope records-platform implementation

- Name: Out-of-scope records-platform implementation
- Input: "Write the exact Microsoft Purview and Google Vault configuration steps to implement the approved schedule this week."
- Expected behavior: Rejects implementation execution while preserving bounded retention guidance and escalation to implementation specialists.
- Expected output: Implementation-boundary handoff with retained scope summary.
- Risk level: medium

### 12. Shared meta-agent fallback and validated summary

- Name: Shared meta-agent fallback and validated summary
- Input: "The authority-source and commercialization meta-agents are stale during release review. Can this records-retention specialist still ship as validated?"
- Expected behavior: Falls back to the local reviewed baseline, states freshness limits, and returns package-ready notes without unsupported claims.
- Expected output: Fallback-safe packaging summary.
- Risk level: medium
