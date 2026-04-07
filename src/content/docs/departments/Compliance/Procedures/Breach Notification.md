---
title: Breach Notification Procedure
---

**Organization:** Summit Technology Holdings, LLC (STH)  
**Framework Reference:** Secure Controls Framework – Incident Response (IRO)  

---

## 1. Purpose

This procedure establishes the enterprise-wide process for identifying, evaluating, and executing required notifications following a suspected or confirmed breach of unsecured Protected Health Information (PHI) or other regulated personal data. It applies to all Summit Technology Holdings subsidiaries and ensures consistent, legally compliant response across the enterprise.

This procedure implements Summit's obligations under the HIPAA Breach Notification Rule (45 CFR §§164.400–414) and applicable state breach notification statutes. Where state law imposes stricter requirements than HIPAA — including shorter notification timelines or additional notification recipients — those requirements govern for individuals residing in the applicable state.

---

## 2. Applicability

This procedure applies to all Summit Technology Holdings subsidiaries that create, receive, maintain, or transmit Protected Health Information (PHI) or electronic Protected Health Information (ePHI) — currently FrontRunnerHC, Inc. (FRHC) and LabXChange 360, LLC (LX). It applies to all employees, contractors, and Business Associates acting on behalf of these subsidiaries.

This procedure also governs STH's response to unauthorized access to **non-PHI personal information** — including Social Security numbers, financial account or payment card numbers, and other data elements defined as "personal information" under applicable state breach notification laws — held by FRHC or LX in connection with billing, enrollment, or other administrative functions. State breach notification laws apply to this data independently of HIPAA, and no regulatory safe harbor protects entities that fail to respond appropriately to non-PHI data breaches.

---

## 3. Procedure

### 3.1 Reporting a Suspected Breach

Any employee, contractor, or third party who suspects that a breach of PHI or regulated personal data has occurred must immediately report the incident to their direct supervisor and to the Information Security Officer (ISO) of their respective subsidiary. The subsidiary ISO will escalate to the STH Chief Information Officer (CIO) and Corporate Legal Counsel without delay.

Reports should include as much detail as possible: the nature of the suspected incident, data types potentially involved, systems or media affected, and the approximate timeline of events. The date STH or a subsidiary first becomes aware of a potential breach — or the date they would have become aware had they exercised reasonable diligence — constitutes the date of **discovery** and starts the applicable notification clock.

---

### 3.2 Breach Determination

Not every security incident involving PHI constitutes a reportable breach. Under HIPAA, a breach is presumed to have occurred whenever PHI is used or disclosed in a manner not permitted by the Privacy Rule — unless the covered entity or business associate can demonstrate a low probability that PHI has been compromised. That determination requires a documented risk assessment of at least the following four factors:

1. **Nature and extent of the PHI involved** — including the types of identifiers present (e.g., name, date of birth, Social Security number, diagnosis codes, treatment history) and the likelihood that the information could be re-identified.
2. **Identity of the unauthorized party** — whether the person who accessed or received the PHI is authorized to access other PHI and whether their role and intent suggest a reduced risk of misuse.
3. **Whether the PHI was actually acquired or viewed** — or whether only an opportunity for unauthorized access existed without evidence of actual access or acquisition.
4. **Extent to which risk has been mitigated** — such as recovery of the media, destruction of unauthorized copies, or legally enforceable assurances from the recipient that the data will not be further used or disclosed.

Corporate Legal Counsel, in coordination with the CIO and the affected subsidiary's ISO, will complete and document this four-factor assessment. If the assessment cannot establish a low probability of compromise, the incident must be treated as a reportable breach.

**Secured PHI safe harbor:** Breach notification is not required when PHI has been rendered unusable, unreadable, or indecipherable to unauthorized individuals. PHI is considered "secured" if it has been encrypted in accordance with NIST-approved standards (NIST SP 800-111 for data at rest; NIST SP 800-52 for data in transit), or if the media has been destroyed in accordance with NIST SP 800-88. Incidents involving only secured PHI are exempt from breach notification requirements.

