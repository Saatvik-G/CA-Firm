"use client";

import React from "react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircleIcon, ShieldCheckIcon, ArrowRightIcon, FileTextIcon } from "@/components/ui/Icons";
import { ServiceItem } from "@/lib/types";

export interface ServicePageTemplateProps {
  id?: string;
  service: ServiceItem;
  className?: string;
}

export function ServicePageTemplate({
  id = "service-template",
  service,
  className = "",
}: ServicePageTemplateProps) {
  const breadcrumbItems = [
    { id: "b-services", label: "Practice Areas", href: "/services" },
    { id: "b-current", label: service.title },
  ];

  return (
    <article id={id} className={`space-y-16 py-8 ${className}`}>
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs id={`${id}-breadcrumbs`} items={breadcrumbItems} />

        {/* Hero Banner for Service */}
        <div className="mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
              <ShieldCheckIcon size={14} />
              <span>{service.category} Practice Area</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed pt-2">
              {service.shortDescription}
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Request Practice Consultation</span>
                <ArrowRightIcon size={18} />
              </a>
              <span className="text-xs text-slate-400">
                Supervised by FCA Principal
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Scope Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Detailed Description */}
            {service.fullDescription && (
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Practice Overview & Regulatory Framework
                </h2>
                <div className="text-slate-600 dark:text-slate-300 text-base leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </div>
              </section>
            )}

            {/* Scope of Work */}
            {service.scopeOfWork && service.scopeOfWork.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Scope of Professional Services
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our engagement includes comprehensive statutory compliance, document drafting, and representation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.scopeOfWork.map((scope, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircleIcon size={18} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {scope}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Execution Process Steps */}
            {service.processSteps && service.processSteps.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Engagement Execution Workflow
                </h2>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                        0{step.stepNumber}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <section className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 space-y-4">
                <div className="flex items-center gap-2">
                  <FileTextIcon size={20} className="text-blue-600 dark:text-blue-400" />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Official Deliverables & Statutory Reports
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {service.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Practice Area FAQs
                </h2>
                <Accordion items={service.faqs} defaultOpenIndex={0} />
              </section>
            )}
          </div>

          {/* Right Sidebar Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Practice Summary
                </h3>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{service.category}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">Supervision:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Senior Principal CA</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">Compliance:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">ICAI & UDIN Verified</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                >
                  Book Scoping Discussion
                </a>
              </div>

              <div className="text-[11px] text-slate-500 text-center leading-relaxed">
                Consultation strictly aligned with ICAI Code of Ethics. Confidentiality guaranteed.
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner at bottom */}
        <div className="mt-20">
          <CTABanner
            id={`${id}-bottom-cta`}
            title={`Discuss Your ${service.title} Requirements`}
            subtitle="Get direct counsel from our Principal Chartered Accountant regarding statutory filings, tax structure, or audit planning."
          />
        </div>
      </div>
    </article>
  );
}
