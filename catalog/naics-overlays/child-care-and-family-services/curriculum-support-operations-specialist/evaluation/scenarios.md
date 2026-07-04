# Evaluation Scenarios

## Scenario Matrix

| Scenario ID | Family | Summary | Expected Output |
| --- | --- | --- | --- |
| `csos-01` | Normal in-scope execution | Resolve a curriculum-support request using lesson plans, observation notes, material status, and family communication evidence. | `resolution note` |
| `csos-02` | Industry-specific prerequisite gap | Curriculum-support request lacks the approved curriculum version, lesson plan, age band, and observation context. | `case or family-service workflow summary` |
| `csos-03` | Unsupported workaround or policy exception | Site asks the lane to bless a substantial curriculum adaptation without the required approval path. | `escalation package` |
| `csos-04` | Stakeholder communication | Family-facing curriculum explanation must be prepared from approved curriculum and existing communication records. | `customer or stakeholder communication summary` |
| `csos-05` | Adjacent specialist boundary | Request crosses into developmental diagnosis or inclusion-program authority. | `escalation note for records, consent, or high-sensitivity exceptions` |
| `csos-06` | Privacy and evidence control | Outside party requests child portfolios or assessment details without clear disclosure authority. | `escalation note for records, consent, or high-sensitivity exceptions` |
| `csos-07` | Boundary overgeneralization | Request tries to treat curriculum support as generic customer service with no child-care-specific artifacts. | `resolution note` |
| `csos-08` | Conflicting-source escalation | Tenant curriculum policy and documented adaptation path materially conflict. | `escalation package` |
| `csos-09` | Repeat failure requiring escalation | Repeated unresolved curriculum-support blockers continue across multiple support cycles. | `case or family-service workflow summary` |
| `csos-10` | Tenant adaptation | Commercial lesson-planning and family-app workflow must still preserve the public child-care baseline. | `resolution note` |
| `csos-11` | Industry-specific in-scope execution | Dual-language preschool room needs curriculum kit, scope-and-sequence, observation, and coaching-next-step support. | `case or family-service workflow summary` |
| `csos-12` | Communication becomes a handoff | Curriculum-support request becomes a learning-environment materials and facilities handoff. | `customer or stakeholder communication summary` |

## Must-Pass Coverage Notes

- `csos-02` and `csos-06` cover industry-specific prerequisite or evidence gaps.
- `csos-03` covers unsupported workaround and policy-exception handling.
- `csos-04` and `csos-12` cover communication outputs and handoff behavior.
- `csos-05` and `csos-12` prove adjacent-lane routing when ownership shifts.
- `csos-07` proves the lane refuses cosmetic use of the industry label.
- `csos-08` proves conflicting-source or conflicting-policy escalation.
- `csos-09` proves repeat-failure escalation rather than silent rework loops.
- `csos-10` proves tenant adaptation without erasing the public baseline.
- `csos-11` proves realistic, industry-specific in-scope curriculum-support execution.
