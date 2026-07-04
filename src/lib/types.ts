export * from './types/index';

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details?: string[];
}

export interface Deliverable {
  title: string;
  description: string;
}

export interface TrustStat {
  id?: string;
  label: string;
  value: string;
  subtext?: string;
  description?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopeOfWork: string[];
  process: ProcessStep[];
  deliverables: Deliverable[];
  faqs: FAQItem[];
  keyHighlights: string[];
  icon?: string;
  category?: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyChallenges: string[];
  tailoredSolutions: string[];
  relevantServices: string[]; // Slugs of relevant services
  caseStudy?: {
    title: string;
    context: string;
    approach: string;
    outcome: string;
  };
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  qualification: string;
  membershipNo?: string;
  experience: string;
  bio: string;
  isPrincipal: boolean;
  expertise: string[];
  email?: string;
  linkedin?: string;
}

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  date?: string;
  publishedAt?: string;
  author: string;
  readTime?: string;
  readingTime?: string;
  category: string;
  excerpt: string;
  tags?: string[];
  content?: string;
  toc?: { id: string; text: string; level: number }[];
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  fileSize: string;
  fileFormat: string;
  downloadUrl: string;
  category: string;
  topics: string[];
}

export interface TaxUpdate {
  slug: string;
  title: string;
  date: string;
  category: string;
  circularNo?: string;
  effectiveDate?: string;
  summary: string;
  tags: string[];
  content?: string;
}

export interface GSTUpdate {
  slug: string;
  title: string;
  date: string;
  category: string;
  notificationNo?: string;
  effectiveDate?: string;
  summary: string;
  tags: string[];
  content?: string;
}

export interface Webinar {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  speaker: string;
  speakerDesignation: string;
  status: "upcoming" | "past";
  registrationUrl?: string;
  recordingUrl?: string;
  presentationDeckUrl?: string;
  keyTakeaways: string[];
}

