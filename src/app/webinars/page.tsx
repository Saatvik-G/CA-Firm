import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllWebinars } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Technical Webinars & Seminars | S.G. & Associates',
  description: 'Technical seminars, compliance workshops, and live webinars on tax audit AY 2025-26, GSTR-9/9C reconciliation, and startup valuations led by CA Saatvik Gupta.',
  path: '/webinars',
});

export default function WebinarsPage() {
  const webinars = getAllWebinars();
  const upcoming = webinars.filter((w) => w.status === 'upcoming');
  const past = webinars.filter((w) => w.status === 'past');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 uppercase tracking-wider">
            Continuing Professional Education
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Webinars & Technical Seminars
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Interactive sessions led by Principal CA Saatvik Gupta covering income tax scrutinies, Section 43B(h), GSTR-9C audit reconciliations, and FDI startup valuations.
          </p>
        </div>

        {/* Upcoming Webinars Section */}
        {upcoming.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-3">
              Upcoming Technical Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcoming.map((w) => (
                <div
                  key={w.id}
                  className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="px-3 py-1 rounded-full font-semibold bg-blue-900 text-blue-300 border border-blue-700 uppercase">
                        Live Session
                      </span>
                      <span className="text-slate-400">{w.date} • {w.time}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {w.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {w.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                        Session Key Takeaways:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {w.keyTakeaways.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-xs text-slate-400">
                      Speaker: <strong className="text-white">{w.speaker}</strong> ({w.speakerDesignation})
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <Link
                      href="/contact"
                      className="block w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-center text-xs font-bold transition-colors"
                    >
                      Reserve Attendee Slot →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Webinars & Archive */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-slate-400 pl-3">
            Archived Technical Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {past.map((w) => (
              <div
                key={w.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2.5 py-1 rounded-full font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Completed Workshop
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{w.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {w.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {w.description}
                  </p>

                  <div className="space-y-1 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Topics Covered:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {w.keyTakeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-4 text-xs font-bold">
                  <a
                    href={`mailto:contact@sgassociates.in?subject=Request Webinar Recording/Deck: ${encodeURIComponent(w.title)}`}
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    📥 Request Deck / Slides Copy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
