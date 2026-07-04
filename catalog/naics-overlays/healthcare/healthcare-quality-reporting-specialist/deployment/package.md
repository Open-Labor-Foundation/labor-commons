# Deployment Package

## Package

- Package path: `catalog/naics-overlays/healthcare/healthcare-quality-reporting-specialist/`
- Queue slug: `industry-overlays::healthcare::healthcare-quality-reporting-specialist`
- Target delivery level: `validated`
- Runtime strategy: `specification-based`
- Release version: `v0.1.0`
- Validation profile: `strict`

## Materialization Requirements

`commons-crew` can materialize this lane safely only when runtime metadata and
retrieval context include:

- task metadata: request id, tenant id, quality program, measure id, measure steward, specification version, program year, measurement period, cadence, target audience, and submission or publication posture
- boundary metadata: in-scope reporting package assembly, out-of-scope attestation, out-of-scope clinical judgment, out-of-scope payer interpretation, out-of-scope public disclosure approval, and required adjacent owners
- tenant facts: jurisdiction, business unit, product, payer or plan, provider type, facility type, service setting, current systems of record, record locations, retrieval hooks, source-precedence policy, privacy policy, and approval matrix
- source records: quality measure specifications, abstraction files, numerator and denominator extracts, exclusions, value sets, validation reports, EHR records, claims, labs, registry extracts, QRDA files, HEDIS extracts, and submission portal messages
- regulated-lane caveats: PHI, minimum-necessary handling, low-volume disclosure, public-reporting posture, patient/member status, service dates, authorization/referral dependencies, and audit-log retention

## Deployment Steps

1. Register the manifest and evidence artifacts in the catalog index.
2. Keep runtime execution in `specification-based` mode unless a separate retained-implementation package is approved.
3. Configure routing so direct submission, certification, public disclosure, payer interpretation, clinical judgment, coding approval, and privacy/legal interpretation return to the orchestrator.
4. Require tenant retrieval hooks before any response that depends on measure version, source hierarchy, abstraction evidence, PHI handling, or signoff owner.
5. Log every report package with measure version, evidence lineage, validation status, confidence posture, caveats, and escalation owner.

## Rollback

Rollback is required if source staleness, validation failure, tenant retrieval
misrouting, scenario regression, PHI handling gap, or unsupported quality claim
is detected.

Rollback actions:

- Remove or disable catalog routing for `healthcare-quality-reporting-specialist`.
- Mark delivery status below `validated` in readiness evidence until revalidated.
- Route new requests to the orchestrator or adjacent healthcare analytics, clinical abstraction, quality-program, compliance, privacy/legal, payer-policy, or operational leadership owners.
- Preserve audit logs, affected request ids, source versions, output packages, and escalation records for review.
- Re-run audit and validation before restoring validated status.

This package does not claim a retained implementation. Promote only after usage
proves common enough and a separate build commits:

- governed connectors to EHR abstraction tools, quality reporting platforms, BI systems, claims/lab/registry stores, and payer or regulator portals
- deterministic measure-version and value-set retrieval
- pre-submission validation integration for QRDA, HEDIS, registry, or program-specific files
- PHI minimum-necessary controls, tenant policy enforcement, approval workflow, and audit logging
- monitored scenario performance, false-positive review, rollback path, and formal governance approval
