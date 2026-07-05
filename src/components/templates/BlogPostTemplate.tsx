"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { CalendarIcon, ClockIcon, UserIcon, ShareIcon, CheckCircleIcon } from "@/components/ui/Icons";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogPost } from "@/lib/types";

export interface BlogPostTemplateProps {
  id?: string;
  post: BlogPost;
  className?: string;
}

export function BlogPostTemplate({
  id = "blog-post-template",
  post,
  className = "",
}: BlogPostTemplateProps) {
  const [copied, setCopied] = useState(false);

  const breadcrumbItems = [
    { id: "b-blog", label: "Articles & Insights", href: "/blog" },
    { id: "b-current", label: post.title },
  ];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article id={id} className={`py-8 space-y-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs id={`${id}-breadcrumbs`} items={breadcrumbItems} />

        {/* Article Header */}
        <header className="mt-6 max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{post.category}</Badge>
            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <ClockIcon size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
            {post.excerpt}
          </p>

          {/* Author & Date Bar */}
          <div className="pt-4 flex items-center justify-between border-t border-b border-slate-200 dark:border-slate-800 py-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                <UserIcon size={16} />
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">
                  {post.author}
                </span>
                <span className="text-[11px] text-slate-500">Sole Senior Partner & Managing CA</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <CalendarIcon size={14} />
                <span>{post.publishedAt}</span>
              </div>

              <button
                id={`${id}-share-btn`}
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium text-xs text-slate-700 dark:text-slate-300"
              >
                {copied ? (
                  <>
                    <CheckCircleIcon size={14} className="text-emerald-500" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <ShareIcon size={14} />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content Body & Table of Contents Sidebar */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-8">
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-base md:text-lg">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="space-y-4">
                  <p>
                    Tax legislation and statutory audit standards in India undergo regular refinements through CBDT circulars, CBIC notifications, and MCA amendments. Understanding their practical impact is essential for maintaining operational compliance and preventing penalty notices.
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Key Statutory Provisions & Compliance Nuances
                  </h2>
                  <p>
                    When navigating complex compliance procedures, tax payers must evaluate judicial precedents from the Supreme Court and Income Tax Appellate Tribunals alongside statutory guidelines. Proper documentation and timely filing are key pillars of defense against departmental scrutiny.
                  </p>
                  <blockquote className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border-l-4 border-blue-600 text-slate-800 dark:text-slate-200 font-medium italic my-4">
                    &ldquo;Strict adherence to ICAI accounting standards and statutory deadlines ensures complete peace of mind during departmental assessments.&rdquo;
                  </blockquote>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tags:
                </span>
                {post.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Table of Contents / Author Card Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              {post.toc && post.toc.length > 0 && (
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    Table of Contents
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {post.toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Principal Author Card */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                <div className="text-xs uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                  Author Profile
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {post.author}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Chartered Accountant with 26+ years in corporate tax litigation, GST advisory, and statutory auditing.
                </p>
                <a
                  href="/about"
                  className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Principal Profile →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner at bottom */}
        <div className="mt-16">
          <CTABanner
            id={`${id}-bottom-cta`}
            title="Need Expert Consultation on This Subject?"
            subtitle="Schedule a direct advisory discussion with CA Vikram Kothari to assess your firm's tax or compliance requirements."
          />
        </div>
      </div>
    </article>
  );
}
