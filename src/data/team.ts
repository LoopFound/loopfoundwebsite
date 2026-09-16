export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface MemberProject {
  name: string;
  role: string;
  description: string;
  type: string;
  link?: string;
}

export interface TeamMember {
  slug: string;
  aliases: string[];
  name: string;
  role: string;
  kicker: string;
  tagline: string;
  bio: string[];
  quote: string;
  location: string;
  experienceYears: string;
  stats: { label: string; value: string }[];
  skillCategories: SkillCategory[];
  responsibilities: string[];
  featuredProjects: MemberProject[];
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    slug: "Gopinath",
    aliases: ["gopinath", "Gopinath", "gopi"],
    name: "Gopinath",
    role: "Co-Founder & CMO",
    kicker: "Growth & Brand Strategy",
    tagline: "Shapes how good work meets the people it is made for.",
    location: "India",
    experienceYears: "3+ Years",
    bio: [
      "Strategic marketing mind and Co-Founder at Loop Found. Passionate about turning high-craft websites into high-converting revenue engines.",
      "Specializes in connecting brands with the right audience through sharp narrative design, conversion rate optimization (CRO), search engine positioning, and data-driven client acquisition campaigns.",
      "Believes that great design only fulfills its true purpose when it builds trust, inspires action, and drives measurable business growth."
    ],
    quote: "We don't build websites to sit quietly online. We build them to command attention, earn trust, and convert visitors into loyal clients.",
    stats: [
      { label: "Role", value: "Co-Founder & CMO" },
      { label: "Focus", value: "Growth & CRO" },
      { label: "Strategy", value: "Data-Driven" },
      { label: "Impact", value: "Scale & Trust" }
    ],
    skillCategories: [
      {
        title: "Growth & Marketing Strategy",
        skills: [
          "Conversion Rate Optimization (CRO)",
          "Brand Positioning & Identity",
          "Go-to-Market Strategy",
          "User Funnel Architecture",
          "Competitor & Market Analysis",
          "Client Acquisition Strategy"
        ]
      },
      {
        title: "Search & Visibility",
        skills: [
          "Technical & Content SEO",
          "Information Architecture",
          "Keyword & Intent Mapping",
          "Performance Analytics",
          "Google Search Console",
          "Core Web Vitals Impact"
        ]
      },
      {
        title: "Creative Direction & Narrative",
        skills: [
          "Digital Storytelling",
          "Value Proposition Crafting",
          "Copywriting & Content Strategy",
          "Brand Narrative Alignment",
          "Client Discovery & Scoping"
        ]
      },
      {
        title: "Tools & Analytics",
        skills: [
          "Google Analytics 4",
          "Vercel Analytics",
          "Hotjar & Heatmapping",
          "Figma",
          "SEO Audit Tools",
          "CRM Systems"
        ]
      }
    ],
    responsibilities: [
      "Spearheading Loop Found's business development, brand marketing, and market positioning.",
      "Leading client discovery to map business objectives into strategic website structures.",
      "Analyzing user flows and conversion funnels to ensure optimal ROI for client launches.",
      "Overseeing brand messaging and visual coherence across digital touchpoints."
    ],
    featuredProjects: [
      {
        name: "Loop Found",
        role: "Brand Architecture & Marketing Strategy",
        type: "Agency Platform",
        description: "Shaped brand narrative, market positioning, and referral mechanism for Loop Found.",
        link: "https://www.loopfound.in"
      },
      {
        name: "DHC",
        role: "Growth & Conversion Strategy",
        type: "Healthcare / Wellness",
        description: "Optimized client trust indicators, appointment booking flows, and search positioning.",
        link: "https://dhc.org.in"
      },
      {
        name: "Haaniya",
        role: "E-Commerce Narrative & UX Strategy",
        type: "Apparel Brand",
        description: "Streamlined storefront visual hierarchy and conversion-centric product discovery.",
        link: "https://haaniya.in"
      },
      {
        name: "INAHS",
        role: "Institutional Positioning",
        type: "Education & Academy",
        description: "Structured program landing experiences to maximize admissions and enquiries.",
        link: "https://inahs.org"
      }
    ],
    socials: {
      email: "contact@loopfound.in",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  },
  {
    slug: "Pranith",
    aliases: ["pranith", "Pranith", "pranith-vincent", "pranithvincent"],
    name: "Pranith Vincent",
    role: "CEO & Founder",
    kicker: "Product & Engineering Leadership",
    tagline: "Leads strategy and the long view behind every build.",
    location: "India",
    experienceYears: "4+ Years",
    bio: [
      "Visionary leader and founder driving Loop Found's mission to craft digital experiences that transform modern businesses.",
      "Combines sharp product strategy, modern frontend engineering, and architectural discipline to build performant, visually unforgettable web applications.",
      "Obsessed with fluid interactions, typography, clean codebases, and web applications that solve real operational challenges."
    ],
    quote: "Good design is never accidental. Every millisecond of interaction, every line of typography, and every transition must serve a deliberate purpose.",
    stats: [
      { label: "Role", value: "CEO & Founder" },
      { label: "Core", value: "Architecture & UI" },
      { label: "Stack", value: "React / Vite / TS" },
      { label: "Standard", value: "High Craft" }
    ],
    skillCategories: [
      {
        title: "Frontend Engineering & Architecture",
        skills: [
          "React & Next.js",
          "TypeScript",
          "Modern Vanilla & Tailwind CSS",
          "GSAP & Fluid Motion Design",
          "State Management & React Query",
          "Responsive & Adaptive Layouts"
        ]
      },
      {
        title: "UI/UX & Product Design",
        skills: [
          "Design Systems & Tokens",
          "High-Fidelity Wireframing",
          "Micro-interactions & UX Polish",
          "Accessibility (WCAG 2.1)",
          "Typography & Editorial Layouts",
          "Figma to Code Fidelity"
        ]
      },
      {
        title: "Leadership & Delivery",
        skills: [
          "End-to-End Project Scoping",
          "Technical Architecture Reviews",
          "Code Quality & Performance Tuning",
          "Client Consultation & Roadmapping",
          "Agile Iteration & Deployment"
        ]
      },
      {
        title: "Web Performance & Tooling",
        skills: [
          "Vite & Build Optimization",
          "Core Web Vitals Tuning (LCP/INP)",
          "Static Prerendering (SSG/ISR)",
          "Git / GitHub Workflows",
          "Vercel Deployment Pipelines"
        ]
      }
    ],
    responsibilities: [
      "Setting technical standards, UI/UX philosophy, and creative direction across all Loop Found builds.",
      "Architecting core frontend experiences, motion choreographies, and component systems.",
      "Directing project discovery, scoping architectural requirements, and ensuring on-time delivery.",
      "Guiding engineering talent and steering long-term company product roadmap."
    ],
    featuredProjects: [
      {
        name: "Loop Found Agency",
        role: "Lead Architect & UI Designer",
        type: "Agency Platform",
        description: "Created high-fidelity editorial web experience with 3D canvas card motion and GSAP scrub.",
        link: "https://www.loopfound.in"
      },
      {
        name: "DHC",
        role: "Frontend Engineering & Design System",
        type: "Healthcare / Medical",
        description: "Engineered responsive, accessible portal for healthcare consultations.",
        link: "https://dhc.org.in"
      },
      {
        name: "Haaniya",
        role: "Storefront Development",
        type: "E-Commerce",
        description: "Built high-performance catalog and shopping experience with custom interactive galleries.",
        link: "https://haaniya.in"
      },
      {
        name: "INAHS",
        role: "Full-Stack Web Build",
        type: "Institutional Website",
        description: "Designed and developed comprehensive institutional portal with dynamic course catalogs.",
        link: "https://inahs.org"
      }
    ],
    socials: {
      email: "contact@loopfound.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    slug: "SaiCharan",
    aliases: ["saicharan", "SaiCharan", "sai-charan", "sai"],
    name: "Sai Charan",
    role: "Backend Developer",
    kicker: "Systems & Cloud Engineering",
    tagline: "Builds reliable systems and integrations behind the experiences people use.",
    location: "India",
    experienceYears: "3+ Years",
    bio: [
      "Core backend engineer at Loop Found focused on rock-solid server architectures, data models, and high-availability cloud services.",
      "Bridges customer-facing web apps with robust serverless workflows, database transactions, third-party APIs, and secure authentication flows.",
      "Dedicated to speed, security, data integrity, and building backend foundations that scale effortlessly under heavy traffic."
    ],
    quote: "The best backend systems are invisible—they work instantaneously, never fail under load, and give users complete peace of mind.",
    stats: [
      { label: "Role", value: "Backend Developer" },
      { label: "Systems", value: "APIs & Databases" },
      { label: "Cloud", value: "Serverless & Edge" },
      { label: "Uptime", value: "99.9% Reliability" }
    ],
    skillCategories: [
      {
        title: "Backend & Systems Engineering",
        skills: [
          "Node.js & Express / NestJS",
          "RESTful API Design & Best Practices",
          "GraphQL Schema Design",
          "Serverless Functions & Edge Runtimes",
          "Microservices & Event-Driven Architecture",
          "Webhooks & Integration Pipelines"
        ]
      },
      {
        title: "Databases & Data Modeling",
        skills: [
          "PostgreSQL & Relational Schema Design",
          "MongoDB & Document Stores",
          "Redis In-Memory Caching",
          "Prisma & TypeORM",
          "Data Migration & Seeding",
          "Indexing & Query Optimization"
        ]
      },
      {
        title: "Security & Cloud Infrastructure",
        skills: [
          "Authentication (OAuth, JWT, Session)",
          "CORS & Security Headers",
          "API Rate Limiting & DDOS Mitigation",
          "Cloud Storage & CDN Asset Delivery",
          "Vercel Serverless & Docker Basics",
          "Environment & Secrets Management"
        ]
      },
      {
        title: "Testing & DevOps",
        skills: [
          "Automated API Integration Tests",
          "CI/CD Pipeline Configuration",
          "Logging & Error Monitoring",
          "Performance Profiling",
          "Database Backup & Recovery"
        ]
      }
    ],
    responsibilities: [
      "Designing and implementing secure, resilient API backends and data persistence layers.",
      "Configuring transactional email gateways, CRM syncs, and contact form handling.",
      "Tuning query speeds, cache invalidation, and data transfer efficiency.",
      "Securing application endpoints against common web vulnerabilities and brute force vectors."
    ],
    featuredProjects: [
      {
        name: "Loop Found Backend API",
        role: "Backend Architect",
        type: "Serverless & Cloud",
        description: "Architected secure contact delivery and lead notifications with spam prevention.",
        link: "https://www.loopfound.in/contact"
      },
      {
        name: "DHC Systems",
        role: "Database & Patient Flow Architecture",
        type: "Healthcare Services",
        description: "Configured secure appointment handling and database synchronization.",
        link: "https://dhc.org.in"
      },
      {
        name: "Haaniya Order & Inventory Sync",
        role: "Integration Engineer",
        type: "E-Commerce",
        description: "Built inventory sync integrations and payment webhook handlers.",
        link: "https://haaniya.in"
      },
      {
        name: "SVS Group Platform",
        role: "API Integration & Infrastructure",
        type: "Corporate Platform",
        description: "Engineered scalable corporate content distribution and multi-department directory.",
        link: "https://svsgroup.org"
      }
    ],
    socials: {
      email: "contact@loopfound.in",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return teamMembers.find(
    (m) =>
      m.slug.toLowerCase() === normalized ||
      m.aliases.some((alias) => alias.toLowerCase() === normalized)
  );
}
