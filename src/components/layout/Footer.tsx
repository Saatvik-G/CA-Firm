import React from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { CALogo } from "@/components/ui/CALogo";

export interface FooterProps {
  id?: string;
  firmName?: string;
  frnNumber?: string;
  principalName?: string;
  membershipNo?: string;
  address?: string;
  phone?: string;
  email?: string;
  className?: string;
}

export function Footer({
  id = "site-footer",
  firmName = "Anil Puneet and Associates",
  frnNumber = "016890N",
  principalName = "CA Puneet Gupta",
  membershipNo = "095435",
  address = "SCF 57, Level 2, Sector 8, Panchkula, Haryana (Head Office) | New Delhi (Branch Office)",
  phone = "+91 9815763749",
  email = "gupta.puneetca@gmail.com",
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className={`bg-slate-950 text-slate-300 border-t border-slate-800 text-sm ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Firm Overview & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <CALogo height={38} className="text-white" />
              <div>
                <div className="font-extrabold text-white text-lg tracking-tight">
                  {firmName}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  Chartered Accountants (Partnership Firm)
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing rigorous statutory auditing, corporate tax advisory, GST compliance, and strategic financial counsel to enterprises across India.
            </p>

            <div className="pt-2 space-y-1 text-xs text-slate-400 border-t border-slate-800/80">
              <div>
                <span className="font-semibold text-slate-300">Firm Registration No (FRN):</span> {frnNumber}
              </div>
              <div>
                <span className="font-semibold text-slate-300">Senior Partner & Managing CA:</span> {principalName} (Mem No: {membershipNo})
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/services/direct-tax" className="hover:text-white transition-colors">
                  Direct Tax Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/gst-advisory" className="hover:text-white transition-colors">
                  GST & Indirect Taxes
                </Link>
              </li>
              <li>
                <Link href="/services/statutory-audit" className="hover:text-white transition-colors">
                  Statutory & Internal Audit
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-compliance" className="hover:text-white transition-colors">
                  Corporate Law Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/financial-advisory" className="hover:text-white transition-colors">
                  Valuation & M&A Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Firm & Principal
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Articles & Publications
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  Statutory Tax Updates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Compliance FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">
              Head Office
            </h4>
            <ul className="space-y-3 text-slate-400 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPinIcon size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-blue-400 shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon size={16} className="text-blue-400 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ICAI Disclosure Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-3 leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldCheckIcon size={16} className="text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-400">ICAI Disclaimer & Code of Ethics Notice:</strong> In accordance with the guidelines issued by The Institute of Chartered Accountants of India (ICAI), this website is designed solely for informational purpose and to facilitate communication regarding statutory compliance requirements. It does not constitute solicitation or advertisement of accounting, auditing, or tax advisory services.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} {firmName}. All Rights Reserved. Partnership Firm.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-400 transition-colors">
              ICAI Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
