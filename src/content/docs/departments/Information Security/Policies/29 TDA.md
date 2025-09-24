---
title: Technology Development & Acquisition
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Technology Development & Acquisition (TDA)

**Subsidiary References (planned):**

- LabXChange, LLC – Secure Development Lifecycle (SDLC) *(to be published)*  
- FrontRunnerHC, Inc – Secure Development Lifecycle (SDLC) *(to be published)*  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) requires that all technology development and acquisition activities incorporate security and compliance considerations from the outset. Secure technology practices help protect electronic protected health information (ePHI), financial data, intellectual property, and other sensitive business information.  

This policy establishes the **enterprise-wide requirements for secure technology development and acquisition**. Each subsidiary must maintain its own documented **Secure Development Lifecycle (SDLC)** aligned to this policy, tailored to its technology stack and business needs.  

---

## 2. Applicability

This policy applies to all systems, applications, platforms, and tools developed, configured, or acquired by Summit or its subsidiaries. It covers custom development, commercial off-the-shelf (COTS) software, SaaS/cloud services, and open-source components.  

---

## 3. Technology Development & Acquisition Program

STH will establish enterprise-wide requirements for secure technology development and acquisition. Subsidiaries must align their SDLCs to include security requirements in design, build, testing, and release. All acquisitions must undergo security due diligence before being placed into production.  

- **SCF Mapping:** TDA-01 (*Technology Development & Acquisition*)  

---

## 4. Secure Coding

All software development must follow secure coding practices. Subsidiaries must maintain written secure coding standards and provide secure coding training for developers at least annually. Peer reviews must verify that code meets security requirements, and any security-related defects must be tracked to closure.  

- **SCF Mapping:** TDA-06 (*Secure Coding*)  

---

## 5. Secure Development Environments

Subsidiaries must use secure and hardened development environments. Development tools and pipelines must enforce least-privilege access, multi-factor authentication (MFA), secure secrets management, and timely patching. Build provenance and logging must be preserved to maintain accountability.  

- **SCF Mapping:** TDA-07 (*Secure Development Environments*)  

---

## 6. Separation of Development, Testing, and Operational Environments

Development, test, and production environments must remain logically or physically separated. Access to production must be limited, logged, and subject to change management controls. CI/CD pipelines must enforce environment-specific approval gates.  

- **SCF Mapping:** TDA-08 (*Separation of Development, Testing and Operational Environments*)  

---

## 7. Use of Live Data

Production (“live”) data must not be used in development or testing environments unless explicitly approved via a documented exception. Exceptions must include business justification, minimization, masking or anonymization, encryption, access restrictions, retention controls, and disposal verification. Synthetic or anonymized data must be used by default.  

- **SCF Mapping:** TDA-10 (*Use of Live Data*)  

---

## 8. Subsidiary Responsibilities

- Maintain a documented SDLC aligned with Summit’s policy.  
- Train developers in secure coding and SDLC practices.  
- Implement automated security testing (e.g., static/dynamic analysis, composition analysis) in pipelines.  
- Ensure repositories, dependencies, and environments are securely managed.  
- Apply masking and anonymization when using live data under approved exceptions.  

---

## 9. Summit Oversight

Summit will:  
- Define minimum secure development and acquisition requirements.  
- Review subsidiary SDLCs annually for compliance.  
- Audit repositories, testing results, and exception approvals.  
- Require remediation of deficiencies within defined timelines.  

---

## 10. Compliance & Governance

- Subsidiaries must maintain evidence such as SDLC documentation, code review logs, security testing reports, and exception requests.  
- Summit’s Security and Compliance teams will perform regular oversight and audits.  
- Non-compliance will require remediation and may be escalated to executive management.  

---

## 11. Enforcement

Violations of this policy may result in disciplinary action, termination of employment, suspension of vendor contracts, or other legal remedies. Summit may revoke or restrict access to development environments that fail to meet policy requirements.  

---

## 12. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(A) (Risk Analysis), §164.308(a)(1)(ii)(B) (Risk Management)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.2, CC7.3, CC7.4), Processing Integrity (PI1.1, PI1.2)  

- **Framework Alignment:**  
  - TDA-01 – Technology Development & Acquisition  
  - TDA-06 – Secure Coding  
  - TDA-07 – Secure Development Environments  
  - TDA-08 – Separation of Development, Testing and Operational Environments  
  - TDA-10 – Use of Live Data  

---

## 13. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |
