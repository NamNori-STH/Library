---
title: Access Control
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Identification & Authentication (IAC)

**Subsidiary References:**

- [LabXChange, LLC – Access Control Standard](https://library.labxchange.io/Information%20Security/Policies/AccessControl/)  
- [FrontRunnerHC, Inc – Access Control Standard](https://library.frhc.com/Information%20Security/Policies/12%20-%20Access%20Control/)  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires that access to systems, applications, and data is strictly controlled, granted only to authorized individuals, and aligned with the principle of least privilege. Effective access control prevents unauthorized disclosure, alteration, or destruction of sensitive data, including electronic protected health information (ePHI).  

This policy establishes the **enterprise-wide access control requirements** for all STH subsidiaries. Each subsidiary must create **standards and procedures** aligned with this policy and tailored to their environments, but no subsidiary standard may weaken or contradict this directive.  

---

## 2. Applicability

This policy applies to all subsidiaries, systems, applications, endpoints, and infrastructure (cloud or on-premises) where sensitive or regulated data is processed, stored, or transmitted. It also applies to contractors, vendors, and other third parties with access to STH systems under Business Associate Agreements (BAAs) or contractual obligations.  

---

## 3. Account Management

All user, service, and system accounts must be uniquely identifiable, provisioned through documented approvals, and promptly deactivated when no longer required. Shared accounts are prohibited unless approved through formal exception with compensating controls. Orphaned and inactive accounts must be detected and removed through automated or manual reviews.  

- **SCF Mapping:** IAC-01 (*Identity & Access Management*), IAC-15 (*Automated Account Management*).  

---

## 4. Authentication

Multi-Factor Authentication (MFA) is required for **all accounts**, without exception. This includes standard user accounts, privileged accounts, service accounts, and third-party accounts. MFA must be enforced at the identity provider level (e.g., SSO, directory services) and integrated into subsidiary systems to ensure consistent coverage.  

Passwords and authenticators must follow enterprise standards for complexity, expiration, and secure storage. Authentication mechanisms must resist replay, brute-force, and phishing attacks, and must not allow vendor-supplied defaults or insecure recovery mechanisms.  

- **SCF Mapping:** IAC-02 (*Identification & Authentication for Users*), IAC-06 (*Multi-Factor Authentication*), IAC-07 (*Replay-Resistant Authentication*), IAC-09 (*Password Management*), IAC-10 (*Authenticator Management*), IAC-16 (*Password Complexity*).  

---

## 5. Role-Based & Attribute-Based Access Control

Subsidiaries must implement role-based access control (RBAC) or attribute-based access control (ABAC) where feasible. Privileges must align with job responsibilities and be limited to the minimum necessary. Privileged access must be time-bound, tightly scoped, and subject to enhanced approval and monitoring.  

- **SCF Mapping:** IAC-08 (*Role-Based Access Control*), IAC-28 (*Attribute-Based Access Control*), IAC-21 (*Least Privilege*).  

---

## 6. Access Enforcement & Revocation

System access must be enforced according to defined authorizations. Access rights must be revoked immediately upon employee termination, role change, or contract end. Automated processes should ensure timely deprovisioning.  

- **SCF Mapping:** IAC-20 (*Access Enforcement*), IAC-22 (*Revocation of Access*).  

---

## 7. Periodic Access Reviews

Managers must review user access rights at least quarterly to validate that access remains appropriate. Reviews must focus on high-risk accounts such as privileged, service, or shared accounts. Findings must be documented, and inappropriate access must be removed immediately.  

- **SCF Mapping:** IAC-17 (*Periodic Review of Account Privileges*).  

---

## 8. Session Management

All user sessions must be actively controlled. Systems must enforce session timeouts after periods of inactivity, require reauthentication for sensitive transactions, and terminate sessions after maximum defined durations. Concurrent sessions must be restricted where possible.  

- **SCF Mapping:** IAC-24 (*Session Lock*), IAC-25 (*Session Termination*).  

---

## 9. Compliance & Governance

- Subsidiaries must maintain evidence (e.g., access review attestations, MFA logs, provisioning/deprovisioning records) to demonstrate compliance with this policy.  
- Security and compliance functions must perform periodic audits of identity and access management practices.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 10. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to revoke access privileges at any time to protect its systems and data.  

---

## 11. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.312(d) (Person or Entity Authentication)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6, CC7), Confidentiality (C1)  

- **Framework Alignment:**  
  - IAC-01 – Identity & Access Management  
  - IAC-02 – Identification & Authentication for Users  
  - IAC-06 – Multi-Factor Authentication  
  - IAC-07 – Replay-Resistant Authentication  
  - IAC-08 – Role-Based Access Control (RBAC)  
  - IAC-09 – Password Management  
  - IAC-10 – Authenticator Management  
  - IAC-15 – Automated Account Management  
  - IAC-16 – Password Complexity  
  - IAC-17 – Periodic Review of Account Privileges  
  - IAC-20 – Access Enforcement  
  - IAC-21 – Least Privilege  
  - IAC-22 – Revocation of Access  
  - IAC-24 – Session Lock  
  - IAC-25 – Session Termination  
  - IAC-28 – Attribute-Based Access Control (ABAC)  

---

## 12. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |
