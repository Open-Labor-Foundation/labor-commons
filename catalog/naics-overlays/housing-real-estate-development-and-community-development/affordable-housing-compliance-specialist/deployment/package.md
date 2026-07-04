# Affordable Housing Compliance Specialist Deployment Package

## Deployment Posture

- Package type: NAICS-derived industry-overlay spec pack
- Runtime strategy: `specification-based`
- Delivery target: `validated`
- retained implementation: not present
- Canonical path: `catalog/naics-overlays/housing-real-estate-development-and-community-development/affordable-housing-compliance-specialist/`

This package can be used as a validated source specification for
orchestrated affordable housing compliance workflows. It must not be treated as
a retained implementation until a separate promotion PR commits and validates a
maintained implementation.

## Safe Runtime Inputs

`commons-crew` or any materializer must supply or retrieve:

- tenant compliance policies, tenant selection plan, approval matrix, service model, document retention policy, compliance calendar, and source hierarchy
- jurisdiction, property, project, building, BIN, unit, bedroom size, program stack, funding source, subsidy, set-aside, placed-in-service date, affordability period, and owner/management context
- regulatory agreement, extended use agreement, HOME written agreement, HAP or subsidy contract, state HFA rules, PJ requirements, investor requirements, lender covenants, local soft-debt covenants, and agency monitoring notices
- household composition, student status, application, waitlist record, TIC, income and asset verification, EIV identity or income report, lease, rent ledger, utility allowance, recertification notices, and consent records
- current income limits, HOME rent limits, state HFA rent schedules, utility allowances, rent rolls, subsidy records, owner certifications, HOME rent and occupancy reports, inspection records, fair housing records, and remediation evidence
- systems-of-record and retrieval hooks for property management, compliance software, tenant file repository, state HFA portal, HUD TRACS/iMAX, EIV, HOME/IDIS or PJ portals, waitlist, accounting, inspection, policy, resident services, agency correspondence, and remediation tracking

## Required Runtime Guardrails

- Keep all outputs evidence-backed and tied to named systems of record.
- Separate LIHTC, HOME, HUD-assisted, local covenant, investor, lender, state HFA, and tenant-policy obligations instead of flattening them into one generic affordable housing rule set.
- Use approved retrieval hooks and minimum necessary tenant-file references for resident or household evidence.
- Return to orchestrator when source facts are missing, stale, inaccessible, contradictory, or outside approved retrieval paths.
- Escalate legal, tax-credit, Form 8823, fair housing, tenant-rights, agency negotiation, investor, lender, financial, property management, leasing, maintenance, accessibility, environmental, inspection, regulator-facing, and executive approval questions.
- Refuse requests for legal advice, tax advice, regulator negotiation, fair housing findings, financial approvals, property safety release, or final certification.

## Deployment Steps

1. Register the spec pack at the canonical catalog path.
2. Load `manifest.yaml`, `evaluation/research-summary.json`, and `evaluation/functionality-map.json` as the authoritative package definition.
3. Configure the orchestrator to require tenant facts, program-stack facts, systems-of-record hooks, and minimum necessary resident-data controls before materialization.
4. Route requests through the boundary rules in the manifest and functionality map.
5. Use the evaluation suite as the smoke-test baseline for any generated runtime behavior.
6. Keep runtime state as `specification-based` unless a separate trusted build is committed and approved.

## Rollback

Rollback is required if source staleness, validation failure, tenant privacy
risk, program-stack overgeneralization, or boundary regression is detected.

Rollback actions:

- Disable validated exposure for this spec pack in the consuming catalog or router.
- Revert to the previous approved affordable housing compliance pack if one exists.
- Route all affordable housing compliance requests to orchestrator review while the pack is remediated.
- Preserve resident, tenant-file, agency, investor, legal, or remediation evidence in approved tenant systems only.
- Re-run `npm run audit:spec-pack -- --industry housing-real-estate-development-and-community-development --agent affordable-housing-compliance-specialist` before restoring validated exposure.

## Monitoring

Track:

- low-confidence or orchestrator-return rate due to missing tenant, program-stack, regulatory agreement, rent/income limit, utility allowance, agency, investor, lender, or record facts
- legal, tax-credit, fair housing, investor, lender, financial, property condition, and agency escalation rate
- stale income limit, rent limit, utility allowance, tenant-file, EIV/TRACS, HOME, LIHTC, and monitoring evidence rates
- conflicts among HUD, IRS, HOME, state HFA, regulatory agreement, investor, lender, tenant policy, and operational practice
- source refresh deadlines for HUD, IRS, eCFR, state HFA, PJ, tenant, investor, and lender sources
- scenario or functionality coverage drift after package edits

## Promotion To retained implementation

Promote only through a separate PR when usage proves common enough or runtime
behavior has converged. Promotion requires:

- committed runtime implementation or trusted package metadata
- retained spec pack as source of truth
- regression tests covering all 14 scenario families and all 11 required abilities
- human review from affordable housing compliance, legal/tax, fair housing, property operations, and tenant-data handling owners
- explicit update from `specification-based` to the approved trusted runtime state

Until then, this package remains validated as a spec pack only.
