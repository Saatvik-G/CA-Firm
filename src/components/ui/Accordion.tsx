"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { FAQItem } from "@/lib/types";

export interface AccordionProps {
  id?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export function Accordion({
  id = "faq-accordion",
  items,
  defaultOpenIndex,
  className = "",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex !== undefined ? defaultOpenIndex : null
  );

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id={id} className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `${id}-item-${item.id || index}`;
        const contentId = `${id}-content-${item.id || index}`;

        return (
          <div
            key={item.id || index}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden transition-colors duration-200"
          >
            <button
              id={itemId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset transition-colors"
            >
              <span className="pr-4 text-base md:text-lg">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 shrink-0"
              >
                <ChevronDownIcon size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={itemId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-1 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
