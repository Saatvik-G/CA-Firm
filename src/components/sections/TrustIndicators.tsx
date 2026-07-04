"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, AwardIcon, BuildingIcon, CheckCircleIcon } from "@/components/ui/Icons";

export interface TrustIndicatorsProps {
  id?: string;
  className?: string;
}

const defaultStats = [
  {
    id: "stat-years",
    value: "25+",
    label: "Years in Practice",
    subtext: "Continuous professional standing under ICAI standards",
    icon: <AwardIcon size={24} />,
  },
  {
    id: "stat-clients",
    value: "500+",
    label: "Corporate & SME Engagements",
    subtext: "Audited & advised across diverse industrial sectors",
    icon: <BuildingIcon size={24} />,
  },
  {
    id: "stat-tax",
    value: "₹500Cr+",
    label: "Tax Assessments & Advisory",
    subtext: "Representation before CBDT & Appellate Authorities",
    icon: <ShieldCheckIcon size={24} />,
  },
  {
    id: "stat-compliance",
    value: "100%",
    label: "Regulatory Accuracy",
    subtext: "Zero penalty track record for statutory filings",
    icon: <CheckCircleIcon size={24} />,
  },
];

export function TrustIndicators({
  id = "trust-indicators",
  className = "",
}: TrustIndicatorsProps) {
  return (
    <section
      id={id}
      className={`py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {defaultStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
