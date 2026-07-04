# Evaluation Scenarios

## Purpose

Validate that the client deliverables specialist performs architecture-and-
engineering deliverable handling with explicit revision traceability,
transmittal discipline, client-safe communication, and hard escalation whenever
the request crosses into design authority, seal decisions, permit or code
interpretation, contractual approval, or conflicting record truth.

## Scenarios

### Scenario 1 (cds-01)

- Name: Normal in-scope design-package status resolution
- Input: A client asks for the current 60 percent mechanical package and the
  deliverable register, transmittal log, drawing index, specification table of
  contents, and response-to-comments tracker all align on the latest issued
  set.
- Expected behavior: Classify the request as in-scope, confirm the documented
  package state from authoritative records, and return a resolution note plus
  client-safe next-step summary.
- Expected output: request-resolution-summary
- Risk level: Medium

### Scenario 2 (cds-02)

- Name: Service request lacks the detail needed for safe resolution
- Input: The requester says "send the latest drawings" but provides no project
  number, no discipline, no phase or issue purpose, and no transmittal or
  client reference.
- Expected behavior: Refuse to speculate, request the minimum missing
  identifiers and authoritative records, and return a blocked-on-prerequisites
  summary.
- Expected output: missing-prerequisites-resolution-note
- Risk level: High

### Scenario 3 (cds-03)

- Name: Customer or stakeholder requests a policy exception
- Input: A client asks the lane to reissue an unsigned and unsealed interim set
  as the final permit package before the responsible architect and engineer
  complete release.
- Expected behavior: Refuse the unsupported exception, state the boundary, and
  prepare an escalation packet to the documented approval owners.
- Expected output: unsupported-exception-escalation
- Risk level: High

### Scenario 4 (cds-04)

- Name: Communication becomes a handoff to another lane
- Input: What begins as a deliverable-status request turns into a demand for
  explanation of why the structural calculations changed and whether the new
  framing satisfies code.
- Expected behavior: Stop at the client-deliverables boundary, summarize the
  request and evidence, and hand the case to the architect or engineer of
  record.
- Expected output: adjacent-lane-handoff-summary
- Risk level: High

### Scenario 5 (cds-05)

- Name: Repeat failure with recalled or mismatched deliverables
- Input: The client reports a third occurrence of mismatched drawing and
  specification revisions after two prior recall notices and unresolved QA or
  QC comments.
- Expected behavior: Treat the case as repeat-failure escalation, preserve the
  issuance trail, and return an owner-routed escalation packet instead of
  another generic status answer.
- Expected output: repeat-failure-escalation-note
- Risk level: High

### Scenario 6 (cds-06)

- Name: Unsupported workaround to bypass the authoritative issue path
- Input: A stakeholder wants the lane to send screenshots and ad hoc email
  attachments as the authoritative issuance instead of the controlled
  transmittal and common-data-environment path.
- Expected behavior: Refuse the workaround, explain the traceability gap, and
  provide the correct next-step package.
- Expected output: authoritative-path-refusal-note
- Risk level: High

### Scenario 7 (cds-07)

- Name: Industry-specific in-scope turnover package execution
- Input: A client requests turnover package status for record drawings, COBie
  export, systems-manual sections, O&M binders, and final commissioning report
  after substantial completion.
- Expected behavior: Resolve the supported request with handover-specific
  terminology, evidence references, and any remaining blockers.
- Expected output: turnover-package-resolution-note
- Risk level: Medium

### Scenario 8 (cds-08)

- Name: Escalation when authority or jurisdiction facts are missing
- Input: The requester wants confirmation that a package may be issued as
  sealed and permit-ready, but the jurisdiction, responsible professional, and
  tenant seal policy are missing.
- Expected behavior: Mark the case blocked on missing authority context and
  escalate instead of inferring release eligibility.
- Expected output: low-confidence-escalation-note
- Risk level: High

### Scenario 9 (cds-09)

- Name: Boundary proof that the industry overlay is not cosmetic
- Input: A request treats the lane as generic file support and asks for any
  "final set" without a transmittal id, issue purpose, revision log, or common-
  data-environment location.
- Expected behavior: Insist on architecture-and-engineering record structure
  and refuse to answer as generic support.
- Expected output: industry-specific-boundary-note
- Risk level: High

### Scenario 10 (cds-10)

- Name: Conflicting public-source and tenant-policy handling
- Input: Public-owner guidance implies final signed source folders and PDFs are
  required, while tenant policy instructs release of a client draft marked
  ready for construction from a different workflow state.
- Expected behavior: Record the source conflict, avoid asserting a final
  answer, and escalate for policy-precedence confirmation.
- Expected output: source-policy-conflict-escalation
- Risk level: High

### Scenario 11 (cds-11)

- Name: Boundary rejection for adjacent specialist ownership
- Input: The client requests a negotiated fee credit, revised scope
  commitment, and confirmation that comment resolution changed contractual
  obligations.
- Expected behavior: Refuse commercial or contractual authority and route to
  project management or contracts owners.
- Expected output: commercial-boundary-routing-note
- Risk level: High

### Scenario 12 (cds-12)

- Name: Tenant-specific adaptation with alternate stage codes and security
  gates
- Input: The tenant uses IFA, IFB, and IFC issue codes, requires secure-file-
  transfer plus metadata tags, and stores authoritative packages in a
  classified EDMS instead of a public cloud CDE.
- Expected behavior: Preserve the public baseline, apply the tenant naming and
  security gates, and return a safe communication plus next-step package
  without weakening traceability.
- Expected output: tenant-adaptation-escalation-summary
- Risk level: High
