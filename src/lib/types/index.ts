export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface NavDropdownGroup {
  id: string;
  category: string;
  items: NavItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  icon?: string;
  features?: string[];
  scopeOfWork?: string[];
  deliverables?: string[];
  processSteps?: ProcessStep[];
  faqs?: FAQItem[];
}

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  keyComplianceAreas?: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  colSpan?: 'full' | 'half' | 'third' | 'two-thirds';
  rowSpan?: 'normal' | 'tall';
  icon?: string;
  accentColor?: string;
}

export interface TrustStat {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface Qualification {
  degree: string;
  institution: string;
  year?: string;
}

export interface MembershipInfo {
  icaiMembershipNo: string;
  firmRegistrationNo: string;
  fellowOrAssociate: 'FCA' | 'ACA';
  copStatus: string;
  yearOfEnrollment: string;
}

export interface PrincipalInfo {
  id: string;
  name: string;
  title: string;
  membershipInfo: MembershipInfo;
  bio: string;
  qualifications: Qualification[];
  specializations: string[];
  email: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  category: string;
  tags?: string[];
  toc?: { id: string; text: string; level: number }[];
}

export interface UpdatePost {
  id: string;
  title: string;
  slug: string;
  statutoryReference: string;
  effectiveDate: string;
  publishedAt: string;
  summary: string;
  impactLevel: 'High' | 'Medium' | 'Low';
  category: 'GST' | 'Income Tax' | 'Corporate Law' | 'Audit' | 'RBI & FEMA';
  content: string;
  keyActionPoints: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
}
