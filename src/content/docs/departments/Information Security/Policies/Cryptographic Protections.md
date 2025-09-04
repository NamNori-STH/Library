---
title: Cryptographic Protections
---


**Organization:** Summit Technology Holdings, LLC (STH)  
**Scope:** All subsidiaries and affiliates (e.g., FrontRunnerHC, Inc. and LabXChange, LLC)  
**Framework Reference:** Secure Controls Framework (SCF) – Cryptographic Protections (CRY)

**Subsidiary References:**

- [LabXChange, LLC - Cryptographic Protections Standard](https://library.labxchange.io/Information%20Security/Policies/CryptographicProtections/)
- [FrontRunnerHC, Inc - Cryptographic Protections Standard](https://library.frhc.com/Information%20Security/Policies/11%20-%20Cryptographic%20Protections/)

---

## 1. Purpose

Summit Technology Holdings, LLC (STH) is committed to protecting the confidentiality, integrity, and availability of sensitive data, including electronic protected health information (ePHI). Cryptographic protections are a critical safeguard against unauthorized disclosure, alteration, or destruction of sensitive data.  

This policy establishes the **enterprise-wide cryptographic requirements** for all STH subsidiaries. Each subsidiary is responsible for creating **standards and procedures** aligned with this policy, tailored to their technology environments, but no subsidiary standard may weaken or contradict this parent-level directive.  

---

## 2. Applicability

This policy applies to all subsidiaries, systems, applications, endpoints, cloud environments, and communication channels where sensitive or regulated data (including ePHI, financial data, and confidential business data) is stored, processed, or transmitted. It also applies to any third parties operating under Business Associate Agreements (BAAs) or other contractual obligations with STH subsidiaries.  

---

## 3. Cryptographic Standards

STH subsidiaries must adopt industry-accepted cryptographic mechanisms. At a minimum:

- **AES-256** must be used for data at rest.
- **TLS 1.2 or higher** must be used for data in transit.  
- Cryptographic modules must be **FIPS 140-2/3 validated** where available.  
- Deprecated algorithms (e.g., MD5, SHA-1, DES, RC4) are prohibited.  

Subsidiaries may implement stronger algorithms or newer versions (e.g., TLS 1.3), but may not fall below these baselines.  

- **SCF Mapping:** CRY-01 (*Use of Cryptographic Controls*), CRY-05 (*Encrypting Data at Rest*).  

---

## 4. Data in Transit Protections

All subsidiaries must ensure sensitive data is encrypted during transmission across internal networks, external connections, partner integrations, and corporate communications. Transmission controls must provide both **confidentiality** and **integrity assurance**.  

Examples include enforcing TLS for web services, securing VPN tunnels with strong IPsec, and configuring email solutions (e.g., Microsoft 365) with enforced TLS and message-level encryption for sensitive content.  

- **SCF Mapping:** CRY-03 (*Transmission Confidentiality*), CRY-04 (*Transmission Integrity*).  

---

## 5. Data at Rest Protections

All subsidiaries must encrypt sensitive data stored on servers, databases, storage volumes, file shares, and endpoint devices. Encryption must be applied at both the platform (e.g., full-disk encryption, storage-level encryption) and, where appropriate, at the application or database level.  

This requirement applies equally to on-premise datacenters and cloud-hosted environments (e.g., AWS, Azure, Microsoft 365).  

- **SCF Mapping:** CRY-05 (*Encrypting Data At Rest*).  

---

## 6. Administrative and Endpoint Protections

Administrative access to systems must be encrypted to prevent credential interception or unauthorized manipulation. Remote administration must use secure protocols such as SSH, RDP over TLS, or VPN with strong encryption. Legacy cleartext protocols (e.g., Telnet, FTP) are prohibited.  

Endpoints capable of storing or accessing sensitive data must employ full-disk encryption (e.g., BitLocker, FileVault, Linux dm-crypt) and mobile devices must be enrolled in a managed program that enforces encryption policies.  

- **SCF Mapping:** CRY-06 (*Non-Console Administrative Access*).  

---

## 7. Wireless Access

Subsidiaries must secure corporate wireless networks with strong authentication and encryption methods (e.g., WPA3-Enterprise with 802.1X/EAP-TLS). Guest networks must be logically segmented from corporate systems. Sensitive data may not be transmitted over unencrypted or open wireless networks without an additional secure channel (e.g., VPN).  

- **SCF Mapping:** CRY-07 (*Wireless Access Authentication & Encryption*).  

---

## 8. Public Key Infrastructure (PKI)

Subsidiaries must use PKI to issue and govern certificates for securing communications and validating identities. Certificates must be issued by reputable public Certificate Authorities (CAs) for external services or trusted internal CAs for internal services.  

Certificates must be monitored for expiration, revoked promptly if compromised, and renewed with sufficient lead time to prevent outages. Self-signed certificates may only be used in development/test environments and must not be deployed in production.  

- **SCF Mapping:** CRY-08 (*Public Key Infrastructure*).  

---

## 9. Key Management

Cryptographic key management must follow enterprise-approved practices, including:

- Secure key generation using trusted modules.
- Restricting access to keys using least-privilege principles.  
- Protecting keys against unauthorized disclosure or alteration.  
- Rotating keys at least annually or immediately upon compromise.  
- Retiring and securely destroying old or compromised keys.  

Subsidiaries may leverage cloud-native solutions (e.g., AWS KMS, Azure Key Vault, Microsoft 365 encryption services) or on-premise hardware security modules (HSMs), but must ensure that these solutions meet enterprise security standards.  

- **SCF Mapping:** CRY-09 (*Cryptographic Key Management*).  

---

## 10. Compliance & Governance

- Subsidiaries must maintain evidence (e.g., configuration screenshots, logs, key rotation reports, certificate inventories) to demonstrate compliance with this policy.  
- Security and compliance teams must perform regular reviews of encryption configurations and practices.  
- Non-compliance with this policy will result in remediation actions and may trigger escalation to executive management.  

---

## 11. References

- **Regulatory Requirements:**  
  - HIPAA Security Rule: 45 CFR §164.312(a)(2)(iv), §164.312(e)(1)  
  - AICPA SOC 2 Trust Services Criteria: Security (CC6, CC7), Confidentiality (C1)  

- **Framework Alignment:**  
  - SCF CRY-01 – Use of Cryptographic Controls  
  - SCF CRY-03 – Transmission Confidentiality  
  - SCF CRY-04 – Transmission Integrity  
  - SCF CRY-05 – Encrypting Data At Rest  
  - SCF CRY-06 – Non-Console Administrative Access  
  - SCF CRY-07 – Wireless Access Authentication & Encryption  
  - SCF CRY-08 – Public Key Infrastructure (PKI)  
  - SCF CRY-09 – Cryptographic Key Management  

---

## 12. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ----------- | ---- | -------- |
| - | Policy created | September 2025 | M Machin |
