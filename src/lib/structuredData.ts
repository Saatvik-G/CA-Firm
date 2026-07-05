import siteConfig from './siteConfig';

export function getOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.firmName,
    alternateName: 'Anil Puneet and Associates, Chartered Accountants',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: siteConfig.icaiDisclaimer,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 401, Business Tower, MG Road',
      addressLocality: 'Panchkula',
      addressRegion: 'Haryana',
      postalCode: '380009',
      addressCountry: 'IN',
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    founder: {
      '@type': 'Person',
      name: siteConfig.principal.name,
      jobTitle: siteConfig.principal.designation,
      identifier: siteConfig.principal.membershipNo,
    },
    foundingDate: siteConfig.establishedYear,
    vatID: siteConfig.registration,
    priceRange: '₹₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:30',
      },
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
  };
}

export function getLocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.firmName,
    image: `${siteUrl}/office.jpg`,
    telePhone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 401, Business Tower, MG Road',
      addressLocality: 'Panchkula',
      addressRegion: 'Haryana',
      postalCode: '380009',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    url: siteUrl,
    openingHours: 'Mo-Sa 09:30-18:30',
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  authorName = 'CA Puneet Gupta',
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgassociates.in';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Senior Partner & Managing CA',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.firmName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}
