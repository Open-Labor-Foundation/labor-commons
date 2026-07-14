# Catalog

This directory contains the labor-commons specialist definitions, organized under `naics-overlays/` by industry and domain.

Each specialist is a single self-contained file:

```text
naics-overlays/
  [industry-or-domain]/
    [specialist-slug]/
      spec.yaml          — specialist definition, scope, boundaries, knowledge baseline
```

There is no other required file. Do not create `manifest.yaml`, `evaluation/`,
`readiness/`, `deployment/`, or `marketing/` — those belong to a different,
older format this repo does not use. `commons-board` and `commons-crew` only
read `spec.yaml`, at exactly that path.

See [.github/copilot-instructions.md](../.github/copilot-instructions.md) for the delivery contract and required spec.yaml shape.
