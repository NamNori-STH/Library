---
title: Break Glass Emergency Access Procedure
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Framework Reference:** Secure Controls Framework – Identification & Authentication (IAC)

---

## 1. Purpose

The purpose of this procedure is to define the configuration, management, and operational use of the break glass emergency administrative account for the Summit Technology Holdings Microsoft 365 and Entra ID tenant (summitth.com).

The break glass account exists exclusively for use when normal privileged access mechanisms are unavailable — including Identity Provider failures, Conditional Access misconfigurations, MFA system outages, or simultaneous lockout of all standard Global Administrators. It is not intended for routine administrative use under any circumstances.

---

## 2. Applicability

This procedure applies to:

- The break glass emergency account (`breakglass@summitth.com`) and all associated credentials and authenticators
- All three authorized custodians of the break glass account
- Any situation in which the break glass account is accessed, modified, or tested

This procedure applies to the following authorized custodians only:

| Custodian |
| --- |
| Marc Machin (<mmachin@summitth.com>) |
| John Donnelly (<jdonnelly@summitth.com>) |
| Kevin Cruz (<kcruz@summitth.com>) |

No other individuals are authorized to access, view credentials for, or use the break glass account under any circumstances.

---

## 3. Account Architecture & Configuration

### 3.1 Account Identity

| Attribute | Value |
| --- | --- |
| User Principal Name | <breakglass@summitth.com> |
| Display Name | Break Glass Emergency Admin |
| Account Type | Cloud-only (Azure Active Directory) |
| Source | Azure Active Directory (not synced) |
| Role | Global Administrator — permanent active assignment |
| License | Microsoft Entra ID P2 |
| Password Expiration | Never expires |
| SSPR | Excluded via dynamic group |
| Mailbox | None assigned |

### 3.2 Authentication

The break glass account is configured with FIDO2 security keys (YubiKey) as the sole authentication method. Password alone is insufficient to access the account — a registered YubiKey must be physically present.

| Key | Assigned To | Serial Number | Status |
| --- | --- | --- | --- |
| YubiKey-Marc-Primary | Marc Machin | [see BitWarden] | Active |
| YubiKey-Marc-Secondary | Marc Machin | [see BitWarden] | Active |
| YubiKey-John-Primary | John Donnelly | [see BitWarden] | Pending |
| YubiKey-John-Secondary | John Donnelly | [see BitWarden] | Pending |
| YubiKey-Kevin-Primary | Kevin Cruz | [see BitWarden] | Pending |
| YubiKey-Kevin-Secondary | Kevin Cruz | [see BitWarden] | Pending |

Each custodian retains their own YubiKey PIN privately. PINs are not shared and are not stored in BitWarden or any shared system. A primary key should be stored in a secure, accessible location (e.g., desk or office safe). A secondary key should be stored in a separate secure location (e.g., home safe or safety deposit box).

### 3.3 Credential Storage

The break glass account password is stored in the BitWarden organization vault for summitth.com in a collection named **Emergency** with access restricted exclusively to the three authorized custodians. No other BitWarden organization members or administrators have access to this collection.

As a physical backstop, each custodian should maintain the current password in a sealed, tamper-evident envelope stored in a secure location independent of their YubiKeys. Envelopes must be replaced whenever the password is rotated.

### 3.4 Privileged Identity Management

The break glass account holds a **permanent active** Global Administrator assignment and is intentionally excluded from PIM just-in-time controls. This is a documented exception to the standard PIM policy, which requires all other Global Administrators (Marc Machin, John Donnelly, Kevin Cruz) to activate Global Administrator via PIM on demand.

This exception is justified because PIM activation may itself be unavailable during the emergency scenarios that require break glass access.

---

## 4. Security Controls

### 4.1 Conditional Access

The break glass account is a member of the **BreakGlass** security group, which is excluded from all Conditional Access policies in the summitth.com tenant. This exclusion is necessary to ensure the account remains accessible when CA policies are the cause of an emergency lockout.

A dedicated CA policy (**STH - Break Glass FIDO2 Only**) enforces FIDO2 security key authentication for the break glass account specifically, using a custom Authentication Strength permitting only FIDO2 security keys. No other authentication method is permitted.

The BreakGlass group must contain only the break glass account. Any addition or removal of members from this group triggers an immediate High severity alert in Microsoft Sentinel and email notification to all three custodians.

### 4.2 Monitoring & Alerting

All activity related to the break glass account is monitored via Microsoft Sentinel (workspace: siem, resource group: rg-siem). The following Analytics Rules are active:

