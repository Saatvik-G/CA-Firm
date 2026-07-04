import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'ICAI Disclaimer | Anil Puneet and Associates',
  description: 'Mandatory ICAI regulatory disclaimer for Anil Puneet and Associates, Chartered Accountants.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase tracking-wider">
            Mandatory Disclosure
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            ICAI Compliance Disclaimer
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 font-medium">
            {siteConfig.icaiDisclaimer}
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Detailed Compliance Notice</h2>
          <p>
            As per the guidelines issued by the Council of The Institute of Chartered Accountants of India (ICAI), Chartered Accountants in practice are permitted to publish information on their website subject to compliance with specified conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The website contains basic factual information regarding the firm, proprietor, qualification, and area of practice.</li>
            <li>No attempt is made to advertise services, claim superiority, or solicit professional assignments.</li>
            <li>All technical publications, circular summaries, and articles are intended for knowledge sharing and academic interest only.</li>
            <li>Visitors are advised to seek formal professional consultation before taking any business or tax decisions.</li>
          </ul>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            Proprietor: CA Puneet Gupta (FCA, DISA) • ICAI Mem #059435 • FRN 016890N
          </div>
        </div>

      </div>
    </div>
  );
}
