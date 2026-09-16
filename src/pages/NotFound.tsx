import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => <main className="grid min-h-screen place-items-center bg-[#151515] p-6 text-[#f7f7f4]">
  <SEOHead title="Page Not Found — Loop Found" description="The page you requested could not be found." path="/404" noIndex />
  <div className="text-center">
    <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-primary">Wrong turn</p>
    <h1 className="adko-display text-[clamp(9rem,27vw,26rem)] leading-[.7]">404</h1>
    <p className="mx-auto mt-10 max-w-md text-lg leading-relaxed text-[#f7f7f4]/70">This page moved, vanished, or was never here.</p>
    <Link to="/" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-primary-foreground">Back home <ArrowUpRight size={17} /></Link>
  </div>
</main>;

export default NotFound;
