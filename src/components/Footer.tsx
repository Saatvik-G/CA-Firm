import React from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Firm Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center font-bold text-lg rounded-md">
                CA
              </div>
              <div>
                <div className="font-bold text-lg text-white">
                  {siteConfig.firmName}
                </div>
                <div className="text-xs font-medium text-slate-400 uppercase">
                  {siteConfig.subtitle}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              A chartered accountancy Partnership Firm established in {siteConfig.establishedYear}, providing corporate tax compliance, statutory audit, GST advisory, and business valuation services in accordance with ICAI standards.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
              <p><strong className="text-slate-200">Sole Senior Partner:</strong> {siteConfig.principal.name} ({siteConfig.principal.qualification})</p>
              <p><strong className="text-slate-200">Membership No:</strong> {siteConfig.principal.membershipNo}</p>
              <p><strong className="text-slate-200">Firm Registration No (FRN):</strong> 016890N</p>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.services.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Knowledge Centre */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Knowledge Centre
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/knowledge/blog" className="hover:text-blue-400 transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/knowledge/publications" className="hover:text-blue-400 transition-colors">
                  Whitepapers & Guides
                </Link>
              </li>
              <li>
                <Link href="/knowledge/tax-updates" className="hover:text-blue-400 transition-colors">
                  Direct Tax Updates
                </Link>
              </li>
              <li>
                <Link href="/knowledge/gst-updates" className="hover:text-blue-400 transition-colors">
                  GST Updates & Circulars
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-blue-400 transition-colors">
                  Webinars & Seminars
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Articleship Vacancies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Office Location
            </h3>
            <address className="not-italic text-sm space-y-2 text-slate-300">
              <p>{siteConfig.contact.address}</p>
              <p className="pt-2">
                <strong className="text-slate-400">Phone:</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-blue-400">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <strong className="text-slate-400">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-400">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-slate-400">Hours:</strong> {siteConfig.contact.workingHours}
              </p>
            </address>
          </div>
        </div>

        {/* ICAI Mandatory Compliance Statement */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-8 text-xs text-slate-400 leading-relaxed">
          <span className="font-semibold text-amber-400 block mb-1 uppercase tracking-wide">
            ICAI Compliance & Website Guidelines Disclaimer
          </span>
          {siteConfig.icaiDisclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved. Partnership Firm.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-slate-300">ICAI Disclaimer</Link>
            <Link href="/cookie-policy" className="hover:text-slate-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
