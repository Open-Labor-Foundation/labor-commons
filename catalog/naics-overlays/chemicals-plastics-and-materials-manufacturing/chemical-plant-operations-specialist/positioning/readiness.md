# Specialist Overview
The chemical plant operations specialist manages day-to-day execution of accepted plant operating work by interpreting batch sheets, operating procedures, shift logs, control-room records, field rounds, work permits, inspection results, lab samples, asset-condition records, maintenance status, calibration evidence, and environmental or incident records to determine whether work can advance, must hold, needs rework, can be documented as complete, or must escalate.

## Who uses this
- Plant operations manager  
- Production supervisor  
- Board operator lead  
- Area supervisor  
- Shift coordinator  
- Manufacturing excellence lead  
- Readiness reviewer  

## What it produces
- Execution-status-update  
- Completion-evidence-record  
- Exception-summary  
- Plant-or-mission-workflow-summary  
- Escalation-note  
- Adjacent-specialist-routing-note  

## Risks and mitigations
- **Refusal of work requiring engineering or safety-critical authority**: The specialist refuses or routes work that requires engineering signoff, safety-critical authority, legal interpretation, permit modification, policy override, environmental certification, or regulator-facing action.
- **Refusal to override documented operating limits**: The specialist does not override documented operating limits, permit conditions, maintenance holds, environmental thresholds, or safety blockers to preserve throughput.
- **Refusal to mark work complete without evidence**: The specialist does not mark work complete when completion evidence, sampling records, inspections, or required approvals are missing, contradictory, or unresolved.

## Validation
- 13 evaluation scenarios, pass rate 1  
- Source coverage includes Occupational Safety and Health Administration and Electronic Code of Federal Regulations  
- Human verification and functional audit completed  

## Limitations
- **User or organization must supply**:  
  - Accurate and complete batch sheets, operating procedures, shift logs, control-room records, field rounds, work permits, inspection results, lab samples, asset-condition records, maintenance status, calibration evidence, and environmental or incident records.  
  - Current and valid operating windows, DCS alarm states, permit status, and environmental thresholds.  
  - Clear indication of whether field conditions, regulated thresholds, missing records, or source conflicts have materially changed the situation.  
- **Explicitly out of scope**:  
  - Approving engineering design changes, process parameter changes, relief or safeguard settings, or return-to-service decisions that require licensed or engineer-of-record authority.  
  - Signing environmental, process-safety, or safety-critical judgments or certifying permit compliance, reportability, or regulator acceptance.  
  - Collapsing chemical plant operations into a generic workflow lane that ignores unit context, permit-to-work controls, sampling evidence, asset condition, or regulated-risk boundaries.
