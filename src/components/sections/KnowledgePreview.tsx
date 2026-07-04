"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CalendarIcon, ClockIcon, FileTextIcon } from "@/components/ui/Icons";
import { BlogPost, UpdatePost } from "@/lib/types";

export interface KnowledgePreviewProps {
  id?: string;
  blogs?: BlogPost[];
  updates?: UpdatePost[];
  className?: string;
}

const defaultBlogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "Navigating CBDT Transfer Pricing Audits & Safe Harbour Rules 2026",
    slug: "cbdt-transfer-pricing-safe-harbour",
    excerpt: "An in-depth statutory analysis of safe harbour limits, arm's length price calculation methods, and Form 3CEB reporting requirements for multinational enterprises.",
    content: "",
    publishedAt: "June 28, 2026",
    author: "CA Vikram Kothari",
    readingTime: "7 min read",
    category: "Direct Taxation",
  },
  {
    id: "blog-2",
    title: "GST Input Tax Credit (ITC) Reconciliation under Rule 36(4)",
    slug: "gst-itc-reconciliation-rule-36-4",
    excerpt: "Step-by-step practical guide to matching GSTR-2B with purchase registers to mitigate department notices and optimize cash outflow.",
    content: "",
    publishedAt: "June 20, 2026",
    author: "CA Vikram Kothari",
    readingTime: "5 min read",
    category: "GST & Indirect Tax",
  },
  {
    id: "blog-3",
    title: "Companies Act 2013: Significant Beneficial Ownership (SBO) Compliance",
    slug: "companies-act-sbo-compliance",
    excerpt: "Decoding BEN-1, BEN-2 filings and mandatory disclosure requirements for corporate groups to avoid non-compliance penalties under MCA guidelines.",
    content: "",
    publishedAt: "June 12, 2026",
    author: "CA Vikram Kothari",
    readingTime: "6 min read",
    category: "Corporate Law",
  },
];

export function KnowledgePreview({
  id = "knowledge-preview",
  blogs = defaultBlogs,
  className = "",
}: KnowledgePreviewProps) {
  return (
    <section
      id={id}
      className={`py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            id={`${id}-heading`}
            badge="Regulatory Publications"
            title="Latest Technical Articles & Tax Updates"
            subtitle="Authoritative commentary on Indian taxation, statutory audits, and corporate law developments."
            align="left"
            className="mb-0"
          />

          <div className="mt-4 md:mt-0 shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>View All Publications</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Card
              key={post.id}
              id={`knowledge-card-${post.slug}`}
              className="group h-full flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <ClockIcon size={12} />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <CalendarIcon size={14} />
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
