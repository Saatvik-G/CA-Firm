"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ShieldCheckIcon, AwardIcon, BuildingIcon, ScaleIcon } from "@/components/ui/Icons";

export interface HeroProps {
  id?: string;
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function Hero({
  id = "hero-section",
  badgeText = "ICAI Code of Ethics Compliant Practice",
  headline = "Precision Chartered Accountancy & Strategic Tax Counsel",
  subheadline = "Delivering rigorous statutory auditing, corporate tax advisory, GST optimization, and compliance management for enterprise leaders and high-net-worth individuals.",
  primaryCtaText = "Request Consultation",
  primaryCtaHref = "#contact",
  secondaryCtaText = "Explore Practice Areas",
  secondaryCtaHref = "#practice-areas",
  className = "",
}: HeroProps) {
  return (
    <section
      id={id}
      className={`relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 ${className}`}
    >
      {/* Background Visual Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold">
              <ShieldCheckIcon size={15} />
              <span>{badgeText}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                id={`${id}-primary-cta`}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRightIcon size={18} />}
                onClick={() => {
                  const el = document.querySelector(primaryCtaHref);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = primaryCtaHref;
                  }
                }}
              >
                {primaryCtaText}
              </Button>

              <Button
                id={`${id}-secondary-cta`}
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.querySelector(secondaryCtaHref);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = secondaryCtaHref;
                  }
                }}
              >
                {secondaryCtaText}
              </Button>
            </div>

            {/* Fact Stats Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  25+ Years
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Standing in Practice
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  100% Tax
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Regulatory Compliance
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  FCA Qualified
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Principal Leadership
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Geometric Visual Badge Card Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md">
                    <AwardIcon size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      ICAI Membership & FRN
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      FRN: 100001W | Mem No: 123456
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Active COP
                </span>
              </div>

              {/* Practice Highlights Visual Box */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BuildingIcon size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Corporate Tax & International Transfer Pricing
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">CBDT</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ScaleIcon size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Statutory Audit & Companies Act Filings
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">MCA</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      GST Compliance, Audits & Refund Claims
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">CBIC</span>
                </div>
              </div>

              {/* Sole Proprietor Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-300">
                    Principal & Proprietor
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    CA Saatvik Gupta, FCA, DISA
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-300">Experience</div>
                  <div className="text-xs font-bold text-blue-400">14+ Yrs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
