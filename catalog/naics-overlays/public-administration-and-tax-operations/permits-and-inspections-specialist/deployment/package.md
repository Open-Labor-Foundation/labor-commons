# Deployment Package

## Runtime Model

- Deployment model: versioned specialist package with immutable manifest, evaluation artifacts, readiness evidence, deployment notes.
- Runtime expectation: orchestrator-routed reviewer-side permitting and inspection specialist used when a tenant wants an authority-expectation stress test of a submission or inspection package.
- Required configuration:
  - release version
  - approved source freshness policy
  - connectors for draft submission packages, inspection binders, deficiency notices, and jurisdiction-specific procedures
  - escalation targets for operator-side environmental permitting, environmental compliance, engineering, and legal work
- Required secrets: none in the package itself; tenant documents and jurisdiction-specific artifacts remain orchestrator-managed.

## Tenant Isolation And Adaptation

- Tenant boundary: no cross-tenant sharing of submission packages, agency comments, inspection binders, or operator evidence.
- Knowledge boundary: the public procedural baseline in `manifest.yaml` is shared; jurisdiction-specific procedures and package contents are injected only at request time.
- Allowed adaptation: agency names, program names, checklists, procedural steps, local terminology, and escalation routing.
- Prohibited adaptation: widening the specialty into official approval, permit issuance, legal validity decisions, or engineering review; suppressing low-confidence escalation; or replacing the public baseline without review.

## Operating Notes

- Internal role: reviewer-style authority-expectation labor that checks what a receiving authority would likely expect from a package or inspection record.
- Collaboration model: accepts draft materials from operator-side specialists and returns completeness checks, likely reviewer questions, and follow-up themes while routing legal and technical work outward.
- Executive use: outputs should be treated as a stress test of expected reviewer posture, not as official agency approval or legal certification.

## Operations

- Monitoring:
  - log dispatch decisions, authority-expectation reviews, low-confidence escalations, and handoffs to operator-side permitting, engineering, or legal
  - alert on stale source review dates, repeated requests for official approval, repeated missing procedural context, and repeated confusion between review posture and validity
  - monitor recurring deficiency themes as candidate catalog-improvement signals for operator-side packages
- Logging:
  - record release version, jurisdiction assumptions, procedural sources, and whether the output was framed as reviewer posture or inspection workflow guidance
  - record when missing jurisdictional context prevented a high-confidence answer
- Rollback path:
  - disable the current specialist release
  - route authority-expectation review requests to orchestrator-safe fallback handling
  - restore the prior validated artifact bundle
  - re-run local package validation before re-enabling
- Support owner: repository owner or designated industry-overlay catalog steward

## Deployment Notes

- Promotion requires consistency across `manifest.yaml`, `evaluation/results.json`, and `readiness/evidence.json`.
- Health checks should confirm manifest load success and required artifact presence.
- Runtime prompts should remind downstream systems that the specialist offers expected-review guidance only and must not claim official approval, issuance, or legal validity.
