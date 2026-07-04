import React from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function CTABanner() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-700 uppercase tracking-wider">
          Professional Consultation
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Require Independent Audit Assurance or Statutory Tax Advisory?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Get in touch with Principal CA Saatvik Gupta for corporate compliance reviews, tax planning, or audit engagements.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold bg-white text-blue-950 hover:bg-slate-100 transition-colors shadow-lg"
          >
            Schedule Consultation →
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="px-8 py-4 rounded-lg font-bold bg-blue-800 text-white hover:bg-blue-700 transition-colors border border-blue-600"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>

        <div className="pt-6 text-xs text-slate-400">
          Office: {siteConfig.contact.address} • Mon - Sat: 9:30 AM - 6:30 PM IST
        </div>
      </div>
    </section>
  );
}
