import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'About Our Firm & Ethos | Anil Puneet and Associates',
  description: 'Learn about Anil Puneet and Associates, a Chartered Accountant Partnership Firm established in 2000 by CA Puneet Gupta. Operating under ICAI guidelines and statutory ethical standards.',
  path: '/about',
});

export default function AboutPage() {
  const p = siteConfig.principal;

  const timeline = [
    {
      year: '2012',
      title: 'Firm Establishment',
      description: 'Anil Puneet and Associates was established as a Chartered Accountancy Partnership Firm in Panchkula, securing ICAI Registration No. 016890N.'
    },
    {
      year: '2015',
      title: 'Practice Expansion & Corporate Taxation',
      description: 'Principal CA Puneet Gupta expanded the practice into comprehensive statutory audits, corporate tax litigation, and GST compliance.'
    },
    {
      year: '2017',
      title: 'GST Transition Leadership',
      description: 'Guided 150+ corporate entities through the statutory implementation of Goods and Services Tax (GST), establishing robust monthly reconciliation frameworks.'
    },
    {
      year: '2020',
      title: 'Digital Audit & Faceless Representation',
      description: 'Fully integrated cloud workpaper audit systems and faceless income tax scrutiny representation for corporate and high-net-worth assessees.'
    },
    {
      year: 'Present',
      title: 'Continued Practice Excellence',
      description: 'Managing end-to-end statutory audits, valuation reports under Rule 11UA, and corporate tax compliance across Haryana and pan-India clients.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Partnership Firm
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            About Anil Puneet and Associates
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Founded in {siteConfig.establishedYear}, Anil Puneet and Associates is built on three unyielding pillars: Integrity, Technical Precision, and Ethical Transparency.
          </p>
        </div>

        {/* Firm Overview Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Professional Practice Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Anil Puneet and Associates is a Partnership Firm Chartered Accountancy firm registered with The Institute of Chartered Accountants of India (ICAI Firm Registration No. 016890N). Headed by Principal CA Puneet Gupta (Membership No. 095435), the firm delivers statutory tax audit, corporate tax compliance, GST advisory, and business valuation services.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We maintain direct principal-led oversight over all audit files and tax computations. Unlike generalist accounting firms, our engagements are executed under standardized quality control frameworks in accordance with the Chartered Accountants Act, 1949 and relevant statutory rules.
            </p>
            
            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                • Partnership Firm
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                • ICAI FRN: 016890N
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                • ICAI Qualified
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                • 26+ Years Practice Track Record
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
            <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
              Principal Profile
            </span>
            <h3 className="text-2xl font-bold text-white">{p.name}</h3>
            <p className="text-xs text-blue-300 font-semibold">{p.designation} • {p.qualification}</p>
            <p className="text-xs text-slate-300 leading-relaxed">{p.bio}</p>
            
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p><strong>Membership:</strong> {p.membershipNo} (Member)</p>
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Firm Ethos & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide robust, transparent, and statutory audit assurance and tax planning that empowers businesses while ensuring 100% adherence to national tax laws and ICAI regulations.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Independence</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              We strictly maintain independence in mind and appearance across all statutory audit engagements, delivering objective assessments free from conflicts of interest.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">ICAI Code Compliance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Every client communication, public disclosure, and technical workpaper strictly adheres to the Code of Ethics issued by the Institute of Chartered Accountants of India.
            </p>
          </div>
        </div>

        {/* Firm History Timeline */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Firm Milestone Timeline
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              A decade-plus journey of continuous growth, compliance excellence, and professional practice.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0 text-right font-extrabold text-blue-700 dark:text-blue-400 text-lg">
                  {item.year}
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 flex-grow">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ICAI Compliance Disclosure Box */}
        <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 text-xs leading-relaxed space-y-2">
          <h4 className="font-bold text-amber-400 uppercase tracking-wide">
            Mandatory ICAI Website Guidelines Disclosure
          </h4>
          <p>{siteConfig.icaiDisclaimer}</p>
        </div>

      </div>
    </div>
  );
}