---

### 3.3 Containment

Upon reasonable suspicion of a breach, the subsidiary ISO and applicable team will immediately take steps to limit the scope of the incident, which may include:

- Suspending the unauthorized access or activity.
- Revoking affected credentials or access rights.
- Isolating or taking offline affected systems.
- Recovering records or media where feasible.
- Preserving evidence in support of forensic investigation.
- Notifying law enforcement if criminal activity is suspected.

All containment activities must be coordinated with the STH CIO and Corporate Legal Counsel.

---

### 3.4 Notification Requirements

Notification requirements vary based on the number of individuals affected, their locations, and the nature of the breach. Corporate Legal Counsel is responsible for determining applicable notification obligations and drafting all required notifications. All notifications must be written in plain language. Where a breach affects individuals residing in states with notification requirements stricter than HIPAA — including shorter timelines or notification to state regulators — those requirements apply concurrently. Corporate Legal Counsel will consult Appendix A of this procedure to determine all applicable obligations at the time of each breach.

#### 3.4.1 Notification to Affected Individuals

Affected individuals must be notified without unreasonable delay. Under HIPAA, notification must occur no later than **60 calendar days** after the date of discovery. However, several states impose shorter deadlines that are not fully satisfied by HIPAA compliance alone and will govern for individuals residing in those states (see Appendix A — State Notification Matrix). **When a breach affects residents of one or more 30-day states, the 30-day deadline will in practice govern the timing of all individual notifications, as a single notice will typically be issued for all affected individuals simultaneously.** The 30-day states as of the date of this procedure are: California, Colorado, Delaware, Florida, Maine, New York, Texas, and Washington.

Notification may be delayed beyond the applicable deadline only at the written direction of law enforcement where notification would impede an active criminal investigation; any such delay must be documented.

Notification must be sent by first-class mail to the individual's last known address, or by email if the individual has previously agreed to electronic notices. If contact information is insufficient or out of date for 10 or more individuals, substitute notice is required and must be posted conspicuously on the organization's website for 90 days, or provided through major print or broadcast media in the geographic area where affected individuals reside.

Each notification to affected individuals must include at minimum:

- A brief description of what happened, including the approximate date of the breach and the date of discovery.
- The types of PHI involved (e.g., name, date of birth, Social Security number, diagnosis, treatment, financial account information).
- Steps individuals can take to protect themselves from potential harm.
- A description of the steps the organization is taking to investigate, mitigate harm, and prevent recurrence.
- Contact information (toll-free number, email address, mailing address, or website) for individuals to ask questions or obtain additional information.

#### 3.4.2 Notification to HHS

- **Breaches affecting 500 or more individuals:** HHS must be notified contemporaneously with notification to affected individuals, via the HHS breach reporting portal at [hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html).
- **Breaches affecting fewer than 500 individuals:** A log of all such breaches must be maintained and reported to HHS within **60 calendar days after the end of the calendar year** in which the breaches occurred.

#### 3.4.3 Media Notification

If a breach affects **500 or more individuals residing in a single state or jurisdiction**, a prominent media outlet serving that area must be notified contemporaneously with notification to affected individuals. Notification must be in the form of a press release. Corporate Legal Counsel will draft and coordinate all media communications.

#### 3.4.4 Business Associate Breaches

When a Business Associate discovers a breach, it must notify the relevant covered entity (FRHC or LX as applicable) without unreasonable delay and no later than 60 calendar days after discovery. STH, through its Third Party Management program, ensures all Business Associate Agreements include this obligation. The covered entity's 60-day clock to notify individuals and HHS begins when the Business Associate notifies the covered entity.

#### 3.4.5 State Attorney General and Consumer Reporting Agency Notifications

Several states require notification to the state Attorney General (AG) or a designated regulatory authority — either for all breaches, or when the number of affected state residents exceeds a specified threshold. Additionally, some states require notification to nationwide consumer reporting agencies (CRAs) when a threshold number of residents is affected. These obligations are independent of HIPAA and are not satisfied by notification to HHS.

