import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Use | Anil Puneet and Associates',
  description: 'Terms of website use and engagement conditions for Anil Puneet and Associates, Chartered Accountants.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Terms & Conditions
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Terms of Website Use
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Informational Purpose</h2>
          <p>
            This website is maintained by Anil Puneet and Associates (Sole Proprietorship practice led by CA Puneet Gupta, Membership No. 059435, FRN 016890N) strictly in compliance with ICAI website guidelines. Content provided herein is for general educational and informational purposes only.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. No Solicitation or Advertisement</h2>
          <p>
            In accordance with Clause (1) of Part I of the First Schedule to the Chartered Accountants Act, 1949, this website does not constitute an advertisement, solicitation, invitation, or inducement to solicit professional work. Users seeking information about the firm do so of their own volition.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Professional Engagement Required</h2>
          <p>
            Accessing this website or submitting an online contact form does not create a Chartered Accountant-client relationship. Formal professional engagement occurs only upon execution of an engagement letter signed by Principal CA Puneet Gupta.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Intellectual Property</h2>
          <p>
            All original technical articles, publications, checklists, and website designs are the property of Anil Puneet and Associates. Unauthorized copying or redistribution without written attribution is prohibited.
          </p>
        </div>

      </div>
    </div>
  );
}
