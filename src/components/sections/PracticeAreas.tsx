"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CalculatorIcon, ScaleIcon, ShieldCheckIcon, BuildingIcon, FileTextIcon, AwardIcon } from "@/components/ui/Icons";
import { ServiceItem } from "@/lib/types";

export interface PracticeAreasProps {
  id?: string;
  services?: ServiceItem[];
  className?: string;
}

const defaultPracticeServices: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Direct Tax & Corporate Taxation",
    slug: "direct-tax",
    category: "Taxation",
    shortDescription: "Comprehensive tax planning, corporate IT filings, transfer pricing, and appellate representation before Income Tax Appellate Tribunal (ITAT).",
    features: ["Corporate Income Tax Returns", "Transfer Pricing Documentation", "Tax Scrutiny Defense & Appeals", "International Taxation Counsel"],
  },
  {
    id: "srv-2",
    title: "GST & Indirect Taxes",
    slug: "gst-advisory",
    category: "Taxation",
    shortDescription: "End-to-end GST advisory, annual GST audits (GSTR-9C), monthly compliance, ITC reconciliation, and refund claims.",
    features: ["Monthly GSTR-1 & 3B Filings", "Annual GST Audit & GSTR-9C", "Export Refund Claims", "GST Departmental Representation"],
  },
  {
    id: "srv-3",
    title: "Statutory & Internal Audit",
    slug: "statutory-audit",
    category: "Auditing",
    shortDescription: "Rigorous statutory financial audits, internal control evaluations, and tax audits under Section 44AB of the Income Tax Act.",
    features: ["Companies Act Statutory Audits", "Tax Audits (Form 3CD)", "Internal Risk Controls", "Bank & Stock Audits"],
  },
  {
    id: "srv-4",
    title: "Corporate Law & MCA Compliance",
    slug: "corporate-compliance",
    category: "Corporate Law",
    shortDescription: "Company formation, annual secretarial compliance, MCA e-filings, director KYC, and corporate restructuring guidance.",
    features: ["Company & LLP Incorporation", "ROC Annual Filings", "Director KYC & MCA E-Forms", "Share Transfer & Capital Structuring"],
  },
  {
    id: "srv-5",
    title: "Valuation & Financial Advisory",
    slug: "financial-advisory",
    category: "Advisory",
    shortDescription: "Certified business valuation for M&A, regulatory share pricing under FEMA / IT Act, and financial due diligence.",
    features: ["Discounted Cash Flow Valuation", "FEMA & RBI Regulatory Valuation", "M&A Financial Due Diligence", "Capital Raising Structuring"],
  },
  {
    id: "srv-6",
    title: "FEMA & Cross-Border Advisory",
    slug: "fema-advisory",
    category: "International",
    shortDescription: "Foreign direct investment (FDI) reporting, overseas direct investment (ODI) compliance, and Form 15CA/15CB certification.",
    features: ["Form 15CA & 15CB Certificates", "FDI & FC-GPR Compliance", "ODI Reporting & Approval", "NRI Tax & Remittance Advisory"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "direct-tax": <CalculatorIcon size={24} />,
  "gst-advisory": <FileTextIcon size={24} />,
  "statutory-audit": <ShieldCheckIcon size={24} />,
  "corporate-compliance": <BuildingIcon size={24} />,
  "financial-advisory": <ScaleIcon size={24} />,
  "fema-advisory": <AwardIcon size={24} />,
};

export function PracticeAreas({
  id = "practice-areas",
  services = defaultPracticeServices,
  className = "",
}: PracticeAreasProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id={`${id}-heading`}
          badge="Core Specializations"
          title="Comprehensive Practice Areas"
          subtitle="Tailored accounting, auditing, and tax advisory services executed with precision and regulatory compliance."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              id={`practice-card-${service.slug}`}
              className="group h-full flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
                    {iconMap[service.slug] || <ShieldCheckIcon size={24} />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>

              <CardContent className="mt-2">
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 border-t border-slate-100 dark:border-slate-800/60 pt-4 text-xs text-slate-700 dark:text-slate-300">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <CardFooter>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
