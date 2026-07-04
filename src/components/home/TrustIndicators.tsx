import React from 'react';

export default function TrustIndicators() {
  const stats = [
    { label: 'Years of Practice', value: '14+', description: 'Established continuous practice since 2012' },
    { label: 'Corporate & MSME Clients', value: '250+', description: 'Across manufacturing, tech, and retail' },
    { label: 'Statutory Compliance Rate', value: '100%', description: 'Strict adherence to ICAI & statutory deadlines' },
    { label: 'ICAI Mem. & FRN Disclosed', value: 'Verified', description: 'Mem #123456 • FRN 100001W' },
  ];

  return (
    <section className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-blue-400">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
