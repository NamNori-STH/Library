---
title: Quantum Security
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange360, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Quantum Security (QTS)

**Subsidiary References:**  

- <a href="https://library.labxchange360.com/departments/compliance/standards/25-qts/" target="_blank" rel="noopener noreferrer">LabXChange360, LLC – Quantum Security Standard</a>  
- <a href="https://library.frhc.com/departments/information-security/standards/25-qts/" target="_blank" rel="noopener noreferrer">FrontRunnerHC, Inc. – Quantum Security Standard</a>  

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) recognizes that advances in quantum computing present an emerging and material threat to cryptographic protections that underpin the confidentiality, integrity, and availability of STH and subsidiary information systems and data. This policy establishes enterprise-wide requirements for governing quantum security risk, assessing cryptographic exposure, and gaining visibility into the current cryptographic landscape in preparation for a post-quantum cryptography (PQC) transition. Subsidiaries are responsible for implementing standards and practices aligned with these directives.

---

## 2. Applicability

This policy applies to all STH subsidiaries, employees, contractors, systems, applications, and services that rely on cryptographic protections for sensitive or regulated data, including electronic protected health information (ePHI) and personally identifiable information (PII). It applies regardless of hosting model, deployment platform, or data format.

---

## 3. Policy

### 3.1 Quantum Risk Governance

STH requires subsidiaries to establish an executive-sponsored quantum risk governance structure. A named quantum migration lead must be designated with defined authority to drive PQC transition activities. Quantum computing risk must be treated as a standing agenda item in Board of Directors and/or executive leadership meetings, ensuring it receives the same institutional attention as other enterprise risks.

- **SCF Mapping:** QTS-01 (*Quantum Risk Governance*)

---

### 3.2 Cryptographic Agility Risk Assessment (CARA)

Subsidiaries must perform a Cryptographic Agility Risk Assessment (CARA) to analyze technology assets, applications, services, and data (TAASD) for quantum-enabled cryptanalytic exposure. The CARA must identify TAASD most vulnerable to quantum threats and prioritize remediation based on potential business impact. Results of the CARA must inform the organization's PQC migration planning and investment decisions.

- **SCF Mapping:** QTS-02 (*Cryptographic Agility Risk Assessment (CARA)*)

---

### 3.3 Post-Quantum Cryptography (PQC) Discovery & Visibility

Subsidiaries must establish a formal discovery process to gain situational awareness of the organization's current cryptographic landscape. Discovery must use a combination of automated tooling and manual techniques to identify cryptographic dependencies across systems, applications, services, and data. Discovery activities must be performed periodically and whenever significant changes to the technology environment occur.

- **SCF Mapping:** QTS-04 (*Post-Quantum Cryptography (PQC) Discovery & Visibility*)

---

### 3.4 Cryptographic Asset Inventory

Subsidiaries must maintain a current inventory of cryptographic assets identified through the discovery process. At a minimum, the inventory must include:

- Algorithms in use (asymmetric and symmetric)
- Key lengths
- Cryptographic libraries
- Protocols
- Associated technology assets, applications, and/or services utilizing the cryptography
- FIPS validation status from the Cryptographic Module Validation Program (CMVP), including certificate number where applicable

The inventory must be reviewed and updated regularly to reflect changes to the technology environment and must serve as a primary input to CARA and PQC transition planning activities.

- **SCF Mapping:** QTS-04.1 (*Post-Quantum Cryptography (PQC) Asset Inventory*)

---

## 4. Compliance & Governance

- Subsidiaries must maintain evidence of quantum risk governance activities, CARA results, discovery outputs, and cryptographic asset inventories.
- STH will review subsidiary quantum security activities for alignment with enterprise requirements and PQC transition progress.
- Non-compliance must be remediated promptly, with escalations to executive leadership as needed.

---

## 5. Enforcement

Failure to comply with this policy may result in disciplinary action, suspension of access, termination of employment or contracts, or other corrective actions. STH reserves the right to require remediation of non-compliant cryptographic implementations.

---

## 6. References

- **Regulatory Requirements:**
  - HIPAA Security Rule: 45 CFR §164.308(a)(1)(ii)(A) (Risk Analysis), §164.308(a)(1)(ii)(B) (Risk Management)
  - AICPA SOC 2 Trust Services Criteria: Security (CC3.2, CC3.3, CC6.1)

- **Framework Alignment:**
  - QTS-01 – Quantum Risk Governance
  - QTS-02 – Cryptographic Agility Risk Assessment (CARA)
  - QTS-04 – Post-Quantum Cryptography (PQC) Discovery & Visibility
  - QTS-04.1 – Post-Quantum Cryptography (PQC) Asset Inventory

---

## 7. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ------------- | ------------ | -------- |
| - | Policy created | July 2026 | M Machin |
