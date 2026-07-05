import React from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function PrincipalProfile() {
  const p = siteConfig.principal;

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Principal Credentials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-3xl shadow-lg border-2 border-blue-400">
                SG
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-400">
                  Proprietor & Practice Lead
                </span>
                <h2 className="text-3xl font-black text-white mt-1">
                  {p.name}
                </h2>
                <p className="text-sm font-semibold text-slate-300">
                  {p.qualification}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">ICAI Membership No:</span>
                  <span className="font-semibold text-white">{p.membershipNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Firm Registration No:</span>
                  <span className="font-semibold text-white">016890N</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Post-Qualification Cert:</span>
                  <span className="font-semibold text-white">Chartered Accountant</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Practice Experience:</span>
                  <span className="font-semibold text-white">{p.experience}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/team"
                  className="inline-block px-5 py-2.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  View Full Principal Bio & Team Structure →
                </Link>
              </div>
            </div>

            {/* Right Column: Message & Expertise */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-800 lg:pl-10">
              <h3 className="text-xl font-bold text-white">
                "Direct Engagement, Zero Delegation of Assurance Quality"
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {p.bio}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                  Core Specializations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 font-medium text-slate-200">
                    • Corporate Income Tax Litigation & Scrutiny
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 font-medium text-slate-200">
                    • Statutory Audit & CARO Disclosures
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 font-medium text-slate-200">
                    • GST Annual Return (GSTR-9/9C) Reconciliations
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 font-medium text-slate-200">
                    • Startup DCF Valuations & FEMA FC-GPR
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 italic">
                Strictly operating in compliance with the Chartered Accountants Act, 1949 and ICAI Code of Ethics.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
