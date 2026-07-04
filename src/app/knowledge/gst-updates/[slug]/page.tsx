import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllGSTUpdates, getGSTUpdateBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

interface GSTUpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const updates = getAllGSTUpdates();
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: GSTUpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getGSTUpdateBySlug(slug);

  if (!update) {
    return constructMetadata({
      title: 'GST Update Not Found',
      description: 'The requested GST update could not be found.',
    });
  }

  return constructMetadata({
    title: `${update.title} | GST Alert`,
    description: update.summary,
    path: `/knowledge/gst-updates/${update.slug}`,
  });
}

export default async function GSTUpdateDetailPage({ params }: GSTUpdatePageProps) {
  const { slug } = await params;
  const update = getGSTUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/knowledge" className="hover:text-blue-600">Knowledge Centre</Link>
          <span>/</span>
          <Link href="/knowledge/gst-updates" className="hover:text-blue-600">GST Updates</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{update.title}</span>
        </nav>

        {/* Article Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              {update.category}
            </span>
            <span className="text-slate-500 dark:text-slate-400">Date: {update.date}</span>
            {update.notificationNo && (
              <span className="text-slate-500 dark:text-slate-400">• Reference: {update.notificationNo}</span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {update.title}
          </h1>

          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
            <strong>Executive Summary:</strong> {update.summary}
          </div>

          <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-line pt-4 border-t border-slate-100 dark:border-slate-800">
            {update.content}
          </div>
        </div>

      </div>
    </div>
  );
}
