import React from 'react';
import Link from 'next/link';
import { getAllIndustries } from '@/lib/content';

export default function IndustryExpertise() {
  const industries = getAllIndustries();

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            Domain Focus
          </h2>
          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Industry Specialization
          </p>
          <p className="text-base text-slate-400">
            Tailored tax strategies, audit compliance, and accounting workflows aligned with industry-specific statutory regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-950 text-blue-300 border border-blue-800">
                  Sector Specialization
                </div>
                <h3 className="text-xl font-bold text-white">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {ind.shortDescription}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Key Sector Challenges Handled:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {ind.keyChallenges.slice(0, 2).map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">›</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Explore Industry Solutions & Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
