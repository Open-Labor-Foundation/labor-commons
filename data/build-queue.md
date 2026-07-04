# Build Queue

## Purpose

This queue converts the catalog target into implementation order.

Use `catalog-build-queue.csv` as the machine-readable source of truth for issue creation, manifests, and progress tracking.
Use `industry-overlay-build-queue.csv` as the machine-readable source of truth
for NAICS and industry-overlay spec-pack intake.

## Wave 1

Wave 1 contains the first 40 specialists to define and validate. These are the foundation agents for the catalog because they cover the highest-leverage security, software, cloud, identity, operations, governance, and modernization lanes.

### Domains represented

- Cybersecurity
- Software engineering and application delivery
- Cloud platform and infrastructure
- Networking and connectivity
- Identity, endpoint, and workplace technology
- Data, analytics, and AI
- IT service management and support
- Governance, risk, compliance, and commercial control
- Business applications and enterprise platforms
- Legacy systems, automation, and integration

## Wave 2

Wave 2 fills out the remaining named catalog after the manifest format, validation process, and readiness workflow are proven on Wave 1.

Wave 2 also includes platform meta agents that normalize shared catalog
artifacts such as evaluation design, readiness evidence, deployment notes, and
commercialization notes without replacing specialist-owned facts.

## Suggested execution loop

1. For functional domain and build-track rows, create one implementation issue per
   queue row.
2. For NAICS and industry-overlay rows, create one spec-pack issue per queue
   row unless the lane has already been promoted to build track.
3. Draft the manifest from the labor-commons manifest template.
4. Attach authority sources and initial scenarios.
5. Run validation and human verification appropriate to the declared target.
6. Promote the specialist to `market-ready`, `built`, or a higher release
   target only when the relevant gates are satisfied.
