# Treasury and Cash Management Specialist - Deployment Package

## Overview

This package provides a complete specification for the Treasury and Cash Management Specialist role within the Capital Markets and Asset Management industry. It enables autonomous-engine to process this lane with market-ready quality while maintaining the ability to use `spec_only` mode until a trusted built package is explicitly promoted.

## Package Contents

- `manifest.yaml`: Core specifications and authoritative sources
- `evaluation/`: Evaluation artifacts including research, scenarios, functionality map, and results
- `readiness/`: Structured readiness evidence
- `marketing/`: Marketing readiness materials

## Deployment Instructions

1. **Prerequisites**:
   - Autonomous engine with spec-pack support
   - Access to specified authoritative sources
   - Required task and boundary metadata

2. **Installation**:

   ```bash
   # Install the package
   ae install catalog/naics-overlays/capital-markets-and-asset-management/treasury-and-cash-management-specialist
   ```

3. **Runtime Configuration**:
   - Default behavior uses `spec_only` mode
   - To enable trusted built package: set `runtime_mode: trusted_build`

## Rollback Procedures

In case of deployment issues:

1. Revert to previous version using version control
2. Disable the lane in configuration
3. Restore backup of previous deployment state

## Trusted Build Promotion

To promote this overlay to a trusted built package:

1. Verify all evaluation scenarios have passed
2. Confirm readiness evidence is complete and verified
3. Execute final validation tests
4. Update manifest status to `trusted-build`
5. Commit and tag the promoted package

## Compatibility Notes

- Compatible with all versions of autonomous-engine supporting spec-packs
- Requires access to specified authoritative sources
- Supports both `spec_only` and `trusted_build` runtime modes

## Security Considerations

- Ensure proper access controls to authoritative sources
- Validate all inputs to the autonomous engine
- Monitor for any changes to regulatory requirements
