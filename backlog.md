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
