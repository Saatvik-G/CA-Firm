import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Careers & Articleship Vacancies | Anil Puneet and Associates',
  description: 'CA Articleship training vacancies for CA Intermediate cleared students and semi-qualified CA positions under Principal CA Puneet Gupta in Panchkula.',
  path: '/careers',
});

export default function CareersPage() {
  const vacancies = [
    {
      title: 'Article Assistant (CA Articleship Training)',
      eligibility: 'CA Intermediate Passed (Both Groups / Group 1 Cleared)',
      openings: '3 Openings',
      stipend: 'Statutory ICAI Prescribed Stipend Scale + Merit Bonus',
      exposure: [
        'Statutory Audit of Private Limited Companies & Firms',
        'Tax Audit preparation under Section 44AB and Form 3CD workpapers',
        'Monthly GST return drafting (GSTR-1, GSTR-3B) and GSTR-2B reconciliation',
        'Income Tax e-filing for corporates, trusts, and individuals',
        'MCA e-filings, SPICe+ incorporation, and secretarial registers'
      ]
    },
    {
      title: 'Semi-Qualified CA / Senior Accounts Executive',
      eligibility: 'B.Com / M.Com / Inter CA with 3+ years experience',
      openings: '1 Opening',
      stipend: 'Commensurate with qualification and audit experience',
      exposure: [
        'Supervising junior articles in client ledger audits',
        'Executing tax audit fieldwork under Principal supervision',
        'Drafting responses for e-assessment scrutiny notices under Section 143(2)',
        'Finalizing corporate balance sheets and notes to accounts'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase tracking-wider">
            Join Our Practice
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Articleship & Career Vacancies
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Build your professional foundation under direct supervisorial mentorship of Principal CA Puneet Gupta with hands-on exposure to audit and taxation.
          </p>
        </div>

        {/* Work Culture & Learning Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
              🎓
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Mentorship</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Every Article Assistant works directly with the Principal CA on audit workpapers, learning technical tax provisions and practical client handling.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
              📚
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Comprehensive Exposure</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Balanced rotation across Direct Tax litigation, Statutory Audits, GST Annual returns, Company Law compliance, and Valuation reports.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
              ⚖
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Exam Study Leave Support</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Structured study leave policies for CA Final examinations in accordance with ICAI articleship regulations.
            </p>
          </div>
        </div>

        {/* Current Vacancies Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Current Openings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacancies.map((v, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-3 py-1 rounded-full font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {v.openings}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">Panchkula Office</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {v.title}
                  </h3>

                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                    Eligibility: {v.eligibility}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Stipend/Package: {v.stipend}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Practical Learning & Work Exposure:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {v.exposure.map((exp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Application for ${encodeURIComponent(v.title)}`}
                    className="block w-full py-3 rounded-lg bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-center text-xs font-bold transition-colors"
                  >
                    ✉ Apply via Email ({siteConfig.contact.email})
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Application Email Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-4 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white">How to Apply for Articleship or Staff Positions</h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Interested candidates may email their updated Curriculum Vitae (CV), marksheets for Class X, XII, and CA Intermediate along with ICAI Registration details to <strong className="text-white">{siteConfig.contact.email}</strong>.
          </p>
          <div className="pt-2 text-xs text-slate-400">
            Office Address: {siteConfig.contact.address}
          </div>
        </div>

      </div>
    </div>
  );
}
