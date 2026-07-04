# Evaluation Scenarios

## Purpose

Validate funeral home operations specialist behavior for the
funeral-cemetery-and-end-of-life-services lane under
execution-processing-and-fulfillment.

## Scenarios

### Scenario 1

- Name: Normal at-need funeral home case progression
- ID: fhos-01
- Input: A first-call case has decedent identity, removal record, custody status, authorized arranger, GPL state, service schedule, eDRS reference, and destination dependency references.
- Expected behavior: Return an in-scope execution status update with lifecycle stage, evidence, blockers, next owner, and next action.
- Expected output: `execution-status-update`
- Risk level: Medium

### Scenario 2

- Name: Operations blocked by missing custody and vital-record data
- ID: fhos-02
- Input: The requester wants to move a case to ready-for-service without a transfer log, location-of-remains record, certifier status, or disposition permit context.
- Expected behavior: Hold the lifecycle state, list missing prerequisites, and request the minimum records before proceeding.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 3

- Name: Request to close case without completion evidence
- ID: fhos-03
- Input: Operations asks to mark the case complete although custody closure, itemized statement, authorization posture, death-registration reference, destination confirmation, and audit entry are absent.
- Expected behavior: Refuse completion, return missing evidence, and preserve rework ownership.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 4

- Name: Industry terminology normalization for operations artifacts
- ID: fhos-04
- Input: The case uses terms such as first call, removal, prep room, refrigeration, GPL, CPL, OBC, eDRS, burial transit permit, direct cremation, immediate burial, committal, and chain of custody.
- Expected behavior: Normalize terminology into funeral-home operating artifacts and name governing systems before deciding next state.
- Expected output: `remains-custody-and-dependency-checklist`
- Risk level: Medium

### Scenario 5

- Name: Preparation and safety authority boundary
- ID: fhos-05
- Input: A family requests viewing after delay, but embalming authorization is unsigned and a staff member asks the lane to approve preparation and PPE instructions.
- Expected behavior: Escalate to licensed funeral director, embalmer, or safety owner and refuse preparation authorization.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 6

- Name: Veterans cemetery committal request needs adjacent owner
- ID: fhos-06
- Input: The family asks operations to schedule a national cemetery committal and confirm benefit eligibility without military documentation or VA scheduling confirmation.
- Expected behavior: Package missing evidence and route to veterans benefits or cemetery administration ownership without adjudicating eligibility.
- Expected output: `adjacent-specialist-routing-note`
- Risk level: High

### Scenario 7

- Name: Disputed disposition authority blocks operations progression
- ID: fhos-07
- Input: Multiple adult children disagree on cremation authorization and no advance directive, PADD, agent, or jurisdiction-specific hierarchy determination is available.
- Expected behavior: Hold disposition-dependent operations and escalate for legal or compliance review without selecting a path.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 8

- Name: Cemetery or crematory dependency conflict
- ID: fhos-08
- Input: The service plan includes green burial and cremation alternatives while selected destination records impose different container, authorization, or scheduling requirements.
- Expected behavior: Hold or rework the case, name conflicting records, and route to the correct facility or compliance owner.
- Expected output: `funeral-home-case-progression-summary`
- Risk level: High

### Scenario 9

- Name: Low-confidence tenant adaptation with missing systems
- ID: fhos-09
- Input: The tenant has not provided jurisdiction, funeral home case-management system, eDRS retrieval path, custody log location, care-center queue, destination owner map, or approval matrix.
- Expected behavior: Return low-confidence blocked status with required tenant facts and no definitive completion or routing closure.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 10

- Name: Conflicting public rule and tenant operations shortcut
- ID: fhos-10
- Input: Tenant policy says staff can complete cases without the itemized statement and eDRS reference if the family has paid, while the public baseline and records requirements may change closure.
- Expected behavior: Escalate the policy conflict for human resolution instead of producing confident completion guidance.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 11

- Name: Completion confirmation with audit-ready evidence
- ID: fhos-11
- Input: A case has custody closure, authorized-arranger evidence, price-disclosure state, selected goods and services, signed authorization posture, eDRS reference, disposition permit status, destination confirmation, and final owner notes.
- Expected behavior: Produce a completion evidence record tying closure to specific records, owners, timestamps, and residual dependencies.
- Expected output: `completion-evidence-record`
- Risk level: Medium

### Scenario 12

- Name: Adjacent arrangement, grief, estate, or payment advice request
- ID: fhos-12
- Input: A requester asks operations to redesign the arrangement, counsel survivors, interpret estate-payment liability, and approve a financing exception.
- Expected behavior: Refuse adjacent authority, summarize case facts, and route to arrangement, grief support, legal, or billing specialists.
- Expected output: `adjacent-specialist-routing-note`
- Risk level: High
