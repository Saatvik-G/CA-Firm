"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/ui/Icons";

export interface CTABannerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  badge?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function CTABanner({
  id = "cta-banner",
  title = "Ready to elevate your financial compliance & strategy?",
  subtitle = "Schedule a confidential consultation with our Principal Chartered Accountant to discuss your advisory, tax, or audit requirements.",
  buttonText = "Schedule Consultation",
  buttonHref = "#contact",
  badge = "ICAI Ethical Compliance Assured",
  onButtonClick,
  className = "",
}: CTABannerProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-3xl overflow-hidden border border-blue-500/20 dark:border-blue-500/30 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl ${className}`}
    >
      <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-medium mb-6">
            <ShieldCheckIcon size={14} />
            <span>{badge}</span>
          </div>
        )}
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            id={`${id}-button`}
            variant="primary"
            size="lg"
            rightIcon={<ArrowRightIcon size={18} />}
            onClick={() => {
              if (onButtonClick) {
                onButtonClick();
              } else if (buttonHref) {
                const el = document.querySelector(buttonHref);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = buttonHref;
                }
              }
            }}
          >
            {buttonText}
          </Button>

          <span className="text-xs text-slate-400">
            Strict client confidentiality strictly observed.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
