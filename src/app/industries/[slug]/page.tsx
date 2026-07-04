import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllIndustries, getIndustryBySlug, getAllServices } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import siteConfig from '@/lib/siteConfig';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return constructMetadata({
      title: 'Industry Not Found',
      description: 'The requested industry practice area could not be found.',
    });
  }

  return constructMetadata({
    title: `${industry.title} Financial & Tax Services | Industry Practice`,
    description: industry.shortDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const allServices = getAllServices();
  const relevantServices = allServices.filter((s) => industry.relevantServices.includes(s.slug));

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb & Title */}
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-blue-600">Industries</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-semibold">{industry.title}</span>
          </nav>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800 uppercase tracking-wider">
              Industry Specialization • Anil Puneet and Associates
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {industry.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
              {industry.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                Request Sector Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Challenges & Tailored Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Key Industry Challenges */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              Sector-Specific Compliance Challenges
            </h2>
            <ul className="space-y-4">
              {industry.keyChallenges.map((item, index) => (
                <li key={index} className="bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-sm text-slate-800 dark:text-slate-200 leading-snug">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tailored Solutions */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              Anil Puneet and Associates Tailored Solutions
            </h2>
            <ul className="space-y-4">
              {industry.tailoredSolutions.map((item, index) => (
                <li key={index} className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-sm text-slate-800 dark:text-slate-200 leading-snug">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Case Study Feature */}
        {industry.caseStudy && (
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-900 text-blue-300 border border-blue-700 uppercase tracking-wider">
              Practicing Engagement Case Study
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {industry.caseStudy.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider block">Context & Challenge</span>
                <p className="text-slate-300 leading-relaxed">{industry.caseStudy.context}</p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-2">
                <span className="font-bold text-blue-400 uppercase tracking-wider block">Audit & Advisory Approach</span>
                <p className="text-slate-300 leading-relaxed">{industry.caseStudy.approach}</p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-2">
                <span className="font-bold text-emerald-400 uppercase tracking-wider block">Statutory Outcome</span>
                <p className="text-slate-300 leading-relaxed">{industry.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        )}

        {/* Relevant Practice Services */}
        {relevantServices.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Relevant Practice Services for {industry.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantServices.map((service) => (
                <div key={service.slug} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-xs font-bold text-blue-700 dark:text-blue-400 block pt-1">
                    Explore Service Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
