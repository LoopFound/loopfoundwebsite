import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = "https://www.loopfound.in";
const socialImage = `${siteUrl}/images/loopfound-logo.jpg`;
const routes = [
  { path: "/", title: "Loop Found | Web Development Agency & Custom Web Design", description: "Loop Found is a web development agency building fast, responsive, conversion-focused websites, custom UI/UX design, and brand systems for growing businesses." },
  { path: "/about", title: "About Loop Found | Custom Web Development & Design Studio", description: "Learn about Loop Found — a modern web studio pairing strategic design with clean code to help growing businesses build an impactful web presence." },
  { path: "/services", title: "Web Development & UI/UX Design Services | Loop Found", description: "Explore Loop Found’s web services: custom web design, responsive frontend development, brand identity systems, SEO optimization, and CRM/analytics integrations." },
  { path: "/projects", title: "Web Design & Development Portfolio | Loop Found Projects", description: "View selected client projects, institutional websites, education platforms, and custom digital experiences designed and built by Loop Found." },
  { path: "/contact", title: "Contact Loop Found | Get a Free Web Consultation", description: "Get in touch with Loop Found to discuss your web development, custom design, or re-design project. Contact our team for a free consultation today." },
  { path: "/referral", title: "Web Design Referral Program | Refer & Earn with Loop Found", description: "Introduce clients to Loop Found and earn cash rewards upon project launch. Join our client and student web development referral program today." },
  { path: "/sitemap", title: "HTML Sitemap | Loop Found Web Agency Directory", description: "Browse the complete directory of pages, services, portfolio projects, and resources on Loop Found." },
  { path: "/privacy", title: "Privacy Notice — Loop Found", description: "How Loop Found handles website analytics and enquiry information." },
  { path: "/terms", title: "Website Terms — Loop Found", description: "Terms for use of the Loop Found website." },
  { path: "/Gopinath", title: "Gopinath — Co-Founder & CMO at Loop Found", description: "Explore skills, growth strategies, and portfolio of Gopinath, Co-Founder & CMO at Loop Found." },
  { path: "/gopinath", title: "Gopinath — Co-Founder & CMO at Loop Found", description: "Explore skills, growth strategies, and portfolio of Gopinath, Co-Founder & CMO at Loop Found." },
  { path: "/Pranith", title: "Pranith Vincent — CEO & Founder at Loop Found", description: "Explore skills, product architecture, and portfolio of Pranith Vincent, CEO & Founder at Loop Found." },
  { path: "/pranith", title: "Pranith Vincent — CEO & Founder at Loop Found", description: "Explore skills, product architecture, and portfolio of Pranith Vincent, CEO & Founder at Loop Found." },
  { path: "/SaiCharan", title: "Sai Charan — Backend Developer at Loop Found", description: "Explore skills, serverless systems, and backend architecture of Sai Charan at Loop Found." },
  { path: "/saicharan", title: "Sai Charan — Backend Developer at Loop Found", description: "Explore skills, serverless systems, and backend architecture of Sai Charan at Loop Found." },
];

const meta = (route) => {
  const url = `${siteUrl}${route.path}`;
  return `<title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1053" />
    <meta property="og:image:alt" content="Loop Found web development agency" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${socialImage}" />
    <meta name="twitter:image:alt" content="Loop Found web development agency" />`;
};

const dist = resolve("dist");
const appShell = await readFile(resolve(dist, "index.html"), "utf8");

for (const route of routes) {
  const html = appShell.replace("</head>", `    ${meta(route)}\n  </head>`);
  const target = route.path === "/" ? resolve(dist, "index.html") : resolve(dist, route.path.slice(1), "index.html");
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, html);
}

const notFound = appShell.replace("</head>", `    ${meta({ path: "/404", title: "Page Not Found — Loop Found", description: "The page you requested could not be found." })}\n    <meta name="robots" content="noindex,follow" />\n  </head>`);
await writeFile(resolve(dist, "404.html"), notFound);
