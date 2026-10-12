export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  highlights: string[];
}

export interface Credential {
  name: string;
  year?: number;
  link: string | null;
}

export interface Education {
  degree: string;
  institution: string;
  link: string | null;
}

export const resume = {
  name: "Vance E. Braziel",
  title: "Software Engineer & IT Specialist",
  tagline:
    "Two decades keeping the fleet's systems online — now shipping software across the galaxy of the modern web.",
  location: "Jacksonville, FL",
  email: "vbraziel@hotmail.com",
  social: {
    github: { url: "https://github.com/vbraziel", label: "GitHub" },
    linkedin: {
      url: "https://www.linkedin.com/in/vance-braziel-saios",
      label: "LinkedIn",
    },
  },
  summary:
    "Military veteran with 20 years in Information Systems Technology, now a software developer at Georgia Southern University while finishing a B.S. in Information Technology with an emphasis in Data and AI. Background spans data APIs, OWASP security, PWA design, microservice architecture, Lean 6 Sigma, and multi-cloud platforms.",
  stats: [
    { value: "20+", label: "Years in IT" },
    { value: "USN", label: "Veteran" },
    { value: "4", label: "Cloud Platforms" },
    { value: "B.S.", label: "In Progress" },
  ],
  skills: [
    {
      category: "Cloud",
      items: ["Amazon AWS", "MS Azure", "Google Cloud", "Oracle Cloud"],
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "C++"],
    },
    { category: "APIs & Protocols", items: ["REST", "SOAP", "HTTP/2"] },
    {
      category: "Tools & DevOps",
      items: ["Docker", "Git", "SVN", "Postman", "VS Code", "JetBrains"],
    },
    { category: "Design", items: ["Adobe XD", "Affinity Designer"] },
    {
      category: "Data",
      items: ["HeidiSQL", "SQL", "Data Mining", "ETL Pipelines"],
    },
    {
      category: "Security",
      items: ["OWASP", "CompTIA Security+", "Network Security"],
    },
  ] as SkillGroup[],
  experience: [
    {
      role: "Software Developer",
      org: "Georgia Southern University",
      location: "Statesboro, GA",
      start: "2024",
      end: "Present",
      current: true,
      summary:
        "Software developer at Georgia Southern University while completing a B.S. in Information Technology with an emphasis in Data and AI.",
      highlights: [],
    },
    {
      role: "Software Developer",
      org: "Analytic Solutions (ANSOL) Inc.",
      location: "San Diego, CA",
      start: "Jul 2021",
      end: "Feb 2022",
      current: false,
      summary:
        "Developed for a flagship SPA delivering analytics for US Navy fleet maintenance, spending, and product lifecycle management.",
      highlights: [
        "Built SharePoint-hosted SPA with role-based access integrating a suite of internal tools.",
        "Daily data mining from REST endpoints — processed into CSVs consumed by production SPAs.",
        "Implemented custom queue data structure against the SharePoint users and permissions API.",
        "Extensive HTML5 Canvas API work for rich front-end data visualization.",
      ],
    },
    {
      role: "IT Manager",
      org: "United States Navy",
      location: "Various",
      start: "Jan 2014",
      end: "Jul 2021",
      current: false,
      summary:
        "Managed IT/Analytics departments ranging from 15 to 100 personnel across multiple commands.",
      highlights: [
        "Served as assistant department head for Training Analytics (12 months).",
        "Led full restoration of a 100-client network post-power outage; authored PowerShell/Bash runbooks for future resilience.",
        "Managed communications network infrastructure and streaming services for a 1,200-client organization.",
        "Assistant plans and policy analyst for distributed information systems spanning ~50 organizations.",
      ],
    },
    {
      role: "IT Specialist",
      org: "United States Navy",
      location: "Various",
      start: "Jan 2001",
      end: "Dec 2013",
      current: false,
      summary:
        "Information Systems Technician — advanced from apprentice through journeyman to leading petty officer.",
      highlights: [
        "IT System/Database Operator for a Naval Submarine Network.",
        "Administered shipboard communications infrastructure; authored custom shell scripts for daily operations.",
        "Led a team ensuring continuous uptime of IT services across multiple Naval organizations.",
      ],
    },
  ] as ExperienceEntry[],
  credentials: {
    education: [
      {
        degree:
          "Bachelor of Science — Information Technology, Data & AI Emphasis (In Progress)",
        institution: "Georgia Southern University",
        link: null,
      },
      {
        degree: "Associate of Applied Science — Computing Technology",
        institution: "2019",
        link: "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:327557ed-fb61-3c4f-98b2-ce49c6757573",
      },
    ] as Education[],
    certifications: [
      {
        name: "CompTIA Security+ ce",
        year: 2016,
        link: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:a2554e32-69a0-36b3-8046-d9bca955432b",
      },
      {
        name: "HTML Certification",
        year: 2017,
        link: "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:abce2301-5fa0-3013-98d7-c8ef9e3f852c",
      },
      {
        name: "C++ Certification",
        year: 2017,
        link: "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:d92fe413-faf8-386d-9b63-3a7b5a924919",
      },
      {
        name: "JavaScript Certification",
        year: 2017,
        link: "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e1314577-4d03-3864-9094-8db33be7cc7f",
      },
    ] as Credential[],
  },
} as const;

/** Builds a schema.org Person JSON-LD object from the resume data for machine consumers. */
export function buildJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    jobTitle: resume.title,
    description: resume.summary,
    email: `mailto:${resume.email}`,
    url: "https://vbraziel.github.io/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US",
    },
    sameAs: [resume.social.github.url, resume.social.linkedin.url],
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Georgia Southern University",
    },
    knowsAbout: resume.skills.flatMap((g) => g.items),
    hasOccupation: resume.experience.map((e) => ({
      "@type": "Occupation",
      name: e.role,
      description: e.summary,
      occupationLocation: { "@type": "Place", name: e.location },
    })),
    hasCredential: [
      ...resume.credentials.education.map((ed) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: ed.degree,
      })),
      ...resume.credentials.certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: c.name,
        ...(c.year ? { dateCreated: String(c.year) } : {}),
      })),
    ],
  };
}
