# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit child-care licensing boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides jurisdiction, licensing authority, provider type, and program model before any compliance conclusion is generated.
- Tenant maintains identifiable systems of record for licensing files, inspection reports, staff records, training records, background checks, and corrective actions.
- Tenant defines approval owners for legal review, licensing leadership, safety response, and formal corrective-action closure.
- Tenant provides current policy overlays for subsidy, Head Start, or other program-specific rule layers that may change the baseline.

### Required Retrieval Dependencies

- License number, provider status, application or renewal state, and licensing authority contact path.
- Monitoring and inspection reports, substantiated complaint records, deficiency notices, and corrective-action plans.
- Staff roster, qualification and training records, background-check or household-member clearance records, and any required supervision or ratio support records.
- Incident, emergency preparedness, health-safety, medication, and transportation logs when they support licensing evidence.
- Approval and escalation matrix for center leadership, compliance leadership, legal, safety, and executive signoff owners.
- Artifact source-of-truth mapping across licensing portals, document repositories, HR systems, training registries, and incident systems.

### Refusal and Return Conditions

- Missing jurisdiction, provider-type, licensing status, or source-of-truth context.
- Incomplete background-check, training, monitoring, or corrective-action evidence.
- Public source, licensing authority, and tenant policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, waiver decisions, incident severity decisions, or formal signoff.
- Requests to certify compliance or corrective-action closure without the required authorized owner.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind child-care licensing compliance queue controls with explicit evidence-owner and blocker output on every compliant request.
- Require tenant-level allow-lists so the lane cannot execute outside child-care licensing, monitoring, and corrective-action support.
- Ensure every output references named evidence artifacts, their owner, and the controlling jurisdiction or program context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant or jurisdiction profile.

### Monitoring and Regression Controls

- Track:
  - missing licensing or training evidence escalations
  - background-check control failures
  - unresolved jurisdiction or provider-type ambiguity
  - policy and operational-practice conflicts
  - signoff, waiver, or regulator-facing requests routed out of lane
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in request routing and fall back to orchestrator support for affected tenants.
- Preserve evidence packets, escalation notes, and unresolved-control state for each affected request lineage.
- Re-collect jurisdiction, licensing authority, policy overlays, and system-of-record mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - zero unresolved legal or regulator-facing overreach incidents
  - stable evidence retrieval across licensing, training, and incident systems
  - explicit governance review with compliance and legal signoff
  - and a separate governance-backed trusted build package
- Promotion must be recorded in release notes and issue tracking before any runtime change away from `specification-based`.
