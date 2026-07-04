"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { CalendarIcon, ShareIcon, CheckCircleIcon, ShieldCheckIcon, FileTextIcon, ClockIcon } from "@/components/ui/Icons";
import { CTABanner } from "@/components/ui/CTABanner";
import { UpdatePost } from "@/lib/types";

export interface UpdatePostTemplateProps {
  id?: string;
  update: UpdatePost;
  className?: string;
}

export function UpdatePostTemplate({
  id = "update-post-template",
  update,
  className = "",
}: UpdatePostTemplateProps) {
  const [copied, setCopied] = useState(false);

  const breadcrumbItems = [
    { id: "b-updates", label: "Statutory Tax Updates", href: "/updates" },
    { id: "b-current", label: update.statutoryReference },
  ];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const impactVariantMap: Record<string, "warning" | "accent" | "default"> = {
    High: "warning",
    Medium: "accent",
    Low: "default",
  };

  return (
    <article id={id} className={`py-8 space-y-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs id={`${id}-breadcrumbs`} items={breadcrumbItems} />

        {/* Update Post Header Card */}
        <header className="mt-6 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="accent">{update.category}</Badge>
              <Badge variant={impactVariantMap[update.impactLevel]}>
                {update.impactLevel} Impact Notification
              </Badge>
            </div>

            <button
              id={`${id}-share-btn`}
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium text-xs text-slate-700 dark:text-slate-300"
            >
              {copied ? (
                <>
                  <CheckCircleIcon size={14} className="text-emerald-500" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <ShareIcon size={14} />
                  <span>Share Circular</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-md border border-blue-200 dark:border-blue-800">
              <FileTextIcon size={14} />
              <span>{update.statutoryReference}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {update.title}
            </h1>
          </div>

          {/* Key Meta Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-slate-500 block">Notification Date</span>
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                <CalendarIcon size={14} className="text-blue-500" />
                <span>{update.publishedAt}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-slate-500 block">Effective Date</span>
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                <ClockIcon size={14} className="text-emerald-500" />
                <span>{update.effectiveDate}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-slate-500 block">Regulatory Body</span>
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                <ShieldCheckIcon size={14} className="text-indigo-500" />
                <span>CBDT / CBIC / MCA</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content & Action Points */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Executive Summary
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                {update.summary}
              </p>
            </section>

            {/* Content Breakdown */}
            <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {update.content ? (
                <div dangerouslySetInnerHTML={{ __html: update.content }} />
              ) : (
                <p>
                  This official statutory update introduces mandatory procedural modifications for taxpayers. Entities operating in the affected sectors must review their ongoing accounting configurations and compliance schedules to align with the revised guidelines.
                </p>
              )}
            </section>

            {/* Mandatory Key Action Points */}
            {update.keyActionPoints && update.keyActionPoints.length > 0 && (
              <section className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-4">
                <h3 className="text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                  <CheckCircleIcon size={18} className="text-amber-600 dark:text-amber-400" />
                  <span>Mandatory Compliance Action Items for Taxpayers</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  {update.keyActionPoints.map((action, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0 mt-2" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Statutory Advisory Note
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Failure to implement statutory circulars within prescribed effective dates may result in late filing fees or departmental notices.
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                Consult Principal CA
              </a>
            </div>
          </div>
        </div>

        {/* CTA Banner at bottom */}
        <div className="mt-16">
          <CTABanner
            id={`${id}-bottom-cta`}
            title="Have Questions Regarding This Statutory Circular?"
            subtitle="Get instant clarification on how this CBDT/CBIC notification affects your business or tax filings."
          />
        </div>
      </div>
    </article>
  );
}
