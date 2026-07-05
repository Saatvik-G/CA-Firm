import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { getTeamMembers } from '@/lib/content';
import siteConfig from '@/lib/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Principal & Practice Team | Anil Puneet and Associates',
  description: 'Meet Principal CA Puneet Gupta (FCA) and the supervised audit and compliance staff at Anil Puneet and Associates, Chartered Accountants.',
  path: '/team',
});

export default function TeamPage() {
  const team = getTeamMembers();
  const principal = team.find((t) => t.isPrincipal) || team[0];
  const staff = team.filter((t) => !t.isPrincipal);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Practice Structure
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Principal & Supervised Team
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A Partnership Firm led directly by Senior Partner CA Puneet Gupta, supported by qualified accounting executives and Article Assistants.
          </p>
        </div>

        {/* Featured Senior Partner CA Card */}
        {principal && (
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="w-28 h-28 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-4xl shadow-lg border-2 border-blue-400">
                  SG
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                    Sole Senior Partner & Practice Lead
                  </span>
                  <h2 className="text-3xl font-black text-white mt-1">
                    {principal.name}
                  </h2>
                  <p className="text-sm font-semibold text-slate-300">
                    {principal.qualification}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">ICAI Membership No:</span>
                    <span className="font-semibold text-white">{principal.membershipNo}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Firm Registration No:</span>
                    <span className="font-semibold text-white">016890N</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Post Qualification:</span>
                    <span className="font-semibold text-white">Chartered Accountant</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Total Practice Experience:</span>
                    <span className="font-semibold text-white">{principal.experience}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-4 text-xs font-semibold">
                  {principal.email && (
                    <a href={`mailto:${principal.email}`} className="text-blue-400 hover:underline">
                      ✉ {principal.email}
                    </a>
                  )}
                  {principal.linkedin && (
                    <a href={principal.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      🔗 LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-800 lg:pl-10">
                <h3 className="text-xl font-bold text-white">
                  Professional Practice Bio
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {principal.bio}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Areas of Expertise:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {principal.expertise.map((exp, idx) => (
                      <div key={idx} className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 text-slate-200">
                        • {exp}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-900 text-xs text-blue-200">
                  <strong className="block mb-1 text-blue-400 font-bold uppercase tracking-wide">
                    Supervisorial Notice
                  </strong>
                  All statutory audit opinions, tax audit reports under Section 44AB, and valuation certificates are personally audited and signed by Principal CA Puneet Gupta.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Supervised Staff & Article Assistants Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Supervised Audit & Compliance Staff
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Senior accounts executives, semi-qualified CAs, and Article Assistants operating under the supervision of the Principal CA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staff.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                        {member.designation}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {member.experience}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Qualification: <span className="text-slate-800 dark:text-slate-200">{member.qualification}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Assigned Workflows:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {member.expertise.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-blue-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 italic">
                  * All client work is directly reviewed and approved by Principal CA Puneet Gupta.
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
