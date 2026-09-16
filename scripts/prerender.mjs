import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = "https://www.loopfound.in";
const socialImage = `${siteUrl}/images/loopfound-logo.jpg`;
const routes = [
  { path: "/", title: "Loop Found — Web Development Agency", description: "Loop Found creates strategic, conversion-focused websites for growing businesses." },
  { path: "/about", title: "About Loop Found — Our Story & Mission", description: "Meet Loop Found, a web studio building clear, memorable websites for growing businesses." },
  { path: "/services", title: "Web Development Services — Loop Found", description: "Web design, development, branding, SEO, and integrations by Loop Found." },
  { path: "/projects", title: "Our Projects & Portfolio — Loop Found", description: "Explore recent website launches and digital experiences from Loop Found." },
  { path: "/contact", title: "Contact Loop Found — Get a Free Consultation", description: "Contact Loop Found to discuss your next website project." },
  { path: "/referral", title: "Refer & Earn — Loop Found Student Referral", description: "Join Loop Found’s referral program and earn from successful introductions." },
  { path: "/privacy", title: "Privacy Notice — Loop Found", description: "How Loop Found handles website analytics and enquiry information." },
  { path: "/terms", title: "Website Terms — Loop Found", description: "Terms for use of the Loop Found website." },
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
