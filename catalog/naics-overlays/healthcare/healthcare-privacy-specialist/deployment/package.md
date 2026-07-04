# Deployment Package: Healthcare privacy specialist

## Deployment Position

Deploy this package as a validated `specification-based` healthcare industry overlay.
It supplies task, boundary, evidence, evaluation, and readiness metadata for
healthcare privacy workflows. It does not ship a retained implementation or grant
autonomous disclosure, breach, legal, clinical, or payer authority.

## Materialization Requirements For `commons-crew`

`commons-crew` would need the following metadata and runtime constraints before
materializing this lane safely:

- task metadata for privacy-review intake, disclosure readiness, access request
  routing, accounting request support, breach-sensitive incident triage,
  minimum-necessary checks, and exception/remediation escalation;
- boundary metadata for legal advice, final breach determination, disclosure
  approval, identity-verification waiver, minimum-necessary waiver, clinical
  judgment, security containment, HIM release approval, payer interpretation,
  and executive risk acceptance;
- tenant-supplied jurisdiction, facility/business unit, service model, covered
  entity or business associate role, privacy policies, Part 2/state-law
  overlays, sensitive-service policies, source-of-truth hierarchy, role map,
  approval matrix, and escalation owners;
- retrieval hooks for privacy incident management, EHR audit logs, IAM, ROI,
  patient portal, disclosure logs, authorization/consent repositories, case
  management, document repositories, training/policy attestations, legal matter
  management, security incident systems, and payer/eligibility platforms;
- PHI handling safeguards for minimum necessary, role-based access,
  redaction/minimization, auditability, retention, tenant isolation, and
  cross-tenant sharing prohibition.

## Deployment Steps

1. Register the spec package at
   `catalog/naics-overlays/healthcare/healthcare-privacy-specialist/`.
2. Confirm `runtime_strategy` remains `specification-based` in the manifest and readiness
   evidence.
3. Load tenant policy and source-of-truth configuration before enabling the lane
   in orchestration.
4. Enable only advisory, intake, classification, checklist, and escalation
   outputs until a retained implementation is committed separately.
5. Route all final legal, breach, notification, disclosure, clinical, payer,
   sanctions, and executive decisions to named tenant owners.

## Rollback

Rollback is package-level and configuration-level:

- remove the lane from tenant orchestration entitlement or catalog exposure;
- revert to the previous healthcare overlay package set;
- preserve already-created audit records, incident notes, and escalation
  packets in tenant systems of record;
- notify privacy, compliance, HIM, security, legal, and patient access owners if
  any active cases were routed through the lane;
- do not delete PHI-bearing records or incident artifacts as part of rollback.

## Runtime Safety Notes

- The package may summarize evidence and missing prerequisites, but it must not
  decide final breach status or authorize disclosure.
- If tenant records conflict, the lane must return low-confidence escalation
  rather than choose a system winner.
- If tenant policy is stricter than public guidance, treat the stricter tenant
  posture as controlling until the responsible owner resolves the conflict.
- If PHI handling, clinical risk, or payer interpretation changes the answer,
  the lane must escalate or return to orchestrator.

## Validation

Recommended validation commands:

```bash
node infra/scripts/audit-spec-pack.mjs --industry healthcare --agent healthcare-privacy-specialist
npm run lint
npm run verify:structure
npm test
```
