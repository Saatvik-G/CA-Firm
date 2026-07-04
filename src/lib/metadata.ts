import type { Metadata } from 'next';
import siteConfig from './siteConfig';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = '',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors = ['CA Puneet Gupta'],
  keywords = [
    'Chartered Accountant',
    'CA Firm Panchkula',
    'Tax Consultant',
    'Statutory Audit',
    'GST Filing',
    'Income Tax Return',
    'Virtual CFO',
    'Anil Puneet and Associates'
  ],
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';
  const fullUrl = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = `${title} | ${siteConfig.firmName}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: authors.map((name) => ({ name })),
    creator: 'CA Puneet Gupta',
    publisher: siteConfig.firmName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.firmName,
      locale: 'en_IN',
      type: ogType,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.firmName} - Chartered Accountants`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}/og-image.png`],
      creator: '@sgassociates_ca',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
