import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getAllPublications, getAllTaxUpdates, getAllGSTUpdates } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Knowledge Centre & Technical Tax Hub | Anil Puneet and Associates',
  description: 'Technical tax articles, CBDT circular alerts, CBIC GST notifications, whitepapers, and webinar archives published by Anil Puneet and Associates.',
  path: '/knowledge',
});

export default function KnowledgeCentrePage() {
  const blogs = getAllBlogPosts();
  const publications = getAllPublications();
  const taxUpdates = getAllTaxUpdates();
  const gstUpdates = getAllGSTUpdates();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Repository & Advisory Hub
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Knowledge Centre
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Technical tax analysis, statutory circular breakdowns, and compliance handbooks prepared by Principal CA Puneet Gupta.
          </p>
        </div>

        {/* 4 Main Knowledge Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/knowledge/blog"
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-all group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
              ✍
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
              Technical Blog
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              In-depth commentary on tax planning, Section 115BAC, MSME 43B(h), and audit standards.
            </p>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block pt-2">
              Browse Articles ({blogs.length}) →
            </span>
          </Link>

          <Link
            href="/knowledge/publications"
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-all group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
              📄
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
              Publications & Manuals
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Downloadable whitepapers, Form 3CD audit manuals, and GSTR-9C reconciliation guides.
            </p>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block pt-2">
              View Whitepapers ({publications.length}) →
            </span>
          </Link>

          <Link
            href="/knowledge/tax-updates"
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-all group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
              ⚖
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
              Direct Tax Updates
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              CBDT circulars, income tax notification highlights, and TDS rate updates.
            </p>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block pt-2">
              View Tax Alerts ({taxUpdates.length}) →
            </span>
          </Link>

          <Link
            href="/knowledge/gst-updates"
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-all group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold">
              📊
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
              GST Updates & Alerts
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              CBIC notifications, E-Way bill rules, and GSTR-3B filing timeline alerts.
            </p>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block pt-2">
              View GST Circulars ({gstUpdates.length}) →
            </span>
          </Link>
        </div>

        {/* Featured Technical Article */}
        {blogs[0] && (
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-between items-center text-xs">
              <span className="px-3 py-1 rounded-full font-semibold bg-blue-900 text-blue-300 border border-blue-700 uppercase tracking-wider">
                Featured Knowledge Insight
              </span>
              <span className="text-slate-400">{blogs[0].date}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {blogs[0].title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {blogs[0].excerpt}
            </p>
            <div className="pt-2">
              <Link
                href={`/knowledge/blog/${blogs[0].slug}`}
                className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                Read Full Technical Analysis →
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
