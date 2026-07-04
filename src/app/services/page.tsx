'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllServices } from '@/lib/content';

export default function ServicesPage() {
  const services = getAllServices();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Direct Tax',
    'Audit & Assurance',
    'Indirect Tax / GST',
    'Corporate Law',
    'Advisory & Valuation'
  ];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => {
        if (selectedCategory === 'Direct Tax') return s.slug.includes('tax') || s.slug === 'nri-taxation';
        if (selectedCategory === 'Audit & Assurance') return s.slug.includes('audit');
        if (selectedCategory === 'Indirect Tax / GST') return s.slug === 'gst';
        if (selectedCategory === 'Corporate Law') return s.slug === 'company-law' || s.slug === 'msme-advisory';
        if (selectedCategory === 'Advisory & Valuation') return s.slug === 'startup-advisory' || s.slug === 'business-valuation' || s.slug === 'virtual-cfo';
        return true;
      });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Practice Directory
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Services & Practice Areas
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Comprehensive tax compliance, independent audit assurance, and specialized financial advisory supervised by Principal CA Puneet Gupta.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white dark:bg-blue-600'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white dark:bg-slate-900 p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                  {service.title.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="pt-2 space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {service.keyHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-block"
                >
                  View Full Scope of Work & Deliverables →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
