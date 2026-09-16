import { Analytics } from "@vercel/analytics/react";
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
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import MemberProfile from "./pages/MemberProfile";
import { OrganizationSchema } from "./components/SchemaOrg";
import AnalyticsConsent from "./components/AnalyticsConsent";

const queryClient = new QueryClient();

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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/privacy" element={<Legal page="privacy" />} />
            <Route path="/terms" element={<Legal page="terms" />} />
            <Route path="/:memberSlug" element={<MemberProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {import.meta.env.PROD && analyticsConsent ? <Analytics /> : null}
        <AnalyticsConsent onChange={handleAnalyticsConsent} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>;
};

export default App;
