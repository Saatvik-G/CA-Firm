import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import Hero from '@/components/home/Hero';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PracticeAreas from '@/components/home/PracticeAreas';
import IndustryExpertise from '@/components/home/IndustryExpertise';
import OurProcess from '@/components/home/OurProcess';
import PrincipalProfile from '@/components/home/PrincipalProfile';
import KnowledgePreview from '@/components/home/KnowledgePreview';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'Chartered Accountants in Panchkula | Anil Puneet and Associates',
  description: 'Independent Chartered Accountant Partnership Firm led by CA Puneet Gupta (FCA). Specializing in corporate tax compliance, statutory audit, GST filing, and business valuation.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIndicators />
      <WhyChooseUs />
      <PracticeAreas />
      <IndustryExpertise />
      <OurProcess />
      <PrincipalProfile />
      <KnowledgePreview />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
