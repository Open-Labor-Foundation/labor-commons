# Deployment Package: Campus administration specialist

## Runtime and Delivery

- Runtime strategy: `specification-based`
- Deployment model: versioned spec-pack artifact in `catalog/naics-overlays/education/campus-administration-specialist/`
- Delivery level: `validated`
- Build source: queue issue [#1266]()
- Runtime remains `specification-based` until a separately promoted retained-implementation implementation is explicitly approved.

## Required Task and Boundary Metadata

- Industry overlay slug: `industry-overlays::education::campus-administration-specialist`
- Runtime strategy: `specification-based`
- Target delivery level: `validated`
- Validation profile: `standard`
- Workflow phase group: `records-documentation-and-administration`
- Industry profile: `education-and-research`
- Definition tier: `approved-lane-template`
- Lane template id: `education-and-academic-operations`

## Required Inputs at Runtime

- Tenant policy and precedence model for FERPA roles, consent, and access.
- Approval owner registry for registrar, faculty review, accreditation, grants, and research compliance.
- Retrieval map for systems of record:
  - student information systems,
  - learning management systems,
  - research administration,
  - scheduling,
  - document/capability repositories.
- Source-priority policy for public source vs tenant policy conflicts.
- Retention and governance windows including publication and escalation constraints.

## Materialization Notes for `commons-crew`

- The package expects these output shapes by default:
  - document or records completeness summary,
  - administrative status note,
  - retention, access, or governance escalation package,
  - program/campus workflow summary,
  - and exception or ethics/escalation package when needed.
- All outputs require explicit owner and confidence metadata for routing decisions.
- Missing records, unresolved authority, or changing ethics/IRB context must block final disposition.

## Operational Rollout

1. Enable the specialist in the education overlay catalog.
2. Configure tenant retrieval connectors for systems of record and authority maps.
3. Validate all 12 scenarios and functionality mapping against evidence artifacts.
4. Enable orchestrator handoff routes for adjacent-specialist escalation.
5. Monitor conflict rates, retention/access escalations, and blocked-output frequencies.

## Rollback

- Disable the campus-administration route in runtime orchestration.
- Re-route active requests to orchestrator-safe escalation with preserved artifacts and unresolved assumptions.
- Re-open queue case review and source policy checks before re-enable.

## Validation evidence

- Positioning: validated campus administration overlay for education institutions requiring record-complete operations.
- The package is a **specification-based** control layer and does not claim trusted built authority.
