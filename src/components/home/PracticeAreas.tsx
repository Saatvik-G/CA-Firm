import React from 'react';
import Link from 'next/link';
import { getAllServices } from '@/lib/content';

export default function PracticeAreas() {
  const services = getAllServices();

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
              Core Competencies
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Professional Practice Areas
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              End-to-end tax compliance, independent audit assurance, and business valuation services.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            View All 10 Practice Areas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.slug}
              className="bg-slate-50 dark:bg-slate-800/60 p-7 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                  {service.title.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {service.keyHighlights.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700/60">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                >
                  View Scope & Workflow →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