Corporate Legal Counsel is responsible for identifying all applicable state AG and CRA notification requirements based on the states of residence of affected individuals. Appendix A of this procedure provides the current notification matrix for all 50 states. The following rules apply:

**States requiring AG notification for all breaches (regardless of size):** Arkansas, Colorado, Connecticut, Delaware, Indiana, Louisiana, Maine, Maryland, Massachusetts, Montana, New Hampshire, New Jersey, New Mexico, New York, North Carolina, Vermont, Virginia, and Washington currently require AG notification simultaneously with, or promptly following, notification to affected individuals. Corporate Legal Counsel must ensure these notifications are dispatched without delay whenever individuals in these states are affected. The specific AG filing method (online portal, written notice, or copy of individual notice) varies by state and must be confirmed at the time of each breach.

**States requiring AG notification at a threshold:**

| State | AG Notification Threshold | Timing |
| --- | --- | --- |
| California | 500+ CA residents | Within 15 days of individual notice |
| Florida | 500+ FL residents | Within 30 days of breach determination |
| Kansas | 1,000+ KS residents | Without unreasonable delay |
| North Dakota | 250+ ND residents | Without unreasonable delay |
| Ohio | 500+ OH residents | Without unreasonable delay |
| Oklahoma | 500+ OK residents | Within 60 days of individual notice |
| Oregon | 250+ OR residents | Without unreasonable delay |
| Pennsylvania | 500+ PA residents | Without unreasonable delay |
| Rhode Island | 500+ RI residents | Without unreasonable delay |
| South Dakota | 250+ SD residents | Without unreasonable delay |

**Consumer Reporting Agency (CRA) notification:** When a breach requires notification to 500 or more New York residents, or 1,000 or more Kansas residents, all nationwide consumer reporting agencies (Equifax, Experian, TransUnion) must be notified of the timing, distribution, and content of the individual notices. Notification to the CRAs must be made without unreasonable delay following the issuance of individual notices. Corporate Legal Counsel will draft and transmit CRA notifications as part of the breach response.

**New York — additional regulatory recipients:** Whenever any New York residents are affected by a reportable breach, notification must be made simultaneously to the New York Attorney General, the New York State Division of State Police, and the New York Department of Financial Services (DFS). A single filing may satisfy the AG notification requirement; the State Police and DFS must receive separate concurrent notice.

---

### 3.5 Law Enforcement and Regulatory Contacts

The following authorities may be contacted in the event of a breach involving criminal activity or as otherwise required:

