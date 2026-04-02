import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Loop Found",
  url: "https://www.loopfound.in",
  logo: "https://www.loopfound.in/images/loopfound-logo.jpg",
  description: "Loop Found is a web development agency that designs websites that sell, convert, and last.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://www.loopfound.in/contact",
  },
  sameAs: [],
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
