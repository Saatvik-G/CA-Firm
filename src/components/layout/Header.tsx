"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon, MenuIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { MobileNav } from "@/components/layout/MobileNav";
import { CALogo } from "@/components/ui/CALogo";
import { NavDropdownGroup, NavItem } from "@/lib/types";

const defaultServicesNav: NavDropdownGroup = {
  id: "services-group",
  category: "Practice Areas",
  items: [
    {
      id: "srv-tax",
      label: "Direct Tax & Corporate Taxation",
      href: "/services/direct-tax",
      description: "Income tax return filing, assessments, appeals & international taxation.",
    },
    {
      id: "srv-gst",
      label: "GST & Indirect Taxation",
      href: "/services/gst-advisory",
      description: "GST audits, monthly compliance, refunds & statutory representation.",
    },
    {
      id: "srv-audit",
      label: "Statutory & Internal Audit",
      href: "/services/statutory-audit",
      description: "Rigorous financial statement audits as per ICAI & Companies Act.",
    },
    {
      id: "srv-mca",
      label: "Corporate Law & Compliance",
      href: "/services/corporate-compliance",
      description: "MCA filings, company formation, annual secrets & regulatory filings.",
    },
    {
      id: "srv-valuation",
      label: "Valuation & Advisory",
      href: "/services/financial-advisory",
      description: "Business valuation, M&A restructuring & due diligence.",
    },
  ],
};

const defaultKnowledgeNav: NavItem[] = [
  {
    id: "kn-blog",
    label: "Articles & Publications",
    href: "/blog",
    description: "In-depth insights on financial compliance and accounting standards.",
  },
  {
    id: "kn-updates",
    label: "Tax & Statutory Updates",
    href: "/updates",
    description: "Latest notifications from CBDT, CBIC, and MCA.",
  },
  {
    id: "kn-faq",
    label: "Compliance Knowledge Base",
    href: "/faq",
    description: "Frequently asked questions regarding GST, Income Tax & Audits.",
  },
];

export interface HeaderProps {
  id?: string;
  firmName?: string;
  frnNumber?: string;
  className?: string;
}

export function Header({
  id = "site-header",
  firmName = "Anil Puneet and Associates",
  frnNumber = "FRN: 016890N",
  className = "",
}: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header
        id={id}
        className={`sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-200 ${className}`}
      >
        {/* ICAI Disclosure Banner Header Top */}
        <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 border-b border-slate-800 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon size={13} className="text-blue-400" />
              <span>
                Chartered Accountants | Firm Registration No (FRN): {frnNumber}
              </span>
            </div>
            <div className="text-slate-400">
              Strictly compliant with ICAI Code of Ethics
            </div>
          </div>
        </div>

        {/* Main Header Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo Brand */}
          <Link id={`${id}-logo`} href="/" className="flex items-center gap-3 group">
            <CALogo height={44} showIndiaText={true} className="text-blue-950 dark:text-white transition-transform group-hover:scale-105" />
            <div>
              <div className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base md:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {firmName}
              </div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                Chartered Accountants
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About & Principal
            </Link>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id={`${id}-nav-services`}
                aria-expanded={activeDropdown === "services"}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                <span>Practice Areas</span>
                <ChevronDownIcon size={16} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
                  >
                    <div className="space-y-1">
                      {defaultServicesNav.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                        >
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/industries"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Industries
            </Link>

            {/* Knowledge Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("knowledge")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id={`${id}-nav-knowledge`}
                aria-expanded={activeDropdown === "knowledge"}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                <span>Knowledge & Updates</span>
                <ChevronDownIcon size={16} />
              </button>

              <AnimatePresence>
                {activeDropdown === "knowledge" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
                  >
                    <div className="space-y-1">
                      {defaultKnowledgeNav.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                        >
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-3">
            <ThemeToggle id={`${id}-theme-toggle`} />

            <div className="hidden sm:block">
              <Button
                id={`${id}-header-cta`}
                variant="primary"
                size="sm"
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/contact";
                  }
                }}
              >
                Consultation Request
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id={`${id}-mobile-toggle`}
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open Mobile Menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        id={`${id}-mobile-nav`}
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        servicesNav={defaultServicesNav}
        knowledgeNav={defaultKnowledgeNav}
      />
    </>
  );
}
