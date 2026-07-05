"use client";

import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/lib/types";

export interface FAQSectionProps {
  id?: string;
  faqs?: FAQItem[];
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the threshold for mandatory Statutory Audit under Companies Act, 2013?",
    answer: "Every company incorporated under the Companies Act, 2013, regardless of its turnover or paid-up capital, is statutorily required to appoint a practicing Chartered Accountant as its auditor and undergo an annual statutory audit of its financial statements.",
  },
  {
    id: "faq-2",
    question: "When is a Tax Audit under Section 44AB of the Income Tax Act mandatory?",
    answer: "For business entities, Tax Audit is mandatory if turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions do not exceed 5% of aggregate receipts/payments). For professionals, the threshold is ₹50 Lakhs.",
  },
  {
    id: "faq-3",
    question: "How does the firm ensure ICAI Code of Ethics compliance during audit engagements?",
    answer: "Our firm operates strictly as a Partnership Firm under FRN 105928W. We enforce complete independence of audit, zero conflict of interest, absolute client confidentiality under Section 126 of the Evidence Act guidelines, and mandatory UDIN authentication for all certified documents.",
  },
  {
    id: "faq-4",
    question: "What is the turn-around time for issuing Form 15CA and Form 15CB for foreign remittances?",
    answer: "Upon receipt of complete supporting agreements, invoices, and bank remittance instructions, Form 15CB (CA Certificate) and Form 15CA filings are typically processed within 24 to 48 business hours.",
  },
  {
    id: "faq-5",
    question: "How are consultations structured with the Senior Principal CA?",
    answer: "Initial consultation requests are reviewed within 24 business hours. Engagements begin with a confidential scoping discussion directly with CA Vikram Kothari (Principal) to establish statutory requirements, timeline, and an official ICAI-compliant engagement letter.",
  },
];

export function FAQSection({
  id = "faq-section",
  faqs = defaultFaqs,
  badge = "Clear Answers",
  title = "Frequently Asked Statutory & Tax Questions",
  subtitle = "Clarifications regarding compliance thresholds, auditing procedures, and advisory workflows.",
  className = "",
}: FAQSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id={`${id}-heading`}
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <Accordion id={`${id}-accordion`} items={faqs} defaultOpenIndex={0} />
      </div>
    </section>
  );
}
