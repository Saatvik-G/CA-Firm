"use client";

import React from "react";
import { motion } from "framer-motion";
import { AwardIcon, ShieldCheckIcon, CheckCircleIcon, MailIcon, UserIcon } from "@/components/ui/Icons";
import { PrincipalInfo } from "@/lib/types";

export interface PrincipalProfileProps {
  id?: string;
  principal?: PrincipalInfo;
  className?: string;
}

const defaultPrincipalInfo: PrincipalInfo = {
  id: "principal-sg",
  name: "CA Puneet Gupta",
  title: "Sole Proprietor & Principal Chartered Accountant",
  membershipInfo: {
    icaiMembershipNo: "059435",
    firmRegistrationNo: "016890N",
    fellowOrAssociate: "CA",
    copStatus: "Active Certificate of Practice (COP)",
    yearOfEnrollment: "2000",
  },
  bio: "CA Puneet Gupta has over 24 years of extensive professional standing in corporate taxation, statutory auditing, GST restructuring, and financial advisory. A Member of the Institute of Chartered Accountants of India (ICAI), he personally directs all complex advisory and audit mandates of the firm.",
  qualifications: [
    { degree: "Bachelor of Commerce (B.Com)", institution: "Panjab University", year: "1997" },
    { degree: "Chartered Accountant (CA)", institution: "ICAI", year: "2000" },
  ],
  specializations: [
    "CBDT & Income Tax Appellate Tribunal (ITAT) Appeals",
    "Statutory Audits under Companies Act, 2013",
    "GST High-Value Refund & Audit Litigation Advisory",
    "Cross-Border Transfer Pricing & FEMA Remittance (15CA/15CB)",
    "Business Valuation & Mergers and Acquisitions (M&A)",
  ],
  email: "gupta.puneetca@gmail.com",
  linkedinUrl: "https://linkedin.com",
};

export function PrincipalProfile({
  id = "principal-profile",
  principal = defaultPrincipalInfo,
  className = "",
}: PrincipalProfileProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image / Visual Badge Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 shadow-lg border border-slate-800 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-300 flex items-center justify-center mx-auto shadow-inner">
                  <UserIcon size={44} />
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {principal.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-400">
                    Chartered Accountant (CA)
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {principal.title}
                  </div>
                </div>

                {/* Credentials Badge List */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>ICAI Membership No:</span>
                    <span className="font-mono font-bold text-white">
                      {principal.membershipInfo.icaiMembershipNo}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Firm Reg No (FRN):</span>
                    <span className="font-mono font-bold text-white">
                      {principal.membershipInfo.firmRegistrationNo}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Enrollment Year:</span>
                    <span className="font-mono font-bold text-white">
                      {principal.membershipInfo.yearOfEnrollment}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 justify-center">
                    <ShieldCheckIcon size={14} />
                    <span>{principal.membershipInfo.copStatus}</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href={`mailto:${principal.email}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <MailIcon size={14} />
                    <span>Direct Desk: {principal.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Detailed Profile Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
                  <AwardIcon size={14} />
                  <span>Sole Proprietorship Leadership</span>
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  About the Principal
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {principal.bio}
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Core Advisory Specializations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {principal.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircleIcon size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Professional Credentials & Degrees
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {principal.qualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-xs"
                    >
                      <div className="font-bold text-slate-900 dark:text-white">
                        {qual.degree}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                        {qual.institution} {qual.year && `• ${qual.year}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
