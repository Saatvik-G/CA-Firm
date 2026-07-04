import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/Icons";
import { BreadcrumbItem } from "@/lib/types";

export interface BreadcrumbsProps {
  id?: string;
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({
  id = "breadcrumbs-nav",
  items,
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav id={id} aria-label="Breadcrumb" className={`py-3 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.id || index} className="flex items-center gap-1.5">
              <ChevronRightIcon size={14} className="text-slate-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 dark:text-slate-100 truncate max-w-[200px] md:max-w-xs">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate max-w-[150px] md:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
