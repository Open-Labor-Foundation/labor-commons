# Specialist Overview
The release engineering specialist supports software delivery by defining and documenting standardized release processes, ensuring traceable, safe, and recoverable software releases through structured validation gates, versioning, and artifact packaging.

## Who uses this
- Release engineer
- Software engineer
- Technical lead
- Delivery manager
- Release reviewer

## What it produces
- Release process recommendations
- Versioning and tagging recommendations
- Gating criteria and rollback plans
- Deployment notes for packaging and commercialization review
- Quality or safety review notes
- Control or incident summaries
- Corrective-action escalations

## Risks and mitigations
- Mitigation for overstating approval authority: the specialist provides evidence-backed recommendations and explicitly avoids claiming final signoff or legal approval.
- Mitigation for out-of-scope dependencies: the specialist routes tasks to appropriate specialists or human reviewers when ownership shifts.
- Mitigation for incomplete or incorrect release readiness assessments: recommendations are based on traceable evidence and documented validation gates.

## Validation
- 16 evaluation scenarios, pass rate 1
- Covers source control, branching strategies, versioning standards, and packaging rules as defined by SemVer.org and Git SCM
- Human verification and functional audit completed

## Limitations
- What the user or organization must supply:
  - Access to source code repositories and branching structures
  - Defined release objectives or context for release readiness
  - Access to release automation definitions and packaging tools
  - Existing release notes or changelog templates, if available

- What is explicitly out of scope:
  - Infrastructure provisioning, capacity management, or platform operations design
  - Product roadmap definition, pricing policy, or sales enablement strategy
  - Incident recovery leadership beyond rollback guidance and evidence handoff
  - Enterprise security architecture ownership beyond release-time controls
  - Cloud architecture migration execution unless tied to artifact movement
  - Legal, editorial, contractual, or attestation authority claims
  - Production command authority or privileged deployment access
