'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Service } from '@/lib/types';
import siteConfig from '@/lib/siteConfig';

export default function ServicePageTemplate({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb & Title */}
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
          </nav>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800 uppercase tracking-wider">
              Practicing Area • Supervised by CA Saatvik Gupta
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
              >
                Inquire For Engagement
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                Call {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Scope of Work Checklist */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Scope of Work & Statutory Services Included
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Detailed breakdown of compliance tasks executed by our practice team under principal supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.scopeOfWork.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Step Process */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Standard Execution Process
            </h2>
            <div className="space-y-4">
              {service.process.map((step) => (
                <div key={step.stepNumber} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Client Deliverables
            </h2>
            <div className="space-y-4">
              {service.deliverables.map((del, i) => (
                <div key={i} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1">
                  <div className="text-sm font-bold text-blue-300">
                    {del.title}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {del.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions — {service.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Statutory clarifications and compliance answers regarding this practice area.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex justify-between items-center gap-4 font-bold text-slate-900 dark:text-white text-sm"
                    >
                      <span>{faq.question}</span>
                      <span className="text-blue-600 font-extrabold">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
