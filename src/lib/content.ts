import type { Service, Industry, TeamMember, BlogPost, Publication, TaxUpdate, GSTUpdate, Webinar } from './types';

// Static JSON imports for Services
import incomeTax from '@/content/services/income-tax.json';
import gst from '@/content/services/gst.json';
import statutoryAudit from '@/content/services/statutory-audit.json';
import internalAudit from '@/content/services/internal-audit.json';
import companyLaw from '@/content/services/company-law.json';
import startupAdvisory from '@/content/services/startup-advisory.json';
import msmeAdvisory from '@/content/services/msme-advisory.json';
import virtualCfo from '@/content/services/virtual-cfo.json';
import businessValuation from '@/content/services/business-valuation.json';
import nriTaxation from '@/content/services/nri-taxation.json';

// Static JSON imports for Industries
import exportImport from '@/content/industries/export-import.json';
import healthcare from '@/content/industries/healthcare.json';
import manufacturing from '@/content/industries/manufacturing.json';
import realEstate from '@/content/industries/real-estate-construction.json';
import retailEcommerce from '@/content/industries/retail-e-commerce.json';
import technologyStartups from '@/content/industries/technology-startups.json';

// Static JSON import for Team
import teamData from '@/content/team.json';

const allServicesData: Service[] = [
  incomeTax as unknown as Service,
  gst as unknown as Service,
  statutoryAudit as unknown as Service,
  internalAudit as unknown as Service,
  companyLaw as unknown as Service,
  startupAdvisory as unknown as Service,
  msmeAdvisory as unknown as Service,
  virtualCfo as unknown as Service,
  businessValuation as unknown as Service,
  nriTaxation as unknown as Service,
];

const allIndustriesData: Industry[] = [
  exportImport as unknown as Industry,
  healthcare as unknown as Industry,
  manufacturing as unknown as Industry,
  realEstate as unknown as Industry,
  retailEcommerce as unknown as Industry,
  technologyStartups as unknown as Industry,
];

// Services
export function getAllServices(): Service[] {
  return allServicesData;
}

export function getServiceBySlug(slug: string): Service | null {
  return allServicesData.find((s) => s.slug === slug) || null;
}

// Industries
export function getAllIndustries(): Industry[] {
  return allIndustriesData;
}

export function getIndustryBySlug(slug: string): Industry | null {
  return allIndustriesData.find((i) => i.slug === slug) || null;
}

// Team
export function getTeamMembers(): TeamMember[] {
  return teamData as unknown as TeamMember[];
}

export function getPrincipalCA(): TeamMember | null {
  const members = getTeamMembers();
  return members.find((m) => m.isPrincipal) || members[0] || null;
}

