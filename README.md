# labor-commons

The governance layer for the Open Labor Foundation stack: a catalog of AI
agent definitions, one per profession or industry function, each specifying
what an agent in that role is authorized to decide, what it must escalate or
refuse, and a test suite proving it stays inside that boundary. Consumed by
[commons-board](https://github.com/Open-Labor-Foundation/commons-board) and
[commons-crew](https://github.com/Open-Labor-Foundation/commons-crew) to run
governed specialist agents rather than open-ended ones.

> **Known shortcomings:** see [open-labor-foundation/ARCHITECTURE.md](https://github.com/Open-Labor-Foundation/open-labor-foundation/blob/main/ARCHITECTURE.md)
> for the full ecosystem picture. A portion of this catalog carries debt from
> an early, token-constrained generation process (fabricated or drifted
> content) — tracked for discard-and-rebuild in
> [labor-commons-curator](https://github.com/Open-Labor-Foundation/labor-commons-curator).
> The catalog's other intended growth path — corrections and additions from
> practitioners in the profession, not just AI inference against the NAICS
> backlog — has no working mechanism yet; it's expected to arrive as
> user-guided spec updates from commons-board and commons-crew.

## What a definition is

Each entry lives under `catalog/naics-overlays/[industry]/[specialist-slug]/`
and centers on a `spec.yaml`:

- **`specialty_boundary`** — what the agent owns, in explicit terms, and what
  it must reject or hand off.
- **`evaluation/scenarios.md`** — numbered test cases: a realistic input, the
  expected behavior, and the required output, verifying the agent doesn't
  quietly expand past its authority.
- **`deployment/`, `positioning/`, `readiness/`** — packaging, fit, and
  release-readiness evidence for the definition.

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

## License

[CC-BY-SA 4.0](LICENSE) — share alike.

---

Part of the [Open Labor Foundation](https://github.com/Open-Labor-Foundation/open-labor-foundation).
