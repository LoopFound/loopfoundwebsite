import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { projectPages } from "@/data/seoPages";

const ProjectCaseStudy = () => {
  const { projectSlug } = useParams();
  const project = projectPages.find((item) => item.slug === projectSlug);
  if (!project) return <Navigate to="/404" replace />;
  const path = `/projects/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name} website`,
    description: project.summary,
    url: `https://www.loopfound.in${path}`,
    genre: project.type,
    creator: { "@type": "Organization", name: "Loop Found", url: "https://www.loopfound.in" },
    about: project.services.join(", "),
    sameAs: project.liveUrl,
  };

  return <div className="min-h-screen bg-[#151515] text-[#f7f7f4]">
    <SEOHead title={project.title} description={project.description} path={path} type="article" />
    <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.name, path }]} />
    <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <Navbar />
    <main id="main-content" className="pt-32">
      <section className="container px-4 pb-20 pt-10 sm:px-6 md:pb-28">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]"><ArrowLeft size={15} /> All projects</Link>
        <p className="mt-16 text-xs font-bold uppercase tracking-[.22em] text-primary">{project.type}</p>
        <h1 className="adko-display mt-5 max-w-6xl text-[clamp(5rem,13vw,12rem)] leading-[.78] tracking-[-.05em]">{project.name}</h1>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#f7f7f4]/70 md:text-2xl">{project.summary}</p>
      </section>
      <section className="bg-[#f7f7f4] px-4 py-20 text-[#151515] sm:px-6 md:py-28"><div className="container grid gap-12 md:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Project scope</p><h2 className="adko-display mt-4 text-5xl">WHAT WE WORKED ON.</h2></div><ul className="grid gap-3">{project.services.map((service) => <li key={service} className="border-b border-black/15 py-5 text-xl font-bold">{service}</li>)}</ul></div></section>
      <section className="container px-4 py-20 sm:px-6 md:py-28"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground">Visit live website <ArrowUpRight size={18} /></a></section>
    </main>
    <Footer />
  </div>;
};

export default ProjectCaseStudy;
