# Anil Puneet and Associates — Chartered Accountants Website

A modern, production-grade Next.js App Router web application built for **Anil Puneet and Associates, Chartered Accountants** (Partnership Firm led by **CA Puneet Gupta**, B.Com, CA).

---

## 🏛️ Firm Profile & ICAI Compliance Information

- **Firm Name:** Anil Puneet and Associates, Chartered Accountants
- **Sole Senior Partner / Principal:** CA Puneet Gupta
- **Qualifications:** B.Com, CA
- **ICAI Membership No:** 095435
- **Firm Registration No (FRN):** 016890N
- **Established Year:** 2000
- **Head Office:** SCF 57, Level 2, Sector 8, Panchkula, Haryana
- **Contact:** +91 9815763749 | gupta.puneetca@gmail.com

> [!IMPORTANT]
> **Senior Partnership Compliance Notice**: In strict adherence to ICAI website guidelines and the Chartered Accountants Act, 1949, all references across the website use "Sole Senior Partner / Principal" — never "Partner".

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Custom Dark Mode (`@variant dark (&:where(.dark, .dark *));`)
- **Animation & Interactivity:** Framer Motion & Client-side state handling
- **SEO & Schema:** Custom OpenGraph metadata helpers (`src/lib/metadata.ts`) & JSON-LD Structured Data (`src/lib/structuredData.ts`)
- **Content Management:** JSON/MDX content files located in `src/content/` loaded via `src/lib/content.ts`

---

## 📂 Site Structure & Implemented Page Routes

### Core Pages
- `/` — **Home Page**: Hero, TrustIndicators, WhyChooseUs, PracticeAreas, IndustryExpertise, OurProcess, PrincipalProfile, KnowledgePreview, FAQSection, CTABanner.
- `/about` — **About Firm**: Practice overview, Partnership Firm background, firm mission, history timeline (2000-Present), principal profile.
- `/team` — **Team & Principal**: Featured Senior Partner CA spotlight (Mem #095435) with supervised Article Assistants and staff grid.
- `/services` — **Services Directory**: Category filterable practice grid (Direct Tax, Audit & Assurance, GST, Corporate Law, Valuation).
- `/services/[slug]` — **Dynamic Service Details**: Comprehensive service scope, step-by-step process, deliverables, and FAQs.
- `/industries` — **Industries Directory**: Specialization across Startups, Manufacturing, Healthcare, Real Estate, Export-Import, and Retail.
- `/industries/[slug]` — **Dynamic Industry Details**: Key sector challenges, tailored CA solutions, case studies, and relevant services.

### Knowledge Centre Hub
- `/knowledge` — **Knowledge Centre Main Hub**: Quick links to Blog, Publications, Tax Updates, and GST Updates.
- `/knowledge/blog` — **Technical Blog Directory**: Filterable list of technical tax articles with search functionality.
- `/knowledge/blog/[slug]` — **Dynamic Blog Post Reader**: In-depth tax analysis, author credentials, article JSON-LD.
- `/knowledge/publications` — **Publications & Manuals**: Whitepapers, Form 3CD audit manuals, downloadable PDF triggers.
- `/knowledge/tax-updates` & `[slug]` — **Direct Tax Alerts**: CBDT circular breakdowns, Section 197 updates.
- `/knowledge/gst-updates` & `[slug]` — **GST Alerts**: CBIC notifications, e-way bill blocking rules, GSTR-9C guidelines.
- `/webinars` — **Webinars & Events**: Upcoming live technical masterclasses and past workshop slides downloads.

### Practice Engagement & Legal
- `/careers` — **Careers & Articleship**: CA Intermediate cleared article assistant vacancies, work culture, direct application email.
- `/contact` — **Contact Page**: Interactive inquiry form, office location, interactive map placeholder, operating hours.
- `/privacy-policy`, `/terms`, `/disclaimer`, `/cookie-policy` — **Legal Pages**: Mandatory ICAI disclosures and client confidentiality guidelines.

---

## 🔍 SEO & Structured Data Features

- **Dynamic Metadata**: Every route generates custom titles, meta descriptions, canonical URLs, and OpenGraph tags using `constructMetadata`.
- **JSON-LD Schema Generators**:
  - `AccountingService` & `ProfessionalService` Organization Schema
  - `FAQPage` Schema for service & home FAQs
  - `BlogPosting` Article Schema
  - `BreadcrumbList` Schema
- **Dynamic Sitemap & Robots**: `src/app/sitemap.ts` automatically compiles all static & dynamic paths (`/services/*`, `/industries/*`, `/knowledge/blog/*`, etc.).

---

## 🚀 Development & Build Instructions

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Production Build
npm run build

# Start Production Server
npm run start
```

---

## 📜 ICAI Compliance Disclaimer

This website is designed strictly in compliance with the Code of Ethics and Guidelines issued by The Institute of Chartered Accountants of India (ICAI). The information provided herein is for general informational and educational purposes only and does not constitute professional advice or solicitation.
