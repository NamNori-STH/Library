---
title: Identification & Authentication
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange360, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Identification & Authentication (IAC)

**Subsidiary References:**

- <a href="https://library.labxchange360.com/departments/compliance/standards/16-iac/" target="_blank" rel="noopener noreferrer">LabXChange360, LLC – Access Control Standard</a>  
- <a href="https://library.frhc.com/departments/information-security/standards/16-iac/" target="_blank" rel="noopener noreferrer">FrontRunnerHC, Inc – Access Control Standard</a>  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires that access to systems, applications, and data is strictly controlled, granted only to authorized individuals, and aligned with the principle of least privilege. Effective access control prevents unauthorized disclosure, alteration, or destruction of sensitive data, including electronic protected health information (ePHI).  

This policy establishes the **enterprise-wide access control requirements** for all STH subsidiaries. Each subsidiary must create **standards and procedures** aligned with this policy and tailored to their environments, but no subsidiary standard may weaken or contradict this directive.  

---

## 2. Applicability

This policy applies to all subsidiaries, systems, applications, endpoints, and infrastructure (cloud or on-premises) where sensitive or regulated data is processed, stored, or transmitted. It also applies to contractors, vendors, and other third parties with access to STH systems under Business Associate Agreements (BAAs) or contractual obligations.  

---

## 3. Policy

### 3.1 Identity & Access Management

STH will establish and maintain a formal Identity & Access Management (IAM) program to govern the identification, authentication, authorization, and lifecycle management of all user, service, and system accounts across the enterprise. The program defines the policies, standards, and procedures subsidiaries must implement to ensure that access to systems, applications, and data is granted only to authorized individuals and processes, consistent with the principle of least privilege.

- **SCF Mapping:** IAC-01 (*Identity & Access Management (IAM)*).

---

### 3.2 Identification & Authentication for Organizational Users

STH requires that all organizational users, and processes acting on behalf of users, be uniquely identified and centrally Authenticated, Authorized, and Audited (AAA) prior to being granted access to any system, application, or data. Centralized identity services (e.g., directory services, single sign-on) must serve as the authoritative source of identity across subsidiary environments to ensure consistent enforcement of authentication and access control requirements.

- **SCF Mapping:** IAC-02 (*Identification & Authentication for Organizational Users*).  

---

### 3.3 Multi-Factor Authentication (MFA)

Multi-Factor Authentication (MFA) is required for **all accounts**, without exception. This includes standard user accounts, privileged accounts, service accounts, and third-party accounts. MFA must be enforced at the identity provider level (e.g., SSO, directory services) and integrated into subsidiary systems to ensure consistent coverage. Authentication mechanisms must resist replay, brute-force, and phishing attacks.  

- **SCF Mapping:** IAC-06 (*Multi-Factor Authentication (MFA)*).  

---

### 3.4 User Provisioning & Deprovisioning

All user, service, and system accounts must be provisioned through a formal registration process requiring documented managerial approval prior to account creation. Accounts must be uniquely identifiable and limited to an authorized account type appropriate to their purpose (e.g., individual, group, system, service, application, guest, or temporary); prohibited account types must not be created. Accounts must be promptly de-provisioned when no longer required, and orphaned or inactive accounts must be identified and removed through automated or manual reviews.  

- **SCF Mapping:** IAC-07 (*User Provisioning & De-Provisioning*), IAC-15 (*Account Management*).  

---

### 3.5 Role-Based Access Control

Subsidiaries must implement role-based access control (RBAC) or attribute-based access control (ABAC) where feasible. Privileges must align with job responsibilities and be limited to the minimum necessary. Privileged access must be time-bound, tightly scoped, and subject to enhanced approval and monitoring. Documented exceptions to time-bound privileged access are permissible where operationally justified — such as emergency access accounts that must remain accessible when just-in-time activation mechanisms are themselves unavailable — provided that compensating controls are in place and the exception is formally risk-accepted and reviewed periodically.

- **SCF Mapping:** IAC-08 (*Role-Based Access Control (RBAC)*), IAC-21 (*Least Privilege*), IAC-29 (*Attribute-Based Access Control (ABAC)*).  

---

### 3.6 Authenticator Management

Each account must be assigned a unique identifier (e.g., username) that is not reused or reassigned to another individual, service, or system, and identifier naming standards must be documented and applied consistently across subsidiary environments. Authenticators must be securely managed throughout their lifecycle, and the strength of the required authentication mechanism must be commensurate with the classification of the data being accessed. Passwords must meet enterprise standards for complexity, length, and lifespan, and must not rely on vendor-supplied defaults or insecure recovery mechanisms. Systems must enforce automatic account lockout after a defined number of consecutive unsuccessful authentication attempts, consistent with 201 CMR 17.00 §17.04(1)(e).  

