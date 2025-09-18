---
title: Asset & Configuration Management
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Asset Management (AST), Configuration Management (CFG)

**Subsidiary References:**

- [LabXChange, LLC – Asset & Configuration Management Standard](https://library.labxchange.io/Information%20Security/Policies/AssetConfigurationManagement/)  
- [FrontRunnerHC, Inc – Asset & Configuration Management Standard](https://library.frhc.com/Information%20Security/Policies/15%20-%20AssetConfigurationManagement/)  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) centrally manages all enterprise assets and establishes secure configuration requirements across its subsidiaries. Effective asset and configuration management reduces risk by ensuring all systems are properly tracked, securely configured, and consistently maintained, thereby protecting sensitive data including electronic protected health information (ePHI).  

This policy establishes the **enterprise-wide requirements for asset and configuration management**. Subsidiaries are required to comply with this policy by following Summit’s processes for asset reporting and by implementing Summit-defined configuration baselines.  

---

## 2. Applicability

This policy applies to all hardware, software, cloud resources, virtual machines, databases, mobile devices, and network components owned, leased, or operated by Summit Technology Holdings or its subsidiaries. It also applies to third-party managed assets where Summit retains contractual responsibility for inventory or configuration security.  

---

## 3. Centralized Asset Inventory

Summit will maintain a centralized inventory of all assets used across the enterprise. The inventory must capture ownership, classification, location, and status for each asset. Subsidiaries are responsible for promptly notifying Summit of asset changes (procurement, reassignment, or retirement) so that the inventory remains accurate and complete.  

- **SCF Mapping:** AST-01 (*Asset Inventory*), AST-02 (*Asset Ownership*).  

---

## 4. Asset Classification & Labeling

Summit will define and maintain the enterprise-wide classification framework for assets, based on sensitivity, regulatory requirements, and business criticality. Assets must be classified according to this framework and labeled (or tagged) appropriately. Subsidiaries must ensure that all new assets they procure or operate are reported to Summit for classification.  

- **SCF Mapping:** AST-03 (*Asset Classification*), AST-04 (*Asset Labeling*).  

---

## 5. Asset Protection & Disposal

Summit is responsible for defining security requirements for asset protection and disposal. End-of-life assets must be sanitized or destroyed in compliance with NIST standards before disposal. Subsidiaries must coordinate with Summit to ensure proper sanitization, documentation, and certification of disposal for all decommissioned assets.  

- **SCF Mapping:** AST-09 (*Asset Protection*), AST-10 (*Asset Disposal*).  

---

## 6. Configuration Baselines

Summit will define secure configuration baselines for all operating systems, databases, applications, and network devices. These baselines will be based on recognized industry standards (e.g., CIS Benchmarks, DISA STIGs) and tailored to the enterprise environment. Subsidiaries must implement these baselines in their environments and may not weaken or override them.  

- **SCF Mapping:** CFG-01 (*Configuration Baselines*), CFG-02 (*Secure Configurations*).  

---

## 7. Configuration Management & Change Control

All configuration changes must follow documented change control processes defined by Summit, including risk assessment, approval, testing (where feasible), and rollback planning. Unauthorized or ad hoc changes are prohibited. Subsidiaries must submit change requests through Summit’s established change management process.  

- **SCF Mapping:** CFG-03 (*Configuration Change Control*), CFG-04 (*Emergency Change Control*).  

---

## 8. Configuration Monitoring & Hardening

Summit will centrally monitor configuration compliance using automated tools. Subsidiaries must support these monitoring efforts by remediating identified deviations within required timelines. All systems must be hardened to minimize attack surfaces, and unnecessary services, accounts, or protocols must be disabled.  

- **SCF Mapping:** CFG-05 (*Configuration Monitoring*), CFG-06 (*System Hardening*).  

---

## 9. Configuration Documentation & Reviews

Summit will maintain documented configuration standards and conduct reviews at least annually. Subsidiaries must adhere to these standards and provide feedback when business or operational changes require updates. Exceptions must be documented and approved by Summit.  

- **SCF Mapping:** CFG-07 (*Configuration Documentation & Review*).  

---

## 10. Compliance & Governance

- Summit will maintain evidence of asset inventories, classification reports, configuration baselines, and change records.  
- Subsidiaries must provide timely reporting and evidence to support Summit’s audits and compliance activities.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 11. Enforcement

Violations of this policy may result in disciplinary action, up to and including termination of employment, contract suspension, or legal action depending on severity. Summit Technology Holdings reserves the right to disconnect or quarantine assets that fail to meet security configuration standards.  

---

## 12. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.310(d)(1) (Device and Media Controls)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6.1, CC7.1, CC7.2), Availability (A1.2)  

- **Framework Alignment:**  
  - AST-01 – Asset Inventory  
  - AST-02 – Asset Ownership  
  - AST-03 – Asset Classification  
  - AST-04 – Asset Labeling  
  - AST-09 – Asset Protection  
  - AST-10 – Asset Disposal  
  - CFG-01 – Configuration Baselines  
  - CFG-02 – Secure Configurations  
  - CFG-03 – Configuration Change Control  
  - CFG-04 – Emergency Change Control  
  - CFG-05 – Configuration Monitoring  
  - CFG-06 – System Hardening  
  - CFG-07 – Configuration Documentation & Review  

---

## 13. Revision Tracking

| Rev | Description   | Date          | Approved |
| --- | ------------- | ------------- | -------- |
| -   | Policy created | September 2025 | M Machin |
