import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllIndustries } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Industries Served & Sector Specialization | S.G. & Associates',
  description: 'Specialized Chartered Accountancy services tailored for technology startups, healthcare, manufacturing, real estate, export-import, and retail enterprise.',
  path: '/industries',
});

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Sector Expertise
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Tailored tax compliance, audit assurance, and financial architecture designed around sector-specific statutory frameworks.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 inline-block">
                  Industry Practice
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {ind.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ind.shortDescription}
                </p>

                <div className="pt-2 space-y-1.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Key Sector Focus:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {ind.keyChallenges.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-block"
                >
                  View Industry Solutions & Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
