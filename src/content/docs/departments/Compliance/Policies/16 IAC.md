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

### 3.1 Account Management

All user, service, and system accounts must be uniquely identifiable, provisioned through documented approvals, and promptly deactivated when no longer required. Shared accounts are prohibited unless approved through formal exception with compensating controls. Emergency access accounts (commonly referred to as "break glass" accounts) are a recognized exception category: they may be configured as shared accounts with permanent privileged assignments where operationally necessary, provided that a formal procedure documents the account's purpose, access controls, authorized custodians, and compensating controls including comprehensive monitoring and alerting. Orphaned and inactive accounts must be detected and removed through automated or manual reviews.  

- **SCF Mapping:** IAC-01 (*Identity & Access Management (IAM)*), IAC-15 (*Account Management*), IAC-15.9 (*Emergency Accounts*).  

---

### 3.2 Authentication

Multi-Factor Authentication (MFA) is required for **all accounts**, without exception. This includes standard user accounts, privileged accounts, service accounts, and third-party accounts. MFA must be enforced at the identity provider level (e.g., SSO, directory services) and integrated into subsidiary systems to ensure consistent coverage.  

Passwords and authenticators must follow enterprise standards for complexity, expiration, and secure storage. Authentication mechanisms must resist replay, brute-force, and phishing attacks, and must not allow vendor-supplied defaults or insecure recovery mechanisms. Systems must enforce automatic account lockout after a defined number of consecutive unsuccessful authentication attempts, consistent with 201 CMR 17.00 §17.04(1)(e).  

- **SCF Mapping:** IAC-02 (*Identification & Authentication for Organizational Users*), IAC-02.2 (*Replay-Resistant Authentication*), IAC-06 (*Multi-Factor Authentication (MFA)*), IAC-09 (*Identifier Management (User Names)*), IAC-10 (*Authenticator Management*), IAC-10.1 (*Password-Based Authentication*).  

---

### 3.3 Role-Based & Attribute-Based Access Control

Subsidiaries must implement role-based access control (RBAC) or attribute-based access control (ABAC) where feasible. Privileges must align with job responsibilities and be limited to the minimum necessary. Privileged access must be time-bound, tightly scoped, and subject to enhanced approval and monitoring.  Documented exceptions to time-bound privileged access are permissible where operationally justified — such as emergency access accounts that must remain accessible when just-in-time activation mechanisms are themselves unavailable — provided that compensating controls are in place and the exception is formally risk-accepted and reviewed periodically.

- **SCF Mapping:** IAC-08 (*Role-Based Access Control (RBAC)*), IAC-21 (*Least Privilege*), IAC-29 (*Attribute-Based Access Control (ABAC)*).  

---

### 3.4 Access Enforcement & Revocation

System access must be enforced according to defined authorizations. Access rights must be revoked immediately upon employee termination, role change, or contract end. Automated processes should ensure timely deprovisioning.  

- **SCF Mapping:** IAC-20 (*Access Enforcement*), IAC-20.6 (*Revocation of Access Authorizations*).  

---

### 3.5 Periodic Access Reviews

Managers must review user access rights at least quarterly to validate that access remains appropriate. Reviews must focus on high-risk accounts such as privileged, service, or shared accounts. Findings must be documented, and inappropriate access must be removed immediately.  

- **SCF Mapping:** IAC-17 (*Periodic Review of Account Privileges*).  

---

### 3.6 Session Management

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

- **Regulatory Requirements:**
  - HIPAA Security Rule: 45 CFR §164.308(a)(4) (Information Access Management), §164.312(a)(1) (Access Control), §164.312(d) (Person or Entity Authentication)
  - Massachusetts 201 CMR 17.00: §17.04(1)(e) (Reasonably Up-to-Date System Security Agent Software Including Account Lockout)
  - AICPA SOC 2 Trust Services Criteria: Security (CC6, CC7), Confidentiality (C1)  

- **Framework Alignment:**
  - IAC-01 – Identity & Access Management (IAM)
  - IAC-02 – Identification & Authentication for Organizational Users
  - IAC-02.2 – Replay-Resistant Authentication
  - IAC-06 – Multi-Factor Authentication (MFA)
  - IAC-08 – Role-Based Access Control (RBAC)
  - IAC-09 – Identifier Management (User Names)
  - IAC-10 – Authenticator Management
  - IAC-10.1 – Password-Based Authentication
  - IAC-15 – Account Management
  - IAC-15.9 – Emergency Accounts
  - IAC-17 – Periodic Review of Account Privileges
  - IAC-20 – Access Enforcement
  - IAC-20.6 – Revocation of Access Authorizations
  - IAC-21 – Least Privilege
  - IAC-24 – Session Lock
  - IAC-25 – Session Termination
  - IAC-29 – Attribute-Based Access Control (ABAC)  

---

## 7. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ------------- | ------------- | -------- |
| - | Policy created | September 2025 | M Machin |
| 1 | 3.1 and 3.3 updated to account for Break Glass account | March 2026 | M Machin |
| 2 | Updated to SCF 2026.1; corrected IAC control numbers throughout | April 2026 | M Machin |
| 3 | Added HIPAA §164.308(a)(4) and §164.312(a)(1) citations to References | April 2026 | M Machin |
| 4 | §3.2 updated to require automatic account lockout after consecutive failed authentication attempts; 201 CMR 17.00 citation added to References | April 2026 | M Machin |
