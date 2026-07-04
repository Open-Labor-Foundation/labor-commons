# Evaluation Scenarios

## Scenario Matrix

| Scenario ID | Family | Summary | Expected Output |
| --- | --- | --- | --- |
| `ccos-01` | Normal in-scope execution | Progress daily center operations from open through close using roster, ratio, attendance, release, and room-readiness evidence. | `execution status update` |
| `ccos-02` | Industry-specific prerequisite gap | Room-opening request lacks current background-check and training evidence for assigned staff. | `exception summary` |
| `ccos-03` | Execution exception and rework | Inspection correction cannot close because repair evidence and management verification are missing. | `escalation note` |
| `ccos-04` | Completion without evidence | A supervisor asks to close incident follow-up without the required incident, notification, and corrective-action records. | `completion or fulfillment record` |
| `ccos-05` | Release-control exception | Bus drop-off reaches an unauthorized adult and the bus roster is incomplete. | `escalation note` |
| `ccos-06` | Boundary overreach | Request asks the specialist to waive an inspection finding so a room can stay open. | `exception summary` |
| `ccos-07` | Adjacent staffing lane | Ratio coverage fails and would require staffing reallocation or overtime approval. | `case or family-service workflow summary` |
| `ccos-08` | Industry terminology handling | Request expects child-care operations guidance using ratio, name-to-face check, MAR, bus roster, and playground-inspection terminology. | `execution status update` |
| `ccos-09` | Conflicting-source escalation | Tenant room-coverage policy conflicts with retrieved jurisdiction ratio requirements. | `escalation note` |
| `ccos-10` | Tenant adaptation | Private-pay center uses different systems than Head Start but still must satisfy attendance, release, incident, and training controls. | `case or family-service workflow summary` |
| `ccos-11` | Safety or complaint escalation | An operations task reveals possible unsafe supervision that may require complaint or child-protection reporting. | `escalation note` |
| `ccos-12` | Systems conflict | Attendance, transportation, and release systems disagree on whether children were accounted for correctly. | `exception summary` |

## Must-Pass Coverage Notes

- `ccos-02`, `ccos-03`, `ccos-05`, and `ccos-12` cover incomplete inputs or artifacts mid-process.
- `ccos-03`, `ccos-09`, `ccos-11`, and `ccos-12` cover execution exceptions requiring rework or escalation.
- `ccos-04` and `ccos-12` prove the lane refuses unsupported completion.
- `ccos-02`, `ccos-05`, and `ccos-08` prove the industry materially changes prerequisites, artifacts, and terminology.
- `ccos-06`, `ccos-07`, and `ccos-11` prove routing to adjacent specialists or authorities instead of generic operations overreach.
- `ccos-10` proves tenant adaptation without erasing the public child-care baseline.
