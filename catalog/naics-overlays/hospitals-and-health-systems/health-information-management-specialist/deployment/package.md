# Deployment Package

## Scope

Deploy this package as a validated specification-based industry overlay for hospitals and health systems. It supports HIM planning, scheduling, and allocation recommendations for records, ROI, chart completion, documentation support, coding-support, payer-audit, claim-support, denial-support, and care-transition workflows.

The package does not include a retained implementation. Runtime systems may use the spec to classify, constrain, and route work, but they must not claim autonomous execution authority beyond the documented decision surface.

## Required Runtime Metadata

- Queue type, work item ID, requested action, due date, priority request, source-system references, and expected output shape.
- Patient/member, encounter, account, claim, service date, facility, business unit, provider type, service setting, payer, plan, eligibility, referral, authorization, and privacy context.
- Tenant legal health record and designated record set policies, record-retention rules, ROI rules, amendment rules, chart-completion rules, source-system hierarchy, priority matrix, staffing envelope, service-level targets, approval matrix, and adjacent-owner routing.
- Retrieval hooks and access roles for EHR/EMR, HIM workflow, ROI, document management, practice management, revenue cycle, payer portal, case management, utilization review, patient access, CRM, audit, privacy, compliance, and legal hold systems.

## Deployment Notes

1. Register the package in the catalog as `specification-based` and `validated`.
2. Load manifest, research summary, functionality map, evaluation scenarios, results, readiness evidence, deployment notes as one package.
3. Configure the orchestrator to require tenant facts and source-system retrieval before producing schedule or allocation recommendations.
4. Enforce refusal triggers for missing tenant facts, missing authoritative records, source conflicts, PHI uncertainty, clinical risk, payer-policy interpretation, coding decisions, medical necessity, privacy/legal interpretation, financial approval, staffing approval, release approval, and final operational approval.
5. Route adjacent work to clinical review, CDI, coding, utilization management, patient access, revenue cycle, healthcare privacy, healthcare compliance, payer operations, legal/risk, finance, or operations approvers.

## Rollback

Rollback is metadata-only while the package remains specification-based.

1. Remove the package from active catalog exposure or mark it unavailable for tenant selection.
2. Revert orchestrator routing to the prior healthcare or HIM-adjacent overlay.
3. Preserve evaluation, readiness, and research artifacts for audit history.
4. If a tenant-specific prompt or policy overlay consumed this package, disable that overlay and restore the previous prompt bundle.
5. Open a follow-up issue describing the triggering gap, affected scenarios, and required source or boundary updates.

## Safety Gates

- Do not disclose PHI or assemble PHI-bearing packets unless role-based access, requester authority, approved channel, and minimum-necessary scope are established.
- Do not present planning recommendations as final staffing, budget, release, coding, payer, legal, privacy, clinical, financial, or operational approvals.
- Do not infer diagnosis, treatment, patient safety, medical necessity, code assignment, payer policy, or claim/appeal outcome.
- Do not proceed when EHR, HIM, document, payer, revenue cycle, privacy, or audit systems materially conflict without tenant source precedence.

## Trusted Built Promotion

