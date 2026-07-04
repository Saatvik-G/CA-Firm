import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | S.G. & Associates',
  description: 'Privacy policy and data protection standards followed by S.G. & Associates in accordance with ICAI confidentiality guidelines and statutory regulations.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Legal & Compliance
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last Updated: Financial Year 2024-25
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. ICAI Confidentiality Standards</h2>
          <p>
            S.G. & Associates is bound by the professional Code of Ethics issued by The Institute of Chartered Accountants of India (ICAI). Under Paragraph 1 of Part I of the First Schedule to the Chartered Accountants Act, 1949, client information, financial records, ledgers, tax documents, and personal details shared with the firm are maintained under strict professional confidentiality.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information Collection & Purpose</h2>
          <p>
            We collect personal and entity data strictly necessary for executing statutory audit, corporate tax filing, GST compliance, and advisory services requested by clients. Information submitted via contact forms (Name, Email, Phone, Message) is utilized solely to respond to inquiries and establish engagement parameters.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Non-Disclosure to Third Parties</h2>
          <p>
            Client data is never sold, leased, traded, or shared with commercial third parties. Data is disclosed only to statutory government portals (Income Tax E-filing portal, GST Portal, MCA Portal, RBI FIRMS Portal) as required under law for executing authorized client filings.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Data Security & Storage</h2>
          <p>
            Digital workpapers, tax computations, and client records are stored using encrypted cloud environments and access-controlled local infrastructure. Physical audit files are maintained under lock in compliance with ICAI record retention schedules.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Regarding Privacy</h2>
          <p>
            For any queries regarding data privacy, write to Principal CA Saatvik Gupta at <strong className="text-slate-900 dark:text-white">{siteConfig.contact.email}</strong>.
          </p>
        </div>

      </div>
    </div>
  );
}
