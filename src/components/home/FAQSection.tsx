'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is S.G. & Associates a sole proprietorship or a multi-partner firm?',
      answer: 'S.G. & Associates is a registered sole proprietorship firm headed by Proprietor & Principal CA Saatvik Gupta (FCA, DISA). All engagements, audit certifications, and tax filings are personally reviewed and signed off by the Principal CA in strict adherence to ICAI guidelines.'
    },
    {
      question: 'What are the statutory audit threshold limits for FY 2024-25?',
      answer: 'Under Section 44AB of the Income Tax Act, tax audit is required for businesses with turnover exceeding ₹1 Crore (or ₹10 Crores if cash transactions do not exceed 5% of total receipts/payments). For professionals, the threshold is ₹50 Lakhs (or ₹75 Lakhs under presumptive taxation where cash receipts do not exceed 5%).'
    },
    {
      question: 'How does Section 43B(h) impact MSME vendor payments?',
      answer: 'Section 43B(h) disallows deduction for sums payable to registered Micro and Small enterprises if unpaid beyond statutory time limits (45 days with written agreement, 15 days without agreement). Expenses cleared after March 31 are deductible only in the financial year of actual payment.'
    },
    {
      question: 'What documents are required for filing Income Tax Returns for corporate entities?',
      answer: 'Key documents include Audited Balance Sheet & Profit/Loss statement, Form 26AS, AIS/TIS extracts, Tax Audit Report (Form 3CA/3CD), TDS certificates (Form 16A), advance tax challans, and GST reconciliation statements.'
    },
    {
      question: 'How are faceless Income Tax assessment notices handled by the firm?',
      answer: 'We review e-proceeding notices issued under Section 143(2) or 142(1), compile ledger extracts and supporting documentation, draft technical submissions, and submit response files directly on the e-filing portal within statutory deadlines.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
            Common Compliance Inquiries
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Answers to statutory questions regarding income tax, audits, GST, and engagement terms.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold text-lg flex-shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
