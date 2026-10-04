import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { servicePages } from "@/data/seoPages";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = servicePages.find((item) => item.slug === serviceSlug);
  if (!service) return <Navigate to="/404" replace />;

  const path = `/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://www.loopfound.in${path}`,
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    provider: { "@type": "Organization", name: "Loop Found", url: "https://www.loopfound.in" },
  };

  return <div className="min-h-screen bg-[#f7f7f4] text-[#151515]">
    <SEOHead title={service.title} description={service.description} path={path} />
    <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path }]} />
    <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <Navbar />
    <main id="main-content" className="pt-32">
      <section className="container px-4 pb-20 pt-10 sm:px-6 md:pb-28">
        <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]"><ArrowLeft size={15} /> All services</Link>
        <p className="mt-16 text-xs font-bold uppercase tracking-[.22em] text-primary">{service.name} / Chennai</p>
        <h1 className="adko-display mt-5 max-w-6xl text-[clamp(4rem,10vw,9rem)] leading-[.82] tracking-[-.04em]">{service.headline}</h1>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#4b4b4b] md:text-2xl">{service.intro}</p>
      </section>
      <section className="bg-[#151515] px-4 py-20 text-[#f7f7f4] sm:px-6 md:py-28">
        <div className="container grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">What this includes</p><h2 className="adko-display mt-4 text-5xl leading-[.88]">CLEAR WORK.<br />USEFUL OUTPUT.</h2></div>
          <ul className="grid gap-4">{service.points.map((point) => <li key={point} className="flex items-center gap-3 border-b border-white/15 py-5 text-lg"><CheckCircle2 className="shrink-0 text-primary" size={20} />{point}</li>)}</ul>
        </div>
      </section>
      <section className="container px-4 py-20 sm:px-6 md:py-28"><p className="max-w-2xl text-lg leading-relaxed">Need {service.name.toLowerCase()} for a business in Chennai, Tamil Nadu, or elsewhere in India? Tell us what the website needs to achieve.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold">Discuss your project <ArrowUpRight size={18} /></Link></section>
    </main>
    <Footer />
  </div>;
};

export default ServiceDetail;
