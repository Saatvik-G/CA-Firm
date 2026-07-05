"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheckIcon, ScaleIcon, CalculatorIcon, AwardIcon, FileTextIcon, UserIcon } from "@/components/ui/Icons";

export interface WhyChooseUsProps {
  id?: string;
  className?: string;
}

export function WhyChooseUs({
  id = "why-choose-us",
  className = "",
}: WhyChooseUsProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id={`${id}-heading`}
          badge="Core Pillars of Excellence"
          title="Why Leading Enterprises Trust Our Advisory"
          subtitle="Built on strict ICAI ethical principles, technical rigor, and decades of senior principal leadership."
          align="center"
        />

        <BentoGrid id={`${id}-bento`}>
          <BentoGridItem
            id="why-rigor"
            title="Technical & Statutory Rigor"
            description="Every audit, tax return, and advisory opinion undergoes rigorous multi-tier verification aligned strictly with ICAI standards and statutory guidelines."
            badge="CBDT & CBIC Standards"
            colSpan="third"
            icon={<ScaleIcon size={24} />}
          />

          <BentoGridItem
            id="why-principal"
            title="Direct Principal Counsel"
            description="Unlike large impersonal firms, your file is personally supervised and reviewed by our Senior Principal CA with over 25 years of standing."
            badge="Sole Senior Partner Leadership"
            colSpan="third"
            icon={<UserIcon size={24} />}
          />

          <BentoGridItem
            id="why-ethics"
            title="ICAI Ethical Adherence"
            description="We strictly observe the ICAI Code of Ethics, ensuring 100% independence, objective reporting, and absolute client confidentiality."
            badge="Zero Conflict Guarantee"
            colSpan="third"
            icon={<ShieldCheckIcon size={24} />}
          />

          <BentoGridItem
            id="why-tax"
            title="Strategic Tax Optimization"
            description="Proactive corporate and HNI tax planning that legalizes tax savings while staying completely compliant with Income Tax Act rules and landmark judicial precedents."
            badge="Precedent-Backed Tax Defense"
            colSpan="two-thirds"
            icon={<CalculatorIcon size={24} />}
          />

          <BentoGridItem
            id="why-digital"
            title="Tech-Enabled Compliance Workflow"
            description="Modern digital document management, automated deadline tracking, and secure portal integrations for seamless compliance filing."
            badge="Digital Assurance"
            colSpan="third"
            icon={<FileTextIcon size={24} />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}
