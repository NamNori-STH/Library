---
title: Conditional Access Policy: STH - Phishing Resistant MFA COPY
---

## Overview
- **ID**: `3aa22431-04e2-400d-8f0e-0ee7146fe865`
- **Display Name**: STH - Phishing Resistant MFA COPY
- **Description**: (None provided)
- **State**: Report-only (`enabledForReportingButNotEnforced`) — policy is active for logging/insights but does **not** block or enforce access.
- **Created**: 2026-02-18T15:57:48.7456506Z
- **Modified**: 2026-02-18T17:09:15.394397Z
- **Deleted**: No (null)
- **Template ID**: None (custom policy, not based on a built-in template)
- **Partial Enablement Strategy**: None

## Conditions

### Users
- **Included Users**: Specific users only (Object IDs)
  - `a9b39b94-d382-4fb6-a5bb-70adfda866d6` (likely your account or a test account)
  - `95796073-e924-4381-af8f-8fd512b3150e` (second targeted user)
- **Excluded Users**: None
- **Included Groups / Roles / Guests**: None
- **Excluded Groups / Roles / Guests**: None

### Cloud Apps / Actions
- **Included Applications**: All (`All`)
- **Excluded Applications**: None
- **Included User Actions**: None
- **Authentication Context References**: None
- **Application Filter**: None

### Client Apps
- **Client App Types**: All (`all`) — applies to browser, mobile/desktop clients, modern auth, legacy auth, etc.

### Locations
- **Included Locations**: All (`All`)
- **Excluded Locations**: All trusted locations (`AllTrusted`) — policy applies everywhere **except** trusted IPs/networks

### Other Conditions
- User Risk Levels: None (empty array)
- Sign-in Risk Levels: None (empty array)
- Platforms: None
- Times: None
- Device States: None
- Devices / Filter: None
- Client Applications / Agents: None

## Access Controls (Grant)

- **Operator**: `OR` (any one of the listed requirements satisfies the grant)
- **Built-in Controls**: None (empty)
- **Custom Authentication Factors**: None
- **Terms of Use**: None

### Authentication Strength (Required MFA Method)
This policy uses a **custom authentication strength** instead of legacy MFA controls.

- **Authentication Strength ID**: `10bb8ee4-f5e1-4ae0-801f-576b1275dc27`
- **Display Name**: STH-Phishing Resistant MFA
- **Description**: (None provided)
- **Policy Type**: Custom (tenant-defined)
- **Requirements Satisfied**: `mfa` (satisfies multifactor authentication claim)
- **Allowed Combinations**: 
  - `fido2` → Only **FIDO2 security keys** (hardware-based passkeys/security keys like YubiKey) are permitted as the phishing-resistant method.
- **Combination Configurations**: None (empty)

**Key Note**: This is a strict phishing-resistant MFA setup. In Microsoft Entra ID, the built-in "Phishing-resistant MFA strength" typically allows FIDO2, Windows Hello for Business, and certificate-based auth (multi-factor). Your custom version restricts it **only to FIDO2** (`fido2`), meaning software passkeys (e.g., in Microsoft Authenticator) or other methods like push notifications do **not** qualify. This explains previous login blocks if trying non-FIDO2 methods.

## Session Controls
- None defined (null) — no additional session restrictions like sign-in frequency, app-enforced restrictions, or continuous access evaluation customizations.

## Recommendations / Notes
- Since the policy is in **Report-only** mode, it logs what would happen without blocking sign-ins — ideal for testing before enforcing.
- Targets only two specific users (check Azure AD for who these Object IDs map to).
- Applies broadly (all apps, all client types, all locations except trusted ones).
- To make it less restrictive: Add more allowed combinations (e.g., `windowsHelloForBusiness`, `x509CertificateMultiFactor`) in the authentication strength policy, or exclude more users/groups.
- For full phishing-resistant enforcement later: Switch state to `enabled` after confirming users have registered FIDO2 hardware keys.
- Backup / Break-glass: Ensure at least one emergency account is excluded from this policy to avoid future lockouts.

## Raw JSON Export (for archival/reference)
```json
{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#identity/conditionalAccess/policies/$entity",
  "id": "3aa22431-04e2-400d-8f0e-0ee7146fe865",
  "templateId": null,
  "displayName": "STH - Phishing Resistant MFA COPY",
  "createdDateTime": "2026-02-18T15:57:48.7456506Z",
  "modifiedDateTime": "2026-02-18T17:09:15.394397Z",
  "state": "enabledForReportingButNotEnforced",
  "deletedDateTime": null,
  "partialEnablementStrategy": null,
  "sessionControls": null,
  "conditions": {
    "userRiskLevels": [],
    "signInRiskLevels": [],
    "clientAppTypes": [
      "all"
    ],
    "platforms": null,
    "times": null,
    "deviceStates": null,
    "devices": null,
    "clientApplications": null,
    "agents": null,
    "applications": {
      "includeApplications": [
        "All"
      ],
      "excludeApplications": [],
      "includeUserActions": [],
      "includeAuthenticationContextClassReferences": [],
      "applicationFilter": null
    },
    "users": {
      "includeUsers": [
        "a9b39b94-d382-4fb6-a5bb-70adfda866d6",
        "95796073-e924-4381-af8f-8fd512b3150e"
      ],
      "excludeUsers": [],
      "includeGroups": [],
      "excludeGroups": [],
      "includeRoles": [],
      "excludeRoles": [],
      "includeGuestsOrExternalUsers": null,
      "excludeGuestsOrExternalUsers": null
    },
    "locations": {
      "includeLocations": [
        "All"
      ],
      "excludeLocations": [
        "AllTrusted"
      ]
    }
  },
  "grantControls": {
    "operator": "OR",
    "builtInControls": [],
    "customAuthenticationFactors": [],
    "termsOfUse": [],
    "authenticationStrength@odata.context": "https://graph.microsoft.com/beta/$metadata#identity/conditionalAccess/policies('3aa22431-04e2-400d-8f0e-0ee7146fe865')/grantControls/authenticationStrength/$entity",
    "authenticationStrength": {
      "id": "10bb8ee4-f5e1-4ae0-801f-576b1275dc27",
      "createdDateTime": "2026-02-09T16:17:29.5279688Z",
      "modifiedDateTime": "2026-02-09T16:17:29.5279688Z",
      "displayName": "STH-Phishing Resistant MFA",
      "description": "",
      "policyType": "custom",
      "requirementsSatisfied": "mfa",
      "allowedCombinations": [
        "fido2"
      ],
      "combinationConfigurations@odata.context": "https://graph.microsoft.com/beta/$metadata#identity/conditionalAccess/policies('3aa22431-04e2-400d-8f0e-0ee7146fe865')/grantControls/authenticationStrength/combinationConfigurations",
      "combinationConfigurations": []
    }
  }
}