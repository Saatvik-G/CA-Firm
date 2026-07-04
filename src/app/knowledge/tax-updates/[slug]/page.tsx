import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTaxUpdates, getTaxUpdateBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

interface TaxUpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const updates = getAllTaxUpdates();
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: TaxUpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getTaxUpdateBySlug(slug);

  if (!update) {
    return constructMetadata({
      title: 'Tax Update Not Found',
      description: 'The requested direct tax update could not be found.',
    });
  }

  return constructMetadata({
    title: `${update.title} | Direct Tax Alert`,
    description: update.summary,
    path: `/knowledge/tax-updates/${update.slug}`,
  });
}

export default async function TaxUpdateDetailPage({ params }: TaxUpdatePageProps) {
  const { slug } = await params;
  const update = getTaxUpdateBySlug(slug);

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
          <Link href="/knowledge/tax-updates" className="hover:text-blue-600">Tax Updates</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{update.title}</span>
        </nav>

        {/* Article Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              {update.category}
            </span>
            <span className="text-slate-500 dark:text-slate-400">Date: {update.date}</span>
            {update.circularNo && (
              <span className="text-slate-500 dark:text-slate-400">• Reference: {update.circularNo}</span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {update.title}
          </h1>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
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
