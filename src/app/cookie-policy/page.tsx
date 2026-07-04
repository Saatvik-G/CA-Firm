import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Cookie Policy | S.G. & Associates',
  description: 'Cookie policy and technical preference tracking disclosure for S.G. & Associates website.',
  path: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Technical Disclosure
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Cookie Policy
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Use of Local Storage & Essential Cookies</h2>
          <p>
            S.G. & Associates uses minimal essential cookies and browser LocalStorage solely to store visitor interface preferences (such as light vs. dark color theme preference).
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. No Commercial Tracking</h2>
          <p>
            We do not employ invasive third-party advertising trackers, cross-site profiling cookies, or behavioral ad targeting cookies.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Managing Preferences</h2>
          <p>
            Visitors can clear or block local storage data through standard browser privacy settings without affecting access to core website information.
          </p>
        </div>

      </div>
    </div>
  );
}
