import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useCallback, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Referral from "./pages/Referral";
import Sitemap from "./pages/Sitemap";
import Legal from "./pages/Legal";
import MemberProfile from "./pages/MemberProfile";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import NotFound from "./pages/NotFound";
import { OrganizationSchema } from "./components/SchemaOrg";
import AnalyticsConsent from "./components/AnalyticsConsent";

const queryClient = new QueryClient();

export const AppContent = () => {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const handleAnalyticsConsent = useCallback((granted: boolean) => setAnalyticsConsent(granted), []);

  return <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OrganizationSchema />
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
              <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
              <Route path="/projects/:projectSlug" element={<ProjectCaseStudy />} />
              <Route path="/:memberSlug" element={<MemberProfile />} />
              <Route path="*" element={<NotFound />} />
        </Routes>
        {import.meta.env.PROD && analyticsConsent ? <><Analytics /><SpeedInsights /></> : null}
        <AnalyticsConsent onChange={handleAnalyticsConsent} />
      </TooltipProvider>
    </QueryClientProvider>;
};

const App = () => <HelmetProvider><BrowserRouter><AppContent /></BrowserRouter></HelmetProvider>;

export default App;
