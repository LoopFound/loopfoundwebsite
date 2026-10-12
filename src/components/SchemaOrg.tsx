import { Helmet } from "react-helmet-async";
import { teamMembers } from "@/data/team";

const personReference = (member: (typeof teamMembers)[number]) => ({
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  url: `https://www.loopfound.in/${member.slug}`,
  sameAs: member.socials.linkedin ? [member.socials.linkedin] : [],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Loop Found",
  url: "https://www.loopfound.in",
  logo: "https://www.loopfound.in/images/loopfound-logo.jpg",
  image: "https://www.loopfound.in/images/loopfound-logo.jpg",
  description: "Loop Found is a web development agency that designs and builds conversion-focused websites, custom UI/UX, and web applications for growing businesses.",
  telephone: "+91-6379586015",
  email: ["team@loopfound.in", "teamloopfound@gmail.com"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://www.loopfound.in/contact",
    email: ["team@loopfound.in", "teamloopfound@gmail.com"],
    telephone: "+91-6379586015",
  },
  sameAs: ["https://www.instagram.com/teamloopfound"],
  founder: teamMembers
    .filter((member) => member.role.includes("Founder"))
    .map(personReference),
  employee: teamMembers
    .filter((member) => !member.role.includes("Founder"))
    .map(personReference),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design & UI/UX",
          description: "Clear, memorable website designs that make the right first impression and drive user conversions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Responsive, fast, and maintainable digital experiences built with modern frameworks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity",
          description: "Visual systems and brand identity that make a growing business recognisable and trustworthy.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integrations & Analytics",
          description: "Connecting CRM, booking tools, and analytics tools aligned with business goals.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Loop Found",
  url: "https://www.loopfound.in",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the deadlines for creating a website from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If it's a single-page site, we usually complete it within 20 days. However, deadlines may vary depending on the scope of work and the complexity of the website.",
      },
    },
    {
      "@type": "Question",
      name: "Will our team be able to easily update the site down the road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. We build websites so you can easily edit the content without interfering with the code or layout.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing systems like CRM and analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, no problem. We can integrate the site with the external systems you need: from analytics (Facebook, Google) to CRM systems or any other tools you use.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide 1 month of technical warranty support, ensuring the site and integrations function smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The price for a turnkey website depends on the scope and complexity. Contact us for a free consultation and we'll provide a detailed quote tailored to your project.",
      },
    },
  ],
};

export const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
  </Helmet>
);

export const FAQSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
  </Helmet>
);
