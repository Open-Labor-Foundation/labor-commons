# labor-commons

The governance layer for the Open Labor Foundation stack: a catalog of AI
agent definitions, one per profession or industry function, each specifying
what an agent in that role is authorized to decide, what it must escalate or
refuse, and a test suite proving it stays inside that boundary. Consumed by
[commons-board](https://github.com/Open-Labor-Foundation/commons-board) and
[commons-crew](https://github.com/Open-Labor-Foundation/commons-crew) to run
governed specialist agents rather than open-ended ones.

> **Status update:** the shortcomings this callout used to describe are
> fixed. The catalog now has both axes — `catalog/naics-overlays/` (industry
> verticals) and `catalog/function-overlays/` (260 generic corporate-function
> specialists: finance, HR, legal-and-compliance, marketing, and others,
> migrated from this stack's predecessor) — and commons-board/commons-crew
> scan both. A real practitioner-correction path exists: commons-board's org
> roster page opens a real PR here from a human-submitted field-level
> correction, reviewed the same as any other catalog change. The debt this
> callout used to flag for "discard-and-rebuild" is instead now handled by
> [labor-commons-curator](https://github.com/Open-Labor-Foundation/labor-commons-curator)'s
> real, independently-graded certification gate (see Publishing, below) —
> a record that fails certification is flagged for review, not discarded
> outright. See
> [open-labor-foundation/ARCHITECTURE.md](https://github.com/Open-Labor-Foundation/open-labor-foundation/blob/main/ARCHITECTURE.md)
> for the full, current ecosystem picture.

## What a definition is

Each entry lives under `catalog/naics-overlays/[industry]/[specialist-slug]/`
or `catalog/function-overlays/[domain]/[specialist-slug]/` and is a single
`spec.yaml` file — `schema_version`, `kind`, `freshness`, `metadata`,
`purpose`, `scope`, `adjacent_specialties`, and `knowledge_baseline`, plus
two additive blocks (`certification`, `seed_provenance`) not required on
every record. `infra/schema/specialist-record.schema.json` is the
canonical, machine-validated shape.

- **`metadata.specialty_boundary`** — what the agent owns, in explicit
  terms, and what it must reject or hand off (900-char floor, enforced by
  `infra/scripts/validate-spec-yaml.mjs`).
- **`knowledge_baseline.authority_sources`** — real, attributable sources
  backing the definition (8-source floor, same validator).
- **`certification`** — additive, written only by labor-commons-curator's
  independent pipeline, never hand-authored: whether the record currently
  passes real adversarial test scenarios derived from its own claims.

A definition isn't scoped to the business that needed it first. Any workflow
on the platform can invoke any specialist whose boundary matches what it
needs, regardless of which industry originally motivated the definition.

## Coverage

The catalog launched with an AI-curated seed built from the NAICS industry
classification — 57 industry categories, each with a target number of
specialist definitions. Actual coverage is tracked against that target per
industry; closing the gap is ongoing, continuous work, not a one-time launch
task.

## Contributing

Definitions are produced through
[commons-idea](https://github.com/Open-Labor-Foundation/commons-idea): describe
your expertise in a guided conversation, and it generates the structured
`spec.yaml` and supporting files. See [CONTRIBUTING.md](CONTRIBUTING.md) for
current submission status and the full spec format.

## Staying current

[commons-keeper](https://github.com/Open-Labor-Foundation/commons-keeper) runs
continuously against this catalog — validating definitions, scoring health,
and flagging entries that have gone stale for renewal.

## Publishing: the certification gate

A PR that sets a record's `metadata.status` to `published` runs
[labor-commons-curator](https://github.com/Open-Labor-Foundation/labor-commons-curator)'s
real certification pipeline in CI (scenario generation, materialization
against a real commons-crew, execution and grading) and fails the check if
the record doesn't pass — see that repo's `certifyForPublish` and
[open-labor-foundation/GOVERNANCE.md](https://github.com/Open-Labor-Foundation/open-labor-foundation/blob/main/GOVERNANCE.md)
for the model this implements. It only runs when a change actually sets
`status: published`; other status values and unrelated changes don't
trigger it.

**Requires `CERTIFY_PROVIDER_BASE_URL`, `CERTIFY_PROVIDER_API_KEY`, and
`CERTIFY_PROVIDER_MODEL` configured as repository secrets** (an
OpenAI-chat-completions-compatible endpoint — e.g. Featherless). Without
them, the check logs a visible warning and passes non-blocking rather than
failing every `published` PR outright — configure the secrets to make this
an actually-enforcing gate.

## License

[CC-BY-SA 4.0](LICENSE) — share alike.

---

Part of the [Open Labor Foundation](https://github.com/Open-Labor-Foundation/open-labor-foundation).