| Rule | Severity | Trigger |
| --- | --- | --- |
| Break Glass Account - Successful Sign-In | High | Any successful authentication |
| Break Glass Account - Failed Sign-In Attempt | Medium | Any failed authentication attempt |
| Break Glass - CA Exclusion Group Membership Changed | High | Any add/remove from BreakGlass group |
| Break Glass Account - Password Changed | High | Any password change or reset |
| Break Glass Account - Authentication Method Changed | High | Any FIDO2 key added or removed |
| Break Glass Account - Role Assignment Changed | High | Any role added or removed |
| PIM - Global Admin Activation Outside Business Hours | Medium | GA PIM activation outside 6am–8pm |

All alerts generate incidents in Sentinel and trigger email notification to all three custodians via the `playbook-breakglass-notify` Logic App automation.

Log retention is set to 365 days. The break glass account has no RBAC permissions on the Log Analytics workspace or Sentinel and cannot modify or delete logs.

---

## 5. Permitted Use Cases

The break glass account may only be used when **all** of the following conditions are true:

- Normal Global Administrator access is unavailable for at least one of the three custodians
- The cause of unavailability cannot be resolved through standard support channels within an acceptable timeframe
- Administrative action is required immediately to prevent business impact, data loss, or security incident escalation

Examples of permitted use cases include but are not limited to:

- All standard GA accounts are locked out due to a Conditional Access misconfiguration
- The MFA system is unavailable and administrative action cannot wait for restoration
- A federated authentication failure prevents all standard admin sign-ins
- A ransomware or security incident requires immediate administrative intervention

The break glass account must **never** be used for routine administrative tasks, convenience, or to bypass standard access controls.

---

## 6. Pre-Use Requirements

Before accessing the break glass account, the initiating custodian must:

1. Confirm that normal administrative access is genuinely unavailable and document the reason
2. Notify at least one other authorized custodian via phone or out-of-band communication before or immediately upon access — not after the session is complete
3. Open an incident or change ticket in the appropriate tracking system documenting:
   - Date and time of access
   - Initiating custodian name
   - Reason normal access is unavailable
   - Nature of the administrative action required
4. Retrieve the password from BitWarden using their individual account credentials and registered YubiKey

---

## 7. Access Procedure

### 7.1 Standard Break Glass Sign-In

1. Navigate to `https://portal.azure.com` or `https://entra.microsoft.com`
2. Enter `breakglass@summitth.com` as the username
3. Enter the password retrieved from BitWarden
4. When prompted for MFA, insert the YubiKey and touch the gold contact
5. Enter the YubiKey PIN when prompted
6. Confirm sign-in is successful and access to the required administrative function is available
7. Perform only the administrative actions required to resolve the incident — do not perform unrelated tasks
8. Sign out immediately upon completion — do not leave the session open

### 7.2 If Primary YubiKey Fails

1. Attempt authentication with the secondary YubiKey
2. If the secondary key also fails, contact one of the other two custodians — they can authenticate with their own registered keys
3. If no YubiKey is available, retrieve the sealed physical password envelope and contact Microsoft Support for account recovery assistance (see Section 9)

### 7.3 If BitWarden is Unavailable

1. Retrieve the sealed physical password envelope from your secure location
2. Proceed with YubiKey authentication as normal
3. After the session, replace the envelope once BitWarden is restored and password is confirmed current

---

## 8. Post-Use Requirements

Immediately following any break glass session, the initiating custodian must:

1. **Rotate the password** — generate a new 30+ character random password in BitWarden and update the vault entry
2. **Update the BitWarden Notes field** — record the new rotation date
3. **Replace physical password envelopes** — all three custodians must replace their sealed envelopes with the new password within 48 hours
4. **Update the Sentinel Watchlist** — record the date of use in the BreakGlassAssets watchlist
5. **Notify all three custodians** — confirm the session is complete, the password has been rotated, and new envelopes are required
6. **Update the incident ticket** — document all actions taken during the session, duration, and outcome
7. **Conduct a post-use review** — within 5 business days, all three custodians should briefly review whether use was legitimate, whether all controls functioned correctly, and whether any procedure improvements are needed

---

## 9. Emergency Escalation — Last Resort

If all YubiKeys are unavailable or lost and BitWarden is inaccessible, the following escalation path applies:

