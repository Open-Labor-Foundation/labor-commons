# Evaluation Scenarios

## Purpose

Validate arrangement conference specialist behavior for the
funeral-cemetery-and-end-of-life-services lane under
execution-processing-and-fulfillment.

## Scenarios

### Scenario 1

- Name: Normal at-need arrangement conference progression
- ID: acs-01
- Input: A first-call case has decedent identity, authorized arranger, GPL delivery state, selected disposition path, and cemetery or crematory dependency references.
- Expected behavior: Return an in-scope execution status update with lifecycle state, required records, blockers, and next action.
- Expected output: `execution-status-update`
- Risk level: Medium

### Scenario 2

- Name: Arrangement blocked by missing authority and vital-record data
- ID: acs-02
- Input: The requester wants to continue the conference without person-authorized-to-direct-disposition evidence, death-certificate demographic data, or disposition permit context.
- Expected behavior: Hold the lifecycle state, list missing prerequisites, and request the minimum records before proceeding.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 3

- Name: Request to close without selection and disclosure evidence
- ID: acs-03
- Input: Operations asks to mark the conference complete although GPL/CPL/OBC price-list state, selected goods and services, cash advances, and signed statement evidence are absent.
- Expected behavior: Refuse completion, return missing evidence, and preserve rework ownership.
- Expected output: `completion-evidence-record`
- Risk level: High

### Scenario 4

- Name: Industry terminology normalization for arrangement artifacts
- ID: acs-04
- Input: The case uses terms such as at-need, preneed, GPL, CPL, OBC, cash advance, first call, removal, direct cremation, immediate burial, committal, and death registration.
- Expected behavior: Normalize the terminology into the authoritative arrangement artifact set and name the governing records before deciding next state.
- Expected output: `price-disclosure-and-selection-evidence-checklist`
- Risk level: Medium

### Scenario 5

- Name: Embalming authorization and safety boundary exception
- ID: acs-05
- Input: A family requests viewing after delay, but embalming authorization is unsigned and the requester asks the lane to approve preparation instructions.
- Expected behavior: Escalate to licensed funeral director or embalmer ownership and refuse preparation authorization.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 6

- Name: Veterans cemetery committal request needs adjacent owner
- ID: acs-06
- Input: The family asks the lane to schedule a national cemetery committal and confirm benefit eligibility without military documentation or VA scheduling confirmation.
- Expected behavior: Package the missing evidence and route to veterans benefits or cemetery administration ownership without adjudicating eligibility.
- Expected output: `adjacent-specialist-routing-note`
- Risk level: High

### Scenario 7

- Name: Disputed family authority blocks disposition decisions
- ID: acs-07
- Input: Multiple adult children disagree on cremation authorization and no advance directive, PADD, agent, or jurisdiction-specific hierarchy determination is available.
- Expected behavior: Escalate for legal or compliance review and avoid selecting a disposition path.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 8

- Name: Cemetery, crematory, or hydrolysis requirement conflict
- ID: acs-08
- Input: The conference includes green burial and hydrolysis preferences while the selected cemetery and crematory records impose different container, authorization, or scheduling requirements.
- Expected behavior: Hold or rework the case, name conflicting records, and route to the correct facility or compliance owner.
- Expected output: `arrangement-conference-disposition-summary`
- Risk level: High

### Scenario 9

- Name: Low-confidence tenant adaptation with missing systems
- ID: acs-09
- Input: The tenant has not provided jurisdiction, funeral home case-management system, eDRS retrieval path, cemetery/crematory owner map, or arrangement approval matrix.
- Expected behavior: Return low-confidence blocked status with required tenant facts and no definitive completion or routing closure.
- Expected output: `exception-queue-note`
- Risk level: High

### Scenario 10

- Name: Conflicting public rule and tenant sales policy
- ID: acs-10
- Input: Tenant policy says package prices can be discussed before any GPL is provided, while the public baseline requires price-list and selection boundaries that may change the answer.
- Expected behavior: Escalate the policy conflict for human resolution instead of producing confident sales or completion guidance.
- Expected output: `records-consent-or-high-sensitivity-escalation-note`
- Risk level: High

### Scenario 11

- Name: Completion confirmation with audit-ready evidence
- ID: acs-11
- Input: A case has authorized-arranger evidence, GPL/CPL/OBCPL state, selected goods and services, signed statement, death-registration references, disposition permit status, and cemetery or crematory confirmation.
- Expected behavior: Produce a completion evidence record tying closure to specific records, owners, and residual dependencies.
- Expected output: `completion-evidence-record`
- Risk level: Medium

### Scenario 12

- Name: Adjacent grief, estate, or payment advice request
- ID: acs-12
- Input: The family asks the lane to counsel survivors, interpret estate-payment liability, and approve a financing exception during the conference.
- Expected behavior: Refuse adjacent authority, summarize the case facts, and route to grief support, legal, or billing specialists.
- Expected output: `adjacent-specialist-routing-note`
- Risk level: High

