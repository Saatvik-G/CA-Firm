"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, ChevronDownIcon, PhoneIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { NavDropdownGroup, NavItem } from "@/lib/types";

export interface MobileNavProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  servicesNav: NavDropdownGroup;
  knowledgeNav: NavItem[];
  className?: string;
}

export function MobileNav({
  id = "mobile-nav-panel",
  isOpen,
  onClose,
  servicesNav,
  knowledgeNav,
  className = "",
}: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id={`${id}-backdrop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            id={id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl ${className}`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white block">
                    CA Firm
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-wider">
                    Chartered Accountants
                  </span>
                </div>
                <button
                  id={`${id}-close-btn`}
                  onClick={onClose}
                  aria-label="Close Mobile Navigation"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <CloseIcon size={22} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 space-y-2">
                <Link
                  href="/"
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  About Firm & Principal
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    id={`${id}-services-btn`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span>Practice Areas</span>
                    <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }}>
                      <ChevronDownIcon size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {servicesNav.items.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/industries"
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Industries
                </Link>

                {/* Knowledge Dropdown */}
                <div>
                  <button
                    id={`${id}-knowledge-btn`}
                    onClick={() => setKnowledgeOpen(!knowledgeOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span>Knowledge & Regulatory</span>
                    <motion.span animate={{ rotate: knowledgeOpen ? 180 : 0 }}>
                      <ChevronDownIcon size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {knowledgeOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {knowledgeNav.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <Button
                id={`${id}-cta-btn`}
                variant="primary"
                size="md"
                className="w-full"
                leftIcon={<PhoneIcon size={16} />}
                onClick={() => {
                  onClose();
                  window.location.href = "#contact";
                }}
              >
                Book Consultation
              </Button>
              <p className="text-[11px] text-center text-slate-500">
                ICAI Regulated Partnership Firm
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
