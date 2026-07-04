"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, BuildingIcon, GlobeIcon, BriefcaseIcon, ShieldCheckIcon, CalculatorIcon } from "@/components/ui/Icons";
import { IndustryItem } from "@/lib/types";

export interface IndustryExpertiseProps {
  id?: string;
  industries?: IndustryItem[];
  className?: string;
}

const defaultIndustries: IndustryItem[] = [
  {
    id: "ind-1",
    title: "Information Technology & SaaS",
    slug: "it-saas",
    description: "Cross-border software billing, R&D tax incentives, ESOP structuring, and SEZ / STPI compliance for tech enterprises.",
    keyComplianceAreas: ["Export of Services & SEZ Filing", "ESOP Taxation & Valuation", "Foreign Inward Remittance Certificate"],
  },
  {
    id: "ind-2",
    title: "Manufacturing & Industrial Goods",
    slug: "manufacturing",
    description: "Cost accounting, inventory valuation, GST input credit optimization, and statutory audit for manufacturing plants.",
    keyComplianceAreas: ["GST ITC Reconciliation & Job Work", "Inventory Valuation (AS 2 / Ind AS 2)", "PLI Scheme Compliance"],
  },
  {
    id: "ind-3",
    title: "Real Estate & Construction",
    slug: "real-estate",
    description: "RERA financial certification, joint development agreement (JDA) tax planning, and GST on under-construction properties.",
    keyComplianceAreas: ["RERA Auditor Certificates", "JDA Capital Gains Tax Structuring", "GST 1% / 5% Scheme Optimization"],
  },
  {
    id: "ind-4",
    title: "Healthcare & Pharmaceuticals",
    slug: "healthcare-pharma",
    description: "Hospital accounting, medical supply chain GST classification, equipment lease structuring, and tax audits.",
    keyComplianceAreas: ["Pharma GST Rate Classification", "Hospital Operations & Trust Audits", "Equipment Lease Tax Planning"],
  },
  {
    id: "ind-5",
    title: "E-Commerce & Retail Chains",
    slug: "ecommerce-retail",
    description: "TCS / TDS reconciliation for marketplaces, multi-state GST registration, inventory audit, and franchise compliance.",
    keyComplianceAreas: ["Marketplace Section 194O TDS", "Multi-state GST Filings", "High-volume Transaction Reconciliation"],
  },
  {
    id: "ind-6",
    title: "Financial Services & FinTech",
    slug: "financial-services",
    description: "NBFC regulatory compliance, RBI reporting, payment gateway auditing, and specialized valuation advisory.",
    keyComplianceAreas: ["RBI NBFC Regulatory Returns", "FinTech Payment Escrow Audits", "Fair Value Accounting (Ind AS 109)"],
  },
];

const industryIconMap: Record<string, React.ReactNode> = {
  "it-saas": <GlobeIcon size={24} />,
  manufacturing: <BuildingIcon size={24} />,
  "real-estate": <BriefcaseIcon size={24} />,
  "healthcare-pharma": <ShieldCheckIcon size={24} />,
  "ecommerce-retail": <CalculatorIcon size={24} />,
  "financial-services": <BuildingIcon size={24} />,
};

export function IndustryExpertise({
  id = "industry-expertise",
  industries = defaultIndustries,
  className = "",
}: IndustryExpertiseProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id={`${id}-heading`}
          badge="Sector Specialization"
          title="Industry Expertise & Sectoral Counsel"
          subtitle="Specific regulatory, tax, and auditing expertise tailored to the unique operational mechanics of your industry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Card
              key={ind.id}
              id={`industry-card-${ind.slug}`}
              className="group h-full flex flex-col justify-between"
            >
              <CardHeader>
                <div className="p-3 w-fit rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-105 transition-transform duration-200">
                  {industryIconMap[ind.slug] || <BriefcaseIcon size={24} />}
                </div>
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ind.title}
                </CardTitle>
                <CardDescription>{ind.description}</CardDescription>

                {ind.keyComplianceAreas && ind.keyComplianceAreas.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                      Key Focus Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {ind.keyComplianceAreas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardHeader>

              <CardFooter>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Industry Solutions</span>
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
