# Spec Quality Regression Investigation — 2026-07-21

## Summary

Investigation of a suspected spec quality regression in the labor-commons
catalog found **no file-level corruption or quality regression**. All 911
spec.yaml files on disk are valid YAML with correct slug fields. The actual
issue was **21 "ghost entries"** in the SQLite catalog marked as built and
materialized despite having no spec.yaml files on disk. These have been
corrected.

## Investigation Scope

- **naics-overlays**: 651 spec.yaml files across 55 industry sections
- **function-overlays**: 260 spec.yaml files across 10 function domains
- **Total on disk**: 911 spec.yaml files
- **SQLite catalog**: 1521 agent rows in `agent_catalog.sqlite`

## Findings

### 1. All spec.yaml files are structurally valid

- 651/651 naics-overlays specs parse as valid YAML (0 errors)
- 260/260 function-overlays specs parse as valid YAML (0 errors)
- No corruption markers (null bytes, truncated content, encoding issues)
- All `slug` fields match their directory names (0 mismatches)

### 2. agent_id version suffixes are a naming convention, not a regression

- 572 specs have `agent_id` values with `-v1` or `-v2` suffixes
- The `slug` field (the actual lookup key used by
  [`labor-commons-client.ts`](commons-board/services/api/src/lib/labor-commons-client.ts:182))
  matches directory names in all 651 cases
- `agent_id` is metadata only — it is not used for catalog lookup
- Lookup is by `sectionSlug`/`agentSlug` (directory names) via
  `specYamlPath()` and `resolveOverlayDirName()`

### 3. Root cause: 21 ghost entries in SQLite catalog

The SQLite catalog had 21 entries marked as `materialized=1,
catalog_status='built'` but with no corresponding spec.yaml files on disk.
This created a mismatch: the catalog claimed 932 materialized agents, but
only 911 spec.yaml files existed.

**Root cause traced to pre-OLF jkm-agents repo**
(`/Users/john/Documents/Projects/Pre-OLF/jkm-agents`):

The 21 ghost entries fall into three categories:

#### Category A: Queued but never built (16 entries)

These appear in `planning/catalog-build-queue.csv` with
`status=planned, issue_state=needs-spec`. They were queued for spec
generation but the generation process never completed. The SQLite catalog
was populated from the build queue, but at some point these entries were
incorrectly flipped to `materialized=1, catalog_status='built'` without
spec.yaml files being generated.

- **platform-meta-agents** (5): autonomous-improvement-system,
  continuous-improvement-orchestrator, dispatch-and-orchestration-specialist,
  readiness-and-evidence-specialist, spec-validation-and-refinement-specialist
  - These have `manifest.yaml` files in jkm-agents but were never converted
    to spec.yaml format in labor-commons
- **productization-saas-readiness-and-market-delivery** (10):
  customer-onboarding-specialist, customer-success-operations-specialist,
  licensing-protection-specialist, marketing-website-best-practice-specialist,
  pricing-and-packaging-strategy-specialist, product-compliance-specialist,
  product-documentation-and-enablement-specialist, saas-packaging-specialist,
  subscription-and-entitlement-specialist, technical-presales-specialist
  - Same pattern: manifest.yaml exists in jkm-agents, never materialized
    as spec.yaml in labor-commons
- **chemicals-plastics-and-materials-manufacturing** (1):
  environmental-permitting-and-inspections-specialist
  - The chemicals section in jkm-agents has
    `environmental-compliance-chemicals-specialist` (different name), but
    the build queue lists `environmental-permitting-and-inspections-specialist`
    as a planned spec that was never generated

#### Category B: Sections that don't exist in jkm-agents (5 entries)

These entries reference industry sections (`mining-quarrying-and-oil-and-gas`,
`waste-and-environmental-services`) that do not exist in jkm-agents'
`agents/catalog/industry-overlays/` directory (47 sections, none matching).
They also don't appear in any build queue CSV. They were likely added to
the SQLite catalog from a different source or manual entry.

- **mining-quarrying-and-oil-and-gas** (2):
  environmental-compliance-specialist, environmental-permitting-and-inspections-specialist
- **waste-and-environmental-services** (2):
  environmental-compliance-specialist, environmental-permitting-and-inspections-specialist
- **cybersecurity** (1): ot-and-industrial-security-specialist
  - The cybersecurity section exists in jkm-agents but has no
    `ot-and-industrial-security-specialist` directory

### 4. Fix applied

Updated all 21 ghost entries in `data/catalogs/agent_catalog.sqlite`:

```sql
UPDATE agents
SET materialized = 0,
    catalog_status = 'planned',
    readiness_state = 'not_ready',
    issue_state = 'needs-spec'
WHERE materialized = 1
  AND catalog_status = 'built'
  AND agent_slug NOT IN (
    SELECT ... -- entries with no spec.yaml on disk
  );
```

**After fix**: 911 materialized agents (matches spec.yaml file count on disk).

## Conclusion

There is no spec quality regression. The spec.yaml files on disk are all
valid and correctly structured. The issue was a data integrity problem in
the SQLite catalog where 21 entries were incorrectly marked as built. The
fix aligns the catalog state with reality.

The 21 entries that were never built remain in the catalog as `planned`
status, which is correct — they represent work that was queued but not
yet completed. The spec generation gap (Item #9 in the master plan) is
the follow-up: these entries need spec.yaml files generated to become
fully materialized.