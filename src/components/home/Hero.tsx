import React from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
      {/* Background grid pattern & subtle glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            {/* ICAI Compliance Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Partnership Firm CA Practice • {siteConfig.registration}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Independent Financial Audit & Statutory Tax Advisory
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Led by <strong className="text-white">CA Puneet Gupta (FCA)</strong>, Anil Puneet and Associates delivers rigorous statutory audits, corporate tax compliance, GST filing, and business valuation tailored to regulatory standards.
            </p>

            {/* Key Value Pill Indicators */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                26+ Years Practice Experience
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Direct Senior Partner Oversight
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                ICAI Ethical Compliance
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white text-center transition-all shadow-lg shadow-blue-900/30"
              >
                Explore Practice Areas
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-lg font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 text-center transition-all border border-slate-700"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6">
              <div className="border-b border-slate-700 pb-5">
                <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Firm Leadership & Credentials
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  CA Puneet Gupta
                </h2>
                <p className="text-sm text-slate-300">
                  Senior Partner & Managing Chartered Accountant
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                  <span className="text-slate-400">ICAI Membership No:</span>
                  <span className="font-semibold text-slate-200">095435</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                  <span className="text-slate-400">Qualifications:</span>
                  <span className="font-semibold text-slate-200">B.Com, CA</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                  <span className="text-slate-400">Firm Reg. No (FRN):</span>
                  <span className="font-semibold text-slate-200">016890N</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Primary Jurisdiction:</span>
                  <span className="font-semibold text-slate-200">Panchkula, Haryana</span>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-4 text-xs text-slate-300 border border-slate-700/80 leading-relaxed">
                "We provide meticulous audit assurance, technical tax litigation support, and regulatory filings while upholding the Code of Ethics prescribed by ICAI."
              </div>

              <Link
                href="/about"
                className="block text-center text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
              >
                Read Senior Partner Profile & History →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
