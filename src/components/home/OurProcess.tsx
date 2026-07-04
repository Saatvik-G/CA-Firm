import React from 'react';

export default function OurProcess() {
  const steps = [
    {
      step: '01',
      title: 'Diagnostic & Data Gathering',
      description: 'Reviewing current financial ledgers, past tax filings, AIS/TIS extracts, Form 26AS, and GST portal records to identify statutory obligations and risk exposure.'
    },
    {
      step: '02',
      title: 'Tax Computation & Audit Strategy',
      description: 'Formulating tax-efficient structuring, calculating advance tax liabilities, and mapping out statutory audit workpapers under ICAI Auditing Standards.'
    },
    {
      step: '03',
      title: 'Principal Review & Audit Sign-Off',
      description: 'Principal CA Saatvik Gupta performs rigorous quality review of all audit reports, tax return drafts, and valuation models prior to final sign-off.'
    },
    {
      step: '04',
      title: 'Portal Submission & Ongoing Advisory',
      description: 'Executing electronic submission on Income Tax / GST / MCA portals and providing year-round guidance on dynamic statutory amendments.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
            Engagement Methodology
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Our 4-Stage Practice Workflow
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A structured compliance process ensuring precision, zero portal errors, and complete audit readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 text-white dark:bg-blue-600 flex items-center justify-center font-black text-lg shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
