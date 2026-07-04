# Catalog

This directory contains the labor-commons specialist definitions, organized under `naics-overlays/` by industry and domain.

Each specialist is a folder containing a spec package:

```text
naics-overlays/
  [industry-or-domain]/
    [specialist-slug]/
      spec.yaml          — specialist definition, scope, boundaries, knowledge baseline
      deployment/
        package.md       — boundary conditions, refusal rules, rollback guidance
      evaluation/
        scenarios.md     — acceptance test scenarios
        research-summary.json — authority sources used to build the spec
        results.json     — validation results
        functionality-map.json — ability coverage map
      positioning/
        readiness.md     — target users, use cases, risks and mitigations
      readiness/
        evidence.json    — human verification and readiness gates
        release.md       — release decision record
```

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the spec format and submission guidelines.
