export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface SiteConfig {
  firmName: string;
  subtitle: string;
  tagline: string;
  registration: string;
  principal: {
    name: string;
    designation: string;
    qualification: string;
    membershipNo: string;
    experience: string;
    bio: string;
  };
  establishedYear: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    googleMapsUrl?: string;
  };
  social: {
    linkedin: string;
    x: string;
  };
  navigation: {
    main: NavItem[];
    footer: {
      services: NavItem[];
      knowledge: NavItem[];
      quickLinks: NavItem[];
    };
  };
  icaiDisclaimer: string;
}

export const siteConfig: SiteConfig = {
  firmName: "S.G. & Associates",
  subtitle: "Chartered Accountants",
  tagline: "Integrity. Precision. Excellence.",
  registration: "ICAI Firm Registration No. 100001W",
  principal: {
    name: "CA Saatvik Gupta",
    designation: "Proprietor & Principal CA",
    qualification: "B.Com, FCA, DISA (ICAI)",
    membershipNo: "ICAI Mem. No. 123456",
    experience: "14+ Years",
    bio: "CA Saatvik Gupta is the Proprietor and Principal CA at S.G. & Associates. With over 14 years of professional practice in corporate tax compliance, statutory audits, GST advisory, and business structure planning, he oversees all professional engagements in accordance with ICAI standards and statutory guidelines."
  },
  establishedYear: "2012",
  contact: {
    address: "Suite 401, Business Tower, MG Road, Ahmedabad, Gujarat 380009",
    phone: "+91 79 2658 9000",
    email: "contact@sgassociates.in",
    workingHours: "Mon - Sat: 9:30 AM - 6:30 PM IST"
  },
  social: {
    linkedin: "https://www.linkedin.com/company/sg-associates-ca",
    x: "https://x.com/sgassociates_ca"
  },
  navigation: {
    main: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Team", href: "/team" },
      { title: "Services", href: "/services" },
      { title: "Industries", href: "/industries" },
      {
        title: "Knowledge Centre",
        href: "/knowledge-centre",
        children: [
          { title: "Blog", href: "/knowledge-centre/blog", description: "In-depth technical articles on tax and compliance" },
          { title: "Publications", href: "/knowledge-centre/publications", description: "Downloadable whitepapers and compliance guides" },
          { title: "Tax Updates", href: "/knowledge-centre/tax-updates", description: "Direct tax notifications and statutory amendments" },
          { title: "GST Updates", href: "/knowledge-centre/gst-updates", description: "Indirect tax alerts, circulars, and filing notices" }
        ]
      },
      { title: "Webinars", href: "/webinars" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" }
    ],
    footer: {
      services: [
        { title: "Direct Tax Compliance", href: "/services/income-tax" },
        { title: "GST Advisory & Filing", href: "/services/gst" },
        { title: "Statutory Audit", href: "/services/statutory-audit" },
        { title: "Internal Audit", href: "/services/internal-audit" },
        { title: "Company Law Compliance", href: "/services/company-law" },
        { title: "Startup Financial Advisory", href: "/services/startup-advisory" },
        { title: "MSME Advisory", href: "/services/msme-advisory" },
        { title: "Virtual CFO Services", href: "/services/virtual-cfo" },
        { title: "Business Valuation", href: "/services/business-valuation" },
        { title: "NRI Taxation", href: "/services/nri-taxation" }
      ],
      knowledge: [
        { title: "Articles & Blog", href: "/knowledge-centre/blog" },
        { title: "Technical Publications", href: "/knowledge-centre/publications" },
        { title: "Income Tax Updates", href: "/knowledge-centre/tax-updates" },
        { title: "GST Alerts", href: "/knowledge-centre/gst-updates" },
        { title: "Webinars & Seminars", href: "/webinars" }
      ],
      quickLinks: [
        { title: "About Firm", href: "/about" },
        { title: "Principal & Team", href: "/team" },
        { title: "Industries Served", href: "/industries" },
        { title: "Careers", href: "/careers" },
        { title: "Contact Us", href: "/contact" }
      ]
    }
  },
  icaiDisclaimer: "This website is designed strictly in compliance with the Code of Ethics and Guidelines issued by The Institute of Chartered Accountants of India (ICAI). The information provided herein is for general informational and educational purposes only and does not constitute professional advice or solicitation."
};

export default siteConfig;
