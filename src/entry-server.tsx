import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppContent } from "./App";
import { canonicalRoutes } from "./data/seoPages";

export const routes = canonicalRoutes;

export const render = (url: string) => {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>,
  );

  if (!helmetContext.helmet) throw new Error("Helmet failed to collect prerender metadata.");
  return { html, helmet: helmetContext.helmet };
};
