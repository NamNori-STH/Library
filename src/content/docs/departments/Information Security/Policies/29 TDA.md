---
title: Technology Development & Acquisition
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Technology Development & Acquisition (TDA)

**Subsidiary References:**

- [LabXChange, LLC – Secure Development Lifecycle (SDLC)](https://library.labxchange.io/Information%20Security/Policies/SDLC/)  
- [FrontRunnerHC, Inc – Secure Development Lifecycle (SDLC)](https://library.frhc.com/Information%20Security/Policies/17%20-%20SDLC/)  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) is committed to ensuring that all technology developed, acquired, or implemented across the enterprise incorporates security and compliance considerations from the outset. Secure technology development and acquisition are critical to protecting electronic protected health information (ePHI), financial data, intellectual property, and other sensitive assets.  

This policy establishes the **enterprise-wide requirements for technology development and acquisition (TDA)**. Subsidiaries are required to implement and maintain **documented Secure Development Lifecycles (SDLCs)** tailored to their environments. Each subsidiary’s SDLC must align with this policy and may not weaken or contradict enterprise requirements.  

---

## 2. Applicability

This policy applies to all technology systems, applications, platforms, services, and tools that are developed, configured, or acquired by Summit or its subsidiaries. It includes custom-built applications, commercial off-the-shelf (COTS) software, cloud services, and open-source components.  

---

## 3. Secure Development Lifecycle (SDLC)

Each subsidiary must establish and follow an SDLC that integrates security and privacy requirements throughout the development process, from requirements gathering through design, development, testing, deployment, and maintenance. Subsidiary SDLCs must be documented and reviewed annually. Summit will provide oversight to ensure alignment with enterprise requirements.  

- **SCF Mapping:** TDA-01 (*Secure Development Lifecycle (SDLC)*)  

---

## 4. Code Repositories & Version Control

Subsidiaries must use secure, enterprise-approved version control and code repository systems for all software development. Access must be restricted to authorized users, with multi-factor authentication (MFA) enforced. All code must be versioned, with change history maintained for audit and accountability purposes.  

- **SCF Mapping:** TDA-06 (*Secure Code Repositories & Version Control*)  

---

## 5. Secure Coding Standards

All custom application development must follow secure coding standards aligned with industry best practices (e.g., OWASP, CERT). Subsidiaries must ensure that developers are trained in secure coding techniques and that code reviews include security-focused checks. Summit will validate that each subsidiary’s SDLC incorporates secure coding practices.  

- **SCF Mapping:** TDA-07 (*Secure Coding Standards*)  

---

## 6. Static & Dynamic Code Analysis

Subsidiaries must perform both static application security testing (SAST) and dynamic application security testing (DAST) as part of their SDLCs. Automated tools should be integrated into the development pipeline where feasible. Detected vulnerabilities must be remediated according to Summit’s enterprise vulnerability management timelines.  

- **SCF Mapping:** TDA-08 (*Static & Dynamic Code Analysis*)  

---

## 7. Third-Party Software Component Analysis

Subsidiaries must maintain visibility into third-party and open-source software components used in their applications. Software composition analysis (SCA) tools should be used to identify vulnerabilities in dependencies and libraries. Known vulnerable components must be patched, replaced, or mitigated in a timely manner.  

- **SCF Mapping:** TDA-10 (*Third-Party Software Component Analysis*)  

---

## 8. Subsidiary Responsibilities

- Develop and maintain a documented SDLC aligned with this policy.  
- Train developers and technical staff on secure coding practices and SDLC requirements.  
- Incorporate automated tools (e.g., SAST, DAST, SCA) into the development workflow.  
- Maintain secure repositories with access controls and audit logging.  
- Ensure that third-party software and libraries are actively monitored for vulnerabilities.  

---

## 9. Summit Oversight

Summit will:  

- Define enterprise minimum requirements for secure development and acquisition.  
- Review subsidiary SDLCs annually to ensure compliance with this policy.  
- Audit repositories, test results, and remediation evidence as part of enterprise security governance.  

---

## 10. Compliance & Governance

- Subsidiaries must maintain evidence of SDLC documentation, code review logs, static/dynamic analysis reports, and third-party component reviews.  
- Summit’s Security and Compliance teams will perform periodic audits of development and acquisition practices.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 11. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to revoke or restrict access to development environments that do not comply with this policy.  

---

## 12. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(A) (Risk Analysis), §164.308(a)(1)(ii)(B) (Risk Management)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC7.2, CC7.3, CC7.4), Processing Integrity (PI1.1, PI1.2)  

- **Framework Alignment:**  
  - TDA-01 – Secure Development Lifecycle (SDLC)  
  - TDA-06 – Secure Code Repositories & Version Control  
  - TDA-07 – Secure Coding Standards  
  - TDA-08 – Static & Dynamic Code Analysis  
  - TDA-10 – Third-Party Software Component Analysis  

---

## 13. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |
