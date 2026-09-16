import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense, useCallback, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { OrganizationSchema } from "./components/SchemaOrg";
import AnalyticsConsent from "./components/AnalyticsConsent";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Referral = lazy(() => import("./pages/Referral"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Legal = lazy(() => import("./pages/Legal"));
const MemberProfile = lazy(() => import("./pages/MemberProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-[#f7f7f4] flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#151515] border-t-transparent" />
  </div>
);

const App = () => {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const handleAnalyticsConsent = useCallback((granted: boolean) => setAnalyticsConsent(granted), []);

  return <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OrganizationSchema />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/privacy" element={<Legal page="privacy" />} />
              <Route path="/terms" element={<Legal page="terms" />} />
              <Route path="/:memberSlug" element={<MemberProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        {import.meta.env.PROD && analyticsConsent ? <Analytics /> : null}
        <AnalyticsConsent onChange={handleAnalyticsConsent} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>;
};

export default App;
