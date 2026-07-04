import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts, getAllTaxUpdates, getAllGSTUpdates } from '@/lib/content';

export default function KnowledgePreview() {
  const blogs = getAllBlogPosts();
  const taxUpdates = getAllTaxUpdates();
  const gstUpdates = getAllGSTUpdates();

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
              Regulatory Insights
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Latest Technical Publications & Alerts
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Technical tax analysis, statutory circulars, and GST compliance updates authored by our practice team.
            </p>
          </div>
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            Visit Full Knowledge Centre →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Technical Blog Feature */}
          {blogs[0] && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {blogs[0].category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{blogs[0].date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  <Link href={`/knowledge/blog/${blogs[0].slug}`} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    {blogs[0].title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {blogs[0].excerpt}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 dark:text-slate-400">{blogs[0].readTime}</span>
                <Link
                  href={`/knowledge/blog/${blogs[0].slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400"
                >
                  Read Technical Article →
                </Link>
              </div>
            </div>
          )}

          {/* Tax Alert Feature */}
          {taxUpdates[0] && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    Direct Tax Alert
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{taxUpdates[0].date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  <Link href={`/knowledge/tax-updates/${taxUpdates[0].slug}`} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    {taxUpdates[0].title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {taxUpdates[0].summary}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">{taxUpdates[0].circularNo}</span>
                <Link
                  href={`/knowledge/tax-updates/${taxUpdates[0].slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400"
                >
                  Read Notification →
                </Link>
              </div>
            </div>
          )}

          {/* GST Alert Feature */}
          {gstUpdates[0] && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    GST Circular
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{gstUpdates[0].date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  <Link href={`/knowledge/gst-updates/${gstUpdates[0].slug}`} className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    {gstUpdates[0].title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {gstUpdates[0].summary}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{gstUpdates[0].notificationNo}</span>
                <Link
                  href={`/knowledge/gst-updates/${gstUpdates[0].slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400"
                >
                  Read GST Alert →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
