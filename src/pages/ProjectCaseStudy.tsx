import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { projectPages } from "@/data/seoPages";
import { ORGANIZATION_ID } from "@/components/SchemaOrg";
import projectLoopFound from "@/assets/project-loopfound-1280.webp";
import projectHaaniya from "@/assets/project-haaniya-1280.webp";
import projectBrittos from "@/assets/project-brittos-1200.webp";
import projectDhc from "@/assets/project-dhc-1280.webp";

const projectImages: Record<string, string> = {
  "loop-found": projectLoopFound,
  "haaniya-online-education": projectHaaniya,
  "st-brittos-academy": projectBrittos,
  "digital-horizon-conclave": projectDhc,
};

const ProjectCaseStudy = () => {
  const { projectSlug } = useParams();
  const project = projectPages.find((item) => item.slug === projectSlug);
  if (!project) return <Navigate to="/404" replace />;
  const path = `/projects/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name} website`,
    description: `${project.summary} ${project.client}`,
    url: `https://www.loopfound.in${path}`,
    genre: project.type,
    creator: { "@id": ORGANIZATION_ID },
    image: projectImages[project.slug] ? `https://www.loopfound.in${projectImages[project.slug]}` : undefined,
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
      <section className="container grid gap-12 px-4 pb-20 sm:px-6 md:grid-cols-2 md:pb-28"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The client</p><h2 className="adko-display mt-4 text-4xl">WHO IS {project.name.toUpperCase()}?</h2><p className="mt-6 text-lg leading-relaxed text-[#f7f7f4]/75">{project.client}</p></div><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The brief</p><h2 className="adko-display mt-4 text-4xl">WHAT DID THE SITE NEED TO DO?</h2><p className="mt-6 text-lg leading-relaxed text-[#f7f7f4]/75">{project.challenge}</p></div></section>
      <section className="bg-[#f7f7f4] px-4 py-20 text-[#151515] sm:px-6 md:py-28"><div className="container"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">What we delivered</p><h2 className="adko-display mt-4 text-5xl">WHAT DID WE BUILD?</h2><ul className="mt-10 grid gap-4 md:grid-cols-2">{project.delivered.map((item) => <li key={item} className="border-b border-black/15 pb-4 text-lg leading-relaxed">{item}</li>)}</ul><p className="mt-10 text-base text-[#4b4b4b]"><strong className="text-[#151515]">Built with:</strong> {project.stack}</p></div></section>
      <section className="bg-[#f7f7f4] px-4 py-20 text-[#151515] sm:px-6 md:py-28"><div className="container grid gap-12 md:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Project scope</p><h2 className="adko-display mt-4 text-5xl">WHAT WE WORKED ON.</h2></div><ul className="grid gap-3">{project.services.map((service) => <li key={service} className="border-b border-black/15 py-5 text-xl font-bold">{service}</li>)}</ul></div></section>
      <section className="container px-4 py-20 sm:px-6 md:py-28"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="vg-btn vg-btn--primary inline-flex items-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground"><span className="inline-flex items-center gap-3">Visit live website <ArrowUpRight size={18} /></span></a></section>
    </main>
    <Footer />
  </div>;
};

export default ProjectCaseStudy;
