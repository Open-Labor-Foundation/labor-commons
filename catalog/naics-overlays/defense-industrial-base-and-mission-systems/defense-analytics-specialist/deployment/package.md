# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Runtime remains specification-based until governance approves a separate trusted built promotion.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit analytics scope, authority limits, refusal rules, and adjacent-lane routing behavior.
- `evaluation/` bundle with `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- `readiness/evidence.json` and `readiness/release.md`.
- `positioning/readiness.md` and `deployment/package.md`.

### Required tenant facts and assumptions

- Program identifier, contract scope, CLIN context, reporting audience, and reporting cadence.
- Tenant source-precedence policy for IPMDAR, EVMS, IMS, cost, readiness, and dashboard-derived records.
- Tenant metric dictionary for CPI, SPI, VAC, EAC, mission-capable or readiness terms, and any customer or board reporting aliases.
- Authority map for contracting, program controls, finance, mission assurance, engineering, and disclosure review owners.
- Tenant disclosure and handling policy for CUI, export-controlled data, and executive or external reporting.

### Systems of record and retrieval dependencies

- IPMDAR or integrated program management repository.
- EVMS source system and surveillance status records.
- IMS repository and milestone logic views.
- Cost-management, estimate, and forecast systems.
- Contract, CLIN, modification, and CDRL repositories.
- Mission readiness, test, reliability, defect, or waiver systems when those terms appear in the request.
- Audit-safe analytics or BI repository with retrieval timestamps and source lineage.

### Regulated-lane caveats

- Public defense acquisition, EVMS, cost, and WBS sources define the baseline but do not replace tenant contract tailoring or approved reporting policy.
- CUI and covered-defense-information handling rules constrain which records can be moved, summarized, or published.
- The lane stops before contract action, funding commitment, engineering disposition, mission-release, or final disclosure approval.

### Refusal and return conditions

- Missing tenant authority map, source precedence, or critical authoritative records.
- Ambiguous denominator, baseline, or metric definition that would change the answer.
- Conflicting public and tenant policy interpretations that materially alter the reporting posture.
- Requests requiring legal, policy override, financial approval, engineering, safety-critical, or final disclosure authority.

## Deployment and Rollback

- Deployment: enable specialist routing only when retrieval hooks for the tenant's authoritative defense records are configured and auditable.
- Monitoring: track metric-definition overrides, stale-source escalations, cross-system conflicts, unsupported claim refusals, disclosure-risk escalations, and adjacent-lane routing frequency.
- Rollback: remove the specialist from routing, return open requests to orchestrator-safe fallback handling, and restore the previous validated artifact bundle.
- Validation after rollback or promotion candidate update: run `node infra/scripts/audit-spec-pack.mjs --industry defense-industrial-base-and-mission-systems --agent defense-analytics-specialist`.

## Validation evidence and Promotion Notes

- Position: validated spec-pack for defense industrial base and mission systems analytics, reporting, and disclosure-safe synthesis.
- The package remains `specification-based` by design even though the delivery target is validated.