- **SCF Mapping:** IAC-09 (*Identifier Management (User Names)*), IAC-10 (*Authenticator Management*), IAC-10.1 (*Password-Based Authentication*), IAC-22 (*Account Lockout*).  

---

### 3.7 Privileged Account Management

Privileged accounts — including system, database, network, and cloud administrator accounts — must be identified, inventoried, and subject to controls beyond those applied to standard user accounts. Privileged access must be granted only to individuals whose job duties require it, scoped to the minimum necessary functions, and activated on a just-in-time basis where technically feasible. All privileged account activity must be logged and monitored for anomalous or unauthorized use, with alerts routed to designated security personnel.

Emergency access ("break-glass") accounts are governed as a distinct, formally documented category of privileged account for use only when normal privileged access mechanisms are unavailable. Break-glass accounts may be configured as shared accounts with permanent privileged assignments where operationally necessary, provided that a formal procedure documents the account's purpose, authorized custodians, and compensating controls, including dedicated monitoring, alerting, and mandatory post-use credential rotation.

- **SCF Mapping:** IAC-16 (*Privileged Account Management (PAM)*), IAC-15.9 (*Emergency Accounts*).  

---

### 3.8 Access Enforcement & Revocation

System access must be enforced according to defined authorizations and the principle of least privilege. Access rights must be revoked immediately upon employee termination, role change, or contract end. Automated processes should be used to ensure timely and complete deprovisioning of both logical and physical access.

- **SCF Mapping:** IAC-20 (*Access Enforcement*), IAC-20.6 (*Revocation of Access Authorizations*).  

---

### 3.9 Periodic Access Reviews

Managers must review user access rights at least quarterly to validate that access remains appropriate. Reviews must focus on high-risk accounts such as privileged, service, or shared accounts. Findings must be documented, and inappropriate access must be removed immediately.

- **SCF Mapping:** IAC-17 (*Periodic Review of Account Privileges*).  

---

### 3.10 Session Management

All user sessions must be actively controlled. Systems must enforce session timeouts after periods of inactivity, require reauthentication for sensitive transactions, and terminate sessions after maximum defined durations. Concurrent sessions must be restricted where possible.

- **SCF Mapping:** IAC-24 (*Session Lock*), IAC-25 (*Session Termination*).  

---

## 4. Compliance & Governance

- Subsidiaries must maintain evidence (e.g., access review attestations, MFA logs, provisioning/deprovisioning records) to demonstrate compliance with this policy.  
- Security and compliance functions must perform periodic audits of identity and access management practices.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 5. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to revoke access privileges at any time to protect its systems and data.  

---

## 6. References

**Regulatory Requirements:**  

- HIPAA Security Rule:
  - 45 CFR §164.308(a)(4) – Information Access Management
  - 45 CFR §164.312(a)(1) (Access Control)
  - 45 CFR §164.312(d) – Person or Entity Authentication
- AICPA SOC 2 Trust Services Criteria:
  - Security (CC6, CC7)
  - Confidentiality (C1)
- Massachusetts 201 CMR 17.00: §17.04(1)(e) – Reasonably Up-to-Date System Security Agent Software Including Account Lockout

**Framework Alignment:**

- IAC-01 – Identity & Access Management (IAM)
- IAC-02 – Identification & Authentication for Organizational Users
- IAC-06 – Multi-Factor Authentication (MFA)
- IAC-07 – User Provisioning & De-Provisioning
- IAC-08 – Role-Based Access Control (RBAC)
- IAC-09 – Identifier Management (User Names)
- IAC-10 – Authenticator Management
- IAC-10.1 – Password-Based Authentication
- IAC-15 – Account Management
- IAC-15.9 – Emergency Accounts
- IAC-16 - Privileged Account Management (PAM)
- IAC-17 – Periodic Review of Account Privileges
- IAC-20 – Access Enforcement
- IAC-20.6 – Revocation of Access Authorizations
- IAC-21 – Least Privilege
- IAC-22 – Account Lockout
- IAC-24 – Session Lock
- IAC-25 – Session Termination
- IAC-29 – Attribute-Based Access Control (ABAC)

---

## 7. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ------------- | ------------- | -------- |
| - | Policy created | September 2025 | M Machin |
| 1.0 | 3.1 and 3.3 updated to account for Break Glass account | March 2026 | M Machin |
| 1.1 | Added HIPAA §164.308(a)(4) and §164.312(a)(1) citations to References | April 2026 | M Machin |
| 1.2 | §3.2 updated to require automatic account lockout after consecutive failed authentication attempts; 201 CMR 17.00 citation added to References | April 2026 | M Machin |
| 2.0 | Updated and approved for 2026 | July 2026 | M Machin |

![Internal Use Only](../../../assets/DCH-Internal.jpg)
