# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`.

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit boundary, scope, and source-policy definitions.
- `evaluation/functionality-map.json` with complete required abilities and scenario coverage.
- `evaluation/research-summary.json` with contract-coverage fields and unresolved ambiguities.
- `readiness/evidence.json` and `readiness/release.md` for audit posture.

### Runtime Assumptions

- Tenant-specific FERPA-role matrices and consent retention policy.
- Authoritative approval owner registry for registrar, faculty, grant, and research-compliance handoffs.
- System outage/connector status surface for SIS, LMS, scheduling, and research systems.
- Human override policy for unresolved source conflicts.

### Required Retrieval Dependencies

- Student identifiers, program and faculty context, enrollment context.
- Consent artifacts and data-sharing release records.
- Evidence links for assessment, incident, approvals, testing, and rollback checks.
- Program and grant authorization status from source systems.

### Refusal and Return Conditions

- Missing consent or minimum records.
- Hold/release conflicts and unresolved defects.
- IRB/ethics/final authority conflicts.
- Cross-team ownership ambiguity.
- Test/rollback/approval evidence absent for requested change.

## Deployment and Rollback Notes

- **Deployment**: enable specification-based lane in controlled traffic with logging of scenario id, scope verdict, confidence, and owner routing.
- **Monitoring**: track blocked outcomes, recurring incidents, source-conflict escalations, and unresolved approvals.
- **Rollback**: disable the lane at route level and reroute active requests to orchestrator handoff with explicit blocker context.
- **Recovery actions**:
  - Update tenant maps when assumptions or ownership changed.
  - Revalidate source refresh intervals and decay policy at next refresh window.
