import React from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
      {/* Background grid pattern & subtle glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* ICAI Compliance Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-semibold uppercase tracking-wider mx-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Partnership Firm CA Practice • {siteConfig.registration}
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Independent Financial Audit & Statutory Tax Advisory
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
          Led by <strong className="text-white">CA Puneet Gupta</strong>, Anil Puneet and Associates delivers rigorous statutory audits, corporate tax compliance, GST filing, and business valuation tailored to regulatory standards.
        </p>

        {/* Key Value Pill Indicators */}
        <div className="pt-2 flex flex-wrap justify-center gap-y-3 gap-x-8 text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            26+ Years Practice Standing (Est. 2000)
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
            ICAI Ethical Code Compliance
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-4 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white text-center transition-all shadow-lg shadow-blue-900/40 text-base"
          >
            Explore Practice Areas
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 text-center transition-all border border-slate-700 text-base"
          >
            Schedule Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
