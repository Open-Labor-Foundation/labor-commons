# Deployment Package

## Runtime Model

- Runtime strategy: `specification-based`.
- Canonical source: this spec pack under `catalog/cybersecurity/digital-forensics-specialist/`.
- Built implementation posture: not retained or trusted by default. A generated implementation may be materialized on demand by `commons-crew` or a future runtime, but it must be treated as derived output unless a separate frequent-use promotion record is approved.
- Required secrets: none for the spec pack. Runtime connectors for SIEM, EDR, cloud logs, evidence vaults, legal hold, or policy repositories must be configured by the tenant platform.

## Materialization Requirements

A runtime materializer needs these fields before safely generating or invoking the lane:

- Task metadata: requested forensic action, incident case ID, requested output shape, urgency, and whether the request involves live response, exploitation, attestation, legal opinion, architecture ownership, or record update authority.
- Boundary metadata: adjacent specialist registry, incident-response owner, evidence custodian, legal or privacy owner, audit or compliance owner, architecture owner, and orchestrator return path.
- Tenant facts: incident narrative, business impact, affected systems, artifact inventory, source-system exports, collection timestamps, hashes, custody notes, legal hold status, privacy classification, retention policy, jurisdiction, and source-of-truth precedence.
- Evidence dependencies: SIEM or security data lake, EDR/XDR, cloud audit logs, identity logs, application logs, network telemetry, evidence vault, chain-of-custody ledger, legal-hold register, records retention schedule, and tenant policy repository.
- Caveats: forensic outputs are advisory unless a human reviewer or authorized owner accepts them; live acquisition and response execution require incident-response authority; legal, privacy, audit, and compliance determinations require their respective owners.

## Deployment Flow

1. Load and parse `manifest.yaml`, `evaluation/functionality-map.json`, `evaluation/research-summary.json`, `evaluation/results.json`, and `readiness/evidence.json`.
2. Confirm `runtime.strategy` is `specification-based`, source baseline is current, functionality coverage is complete, and no blocking unresolved research ambiguity exists.
3. Bind tenant retrieval connectors through approved tenant-scoped configuration only.
4. Enforce refusal and orchestrator-return rules before any generated prompt, tool plan, or derived runtime work.
5. Log package version, case ID, tenant ID, source baseline version, scenario family, refusal or handoff decision, and reviewer state.

## Isolation And Adaptation

- Tenant boundary: every retrieval and output must remain tenant-scoped.
- Knowledge boundary: public authority sources provide the baseline; tenant policy may add stricter constraints but must not erase public-source caveats.
- Adaptation policy: allow tenant terminology maps, system connector names, retention schedules, approval owners, and source precedence rules through configuration. Do not mutate the canonical pack for tenant-specific assumptions.
- Privacy and legal hold: block publication, release, deletion, or retention changes whenever legal hold, privacy classification, jurisdiction, or access approval is missing or conflicting.

## Monitoring And Logging

- Monitor manifest parse/load success and JSON parse validity for evaluation and readiness files.
- Run source freshness checks at the recorded refresh intervals or sooner when NIST, CISA, NARA, SWGDE, or OWASP sources materially change.
- Track scenario-family drift, refusal rate, low-confidence escalation rate, chain-of-custody exceptions, source-conflict exceptions, and adjacent-lane handoffs.
- Log only request and response summaries, artifact references, scenario IDs, handoff decisions, reviewer state, and evidence packet IDs. Do not log raw evidence, secrets, personal data, or privileged legal material outside tenant-approved evidence systems.

## Rollback Path

- Revert to the previous tagged spec-pack version if manifest parse, source audit, evaluation, functionality coverage, or readiness gates fail.
- Disable tenant-specific adaptation flags and generated-runtime cache entries until human review clears the failure.
- Re-run JSON parse checks, spec-pack consistency checks, and relevant repository validation before re-enabling.
- If a generated implementation exists, discard it unless promotion evidence separately requires retention and the rollback owner approves the generated artifact.

## Promotion Criteria

Retain a trusted generated implementation in-repo only when all criteria are met:

- At least 30 tenant-safe invocations or 3 production tenants in a rolling 90-day period.
- No unresolved boundary, privacy, legal-hold, custody, or low-confidence defects in the same period.
- Strict evaluation refresh passes against the generated implementation.
- A named steward documents why retained implementation reduces operational risk, review burden, or latency.

## Support Owner

Digital forensics domain steward or delegated issue queue owner.