// Blog Posts
export const mockBlogPosts: BlogPost[] = [
  {
    slug: 'understanding-new-tax-regime-fy25',
    title: 'Comprehensive Analysis of the New Tax Regime under Section 115BAC for FY 2024-25',
    date: '2024-11-15',
    author: 'CA Puneet Gupta',
    readTime: '7 min read',
    category: 'Direct Tax',
    excerpt: 'An in-depth technical analysis comparing the default New Tax Regime under Section 115BAC with the Old Tax Regime for Financial Year 2024-25 (Assessment Year 2025-26).',
    tags: ['Income Tax', 'Section 115BAC', 'FY 2024-25', 'Tax Planning', 'Direct Tax'],
    content: `
## Executive Overview

The Finance Act 2023 established the New Tax Regime under Section 115BAC of the Income Tax Act, 1961 as the **default tax regime** for individuals, Hindu Undivided Families (HUFs), Association of Persons (AOPs), and Body of Individuals (BOIs). For Financial Year 2024-25 (Assessment Year 2025-26), taxpayers must evaluate their income composition, permissible deductions, and long-term financial commitments before deciding whether to remain in the default regime or opt out to the Old Tax Regime.

## 1. Statutory Slab Structure under Section 115BAC

For FY 2024-25 (AY 2025-26), the revised slab structure under the default regime is as follows:

- **Up to ₹3,00,000**: Nil
- **₹3,00,001 to ₹6,00,000**: 5%
- **₹6,00,001 to ₹9,00,000**: 10%
- **₹9,00,001 to ₹12,00,000**: 15%
- **₹12,00,001 to ₹15,00,000**: 20%
- **Above ₹15,00,000**: 30%

Under Section 87A, resident individuals with total income up to **₹7,00,000** are eligible for a tax rebate of up to ₹25,000 under the New Tax Regime, resulting in **zero tax liability** for income up to ₹7,00,000.

## 2. Permissible vs. Disallowed Deductions

### Permissible Deductions in New Tax Regime
1. Standard Deduction on Salary: ₹50,000 (increased to ₹75,000 under Finance Act 2024 proposals for FY 24-25).
2. Employer's NPS Contribution: Deduction under Section 80CCD(2) up to 14% of salary for Government employees and 10-14% for private sector employees.
3. Transport Allowance for PwD: Special transport allowance for specially-abled employees.

### Disallowed Deductions
- Chapter VI-A deductions: Section 80C (PPF, ELSS, EPF, LIC), Section 80D (Health Insurance Premium), Section 80E (Education Loan Interest), Section 80G (Donations).
- House Rent Allowance (HRA) exemption under Section 10(13A).
- Leave Travel Concession (LTC) under Section 10(5).
- Interest on Self-Occupied Housing Loan under Section 24(b) up to ₹2,00,000.

## 3. Comparative Evaluation Framework

To determine the break-even threshold where the Old Tax Regime becomes more beneficial than the New Tax Regime, compare total deductions against concessional slab savings. For a salaried taxpayer earning ₹15,00,000, total tax liability under the New Tax Regime is approximately ₹1,40,400. For the Old Tax Regime to yield a lower tax liability, total eligible deductions must exceed ₹3,75,000.

## 4. Procedural Requirements for Opting Out (Form 10-IEA)

Taxpayers deriving income from **Business or Profession** are subject to strict opt-out rules:
- **Non-Business Taxpayers**: Can choose between Old and New regime annually at the time of filing ITR.
- **Business/Professional Income Taxpayers**: Must file **Form 10-IEA** prior to the due date under Section 139(1). Once an opt-out choice is exercised by a business entity, they are allowed to opt back into the New Tax Regime only once in their lifetime.

## Conclusion

The selection between tax regimes must be based on a quantitative calculation comparing actual deductions against concessional slab benefits. Consult your practicing Chartered Accountant for personalized assessment.
    `
  },
  {
    slug: 'msme-43bh-payment-compliance-guide',
    title: 'Section 43B(h) MSME Payment Mandate: Compliance Guidelines for Corporate & Non-Corporate Entities',
    date: '2024-10-20',
    author: 'CA Puneet Gupta',
    readTime: '6 min read',
    category: 'Corporate Tax',
    excerpt: 'Practical statutory implications of Section 43B(h) insertion, statutory timeline limits under the MSMED Act 2006, and mandatory year-end audit verification procedures.',
    tags: ['MSME', 'Section 43B(h)', 'Income Tax', 'Audit Compliance', 'Working Capital'],
    content: `
## Overview of Section 43B(h)

Inserted via the Finance Act 2023, Section 43B(h) disallows deductions for any sum payable to a registered **Micro or Small enterprise** beyond the time limit specified in Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006.

## Statutory Time Limits under MSMED Act, 2006

1. **Written Agreement Present**: Payment must be made within the agreed timeframe, which cannot exceed **45 days** from the date of acceptance or deemed acceptance of goods/services.
2. **No Written Agreement**: Payment must be made within **15 days** from the date of delivery.

## Audit Verification Framework for FY 2023-24 & FY 2024-25

During statutory and tax audits, practicing CAs verify vendor registration status on the Udyam Portal, categorize creditors into Micro, Small, and Medium entities, and review payment timelines.

- **Medium Enterprises Exempted**: Section 43B(h) applies strictly to Micro and Small enterprises. Traders are excluded from 43B(h) provisions as per CBDT clarifications.
- **Deduction Timing**: If payment is delayed past 45/15 days but cleared before March 31 of the financial year, the expense remains allowable in that financial year. If paid after March 31 in a subsequent year, it is deductible only in the year of actual payment.
    `
  },
  {
    slug: 'gstr-9-9c-reconciliation-best-practices',
    title: 'GSTR-9 & GSTR-9C Annual Return Filing: Audit Reconciliation & Common Pitfalls',
    date: '2024-09-05',
    author: 'CA Puneet Gupta',
    readTime: '8 min read',
    category: 'GST Advisory',
    excerpt: 'Detailed checklist for GST annual return preparation, Input Tax Credit (ITC) reconciliation with GSTR-2B, and turnover verification.',
    tags: ['GST', 'GSTR-9', 'GSTR-9C', 'Audit', 'Tax Compliance'],
    content: `
## Statutory Requirement for GSTR-9 and GSTR-9C

Under Section 44 of the CGST Act, 2017 read with Rule 80 of the CGST Rules, every registered person is required to furnish an Annual Return in Form GSTR-9. Registered entities with aggregate turnover exceeding ₹5 Crores in a financial year must also file self-certified reconciliation statement in Form GSTR-9C.

## Essential Reconciliation Steps

1. **Turnover Reconciliation**: Match total turnover reported in Audited Financial Statements with aggregate turnover declared in GSTR-1 and GSTR-3B.
2. **Input Tax Credit (ITC) Matching**: Reconcile ITC claimed in GSTR-3B against auto-populated GSTR-2B balances, accounting for ineligible ITC, reversed credit under Rules 38, 42, 43, and timing differences.
3. **Tax Payable vs. Paid**: Verify head-wise tax payments (IGST, CGST, SGST, Cess) made through electronic cash and credit ledgers.

## Important Audit Considerations

Ensure all debit/credit notes, price revisions, and tax rate adjustments for the financial year are reported within statutory cut-off dates. Taxpayers must resolve discrepancies prior to annual return filing to prevent audit notices.
    `
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return mockBlogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return mockBlogPosts.find((p) => p.slug === slug) || null;
}

// Publications
export const mockPublications: Publication[] = [
  {
    id: 'pub-1',
    slug: 'tax-audit-manual-fy24-25',
    title: 'Master Guidance Manual on Tax Audit under Section 44AB (AY 2025-26)',
    description: 'Comprehensive 45-page technical manual covering Form 3CA, 3CB, and clause-by-clause reporting guidelines for Form 3CD, including MSME 43B(h) disclosures.',
    date: '2024-10-01',
    author: 'CA Puneet Gupta',
    fileSize: '3.4 MB',
    fileFormat: 'PDF Document',
    downloadUrl: '#',
    category: 'Direct Tax',
    topics: ['Tax Audit', 'Form 3CD', 'Section 44AB', 'Clause Reporting', 'MSME']
  },
  {
    id: 'pub-2',
    slug: 'gst-annual-return-handbook',
    title: 'GSTR-9 & GSTR-9C Practical Compliance & Reconciliation Handbook',
    description: 'Step-by-step audit handbook containing reconciliation templates, table-by-table filing instructions, and common error mitigation techniques for GST annual filings.',
    date: '2024-08-15',
    author: 'CA Puneet Gupta',
    fileSize: '2.8 MB',
    fileFormat: 'PDF Document',
    downloadUrl: '#',
    category: 'Indirect Tax',
    topics: ['GST', 'GSTR-9', 'GSTR-9C', 'Reconciliation', 'Input Tax Credit']
  },
  {
    id: 'pub-3',
    slug: 'startup-valuation-fema-guide',
    title: 'Startup Valuation & FDI Compliance Framework under RBI & Income Tax Rules',
    description: 'Technical whitepaper explaining DCF valuation methods under Rule 11UA, Angel Tax compliance, Form FC-GPR filing, and ESOP structuring for technology ventures.',
    date: '2024-06-10',
    author: 'CA Puneet Gupta',
    fileSize: '4.1 MB',
    fileFormat: 'PDF Document',
    downloadUrl: '#',
    category: 'Valuation & Advisory',
    topics: ['Startup Valuation', 'FEMA Compliance', 'Rule 11UA', 'DCF Method', 'Angel Tax']
  }
];

export function getAllPublications(): Publication[] {
  return mockPublications;
}

export function getPublicationBySlug(slug: string): Publication | null {
  return mockPublications.find((p) => p.slug === slug) || null;
}

// Tax Updates
export const mockTaxUpdates: TaxUpdate[] = [
  {
    slug: 'cbdt-circular-tds-lower-deduction-guidelines',
    title: 'CBDT Issues Revised Guidelines for Form 13 Lower/Nil TDS Certificate Applications',
    date: '2024-11-10',
    category: 'Direct Tax Alert',
    circularNo: 'Circular No. 14/2024',
    effectiveDate: '2024-11-01',
    summary: 'Central Board of Direct Taxes (CBDT) streamlines processing timelines for Form 13 applications submitted by assessees seeking lower or nil TDS deduction under Section 197.',
    tags: ['TDS', 'Section 197', 'CBDT Circular', 'Form 13', 'Direct Tax'],
    content: `
The Central Board of Direct Taxes (CBDT) has issued Circular No. 14/2024 updating the procedure for receipt and disposal of applications for allotment of lower or nil rate TDS certificates under Section 197 of the Income Tax Act, 1961.

Key Takeaways:
1. Online Filing via TRACES Portal: Mandatory electronic processing through the TRACES portal with mandatory digital sign or EVC authentication.
2. Standardized Document Verification: Tax Officers must complete initial document verification within 15 working days of receipt.
3. Exemption Thresholds: Specific relaxations provided for newly incorporated start-ups registered under DPIIT with pending assessment years.
4. Validity Period: Clarifications regarding multi-year certificate validity for infrastructure entities and SEZ units.
    `
  },
  {
    slug: 'finance-act-2024-capital-gains-tax-restructuring',
    title: 'Key Amendments to Capital Gains Tax Framework under Finance Act 2024',
    date: '2024-07-24',
    category: 'Statutory Amendment',
    circularNo: 'Finance Act 2024',
    effectiveDate: '2024-07-23',
    summary: 'Overview of revised holding periods, standardized tax rates for Short-Term (14%/20%) and Long-Term (12.5%) capital gains, and indexation modifications.',
    tags: ['Capital Gains', 'LTCG', 'STCG', 'Finance Act 2024', 'Indexation'],
    content: `
The Finance Act 2024 introduced significant changes to the taxation of capital gains across financial and non-financial assets:

1. Standardized Holding Periods: Two statutory holding periods established—12 months for listed securities and 24 months for all other assets including unlisted equity and real estate.
2. Tax Rates:
   - STCG on equity shares/equity oriented funds under Section 111A increased to 20%.
   - LTCG on all financial and non-financial assets rationalized to 12.5% under Section 112 / 112A.
   - Annual LTCG exemption limit under Section 112A increased from ₹1,00,000 to ₹1,25,000.
3. Indexation Benefit: Indexation benefit removed for long-term capital asset transfers occurring on or after July 23, 2024, with specific grandfathering options for resident individuals acquiring property prior to July 23, 2024.
    `
  }
];

export function getAllTaxUpdates(): TaxUpdate[] {
  return mockTaxUpdates;
}

export function getTaxUpdateBySlug(slug: string): TaxUpdate | null {
  return mockTaxUpdates.find((t) => t.slug === slug) || null;
}

// GST Updates
export const mockGSTUpdates: GSTUpdate[] = [
  {
    slug: 'cbic-notification-e-way-bill-blocking-rules',
    title: 'CBIC Notifies Enhanced Validation Rules for E-Way Bill Generation & GSTR-3B Non-Filing',
    date: '2024-10-30',
    category: 'GST Notification',
    notificationNo: 'Notification No. 22/2024-Central Tax',
    effectiveDate: '2024-11-01',
    summary: 'Automatic blocking of E-Way Bill facility on EWB portal for taxpayers failing to file GSTR-3B for two consecutive tax periods.',
    tags: ['GST', 'E-Way Bill', 'GSTR-3B', 'CBIC Notification', 'Compliance'],
    content: `
The Central Board of Indirect Taxes and Customs (CBIC) has amended Rule 138E of the CGST Rules, 2017 regarding E-way bill generation blocking mechanism:

1. Automatic System Integration: E-Way Bill generation will be restricted automatically for any GSTIN if returns in Form GSTR-3B are not submitted for two consecutive monthly tax periods (or two quarters for QRMP taxpayers).
2. Unblocking Procedure: Taxpayers can unblock E-Way bill generation immediately upon filing pending GSTR-3B returns and updating status on the EWB portal.
3. Application for Unblocking to Jurisdictional Officer: Provision to submit Form GST EWB-05 in hardship cases where delay is due to genuine circumstances.
    `
  },
  {
    slug: 'gst-council-recommendations-section-128a-waiver',
    title: 'Implementation of Section 128A Amnesty Scheme for Demand Notices under Section 73',
    date: '2024-09-18',
    category: 'GST Advisory',
    notificationNo: 'Circular No. 238/32/2024-GST',
    effectiveDate: '2024-11-01',
    summary: 'Procedure for claiming waiver of interest and penalty under Section 128A for tax demand notices issued for FY 2017-18, 2018-19, and 2019-20.',
    tags: ['GST Amnesty', 'Section 128A', 'Interest Waiver', 'Penalty Relief', 'Demand Notice'],
    content: `
Pursuant to recommendations of the GST Council, the CBIC introduced detailed guidelines for claiming waiver of interest and penalty under newly inserted Section 128A of the CGST Act:

1. Eligible Period: Applies to tax demands pertaining to Financial Years 2017-18, 2018-19, and 2019-20 issued under Section 73 (non-fraud cases).
2. Requirement: Full payment of tax demanded must be cleared on or before March 31, 2025.
3. Waiver Scope: Upon full payment of tax component, 100% of interest and penalty levied in respect of the notice will be waived.
    `
  }
];

export function getAllGSTUpdates(): GSTUpdate[] {
  return mockGSTUpdates;
}

export function getGSTUpdateBySlug(slug: string): GSTUpdate | null {
  return mockGSTUpdates.find((g) => g.slug === slug) || null;
}

// Webinars
export const mockWebinars: Webinar[] = [
  {
    id: 'web-1',
    slug: 'tax-audit-ay25-26-compliance-masterclass',
    title: 'Masterclass: Preparing for Tax Audit AY 2025-26 & Section 43B(h) Documentation',
    description: 'Technical session led by Principal CA Puneet Gupta covering clause-by-clause Form 3CD compliance, MSME verification workpapers, and faceless assessment notice response strategy.',
    date: '2024-08-24',
    time: '11:00 AM - 01:00 PM IST',
    speaker: 'CA Puneet Gupta',
    speakerDesignation: 'Proprietor & Principal CA (FCA)',
    status: 'past',
    recordingUrl: '#',
    presentationDeckUrl: '#',
    keyTakeaways: [
      'Clause-by-clause Form 3CD verification methodology',
      'Creating audit trails for Section 43B(h) MSME creditor verification',
      'Drafting technical submissions for faceless income tax scrutiny notices'
    ]
  },
  {
    id: 'web-2',
    slug: 'gst-annual-reconciliation-fy24-workshop',
    title: 'Practical Workshop: GSTR-9 & GSTR-9C Filing & ITC Reconciliation',
    description: 'Interactive session covering multi-source ITC matching (GSTR-2B vs 3B), un-reconciled turnover adjustments, and drafting GSTR-9C qualification notes.',
    date: '2024-11-20',
    time: '03:00 PM - 05:00 PM IST',
    speaker: 'CA Puneet Gupta',
    speakerDesignation: 'Proprietor & Principal CA (FCA)',
    status: 'past',
    recordingUrl: '#',
    presentationDeckUrl: '#',
    keyTakeaways: [
      'Automated reconciliation techniques for GSTR-2B discrepancies',
      'Table-wise analysis of Form GSTR-9 & GSTR-9C',
      'Handling tax credit reversals under Rules 38, 42, and 43'
    ]
  },
  {
    id: 'web-3',
    slug: 'startup-valuation-fema-compliance-webinar',
    title: 'Upcoming Session: Startup Valuation, Angel Tax Rules & FEMA Compliance for Founders',
    description: 'An executive webinar for business founders, CFOs, and finance leads on DCF valuations, Section 56(2)(viib) rules, and FDI reporting via RBI FIRMS portal.',
    date: '2025-02-15',
    time: '04:00 PM - 05:30 PM IST',
    speaker: 'CA Puneet Gupta',
    speakerDesignation: 'Proprietor & Principal CA (FCA)',
    status: 'upcoming',
    registrationUrl: '/contact',
    keyTakeaways: [
      'Rule 11UA valuation parameters for equity & CCPS shares',
      'FEMA FC-GPR filing workflow on RBI FIRMS portal',
      'Structuring tax-efficient ESOP pools under Indian regulations'
    ]
  }
];

export function getAllWebinars(): Webinar[] {
  return mockWebinars;
}

export function getWebinarBySlug(slug: string): Webinar | null {
  return mockWebinars.find((w) => w.slug === slug) || null;
}

