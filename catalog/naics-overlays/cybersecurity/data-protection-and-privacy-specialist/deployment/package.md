# Deployment Package

## Runtime Model

- Delivery model: validated spec pack consumed by the catalog dispatcher and any future runtime materializer.
- Runtime strategy: `specification-based`.
- Built implementation: not retained and not claimed as trusted.
- Package version: `v1.1.0`.
- Required package artifacts:
  - `manifest.yaml`
  - `evaluation/scenarios.md`
  - `evaluation/functionality-map.json`
  - `evaluation/research-summary.json`
  - `evaluation/results.json`
  - `readiness/evidence.json`
  - `readiness/release.md`
  - `deployment/package.md`
  - `positioning/readiness.md`

## Materialization Requirements

Any `commons-crew` or future runtime materializer must load:

- Task and boundary metadata from the manifest, including supported tasks, output shapes, refusal triggers, adjacent specialists, and orchestrator return rules.
- Source baseline with publisher, authority rationale, refresh interval, decay policy, and last review date.
- Tenant-supplied or retrieved data inventory, data-flow, processing purpose, system owner, data owner, sensitivity, jurisdiction, retention, deletion, vendor/processor, DPA, and policy context.
- Systems-of-record dependencies for data catalog, CMDB, architecture diagrams, privacy management, GRC evidence, contract/DPA repository, retention/deletion systems, IAM/KMS/DLP/logging/backup evidence, ticketing, and exception registers.
- Domain caveats that prevent legal advice, formal certification, audit attestation, incident-response execution, penetration testing, broad architecture ownership, procurement approval, or final risk acceptance.

Materialized outputs must include assumptions, confidence, missing facts, evidence references, source freshness, review cadence, owners, and escalation route.

## Tenant Isolation

- Execute one tenant per isolated context.
- Load tenant policies, data maps, logs, evidence packets, and contracts only from the tenant partition.
- Do not merge tenant-specific retention rules, jurisdiction profiles, or approval matrices across tenants.
- Logs must avoid raw personal data; use artifact IDs, synthetic labels, or redacted data categories.
- Any tenant adaptation that affects legal, regulator, audit, or executive authority requires human review before release.

## Monitoring And Logging

- Track boundary-refusal rate, low-confidence escalation rate, missing-evidence patterns, stale-source usage, source-conflict events, output-shape completeness, and adjacent-specialist handoffs.
- Log source IDs, evidence artifact IDs, system-of-record references, confidence, refusal trigger, and owner routing.
- Alert when a material recommendation uses a source past its decay policy or when source-policy conflicts rise above tenant threshold.
- Review high-risk scenarios at least quarterly, including cross-border ambiguity, incident-preparation handoff, processor evidence gaps, and retention/deletion conflicts.

## Rollback

1. Revert the catalog package to the previous reviewed commit or last validated spec-pack release.
2. Disable materialization for `catalog::cybersecurity::data-protection-and-privacy-specialist`.
3. Route all new requests to the orchestrator with a temporary low-confidence note.
4. Preserve current evidence bundles and validation artifacts for regression review.
5. Re-run package validation and human review before restoring validated dispatch.

## Promotion Criteria

Keep runtime `specification-based` unless all promotion gates are met:

- Usage shows sustained frequent calls for at least two consecutive quarters or a tenant contract explicitly requires a retained implementation.
- Generated runtime passes the strict scenario suite plus tenant-isolation, logging, source-refresh, and boundary-regression checks.
- Human review approves retaining the built artifact and documents rollback, monitoring, and owner responsibilities.
- No unresolved legal, privacy, audit, incident-response, penetration-testing, architecture, procurement, or risk-acceptance ambiguity remains in the build contract.

## Operational Ownership

- Package owner: repository maintainer.
- Domain steward: security/privacy governance owner.
- Required human reviewers: privacy/legal owner for jurisdictional interpretation, audit owner for attestation, incident-response owner for live incidents, architecture owner for broad design decisions, procurement or vendor owner for supplier approval.
