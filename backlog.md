# labor-commons backlog

---

## BACKLOG-001: Decay counter on specialist definitions

Every specialist definition in the catalog carries a decay counter — a metadata field that records when the spec was last reviewed and sets a staleness threshold after which the spec is flagged for renewal.

**Why:** Professions evolve. Tooling, regulations, best practices, and workflow norms shift over time. A specialist definition written today may be meaningfully outdated in a year. Without a forcing function, stale specs silently degrade the quality of every product that draws from the catalog.

**Schema addition:**

Each specialist definition gains a `freshness` metadata block:

```yaml
freshness:
  last_reviewed: 2026-06-16
  review_interval_days: 365
  stale_after: 2027-06-16
  status: current  # current | stale | expired
```

- `last_reviewed` — date the spec was last meaningfully reviewed and confirmed accurate
- `review_interval_days` — how often this spec should be reviewed; may vary by domain (a fast-moving tech spec might be 180 days; a stable trade definition might be 730)
- `stale_after` — computed from `last_reviewed + review_interval_days`; the date commons-keeper begins flagging
- `status` — set by commons-keeper based on the current date vs. `stale_after`

**Renewal path:**

A stale spec does not become invalid immediately. The renewal path is:

1. `current` → (threshold reached) → `stale` — commons-keeper flags, surfaces in reports, opens a renewal issue
2. `stale` → (review window elapsed without action) → `expired` — commons-keeper escalates; expired specs may be suppressed from catalog recommendations until renewed
3. Any state → (PR merged with updated `last_reviewed`) → `current`

**Related:** commons-keeper BACKLOG-001 covers detection, escalation, and enforcement of this counter.

---

## BACKLOG-002: Port gap — spec-pack issue regeneration

When Pre-OLF repositories were ported into Open Labor Foundation repos, the
spec-pack issue pipeline was rebuilt from scratch. The original Pre-OLF
repository (`jkmurphy-alt/jkm-agents`) had 1,139 spec-pack issues total — 570
closed (completed) and 567 open (never completed). The port only brought over
the closed issues: 569 of 570 closed jkm-agents slugs now have `spec.yaml` files
in `catalog/naics-overlays/` (1 closed slug — `ot-and-industrial-security-specialist`
— was not ported). The 567 open jkm-agents issues were left behind. Of those,
560 are in the current build queue but have no generated spec, and 4 were
somehow generated despite their jkm-agents issues remaining open
(`facilities-compliance-specialist`, `agency-operations-specialist`,
`development-reporting-specialist`, `policy-administration-specialist`).

The build queue CSV (`data/industry-overlay-build-queue.csv`) lists 1,060
unique agent slugs, meaning **560 specialists** in the queue still have no
generated spec — and all 560 correspond exactly to the 560 open (never
completed) jkm-agents issues.

### Root causes of the gap

1. **Issue template regression** — The ported issue template in
   `infra/scripts/create-industry-overlay-spec-issues.mjs` contained a delivery
   contract contradiction: the issue body instructed the LLM to create
   `evaluation/`, `readiness/`, `deployment/`, and `marketing/` directories,
   while `.github/copilot-instructions.md` explicitly forbids them. This caused
   the LLM to produce inconsistent or incomplete output. **Fixed** — the
   template now references `spec.yaml` only.

2. **Brief truncation** — `buildIssueBrief()` in
   `commons-devloop/scripts/local-lane-runner.mjs` truncated each issue body
   section to 700 chars and `compactIssueBriefForContext()` to 450 chars,
   making 18 of 23 sections invisible to the LLM. **Fixed** — limits raised to
   2,000 / 1,200 chars respectively, and 4 missing sections added to the brief
   parser.

3. **Stale issues** — 24 spec-pack issues were created with the old template
   before the fixes were applied. **Fixed** — all 24 closed with explanatory
   comments; they will be regenerated with the corrected template.

4. **Old-format directory cleanup** — All 651 existing spec directories
   contained leftover `evaluation/`, `readiness/`, `deployment/`, and
   `positioning/` directories from the pre-port multi-file format (2,605
   directories total). **Fixed** — all removed. The ecosystem
   (`commons-board`, `commons-crew`) reads only `spec.yaml`.

### Current state (as of 2026-07-10)

| Metric | Count |
|--------|-------|
| Pre-OLF jkm-agents total issues | 1,139 |
| Pre-OLF jkm-agents closed issues | 570 |
| Pre-OLF jkm-agents open issues | 567 |
| jkm-agents closed slugs ported to labor-commons | 569 |
| jkm-agents closed slugs NOT ported | 1 (`ot-and-industrial-security-specialist`) |
| jkm-agents open slugs with spec.yaml (anomaly) | 4 |
| jkm-agents open slugs without spec.yaml | 560 |
| Build queue unique agent slugs | 1,060 |
| Existing `spec.yaml` files | 651 |
| Missing specs (in queue, no spec.yaml) | 560 |
| Build queue rows | 1,069 |
| `approved-lane-template` tier | 984 |
| `curated-row-override` tier | 85 |
| `needs-spec-pack` issue state | 1,062 |
| `market-ready` issue state | 7 |

### Origin of the 560 missing specs

All 560 missing specs trace back to open (never completed) issues in the
Pre-OLF `jkmurphy-alt/jkm-agents` repository. These issues were created but
never resolved — the LLM never generated specs for them. The port to Open
Labor Foundation only carried over completed work (closed issues → spec.yaml
files). The 560 open issues were left behind and need to be regenerated as new
spec-pack issues in the OLF `labor-commons` repo using the corrected template.

### Missing specs by section (top 20)

| Section | Missing |
|---------|---------|
| professional-services | 16 |
| manufacturing | 14 |
| retail-and-e-commerce | 14 |
| legal-services | 12 |
| life-sciences-and-biotechnology | 12 |
| other-services-and-personal-services | 12 |
| pharmaceutical-and-medtech | 12 |
| social-services-and-community-care | 12 |
| transportation-and-logistics | 12 |
| utilities | 12 |
| wholesale-trade-and-distribution | 12 |
| insurance | 11 |
| mining-quarrying-and-oil-and-gas | 11 |
| real-estate-and-property-management | 11 |
| justice-courts-and-corrections | 10 |
| k-12-education | 10 |
| life-health-and-benefits-insurance | 10 |
| maritime-ports-and-shipping | 10 |
| media-and-publishing | 10 |
| metals-machinery-and-industrial-equipment-manufacturing | 10 |

(35 additional sections have 8–10 missing specs each.)

### Next steps

1. Regenerate spec-pack issues for the 560 missing specialists using the
   corrected template in `create-industry-overlay-spec-issues.mjs`.
2. Run `commons-devloop` against the new issues — the fixed truncation limits
   and brief parser will give the LLM full visibility into all issue body
   sections.
3. Validate generated specs with `infra/scripts/validate-spec-yaml.mjs`.
4. Track progress via the `issue_state` column in
   `data/industry-overlay-build-queue.csv` (transition from `needs-spec-pack`
   to `market-ready`).
