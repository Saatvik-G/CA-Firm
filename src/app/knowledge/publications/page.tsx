import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPublications } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Publications & Technical Manuals | S.G. & Associates',
  description: 'Downloadable statutory guidance manuals, Form 3CD audit checklists, and GST annual reconciliation handbooks compiled by S.G. & Associates.',
  path: '/knowledge/publications',
});

export default function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase tracking-wider">
            Technical Resources
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Publications & Whitepapers
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Downloadable audit reference manuals, tax compliance workpaper templates, and regulatory whitepapers authored by our practice team.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500 transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {pub.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{pub.date}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {pub.title}
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.description}
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>File Format:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.fileFormat}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Document Size:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.fileSize}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Author:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{pub.author}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`mailto:contact@sgassociates.in?subject=Request PDF Publication: ${encodeURIComponent(pub.title)}`}
                  className="block w-full py-3 rounded-lg bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-center text-xs font-bold transition-colors shadow-sm"
                >
                  📥 Request PDF Resource Copy
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
