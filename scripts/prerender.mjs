import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const siteUrl = "https://www.loopfound.in";
const dist = resolve("dist");
const serverBundle = resolve("dist-ssr/entry-server.js");
const { render, routes } = await import(pathToFileURL(serverBundle).href);
const template = await readFile(resolve(dist, "index.html"), "utf8");

const helmetMarkup = (helmet) => [
  helmet.title.toString(),
  helmet.priority?.toString() ?? "",
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.script.toString(),
].filter(Boolean).join("\n    ");

const renderPage = async (url, target) => {
  const { html, helmet } = render(url);
  const document = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace("</head>", `    ${helmetMarkup(helmet)}\n  </head>`);
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, document);
};

for (const route of routes) {
  const target = route === "/" ? resolve(dist, "index.html") : resolve(dist, route.slice(1), "index.html");
  await renderPage(route, target);
}

await renderPage("/404", resolve(dist, "404.html"));

const lastModified = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`).join("\n")}
</urlset>
`;
await writeFile(resolve(dist, "sitemap.xml"), sitemap);
await rm(resolve("dist-ssr"), { recursive: true, force: true });
