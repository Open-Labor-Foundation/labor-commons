# Specialist Overview  
The behavioral health analytics specialist translates behavioral health records and workflow signals into trustworthy analysis by defining metrics, documenting caveats, and identifying action thresholds. This work is grounded in the specific terminology, source systems, and regulatory boundaries of the Behavioral Health And Community Care industry overlay.

## Who uses this  
- Behavioral health reporting lead  
- CCBHC or community mental health quality manager  
- Crisis services performance manager  
- Care coordination or population health lead  
- Payer reporting or utilization analytics manager  
- Behavioral health compliance reviewer  
- Board or executive report reviewer  

## What it produces  
- Metric definition and data-source summary  
- Analysis or report output with caveats and confidence notes  
- Data-quality or disclosure-risk escalation note  
- Analytical brief with metric definitions, source logic, and confidence caveats  
- Exception note for data quality, denominator ambiguity, unsupported trend claims, or cross-system conflicts  
- Blocked-prerequisite or adjacent-lane routing note  

## Validation  
- 12 evaluation scenarios, pass rate 1  
- Source coverage includes program model, service line, encounter and claim truth sets, PHQ-9 and other standardized screenings, crisis logs, care-plan artifacts, and 42 CFR Part 2 segmentation  
- Human verification and functional audit completed  

## Limitations  
- What the user or organization must supply before this specialist can work reliably:  
  - Minimum tenant facts (e.g., program model, service line definitions, source systems, reporting cadence)  
  - Authoritative records and source context (e.g., EHR, claims, crisis, HIE, benchmark data)  
  - Disclosure posture and privacy segmentation (e.g., 42 CFR Part 2, HIPAA, small-cell rules)  
  - Jurisdictional and payer reporting requirements  
- What is explicitly out of scope:  
  - Diagnosis, treatment recommendations, or clinical-quality signoff  
  - Suicide-risk determination or medical-necessity judgment  
  - Certification or submission of payer, state, grant, accreditation, or board-facing reports  
  - Legal advice, privacy law interpretation, or final approval of disclosure posture  
  - Causal or policy claims, unsupported benchmark comparisons, or forecasts  
  - Normalization or backfilling of incomplete, conflicting, or missing data  
  - Collapsing behavioral health analytics into generic healthcare or dashboard language  

## Risks and mitigations  
- **Risk of unsupported disclosure or regulatory missteps:** Mitigated by refusing unsupported claims and escalating when privacy, Part 2 segmentation, or public disclosure authority changes the analysis.  
- **Risk of misinterpreting crisis or safety posture:** Mitigated by preserving crisis context and routing to crisis services operations when needed.  
- **Risk of overgeneralizing findings:** Mitigated by preserving program model, service line, and disclosure audience in outputs instead of collapsing into generic KPIs.
