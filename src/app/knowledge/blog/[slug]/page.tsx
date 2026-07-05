import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/structuredData';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: 'Article Not Found',
      description: 'The requested blog article could not be found.',
    });
  }

  return constructMetadata({
    title: `${post.title} | Technical Blog`,
    description: post.excerpt,
    path: `/knowledge/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.date,
    authors: [post.author],
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/knowledge/blog/${post.slug}`,
    datePublished: post.date || post.publishedAt || '',
    authorName: post.author,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Knowledge Centre', url: '/knowledge' },
    { name: 'Blog', url: '/knowledge/blog' },
    { name: post.title, url: `/knowledge/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/knowledge" className="hover:text-blue-600">Knowledge Centre</Link>
            <span>/</span>
            <Link href="/knowledge/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Header Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="px-3 py-1 rounded-full font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                {post.category}
              </span>
              <span className="text-slate-500 dark:text-slate-400">Published: {post.date}</span>
              <span className="text-slate-500 dark:text-slate-400">• {post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>

              <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                CA
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Senior Partner & Managing CA</div>
              </div>
          </div>

          {/* Formatted Article Body */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-slate-800 dark:text-slate-200 text-base leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

          {/* Author & Advisory Disclaimer */}
          <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 text-xs leading-relaxed space-y-2">
            <h3 className="font-bold text-amber-400 uppercase tracking-wide">
              Technical Advisory & General Information Notice
            </h3>
            <p>
              The technical commentary presented above is intended for general informational and educational reference under ICAI guidelines. Specific tax treatment depends on individual assessee facts and statutory provisions in force. Consult your practicing Chartered Accountant before acting upon any information.
            </p>
          </div>

        </div>
      </article>
    </>
  );
}
