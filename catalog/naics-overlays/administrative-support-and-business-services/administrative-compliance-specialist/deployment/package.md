# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime behavior: evidence-guided administrative compliance handling, records governance, client service control monitoring, audit evidence preparation, and bounded escalation for administrative support and business services.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit boundary scope, refusal conditions, adjacent-lane routing, tenant adaptation policy, and return-to-orchestrator rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness evidence files: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Tenant service model, administrative-service family, jurisdiction, business unit, client segment, facility or program context, and client-contract/SOW scope.
- Client master, service catalog, work order model, queue states, SLA commitments, ticket handling policy, and escalation thresholds.
- Policy hierarchy, SOP versioning rules, policy acknowledgment requirements, exception thresholds, and remediation owner matrix.
- Records inventory, retention schedule, record locations, legal-hold handling, redaction requirements, disposal authority, and document repository ownership.
- Privacy/access handling rules, data classification, access-review cadence, audit-log retrieval, client data restrictions, and incident-routing rules.
- Current systems of record, retrieval hooks, owner contacts, and evidence freshness thresholds.

### Systems of record and retrieval dependencies

- Client relationship management or client master system.
- Contract lifecycle management and SOW repository.
- Ticketing, workflow, or case management system.
- Document management or electronic records management system.
- Policy management and training attestation system.
- Identity and access management system.
- GRC/control management and exception tracker.
- Audit evidence repository.
- SLA reporting or business intelligence system.
- Email/correspondence archive where tenant policy identifies it as authoritative.

### Regulated-lane caveats

- This lane supports compliance handling and evidence-backed escalation; it does not replace legal counsel, auditor attestation, certification bodies, privacy officer authority, security incident response, HR/payroll specialists, finance approvers, or executive signoff.
- Administrative support and business services include materially different service families. Runtime must retrieve the tenant service family before deciding which records and adjacent lanes apply.
- Client contracts and tenant policies may set stricter requirements than public frameworks. Conflicts require authorized precedence, not informal synthesis.
- Records retention, legal hold, redaction, privacy/access, and chain-of-custody requirements must be confirmed from tenant systems before closure.

### Refusal and return conditions

- Return to orchestrator when required service-family, jurisdiction, client-contract, tenant-policy, record-location, system-of-record, access-owner, or approval facts are missing.
- Return to orchestrator when public-source, tenant-policy, client-contract, or operational-practice conflicts materially change the compliance posture.
- Return to orchestrator when legal, privacy, security incident, HR/payroll, finance, procurement, audit attestation, regulator-facing, or executive approval authority is required.
- Refuse to represent incomplete evidence, uncontrolled records, stale access reviews, unresolved retention conflicts, or unapproved service-family assumptions as compliant or audit-ready.

## Deployment and Rollback

- Deployment: enable only for tenants with configured service-family taxonomy, client/SOW retrieval, records repository ownership, ticketing/workflow source, policy hierarchy, access-control evidence, and adjacent-lane routing.
- Rollback: disable specialist routing and return open requests to orchestrator-safe handling with context, blockers, evidence gaps, unresolved conflicts, and owner assignments preserved.
- Monitoring recommendations: evidence-missing rate, policy/practice conflict rate, system-of-record mismatch volume, unauthorized signoff requests, low-confidence escalation rate, client audit evidence rework, and adjacent-lane reroute volume.

## Validation evidence and Promotion Notes

- Positioning: validated administrative compliance specialist for administrative support and business-service teams that need client service controls, records governance, policy evidence, access evidence, and safe escalation.
- The package is not retained-implementation and does not claim legal, audit, certification, privacy-officer, security-incident, HR/payroll, financial, or executive approval authority.
- Promote to a retained-implementation runtime only if usage proves common enough through repeated tenant demand, stable workflow telemetry, validated low-regression behavior, human-reviewed evidence quality, and a separate committed build PR.
