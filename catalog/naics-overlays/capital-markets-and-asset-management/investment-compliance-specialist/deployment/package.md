# Deployment Package

## Runtime Profile

- Runtime strategy: `specification-based`
- Runtime target: `commons-crew`
- Target delivery level: `validated`
- Targeted runtime use: evidence-guided routing and output generation for investment-compliance handling in adviser, fund-complex, and affiliate-distribution workflows.
- Runtime remains `specification-based` until a retained-implementation upgrade is explicitly promoted in a separate change.

## Materialization Requirements

### Required task and boundary metadata

- `manifest.yaml` with explicit scope, refusal triggers, adjacent-lane routing, tenant adaptation policy, and orchestrator return rules.
- Evaluation artifacts: `scenarios.md`, `functionality-map.json`, `research-summary.json`, and `results.json`.
- Readiness artifacts: `readiness/evidence.json` and `readiness/release.md`.
- Deployment and commercialization notes in `deployment/package.md` and `positioning/readiness.md`.

### Required tenant facts and assumptions

- Entity and jurisdiction map showing whether the workflow sits in an SEC-registered adviser, registered fund complex, affiliate distributor, FINRA member, retirement program, or non-U.S. perimeter.
- Mandate source hierarchy for IMAs, IPS schedules, side letters, prospectus or SAI language, ADV disclosures, and internal rule-coding references.
- Tenant authority matrix for CCO signoff, registered-principal approval, portfolio-guideline overrides, restricted-list changes, marketing approval, legal review, and market-abuse escalation.
- Current systems of record, record locations, retention paths, and retrieval hooks for OMS, PMS, exception monitoring, personal trading, marketing review, GRC, and archival systems.
- Tenant source-precedence rules when SEC, FINRA, GIPS, investor, retirement, or internal policy sources overlap.

### Systems of record and retrieval dependencies

- OMS and EMS platforms for pre-trade and post-trade exceptions.
- PMS, guideline-monitoring, and holdings master systems.
- Personal-trading, code-of-ethics, and attestation platforms.
- Marketing review, DDQ, RFP, and disclosure repositories.
- GRC, issue-management, supervisory-testing, and annual-review systems.
- Books-and-records archives, email retention, and document management systems.
- Fund-reporting or client-reporting repositories where performance or disclosure evidence lives.

### Regulated-lane caveats

- This lane does not replace legal advice, CCO authority, registered-principal approval, trade-surveillance adjudication, or regulator-facing representation.
- SEC and FINRA sources may both matter, but only when the tenant confirms the entity and distribution perimeter that makes each source operative.
- Public baseline sources may require tenant and jurisdiction refinement; the lane must record ambiguity rather than guess.

### Refusal and orchestrator-return conditions

- Return to orchestrator when required mandate documents, source records, or tenant context are missing and change the outcome.
- Return when legal, regulator-facing, market-abuse, fund-governance, executive certification, or principal-approval authority is required.
- Return when entity-perimeter, jurisdiction, or source conflicts materially alter the control posture.
- Refuse any request that would fabricate compliance completion, approve trades, override mandates, or certify the firm from generic evidence alone.

## Deployment and Rollback

- Deployment: enable only for tenants that have explicit mandate libraries, entity-perimeter mapping, owner routing, and systems-of-record mappings configured.
- Rollback: disable specialist routing and return active work to the orchestrator-safe path with blockers, evidence references, and unresolved conflicts preserved.
- Monitoring recommendations: missing-mandate rate, missing-personal-trading-evidence rate, marketing-substantiation gaps, source-conflict escalations, and requests for prohibited signoff or surveillance authority.

## Validation evidence and Promotion Notes

- Positioning: validated capital-markets and asset-management overlay specialist for investment-compliance monitoring, evidence review, and escalation support.
- This package is not retained-implementation and does not claim legal, surveillance, trade-approval, or final signoff authority.
