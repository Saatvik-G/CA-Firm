import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getFAQSchema } from '@/lib/structuredData';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return constructMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    });
  }

  return constructMetadata({
    title: `${service.title} | Practice Services`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqSchema = service.faqs ? getFAQSchema(service.faqs) : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServicePageTemplate service={service} />
    </>
  );
}
