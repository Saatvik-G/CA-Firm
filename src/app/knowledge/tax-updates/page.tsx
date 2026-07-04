import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTaxUpdates } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Direct Tax Updates & CBDT Circulars | Anil Puneet and Associates',
  description: 'Recent Income Tax alerts, CBDT circular breakdowns, Section 197 Form 13 updates, and statutory tax amendments analyzed by Anil Puneet and Associates.',
  path: '/knowledge/tax-updates',
});

export default function TaxUpdatesPage() {
  const updates = getAllTaxUpdates();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase tracking-wider">
            Direct Tax Statutory Alerts
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Income Tax & CBDT Updates
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Timely statutory circulars, assessment procedure modifications, and tax rate notifications analyzed for corporate assessees.
          </p>
        </div>

        {/* Updates List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {updates.map((item) => (
            <div
              key={item.slug}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-center text-xs gap-2">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    {item.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">Date: {item.date}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  <Link href={`/knowledge/tax-updates/${item.slug}`} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {item.circularNo && (
                  <div className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                    Reference: {item.circularNo} • Effective: {item.effectiveDate}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div className="flex gap-2">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/knowledge/tax-updates/${item.slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400"
                >
                  Read Statutory Breakdown →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
