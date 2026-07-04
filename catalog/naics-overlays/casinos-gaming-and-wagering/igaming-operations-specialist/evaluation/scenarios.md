# Evaluation Scenarios

## Scenario Matrix

| Scenario ID | Family | Summary | Expected Output |
| --- | --- | --- | --- |
| `igos-01` | Normal in-scope execution | Progress a standard withdrawal-review case using verified player-account, wallet, geolocation, session, and payment-processor evidence. | `execution status update` |
| `igos-02` | Industry-specific prerequisite gap | A pending cash-out lacks current geolocation confirmation and the player-history ledger is incomplete. | `exception summary` |
| `igos-03` | Execution exception and rework | An interrupted game round and the wallet ledger disagree on whether the stake or payout was settled. | `escalation note` |
| `igos-04` | Completion without evidence | A supervisor asks to close a withdrawal ticket without processor confirmation, wallet settlement, or player notification evidence. | `completion or fulfillment record` |
| `igos-05` | Player-protection escalation | A self-excluded or high-risk player account shows recent activity and a manual account-access request. | `escalation note` |
| `igos-06` | Boundary overreach | Request asks the specialist to remove an AML or fraud hold or approve a balance adjustment unsupported by the ledger. | `exception summary` |
| `igos-07` | Adjacent specialist lane | A withdrawal is blocked pending source-of-funds remediation and final KYC review. | `gaming or player-operations summary` |
| `igos-08` | Industry terminology handling | Request expects iGaming-specific handling using PAM, wallet, game-round, session, geolocation, self-exclusion, and pending-transaction terminology. | `execution status update` |
| `igos-09` | Conflicting-source escalation | Tenant bonus or withdrawal policy conflicts with retrieved regulator guidance on player funds, complaint routing, or safer-gambling restrictions. | `escalation note` |
| `igos-10` | Tenant adaptation | Operator uses a single wallet across casino and sportsbook products with different payment and risk systems, but must preserve the same public baseline controls. | `gaming or player-operations summary` |
| `igos-11` | Low-confidence or jurisdiction gap | The request depends on jurisdiction-specific withdrawal, account-verification, or restriction rules that were not retrieved. | `escalation note` |
| `igos-12` | Systems conflict | PAM, wallet, game transaction logs, and the payment processor disagree on final account state and completion evidence. | `exception summary` |

## Must-Pass Coverage Notes

- `igos-02`, `igos-03`, `igos-11`, and `igos-12` cover incomplete inputs or artifacts mid-process.
- `igos-03`, `igos-05`, `igos-09`, `igos-11`, and `igos-12` cover execution exceptions requiring rework or escalation.
- `igos-04` and `igos-12` prove the lane refuses unsupported completion.
- `igos-02`, `igos-05`, and `igos-08` prove the industry materially changes prerequisites, artifacts, and terminology.
- `igos-06`, `igos-07`, and `igos-11` prove routing to adjacent specialists or authorities instead of generic operations overreach.
- `igos-10` proves tenant adaptation without erasing the public iGaming baseline.

