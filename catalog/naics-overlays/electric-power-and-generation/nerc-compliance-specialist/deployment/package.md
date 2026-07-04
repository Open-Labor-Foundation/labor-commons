# Deployment Package

## Runtime and Deployment Profile

- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Runtime promotion condition: 
- Runtime execution target: `commons-crew`

## Materialization Requirements

### Required Task and Boundary Metadata

- `manifest.yaml` with explicit NERC compliance boundaries, refusal triggers, adjacent-lane routing, and regulated-lane caveats.
- `evaluation/functionality-map.json` containing complete `compliance-controls-and-governance` and `cross-industry` ability coverage.
- `evaluation/research-summary.json` with source classes, authority rationale, workflow-stage mapping, systems of record, and ambiguity handling.
- `readiness/evidence.json` and `readiness/release.md` with gates, review artifacts, and human verification evidence.

### Runtime Assumptions

- Tenant provides regional-entity context, NCR ID, registered functions, applicable standard families, and the exact operating context that makes the request specific to electric power and generation.
- Tenant maintains identifiable systems of record for evidence retention, document control, GRC or compliance tracking, work management, asset or cyber inventories, and CAPA or mitigation tracking.
- Tenant defines approval owners for legal review, regulatory affairs, CIP specialization, engineering, bulk-power operations, and executive signoff.
- Tenant provides current policy overlays for retention, delegated authority, internal controls, and regional-entity-specific practices that may narrow the public baseline.

### Required Retrieval Dependencies

- Registration and applicability records, including NCR ID, functional registrations, asset ownership changes, and region-specific routing.
- Current obligation matrix, standard-family ownership map, RSAWs or audit request lists, and retained evidence inventory.
- Align references, SEL evidence locations, self-certification or periodic-data-submittal schedules, mitigation items, and prior findings where applicable.
- Document-controlled procedures, training records, logs, test results, corrective actions, and attestation routing matrix.
- Source-of-truth mapping across GRC, document control, asset and cyber inventory systems, work management systems, and issue or remediation trackers.

### Refusal and Return Conditions

- Missing registration, applicability, jurisdiction, or source-of-truth context.
- Incomplete retained evidence for a required control, review, or attestation package.
- Public-source, regional-entity, and tenant-policy conflicts that materially alter the outcome.
- Requests for legal interpretation, regulator negotiation, final compliance certification, engineering judgment, cybersecurity categorization authority, or safety-critical operating decisions.
- Requests to close a control gap or mitigation item without the required authoritative records and named owners.

## Compliance Boundaries and Rollback Notes

This overlay is `validated` for deployment but remains `specification-based` runtime until a separate retained-implementation package is explicitly promoted.

### Deployment Notes

- Enable routing behind the electric-power-and-generation queue with explicit evidence-owner, system-of-record, and escalation output on every request.
- Require tenant-level allow-lists so the lane cannot execute outside NERC compliance support, evidence handling, review preparation, and exception routing.
- Ensure every output references named records, current evidence posture, and the controlling registered-function or standard-family context.
- Keep an enhanced validation checkpoint for the first 14 sessions in a new tenant, new region, or newly registered function set.

### Monitoring and Regression Controls

- Track:
  - missing required evidence for a control or attestation
  - conflicting source or policy escalation
  - requests for legal, regulator-facing, engineering, CIP, or operations authority
  - registration and applicability ambiguity
  - repeated operational-practice conflicts with retained evidence expectations
- Trigger rollback when the same unresolved refusal or escalation class appears for the same request shape in 3 consecutive runs.

### Rollback and Recovery

- Disable this overlay in routing and fall back to orchestrator support for affected tenants, regions, or standard families.
- Preserve evidence packets, escalation notes, and unresolved-gap state for each affected request lineage.
- Re-collect registration, region, system-of-record, and approval-owner mappings before re-enabling.
- Re-run package validation before any retained-implementation migration or reactivation.

## retained-implementation Promotion Plan

### Promotion Criteria

- retained-implementation transition requires:
  - 30 days of monitored execution under the same spec
  - stable retrieval across registration, evidence, Align, document-control, and remediation systems
  - zero unresolved legal, regulator-facing, engineering, or cybersecurity overreach incidents
  - explicit governance review with compliance, legal, and operations stakeholders
  - and a separate governance-backed trusted build package
- Promotion must be documented in release notes and issue tracking before any runtime change away from `specification-based`.