1. Contact Microsoft Support at `https://admin.microsoft.com` or by phone through the Microsoft 365 admin support line
2. Microsoft will initiate a tenant-level account recovery process requiring proof of domain ownership
3. Domain registrar credentials for summitth.com are stored separately from Entra ID — contact Marc Machin or John Donnelly directly for registrar access
4. Microsoft's recovery process may take 24–72 hours — plan accordingly and escalate to leadership immediately if this path is required

---

## 10. Periodic Maintenance & Testing

### 10.1 Bi-Annual Break Glass Test

The break glass procedure must be tested at minimum twice per year. Testing must simulate a realistic emergency scenario including:

- Confirming the password in BitWarden is current and retrievable
- Confirming at least one YubiKey per custodian authenticates successfully
- Confirming sign-in to the Azure/Entra portal succeeds without errors
- Confirming Sentinel alerts fire and email notifications are received by all three custodians
- Confirming the password rotation post-use procedure is followed after the test

Test results must be documented and retained.

### 10.2 Annual Review

On an annual basis, the following must be reviewed and confirmed:

- All three authorized custodians remain appropriate — update if personnel changes have occurred
- All six YubiKeys are physically present and functional
- BitWarden vault access is confirmed for all three custodians
- Sentinel Analytics Rules are active and functioning
- CA policy exclusions remain correctly configured
- Offboarding checklist is current and includes break glass procedures

### 10.3 Password Rotation

The break glass account password must be rotated:

- Immediately following any use (planned or emergency)
- Annually at minimum, even if unused
- Immediately if any custodian suspects the password may have been compromised or observed by an unauthorized individual

### 10.4 YubiKey Inventory Review

YubiKey serial numbers must be verified against the Sentinel Watchlist and BitWarden Notes quarterly. Any discrepancy must be investigated immediately.

---

## 11. Personnel Changes

If any authorized custodian leaves the organization or is removed from the break glass program:

1. Immediately deregister their YubiKeys from the break glass account authentication methods
2. Immediately revoke their BitWarden access to the Emergency collection
3. Rotate the break glass account password immediately
4. Replace all three physical password envelopes
5. Update the Sentinel Watchlist and BitWarden Notes to reflect the change
6. Document the change and obtain a replacement custodian if the total drops below three

These steps must be completed on the custodian's last day — not after. This must be included in the offboarding checklist for all three custodians.

---

## 12. Compliance & Governance

This procedure supports compliance with applicable regulatory, contractual, and enterprise security requirements. The break glass account configuration represents a documented and risk-accepted exception to standard least-privilege controls. The compensating controls defined in this procedure — FIDO2-only authentication, comprehensive monitoring, immediate alerting, and mandatory post-use rotation — are considered sufficient to mitigate the elevated risk of a permanent active Global Administrator account.

Exceptions documented in this procedure:

| Exception | Justification |
| --- | --- |
| Permanent active Global Administrator | PIM may be unavailable during emergency scenarios requiring break glass access |
| Conditional Access exclusion | CA policy failure is a primary break glass use case; exclusion ensures account remains accessible |
| Microsoft Secure Score impact | Intentional — documented exception, not an oversight |

---

## 13. Enforcement

All custodians and any individuals who interact with the break glass account or its credentials are required to comply with this procedure. Unauthorized access to the break glass account, its credentials, or its associated YubiKeys may result in disciplinary action up to and including termination and legal action.

---

## 14. References

**Parent Policy:**

- Summit Technology Holdings – Identification & Authentication Policy

**Regulatory Requirements:**

- HIPAA Security Rule: 45 CFR §164.312(a)(1); §164.312(a)(2)(ii); §164.312(b); §164.312(d)
- AICPA SOC 2 Trust Services Criteria: Security (CC6.1, CC6.2, CC6.3, CC6.6, CC6.7, CC7.2)

**Framework Alignment:**

- IAC-01 – Identity & Access Management (IAM)
- IAC-06 – Multi-Factor Authentication (MFA)
- IAC-10 – Authenticator Management
- IAC-10.5 – Protection of Authenticators
- IAC-10.7 – Hardware Token-Based Authentication
- IAC-15.9 – Emergency Accounts
- IAC-16 – Privileged Account Management (PAM)
- IAC-17 – Periodic Review of Account Privileges
- IAC-21 – Least Privilege
- IAC-21.4 – Auditing Use of Privileged Functions
- IAC-15.4 – Automated Audit Actions

---

## 15. Revision Tracking

| Rev | Description | Date | Approved |
| --- | --- | --- | --- |
| 1.0 | Procedure created | February 2026 | M Machin |

---

![Internal Use Only](../../../assets/DCH-Internal-blk.jpg)