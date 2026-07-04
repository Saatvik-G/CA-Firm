"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BentoGridProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({
  id = "bento-grid",
  className = "",
  children,
}: BentoGridProps) {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[22rem] ${className}`}
    >
      {children}
    </div>
  );
}

export interface BentoGridItemProps {
  id: string;
  title: string;
  description: string;
  badge?: string;
  colSpan?: "full" | "half" | "third" | "two-thirds";
  headerVisual?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function BentoGridItem({
  id,
  title,
  description,
  badge,
  colSpan = "third",
  headerVisual,
  icon,
  className = "",
}: BentoGridItemProps) {
  const spanClasses = {
    third: "md:col-span-1",
    half: "md:col-span-1 lg:col-span-1.5",
    "two-thirds": "md:col-span-2",
    full: "md:col-span-3",
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 ${spanClasses[colSpan]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {headerVisual && (
          <div className="mb-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 h-36 flex items-center justify-center">
            {headerVisual}
          </div>
        )}
        <div className="flex items-center justify-between gap-2 mb-3">
          {icon && (
            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
              {icon}
            </div>
          )}
          {badge && (
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
