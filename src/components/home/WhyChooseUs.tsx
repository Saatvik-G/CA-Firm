import React from 'react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Principal-Led Service Delivery',
      description: 'Unlike multi-partner firms where work is delegated to junior teams, every audit report, tax return, and compliance filing is directly supervised and reviewed by Principal CA Saatvik Gupta.',
      badge: 'Direct Oversight'
    },
    {
      title: 'ICAI Code of Ethics Compliance',
      description: 'Our practice strictly adheres to independence requirements, confidentiality standards, and statutory guidelines issued by the Institute of Chartered Accountants of India.',
      badge: 'Ethical Integrity'
    },
    {
      title: 'Digital & Portal Integration',
      description: 'We utilize advanced cloud-enabled reconciliation systems for GSTR-2B matching, Income Tax AIS/TIS verification, and e-proceeding assessment representation.',
      badge: 'Modern Technology'
    },
    {
      title: 'Proactive Statutory Timelines',
      description: 'We track advance tax due dates, GST monthly return schedules, and MCA annual filing timelines to ensure zero non-compliance penalties or interest surcharges for your entity.',
      badge: 'Zero Delay Discipline'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
            Firm Operating Ethos
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Why Organizations Partner With S.G. & Associates
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A practice built on precision, technical expertise, and absolute statutory transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {pillar.badge}
                </span>
                <span className="text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-blue-500/20 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
