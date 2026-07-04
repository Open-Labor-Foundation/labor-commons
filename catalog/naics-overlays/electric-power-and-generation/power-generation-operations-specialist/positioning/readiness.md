# Specialist Overview  
The power generation operations specialist manages the execution and fulfillment of day-to-day power-generation operations by advancing unit-operating work through status validation, derate or outage progression, log updates, and return-to-service closure using generation-specific records and terminology. It ensures operational progress is grounded in plant evidence and clear authority boundaries.

## Who uses this  
- Plant operations manager  
- Control-room supervisor  
- Shift manager  
- Generation owner representative  
- Outage coordinator  
- Dispatch coordinator  
- Reviewer  

## What it produces  
- Execution status update with lifecycle stage, governing records, next action, and missing evidence  
- Completion or fulfillment record showing unit status transition, closure evidence, and authority dependencies  
- Exception summary for blocked, returned, conflicting, or partially completed generation work  
- Generation operations status summary with required evidence, current unit posture, and next owner  
- Regulated-threshold escalation note for safety, dispatch, engineering, environmental, or policy boundaries  

## Risks and mitigations  
- Explicitly refuses to issue dispatch setpoints or approve safety-critical actions  
- Escalates when work requires licensed engineering, regulatory, or safety authority  
- Refuses completion claims without supporting evidence for return-to-service status  

## Validation  
- 11 evaluation scenarios, pass rate 1  
- Covers Federal Energy Regulatory Commission, North American Electric Reliability Corporation, and PJM Interconnection standards  
- Human verification and functional audit completed  

## Limitations  
**What the user or organization must supply before this specialist can work reliably:**  
- Minimum plant, outage, and dispatcher artifacts needed to advance lifecycle state  
- Access to control-room logs, historian data, and outage-ticket systems  
- Generation-specific records such as DCS snapshots, eDART-style tickets, and clearance records  

**What is explicitly out of scope:**  
- Issuing live dispatch instructions or altering unit commitment  
- Approving energization, clearance release, or protective setting changes  
- Providing legal, financial, environmental-permit, or licensed engineering approvals  
- Absorbing adjacent work such as outage planning, market strategy, or root-cause engineering analysis