| Authority | Contact |
| --- | --- |
| FBI Internet Crime Complaint Center (IC3) | [ic3.gov](https://www.ic3.gov) |
| US Cybersecurity and Infrastructure Security Agency (CISA) | [cisa.gov/report](https://www.cisa.gov/report) |
| HHS Office for Civil Rights — Breach Reporting | [hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting](https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html) |
| Applicable state Attorneys General | See §3.4.5 and Appendix A for state-specific AG notification requirements and thresholds |
| Nationwide Consumer Reporting Agencies (Equifax, Experian, TransUnion) | Required for NY (500+ residents) and KS (1,000+ residents); see §3.4.5 |
| New York Division of State Police | Required for all NY resident breaches, simultaneously with individual and AG notice |
| New York Department of Financial Services (DFS) | Required for all NY resident breaches, simultaneously with individual and AG notice |

---

### 3.6 Documentation and Records

All breach-related activities must be documented from initial discovery through final resolution and retained for a minimum of **six (6) years** from the date of creation or the date last in effect, as required by HIPAA.

Documentation must include at minimum:

- The four-factor breach risk assessment and its conclusion.
- A complete timeline of the incident from discovery through containment and resolution.
- Copies of all notifications issued to individuals, HHS, and media outlets.
- Records of all external communications, including dates, parties, and substance of discussions.
- Evidence gathered during the investigation, with chain of custody records where applicable.
- The final incident report, including root cause analysis and corrective action plan.

Breach documentation must be secured, with access restricted to authorized personnel only. Records are maintained in the STH compliance documentation system, or where applicable, the subsidiary's incident tracking system.

---

### 3.7 Prevention and Lessons Learned

Following resolution of each breach, Corporate Legal Counsel and the CIO — in coordination with the affected subsidiary's ISO — will conduct a post-incident review. The review will identify root causes, evaluate the adequacy of existing controls, and produce a corrective action plan with assigned owners and target completion dates. Findings must be incorporated into updated policies, procedures, and training programs as appropriate, and a summary of lessons learned must be reported to STH executive leadership.

---

## 4. Definitions

**Breach** — The acquisition, access, use, or disclosure of unsecured PHI in a manner not permitted by the HIPAA Privacy Rule, unless the covered entity or business associate demonstrates through a four-factor risk assessment that there is a low probability the PHI has been compromised.

**Unsecured PHI** — PHI that has not been rendered unusable, unreadable, or indecipherable to unauthorized persons through encryption or destruction per HHS guidance.

**Secured PHI** — PHI encrypted per NIST-approved standards or destroyed per NIST SP 800-88; not subject to breach notification requirements.

**Discovery** — The first day on which a breach is known, or by exercising reasonable diligence would have been known, to any workforce member or agent of the covered entity or business associate (other than the person committing the breach).

**Covered Entity** — A health plan, healthcare clearinghouse, or healthcare provider that transmits health information in electronic form. Within the Summit enterprise, FRHC and LX may operate as covered entities or business associates depending on the nature of the engagement.

**Business Associate (BA)** — A person or entity that creates, receives, maintains, or transmits PHI on behalf of a covered entity in the course of performing services for that entity.

**Personal Information (non-PHI)** — For purposes of state breach notification law compliance under §2 of this procedure, an individual's first name or first initial and last name in combination with one or more of the following unencrypted data elements: Social Security number; driver's license or state identification card number; financial account number, credit card number, or debit card number in combination with any security code or access credential. Some states additionally include medical information, health insurance information, or biometric data within this definition — Corporate Legal Counsel will assess applicability based on the data involved and the states of residence of affected individuals.

**Protected Health Information (PHI)** — Individually identifiable health information related to an individual's past, present, or future physical or mental health condition, provision of healthcare, or payment for healthcare — held or transmitted by a covered entity or business associate in any form or medium.

---

## 5. References

- **Regulatory Requirements:**
  - HIPAA Breach Notification Rule: 45 CFR §§164.400–414
  - HIPAA Privacy Rule: 45 CFR §§164.500–534
  - HIPAA Security Rule: 45 CFR §§164.302–318
  - Applicable state breach notification statutes — see Appendix A; key statutes include:
    - California Civil Code §1798.82 (30-day; AG notification for 500+; CMIA — Cal. Civ. Code §56 et seq.)
    - New York General Business Law §899-aa (30-day; AG/State Police/DFS notification for all breaches; CRA notification for 500+)
    - Colorado C.R.S. §6-1-716 (30-day; AG notification for all breaches)
    - Florida Stat. §501.171 (30-day; AG notification for 500+)
    - Texas Bus. & Com. Code §521.053 (30-day; AG notification for all breaches; Texas Medical Records Privacy Act, Health & Safety Code §181)
    - Washington RCW §19.255.010 (30-day; AG notification for all breaches; My Health My Data Act, RCW Ch. 19.373)
    - Kansas K.S.A. §§50-7a01–50-7a02 (expedient; AG and CRA notification for 1,000+)

- **Parent Policy:**
  - Summit Technology Holdings – Incident Response Policy (17 IRO)

- **Framework Alignment:**
  - IRO-02 – Incident Handling
  - IRO-02.4 – Incident Classification & Prioritization
  - IRO-04 – Incident Response Plan (IRP)
  - IRO-04.1 – Data Breach
  - IRO-10 – Incident Stakeholder Reporting
  - IRO-10.2 – Cyber Incident Reporting for Sensitive Data
  - IRO-13 – Root Cause Analysis (RCA) & Lessons Learned
  - IRO-14 – Regulatory & Law Enforcement Contacts

---

## 6. Revision Tracking

| Rev | Description | Date | Approved |
| --- | ----------- | ---- | -------- |
| 1.0 | Initial STH-level procedure | April 2026 | M Machin |
| 2.0 | Added state-specific notification requirements | April 2026 | M Machin |

---

## Appendix A — State Notification Matrix

This matrix provides a quick-reference summary of individual notification timelines, state AG/regulator notification requirements, and consumer reporting agency (CRA) notification obligations for all 50 states. It is intended for use by Corporate Legal Counsel during breach response to identify all applicable notification obligations.

**Notes:**

- "Expedient" = no specific statutory deadline; notification must occur in the most expedient time possible and without unreasonable delay.
- "HIPAA Safe Harbor" indicates whether the state expressly deems HIPAA-compliant entities to be in compliance with the state breach notification law. "Full" = covers the entire notification obligation (including timing). "Partial" = covers content requirements only; timeline and/or AG notification obligations may still apply independently.
- States marked with ⚠️ in the Risk column are High Risk: their requirements are not fully satisfied by HIPAA compliance and require independent action.
- This matrix reflects law as of April 2026. Corporate Legal Counsel must verify current requirements at the time of each breach. State laws change frequently.

| State | Individual Notice Deadline | HIPAA Safe Harbor | Medical/Health Data in PI Definition | AG Notification Required | AG Threshold | CRA Notification | Risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alabama | 45 days | Full (verify) | No | No | N/A | No | Medium |
| Alaska | Expedient | Full | No | No | N/A | No | Low |
| Arizona | 45 days | Full | No | Yes | 100,000+ residents | No | Medium |
| Arkansas | Expedient | Full | No | Yes | All breaches | No | Medium |
| **California** ⚠️ | **30 days** (eff. Jan 1, 2026) | Partial — content only | Yes — medical & health insurance info | Yes | 500+ residents (within 15 days of individual notice) | No | **High** |
| **Colorado** ⚠️ | **30 days** | Partial | No | Yes | All breaches (within 30 days) | No | **High** |
| Connecticut | 60 days | Full | No | Yes | All breaches (simultaneously) | No | Medium |
| **Delaware** ⚠️ | **30 days** | Partial — content only | Yes — personal health data | Yes | All breaches | No | **High** |
| **Florida** ⚠️ | **30 days** | Full (PHI); Partial (non-PHI PI) | No | Yes | 500+ residents (within 30 days) | No | **High** |
| Georgia | Expedient | Full | No | No | N/A | No | Low |
| Hawaii | Expedient | Full | No | No | N/A | No | Low |
| Idaho | Expedient | Full | No | No | N/A | No | Low |
| Illinois | Expedient | Full | Yes — health insurance info | No | N/A | No | Medium |
| Indiana | 45 days | Full (entity+data, IN SB 5) | No | Yes | All breaches | No | Medium |
| Iowa | Expedient | Full (entity+data, ICDPA) | No | No | N/A | No | Low |
| Kansas | Expedient | Full | No | Yes | 1,000+ residents | Yes — 1,000+ residents (nationwide CRAs) | Medium |
| Kentucky | Expedient | Full (entity+data, KCDPA) | No | No | N/A | No | Low |
| Louisiana | 60 days | Full | No | Yes | All breaches | No | Medium |
| **Maine** ⚠️ | **30 days** | Partial — content only | No | Yes | All breaches (simultaneously) | No | **High** |
| Maryland | Expedient | Full | No | Yes | All breaches (simultaneously) | No | Medium |
| Massachusetts | Expedient | Partial — security program | No | Yes | All breaches (with copy of notice) | No | Medium |
| Michigan | Expedient | Full | No | No | N/A | No | Low |
| Minnesota | Expedient | Full | No | No | N/A | No | Low |
| Mississippi | Expedient | Full | No | No | N/A | No | Low |
| Missouri | Expedient | Full | No | No | N/A | No | Low |
| Montana | 45 days | Full (verify timeline scope) | No | Yes | All breaches | No | Medium |
| Nebraska | Expedient | Full | No | No | N/A | No | Low |
| Nevada | 30 days | Full (cybersecurity safe harbor; verify) | No | No | N/A | No | Medium |
| New Hampshire | Expedient | Full | No | Yes | All breaches | No | Medium |
| New Jersey | 45 days | Full (verify timeline scope) | No | Yes | All breaches (simultaneously) | No | Medium |
| New Mexico | 45 days | Full (verify timeline scope) | No | Yes | All breaches (simultaneously) | No | Medium |
| **New York** ⚠️ | **30 days** (eff. Mar 21, 2025) | Partial — content only | Yes — medical & health insurance info (eff. Mar 2025) | Yes | All breaches — notify AG, Division of State Police, and DFS simultaneously | Yes — 500+ NY residents (nationwide CRAs) | **High** |
| North Carolina | Expedient | Full | No | Yes | All breaches (simultaneously) | No | Medium |
| North Dakota | Expedient | Full | No | Yes | 250+ residents | No | Medium |
| Ohio | 45 days | Full (Ohio Cybersecurity Safe Harbor Act) | No | Yes | 500+ residents | No | Medium |
| Oklahoma | 60 days | Full | No | Yes | 500+ residents (eff. Jan 1, 2026; within 60 days of individual notice) | No | Medium |
| Oregon | 45 days | Full (verify timeline scope) | Yes — health insurance info | Yes | 250+ residents | No | Medium |
| Pennsylvania | Expedient | Full | No | Yes | 500+ residents | No | Medium |
| Rhode Island | 45 days | Full (verify timeline scope) | Yes — healthcare info | Yes | 500+ residents | No | Medium |
| South Carolina | Expedient (max 90 days) | Full | No | No | N/A | No | Low |
| South Dakota | 60 days | Full (security program) | No | Yes | 250+ residents | No | Medium |
| Tennessee | 45 days | Full (entity+data, TIPA) | No | No | N/A | No | Medium |
| **Texas** ⚠️ | **30 days** | Full (entity-level, HIPAA BAs exempt from TDPSA); Texas HB300 imposes additional BA obligations | No (breach law); Yes (HB300 medical records law) | Yes | All breaches (within 30 days of individual notice) | No | **High** |
| Utah | Expedient | Full (entity+data, UCPA) | No | No | N/A | No | Low |
| Vermont | 45 days | Partial | No | Yes | All breaches (simultaneously) | No | Medium |
| Virginia | 60 days | Full | Yes — VA Health Records Privacy statute (§32.1-127.1:05) covers medical information separately | Yes | All breaches (simultaneously) | No | Medium |
| **Washington** ⚠️ | **30 days** | Partial — content only; My Health My Data Act (MHMDA) is a separate state law | No (general breach law) | Yes | All breaches (simultaneously) | No | **High** |
| West Virginia | 45 days | Full (verify timeline scope) | No | No | N/A | No | Medium |
| Wisconsin | 45 days | Full (HIPAA-compliant entities deemed in compliance) | No | No | N/A | No | Medium |
| Wyoming | Expedient | Full | No | No | N/A | No | Low |

**High Risk States Requiring Immediate Legal Counsel Review:** California, Colorado, Delaware, Florida, Maine, New York, Texas, Washington.

**States Where HIPAA Safe Harbor Scope Should Be Verified by Legal Counsel:** Alabama, Arizona, Montana, Nevada, New Jersey, New Mexico, Oregon, Rhode Island, Vermont, West Virginia, Wisconsin — these states have timelines shorter than 60 days but are believed to have full HIPAA safe harbors; confirmation should be obtained and documented.
