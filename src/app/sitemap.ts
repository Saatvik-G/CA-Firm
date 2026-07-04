import type { MetadataRoute } from 'next';
import { getAllServices, getAllIndustries, getAllBlogPosts, getAllTaxUpdates, getAllGSTUpdates } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/team',
    '/services',
    '/industries',
    '/knowledge',
    '/knowledge/blog',
    '/knowledge/publications',
    '/knowledge/tax-updates',
    '/knowledge/gst-updates',
    '/webinars',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/cookie-policy',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const services = getAllServices();
  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Industry routes
  const industries = getAllIndustries();
  const industryRoutes = industries.map((ind) => ({
    url: `${siteUrl}/industries/${ind.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog routes
  const blogs = getAllBlogPosts();
  const blogRoutes = blogs.map((b) => ({
    url: `${siteUrl}/knowledge/blog/${b.slug}`,
    lastModified: new Date(b.date || b.publishedAt || Date.now()).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Tax Update routes
  const taxUpdates = getAllTaxUpdates();
  const taxRoutes = taxUpdates.map((t) => ({
    url: `${siteUrl}/knowledge/tax-updates/${t.slug}`,
    lastModified: new Date(t.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic GST Update routes
  const gstUpdates = getAllGSTUpdates();
  const gstRoutes = gstUpdates.map((g) => ({
    url: `${siteUrl}/knowledge/gst-updates/${g.slug}`,
    lastModified: new Date(g.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...taxRoutes,
    ...gstRoutes,
  ];
}
