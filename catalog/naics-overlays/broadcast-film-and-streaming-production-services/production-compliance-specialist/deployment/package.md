# Deployment Package

## Runtime

- Target runtime: `commons-crew` (spec-first execution).
- Runtime strategy: `specification-based`.
- Delivery target: `validated` catalog package.

## Materialization Requirements

- Required task and boundary metadata:
  - request scope and intended outcome,
  - production type and release model,
  - jurisdiction and location set,
  - union and guild coverage,
  - special-activity profile,
  - client or studio security requirements,
  - tenant source-precedence and escalation policy.
- Tenant-supplied assumptions or retrieval hooks:
  - permit portal or municipal filing access,
  - production-management, call-sheet, and daily-report repositories,
  - SAG-AFTRA or DGA document locations and signatory status hooks,
  - payroll, startwork, and production accounting record locations,
  - incident, safety, and client-security evidence repositories,
  - project-specific addenda for rights, security, or broadcaster compliance that narrow the public baseline.
- Regulated-lane caveats:
  - the lane can review and package evidence but cannot grant permit, labor, legal, safety, or security authority,
  - the lane must preserve permit, posting, safety, and client-security controls under schedule pressure,
  - jurisdiction-specific permit, labor, and special-activity rules must be confirmed before making timing-critical commitments.

## Required Systems Of Record

- Permit portal or film-office workflow system
- Production management and call-sheet platform
- Guild or union producer portal and document repository
- Payroll and production accounting systems
- Document control or GRC evidence repository
- Safety incident or risk-tracking system
- Vendor-risk, TPN+, or client security review system

## Deployment Notes

- Deployment posture: `specification-based` with strict no-signoff and no-control-bypass contract.
- Health and observability requirements:
  - log scenario ID, source set, and refusal or escalation reason,
  - record which systems of record were checked and which were missing,
  - preserve assumption logs for jurisdictional, agreement, and client-security conflicts,
  - surface permit blockers, signatory blockers, safety-control gaps, and vendor-security gaps.
- Conditions that require refusal or orchestrator return:
  - missing tenant facts, records, or authoritative source context that would change the result,
  - legal, labor-relations, rights-clearance, licensed-safety, financial-approval, or executive authority required,
  - conflicting permit, union, client-security, or tenant-policy rules materially change the answer.

## Rollback

- Disable the lane in orchestrator routing.
- Route affected requests to orchestrator-safe fallback or named adjacent specialists.
- Preserve open blocker, permit, labor, safety, and security escalation artifacts for human continuation.
- Re-enable only after package correction and governance review.

## Promotion Path

- This package is a validated spec pack and explicitly does not claim retained implementation behavior.
- 
  - repeated tenant usage shows stable retrieval of permit, labor, safety, and security artifacts,
  - refusal and escalation behavior is observed across real production edge cases,
  - a separate trusted built implementation is committed and approved.
