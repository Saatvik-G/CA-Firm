"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/lib/types";

export interface OurProcessProps {
  id?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultProcessSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Initial Engagement & Scope Definition",
    description: "Confidential evaluation of client operational structure, compliance history, and specific advisory requirements.",
    details: ["Execution of Non-Disclosure Agreement (NDA)", "Regulatory scope mapping", "Fee proposal & ICAI engagement letter"],
  },
  {
    stepNumber: 2,
    title: "Data Audit & Statutory Verification",
    description: "Systematic examination of books of accounts, tax ledgers, MCA records, and supporting documentation.",
    details: ["Secure document intake", "Preliminary discrepancy analysis", "Cross-reconciliation with GST & CBDT portals"],
  },
  {
    stepNumber: 3,
    title: "Technical Review & Legal Structuring",
    description: "Principal-led legal and financial analysis to optimize tax exposure and ensure bulletproof audit trails.",
    details: ["Judicial precedent benchmarking", "Multi-layer verification", "Draft audit / advisory memo compilation"],
  },
  {
    stepNumber: 4,
    title: "Final Certification & Ongoing Compliance",
    description: "Issuance of certified reports, statutory portal submissions, and proactive monitoring of future deadlines.",
    details: ["UDIN-authenticated issuance", "Portal submission & receipt confirmation", "Ongoing quarterly advisory review"],
  },
];

export function OurProcess({
  id = "our-process",
  steps = defaultProcessSteps,
  className = "",
}: OurProcessProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id={`${id}-heading`}
          badge="Structured Methodology"
          title="Our Client Engagement Workflow"
          subtitle="A transparent four-phase process ensuring regulatory rigor, complete confidentiality, and timely compliance."
          align="center"
        />

        <div className="relative mt-12">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                      0{step.stepNumber}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                      Phase {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {step.details && step.details.length > 0 && (
                  <ul className="space-y-1.5 border-t border-slate-200 dark:border-slate-800/80 pt-3 text-[11px] text-slate-500 dark:text-slate-400">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
